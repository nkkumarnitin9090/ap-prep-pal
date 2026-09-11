export interface PracticeQuestion {
  id: string;
  kind: "MC" | "FRQ";
  prompt: string;
  choices?: string[];
  answer: string;
  hint: string;
  solution: string;
}

export interface Unit {
  id: string;
  title: string;
  weight: string;
  concepts: string[];
  formulas: string[];
  practice: PracticeQuestion[];
}

export interface Subject {
  id: "physics2" | "stats" | "lit" | "calc-bc";
  name: string;
  short: string;
  tagline: string;
  color: string;
  soft: string;
  exam: { format: string; mcq: string; frq: string };
  units: Unit[];
  tips: string[];
}

export interface WeekPlan {
  week: number;
  dates: string;
  title: string;
  focus: { subjectId: Subject["id"]; text: string }[];
  tasks: string[];
  milestone?: string;
  mockWeek?: boolean;
}

export interface Drill {
  id: string;
  subjectId: Subject["id"] | "mixed";
  title: string;
  minutes: number;
  count: number;
  strategy: string;
}
