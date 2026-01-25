// ============================================================================
// Points Badge Rendering Utility
// ============================================================================
// Shared utility for rendering points badges with bonus detection

import { html, TemplateResult } from "lit";
import { Task, HomeAssistant } from "./types.js";
import { ColorShades } from "./color-utils.js";
import { getPointsDisplayParts } from "./points-display-utils.js";

/**
 * Check if task would be on-time if completed NOW.
 * Uses date-only comparison (treats timed tasks as all-day for streak purposes).
 * @param task - Task to check
 * @returns True if would be on-time, false if late
 */
function checkIfWouldBeOnTime(task: Task): boolean {
  if (!task.due) return true; // No due date = always on-time

  const dueDate = new Date(task.due);
  const now = new Date();

  // Always compare dates only (user requirement: treat all tasks as all-day for streaks)
  const dueDay = new Date(
    dueDate.getFullYear(),
    dueDate.getMonth(),
    dueDate.getDate()
  );
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return today <= dueDay;
}

/**
 * Render a points badge for a task with automatic bonus detection
 * @param task - Task object to render badge for
 * @param templates - Array of recurring task templates (for bonus detection)
 * @param shades - Color shades for badge styling
 * @param hass - Home Assistant instance for getting points display config
 * @param showPoints - Whether to show points badges at all
 * @param textColor - Text color for badge (usually matches task text)
 * @returns TemplateResult for points badge or empty if no points
 */
export function renderPointsBadge(
  task: Task,
  templates: any[],
  shades: ColorShades,
  hass: HomeAssistant,
  showPoints: boolean,
  textColor: string
): TemplateResult {
  // Don't show if points disabled or task has no points
  if (!showPoints || !task.points_value) {
    return html``;
  }

  // Get configured points display parts
  const parts = getPointsDisplayParts(hass);

  // === HISTORICAL MODE: For COMPLETED tasks ===
  if (task.status === "completed" && task.points_earned !== undefined) {
    const base = task.points_value;
    const bonus = task.points_earned - base;

    if (bonus > 0) {
      // Bonus was awarded at completion
      return html`<span
        class="points-badge bonus-awarded"
        style="color: ${textColor};"
      >
        +${base} + ${bonus}
        ${parts.icon ? html`<ha-icon icon="${parts.icon}"></ha-icon>` : ""}
        ${parts.text ? parts.text : ""}
      </span>`;
    }

    // Completed but no bonus
    return html`<span
      class="points-badge"
      style="background: #${shades
        .lighter}; color: ${textColor}; border: 1px solid ${textColor};"
    >
      +${task.points_earned}
      ${parts.icon ? html`<ha-icon icon="${parts.icon}"></ha-icon>` : ""}
      ${parts.text ? parts.text : ""}
    </span>`;
  }

  // === PREDICTIVE MODE: For INCOMPLETE recurring tasks ===
  if (task.parent_uid && task.status === "needs_action") {
    const template = templates.find((t: any) => t.uid === task.parent_uid);
    if (
      template &&
      template.streak_bonus_points &&
      template.streak_bonus_interval
    ) {
      // Check if would be on-time if completed NOW (date-only comparison)
      const isOnTime = checkIfWouldBeOnTime(task);
      const predictedStreak = isOnTime ? template.streak_current + 1 : 0;

      // Check if predicted streak is milestone
      if (
        isOnTime &&
        predictedStreak > 0 &&
        predictedStreak % template.streak_bonus_interval === 0
      ) {
        // Next completion will award bonus if done on-time!
        return html`<span
          class="points-badge bonus-pending"
          style="color: ${textColor};"
        >
          +${task.points_value} + ${template.streak_bonus_points}
          ${parts.icon ? html`<ha-icon icon="${parts.icon}"></ha-icon>` : ""}
          ${parts.text ? parts.text : ""}
        </span>`;
      }
    }
  }

  // === DEFAULT MODE: Base points only ===
  return html`<span
    class="points-badge"
    style="background: #${shades
      .lighter}; color: ${textColor}; border: 1px solid ${textColor};"
  >
    +${task.points_value}
    ${parts.icon ? html`<ha-icon icon="${parts.icon}"></ha-icon>` : ""}
    ${parts.text ? parts.text : ""}
  </span>`;
}
