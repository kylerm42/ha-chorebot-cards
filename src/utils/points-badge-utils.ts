// ============================================================================
// Points Badge Rendering Utility
// ============================================================================
// Shared utility for rendering points badges with bonus detection

import { html, TemplateResult } from "lit";
import { Task, HomeAssistant } from "./types.js";
import { ColorShades } from "./color-utils.js";
import { getPointsDisplayParts } from "./points-display-utils.js";

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

  // Check if this is a recurring task with upcoming bonus
  if (task.parent_uid) {
    const template = templates.find((t: any) => t.uid === task.parent_uid);
    if (
      template &&
      template.streak_bonus_points &&
      template.streak_bonus_interval
    ) {
      const nextStreak = template.streak_current + 1;
      if (nextStreak % template.streak_bonus_interval === 0) {
        // Next completion will award bonus!
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

  // Regular points badge (no bonus)
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
