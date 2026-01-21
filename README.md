# ChoreBot Cards

Dashboard cards for the [ChoreBot](https://github.com/kylerm42/ha-chorebot) Home Assistant integration.

## Features

This plugin provides 4 custom Lovelace cards bundled into a single file:

- **Grouped Card**: Tag-based grouped task view with progress tracking
- **Add Task Card**: Quick task creation with recurrence support
- **Person Points Card**: Visual points balance display with progress bar
- **Person Rewards Card**: Rewards catalog with inline redemption

## Requirements

- Home Assistant 2024.11.0 or newer
- **ChoreBot integration** (must be installed separately)

## Installation

### HACS (Recommended)

1. Open HACS → Frontend
2. Click "+ Explore & Download Repositories"
3. Search for "ChoreBot Cards"
4. Click "Download"
5. Hard refresh browser (Ctrl+Shift+R)

### Manual Installation

1. Download `dist/chorebot-cards.js` from [latest release](https://github.com/kylerm42/ha-chorebot-cards/releases)
2. Copy to `config/www/community/chorebot-cards/chorebot-cards.js`
3. Add to Lovelace resources:
   ```yaml
   resources:
     - url: /local/community/chorebot-cards/chorebot-cards.js
       type: module
   ```
4. Hard refresh browser

## Card Configuration

### Grouped Card (Tag-based grouping)

Tag-based task grouping with per-group progress tracking.

```yaml
type: custom:chorebot-grouped-card
entity: todo.chorebot_family_tasks
person_entity: person.kyle  # Optional: Filter tasks by person
show_progress: true
show_points: true
tag_group_order:
  - Morning
  - Afternoon
  - Evening
untagged_header: "Other Tasks"
```

**Options:**
- `entity` (required): ChoreBot todo entity
- `person_entity` (optional): Filter tasks by person + inherit their accent color
- `show_progress` (optional): Show progress indicator (default: true)
- `show_points` (optional): Show points badges on tasks (default: true)
- `tag_group_order` (optional): Custom tag display order
- `untagged_header` (optional): Header text for untagged tasks (default: "Untagged")
- `accent_color` (optional): Override accent color (hex or CSS var)

### Person Points Card

Visual points balance display with progress bar.

```yaml
type: custom:chorebot-person-points-card
person_entity: person.kyle
accent_color: "#3498db"  # Optional: Override person's accent color
```

**Options:**
- `person_entity` (required): Home Assistant person entity
- `accent_color` (optional): Override accent color from person profile

### Person Rewards Card

Person-specific rewards catalog with redemption buttons.

```yaml
type: custom:chorebot-person-rewards-card
person_entity: person.kyle
show_disabled_rewards: false
sort_by: cost  # Options: cost, name, created
```

**Options:**
- `person_entity` (required): Home Assistant person entity
- `show_disabled_rewards` (optional): Include disabled rewards (default: false)
- `sort_by` (optional): Sort order - "cost", "name", or "created" (default: "cost")
- `accent_color` (optional): Override accent color from person profile

### Add Task Card

Quick task creation button with full field support.

```yaml
type: custom:chorebot-add-task-card
entity: todo.chorebot_family_tasks
button_text: "Add Task"
```

**Options:**
- `entity` (required): ChoreBot todo entity
- `button_text` (optional): Button label (default: "Add Task")

## Advanced Configuration

### Person Accent Colors

Cards automatically inherit accent colors from person profiles. Set a person's color once:

```yaml
service: chorebot.manage_person
data:
  person_id: person.kyle
  accent_color: "#3498db"
```

All cards for that person will use this color automatically.

### Points Display Customization

Configure custom points terminology via Settings → Devices & Services → ChoreBot → Configure:

- **Text**: "stars", "coins", "gems", etc.
- **Icon**: Optional MDI icon like "mdi:star"

Cards automatically display custom terminology (e.g., "437 stars" instead of "437 points").

## Development

See [DEVELOPMENT.md](DEVELOPMENT.md) for build instructions and local development setup.

## License

See [LICENSE.txt](LICENSE.txt)
