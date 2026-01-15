// ============================================================================
// Person Display Utilities
// ============================================================================
// Shared utilities for rendering person avatars, points, and profiles
// across multiple ChoreBot cards.

import { html, TemplateResult } from "lit";
import { HomeAssistant, PersonProfile } from "./types.js";
import { getPointsDisplayParts } from "./points-display-utils.js";

/**
 * Render person avatar (image or initials fallback)
 * @param personEntity - Home Assistant person entity
 * @param personProfile - Person profile with points/settings
 * @param size - Avatar size in pixels (default: 64)
 */
export function renderPersonAvatar(
  hass: HomeAssistant,
  personEntityId: string,
  personProfile: PersonProfile,
  size: number = 64
): TemplateResult {
  const personEntity = hass.states[personEntityId];
  const pictureUrl = personEntity?.attributes.entity_picture;
  const name = getPersonName(hass, personEntityId);
  const initials = getPersonInitials(name);

  const avatarStyle = `width: ${size}px; height: ${size}px;`;
  const initialsSize = Math.floor(size * 0.375); // 37.5% of avatar size

  if (pictureUrl) {
    return html`
      <div class="person-avatar" style="${avatarStyle}">
        <img src="${pictureUrl}" alt="${name}" />
      </div>
    `;
  }

  return html`
    <div
      class="person-avatar initials"
      style="${avatarStyle} font-size: ${initialsSize}px;"
    >
      ${initials}
    </div>
  `;
}

/**
 * Render person points display with icon/text
 * @param personProfile - Person profile with points balance
 * @param hass - Home Assistant instance for getting points display config
 * @param accentColor - Color for points text (hex or CSS variable)
 */
export function renderPersonPoints(
  personProfile: PersonProfile,
  hass: HomeAssistant,
  accentColor: string
): TemplateResult {
  const parts = getPointsDisplayParts(hass);

  return html`
    <div class="person-points" style="color: ${accentColor}">
      ${personProfile.points_balance}
      ${parts.icon ? html`<ha-icon icon="${parts.icon}"></ha-icon>` : ""}
      ${parts.text ? parts.text : ""}
    </div>
  `;
}

/**
 * Get person initials for avatar fallback
 * @param personName - Person's display name
 * @returns Up to 2 uppercase initials
 */
export function getPersonInitials(personName: string): string {
  return personName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Get person name from entity
 * @param hass - Home Assistant instance
 * @param personId - Person entity ID (e.g., "person.kyle")
 * @returns Friendly name or fallback to entity_id without domain
 */
export function getPersonName(hass: HomeAssistant, personId: string): string {
  const entity = hass.states[personId];
  return entity?.attributes.friendly_name || personId.replace("person.", "");
}

/**
 * Get person profile from sensor
 * @param hass - Home Assistant instance
 * @param personId - Person entity ID (e.g., "person.kyle")
 * @returns PersonProfile if found, undefined otherwise
 */
export function getPersonProfile(
  hass: HomeAssistant,
  personId: string
): PersonProfile | undefined {
  const sensor = hass.states["sensor.chorebot_points"];
  if (!sensor) return undefined;

  const people = sensor.attributes.people || {};
  return people[personId] as PersonProfile | undefined;
}

/**
 * Get all person profiles from sensor
 * @param hass - Home Assistant instance
 * @returns Array of PersonProfile objects
 */
export function getAllPeople(hass: HomeAssistant): PersonProfile[] {
  const sensor = hass.states["sensor.chorebot_points"];
  if (!sensor) return [];

  const people = sensor.attributes.people || {};
  return Object.values(people) as PersonProfile[];
}

/**
 * Detect logged-in user's person entity (best-effort)
 * Matches hass.user.name to person entity friendly_name
 * @param hass - Home Assistant instance
 * @returns Person entity ID if detected, null otherwise
 */
export function detectCurrentUserPerson(hass: HomeAssistant): string | null {
  // Check if user info is available
  const userName = (hass as any).user?.name;
  if (!userName) return null;

  // Get all person entities
  const personEntities = Object.values(hass.states).filter((e) =>
    e.entity_id.startsWith("person.")
  );

  // Try to find matching person by friendly_name
  const matchingPerson = personEntities.find(
    (p) =>
      p.attributes.friendly_name?.toLowerCase() === userName.toLowerCase()
  );

  return matchingPerson?.entity_id || null;
}
