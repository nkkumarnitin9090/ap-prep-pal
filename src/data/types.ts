/**
 * Shared content schema for the AP Senior Year Study Plan.
 *
 * Everything the app renders comes from typed data modules that implement these
 * types, so course content can be edited without touching a single component.
 */

export type CourseSlug =
  | "ap-calculus-bc"
  | "ap-statistics"
  | "ap-physics-2"
  | "ap-english-literature";

/** Tailwind-friendly accent tokens so each course reads distinctly in the UI. */
export type CourseAccent = "indigo" | "emerald" | "amber" | "rose";

/** A single checkable study topic. `id` must be globally unique and stable. */
export interface Topic {
  id: string;
  title: string;
  /** One or two sentences on what mastery of this topic actually looks like. */
  detail: string;
}

export interface Choice {
  label: string;
  text: string;
}

interface ProblemBase {
  id: string;
  /** Short label shown in the problem header, e.g. "MCQ 3" or "FRQ 1". */
  label: string;
  prompt: string;
  /** Optional stimulus (table, data list, or passage excerpt) shown above the prompt. */
  stimulus?: string;
  /** Fully worked solution, revealed only when the student asks for it. */
  solution: string;
  /** Extra coaching: why distractors are tempting, rubric language, timing advice. */
  note?: string;
}

export interface MultipleChoiceProblem extends ProblemBase {
  kind: "multiple-choice";
  choices: Choice[];
  /** Label of the correct choice, e.g. "C". */
  answer: string;
}

export interface FreeResponseProblem extends ProblemBase {
  kind: "free-response";
  parts?: { label: string; text: string }[];
  /** Point-by-point rubric so the student can self-score honestly. */
  rubric?: { points: string; criterion: string }[];
}

export type PracticeProblem = MultipleChoiceProblem | FreeResponseProblem;

export type CalculatorPolicy = "required" | "allowed" | "not-permitted" | "n/a";

export interface PracticeSet {
  id: string;
  title: string;
  /** What this set is drilling, in one sentence. */
  focus: string;
  estimatedMinutes: number;
  calculator: CalculatorPolicy;
  problems: PracticeProblem[];
}

/** Flags a unit whose status changed in the current Course and Exam Description. */
export interface CedNote {
  tone: "info" | "warning";
  text: string;
}

/** One box in a unit-level through-line diagram. */
export interface BigPictureStep {
  label: string;
  detail: string;
  /** Short labeled facts for comparison cards (held constant, ΔU, Q, W, path). */
  facts?: { label: string; value: string }[];
  /** Mini PV-path thumbnail on comparison cards. */
  sketch?: "horizontal" | "vertical" | "hyperbola" | "steep-hyperbola";
}

/** A unit-level flow or comparison diagram. Rendered from `steps`; `mermaid` is optional source. */
export interface BigPictureDiagram {
  title: string;
  caption: string;
  mermaid?: string;
  layout?: "flow" | "compare";
  steps?: BigPictureStep[];
}

/**
 * Connecting story for a whole unit. Optional and additive — other units can omit it.
 * Rendered above the topic checklist so it frames the individual topics.
 */
export interface BigPicture {
  title: string;
  /** Paragraphs separated by blank lines. */
  narrative: string;
  diagrams: BigPictureDiagram[];
  recap?: string;
}

export interface Unit {
  id: string;
  /** Display number; strings because the CED numbers Physics 2 units 9-15. */
  number: string;
  title: string;
  /** Official multiple-choice exam weighting, verbatim from the CED where one exists. */
  examWeight: string;
  /** Midpoint of the weighting range, used for the weighting bars. */
  examWeightMidpoint: number;
  /** Roughly how many 45-minute class periods the CED suggests. */
  classPeriods?: string;
  summary: string;
  /** Unit-level through-line. Shown only when present. */
  bigPicture?: BigPicture;
  topics: Topic[];
  /** Formulas, definitions, and procedures worth committing to memory. */
  keySkills: string[];
  /** Mistakes that reliably cost points on this unit's questions. */
  commonMistakes: string[];
  practiceSet: PracticeSet;
  cedNote?: CedNote;
}

export interface BigIdea {
  id: string;
  title: string;
  abbreviation?: string;
  description: string;
}

/**
 * AP English Literature has both big ideas and a separate list of numbered
 * skill categories, each with its own multiple-choice exam weighting.
 */
export interface SkillCategory {
  id: string;
  number: number;
  title: string;
  examWeight: string;
  examWeightMidpoint: number;
  description: string;
}

export interface FrqType {
  id: string;
  number: number;
  title: string;
  suggestedMinutes: number;
  description: string;
  /** The six-point analytic rubric rows used by AP readers. */
  rubric: { points: string; criterion: string; guidance: string }[];
  sampleTheses: { context: string; thesis: string; why: string }[];
}

export interface ExamSection {
  name: string;
  detail: string;
  weight: string;
  time: string;
  calculator: CalculatorPolicy;
}

export interface Course {
  slug: CourseSlug;
  name: string;
  shortName: string;
  accent: CourseAccent;
  tagline: string;
  description: string;
  /** ISO date of the published 2027 exam date. */
  examDate: string;
  /** Human-readable session info, e.g. "Session 1 - 8 a.m. local time". */
  examSession: string;
  examSections: ExamSection[];
  /** Course-level heads-up about CED changes that affect this student's year. */
  courseNotes?: CedNote[];
  units: Unit[];
  bigIdeas?: BigIdea[];
  skillCategories?: SkillCategory[];
  frqTypes?: FrqType[];
  /** Free, legitimate places to get more practice. */
  resources: { label: string; detail: string }[];
}

/* ------------------------------------------------------------------ */
/* Schedule                                                            */
/* ------------------------------------------------------------------ */

export type SchedulePhase =
  | "foundations"
  | "build"
  | "midyear-checkpoint"
  | "deepen"
  | "exam-review"
  | "exam-weeks";

export interface WeekAssignment {
  course: CourseSlug;
  /** Which unit this course is working on that week. */
  unit: string;
  /** The concrete thing to do this week for that course. */
  focus: string;
}

export interface SchedulePractice {
  course: CourseSlug;
  /** Practice set id from the course data, so the UI can deep-link to it. */
  practiceSetId?: string;
  label: string;
}

export interface ScheduleWeek {
  week: number;
  /** e.g. "Sep 7 - Sep 13" */
  dateRange: string;
  /** ISO date of the Monday that starts the week. */
  startDate: string;
  phase: SchedulePhase;
  /** The single deliverable that defines a successful week. */
  goal: string;
  assignments: WeekAssignment[];
  practice: SchedulePractice[];
  note?: string;
}

export type BlockType =
  | "new-content"
  | "practice"
  | "spaced-review"
  | "reading"
  | "writing"
  | "mock-exam"
  | "rest";

export interface TimeBlock {
  start: string;
  end: string;
  minutes: number;
  type: BlockType;
  activity: string;
  detail: string;
}

export interface DayPlan {
  day: string;
  shortDay: string;
  totalMinutes: number;
  blocks: TimeBlock[];
}
