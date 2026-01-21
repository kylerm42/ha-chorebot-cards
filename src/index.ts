/**
 * ChoreBot Cards - Single Bundle Entry Point
 * 
 * This file imports and registers all 7 ChoreBot dashboard cards.
 * Each card self-registers via customElements.define() in its respective module.
 * 
 * Cards included:
 * - chorebot-grouped-card: Tag-based grouped task view with progress tracking
 * - chorebot-add-task-card: Quick task creation with full field support
 * - chorebot-person-points-card: Visual points balance display with progress bar
 * - chorebot-rewards-card: Person-specific rewards with inline redemption
 * - chorebot-person-grouped-card: Person-filtered tag-based grouped task view
 * - chorebot-person-rewards-card: Combined person selector and rewards list
 * - chorebot-multi-person-overview-card: Simple multi-person task overview
 */

// Import all card modules - they self-register on import
import './grouped-card';
import './add-task-card';
import './person-points-card';
import './rewards-card';
import './person-grouped-card';
import './person-rewards-card';
import './multi-person-overview-card';

// Version banner for browser console
console.info(
  '%c CHOREBOT-CARDS %c v0.1.0 ',
  'background: #3498db; color: white; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;',
  'background: #ecf0f1; color: #3498db; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;'
);
