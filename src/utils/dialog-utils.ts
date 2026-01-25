// ============================================================================
// Dialog Utility Functions for ChoreBot Cards
// ============================================================================

import { html, TemplateResult } from "lit";
import {
  HomeAssistant,
  Task,
  EditingTask,
  Section,
  RecurringTemplate,
} from "./types.js";
import { parseUTCToLocal } from "./date-utils.js";
import { parseRrule } from "./rrule-utils.js";
import {
  getPointsTermCapitalized,
  getPointsTermLowercase,
} from "./points-display-utils.js";

/**
 * Prepare a task for editing by flattening custom fields and parsing dates/rrule
 * @param task - Task to prepare for editing
 * @param templates - Optional array of templates (for looking up recurring task templates)
 * @returns EditingTask with flattened fields
 */
export function prepareTaskForEditing(
  task: Task,
  templates?: RecurringTemplate[],
): EditingTask {
  const flatTask: EditingTask = {
    ...task,
    is_all_day: task.is_all_day || false,
    tags: task.tags || [],
    section_id: task.section_id,
    points_value: task.points_value || 0,
    streak_bonus_points: task.streak_bonus_points || 0,
    streak_bonus_interval: task.streak_bonus_interval || 0,
  };

  // Extract due date/time if present
  if (task.due) {
    const isAllDay = task.is_all_day || false;
    const parsed = parseUTCToLocal(task.due, isAllDay);
    flatTask.due_date = parsed.date ?? undefined;
    flatTask.due_time = parsed.time ?? undefined;
    flatTask.has_due_date = true;
  } else {
    flatTask.has_due_date = false;
  }

  // For recurring instances, look up the template to get rrule/dateless status and bonus fields
  let rruleToUse = task.rrule;
  let isDatelessRecurring = false;
  if (task.parent_uid && templates) {
    const template = templates.find((t) => t.uid === task.parent_uid);
    if (template) {
      rruleToUse = template.rrule;
      isDatelessRecurring = template.is_dateless_recurring || false;
      // Also use template's bonus fields if instance doesn't have them
      flatTask.streak_bonus_points = template.streak_bonus_points || 0;
      flatTask.streak_bonus_interval = template.streak_bonus_interval || 0;
    }
  }

  // Determine recurrence type
  if (isDatelessRecurring) {
    flatTask.recurrence_type = "on_completion";
    flatTask.has_recurrence = false; // For backwards compat
  } else if (rruleToUse) {
    flatTask.recurrence_type = "scheduled";
    flatTask.has_recurrence = true; // For backwards compat
  } else {
    flatTask.recurrence_type = "none";
    flatTask.has_recurrence = false;
  }

  // Parse existing rrule if present
  const parsedRrule = parseRrule(rruleToUse);

  if (parsedRrule) {
    flatTask.recurrence_frequency = parsedRrule.frequency!;
    flatTask.recurrence_interval = parsedRrule.interval;
    flatTask.recurrence_byweekday = parsedRrule.byweekday;
    flatTask.recurrence_bymonthday = parsedRrule.bymonthday || 1;
  } else {
    flatTask.recurrence_frequency = "DAILY";
    flatTask.recurrence_interval = 1;
    flatTask.recurrence_byweekday = [];
    flatTask.recurrence_bymonthday = 1;
  }

  return flatTask;
}

/**
 * Build the schema for the edit dialog form (split into sections)
 * @param task - Task being edited
 * @param sections - Available sections from entity
 * @param availableTags - Available tags from entity
 * @returns Object with separate schemas for each section
 */
export function buildEditDialogSchema(
  task: EditingTask,
  sections: Section[],
  availableTags: string[],
): {
  detailsSchema: any[];
  scheduleSchema: any[];
  pointsSchema: any[];
} {
  const hasDueDate =
    task.has_due_date !== undefined ? task.has_due_date : !!task.due;
  const isAllDay = task.is_all_day !== undefined ? task.is_all_day : false;
  const recurrenceType = task.recurrence_type || "none";
  const isRecurring = recurrenceType === "scheduled" || recurrenceType === "on_completion";

  // ============================================================================
  // Details Section
  // ============================================================================
  const detailsSchema: any[] = [
    {
      name: "summary",
      required: true,
      selector: { text: {} },
    },
    {
      name: "description",
      selector: { text: { multiline: true } },
    },
  ];

  // Add section dropdown if sections are available
  if (sections.length > 0) {
    detailsSchema.push({
      name: "section_id",
      selector: {
        select: {
          mode: "dropdown",
          options: sections
            .sort((a: Section, b: Section) => b.sort_order - a.sort_order)
            .map((section: Section) => ({
              label: section.name,
              value: section.id,
            })),
        },
      },
    });
  }

  // Add tags multi-select
  detailsSchema.push({
    name: "tags",
    selector: {
      select: {
        multiple: true,
        custom_value: true,
        options: availableTags.map((tag: string) => ({
          label: tag,
          value: tag,
        })),
      },
    },
  });

  // ============================================================================
  // Schedule Section
  // ============================================================================
  const scheduleSchema: any[] = [
    {
      name: "has_due_date",
      selector: { boolean: {} },
    },
  ];

  if (hasDueDate) {
    scheduleSchema.push({
      name: "due_date",
      selector: { date: {} },
    });

    scheduleSchema.push({
      name: "is_all_day",
      selector: { boolean: {} },
    });

    if (!isAllDay) {
      scheduleSchema.push({
        name: "due_time",
        selector: { time: {} },
      });
    }
  }

  // Add recurrence type selector (hide "On a schedule" if no due date)
  const recurrenceOptions = [
    { label: "None", value: "none" },
    { label: "On completion", value: "on_completion" },
  ];
  
  // Only show "On a schedule" option if task has a due date
  if (hasDueDate) {
    recurrenceOptions.splice(1, 0, { label: "On a schedule", value: "scheduled" });
  }
  
  scheduleSchema.push({
    name: "recurrence_type",
    label: "Repeat",
    selector: {
      select: {
        options: recurrenceOptions,
      },
    },
  });

  // If scheduled recurrence is selected AND task has due date, show recurrence pattern fields
  if (recurrenceType === "scheduled" && hasDueDate) {
    const recurrenceFrequency = task.recurrence_frequency || "DAILY";

    scheduleSchema.push({
      name: "recurrence_frequency",
      selector: {
        select: {
          options: [
            { label: "Daily", value: "DAILY" },
            { label: "Weekly", value: "WEEKLY" },
            { label: "Monthly", value: "MONTHLY" },
          ],
        },
      },
    });

    scheduleSchema.push({
      name: "recurrence_interval",
      selector: {
        number: {
          min: 1,
          max: 999,
          mode: "box",
        },
      },
    });

    // Frequency-specific fields
    if (recurrenceFrequency === "WEEKLY") {
      scheduleSchema.push({
        name: "recurrence_byweekday",
        selector: {
          select: {
            multiple: true,
            options: [
              { label: "Monday", value: "MO" },
              { label: "Tuesday", value: "TU" },
              { label: "Wednesday", value: "WE" },
              { label: "Thursday", value: "TH" },
              { label: "Friday", value: "FR" },
              { label: "Saturday", value: "SA" },
              { label: "Sunday", value: "SU" },
            ],
          },
        },
      });
    } else if (recurrenceFrequency === "MONTHLY") {
      scheduleSchema.push({
        name: "recurrence_bymonthday",
        selector: {
          number: {
            min: 1,
            max: 31,
            mode: "box",
          },
        },
      });
    }
  }

  // ============================================================================
  // Points Section
  // ============================================================================
  const pointsSchema: any[] = [
    {
      name: "points_value",
      selector: {
        number: {
          min: 0,
          max: 10000,
          mode: "box",
        },
      },
    },
  ];

  // Streak bonus fields (only for recurring tasks - scheduled OR on_completion)
  if (isRecurring) {
    pointsSchema.push({
      name: "streak_bonus_points",
      selector: {
        number: {
          min: 0,
          max: 10000,
          mode: "box",
        },
      },
    });

    // Label changes based on recurrence type
    const intervalLabel = recurrenceType === "on_completion" 
      ? "Bonus Every X Completions (0 = no bonus)"
      : "Bonus Every X Days (0 = no bonus)";

    pointsSchema.push({
      name: "streak_bonus_interval",
      label: intervalLabel,
      selector: {
        number: {
          min: 0,
          max: 999,
          mode: "box",
        },
      },
    });
  }

  return { detailsSchema, scheduleSchema, pointsSchema };
}

/**
 * Build the initial data object for the edit dialog form
 * @param task - Task being edited
 * @param sections - Available sections from entity
 * @returns Data object for form initialization
 */
export function buildEditDialogData(
  task: EditingTask,
  sections: Section[],
): any {
  const hasDueDate =
    task.has_due_date !== undefined ? task.has_due_date : !!task.due;
  const isAllDay = task.is_all_day !== undefined ? task.is_all_day : false;

  let dateValue = task.due_date || null;
  let timeValue = task.due_time || null;

  if (!dateValue && task.due) {
    const parsed = parseUTCToLocal(task.due, isAllDay);
    dateValue = parsed.date;
    timeValue = parsed.time;
  }

  return {
    summary: task.summary || "",
    has_due_date: hasDueDate,
    is_all_day: isAllDay,
    due_date: dateValue || null,
    due_time: timeValue || "00:00",
    description: task.description || "",
    section_id:
      task.section_id ||
      (sections.length > 0
        ? sections.sort(
            (a: Section, b: Section) => b.sort_order - a.sort_order,
          )[0].id
        : undefined),
    tags: task.tags || [],
    recurrence_type: task.recurrence_type || "none",
    has_recurrence: task.has_recurrence || false, // Deprecated but keep for compat
    recurrence_frequency: task.recurrence_frequency || "DAILY",
    recurrence_interval: task.recurrence_interval || 1,
    recurrence_byweekday: task.recurrence_byweekday || [],
    recurrence_bymonthday: task.recurrence_bymonthday || 1,
    points_value: task.points_value || 0,
    streak_bonus_points: task.streak_bonus_points || 0,
    streak_bonus_interval: task.streak_bonus_interval || 0,
  };
}

/**
 * Get label text for form fields (factory function that accepts hass for dynamic labels)
 * @param hass - Home Assistant instance for dynamic points terminology
 * @returns Function that computes labels for form fields
 */
export function getFieldLabels(hass: HomeAssistant) {
  const pointsTerm = getPointsTermCapitalized(hass) || "Points";

  return function computeLabel(schema: any): string {
    const labels: { [key: string]: string } = {
      summary: "Task Name",
      has_due_date: "Has Due Date",
      is_all_day: "All Day",
      due_date: "Date",
      due_time: "Time",
      description: "Description",
      section_id: "Section",
      tags: "Tags",
      recurrence_type: "Recurrence",
      has_recurrence: "Recurring Task",
      recurrence_frequency: "Frequency",
      recurrence_interval: "Repeat Every",
      recurrence_byweekday: "Days of Week",
      recurrence_bymonthday: "Day of Month",
      points_value: `${pointsTerm} Value`,
      streak_bonus_points: `Streak Bonus ${pointsTerm}`,
      streak_bonus_interval: "Bonus Every X Completions (0 = no bonus)",
    };
    return labels[schema.name] || schema.name;
  };
}

/**
 * Render the task dialog (for editing or creating tasks)
 * @param isOpen - Whether dialog is open
 * @param task - Task being edited/created
 * @param hass - Home Assistant instance
 * @param sections - Available sections
 * @param availableTags - Available tags from entity
 * @param saving - Whether save is in progress
 * @param onClose - Callback when dialog closes
 * @param onValueChanged - Callback when form values change
 * @param onSave - Callback when save is clicked
 * @param onDelete - Optional callback when delete is clicked
 * @param dialogTitle - Optional dialog title (defaults to "Edit Task")
 * @param showDelete - Whether to show delete button (defaults to true for existing tasks)
 * @returns Lit HTML template
 */
export function renderTaskDialog(
  isOpen: boolean,
  task: EditingTask | null,
  hass: HomeAssistant,
  sections: Section[],
  availableTags: string[],
  saving: boolean,
  onClose: () => void,
  onValueChanged: (ev: CustomEvent) => void,
  onSave: () => void,
  onDelete?: () => void,
  dialogTitle: string = "Edit Task",
  showDelete: boolean = true,
): TemplateResult {
  if (!isOpen || !task) {
    return html``;
  }

  const { detailsSchema, scheduleSchema, pointsSchema } = buildEditDialogSchema(
    task,
    sections,
    availableTags,
  );
  const data = buildEditDialogData(task, sections);
  const computeLabel = getFieldLabels(hass);

  return html`
    <ha-dialog open @closed=${onClose} .heading=${dialogTitle}>
      <!-- Details Section -->
      <div class="dialog-section">
        <h3 class="section-header">Details</h3>
        <ha-form
          .hass=${hass}
          .schema=${detailsSchema}
          .data=${data}
          .computeLabel=${computeLabel}
          @value-changed=${onValueChanged}
        ></ha-form>
      </div>

      <!-- Schedule Section -->
      <div class="dialog-section">
        <h3 class="section-header">Schedule</h3>
        <ha-form
          .hass=${hass}
          .schema=${scheduleSchema}
          .data=${data}
          .computeLabel=${computeLabel}
          @value-changed=${onValueChanged}
        ></ha-form>
      </div>

      <!-- Points Section -->
      <div class="dialog-section">
        <h3 class="section-header">Points</h3>
        <ha-form
          .hass=${hass}
          .schema=${pointsSchema}
          .data=${data}
          .computeLabel=${computeLabel}
          @value-changed=${onValueChanged}
        ></ha-form>
      </div>

      ${showDelete && onDelete && task?.uid
        ? html`
            <ha-button
              slot="secondaryAction"
              @click=${onDelete}
              .disabled=${saving}
              class="delete-button"
              dialogAction="delete"
            >
              Delete
            </ha-button>
          `
        : ""}
      
      <ha-button slot="secondaryAction" @click=${onClose} .disabled=${saving}>
        Cancel
      </ha-button>
      
      <ha-button slot="primaryAction" @click=${onSave} .disabled=${saving}>
        ${saving ? "Saving..." : "Save"}
      </ha-button>

      <style>
        ha-dialog {
          --mdc-dialog-min-width: min(500px, 90vw);
        }
        
        /* Section styling */
        .dialog-section {
          margin-top: 24px;
        }
        
        .dialog-section:first-child {
          margin-top: 0;
        }
        
        .section-header {
          margin: 0 0 12px 0;
          padding: 0;
          font-size: 14px;
          font-weight: 500;
          color: var(--primary-text-color);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          opacity: 0.7;
        }
        
        /* Position delete button on far left */
        mwc-button.delete-button,
        ha-button.delete-button {
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
