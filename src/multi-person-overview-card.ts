import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";

// Import shared utilities
import {
  HomeAssistant,
  HassEntity,
  Task,
  ChoreBotMultiPersonOverviewConfig,
} from "./utils/types.js";
import {
  filterTodayTasks,
  groupTasksByPerson,
} from "./utils/task-utils.js";
import { isOverdue } from "./utils/date-utils.js";
import { getPersonName } from "./utils/person-display-utils.js";

/**
 * ChoreBot Multi-Person Overview Card
 *
 * Displays a vertical list of multiple people with their assigned tasks shown in
 * a simple, ungrouped format. Designed for quick family-wide status checks.
 *
 * Example Configuration:
 * ```yaml
 * type: custom:chorebot-multi-person-overview-card
 * entity: todo.chorebot_family_tasks
 * person_entities:
 *   - person.kyle
 *   - person.campbell
 *   - person.sarah
 * title: "Family Tasks Overview"
 * show_title: true
 * show_dateless_tasks: true
 * ```
 */
@customElement("chorebot-multi-person-overview-card")
export class ChoreBotMultiPersonOverviewCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: ChoreBotMultiPersonOverviewConfig;
  @state() private _groupedTasks: Map<string, Task[]> = new Map();

  /**
   * Set and validate card configuration
   * Note: Accepts empty config for preview mode - validation happens in visual editor
   */
  public setConfig(config: ChoreBotMultiPersonOverviewConfig): void {
    // Set configuration with defaults (don't throw errors - let preview render)
    this.config = {
      ...config,
      entity: config.entity || "",
      person_entities: config.person_entities || [],
      hide_card_background: config.hide_card_background || false,
      show_dateless_tasks: config.show_dateless_tasks !== false, // Default: true
    };
  }

  /**
   * Lifecycle hook: Triggered when properties change
   * Processes tasks when entity updates
   */
  protected updated(changedProps: Map<string, any>): void {
    super.updated(changedProps);

    if (changedProps.has("hass") || changedProps.has("config")) {
      this._updateGroupedTasks();
    }
  }

  /**
   * Process and group tasks by person
   */
  private _updateGroupedTasks(): void {
    if (!this.hass || !this.config) return;

    // Handle empty entity gracefully (preview mode)
    if (!this.config.entity) {
      this._groupedTasks = new Map();
      return;
    }

    const entity = this.hass.states[this.config.entity];
    if (!entity) {
      this._groupedTasks = new Map();
      return;
    }

    // Handle empty person_entities gracefully (preview mode)
    if (!this.config.person_entities || this.config.person_entities.length === 0) {
      this._groupedTasks = new Map();
      return;
    }

    // Filter to today's tasks
    const filteredTasks = filterTodayTasks(
      entity,
      this.config.show_dateless_tasks,
      this.config.filter_section_id,
    );

    // Group by person
    this._groupedTasks = groupTasksByPerson(
      filteredTasks,
      this.config.person_entities,
    );
  }

  /**
   * Main render method
   */
  protected render(): TemplateResult {
    if (!this.hass || !this.config) {
      return html`<ha-card>
        <div class="card-content">Loading...</div>
      </ha-card>`;
    }

    // Show placeholder if entity not configured (preview mode)
    if (!this.config.entity) {
      return html`<ha-card>
        <div class="card-content">
          <div class="empty-state">
            Please configure a todo entity
          </div>
        </div>
      </ha-card>`;
    }

    // Show placeholder if no people configured (preview mode)
    if (!this.config.person_entities || this.config.person_entities.length === 0) {
      return html`<ha-card>
        <div class="card-content">
          <div class="empty-state">
            Please select at least one person
          </div>
        </div>
      </ha-card>`;
    }

    const cardClass = this.config.hide_card_background
      ? "no-background"
      : "";

    return html`
      <ha-card class="${cardClass}">
        <div class="card-content">
          ${this.config.person_entities.map((personId) =>
            this._renderPersonSection(personId),
          )}
        </div>
      </ha-card>
    `;
  }

  /**
   * Render a person section with their tasks
   */
  private _renderPersonSection(personId: string): TemplateResult {
    const tasks = this._groupedTasks.get(personId) || [];
    const personName = getPersonName(this.hass, personId);

    return html`
      <div class="person-section">
        <div class="person-header">${personName}</div>
        ${tasks.length > 0
          ? html`<div class="task-list">
              ${tasks.map((task) => this._renderTaskRow(task))}
            </div>`
          : html`<div class="empty-state">No tasks for today</div>`}
      </div>
    `;
  }

  /**
   * Render a single task row
   */
  private _renderTaskRow(task: Task): TemplateResult {
    const isCompleted = task.status === "completed";
    const isTaskOverdue = isOverdue(task);

    // Determine styling classes
    const classes = [
      "task-row",
      isCompleted ? "completed" : "",
      isTaskOverdue ? "overdue" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return html`
      <div class="${classes}">
        <span class="task-title">${task.summary}</span>
      </div>
    `;
  }



  /**
   * Component styles
   */
  static get styles() {
    return css`
      :host {
        display: block;
      }

      ha-card {
        overflow: hidden;
        padding: 16px;
      }

      ha-card.no-background {
        background: none;
        box-shadow: none;
      }

      .card-header {
        margin: -16px -16px 16px -16px;
        padding: 16px;
        border-bottom: 1px solid var(--divider-color);
      }

      .card-header .name {
        font-size: 24px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .card-content {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      /* Person Section Styles */
      .person-section {
        padding: 0;
      }

      .person-header {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      }

      /* Task List Styles */
      .task-list {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding-left: 20px;
      }

      .task-row {
        display: list-item;
        list-style-type: disc;
        padding: 2px 0;
        color: var(--secondary-text-color);
      }

      .task-row::marker {
        color: var(--secondary-text-color);
      }

      .task-title {
        font-size: 14px;
        color: var(--primary-text-color);
        line-height: 1.3;
      }

      /* Status Styling */
      .task-row.completed .task-title {
        text-decoration: line-through;
        opacity: 0.6;
      }

      .task-row.overdue .task-title {
        color: var(--error-color, #f44336);
        font-weight: 500;
      }

      /* Empty State */
      .empty-state {
        font-style: italic;
        color: var(--secondary-text-color);
        padding: 12px 0 0 0;
        text-align: center;
        opacity: 0.7;
      }

      /* Mobile Responsiveness */
      @media (max-width: 600px) {
        .card-header .name {
          font-size: 20px;
        }

        .person-header {
          font-size: 16px;
        }

        .task-title {
          font-size: 13px;
        }
      }
    `;
  }

  /**
   * Return card element height stub for HA layout system
   */
  public getCardSize(): number {
    const numPeople = this.config?.person_entities?.length || 0;
    const avgTasksPerPerson = 3; // Rough estimate
    return 1 + numPeople * (1 + avgTasksPerPerson * 0.5);
  }

  /**
   * Return stub config for card picker
   */
  public static getStubConfig(): ChoreBotMultiPersonOverviewConfig {
    return {
      type: "custom:chorebot-multi-person-overview-card",
      entity: "",
      person_entities: [],
      hide_card_background: false,
      show_dateless_tasks: true,
      filter_section_id: "",
    };
  }

  /**
   * Return config form schema for visual editor
   */
  public static getConfigForm() {
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
          name: "person_entities",
          required: true,
          selector: {
            entity: {
              multiple: true,
              filter: { domain: "person" },
            },
          },
        },
        {
          name: "hide_card_background",
          default: false,
          selector: { boolean: {} },
        },
        {
          name: "show_dateless_tasks",
          default: true,
          selector: { boolean: {} },
        },
        {
          name: "filter_section_id",
          selector: { text: {} },
        },
      ],
      computeLabel: (schema: any) => {
        const labels: { [key: string]: string } = {
          entity: "Todo Entity",
          person_entities: "People to Display",
          hide_card_background: "Hide Card Background",
          show_dateless_tasks: "Show Tasks Without Due Date",
          filter_section_id: "Filter by Section",
        };
        return labels[schema.name] || undefined;
      },
      computeHelper: (schema: any) => {
        const helpers: { [key: string]: string } = {
          entity: "Select the ChoreBot todo entity to display",
          person_entities:
            "Select the people whose tasks should appear in this card",
          hide_card_background:
            "Remove card background and shadow for a seamless look",
          show_dateless_tasks: "Include tasks that do not have a due date",
          filter_section_id:
            'Optional: Show only tasks from a specific section (e.g., "Morning Routine")',
        };
        return helpers[schema.name] || undefined;
      },
    };
  }
}

// Register card with Home Assistant's card picker
declare global {
  interface HTMLElementTagNameMap {
    "chorebot-multi-person-overview-card": ChoreBotMultiPersonOverviewCard;
  }
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
  type: "chorebot-multi-person-overview-card",
  name: "ChoreBot Multi-Person Overview Card",
  description:
    "Vertical list showing multiple people with their assigned tasks for quick family-wide status checks",
  preview: true,
});

console.info(
  "%c CHOREBOT-MULTI-PERSON-OVERVIEW-CARD %c v1.0.0 ",
  "color: white; background: #9C27B0; font-weight: bold;",
  "color: #9C27B0; background: white; font-weight: bold;"
);
