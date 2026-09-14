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
    "Nine CED units alternating short fiction, poetry, and longer fiction or drama, attached to this year's school texts: the Jago anthology, Antigone, Their Eyes Were Watching God, Never Let Me Go, and a choice novel.",
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
  courseNotes: [
    {
      tone: "info",
      text: "This year's classroom follows the College Board AP Lit CED. Required texts: Literature & Composition by Jago, Shea, Scanlon, and Aufses (Bedford/St. Martin's, 2011) for short fiction and poetry; Antigone by Sophocles; Their Eyes Were Watching God by Zora Neale Hurston; Never Let Me Go by Kazuo Ishiguro; and a student-chosen work of fiction as an independent Q3 literary-argument bank. The nine CED units stay in College Board order; school titles are attached to those units rather than replacing them.",
    },
    {
      tone: "info",
      text: "School weighting: formative 20% (reading responses, annotations, discussion prep, practice-writes, some MCQs, writing process, presentations) and summative 80% (final essays, projects, seminars, exams, research, some MCQs). Timed essays and passage sets in this study plan are practice for both.",
    },
  ],
};
