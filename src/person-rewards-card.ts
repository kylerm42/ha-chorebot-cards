import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

// Import shared utilities
import {
  HomeAssistant,
  HassEntity,
  PersonProfile,
  Reward,
  Progress,
  ChoreBotPersonRewardsConfig,
} from "./utils/types.js";
import {
  extractColorVariants,
  playStarShower,
} from "./utils/confetti-utils.js";
import {
  getPointsDisplayParts,
  getPointsTermLowercase,
} from "./utils/points-display-utils.js";
import { getPersonName, getAllPeople } from "./utils/person-display-utils.js";
import {
  renderPersonDropdown,
  detectDefaultPerson,
} from "./utils/person-dropdown-utils.js";
import {
  calculateColorShades,
  resolveAccentColor,
  ColorShades,
} from "./utils/color-utils.js";
import {
  filterTasksByPerson,
  calculateDatedTasksProgress,
} from "./utils/task-utils.js";

// ============================================================================
// ChoreBot Person Rewards Card (TypeScript)
// ============================================================================

/**
 * ChoreBot Person Rewards Card
 *
 * Combines person selection dropdown with rewards list view.
 * Features:
 * - Person dropdown with avatar/initials display
 * - Auto-detection of default person (logged-in user or first alphabetically)
 * - Rewards list filtered by selected person
 * - Task progress tracking for selected person
 * - Click reward card to open confirmation modal
 * - "Add Reward" placeholder card
 * - Create/edit reward modals with form fields
 * - Confetti animation on successful redemption
 */
@customElement("chorebot-person-rewards-card")
export class ChoreBotPersonRewardsCard extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private _config?: ChoreBotPersonRewardsConfig;
  @state() private _selectedPersonId: string = "";
  @state() private _dropdownOpen = false;
  @state() private _progress: Progress | undefined;
  @state() private _redeeming: string | null = null; // reward_id being redeemed
  @state() private _showConfirmModal: boolean = false; // Show redemption confirmation
  @state() private _showAddRewardModal: boolean = false; // Show add reward modal
  @state() private _showEditRewardModal: boolean = false; // Show edit reward modal
  @state() private _pendingRedemption: {
    personId: string;
    rewardId: string;
  } | null = null; // Pending redemption details
  @state() private _rewardFormData: {
    name: string;
    cost: number;
    icon: string;
    description: string;
  } = {
    name: "",
    cost: 50,
    icon: "mdi:gift",
    description: "",
  }; // Reward form data for ha-form
  @state() private _editingRewardId: string | null = null;

  // Cached color shades for performance
  private shades: ColorShades = {
    lighter: "",
    light: "",
    base: "",
    dark: "",
    darker: "",
  };

  private _rewardFormSchema = [
    { name: "name", required: true, selector: { text: {} } },
    { name: "cost", required: true, selector: { number: { min: 1, max: 10000, mode: "box" } } },
    { name: "icon", selector: { icon: {} } },
    { name: "description", selector: { text: { multiline: true } } },
  ];

  static styles = css`
    :host {
      display: block;
      /* HA Dialog styling */
      --mdc-dialog-content-ink-color: var(--primary-text-color);
      --mdc-dialog-heading-ink-color: var(--primary-text-color);
      --mdc-dialog-max-width: 400px;
      /* HA Form field styling */
      --mdc-text-field-outlined-idle-border-color: var(--divider-color);
      --mdc-text-field-outlined-hover-border-color: var(--primary-color);
      --mdc-theme-primary: var(--primary-color);
      --mdc-text-field-fill-color: var(--card-background-color);
      --mdc-text-field-ink-color: var(--primary-text-color);
      --mdc-text-field-label-ink-color: var(--primary-text-color);
    }

    /* Make ha-card wrapper completely transparent */
    ha-card {
      background: transparent !important;
      box-shadow: none !important;
      border: none !important;
      padding: 0;
    }

    ha-dialog {
      --mdc-dialog-min-width: min(500px, 90vw);
    }

    ha-form {
      display: block;
    }

    /* Card Container with Gap */
    .card-container {
      display: flex;
      flex-direction: column;
      gap: 20px; /* Spacing between person and rewards sections */
    }

    /* Person Dropdown Styles - Shared with person-dropdown-utils.ts */
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
      border-radius: var(--ha-card-border-radius, 12px)
        var(--ha-card-border-radius, 12px) 0 0;
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
      border-radius: var(--ha-card-border-radius, 12px)
        var(--ha-card-border-radius, 12px) 0 0;
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
      border-radius: 0 0 var(--ha-card-border-radius, 12px)
        var(--ha-card-border-radius, 12px);
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
      background: linear-gradient(
        135deg,
        var(--primary-color),
        var(--accent-color, var(--primary-color))
      );
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

    /* Rewards Section - Always transparent */
    .rewards-section {
      background: transparent;
      box-shadow: none;
      padding: 0;
      position: relative;
      z-index: 1;
    }

    /* Rewards Grid - From rewards-card.ts */
    .rewards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
    }

    .reward-card {
      border-radius: 12px;
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      display: flex;
      flex-direction: row;
      overflow: hidden;
      cursor: pointer;
      transition: filter 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
      min-height: 80px;
      height: 80px;
    }

    .reward-card.no-background {
      background: transparent;
      box-shadow: none;
      /* Keep border - DO NOT remove it */
      border: 1px solid var(--divider-color);
    }

    .reward-card:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .reward-card.no-background:hover {
      box-shadow: none;
    }

    .reward-card.disabled {
      opacity: 0.6;
    }

    .reward-icon-section {
      flex-shrink: 0;
      width: 80px;
      background: var(--accent-color, var(--primary-color));
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .reward-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .reward-icon ha-icon {
      --mdc-icon-size: 36px;
    }

    .reward-info {
      flex: 1;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      min-width: 0;
    }

    .reward-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      line-height: 1;
    }

    .reward-name {
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
      line-height: 1;
    }

    .reward-cost {
      font-size: 20px;
      font-weight: bold;
      color: var(--accent-color, var(--primary-color));
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      line-height: 1;
    }

    .reward-cost ha-icon {
      --mdc-icon-size: 16px;
      display: flex;
    }

    .reward-description {
      font-size: 13px;
      color: var(--secondary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.3;
    }

    /* Add Reward Card */
    .add-reward-card {
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

    .add-reward-card:hover {
      border-color: var(--button-border-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .add-reward-icon-section {
      flex-shrink: 0;
      width: 80px;
      background: color-mix(in srgb, var(--divider-color) 50%, transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .add-reward-card:hover .add-reward-icon-section {
      background: var(--button-hover-bg);
    }

    .add-reward-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-reward-card:hover .add-reward-icon {
      color: var(--button-hover-color);
    }

    .add-reward-icon ha-icon {
      --mdc-icon-size: 36px;
    }

    .add-reward-info {
      flex: 1;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-reward-text {
      font-size: 18px;
      font-weight: 500;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
    }

    .add-reward-card:hover .add-reward-text {
      color: var(--button-hover-color);
    }

    /* Modal Overlay */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal-content {
      background: var(--card-background-color);
      border-radius: 12px;
      padding: 24px;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      max-height: 90vh;
      overflow-y: auto;
    }

    .modal-header {
      position: relative; /* For absolute positioning of edit button */
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 16px;
      color: var(--primary-text-color);
    }

    .edit-button {
      position: absolute;
      top: -8px;
      right: -8px;
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--primary-text-color);
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      transition: all 0.2s;
    }

    .edit-button:hover {
      opacity: 1;
      background: var(--secondary-background-color);
    }

    .edit-button ha-icon {
      --mdc-icon-size: 20px;
    }

    .modal-body {
      margin-bottom: 24px;
      color: var(--primary-text-color);
    }

    /* Confirmation Modal Info */
    .modal-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
      background: var(--secondary-background-color);
      border-radius: 8px;
      margin-top: 12px;
    }

    .modal-info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-info-label {
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    .modal-info-value {
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .modal-info-value ha-icon {
      --mdc-icon-size: 14px;
      display: flex;
    }

    /* Modal Actions (used by confirmation modal only) */
    .modal-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    .modal-button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .modal-button.cancel {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }

    .modal-button.cancel:hover {
      background: var(--divider-color);
    }

    .modal-button.confirm {
      background: var(--modal-confirm-bg, var(--accent-color, var(--primary-color)));
      color: white;
    }

    .modal-button.confirm:hover {
      background: var(--modal-confirm-hover-bg, var(--modal-confirm-bg, var(--accent-color, var(--primary-color))));
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .modal-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .modal-button:disabled:hover {
      transform: none;
      box-shadow: none;
    }

    .empty-state {
      text-align: center;
      padding: 32px;
      color: var(--secondary-text-color);
    }

    .error-state {
      text-align: center;
      padding: 32px;
      color: var(--error-color);
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
    }
  `;

  setConfig(config: ChoreBotPersonRewardsConfig) {
    if (!config.type) {
      throw new Error("type is required");
    }

    this._config = {
      type: "custom:chorebot-person-rewards-card",
      show_progress: config.show_progress !== false,
      hide_rewards_background: config.hide_rewards_background === true,
      show_disabled_rewards: config.show_disabled_rewards === true,
      sort_by: config.sort_by || "cost",
      show_add_reward_button: config.show_add_reward_button !== false,
      accent_color: config.accent_color || "",
      progress_text_color: config.progress_text_color || "",
      default_person_entity: config.default_person_entity || "",
    };
  }

  static getStubConfig() {
    return {
      type: "custom:chorebot-person-rewards-card",
      default_person_entity: "",
      show_progress: true,
      hide_rewards_background: false,
      show_disabled_rewards: false,
      sort_by: "cost",
      show_add_reward_button: true,
      accent_color: "",
      progress_text_color: "",
    };
  }

  static getConfigForm() {
    return {
      schema: [
        {
          name: "default_person_entity",
          selector: {
            entity: {
              filter: { domain: "person" },
            },
          },
        },
        {
          name: "show_progress",
          default: true,
          selector: { boolean: {} },
        },
        {
          name: "hide_rewards_background",
          default: false,
          selector: { boolean: {} },
        },
        {
          name: "show_disabled_rewards",
          default: false,
          selector: { boolean: {} },
        },
        {
          name: "sort_by",
          default: "cost",
          selector: {
            select: {
              options: [
                { label: "Cost (Low to High)", value: "cost" },
                { label: "Name (A-Z)", value: "name" },
                { label: "Date Created (Oldest First)", value: "created" },
              ],
            },
          },
        },
        {
          name: "show_add_reward_button",
          default: true,
          selector: { boolean: {} },
        },
        {
          name: "accent_color",
          selector: { text: {} },
        },
        {
          name: "progress_text_color",
          selector: { text: {} },
        },
      ],
      computeLabel: (schema: any) => {
        const labels: { [key: string]: string } = {
          default_person_entity: "Default Person",
          show_progress: "Show Progress Bar",
          hide_rewards_background: "Hide Rewards Tile Backgrounds",
          show_disabled_rewards: "Show Disabled Rewards",
          sort_by: "Sort Rewards By",
          show_add_reward_button: "Show Add Reward Button",
          accent_color: "Accent Color",
          progress_text_color: "Progress Text Color",
        };
        return labels[schema.name] || undefined;
      },
      computeHelper: (schema: any) => {
        const helpers: { [key: string]: string } = {
          default_person_entity:
            "Override auto-detected person. Leave empty to auto-detect logged-in user or use first person alphabetically.",
          show_progress:
            "Display progress bar showing completed/total tasks for selected person",
          hide_rewards_background:
            "Hide individual reward tile backgrounds for a seamless look",
          show_disabled_rewards:
            "Include rewards that have been disabled in the grid",
          sort_by: "Choose how to sort the rewards in the grid",
          show_add_reward_button:
            "Show the 'Add Reward' card for creating new rewards",
          accent_color:
            "Override accent color (hex code or CSS variable). By default inherits from person's profile.",
          progress_text_color:
            "Text color for progress label (hex code or CSS variable)",
        };
        return helpers[schema.name] || undefined;
      },
    };
  }

  willUpdate(changedProperties: Map<string, any>) {
    // Phase 1: Initial person detection
    if (changedProperties.has("hass") && this._selectedPersonId === "") {
      this._selectedPersonId = detectDefaultPerson(
        this.hass!,
        this._config?.default_person_entity
      );
    }

    // Phase 2: Color shade recalculation
    if (
      (changedProperties.has("_config") ||
        changedProperties.has("_selectedPersonId")) &&
      this._config
    ) {
      const baseColor = resolveAccentColor(
        this.hass!,
        this._config.accent_color,
        this._selectedPersonId
      );
      this.shades = calculateColorShades(baseColor);
    }

    // Phase 3: Calculate task progress for selected person
    if (
      changedProperties.has("hass") ||
      changedProperties.has("_selectedPersonId")
    ) {
      this._progress = this._computeProgress();
    }
  }

  render() {
    if (!this.hass || !this._config) {
      return html`<ha-card><div class="empty-state">Loading...</div></ha-card>`;
    }

    // Get points sensor entity
    const sensor = this.hass.states["sensor.chorebot_points"];
    if (!sensor) {
      return html`<ha-card>
        <div class="error-state">
          ChoreBot Points sensor not found. Make sure the integration is set up.
        </div>
      </ha-card>`;
    }

    // If no person detected, show error message
    if (!this._selectedPersonId) {
      return html`
        <ha-card>
          <div class="error-state">
            Please select a person. No people found with ChoreBot access.
          </div>
        </ha-card>
      `;
    }

    // Get available people for dropdown
    const allPeople = this._getAvailablePeople();
    const showProgress = this._config.show_progress ?? true;

    return html`
      <ha-card>
        <div class="card-container">
          <!-- Person Dropdown Section -->
          <div
            class="person-section ${this._dropdownOpen ? "dropdown-open" : ""}"
          >
            ${renderPersonDropdown(
              this.hass,
              this._selectedPersonId,
              this._dropdownOpen,
              allPeople,
              showProgress,
              this._progress,
              this.shades,
              this._config.progress_text_color,
              () => this._toggleDropdown(),
              (personId) => this._selectPerson(personId),
              false // Person section always has background
            )}
          </div>

          <!-- Rewards List Section -->
          <div class="rewards-section">
            ${this._renderRewardsList()}
          </div>
        </div>

        <!-- Modals -->
        ${this._showConfirmModal ? this._renderConfirmModal() : ""}
        ${this._showAddRewardModal ? this._renderAddRewardModal() : ""}
        ${this._showEditRewardModal ? this._renderEditRewardModal() : ""}
      </ha-card>
    `;
  }

  /**
   * Compute progress for selected person (for progress bar)
   * Uses same logic as person-grouped-card: today's tasks only, dated tasks only
   */
  private _computeProgress(): Progress {
    // Get all ChoreBot todo entities
    const allStates = Object.values(this.hass!.states);
    const todoEntities = allStates.filter((e) =>
      e.entity_id.startsWith("todo.chorebot_")
    ) as HassEntity[];

    // Filter tasks assigned to this person (excludes dateless by default)
    const personTasks = filterTasksByPerson(
      todoEntities,
      this._selectedPersonId,
      false // Don't include dateless
    );

    // Calculate progress for dated tasks only
    return calculateDatedTasksProgress(personTasks);
  }

  /**
   * Get available people for dropdown
   */
  private _getAvailablePeople(): PersonProfile[] {
    return getAllPeople(this.hass!);
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

  /**
   * Render rewards list filtered by selected person
   */
  private _renderRewardsList() {
    const sensor = this.hass?.states["sensor.chorebot_points"];
    const rewards = sensor?.attributes.rewards || [];
    const people = sensor?.attributes.people || {};

    // Filter rewards by selected person
    const personRewards = rewards.filter(
      (r: Reward) => r.person_id === this._selectedPersonId
    );

    // Filter by enabled/disabled
    const filteredRewards = personRewards.filter(
      (r: Reward) => this._config!.show_disabled_rewards || r.enabled
    );

    // Sort rewards
    const sortedRewards = this._sortRewards(filteredRewards);

    // Get person's balance
    const person = people[this._selectedPersonId];

    if (
      sortedRewards.length === 0 &&
      !this._config!.show_add_reward_button
    ) {
      return html`<div class="empty-state">
        No rewards configured yet. Use the "Add Reward" button or
        <code>chorebot.manage_reward</code> service to create rewards.
      </div>`;
    }

    return html`
      <div class="rewards-grid">
        ${sortedRewards.map((reward: Reward) =>
          this._renderRewardCard(reward, person)
        )}
        ${this._config!.show_add_reward_button
          ? this._renderAddRewardCard()
          : ""}
      </div>
    `;
  }

  private _renderRewardCard(reward: Reward, person: any | undefined) {
    const canAfford = person ? person.points_balance >= reward.cost : false;
    const isDisabled = !reward.enabled || !canAfford;
    const parts = getPointsDisplayParts(this.hass!);
    const hideBackground = this._config?.hide_rewards_background ?? false;

    // Apply person accent color to reward cards
    const iconBg = `#${this.shades.base}`;
    const costColor = `#${this.shades.base}`;

    return html`
      <div
        class="reward-card ${isDisabled ? "disabled" : ""} ${hideBackground
          ? "no-background"
          : ""}"
        @click="${() => this._handleRewardClick(reward, canAfford)}"
      >
        <div class="reward-icon-section" style="background: ${iconBg};">
          <div class="reward-icon">
            <ha-icon icon="${reward.icon}"></ha-icon>
          </div>
        </div>
        <div class="reward-info">
          <div class="reward-header">
            <div class="reward-name">${reward.name}</div>
            <div class="reward-cost" style="color: ${costColor};">
              ${reward.cost}
              ${parts.icon ? html`<ha-icon icon="${parts.icon}"></ha-icon>` : ""}
              ${parts.text ? parts.text : ""}
            </div>
          </div>
          ${reward.description
            ? html`<div class="reward-description">${reward.description}</div>`
            : ""}
        </div>
      </div>
    `;
  }

  private _renderAddRewardCard() {
    // Use the same color shades as the rest of the card
    const borderColor = `#${this.shades.light}`;
    const hoverBg = `color-mix(in srgb, #${this.shades.light} 20%, var(--card-background-color))`;
    const hoverColor = `#${this.shades.light}`;

    return html`
      <div
        class="add-reward-card"
        style="--button-border-color: ${borderColor}; --button-hover-bg: ${hoverBg}; --button-hover-color: ${hoverColor};"
        @click="${this._openAddRewardModal}"
      >
        <div class="add-reward-icon-section">
          <div class="add-reward-icon">
            <ha-icon icon="mdi:plus"></ha-icon>
          </div>
        </div>
        <div class="add-reward-info">
          <div class="add-reward-text">Add Reward</div>
        </div>
      </div>
    `;
  }

  private _sortRewards(rewards: Reward[]): Reward[] {
    const sorted = [...rewards];
    switch (this._config!.sort_by) {
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "created":
        return sorted.sort(
          (a, b) =>
            new Date(a.created || 0).getTime() -
            new Date(b.created || 0).getTime()
        );
      case "cost":
      default:
        return sorted.sort((a, b) => a.cost - b.cost);
    }
  }

  private _handleRewardClick(reward: Reward, canAfford: boolean) {
    // Always open modal to show reward details (button will be disabled if can't redeem)
    this._pendingRedemption = {
      personId: this._selectedPersonId,
      rewardId: reward.id,
    };
    this._showConfirmModal = true;
  }

  private _renderConfirmModal() {
    if (!this._pendingRedemption || !this._config) return "";

    const sensor = this.hass?.states["sensor.chorebot_points"];
    const people = sensor?.attributes.people || {};
    const rewards = sensor?.attributes.rewards || [];

    const { personId, rewardId } = this._pendingRedemption;
    const person = people[personId];
    const reward = rewards.find((r: Reward) => r.id === rewardId);

    if (!person || !reward) return "";

    const personName = getPersonName(this.hass!, personId);
    const remainingPoints = person.points_balance - reward.cost;
    const canAfford = person.points_balance >= reward.cost;
    const canRedeem = reward.enabled && canAfford;
    const parts = getPointsDisplayParts(this.hass!);

    // Apply person accent color to modal buttons
    const confirmBg = `#${this.shades.base}`;
    const confirmHoverBg = `#${this.shades.dark}`;

    return html`
      <div class="modal-overlay" @click="${this._cancelRedemption}">
        <div
          class="modal-content"
          style="--modal-confirm-bg: ${confirmBg}; --modal-confirm-hover-bg: ${confirmHoverBg};"
          @click="${(e: Event) => e.stopPropagation()}"
        >
          <div class="modal-header">
            ${canRedeem ? "Are you sure?" : "Reward Details"}
            <button
              class="edit-button"
              @click="${() => this._handleEditButtonClick(reward.id)}"
              title="Edit Reward"
            >
              <ha-icon icon="mdi:pencil"></ha-icon>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-info">
              <div class="modal-info-row">
                <span class="modal-info-label">Person:</span>
                <span class="modal-info-value">${personName}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Reward:</span>
                <span class="modal-info-value">${reward.name}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Cost:</span>
                <span class="modal-info-value"
                  >${reward.cost}
                  ${parts.icon
                    ? html`<ha-icon icon="${parts.icon}"></ha-icon>`
                    : ""}
                  ${parts.text ? parts.text : ""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Current Balance:</span>
                <span class="modal-info-value"
                  >${person.points_balance}
                  ${parts.icon
                    ? html`<ha-icon icon="${parts.icon}"></ha-icon>`
                    : ""}
                  ${parts.text ? parts.text : ""}</span
                >
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Remaining Balance:</span>
                <span
                  class="modal-info-value"
                  style="color: ${remainingPoints < 0
                    ? "var(--error-color)"
                    : "inherit"}"
                  >${remainingPoints}
                  ${parts.icon
                    ? html`<ha-icon icon="${parts.icon}"></ha-icon>`
                    : ""}
                  ${parts.text ? parts.text : ""}</span
                >
              </div>
              ${!reward.enabled
                ? html`<div
                    style="margin-top: 12px; color: var(--warning-color); font-size: 14px; text-align: center;"
                  >
                    This reward is currently disabled.
                  </div>`
                : ""}
              ${!canAfford
                ? html`<div
                    style="margin-top: 12px; color: var(--error-color); font-size: 14px; text-align: center;"
                  >
                    Not enough points to redeem this reward.
                  </div>`
                : ""}
            </div>
          </div>
          <div class="modal-actions">
            <button
              class="modal-button cancel"
              @click="${this._cancelRedemption}"
            >
              ${canRedeem ? "Cancel" : "Close"}
            </button>
            <button
              class="modal-button confirm"
              ?disabled="${!canRedeem}"
              @click="${this._confirmRedemption}"
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private _computeRewardFieldLabel = (schema: any): string => {
    const parts = getPointsDisplayParts(this.hass!);
    
    // Use only text for label (can't render icon in text field)
    const displayStr = parts.text 
      ? parts.text.charAt(0).toUpperCase() + parts.text.slice(1)
      : "Points";
    
    const labels: { [key: string]: string } = {
      name: "Name",
      cost: `Cost (${displayStr})`,
      icon: "Icon",
      description: "Description (Optional)",
    };
    return labels[schema.name] || schema.name;
  };

  private _computeRewardFieldHelper = (schema: any): string => {
    const parts = getPointsDisplayParts(this.hass!);
    
    // Use only text for helper (can't render icon in text field)
    const displayStr = parts.text || "points";
    
    const helpers: { [key: string]: string } = {
      cost: `Cost between 1 and 10,000 ${displayStr}`,
      icon: "Use Material Design Icons (e.g., mdi:gift, mdi:ice-cream)",
    };
    return helpers[schema.name] || "";
  };

  private _handleRewardFormChange = (ev: CustomEvent) => {
    this._rewardFormData = ev.detail.value;
  };

  private _renderAddRewardModal() {
    if (!this._config) return "";

    return html`
      <ha-dialog
        open
        @closed=${this._closeAddRewardModal}
        heading="Add New Reward"
      >
        <ha-form
          .hass=${this.hass}
          .schema=${this._rewardFormSchema}
          .data=${this._rewardFormData}
          .computeLabel=${this._computeRewardFieldLabel}
          .computeHelper=${this._computeRewardFieldHelper}
          @value-changed=${this._handleRewardFormChange}
        ></ha-form>

        <ha-button
          slot="primaryAction"
          @click=${this._createReward}
          ?disabled=${!this._rewardFormData.name?.trim()}
        >
          Create
        </ha-button>
        <ha-button slot="secondaryAction" @click=${this._closeAddRewardModal}>
          Cancel
        </ha-button>
      </ha-dialog>
    `;
  }

  private _renderEditRewardModal() {
    if (!this._config) return "";

    return html`
      <ha-dialog
        open
        @closed=${this._closeEditRewardModal}
        heading="Edit Reward"
      >
        <ha-form
          .hass=${this.hass}
          .schema=${this._rewardFormSchema}
          .data=${this._rewardFormData}
          .computeLabel=${this._computeRewardFieldLabel}
          .computeHelper=${this._computeRewardFieldHelper}
          @value-changed=${this._handleRewardFormChange}
        ></ha-form>

        <ha-button
          slot="secondaryAction"
          @click=${this._deleteReward}
          class="delete-button"
        >
          Delete
        </ha-button>
        
        <ha-button slot="secondaryAction" @click=${this._closeEditRewardModal}>
          Cancel
        </ha-button>
        
        <ha-button
          slot="primaryAction"
          @click=${this._updateReward}
          ?disabled=${!this._rewardFormData.name?.trim()}
        >
          Save
        </ha-button>
        
        <style>
          .delete-button {
            --mdc-theme-primary: var(--error-color, #db4437);
            --mdc-button-outline-color: var(--error-color, #db4437);
            --mdc-theme-on-primary: white;
            --wa-color-fill-loud: var(--error-color, #db4437);
            --wa-color-neutral-fill-loud: var(--error-color, #db4437);
            background-color: var(--error-color, #db4437);
            color: white;
            position: absolute;
            left: 16px;
          }
        </style>
      </ha-dialog>
    `;
  }

  private _cancelRedemption() {
    this._showConfirmModal = false;
    this._pendingRedemption = null;
  }

  private async _confirmRedemption() {
    if (!this._pendingRedemption) return;

    const { personId, rewardId } = this._pendingRedemption;

    // Close modal
    this._showConfirmModal = false;
    this._pendingRedemption = null;

    // Set redeeming state
    this._redeeming = rewardId;

    try {
      await this.hass!.callService("chorebot", "redeem_reward", {
        person_id: personId,
        reward_id: rewardId,
      });

      // Show success animation (star shower with themed colors)
      this._showRedemptionSuccess();
    } catch (err: any) {
      // Show error message
      const errorMessage =
        err.message || "Failed to redeem reward. Please try again.";
      alert(errorMessage);
    } finally {
      this._redeeming = null;
    }
  }

  private _showRedemptionSuccess() {
    // Get base color from accent color (fallback to primary color)
    const baseColor =
      this._config!.accent_color ||
      getComputedStyle(this).getPropertyValue("--primary-color") ||
      "#03a9f4";

    // Extract color variants (lighter and darker shades)
    const colors = extractColorVariants(baseColor);

    // Play star shower animation
    playStarShower(colors, 3000);
  }

  private _openAddRewardModal() {
    // Reset form and prefill person_id
    this._rewardFormData = {
      name: "",
      cost: 50,
      icon: "mdi:gift",
      description: "",
    };
    this._showAddRewardModal = true;
  }

  private _closeAddRewardModal() {
    this._showAddRewardModal = false;
  }

  private async _createReward() {
    if (!this._config) return;

    const { name, cost, icon, description } = this._rewardFormData;

    if (!name.trim()) {
      alert("Reward name is required");
      return;
    }

    try {
      await this.hass!.callService("chorebot", "manage_reward", {
        name: name.trim(),
        cost: Math.max(1, Math.min(10000, cost)), // Clamp between 1 and 10000
        icon: icon || "mdi:gift",
        description: description.trim(),
        person_id: this._selectedPersonId, // Prefill with selected person
      });

      // Close modal
      this._closeAddRewardModal();
    } catch (err: any) {
      // Show error message
      const errorMessage =
        err.message || "Failed to create reward. Please try again.";
      alert(errorMessage);
    }
  }

  private _openEditRewardModal(rewardId: string) {
    if (!this.hass) return;

    // Find reward in sensor attributes
    const sensor = this.hass.states["sensor.chorebot_points"];
    if (!sensor) return;

    const rewards = sensor.attributes.rewards || [];
    const reward = rewards.find((r: Reward) => r.id === rewardId);

    if (!reward) {
      alert("Reward not found");
      return;
    }

    // Populate form with existing reward data
    this._rewardFormData = {
      name: reward.name,
      cost: reward.cost,
      icon: reward.icon,
      description: reward.description || "",
    };

    this._editingRewardId = rewardId;
    this._showEditRewardModal = true;
  }

  private _closeEditRewardModal() {
    this._showEditRewardModal = false;
    this._editingRewardId = null;
    // Reset form to defaults
    this._rewardFormData = {
      name: "",
      cost: 50,
      icon: "mdi:gift",
      description: "",
    };
  }

  private _handleEditButtonClick(rewardId: string) {
    // Close redemption modal
    this._showConfirmModal = false;
    this._pendingRedemption = null;

    // Open edit modal
    this._openEditRewardModal(rewardId);
  }

  private async _updateReward() {
    if (!this._config || !this._editingRewardId) return;

    const { name, cost, icon, description } = this._rewardFormData;

    if (!name.trim()) {
      alert("Reward name is required");
      return;
    }

    try {
      await this.hass!.callService("chorebot", "manage_reward", {
        reward_id: this._editingRewardId, // Key difference from _createReward
        name: name.trim(),
        cost: Math.max(1, Math.min(10000, cost)),
        icon: icon || "mdi:gift",
        description: description.trim(),
        person_id: this._selectedPersonId,
      });

      // Close modal
      this._closeEditRewardModal();
    } catch (err: any) {
      const errorMessage =
        err.message || "Failed to update reward. Please try again.";
      alert(errorMessage);
    }
  }

  private async _deleteReward() {
    if (!this._config || !this._editingRewardId) return;

    if (!confirm("Delete this reward? This action cannot be undone.")) {
      return;
    }

    try {
      await this.hass!.callService("chorebot", "delete_reward", {
        reward_id: this._editingRewardId,
      });

      // Close modal
      this._closeEditRewardModal();
    } catch (err: any) {
      const errorMessage =
        err.message || "Failed to delete reward. Please try again.";
      alert(errorMessage);
    }
  }

  getCardSize() {
    return 3;
  }
}

// Register card with Home Assistant
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
  type: "chorebot-person-rewards-card",
  name: "ChoreBot Person Rewards Card",
  description:
    "Combined person selector and rewards list card with progress tracking",
  preview: true,
});

console.info(
  "%c CHOREBOT-PERSON-REWARDS-CARD %c v1.0.0",
  "color: white; background: #3498db; font-weight: bold;",
  "color: #3498db; background: white; font-weight: bold;"
);
