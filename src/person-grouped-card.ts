import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

// Import shared utilities
import {
  HomeAssistant,
  HassEntity,
  Task,
  EditingTask,
  ChoreBotBaseConfig,
  Section,
  GroupState,
  PersonProfile,
} from "./utils/types.js";
import {
  filterTodayTasks,
  calculateProgress,
  calculateDatedTasksProgress,
  groupTasksByTag,
  sortTagGroups,
  filterAndGroupTasks,
  sortGroups,
  filterTasksByPerson,
} from "./utils/task-utils.js";
import {
  formatRelativeDate,
  isOverdue,
  parseUTCToLocal,
} from "./utils/date-utils.js";
import { buildRrule, parseRrule } from "./utils/rrule-utils.js";
import {
  prepareTaskForEditing,
  renderTaskDialog,
} from "./utils/dialog-utils.js";
import {
  calculateColorShades,
  ColorShades,
  resolveAccentColor,
} from "./utils/color-utils.js";
import { getPointsDisplayParts } from "./utils/points-display-utils.js";
import {
  playCompletionBurst,
  playFireworks,
  playStarShower,
  playPointsAnimation,
} from "./utils/confetti-utils.js";
import {
  renderPersonAvatar,
  renderPersonPoints,
  getPersonName,
  getPersonProfile,
  getAllPeople,
  detectCurrentUserPerson,
} from "./utils/person-display-utils.js";
import { renderProgressBar } from "./utils/progress-bar-utils.js";
import { renderPointsBadge } from "./utils/points-badge-utils.js";

// Card-specific config interface
interface ChoreBotPersonGroupedConfig extends ChoreBotBaseConfig {
  type: "custom:chorebot-person-grouped-card";
  entity: string; // Required - todo entity (e.g., todo.chorebot_family_tasks)

  // Person Selection
  default_person_entity?: string; // Default person to show (overrides auto-detection)
  show_all_people?: boolean; // Default: false - show all people OR only people with tasks

  // Display Options
  title?: string; // Card title (default: person's name)
  show_title?: boolean; // Show title bar (default: true)
  show_progress?: boolean; // Show progress bar in person display (default: true)
  hide_person_background?: boolean; // Hide person section background (default: false)
  hide_tasks_background?: boolean; // Hide tasks section background (default: false)

  // Task View Options (inherited from grouped-card)
  show_dateless_tasks?: boolean; // Include dateless tasks (default: true)
  show_future_tasks?: boolean; // Show "Upcoming" section (default: false)
  show_points?: boolean; // Show points badges on tasks (default: true)
  show_add_task_button?: boolean; // Show add task button (default: true)
  untagged_header?: string; // Header for untagged tasks (default: "Untagged")
  tag_group_order?: string[]; // Custom tag ordering

  // Styling (inherited from both cards)
  accent_color?: string; // Override accent color
  task_text_color?: string; // Task text color (default: white)
  progress_text_color?: string; // Progress text color (for person section)

  // Section filtering (from grouped-card)
  filter_section_id?: string; // Optional section filter (in addition to person filter)
}

// ============================================================================
// ChoreBot Person Grouped Card (TypeScript)
// ============================================================================

/**
 * ChoreBot Person Grouped Card
 *
 * Combines person selection dropdown with tag-based grouped task view.
 * Features:
 * - Person dropdown with avatar/initials display
 * - Auto-detection of default person (logged-in user or first with tasks)
 * - Tag-based task grouping filtered by selected person
 * - Progress tracking for selected person
 * - Inherits all grouped-card task management features
 */
@customElement("chorebot-person-grouped-card")
export class ChoreBotPersonGroupedCard extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private _config?: ChoreBotPersonGroupedConfig;
  @state() private _selectedPersonId: string = "";
  @state() private _dropdownOpen = false;
  @state() private _groups: GroupState[] = [];
  @state() private _editDialogOpen = false;
  @state() private _editingTask: EditingTask | null = null;
  @state() private _saving = false;

  // Cached color shades for performance (recalculated when config changes)
  private shades: ColorShades = {
    lighter: "",
    light: "",
    base: "",
    dark: "",
    darker: "",
  };

  private shadesArray: string[] = [];

  static styles = css`
    :host {
      display: block;
    }

    /* Card Container with Gap */
    .card-container {
      display: flex;
      flex-direction: column;
      gap: 20px; /* Spacing between sections like separate cards */
    }

    /* Person Section Container */
    .person-section {
      background: var(--card-background-color);
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
      position: relative;
      z-index: 2;
      transition: border-radius 0.3s ease;
    }

    .person-section.no-background {
      background: transparent;
      box-shadow: none;
    }
    
    .person-section.dropdown-open {
      border-radius: var(--ha-card-border-radius, 12px) var(--ha-card-border-radius, 12px) 0 0;
    }

    /* Tasks Section Container */
    .tasks-section {
      background: transparent;
      box-shadow: none;
      padding: 0;
      position: relative;
      z-index: 1;
    }

    /* Person Display Header (matches person-points-card) */
    .person-header {
      cursor: pointer;
      transition: filter 0.2s ease, border-radius 0.3s ease;
      user-select: none;
      padding: 16px;
      position: relative;
      z-index: 2;
      background: var(--card-background-color);
      border-radius: var(--ha-card-border-radius, 12px);
    }
    
    .dropdown-open .person-header {
      border-radius: var(--ha-card-border-radius, 12px) var(--ha-card-border-radius, 12px) 0 0;
    }

    .person-header:hover {
      filter: brightness(1.05);
    }

    .person-header:active {
      filter: brightness(0.95);
    }

    .person-container {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .person-left {
      flex-shrink: 0;
    }

    .person-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
    }

    .person-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      line-height: 1;
    }

    .person-name {
      font-size: 24px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
      line-height: 1;
    }

    .person-points-and-chevron {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .person-points {
      font-size: 24px;
      font-weight: bold;
      color: var(--primary-color);
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 4px;
      line-height: 1;
    }

    .person-points ha-icon {
      --mdc-icon-size: 20px;
      display: flex;
    }

    .dropdown-chevron {
      --mdc-icon-size: 20px;
      transition: transform 0.3s ease;
      color: var(--secondary-text-color);
    }

    .dropdown-chevron.open {
      transform: rotate(180deg);
    }

    /* Person Dropdown */
    .person-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--card-background-color);
      border-radius: 0 0 var(--ha-card-border-radius, 12px) var(--ha-card-border-radius, 12px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s ease;
      overflow: hidden;
      z-index: 1;
    }

    .person-dropdown.open {
      grid-template-rows: 1fr;
    }

    .person-dropdown-inner {
      overflow: hidden;
      max-height: 400px;
    }
    
    .person-dropdown.open .person-dropdown-inner {
      overflow-y: auto;
    }

    .person-dropdown-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      transition: filter 0.2s ease;
      border-bottom: 1px solid var(--divider-color);
      background: var(--card-background-color);
    }
    
    .person-dropdown-item:last-child {
      border-bottom: none;
    }

    .person-dropdown-item:hover {
      filter: brightness(1.1);
    }

    .person-dropdown-item.selected {
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }

    .person-dropdown-info {
      flex: 1;
      min-width: 0;
    }

    .person-dropdown-name {
      font-size: 16px;
      font-weight: 500;
    }

    .person-dropdown-points {
      font-size: 14px;
      opacity: 0.7;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .person-dropdown-points ha-icon {
      --mdc-icon-size: 14px;
      display: flex;
    }

    /* Person Avatar Styling */
    .person-avatar {
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .person-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .person-avatar.initials {
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color, var(--primary-color)));
      color: white;
      font-weight: 600;
    }

    /* Progress Bar (matches person-points-card) */
    .progress-bar {
      position: relative;
      border-radius: 12px;
      height: 24px;
      overflow: hidden;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      width: 100%;
    }

    .progress-bar-fill {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      transition: width 0.3s ease;
      border-radius: 12px;
    }

    .progress-text {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      z-index: 1;
    }

    /* Error Message */
    .error-message {
      padding: 16px;
      text-align: center;
      color: var(--error-color);
      font-size: 14px;
    }

    /* Empty State */
    .empty-state {
      text-align: center;
      padding: 32px;
      color: var(--secondary-text-color);
    }

    /* Tag Group Container */
    .tag-groups {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .tag-group-container {
      border-radius: var(--ha-card-border-radius, 12px);
      overflow: hidden;
      border: 1px solid var(--divider-color);
      transition: border-radius 0.3s ease;
    }

    .tag-group-container.collapsed {
      border-radius: var(--ha-card-border-radius, 12px);
    }

    /* Remove border when hide_tasks_background is enabled */
    .tasks-section.no-background .tag-group-container {
      border: none;
    }

    /* Tag Group Header Bar */
    .tag-group-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      font-weight: 500;
      font-size: 24px;
      cursor: pointer;
      user-select: none;
      transition:
        filter 0.2s ease,
        border-bottom 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .tag-group-header::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: var(--darker-color);
      width: var(--progress-width, 0%);
      transition: width 0.3s ease;
      z-index: 0;
    }

    .tag-group-header.collapsed {
      border-bottom: none;
    }

    .tag-group-header:active {
      filter: brightness(0.9);
    }

    .tag-group-header-title {
      flex: 1;
      text-transform: capitalize;
      position: relative;
      z-index: 1;
    }

    .tag-group-header-progress {
      font-weight: 400;
      opacity: 0.8;
      position: relative;
      z-index: 1;
    }

    /* Tag Group Tasks (rows, not separate cards) */
    .tag-group-tasks {
      display: grid;
      grid-template-rows: 1fr;
      transition:
        grid-template-rows 0.3s ease,
        opacity 0.3s ease;
      opacity: 1;
    }

    .tag-group-tasks.collapsed {
      grid-template-rows: 0fr;
      opacity: 0;
    }

    .tag-group-tasks-inner {
      overflow: hidden;
    }

    .todo-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      cursor: pointer;
      transition: filter 0.2s ease;
      border-bottom: 1px solid var(--divider-color);
    }

    .todo-item:last-child {
      border-bottom: none;
    }

    .todo-item:hover {
      filter: brightness(1.1);
    }

    .todo-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .todo-summary {
      font-size: 20px;
      font-weight: 400;
      word-wrap: break-word;
      line-height: 1.3;
    }

    .todo-due-date {
      font-size: 14px;
      font-weight: normal;
      opacity: 0.9;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .points-badge {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: bold;
      white-space: nowrap;
      opacity: 0.9;
    }

    .points-badge ha-icon {
      --mdc-icon-size: 12px;
      display: flex;
    }

    .points-badge.bonus-pending {
      background: linear-gradient(135deg, #ffd700, #ffa500) !important;
      border: 1px solid currentColor !important;
      animation: glow 2s ease-in-out infinite;
      box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
    }

    @keyframes glow {
      0%,
      100% {
        opacity: 0.9;
      }
      50% {
        opacity: 1;
      }
    }

    .recurring-icon {
      --mdc-icon-size: 14px;
      margin-right: 4px;
      vertical-align: middle;
      line-height: 1;
      display: inline-flex;
      align-items: center;
    }

    .completion-circle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    .completion-circle ha-icon {
      --mdi-icon-size: 28px;
    }

    /* Add Task Button */
    .add-task-button-container {
      margin-top: 16px;
    }

    .add-task-card {
      border-radius: 12px;
      background: var(--card-background-color);
      border: 2px dashed var(--divider-color);
      display: flex;
      flex-direction: row;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s ease;
      min-height: 80px;
      height: 80px;
    }

    .add-task-card:hover {
      border-color: var(--button-border-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .add-task-icon-section {
      flex-shrink: 0;
      width: 80px;
      background: color-mix(in srgb, var(--divider-color) 50%, transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .add-task-card:hover .add-task-icon-section {
      background: var(--button-hover-bg);
    }

    .add-task-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-task-card:hover .add-task-icon {
      color: var(--button-hover-color);
    }

    .add-task-icon ha-icon {
      --mdc-icon-size: 36px;
    }

    .add-task-info {
      flex: 1;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-task-text {
      font-size: 18px;
      font-weight: 500;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-task-card:hover .add-task-text {
      color: var(--button-hover-color);
    }

    ha-dialog {
      --mdc-dialog-min-width: min(500px, 90vw);
    }

    /* Responsive: Smaller elements on mobile */
    @media (max-width: 600px) {
      .person-header {
        padding: 12px;
      }

      .person-left .person-avatar {
        width: 48px;
        height: 48px;
      }

      .person-left .person-avatar.initials {
        font-size: 18px;
      }

      .person-name {
        font-size: 20px;
      }

      .person-points {
        font-size: 20px;
      }

      .person-points ha-icon {
        --mdc-icon-size: 18px;
      }

      .dropdown-chevron {
        --mdc-icon-size: 18px;
      }

      .person-dropdown-inner {
        max-height: 300px;
      }

      .tag-group-header {
        font-size: 20px;
        padding: 10px 14px;
      }

      .todo-summary {
        font-size: 18px;
      }
    }
  `;

  setConfig(config: ChoreBotPersonGroupedConfig) {
    if (!config.entity) {
      throw new Error("You must specify an entity (todo list)");
    }

    // Validate entity format
    if (!config.entity.startsWith("todo.")) {
      throw new Error("Entity must be a todo list (todo.*)");
    }

    this._config = {
      show_title: true,
      show_progress: true,
      show_dateless_tasks: true,
      show_future_tasks: false,
      show_points: true,
      show_add_task_button: true,
      show_all_people: false,
      hide_person_background: false,
      hide_tasks_background: false,
      untagged_header: "Untagged",
      ...config,
    };
  }

  static getStubConfig() {
    return {
      type: "custom:chorebot-person-grouped-card",
      entity: "",
      default_person_entity: "",
      show_all_people: false,
      show_progress: true,
      show_title: true,
      hide_person_background: false,
      hide_tasks_background: false,
      accent_color: "",
      show_dateless_tasks: true,
      show_future_tasks: false,
      show_points: true,
      show_add_task_button: true,
      untagged_header: "Untagged",
      tag_group_order: [],
      filter_section_id: "",
    };
  }

  static getConfigForm() {
    return {
      schema: [
        {
          name: "entity",
          required: true,
          selector: {
            entity: {
              filter: { domain: "todo" },
            },
          },
        },
        {
          name: "default_person_entity",
          selector: {
            entity: {
              filter: { domain: "person" },
            },
          },
        },
        {
          name: "show_all_people",
          default: false,
          selector: { boolean: {} },
        },
        {
          name: "show_progress",
          default: true,
          selector: { boolean: {} },
        },
        {
          name: "show_title",
          default: true,
          selector: { boolean: {} },
        },
        {
          name: "show_dateless_tasks",
          default: true,
          selector: { boolean: {} },
        },
        {
          name: "show_future_tasks",
          default: false,
          selector: { boolean: {} },
        },
        {
          name: "show_points",
          default: true,
          selector: { boolean: {} },
        },
        {
          name: "show_add_task_button",
          default: true,
          selector: { boolean: {} },
        },
        {
          name: "filter_section_id",
          selector: { text: {} },
        },
        {
          name: "hide_person_background",
          default: false,
          selector: { boolean: {} },
        },
        {
          name: "hide_tasks_background",
          default: false,
          selector: { boolean: {} },
        },
        {
          name: "accent_color",
          selector: { text: {} },
        },
        {
          name: "task_text_color",
          selector: { text: {} },
        },
        {
          name: "progress_text_color",
          selector: { text: {} },
        },
        {
          name: "untagged_header",
          default: "Untagged",
          selector: { text: {} },
        },
        {
          name: "tag_group_order",
          selector: {
            select: {
              multiple: true,
              custom_value: true,
              options: [],
            },
          },
        },
      ],
      computeLabel: (schema: any) => {
        const labels: { [key: string]: string } = {
          entity: "Todo Entity",
          default_person_entity: "Default Person",
          show_all_people: "Show All People",
          show_progress: "Show Progress Bar",
          show_title: "Show Title",
          show_dateless_tasks: "Show Tasks Without Due Date",
          show_future_tasks: "Show Future Tasks",
          show_points: "Show Points Badges",
          show_add_task_button: "Show Add Task Button",
          filter_section_id: "Filter by Section",
          hide_person_background: "Hide Person Background",
          hide_tasks_background: "Hide Tasks Background",
          accent_color: "Accent Color",
          task_text_color: "Task Text Color",
          progress_text_color: "Progress Text Color",
          untagged_header: "Untagged Tasks Header",
          tag_group_order: "Tag Display Order",
        };
        return labels[schema.name] || undefined;
      },
      computeHelper: (schema: any) => {
        const helpers: { [key: string]: string } = {
          entity: "Select the ChoreBot todo entity to display",
          default_person_entity:
            "Override auto-detected person. Leave empty to auto-detect logged-in user or use first person alphabetically.",
          show_all_people:
            "Show all people in dropdown, or only people with tasks in this list",
          show_progress:
            "Display progress bar showing completed/total tasks for selected person",
          show_title: "Show the person's name as card title",
          show_dateless_tasks: "Show tasks that do not have a due date",
          show_future_tasks:
            "Show tasks with future due dates in a collapsible 'Upcoming' section (collapsed by default)",
          show_points: "Display points badges on task items",
          show_add_task_button:
            "Show the 'Add Task' button below tag groups for creating new tasks",
          filter_section_id:
            'Additional section filter (e.g., "Morning Routine"). Leave empty to show all sections for selected person.',
          hide_person_background:
            "Hide the person section background and shadow for a seamless look",
          hide_tasks_background:
            "Hide the tasks section background and shadow for a seamless look",
          accent_color:
            "Override accent color for person display and tag headers (hex code or CSS variable). By default inherits from person's profile.",
          task_text_color:
            "Text color for task items (hex code or CSS variable)",
          progress_text_color:
            "Text color for progress label (hex code or CSS variable)",
          untagged_header:
            'Header text for tasks without tags (default: "Untagged")',
          tag_group_order:
            "Order to display tag groups. Tags not listed will appear alphabetically after these.",
        };
        return helpers[schema.name] || undefined;
      },
    };
  }

  willUpdate(changedProperties: Map<string, any>) {
    // Phase 3: Initial person detection
    if (changedProperties.has("hass") && this._selectedPersonId === "") {
      // First load - detect default person
      
      // 1. Try auto-detect logged-in user
      let detectedPerson = detectCurrentUserPerson(this.hass!);
      
      // 2. Fallback to config default
      if (!detectedPerson && this._config!.default_person_entity) {
        detectedPerson = this._config!.default_person_entity;
      }
      
      // 3. Fallback to first person alphabetically
      if (!detectedPerson) {
        const allPeople = getAllPeople(this.hass!);
        if (allPeople.length > 0) {
          // Sort by entity_id and pick first
          const sorted = allPeople.sort((a, b) => 
            a.entity_id.localeCompare(b.entity_id)
          );
          detectedPerson = sorted[0].entity_id;
        }
      }
      
      // 4. If still no person detected, leave as empty string
      this._selectedPersonId = detectedPerson || "";
    }

    // Phase 3: Color shade recalculation when config or person changes
    if ((changedProperties.has("_config") || changedProperties.has("_selectedPersonId")) && this._config) {
      const baseColor = resolveAccentColor(
        this.hass!,
        this._config.accent_color,
        this._selectedPersonId
      );
      
      this.shades = calculateColorShades(baseColor);
      this.shadesArray = [
        this.shades.lighter,
        this.shades.light,
        this.shades.base,
        this.shades.dark,
        this.shades.darker,
      ];
    }

    // Phase 4: Rebuild groups when hass, config, or person changes
    if (changedProperties.has("hass") || changedProperties.has("_config") || changedProperties.has("_selectedPersonId")) {
      this._updateGroups();
    }
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    // If no person detected, show error message
    if (!this._selectedPersonId) {
      return html`
        <ha-card>
          <div class="error-message">
            Please select a person. No people found with ChoreBot access.
          </div>
        </ha-card>
      `;
    }

    return html`
      <div class="card-container">
        <div class="person-section ${this._config.hide_person_background ? 'no-background' : ''} ${this._dropdownOpen ? 'dropdown-open' : ''}">
          ${this._renderPersonDisplay()}
          ${this._renderPersonDropdown()}
        </div>

        <div class="tasks-section ${this._config.hide_tasks_background ? 'no-background' : ''}">
          ${this._renderGroupedTasks()}
        </div>
      </div>

      ${this._renderEditDialog()}
    `;
  }

  /**
   * Render person display header (collapsed state)
   */
  private _renderPersonDisplay() {
    const personId = this._selectedPersonId;
    const personProfile = personId ? getPersonProfile(this.hass!, personId) : null;
    
    // Determine accent color (precedence: config > person profile > theme)
    let baseColor = "var(--primary-color)";
    if (personProfile?.accent_color) {
      baseColor = personProfile.accent_color;
    }
    if (this._config!.accent_color) {
      baseColor = this._config!.accent_color;
    }
    
    return html`
      <div 
        class="person-header"
        @click=${this._toggleDropdown}
      >
        <div class="person-container">
          <div class="person-left">
            ${renderPersonAvatar(this.hass!, personId, personProfile!, 64)}
          </div>
          <div class="person-info">
            <div class="person-header-row">
              <div class="person-name">${getPersonName(this.hass!, personId)}</div>
              <div class="person-points-and-chevron">
                ${renderPersonPoints(personProfile!, this.hass!, baseColor)}
                <ha-icon 
                  icon="mdi:chevron-down" 
                  class="dropdown-chevron ${this._dropdownOpen ? 'open' : ''}"
                ></ha-icon>
              </div>
            </div>
            ${this._config!.show_progress ? this._renderProgressBar() : ''}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render person dropdown (expanded state)
   */
  private _renderPersonDropdown() {
    const people = this._getAvailablePeople();
    
    return html`
      <div class="person-dropdown ${this._dropdownOpen ? 'open' : ''}">
        <div class="person-dropdown-inner">
          ${people.map(person => {
            const isSelected = person.entity_id === this._selectedPersonId;
            const pointsDisplay = getPointsDisplayParts(this.hass!);
            
            return html`
              <div 
                class="person-dropdown-item ${isSelected ? 'selected' : ''}"
                @click=${() => this._selectPerson(person.entity_id)}
              >
                ${renderPersonAvatar(this.hass!, person.entity_id, person, 40)}
                <div class="person-dropdown-info">
                  <div class="person-dropdown-name">
                    ${getPersonName(this.hass!, person.entity_id)}
                  </div>
                  <div class="person-dropdown-points">
                    ${person.points_balance}
                    ${pointsDisplay.icon ? html`<ha-icon icon="${pointsDisplay.icon}"></ha-icon>` : ''}
                    ${pointsDisplay.text}
                  </div>
                </div>
                ${isSelected ? html`<ha-icon icon="mdi:check"></ha-icon>` : ''}
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  /**
   * Get available people for dropdown
   */
  private _getAvailablePeople(): PersonProfile[] {
    const allPeople = getAllPeople(this.hass!);
    
    // If config says show all, return all
    if (this._config!.show_all_people) {
      return allPeople;
    }
    
    // Otherwise, filter to people who have tasks in this entity
    const entity = this.hass?.states[this._config!.entity];
    const tasks = entity?.attributes.chorebot_tasks || [];
    
    const peopleWithTasks = new Set<string>();
    for (const task of tasks) {
      if (task.computed_person_id) {
        peopleWithTasks.add(task.computed_person_id);
      }
    }
    
    return allPeople.filter(p => peopleWithTasks.has(p.entity_id));
  }

  /**
   * Render progress bar (optional)
   * Uses same logic as person-points-card: today's tasks only (due today + overdue), dated tasks only
   */
  private _renderProgressBar() {
    // Get all ChoreBot todo entities
    const allStates = Object.values(this.hass!.states);
    const todoEntities = allStates.filter((e) =>
      e.entity_id.startsWith("todo.chorebot_"),
    ) as HassEntity[];
    
    // Filter tasks assigned to this person (excludes dateless by default)
    const personTasks = filterTasksByPerson(
      todoEntities,
      this._selectedPersonId,
      false, // Don't include dateless
    );
    
    // Calculate progress for dated tasks only
    const progress = calculateDatedTasksProgress(personTasks);
    
    return renderProgressBar(
      progress,
      this.shades,
      this._config?.progress_text_color
    );
  }

  /**
   * Toggle dropdown open/closed
   */
  private _toggleDropdown() {
    this._dropdownOpen = !this._dropdownOpen;
  }

  /**
   * Select a person from dropdown
   */
  private _selectPerson(personId: string) {
    this._selectedPersonId = personId;
    this._dropdownOpen = false; // Close dropdown after selection
  }

  // ============================================================================
  // Phase 4: Task Grouping & Filtering
  // ============================================================================

  /**
   * Update groups with person filtering
   */
  private _updateGroups() {
    if (!this.hass || !this._config) return;

    const entity = this.hass.states[this._config.entity];
    if (!entity) return;

    // Use shared utility from task-utils.ts with person filter
    let newGroups = filterAndGroupTasks(
      entity,
      this._config.show_dateless_tasks !== false,
      this._config.show_future_tasks === true,
      this._config.untagged_header || "Untagged",
      "Upcoming",
      this._config.filter_section_id,
      this._selectedPersonId, // Person filter
    );

    // Sort groups
    newGroups = sortGroups(
      newGroups,
      this._config.tag_group_order,
      this._config.untagged_header,
      "Upcoming",
    );

    // Preserve collapse state from existing groups
    this._groups = newGroups.map((newGroup) => ({
      ...newGroup,
      isCollapsed: this._findExistingCollapseState(newGroup.name),
    }));
  }

  /**
   * Find existing collapse state for a group
   */
  private _findExistingCollapseState(groupName: string): boolean {
    const existing = this._groups.find((g) => g.name === groupName);
    if (existing !== undefined) return existing.isCollapsed;
    // Default: Upcoming starts collapsed, others start expanded
    return groupName === "Upcoming";
  }

  // ============================================================================
  // Phase 4: Grouped Task View Rendering
  // ============================================================================

  private _renderGroupedTasks() {
    if (this._groups.length === 0) {
      return html`<div class="empty-state">No tasks for this person</div>`;
    }

    return html`
      <div class="tag-groups">
        ${this._renderAllGroups(this._groups)}
      </div>
      ${this._config!.show_add_task_button ? this._renderAddTaskButton() : ""}
    `;
  }

  private _renderAllGroups(groups: GroupState[]) {
    return groups.map((group) => {
      const progress = calculateProgress(group.tasks);
      const textColor = this._config!.task_text_color || "white";

      const isCollapsed = group.isCollapsed;
      const allComplete = progress.completed === progress.total;
      const showCheckmark = isCollapsed && allComplete;

      // Calculate progress percentage for progress bar
      const progressPercent =
        progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;

      return html`
        <div class="tag-group-container ${isCollapsed ? "collapsed" : ""}">
          <div
            class="tag-group-header ${isCollapsed ? "collapsed" : ""}"
            style="background: #${this.shades
              .light}; color: ${textColor}; --progress-width: ${progressPercent}%; --darker-color: #${this
              .shades.dark};"
            @click=${() => this._toggleGroup(group.name)}
          >
            <div class="tag-group-header-title">${group.name}</div>
            <div class="tag-group-header-progress">
              ${showCheckmark
                ? html`<ha-icon
                    icon="mdi:check"
                    style="color: ${textColor}; --mdi-icon-size: 20px;"
                  ></ha-icon>`
                : html`${progress.completed}/${progress.total}`}
            </div>
          </div>
          <div class="tag-group-tasks ${isCollapsed ? "collapsed" : ""}">
            <div class="tag-group-tasks-inner">
              ${this._renderTasks(group.tasks, textColor)}
            </div>
          </div>
        </div>
      `;
    });
  }

  private _renderTasks(tasks: Task[], textColor: string) {
    return tasks.map((task) => {
      const isCompleted = task.status === "completed";

      // Task styling based on completion
      // When hide_tasks_background is enabled, incomplete tasks are transparent
      const taskBgColor = isCompleted 
        ? `#${this.shades.base}` 
        : (this._config?.hide_tasks_background ? "transparent" : "var(--card-background-color)");
      const taskTextColor = isCompleted
        ? textColor
        : "var(--primary-text-color)";

      // Completion circle styling
      const circleBgColor = isCompleted
        ? `#${this.shades.dark}`
        : "transparent";
      const circleIconColor = isCompleted ? "white" : "var(--divider-color)";
      const circleBorder = isCompleted
        ? "none"
        : `2px solid var(--divider-color)`;

      return html`
        <div
          class="todo-item"
          style="background: ${taskBgColor}; color: ${taskTextColor};"
          @click=${() => this._openEditDialog(task)}
        >
          <div class="todo-content">
            <div class="todo-summary">${task.summary}</div>
            ${task.due || task.points_value || task.parent_uid
              ? html`<div
                  class="todo-due-date"
                  style="color: ${isOverdue(task)
                    ? "var(--error-color)"
                    : "inherit"}"
                >
                  ${task.due
                    ? formatRelativeDate(new Date(task.due), task)
                    : ""}
                  ${task.parent_uid
                    ? html`<ha-icon
                        icon="mdi:sync"
                        class="recurring-icon"
                      ></ha-icon>`
                    : ""}
                  ${this._renderPointsBadge(task)}
                </div>`
              : ""}
          </div>
          <div
            class="completion-circle"
            style="background: ${circleBgColor}; border: ${circleBorder};"
            @click=${(e: Event) => this._handleCompletionClick(e, task)}
          >
            <ha-icon
              icon="mdi:check"
              style="color: ${circleIconColor};"
            ></ha-icon>
          </div>
        </div>
      `;
    });
  }

  private _renderPointsBadge(task: Task) {
    const entity = this.hass?.states[this._config!.entity];
    const templates = entity?.attributes.chorebot_templates || [];
    const textColor = this._config!.task_text_color || "white";

    return renderPointsBadge(
      task,
      templates,
      this.shades,
      this.hass!,
      this._config?.show_points !== false,
      textColor
    );
  }

  private _renderAddTaskButton() {
    if (!this._config?.show_add_task_button) {
      return html``;
    }

    // Use the same color shades as the rest of the card
    const borderColor = `#${this.shades.light}`;
    const hoverBg = `color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`;
    const hoverColor = `#${this.shades.light}`;

    return html`
      <div
        class="add-task-button-container"
        style="--button-border-color: ${borderColor}; --button-hover-bg: ${hoverBg}; --button-hover-color: ${hoverColor};"
      >
        <div class="add-task-card" @click="${this._openAddTaskDialog}">
          <div class="add-task-icon-section">
            <div class="add-task-icon">
              <ha-icon icon="mdi:plus"></ha-icon>
            </div>
          </div>
          <div class="add-task-info">
            <div class="add-task-text">Add Task</div>
          </div>
        </div>
      </div>
    `;
  }

  // ============================================================================
  // Phase 4: Group Collapse/Expand
  // ============================================================================

  private _toggleGroup(groupName: string) {
    // Find the group and toggle its isCollapsed state
    const group = this._groups.find((g) => g.name === groupName);
    if (group) {
      group.isCollapsed = !group.isCollapsed;
      this.requestUpdate();
    }
  }

  // ============================================================================
  // Phase 4: Task Completion Handlers
  // ============================================================================

  private async _toggleTask(
    task: Task,
    confettiOrigin?: { x: number; y: number },
  ) {
    const newStatus =
      task.status === "completed" ? "needs_action" : "completed";

    await this.hass!.callService("todo", "update_item", {
      entity_id: this._config!.entity,
      item: task.uid,
      status: newStatus,
    });

    // Play confetti animations when completing a task
    if (newStatus === "completed" && confettiOrigin) {
      // Play completion burst with themed colors
      playCompletionBurst(confettiOrigin, this.shadesArray);
    }
  }

  private _handleCompletionClick(e: Event, task: Task) {
    e.stopPropagation();

    // Capture the position NOW before the async call
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const origin = {
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
    };

    this._toggleTask(task, origin);
  }

  // ============================================================================
  // Phase 4: Edit Dialog Logic
  // ============================================================================

  private _openEditDialog(task: Task) {
    if (!this.hass || !this._config?.entity) return;
    const entity = this.hass.states[this._config.entity];
    if (!entity) return;
    const templates = entity.attributes.chorebot_templates || [];
    this._editingTask = prepareTaskForEditing(task, templates);
    this._editDialogOpen = true;
  }

  private _closeEditDialog() {
    this._editDialogOpen = false;
    this._editingTask = null;
  }

  private _renderEditDialog() {
    // Get sections and tags from entity attributes
    const entity = this.hass?.states[this._config!.entity];
    const sections = entity?.attributes.chorebot_sections || [];
    const availableTags = entity?.attributes.chorebot_tags || [];

    return renderTaskDialog(
      this._editDialogOpen,
      this._editingTask,
      this.hass!,
      sections,
      availableTags,
      this._saving,
      () => this._closeEditDialog(),
      (ev: CustomEvent) => this._formValueChanged(ev),
      () => this._saveTask(),
      () => this._handleDeleteTask(),
    );
  }

  private _formValueChanged(ev: CustomEvent) {
    const updatedValues = ev.detail.value;

    this._editingTask = {
      ...this._editingTask!,
      ...updatedValues,
    };

    if (
      "has_due_date" in updatedValues ||
      "is_all_day" in updatedValues ||
      "has_recurrence" in updatedValues ||
      "recurrence_frequency" in updatedValues
    ) {
      this.requestUpdate();
    }
  }

  private async _saveTask() {
    if (
      !this._editingTask ||
      !this._editingTask.summary?.trim() ||
      this._saving
    ) {
      return;
    }

    this._saving = true;

    const serviceData: any = {
      list_id: this._config!.entity,
      uid: this._editingTask.uid,
      summary: this._editingTask.summary.trim(),
    };

    if (this._editingTask.has_due_date && this._editingTask.due_date) {
      const isAllDay = !!this._editingTask.is_all_day;

      let dateTimeString: string;
      if (isAllDay || !this._editingTask.due_time) {
        dateTimeString = `${this._editingTask.due_date}T00:00:00`;
      } else {
        const timeStr =
          this._editingTask.due_time.split(":").length === 3
            ? this._editingTask.due_time
            : `${this._editingTask.due_time}:00`;
        dateTimeString = `${this._editingTask.due_date}T${timeStr}`;
      }

      const dateObj = new Date(dateTimeString);
      if (isNaN(dateObj.getTime())) {
        console.error("Invalid date/time combination:", dateTimeString);
        this._saving = false;
        return;
      }

      serviceData.due = dateObj.toISOString();
      serviceData.is_all_day = isAllDay;
    } else if (this._editingTask.has_due_date === false) {
      serviceData.due = "";
      serviceData.is_all_day = false;
    }

    if (this._editingTask.description) {
      serviceData.description = this._editingTask.description;
    }

    if (this._editingTask.section_id) {
      serviceData.section_id = this._editingTask.section_id;
    }

    // Handle tags
    if (this._editingTask.tags !== undefined) {
      serviceData.tags = this._editingTask.tags;
    }

    // Handle recurrence
    const rrule = buildRrule(this._editingTask);
    if (rrule !== null) {
      serviceData.rrule = rrule;
    } else if (this._editingTask.has_recurrence === false) {
      // User explicitly disabled recurrence, send empty string to clear it
      serviceData.rrule = "";
    }

    // Handle points fields
    if (this._editingTask.points_value !== undefined) {
      serviceData.points_value = this._editingTask.points_value;
    }
    if (this._editingTask.streak_bonus_points !== undefined) {
      serviceData.streak_bonus_points = this._editingTask.streak_bonus_points;
    }
    if (this._editingTask.streak_bonus_interval !== undefined) {
      serviceData.streak_bonus_interval =
        this._editingTask.streak_bonus_interval;
    }

    // For recurring task instances, always apply changes to future instances
    const isRecurringInstance = !!this._editingTask.parent_uid;
    if (isRecurringInstance) {
      serviceData.include_future_occurrences = true;
    }

    try {
      await this.hass!.callService("chorebot", "update_task", serviceData);
      this._closeEditDialog();
    } catch (error) {
      console.error("Error saving task:", error);
      alert("Failed to save task. Please try again.");
    } finally {
      this._saving = false;
    }
  }

  private async _handleDeleteTask() {
    if (!this._editingTask || this._saving) {
      return;
    }

    const task = this._editingTask;
    const isRecurring = task.has_recurrence || task.parent_uid;

    // Confirmation message based on task type
    const message = isRecurring
      ? "Delete this recurring task? This will remove all future occurrences, but keep completed instances."
      : "Delete this task? This action cannot be undone.";

    if (!confirm(message)) {
      return;
    }

    this._saving = true;

    try {
      // Call HA service to delete
      await this.hass!.callService("todo", "remove_item", {
        entity_id: this._config!.entity,
        item: task.uid,
      });

      // Close dialog
      this._closeEditDialog();
    } catch (error) {
      console.error("Error deleting task:", error);
      alert(`Failed to delete task: ${error}`);
    } finally {
      this._saving = false;
    }
  }

  // ============================================================================
  // Phase 4: Add Task Dialog Logic
  // ============================================================================

  private _openAddTaskDialog() {
    const entity = this.hass?.states[this._config!.entity];
    const sections = entity?.attributes.chorebot_sections || [];

    // Create a blank task with smart defaults (person-specific section)
    this._editingTask = this._createBlankTask(sections);
    this._editDialogOpen = true;
  }

  private _createBlankTask(sections: Section[]): EditingTask {
    let defaultSectionId: string | undefined;

    // Priority 1: Explicit section filter
    if (this._config!.filter_section_id) {
      // First try to find by ID
      let filtered = sections.find(
        (s) => s.id === this._config!.filter_section_id,
      );
      
      // If not found by ID, try by name (case-insensitive)
      if (!filtered) {
        filtered = sections.find(
          (s) =>
            s.name.toLowerCase() ===
            this._config!.filter_section_id!.toLowerCase(),
        );
      }
      
      if (filtered) {
        defaultSectionId = filtered.id;
      }
    }

    // Priority 2: Person's assigned section (NEW: prioritize selected person)
    if (!defaultSectionId && this._selectedPersonId) {
      const personSection = sections.find(
        (s) => s.person_id === this._selectedPersonId,
      );
      
      if (personSection) {
        defaultSectionId = personSection.id;
      }
    }

    // Priority 3: First section (highest sort_order)
    if (!defaultSectionId && sections.length > 0) {
      defaultSectionId = sections.sort(
        (a: Section, b: Section) => b.sort_order - a.sort_order,
      )[0].id;
    }

    return {
      uid: "",
      summary: "",
      status: "needs_action",
      has_due_date: false,
      is_all_day: false,
      due_date: undefined,
      due_time: undefined,
      description: "",
      section_id: defaultSectionId,
      tags: [],
      has_recurrence: false,
      recurrence_frequency: "DAILY",
      recurrence_interval: 1,
      recurrence_byweekday: [],
      recurrence_bymonthday: 1,
      points_value: 0,
      streak_bonus_points: 0,
      streak_bonus_interval: 0,
    };
  }

  getCardSize() {
    return 3;
  }
}

// Register card with Home Assistant's card picker
declare global {
  interface Window {
    customCards: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
    }>;
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "chorebot-person-grouped-card",
  name: "ChoreBot Person Grouped Card",
  description: "Person-filtered tag-based grouped task view with progress tracking",
  preview: true,
});

console.info(
  "%c CHOREBOT-PERSON-GROUPED-CARD %c v0.1.0 ",
  "color: white; background: #9C27B0; font-weight: bold;",
  "color: #9C27B0; background: white; font-weight: bold;",
);
