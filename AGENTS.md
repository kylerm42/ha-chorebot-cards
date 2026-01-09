# AGENTS.md

This file provides guidance to AI Agents when working with code in this repository.

**Last Updated**: 2026-01-09 - Single bundle architecture for HACS plugin

## Project Overview

ChoreBot Cards provides frontend dashboard cards for the ChoreBot Home Assistant integration.
This is a **HACS plugin** repository that serves a single JavaScript bundle containing all 4 cards.

**Integration Repository**: [ha-chorebot](https://github.com/kylerm42/ha-chorebot)

## Architecture

**Single Bundle Approach:**
- All 4 cards bundled into one file: `dist/chorebot-cards.js`
- Entry point: `src/index.ts` imports all card modules
- Each card self-registers via `customElements.define()` in its module
- Shared utilities bundled once (no duplication)
- HACS serves at `/hacsfiles/chorebot-cards/chorebot-cards.js`

**Card Components:**
1. `chorebot-grouped-card` - Tag-based grouped task view with progress tracking
2. `chorebot-add-task-card` - Quick task creation with full field support
3. `chorebot-person-points-card` - Visual points balance with progress bar
4. `chorebot-person-rewards-card` - Rewards catalog with inline redemption

**Shared Utilities (`src/utils/`):**
- `types.ts` - TypeScript interfaces for HA entities, tasks, people, rewards
- `date-utils.ts` - Date formatting & parsing (ISO 8601 UTC ↔ local)
- `task-utils.ts` - Task filtering, grouping, and computed person ID resolution
- `rrule-utils.ts` - Recurrence rule parsing and building
- `dialog-utils.ts` - Edit dialog rendering with shared form logic
- `color-utils.ts` - Accent color handling and inheritance
- `confetti-utils.ts` - Celebration animations for completions/redemptions
- `points-display-utils.ts` - Points terminology and icon display

## Build System

**Rollup Configuration:**
- Input: `src/index.ts`
- Output: `dist/chorebot-cards.js` (single bundle)
- Format: ES module
- Production: Minified with Terser (~100KB)
- Development: With sourcemaps (~150KB)

**Build Commands:**
- `npm run build` - Production build (minified)
- `npm run watch` - Development build (auto-rebuild on changes)
- `npm run format` - Format code with Prettier

**HACS Compatibility:**
- `hacs.json` specifies `filename: "chorebot-cards.js"`
- Single `.js` file in `dist/` directory
- HACS automatically downloads and serves on install
- No manual Lovelace resources needed

## Development Workflow

### Standalone Card Development

```bash
npm install
npm run watch  # Auto-rebuild on changes
```

Copy `dist/chorebot-cards.js` to HA instance for testing:
```
config/www/community/chorebot-cards/chorebot-cards.js
```

### Full-Stack Development (with Integration)

See main integration repo's [DEVELOPMENT.md](https://github.com/kylerm42/ha-chorebot/blob/main/DEVELOPMENT.md)
for submodule-based workflow with Docker Compose.

## Data Flow & Integration

**Backend Interaction:**
- Cards read state from `sensor.chorebot_points` attributes
- Cards call services: `todo.add_item`, `todo.update_item`, `chorebot.*`
- Person data includes: `person_id`, `points`, `accent_color`
- Rewards data includes: `id`, `name`, `cost`, `icon`, `description`, `enabled`, `person_id`
- Tasks include computed `computed_person_id` (resolved by backend)

**State Dependencies:**
- `sensor.chorebot_points` - People balances, rewards, transactions, redemptions
- `todo.chorebot_*` - Task lists with ChoreBot-specific fields
- `person.*` - Home Assistant person entities for name/picture

**Service Calls:**
- `todo.add_item` - Create tasks
- `todo.update_item` - Update task fields
- `chorebot.redeem_reward` - Redeem rewards (deducts points)
- `chorebot.add_task` - Add tasks with custom fields (alternative to todo service)

## Important Reminders

- **Single bundle only**: Do NOT create multiple build outputs (breaks HACS)
- **Entry point imports all cards**: `src/index.ts` must import all 4 card modules
- **Self-registration pattern**: Each card calls `customElements.define()` in its own module
- **Shared utilities**: All cards use common utils from `src/utils/` (bundled once)
- **HACS filename**: Must match repository name for auto-detection (`chorebot-cards.js`)
- **Browser compatibility**: Target modern browsers (ES2020+), HA provides polyfills
- **TypeScript strict mode**: Use interfaces for type safety, avoid `any` types
- **Lit component lifecycle**: Follow Lit patterns for reactive properties and rendering
- **Home Assistant conventions**: Use `hass` object for state access, `mdi:` icons, CSS variables

## File Structure

```
src/
├── index.ts                       # Main entry point (imports all cards)
├── grouped-card.ts                # Tag-based grouped view
├── add-task-card.ts               # Quick task creation
├── person-points-card.ts          # Points balance display
├── person-rewards-card.ts         # Rewards catalog & redemption
└── utils/
    ├── types.ts                   # TypeScript interfaces
    ├── date-utils.ts              # Date formatting & parsing
    ├── task-utils.ts              # Task filtering & grouping
    ├── rrule-utils.ts             # Recurrence rule parsing
    ├── dialog-utils.ts            # Edit dialog rendering
    ├── color-utils.ts             # Accent color handling
    ├── confetti-utils.ts          # Celebration animations
    └── points-display-utils.ts    # Points terminology display

dist/
└── chorebot-cards.js              # Single bundle output (generated)

Configuration:
├── package.json                   # Dependencies and scripts
├── rollup.config.mjs              # Rollup bundler config
├── tsconfig.json                  # TypeScript compiler config
├── hacs.json                      # HACS plugin metadata
└── .prettierrc (future)           # Code formatting rules
```

## Code Style Guidelines

**TypeScript:**
- Use interfaces for all data structures
- Avoid `any` types (use `unknown` if necessary, then narrow)
- Prefer `const` over `let`, avoid `var`
- Use arrow functions for callbacks
- Destructure objects when accessing multiple properties

**Lit Components:**
- Use `@customElement` decorator for registration
- Use `@property` decorator for reactive properties
- Implement `render()` method (returns `TemplateResult`)
- Use `@state` for internal reactive state
- Use CSS-in-JS with `static styles` property

**Formatting:**
- Run Prettier before commits: `npm run format`
- 2-space indentation
- Single quotes for strings
- Trailing commas in multi-line objects/arrays
- Semicolons required

## Testing Strategy

**Browser Console Testing:**
- Check for registration message: `CHOREBOT-CARDS v0.1.0`
- Look for errors in console (F12)
- Verify all 4 cards register: `customElements.get('chorebot-grouped-card')` should return class

**Integration Testing:**
- Install in live HA instance via HACS
- Test all 4 cards in dashboard
- Verify service calls work (add task, redeem reward)
- Test person filtering and accent color inheritance
- Test points display customization

**Bundle Verification:**
- Build production: `npm run build`
- Check size: `ls -lh dist/chorebot-cards.js` (should be ~90-110KB)
- Verify all cards present: `grep -o "customElements.define" dist/chorebot-cards.js | wc -l` (should be 4)

## Release Process

1. Update version in `package.json`
2. Build production bundle: `npm run build`
3. Test bundle in live HA instance
4. Commit changes
5. Tag release: `git tag -a vX.Y.Z -m "Release vX.Y.Z"`
6. Push: `git push origin main --tags`
7. Create GitHub release with tag
8. HACS auto-detects new release

## Common Pitfalls

- ❌ **Creating multiple bundles**: Single bundle only for HACS compatibility
- ❌ **Forgetting to import card in index.ts**: Cards won't register
- ❌ **Using absolute imports**: Use relative paths (`./utils/...`)
- ❌ **Modifying built bundle**: Always edit source, never edit `dist/` directly
- ❌ **Skipping production build**: Development builds are larger and include sourcemaps
- ❌ **Not testing in real HA**: Browser testing alone isn't sufficient

## Future Enhancements

**Potential additions** (not currently implemented):
- Unit tests with Jest or Vitest
- Visual regression tests with Playwright
- Storybook for component documentation
- CI/CD pipeline with GitHub Actions (auto-build on release)
- ESLint for additional code quality checks

## Implementation Status

### ✅ Completed
- Single bundle build system (Rollup + TypeScript + Lit)
- All 4 card implementations with Lit Web Components
- Shared utilities architecture (9 utility modules)
- HACS plugin compatibility (hacs.json, dist/ output)
- Person accent color system with inheritance
- Configurable points display terminology
- Tag-based grouping with progress tracking
- Inline task editing with full field support
- Recurrence rule creation and editing UI
- Points badges with bonus detection
- Reward redemption flow with confetti

### 🔄 In Progress
- Initial repository setup and v0.1.0 release

### 📋 Future Work
- Testing infrastructure (unit + integration tests)
- CI/CD automation
- Additional card types (list view, transaction history)
- Accessibility improvements (ARIA labels, keyboard navigation)
- Internationalization (i18n) support
