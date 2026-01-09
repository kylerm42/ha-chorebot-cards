# ChoreBot Cards

Dashboard cards for the ChoreBot integration. Provides 4 custom Lovelace cards in a single bundle:

## Cards Included

- **Grouped Card**: Tag-based grouped task view with progress tracking per group
- **Add Task Card**: Quick task creation with full field support including recurrence
- **Person Points Card**: Visual points balance display with progress bar and accent colors
- **Person Rewards Card**: Person-specific rewards catalog with inline redemption

## Requirements

- Home Assistant 2024.11.0 or newer
- **ChoreBot integration** (install separately from HACS → Integrations)

## Installation

Install via HACS:

1. Open HACS → Frontend
2. Click "+ Explore & Download Repositories"
3. Search for "ChoreBot Cards"
4. Click "Download"
5. Hard refresh browser (Ctrl+Shift+R)

## Quick Start

After installing both the integration and cards, add cards to your dashboard:

### Grouped Card (Tag-based)
```yaml
type: custom:chorebot-grouped-card
entity: todo.chorebot_family_tasks
person_entity: person.kyle  # Optional: Filter by person
```

### Person Points Card
```yaml
type: custom:chorebot-person-points-card
person_entity: person.kyle
```

### Person Rewards Card
```yaml
type: custom:chorebot-person-rewards-card
person_entity: person.kyle
```

### Add Task Card
```yaml
type: custom:chorebot-add-task-card
entity: todo.chorebot_family_tasks
```

See [full README](https://github.com/kylerm42/ha-chorebot-cards) for detailed configuration options.
