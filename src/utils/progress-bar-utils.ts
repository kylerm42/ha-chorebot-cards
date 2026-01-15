// ============================================================================
// Progress Bar Rendering Utility
// ============================================================================
// Shared utility for rendering progress bars consistently across ChoreBot cards

import { html, TemplateResult } from "lit";
import { Progress } from "./types.js";
import { ColorShades } from "./color-utils.js";

/**
 * Render a progress bar with fill and text overlay
 * @param progress - Progress object with completed/total counts
 * @param shades - Color shades for styling (lighter for background, darker for fill)
 * @param textColor - Optional text color override (defaults to --text-primary-color)
 * @param ariaLabel - Optional custom aria-label for accessibility
 * @returns TemplateResult for progress bar
 */
export function renderProgressBar(
  progress: Progress,
  shades: ColorShades,
  textColor?: string,
  ariaLabel?: string
): TemplateResult {
  const percentage =
    progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;

  const finalTextColor = textColor || "var(--text-primary-color)";
  const label =
    ariaLabel ||
    `${progress.completed} of ${progress.total} tasks completed`;

  return html`
    <div
      class="progress-bar"
      style="background: #${shades.lighter}"
      aria-label="${label}"
    >
      <div
        class="progress-bar-fill"
        style="width: ${percentage}%; background: #${shades.darker}"
      ></div>
      <div class="progress-text" style="color: ${finalTextColor}">
        ${progress.completed}/${progress.total}
      </div>
    </div>
  `;
}
