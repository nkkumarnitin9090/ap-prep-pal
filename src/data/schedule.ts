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
    goal: "Stand up the study system and take an honest baseline in all four courses.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 1: Limits and Continuity",
        focus:
          "Limit notation, estimating limits from graphs and tables, and the algebra toolkit: factoring, conjugates, and common denominators.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 1: Exploring One-Variable Data",
        focus:
          "Categorical versus quantitative variables, and describing a distribution in the CED order: shape, center, variability, unusual features.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 8: Fluids (bridge unit)",
        focus: "Density, pressure as force per area, and pressure as a function of depth in a static fluid.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 1: Short Fiction I",
        focus:
          "Annotate one short story closely: how action, dialogue, and telling detail reveal character rather than describe it.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u1-ps",
        label: "Baseline attempt untimed - the point is to find gaps, not to score well.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u1-ps",
        label: "Questions 1-3 as a diagnostic on distribution description.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u8-ps",
        label: "Fluids bridge set, questions 1-2, to see how much Physics 1 survived the summer.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u1-set",
        label: "One passage set to calibrate multiple-choice reading pace.",
      },
    ],
    note: "Build the two tools the rest of the year assumes: a single error log for missed problems and one flashcard deck covering all four courses.",
  },
  {
    week: 2,
    dateRange: "Sep 14 - Sep 20",
    startDate: "2026-09-14",
    phase: "foundations",
    goal: "Close out the entry unit in every course and hit the first timed set with no notes.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 1: Limits and Continuity",
        focus:
          "Trigonometric limits and the squeeze theorem, continuity at a point and on an interval, classifying discontinuities, limits at infinity, and the Intermediate Value Theorem.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 1: Exploring One-Variable Data",
        focus:
          "Boxplots and the 1.5 x IQR rule, comparing two distributions, z-scores, and normal percentile work in both directions.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 8: Fluids (bridge unit)",
        focus:
          "Pascal's principle, buoyant force and fraction submerged, the continuity equation, and Bernoulli's equation.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 1: Short Fiction I",
        focus:
          "Setting and structure: how sequencing, contrast, and narrative distance shape meaning. Draft your first prose fiction thesis.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u1-ps",
        label: "Full retake, timed, closed notes - target every item you missed in Week 1.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u8-ps",
        label: "Complete set with written justifications for the buoyancy items.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u1-set",
        label: "Finish the set, then reread every stem you got wrong to see what the question actually asked.",
      },
    ],
  },
  {
    week: 3,
    dateRange: "Sep 21 - Sep 27",
    startDate: "2026-09-21",
    phase: "foundations",
    goal: "Move from limits to derivatives, and write one timed prose fiction essay start to finish.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 2: Differentiation - Definition and Fundamental Properties",
        focus:
          "Average versus instantaneous rate of change, the limit definition of the derivative, differentiability implies continuity, and the power, sum, and constant-multiple rules.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 2: Exploring Two-Variable Data",
        focus:
          "Two-way tables with joint, marginal, and conditional relative frequencies, segmented bar charts, and describing scatterplots by direction, unusual features, form, and strength.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 9: Thermodynamics",
        focus:
          "Kinetic theory of temperature and pressure, root-mean-square molecular speed, and the ideal gas law with consistent units.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 1: Short Fiction I",
        focus:
          "Close out Short Fiction I with a 40-minute prose fiction analysis essay, then self-score the thesis and evidence rows.",
      },
    ],
    practice: [
      {
        course: "ap-statistics",
        practiceSetId: "stat-u2-ps",
        label: "Questions 1-3 on two-way tables and scatterplot description; save the regression items for Week 4.",
      },
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u1-ps",
        label: "Spaced retrieval: three limit items from memory before starting derivative work.",
      },
      {
        course: "ap-english-literature",
        label: "Saturday timed section: 26 multiple-choice questions on two prose passages in 30 minutes.",
      },
    ],
  },
  {
    week: 4,
    dateRange: "Sep 28 - Oct 4",
    startDate: "2026-09-28",
    phase: "foundations",
    goal: "Own every basic derivative rule and finish two-variable data, including computer output.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 2: Differentiation - Definition and Fundamental Properties",
        focus:
          "Product and quotient rules, derivatives of the six trigonometric functions, e^x and ln x, and tangent line equations.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 2: Exploring Two-Variable Data",
        focus:
          "Least-squares regression, residual plots, r versus r-squared, influential points, and reading regression computer output.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 9: Thermodynamics",
        focus:
          "PV diagrams and the four standard processes, work as area under a PV curve, and the first law with sign conventions.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 2: Poetry I",
        focus:
          "Line and stanza structure, punctuation and enjambment, and how imagery builds a controlling idea in a short poem.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u2-ps",
        label: "Full set, timed. Any item solved by pattern-matching gets rewritten with the rule named.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u2-ps",
        label: "Full set including the regression output item; interpret slope and r-squared in context every time.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u2-set",
        label: "First poetry passage set; mark the two lines that carry the poem's turn.",
      },
    ],
  },
  {
    week: 5,
    dateRange: "Oct 5 - Oct 11",
    startDate: "2026-10-05",
    phase: "foundations",
    goal: "Chain rule fluency, sampling design vocabulary, and thermodynamics finished.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 3: Differentiation - Composite, Implicit, and Inverse Functions",
        focus: "Chain rule on nested compositions and implicit differentiation, including tangent lines to curves.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 3: Collecting Data",
        focus:
          "Populations versus samples, selecting a simple random sample, stratified and cluster designs, and naming sources of bias precisely.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 9: Thermodynamics",
        focus:
          "Internal energy of a monatomic ideal gas, specific and latent heat, conduction and radiation, and entropy with the second law.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 2: Poetry I",
        focus:
          "Finish Poetry I with a timed poetry analysis essay; practice quoting a line fragment inside your own sentence.",
      },
    ],
    practice: [
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u9-ps",
        label: "Complete thermodynamics set, including the PV-diagram free response.",
      },
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u3-ps",
        label: "Questions 1-3 on chain rule and implicit differentiation.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u2-set",
        label: "Finish the poetry set and log which distractor type keeps catching you.",
      },
    ],
  },
  {
    week: 6,
    dateRange: "Oct 12 - Oct 18",
    startDate: "2026-10-12",
    phase: "build",
    goal: "Finish differentiation technique, finish study design, and start the first long literary work.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 3: Differentiation - Composite, Implicit, and Inverse Functions",
        focus:
          "Derivatives of inverse and inverse trigonometric functions, higher-order derivatives, and choosing a differentiation procedure under time pressure.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 3: Collecting Data",
        focus:
          "Completely randomized designs, blocking and matched pairs, confounding, and scope of inference: generalization versus causation.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 10: Electric Force, Field, and Potential",
        focus: "Coulomb's law, charging by conduction and induction, field lines, and superposition of fields.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 3: Longer Fiction or Drama I",
        focus:
          "Start the first novel or play: track the protagonist's central conflict and how exposition sets up later reversals.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u3-ps",
        label: "Full set, timed, with the procedure named before any algebra.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u3-ps",
        label: "Complete set; write scope-of-inference sentences in full for every design item.",
      },
      {
        course: "ap-calculus-bc",
        label: "Saturday timed section: 20 no-calculator Calculus BC multiple-choice questions from Units 1-3 in 40 minutes.",
      },
    ],
  },
];

export const weeklyPlan: DayPlan[] = [
  {
    day: "Monday",
    shortDay: "Mon",
    totalMinutes: 185,
    blocks: [
      {
        start: "4:00 p.m.",
        end: "4:20 p.m.",
        minutes: 20,
        type: "spaced-review",
        activity: "Mixed retrieval warm-up",
        detail:
          "Twenty cards pulled from every course studied so far: Calculus BC derivative rules, Physics 2 relationships, Statistics vocabulary, and one literary term. Say answers out loud before flipping.",
      },
      {
        start: "4:20 p.m.",
        end: "5:20 p.m.",
        minutes: 60,
        type: "new-content",
        activity: "Calculus BC new material",
        detail:
          "Work the week's assigned Calculus BC topics: read the topic, write the rule in your own words, then do three worked examples without looking at the solution.",
      },
      {
        start: "5:20 p.m.",
        end: "5:35 p.m.",
        minutes: 15,
        type: "rest",
        activity: "Break",
        detail: "Leave the desk: water, snack, and a short walk. No phone scrolling, which does not reset attention.",
      },
      {
        start: "5:35 p.m.",
        end: "6:20 p.m.",
        minutes: 45,
        type: "practice",
        activity: "Statistics problem set",
        detail:
          "Six to eight multiple-choice questions on the current Statistics unit, then rewrite every missed item as a full sentence of interpretation in context.",
      },
      {
        start: "7:30 p.m.",
        end: "8:15 p.m.",
        minutes: 45,
        type: "reading",
        activity: "AP Lit reading",
        detail:
          "Annotated reading from the week's assigned text. Mark shifts in tone, diction, and structure; end with two sentences on what the author is doing and why.",
      },
    ],
  },
  {
    day: "Tuesday",
    shortDay: "Tue",
    totalMinutes: 180,
    blocks: [
      {
        start: "4:00 p.m.",
        end: "4:20 p.m.",
        minutes: 20,
        type: "spaced-review",
        activity: "Formula and definition recall",
        detail:
          "Blank-sheet recall of the Physics 2 relationships for the current unit plus last week's Calculus BC rules, then check against notes and fix only what was wrong.",
      },
      {
        start: "4:20 p.m.",
        end: "5:20 p.m.",
        minutes: 60,
        type: "new-content",
        activity: "AP Physics 2 new material",
        detail:
          "Read the week's Physics 2 topics and build a one-page conceptual map: quantities, the relationship connecting them, and one sketch or graph per idea.",
      },
      {
        start: "5:20 p.m.",
        end: "5:35 p.m.",
        minutes: 15,
        type: "rest",
        activity: "Break",
        detail: "Stretch, eat something, and step outside. Set a timer so the break ends on time.",
      },
      {
        start: "5:35 p.m.",
        end: "6:20 p.m.",
        minutes: 45,
        type: "reading",
        activity: "AP Lit reading",
        detail:
          "Continue the assigned text. Keep a running list of quotations worth memorizing for the literary argument essay.",
      },
      {
        start: "7:30 p.m.",
        end: "8:10 p.m.",
        minutes: 40,
        type: "practice",
        activity: "Physics 2 reasoning questions",
        detail:
          "Four to six questions that demand a written explanation rather than a number. Justify each answer with a physical principle, not a formula rearrangement.",
      },
    ],
  },
  {
    day: "Wednesday",
    shortDay: "Wed",
    totalMinutes: 185,
    blocks: [
      {
        start: "4:00 p.m.",
        end: "4:20 p.m.",
        minutes: 20,
        type: "spaced-review",
        activity: "Statistics vocabulary drill",
        detail:
          "Rapid-fire the inference vocabulary and conditions checks covered so far, plus five Calculus BC limit or series facts from earlier units.",
      },
      {
        start: "4:20 p.m.",
        end: "5:20 p.m.",
        minutes: 60,
        type: "new-content",
        activity: "Statistics new material",
        detail:
          "Work through the week's Statistics topics with the calculator open: name the procedure, state the conditions, run it, then write the conclusion in context.",
      },
      {
        start: "5:20 p.m.",
        end: "5:35 p.m.",
        minutes: 15,
        type: "rest",
        activity: "Break",
        detail: "Short walk or music away from the desk before the timed essay, which needs a fresh head.",
      },
      {
        start: "5:35 p.m.",
        end: "6:20 p.m.",
        minutes: 45,
        type: "writing",
        activity: "AP Lit timed essay",
        detail:
          "Forty minutes under exam conditions on a poetry, prose fiction, or literary argument prompt, then five minutes scoring your own thesis and evidence rows against the six-point rubric.",
      },
      {
        start: "7:30 p.m.",
        end: "8:15 p.m.",
        minutes: 45,
        type: "reading",
        activity: "AP Lit reading",
        detail:
          "Assigned reading plus a five-minute written summary of how this section changes your reading of the whole work.",
      },
    ],
  },
  {
    day: "Thursday",
    shortDay: "Thu",
    totalMinutes: 180,
    blocks: [
      {
        start: "4:00 p.m.",
        end: "4:20 p.m.",
        minutes: 20,
        type: "spaced-review",
        activity: "Calculus BC error log review",
        detail:
          "Redo three problems from the running error log without notes. A problem leaves the log only after two clean solves on different days.",
      },
      {
        start: "4:20 p.m.",
        end: "5:15 p.m.",
        minutes: 55,
        type: "practice",
        activity: "Calculus BC free response",
        detail:
          "One full free-response question timed at fifteen minutes, then rework it slowly and grade against the rubric, watching units, justifications, and notation.",
      },
      {
        start: "5:15 p.m.",
        end: "5:30 p.m.",
        minutes: 15,
        type: "rest",
        activity: "Break",
        detail: "Move around and eat. Rest here is what makes the second half of the evening usable.",
      },
      {
        start: "5:30 p.m.",
        end: "6:15 p.m.",
        minutes: 45,
        type: "new-content",
        activity: "Physics 2 experimental design",
        detail:
          "Second Physics 2 session of the week aimed at lab reasoning: design a procedure, identify what to graph so the slope is meaningful, and predict the result.",
      },
      {
        start: "7:30 p.m.",
        end: "8:15 p.m.",
        minutes: 45,
        type: "reading",
        activity: "AP Lit reading",
        detail:
          "Assigned reading, then add this week's text to the comparison chart of narrators, speakers, and structural choices across the year's works.",
      },
    ],
  },
  {
    day: "Friday",
    shortDay: "Fri",
    totalMinutes: 120,
    blocks: [
      {
        start: "4:00 p.m.",
        end: "4:20 p.m.",
        minutes: 20,
        type: "spaced-review",
        activity: "Week wrap retrieval",
        detail:
          "One question from each of the four courses, chosen from this week's material, answered from memory before checking anything.",
      },
      {
        start: "4:20 p.m.",
        end: "5:00 p.m.",
        minutes: 40,
        type: "practice",
        activity: "Weakest-topic repair",
        detail:
          "Spend the whole block on whichever course lost the most points this week. Rewrite the concept, then work three fresh problems on it.",
      },
      {
        start: "5:00 p.m.",
        end: "5:15 p.m.",
        minutes: 15,
        type: "rest",
        activity: "Break",
        detail: "Deliberate stop. Friday stays short so the weekend blocks are productive rather than resented.",
      },
      {
        start: "5:15 p.m.",
        end: "6:00 p.m.",
        minutes: 45,
        type: "reading",
        activity: "AP Lit reading catch-up",
        detail:
          "Finish the week's assigned pages and consolidate annotations into one page of notes on theme, structure, and three usable quotations.",
      },
    ],
  },
  {
    day: "Saturday",
    shortDay: "Sat",
    totalMinutes: 275,
    blocks: [
      {
        start: "9:00 a.m.",
        end: "9:20 a.m.",
        minutes: 20,
        type: "spaced-review",
        activity: "Pre-section warm-up",
        detail:
          "Ten cards from the course being tested this morning, purely to get into exam headspace. No new material.",
      },
      {
        start: "9:20 a.m.",
        end: "10:50 a.m.",
        minutes: 90,
        type: "mock-exam",
        activity: "Timed section",
        detail:
          "One timed section under real conditions, rotating weekly through Calculus BC, Statistics, Physics 2, and AP Lit. Phone in another room, official directions read aloud, strict clock.",
      },
      {
        start: "10:50 a.m.",
        end: "11:20 a.m.",
        minutes: 30,
        type: "rest",
        activity: "Post-section rest",
        detail: "Eat, walk, do nothing academic. Scoring immediately after a timed section leads to sloppy analysis.",
      },
      {
        start: "11:20 a.m.",
        end: "12:20 p.m.",
        minutes: 60,
        type: "practice",
        activity: "Score and rework",
        detail:
          "Score the section, then for every miss write whether it was knowledge, process, or reading speed, and redo the item correctly. Add unresolved items to the error log.",
      },
      {
        start: "2:00 p.m.",
        end: "3:15 p.m.",
        minutes: 75,
        type: "reading",
        activity: "Long-form AP Lit reading",
        detail:
          "The week's longest reading block, reserved for the novel or play in progress so the longer works never slip behind.",
      },
    ],
  },
  {
    day: "Sunday",
    shortDay: "Sun",
    totalMinutes: 305,
    blocks: [
      {
        start: "9:30 a.m.",
        end: "9:50 a.m.",
        minutes: 20,
        type: "spaced-review",
        activity: "Cumulative card review",
        detail:
          "All four courses, weighted toward material from three or more weeks ago, which is exactly what the exams will ask about.",
      },
      {
        start: "9:50 a.m.",
        end: "11:05 a.m.",
        minutes: 75,
        type: "writing",
        activity: "AP Lit essay revision",
        detail:
          "Take Wednesday's timed essay and rewrite the thesis and one body paragraph with tighter evidence and commentary, then write what specifically improved.",
      },
      {
        start: "11:05 a.m.",
        end: "11:20 a.m.",
        minutes: 15,
        type: "rest",
        activity: "Break",
        detail: "Fifteen minutes off before the mixed set, which needs concentration rather than momentum.",
      },
      {
        start: "11:20 a.m.",
        end: "12:20 p.m.",
        minutes: 60,
        type: "practice",
        activity: "Mixed math and science set",
        detail:
          "Interleaved problems from Calculus BC, Statistics, and Physics 2 drawn from earlier units so retrieval stays hard and realistic.",
      },
      {
        start: "3:00 p.m.",
        end: "3:45 p.m.",
        minutes: 45,
        type: "spaced-review",
        activity: "Weekly reset",
        detail:
          "Update the unit checklists, prune the error log, and read next week's assignments so Monday starts without decisions to make.",
      },
      {
        start: "3:45 p.m.",
        end: "5:15 p.m.",
        minutes: 90,
        type: "rest",
        activity: "Protected downtime",
        detail:
          "Scheduled and non-negotiable: no schoolwork, no college applications. Sleep, exercise, friends, or family. This block is why the plan survives to May.",
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
