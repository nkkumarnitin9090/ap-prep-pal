import { parseISODate } from "@/lib/dates";
import type { ScheduleWeek } from "@/data/types";

const DAY_MS = 86_400_000;

function utcDay(date: Date): number {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

/**
 * Exclusive end of a plan week: the next week's Monday, or seven days after
 * the last published week's start if later weeks have not been written yet.
 */
export function weekEndExclusive(weeks: ScheduleWeek[], index: number): Date {
  const next = weeks[index + 1];
  if (next) return parseISODate(next.startDate);
  return new Date(parseISODate(weeks[index].startDate).getTime() + 7 * DAY_MS);
}

/**
 * Index of the week that actually contains `date`, or -1 when today is before
 * the plan, after the last published week, or the calendar is still empty.
 * Unlike a "last startDate ≤ today" scan, this does not keep highlighting the
 * final written week for the rest of the school year.
 */
export function findActiveWeekIndex(
  weeks: ScheduleWeek[],
  date: Date = new Date(),
): number {
  const today = utcDay(date);
  for (let index = 0; index < weeks.length; index += 1) {
    const start = parseISODate(weeks[index].startDate).getTime();
    const end = weekEndExclusive(weeks, index).getTime();
    if (today >= start && today < end) return index;
  }
  return -1;
}

export function isPlanWeekPast(
  weeks: ScheduleWeek[],
  index: number,
  date: Date = new Date(),
): boolean {
  return utcDay(date) >= weekEndExclusive(weeks, index).getTime();
}
