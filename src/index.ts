/**
 * ChoreBot Cards - Single Bundle Entry Point
 * 
 * This file imports and registers all 4 ChoreBot dashboard cards.
 * Each card self-registers via customElements.define() in its respective module.
 * 
 * Cards included:
 * - chorebot-grouped-card: Tag-based grouped task view with progress tracking
 * - chorebot-add-task-card: Quick task creation with full field support
 * - chorebot-person-points-card: Visual points balance display with progress bar
 * - chorebot-person-rewards-card: Person-specific rewards with inline redemption
 */

// Import all card modules - they self-register on import
import './grouped-card';
import './add-task-card';
import './person-points-card';
import './person-rewards-card';

// Version banner for browser console
console.info(
  '%c CHOREBOT-CARDS %c v0.1.0 ',
  'background: #3498db; color: white; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;',
  'background: #ecf0f1; color: #3498db; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;'
);
