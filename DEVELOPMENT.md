# ChoreBot Cards Development Guide

This document describes the build system and development workflow for ChoreBot Cards.

## Architecture

**Single Bundle Approach:**
- All 4 cards bundled into one file: `dist/chorebot-cards.js`
- Entry point: `src/index.ts` imports all card modules
- Each card self-registers via `customElements.define()`
- Shared utilities bundled once (no duplication)

**Cards Included:**
1. `chorebot-grouped-card` - Tag-based grouped task view
2. `chorebot-add-task-card` - Quick task creation with full field support
3. `chorebot-person-points-card` - Visual points balance with progress bar
4. `chorebot-person-rewards-card` - Rewards catalog with redemption flow

## Build System

**Technology Stack:**
- **Rollup**: Bundles TypeScript source into single ES module
- **TypeScript**: Type checking and modern JavaScript features
- **Lit**: Web Components framework for building card UIs
- **Terser**: Minifies production builds

**Build Configuration:**
- Input: `src/index.ts`
- Output: `dist/chorebot-cards.js`
- Format: ES module
- Production: Minified with Terser (~100KB)
- Development: With sourcemaps (~150KB)

## Standalone Development

If you're only working on cards (no integration changes):

### Initial Setup

```bash
cd ha-chorebot-cards
npm install
```

### Development Workflow

```bash
# Auto-rebuild on changes
npm run watch

# One-time production build
npm run build

# Format code with Prettier
npm run format
```

### Testing Changes

1. Make changes in `src/`
2. Watch mode auto-rebuilds `dist/chorebot-cards.js` (typically <1 second)
3. Copy bundle to your Home Assistant instance:
   ```bash
   cp dist/chorebot-cards.js /path/to/homeassistant/config/www/community/chorebot-cards/
   ```
4. Hard refresh browser (Ctrl+Shift+R)
5. Check browser console for errors (F12)

### Manual Resource Registration

If testing manually (not via HACS), add to Lovelace resources:

```yaml
# configuration.yaml or via UI
lovelace:
  resources:
    - url: /local/community/chorebot-cards/chorebot-cards.js
      type: module
```

## Full-Stack Development

For developing cards alongside the integration, use the submodule-based workflow in the main [ha-chorebot](https://github.com/kylerm42/ha-chorebot) repository.

See [ha-chorebot DEVELOPMENT.md](https://github.com/kylerm42/ha-chorebot/blob/main/DEVELOPMENT.md) for:
- Docker Compose setup with auto-building
- Dual repository mounting via submodules
- Integration + cards co-development

## Project Structure

```
ha-chorebot-cards/
├── src/
│   ├── index.ts                   # Main entry point (imports all cards)
│   ├── grouped-card.ts            # Tag-based grouped view
│   ├── add-task-card.ts           # Quick task creation
│   ├── person-points-card.ts      # Points balance display
│   ├── person-rewards-card.ts     # Rewards catalog & redemption
│   └── utils/                     # Shared utilities
│       ├── types.ts               # TypeScript interfaces
│       ├── date-utils.ts          # Date formatting & parsing
│       ├── task-utils.ts          # Task filtering & grouping
│       ├── rrule-utils.ts         # Recurrence rule parsing
│       ├── dialog-utils.ts        # Edit dialog rendering
│       ├── color-utils.ts         # Accent color handling
│       ├── confetti-utils.ts      # Celebration animations
│       └── points-display-utils.ts # Points terminology display
├── dist/
│   └── chorebot-cards.js          # Single bundle output
├── package.json                   # Dependencies and scripts
├── rollup.config.mjs              # Rollup bundler configuration
├── tsconfig.json                  # TypeScript compiler configuration
├── hacs.json                      # HACS plugin metadata
└── README.md                      # Installation and usage
```

## Debugging

### Build Errors

Check Rollup output for TypeScript or dependency errors:

```bash
npm run build
```

Common issues:
- Missing imports: Verify import paths are correct
- Type errors: Check TypeScript interfaces in `src/utils/types.ts`
- Missing dependencies: Run `npm install`

### Runtime Errors

1. Check browser console (F12) for JavaScript errors
2. Verify card registration: Look for console message `CHOREBOT-CARDS v0.1.0`
3. Check network tab for failed resource loads
4. Verify Home Assistant entity IDs are correct

### Bundle Analysis

Check bundle size and contents:

```bash
# Build production bundle
npm run build

# Check file size
ls -lh dist/chorebot-cards.js

# Verify all cards are included
grep -o "customElements.define" dist/chorebot-cards.js | wc -l
# Should output: 4
```

## HACS Compatibility

**Requirements:**
- Single `.js` file in `dist/` directory: `chorebot-cards.js`
- `hacs.json` with `filename: "chorebot-cards.js"`
- GitHub releases with built bundle included

**HACS Behavior:**
- Downloads all `.js` files from `dist/` on installation
- Serves at `/hacsfiles/chorebot-cards/chorebot-cards.js`
- Automatically registers as Lovelace resource (no manual configuration needed)

## Release Process

1. Update version in `package.json`
2. Build production bundle:
   ```bash
   npm run build
   ```
3. Test bundle in live Home Assistant instance
4. Commit changes:
   ```bash
   git add -A
   git commit -m "Release v0.1.0"
   ```
5. Tag release:
   ```bash
   git tag -a v0.1.0 -m "Initial release - single bundle with all cards"
   ```
6. Push to GitHub:
   ```bash
   git push origin main --tags
   ```
7. Create GitHub release with tag
8. HACS auto-detects new release

## Code Style

This project uses Prettier for code formatting:

```bash
# Format all files
npm run format

# Check formatting
npx prettier --check .
```

**Style Guidelines:**
- Use TypeScript interfaces for type safety
- Follow Lit component patterns for custom elements
- Keep utilities pure functions (no side effects)
- Comment complex logic and business rules
- Use descriptive variable names

## Troubleshooting

### "Module not found" errors

Ensure all imports use correct relative paths:

```typescript
// ✅ Correct
import { formatDate } from './utils/date-utils';

// ❌ Incorrect
import { formatDate } from 'utils/date-utils';
```

### Cards not appearing in dashboard

1. Verify bundle exists: `ls dist/chorebot-cards.js`
2. Check browser console for registration errors
3. Ensure ChoreBot integration is installed
4. Hard refresh browser (Ctrl+Shift+R)
5. Clear browser cache if necessary

### Build takes too long

- Use watch mode for development: `npm run watch`
- Production builds with Terser are slower but more optimized
- Incremental builds (watch mode) typically take <1 second

## Additional Resources

- [Lit Documentation](https://lit.dev/)
- [Rollup Documentation](https://rollupjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [HACS Plugin Documentation](https://hacs.xyz/docs/publish/plugin/)
- [ChoreBot Integration](https://github.com/kylerm42/ha-chorebot)
