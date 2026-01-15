// ============================================================================
// Person Dropdown Utilities
// ============================================================================
// Shared utilities for rendering person selection dropdowns across multiple
// ChoreBot cards. Provides person dropdown UI and auto-detection logic.

import { html, TemplateResult } from "lit";
import { HomeAssistant, PersonProfile, Progress } from "./types.js";
import { ColorShades } from "./color-utils.js";
import { getPointsDisplayParts } from "./points-display-utils.js";
import {
  renderPersonAvatar,
  renderPersonPoints,
  getPersonName,
  detectCurrentUserPerson,
  getAllPeople,
} from "./person-display-utils.js";
import { renderProgressBar } from "./progress-bar-utils.js";

/**
 * Render person dropdown UI with header and collapsible list
 *
 * CSS Requirements (must be defined in consuming component):
 * - .person-section (container for dropdown positioning)
 * - .person-header (header display with avatar/name/points)
 * - .person-container, .person-left, .person-info (layout containers)
 * - .person-header-row (row for name/points/chevron)
 * - .person-name (person name text)
 * - .person-points-and-chevron (container for points + chevron)
 * - .person-points (points display styling)
 * - .dropdown-chevron (chevron icon with rotation)
 * - .person-dropdown (dropdown container with grid animation)
 * - .person-dropdown-inner (scrollable inner container)
 * - .person-dropdown-item (individual person row)
 * - .person-dropdown-info (person name/points container)
 * - .person-dropdown-name (person name in dropdown)
 * - .person-dropdown-points (points in dropdown)
 * - .person-avatar (avatar styling - see person-display-utils.ts)
 * - .progress-bar, .progress-bar-fill, .progress-text (progress bar - see progress-bar-utils.ts)
 *
 * Note: CSS cannot be extracted due to LitElement shadow DOM scoping.
 * Consumers must define these classes in their static styles block.
 *
 * @param hass - Home Assistant instance
 * @param selectedPersonId - Currently selected person entity ID
 * @param dropdownOpen - Whether dropdown is expanded
 * @param allPeople - All person profiles to display in dropdown
 * @param showProgress - Whether to show progress bar in header
 * @param progress - Progress data for selected person (if showProgress=true)
 * @param shades - Color shades for styling (computed from accent color)
 * @param progressTextColor - Text color for progress label (optional)
 * @param onToggle - Callback when dropdown header is clicked
 * @param onSelect - Callback when a person is selected from dropdown
 * @param hideBackground - Whether to hide background styling (default: false)
 * @returns Template with person header + dropdown
 */
export function renderPersonDropdown(
  hass: HomeAssistant,
  selectedPersonId: string,
  dropdownOpen: boolean,
  allPeople: PersonProfile[],
  showProgress: boolean,
  progress: Progress | undefined,
  shades: ColorShades,
  progressTextColor: string | undefined,
  onToggle: () => void,
  onSelect: (personId: string) => void,
  hideBackground: boolean = false
): TemplateResult {
  const personProfile = selectedPersonId
    ? allPeople.find((p) => p.entity_id === selectedPersonId)
    : null;

  // Determine accent color (precedence: person profile > theme)
  let baseColor = "var(--primary-color)";
  if (personProfile?.accent_color) {
    baseColor = personProfile.accent_color;
  }

  return html`
    <div
      class="person-section ${hideBackground ? "no-background" : ""} ${dropdownOpen
        ? "dropdown-open"
        : ""}"
    >
      <!-- Person Header (Collapsed State) -->
      <div class="person-header" @click=${onToggle}>
        <div class="person-container">
          <div class="person-left">
            ${renderPersonAvatar(hass, selectedPersonId, personProfile!, 64)}
          </div>
          <div class="person-info">
            <div class="person-header-row">
              <div class="person-name">
                ${getPersonName(hass, selectedPersonId)}
              </div>
              <div class="person-points-and-chevron">
                ${renderPersonPoints(personProfile!, hass, baseColor)}
                <ha-icon
                  icon="mdi:chevron-down"
                  class="dropdown-chevron ${dropdownOpen ? "open" : ""}"
                ></ha-icon>
              </div>
            </div>
            ${showProgress && progress
              ? renderProgressBar(progress, shades, progressTextColor)
              : ""}
          </div>
        </div>
      </div>

      <!-- Person Dropdown (Expanded State) -->
      <div class="person-dropdown ${dropdownOpen ? "open" : ""}">
        <div class="person-dropdown-inner">
          ${allPeople.map((person) => {
            const isSelected = person.entity_id === selectedPersonId;
            const pointsDisplay = getPointsDisplayParts(hass);

            return html`
              <div
                class="person-dropdown-item ${isSelected ? "selected" : ""}"
                @click=${() => onSelect(person.entity_id)}
              >
                ${renderPersonAvatar(hass, person.entity_id, person, 40)}
                <div class="person-dropdown-info">
                  <div class="person-dropdown-name">
                    ${getPersonName(hass, person.entity_id)}
                  </div>
                  <div class="person-dropdown-points">
                    ${person.points_balance}
                    ${pointsDisplay.icon
                      ? html`<ha-icon icon="${pointsDisplay.icon}"></ha-icon>`
                      : ""}
                    ${pointsDisplay.text}
                  </div>
                </div>
                ${isSelected ? html`<ha-icon icon="mdi:check"></ha-icon>` : ""}
              </div>
            `;
          })}
        </div>
      </div>
    </div>
  `;
}

/**
 * Detect default person to show in dropdown
 *
 * Priority order:
 * 1. Logged-in user's person entity (detected via hass.user.name)
 * 2. Config default (if provided)
 * 3. First person alphabetically by entity_id
 *
 * @param hass - Home Assistant instance
 * @param configDefault - Optional default person from card config
 * @returns Person entity ID or empty string if no people found
 */
export function detectDefaultPerson(
  hass: HomeAssistant,
  configDefault?: string
): string {
  // 1. Try auto-detect logged-in user
  let detectedPerson = detectCurrentUserPerson(hass);

  // 2. Fallback to config default
  if (!detectedPerson && configDefault) {
    detectedPerson = configDefault;
  }

  // 3. Fallback to first person alphabetically
  if (!detectedPerson) {
    const allPeople = getAllPeople(hass);
    if (allPeople.length > 0) {
      // Sort by entity_id and pick first
      const sorted = allPeople.sort((a, b) =>
        a.entity_id.localeCompare(b.entity_id)
      );
      detectedPerson = sorted[0].entity_id;
    }
  }

  // 4. If still no person detected, return empty string
  return detectedPerson || "";
}
