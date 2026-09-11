import type { Course } from "@/data/types";

/**
 * PLACEHOLDER. This module exists so the app compiles while the full AP English
 * Literature and Composition content (9 CED units, skill categories, FRQ
 * rubrics, and passage-based practice) is authored. Replace wholesale.
 */
export const englishLiterature: Course = {
  slug: "ap-english-literature",
  name: "AP English Literature and Composition",
  shortName: "AP Lit",
  accent: "rose",
  tagline: "Read closely, argue precisely.",
  description:
    "Nine units alternating short fiction, poetry, and longer fiction or drama, built around eight big ideas and three timed essays.",
  examDate: "2027-05-05",
  examSession: "Session 1 - typically 8 a.m. local time",
  examSections: [
    {
      name: "Section I: Multiple Choice",
      detail: "55 questions across 5 passage sets of prose and poetry",
      weight: "45%",
      time: "60 minutes",
      calculator: "n/a",
    },
    {
      name: "Section II: Free Response",
      detail: "Poetry analysis, prose fiction analysis, and literary argument",
      weight: "55%",
      time: "120 minutes",
      calculator: "n/a",
    },
  ],
  units: [],
  resources: [],
};
