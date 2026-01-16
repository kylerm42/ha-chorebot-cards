// ============================================================================
// Date/Time Utility Functions for ChoreBot Cards
// ============================================================================

import { Task } from "./types.js";

/**
 * Parse UTC timestamp to local date and time strings
 * @param utcString - ISO 8601 UTC timestamp
 * @param isAllDay - Whether this is an all-day task (affects timezone handling)
 * @returns Object with separate date and time strings
 */
export function parseUTCToLocal(
  utcString: string,
  isAllDay: boolean = false,
): {
  date: string | null;
  time: string | null;
} {
  try {
    const date = new Date(utcString);
    if (isNaN(date.getTime())) return { date: null, time: null };

    if (isAllDay) {
      // For all-day tasks, use UTC date directly without timezone conversion
      // This prevents "2026-01-16T00:00:00Z" from becoming "2026-01-15" in EST
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");

      return {
        date: `${year}-${month}-${day}`,
        time: "00:00", // All-day tasks always show midnight
      };
    } else {
      // For timed tasks, convert to local timezone
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      return {
        date: `${year}-${month}-${day}`,
        time: `${hours}:${minutes}`,
      };
    }
  } catch (e) {
    console.error("Date parsing error:", e, utcString);
    return { date: null, time: null };
  }
}

/**
 * Format a date relative to today (e.g., "Today", "Tomorrow", "2 days ago")
 * @param date - The date to format
 * @param task - Optional task object to check for all-day flag
 * @returns Human-readable relative date string
 */
export function formatRelativeDate(date: Date, task?: Task): string {
  const isAllDay = task?.is_all_day || false;

  // For all-day tasks, compare dates in UTC to avoid timezone issues
  if (isAllDay) {
    const today = new Date();
    const todayUTC = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const targetUTC = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
    );

    const diffTime = targetUTC - todayUTC;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === -1) {
      return "Yesterday";
    } else if (diffDays === 1) {
      return "Tomorrow";
    } else if (diffDays < -1) {
      return `${Math.abs(diffDays)} days ago`;
    } else {
      return `In ${diffDays} days`;
    }
  }

  // For timed tasks, use local time comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    const originalDate = new Date(date);
    return originalDate.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });
  } else if (diffDays === -1) {
    return "Yesterday";
  } else if (diffDays === 1) {
    return "Tomorrow";
  } else if (diffDays < -1) {
    return `${Math.abs(diffDays)} days ago`;
  } else {
    return `In ${diffDays} days`;
  }
}

/**
 * Check if a task is overdue
 * @param task - Task to check
 * @returns True if task is overdue and not completed
 */
export function isOverdue(task: Task): boolean {
  if (!task.due || task.status === "completed") {
    return false;
  }

  const isAllDay = task.is_all_day || false;
  const dueDate = new Date(task.due);

  if (isAllDay) {
    // For all-day tasks, compare dates in UTC to avoid timezone issues
    const today = new Date();
    const todayUTC = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const dueUTC = Date.UTC(
      dueDate.getUTCFullYear(),
      dueDate.getUTCMonth(),
      dueDate.getUTCDate(),
    );
    return dueUTC < todayUTC;
  } else {
    // For timed tasks, use local time comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today;
  }
}

/**
 * Check if two dates are the same day
 * @param date1 - First date
 * @param date2 - Second date
 * @returns True if dates are on the same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Create an ISO string from date and optional time
 * For all-day tasks, creates midnight UTC to avoid timezone issues
 * For timed tasks, uses local timezone
 * @param dateStr - Date string in YYYY-MM-DD format
 * @param timeStr - Optional time string in HH:MM or HH:MM:SS format
 * @param isAllDay - Whether this is an all-day task
 * @returns ISO 8601 string in UTC (e.g., "2026-01-16T00:00:00Z")
 */
export function createISOString(
  dateStr: string,
  timeStr: string | undefined,
  isAllDay: boolean,
): string {
  // Parse date components
  const [year, month, day] = dateStr.split("-").map(Number);

  if (isAllDay) {
    // For all-day tasks, create date at midnight UTC
    const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
    return date.toISOString();
  } else {
    // For timed tasks, use local timezone
    const timeComponents = timeStr ? timeStr.split(":").map(Number) : [0, 0, 0];
    const [hours, minutes, seconds = 0] = timeComponents;
    const date = new Date(year, month - 1, day, hours, minutes, seconds);
    return date.toISOString();
  }
}
