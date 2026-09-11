import type { Course } from "@/data/types";
import { unitsA } from "./units-a";
import { unitsB } from "./units-b";
import { bigIdeas, frqTypes, resources, skillCategories } from "./reference";

export const englishLiterature: Course = {
  slug: "ap-english-literature",
  name: "AP English Literature and Composition",
  shortName: "AP Lit",
  accent: "rose",
  tagline: "Read closely, argue precisely.",
  description:
    "Nine units alternating short fiction, poetry, and longer fiction or drama, built around the CED big ideas and three timed essays.",
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
  units: [...unitsA, ...unitsB],
  bigIdeas,
  skillCategories,
  frqTypes,
  resources,
};
