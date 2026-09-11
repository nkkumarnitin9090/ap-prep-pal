import type { CourseAccent } from "@/data/types";

/**
 * Accent classes are written out in full so Tailwind's scanner can see them.
 * Never build these strings by interpolation.
 */
export interface AccentStyle {
  /** Foreground text colour for headings and links. */
  text: string;
  /** Solid fill used for progress bars and the card edge. */
  fill: string;
  /** Track behind a progress bar. */
  track: string;
  /** Very light tinted surface. */
  surface: string;
  /** Hairline border in the accent colour. */
  border: string;
  /** Ring used on cards and focus-visible outlines. */
  ring: string;
  /** Badge/chip treatment. */
  chip: string;
  /** Small round marker. */
  dot: string;
}

export const accentStyles: Record<CourseAccent, AccentStyle> = {
  indigo: {
    text: "text-indigo-600 dark:text-indigo-300",
    fill: "bg-indigo-500",
    track: "bg-indigo-500/15",
    surface: "bg-indigo-500/5 dark:bg-indigo-400/10",
    border: "border-indigo-500/30",
    ring: "ring-indigo-500/25",
    chip: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
    dot: "bg-indigo-500",
  },
  emerald: {
    text: "text-emerald-700 dark:text-emerald-300",
    fill: "bg-emerald-500",
    track: "bg-emerald-500/15",
    surface: "bg-emerald-500/5 dark:bg-emerald-400/10",
    border: "border-emerald-500/30",
    ring: "ring-emerald-500/25",
    chip: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  amber: {
    text: "text-amber-700 dark:text-amber-300",
    fill: "bg-amber-500",
    track: "bg-amber-500/15",
    surface: "bg-amber-500/5 dark:bg-amber-400/10",
    border: "border-amber-500/30",
    ring: "ring-amber-500/25",
    chip: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
  },
  rose: {
    text: "text-rose-600 dark:text-rose-300",
    fill: "bg-rose-500",
    track: "bg-rose-500/15",
    surface: "bg-rose-500/5 dark:bg-rose-400/10",
    border: "border-rose-500/30",
    ring: "ring-rose-500/25",
    chip: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
    dot: "bg-rose-500",
  },
};

export function accent(token: CourseAccent): AccentStyle {
  return accentStyles[token];
}
