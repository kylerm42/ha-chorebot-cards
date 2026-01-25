// ============================================================================
// Task Detail Utility Functions for Expandable Task Tiles
// ============================================================================

import { html, TemplateResult } from "lit";
import { Task, RecurringTemplate } from "./types.js";
import { parseRrule } from "./rrule-utils.js";

export interface ColorShades {
  lighter: string;
  light: string;
  base: string;
  dark: string;
  darker: string;
}

/**
 * Format recurrence pattern into human-readable string
 * @param rrule - Recurrence rule string (e.g., "FREQ=DAILY;INTERVAL=1")
 * @returns Human-readable recurrence description
 */
export function formatRecurrencePattern(rrule: string): string {
  if (!rrule || rrule.trim() === "") {
    return "";
  }

  const parsed = parseRrule(rrule);
  if (!parsed || !parsed.frequency) {
    return "";
  }

  const { frequency, interval, byweekday, bymonthday } = parsed;

  // Helper: Convert 2-letter day codes to full names
  const dayNameMap: { [key: string]: string } = {
    MO: "Mon",
    TU: "Tue",
    WE: "Wed",
    TH: "Thu",
    FR: "Fri",
    SA: "Sat",
    SU: "Sun",
  };

  // Helper: Add ordinal suffix (1st, 2nd, 3rd, 4th, etc.)
  const getOrdinalSuffix = (day: number): string => {
    if (day >= 11 && day <= 13) return `${day}th`;
    const lastDigit = day % 10;
    if (lastDigit === 1) return `${day}st`;
    if (lastDigit === 2) return `${day}nd`;
    if (lastDigit === 3) return `${day}rd`;
    return `${day}th`;
  };

  // Format based on frequency
  if (frequency === "DAILY") {
    return interval === 1 ? "Daily" : `Every ${interval} days`;
  }

  if (frequency === "WEEKLY") {
    if (byweekday.length > 0) {
      const dayNames = byweekday.map((d) => dayNameMap[d.toUpperCase()] || d);
      const daysStr = dayNames.join(", ");

      if (interval === 1) {
        return `Weekly on ${daysStr}`;
      } else {
        return `Every ${interval} weeks on ${daysStr}`;
      }
    } else {
      return interval === 1 ? "Weekly" : `Every ${interval} weeks`;
    }
  }

  if (frequency === "MONTHLY") {
    if (bymonthday !== null) {
      const dayStr = getOrdinalSuffix(bymonthday);
      return interval === 1
        ? `Monthly on ${dayStr}`
        : `Every ${interval} months on ${dayStr}`;
    } else {
      return interval === 1 ? "Monthly" : `Every ${interval} months`;
    }
  }

  // Fallback for unknown patterns
  return "";
}

/**
 * Format full date and time in user-friendly format
 * @param isoString - ISO 8601 date string
 * @param isAllDay - Whether this is an all-day task
 * @returns Formatted date/time string
 */
export function formatFullDateTime(
  isoString: string,
  isAllDay: boolean = false,
): string {
  if (!isoString || isoString.trim() === "") {
    return "";
  }

  try {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
      return "";
    }

    // Format options for date
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    // Format options for time (12-hour format)
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    if (isAllDay) {
      // All-day: "Monday, January 19, 2026"
      // CRITICAL: Force UTC timezone to prevent local timezone conversion
      // which would shift dates by one day (e.g., 2026-01-22T00:00:00Z → Jan 21 in EST)
      return date.toLocaleDateString(undefined, {
        ...dateOptions,
        timeZone: 'UTC'
      });
    } else {
      // Timed: "Monday, January 19, 2026 at 3:00 PM"
      const datePart = date.toLocaleDateString(undefined, dateOptions);
      const timePart = date.toLocaleTimeString(undefined, timeOptions);
      return `${datePart} at ${timePart}`;
    }
  } catch (e) {
    console.error("Date formatting error:", e, isoString);
    return "";
  }
}

/**
 * Render expanded task details section
 * @param options - Configuration object
 * @returns Lit template for expanded details
 */
export function renderExpandedDetails(options: {
  task: Task;
  templates: RecurringTemplate[];
  isExpanded: boolean;
  onEdit: () => void;
  onDelete: () => void;
  shades: ColorShades;
  textColor: string;
}): TemplateResult {
  const { task, templates, isExpanded, onEdit, onDelete, shades, textColor } =
    options;

  // Determine if task is recurring (has rrule or parent_uid)
  let recurrencePattern = "";
  if (task.rrule) {
    // Task has its own rrule
    recurrencePattern = formatRecurrencePattern(task.rrule);
  } else if (task.parent_uid) {
    // Task is an instance - get rrule from parent template
    const parentTemplate = templates.find((t) => t.uid === task.parent_uid);
    if (parentTemplate?.rrule) {
      recurrencePattern = formatRecurrencePattern(parentTemplate.rrule);
    }
  }

  // Determine streak bonus info (only if applicable)
  let streakBonusText = "";
  if (task.streak_bonus_points && task.streak_bonus_points > 0) {
    const interval = task.streak_bonus_interval || 0;
    if (interval > 0) {
      const intervalText = interval === 1 ? "day" : `${interval} days`;
      streakBonusText = `+${task.streak_bonus_points} pts every ${intervalText}`;
    }
  }

  // Format full due date/time
  const dueDateTimeText = task.due
    ? formatFullDateTime(task.due, task.is_all_day || false)
    : "";

  // Build detail rows (only show non-empty values)
  const detailRows: Array<{ icon: string; label: string; value: string }> = [];

  if (recurrencePattern) {
    detailRows.push({
      icon: "mdi:sync",
      label: "Repeats:",
      value: recurrencePattern,
    });
  }

  if (streakBonusText) {
    detailRows.push({
      icon: "mdi:trophy-award",
      label: "Streak Bonus:",
      value: streakBonusText,
    });
  }

  if (task.description && task.description.trim() !== "") {
    detailRows.push({
      icon: "mdi:text",
      label: "Description:",
      value: task.description,
    });
  }

  if (dueDateTimeText) {
    detailRows.push({
      icon: "mdi:calendar-clock",
      label: "Due:",
      value: dueDateTimeText,
    });
  }

  // Always render edit button, even if no detail rows
  return html`
    <div class="todo-details ${isExpanded ? "expanded" : "collapsed"}">
      <div class="todo-details-inner" style="display: flex; align-items: flex-start;">
        ${detailRows.length > 0
          ? html`
              <div class="details-content">
                ${detailRows.map(
                  (row) => html`
                    <div class="detail-row">
                      <ha-icon icon="${row.icon}"></ha-icon>
                      <span class="detail-label">${row.label}</span>
                      <span class="detail-value">${row.value}</span>
                    </div>
                  `,
                )}
              </div>
            `
          : ""}
        <div class="details-actions">
          <div
            class="action-button"
            @click=${(e: Event) => {
              e.stopPropagation();
              onEdit();
            }}
            role="button"
            tabindex="0"
            aria-label="Edit task"
          >
            <ha-icon icon="mdi:pencil"></ha-icon>
          </div>
        </div>
      </div>
    </div>
  `;
}
