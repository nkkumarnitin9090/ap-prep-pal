/**
 * All schedule and exam dates in the content are plain ISO calendar dates with
 * no time zone attached. They are parsed and formatted in UTC everywhere so a
 * date never shifts by a day between the server render and the browser.
 */

export function parseISODate(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`);
}

const longDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const mediumDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function formatLongDate(iso: string): string {
  return longDate.format(parseISODate(iso));
}

export function formatMediumDate(iso: string): string {
  return mediumDate.format(parseISODate(iso));
}

/** Whole days from today (UTC calendar day) until `iso`. Negative once past. */
export function daysUntil(iso: string, from: Date = new Date()): number {
  const target = parseISODate(iso).getTime();
  const today = Date.UTC(
    from.getUTCFullYear(),
    from.getUTCMonth(),
    from.getUTCDate(),
  );
  return Math.round((target - today) / 86_400_000);
}

/** "in 242 days", "tomorrow", "today", "12 days ago". */
export function describeDayGap(days: number): string {
  if (days === 0) return "today";
  if (days === 1) return "tomorrow";
  if (days === -1) return "yesterday";
  if (days > 1) return `in ${days} days`;
  return `${Math.abs(days)} days ago`;
}

export function formatMinutes(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} hr` : `${hours} hr ${rest} min`;
}
