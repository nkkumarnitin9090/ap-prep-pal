import type { DayPlan, SchedulePhase, ScheduleWeek } from "@/data/types";

/**
 * PLACEHOLDER. Holds the shape of the year plan so the UI can be built against
 * a stable contract; the full 34-week schedule and weekly block plan replace
 * these arrays wholesale.
 */

export const phaseLabels: Record<SchedulePhase, string> = {
  foundations: "Foundations",
  build: "Build",
  "midyear-checkpoint": "Midyear checkpoint",
  deepen: "Deepen",
  "exam-review": "Exam review",
  "exam-weeks": "Exam weeks",
};

export const scheduleWeeks: ScheduleWeek[] = [
  {
    week: 1,
    dateRange: "Sep 7 - Sep 13",
    startDate: "2026-09-07",
    phase: "foundations",
    goal: "Set up the year: baseline diagnostics in all four courses.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 1: Limits and Continuity",
        focus: "Limits from graphs and tables; build the algebraic toolkit.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 1: Exploring One-Variable Data",
        focus: "Distribution vocabulary and describing shape, center, spread.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 1: Fluids",
        focus: "Density, pressure, and the hydrostatic pressure relationship.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 1: Short Fiction I",
        focus: "Character, setting, and structure in a short story.",
      },
    ],
    practice: [],
  },
];

export const weeklyPlan: DayPlan[] = [
  {
    day: "Monday",
    shortDay: "Mon",
    totalMinutes: 150,
    blocks: [
      {
        start: "4:00 p.m.",
        end: "4:20 p.m.",
        minutes: 20,
        type: "spaced-review",
        activity: "Flashcard warm-up",
        detail: "Physics 2 formulas and Calculus BC derivative rules.",
      },
      {
        start: "4:20 p.m.",
        end: "5:20 p.m.",
        minutes: 60,
        type: "new-content",
        activity: "Calculus BC",
        detail: "Work the week's assigned unit topics, then check understanding.",
      },
      {
        start: "7:00 p.m.",
        end: "8:10 p.m.",
        minutes: 70,
        type: "reading",
        activity: "AP Lit reading",
        detail: "Annotated reading with margin notes on craft and structure.",
      },
    ],
  },
];

/** Index of the week containing `date`, or -1 when the plan has not started. */
export function getCurrentWeekIndex(date: Date = new Date()): number {
  for (let i = scheduleWeeks.length - 1; i >= 0; i -= 1) {
    if (new Date(`${scheduleWeeks[i].startDate}T00:00:00`) <= date) {
      return i;
    }
  }
  return -1;
}
