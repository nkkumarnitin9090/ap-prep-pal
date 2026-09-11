import type {
  BlockType,
  CalculatorPolicy,
  Course,
  SchedulePhase,
  Unit,
} from "@/data/types";

export function unitTopicIds(unit: Unit): string[] {
  return unit.topics.map((topic) => topic.id);
}

export function courseTopicIds(course: Course): string[] {
  return course.units.flatMap(unitTopicIds);
}

export function courseTopicCount(course: Course): number {
  return course.units.reduce((sum, unit) => sum + unit.topics.length, 0);
}

export function coursePracticeProblemCount(course: Course): number {
  return course.units.reduce(
    (sum, unit) => sum + unit.practiceSet.problems.length,
    0,
  );
}

/** The unit that owns a practice set id, if any. */
export function findUnitByPracticeSetId(
  course: Course,
  practiceSetId: string,
): Unit | undefined {
  return course.units.find((unit) => unit.practiceSet.id === practiceSetId);
}

/**
 * Integer percent for bars and labels. A single checked topic must not round
 * to 0% (the four courses together have hundreds of topics), and an incomplete
 * set must not round to 100%.
 */
export function percent(done: number, total: number): number {
  if (total <= 0 || done <= 0) return 0;
  if (done >= total) return 100;
  return Math.min(99, Math.max(1, Math.round((done / total) * 100)));
}

export const calculatorLabels: Record<CalculatorPolicy, string> = {
  required: "Graphing calculator required",
  allowed: "Graphing calculator allowed",
  "not-permitted": "No calculator",
  "n/a": "Calculator not applicable",
};

export const calculatorShortLabels: Record<CalculatorPolicy, string> = {
  required: "Calculator required",
  allowed: "Calculator allowed",
  "not-permitted": "No calculator",
  "n/a": "No calculator needed",
};

/** Phase tints, written out in full for Tailwind's scanner. */
export const phaseStyles: Record<SchedulePhase, string> = {
  foundations: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
  build: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  "midyear-checkpoint": "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  deepen: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "exam-review": "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "exam-weeks": "bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

export const blockTypeLabels: Record<BlockType, string> = {
  "new-content": "New content",
  practice: "Practice",
  "spaced-review": "Spaced review",
  reading: "Reading",
  writing: "Writing",
  "mock-exam": "Mock exam",
  rest: "Rest",
};

export const blockTypeStyles: Record<BlockType, string> = {
  "new-content": "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  practice: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "spaced-review": "bg-sky-500/10 text-sky-700 dark:text-sky-300",
  reading: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
  writing: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "mock-exam": "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  rest: "bg-muted text-muted-foreground",
};

export function practiceSetAnchor(practiceSetId: string): string {
  return `practice-${practiceSetId}`;
}

export function unitAnchor(unitId: string): string {
  return `unit-${unitId}`;
}
