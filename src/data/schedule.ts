import type { DayPlan, SchedulePhase, ScheduleWeek } from "@/data/types";

/**
 * The 34-week year plan: week 1 begins Monday 2026-09-07 and week 34 covers the
 * first AP exams in May 2027. Week 16 intentionally spans two weeks of winter
 * break, so start dates are not uniformly seven days apart.
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
        unit: "Unit 1: Exploring One-Variable Data and Collecting Data",
        focus:
          "Categorical versus quantitative variables, and describing a distribution in the CED order: shape, center, variability, unusual features.",
      },
      {
        course: "ap-physics-2",
        unit: "Optional P1 review: Fluids (not a class unit)",
        focus:
          "Skip unless you want a Physics 1 refresh: density, pressure as force per area, and pressure versus depth. This school's Physics 2 sequence starts at Unit 9 Thermodynamics next week; Fluids is not taught as a class unit.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 1: Short Fiction I (Jago anthology)",
        focus:
          "From Literature & Composition (Jago, Shea, Scanlon, and Aufses): annotate one short story closely: how action, dialogue, and telling detail reveal character rather than describe it.",
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
        label: "Optional Fluids P1 review, questions 1-2 only. Skip this set if you are starting Unit 9 with the class.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u1-set",
        label: "One short-fiction passage set (Jago-style close reading) to calibrate multiple-choice reading pace.",
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
        unit: "Unit 1: Exploring One-Variable Data and Collecting Data",
        focus:
          "Boxplots and the 1.5 x IQR rule, comparing two distributions, and the effects of linear transformations on center and spread.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 9: Thermodynamics",
        focus:
          "Kinetic theory of temperature and pressure, and root-mean-square molecular speed. This is the first taught Physics 2 unit at school.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 1: Short Fiction I (Jago anthology)",
        focus:
          "Jago anthology: setting and structure in a second short story. How sequencing, contrast, and narrative distance shape meaning. Draft your first prose fiction thesis.",
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
        practiceSetId: "phys-u9-ps",
        label: "Thermodynamics set, questions 1-2, on kinetic theory and molecular speed.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u1-set",
        label: "Finish the Short Fiction I set, then reread every stem you got wrong to see what the question actually asked.",
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
        unit: "Unit 1: Exploring One-Variable Data and Collecting Data",
        focus:
          "Populations versus samples, selecting a simple random sample, stratified and cluster designs, and naming sources of bias precisely.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 9: Thermodynamics",
        focus:
          "The ideal gas law with consistent units, then PV diagrams and the four standard processes: isothermal, isobaric, isochoric, and adiabatic.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 1: Short Fiction I (Jago anthology)",
        focus:
          "Close out Short Fiction I with a 40-minute prose fiction analysis essay on a Jago anthology story, then self-score the thesis and evidence rows.",
      },
    ],
    practice: [
      {
        course: "ap-statistics",
        practiceSetId: "stat-u1-ps",
        label: "Questions 4-7 on sampling methods and bias; write the direction of each bias in a full sentence.",
      },
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u1-ps",
        label: "Spaced retrieval: three limit items from memory before starting derivative work.",
      },
      {
        course: "ap-english-literature",
        label: "Saturday timed section: 26 multiple-choice questions on two short-fiction passages (Jago-style prose) in 30 minutes.",
      },
    ],
  },
  {
    week: 4,
    dateRange: "Sep 28 - Oct 4",
    startDate: "2026-09-28",
    phase: "foundations",
    goal: "Own every basic derivative rule and finish study design, including scope of inference.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 2: Differentiation - Definition and Fundamental Properties",
        focus:
          "Product and quotient rules, derivatives of the six trigonometric functions, e^x and ln x, and tangent line equations.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 1: Exploring One-Variable Data and Collecting Data",
        focus:
          "Completely randomized designs, blocking and matched pairs, confounding, and scope of inference: generalization versus causation.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 9: Thermodynamics",
        focus:
          "Work as area under a PV curve, the first law with sign conventions, and internal energy of a monatomic ideal gas.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 2: Poetry I (Jago anthology)",
        focus:
          "From the Jago anthology: line and stanza structure, punctuation and enjambment, and how imagery builds a controlling idea in a short poem.",
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
        practiceSetId: "stat-u1-ps",
        label: "Complete set; write scope-of-inference sentences in full for every design item.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u2-set",
        label: "First Jago-style poetry passage set; mark the two lines that carry the poem's turn.",
      },
    ],
  },
  {
    week: 5,
    dateRange: "Oct 5 - Oct 11",
    startDate: "2026-10-05",
    phase: "foundations",
    goal: "Chain rule fluency, two-way tables and probability, and thermodynamics finished.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 3: Differentiation - Composite, Implicit, and Inverse Functions",
        focus: "Chain rule on nested compositions and implicit differentiation, including tangent lines to curves.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 2: Probability, Random Variables, and Probability Distributions",
        focus:
          "Two-way tables with joint, marginal, and conditional relative frequencies, segmented bar charts, and simulation to estimate probability.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 9: Thermodynamics",
        focus:
          "Specific and latent heat, conduction and radiation, and entropy with the second law. Close the first taught school unit this week.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 2: Poetry I (Jago anthology)",
        focus:
          "Finish Poetry I with a timed poetry analysis essay on a Jago anthology poem; practice quoting a line fragment inside your own sentence.",
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
        label: "Finish the Poetry I set and log which distractor type keeps catching you.",
      },
    ],
  },
  {
    week: 6,
    dateRange: "Oct 12 - Oct 18",
    startDate: "2026-10-12",
    phase: "build",
    goal: "Finish differentiation technique, own probability rules, and start the first long literary work.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 3: Differentiation - Composite, Implicit, and Inverse Functions",
        focus:
          "Derivatives of inverse and inverse trigonometric functions, higher-order derivatives, and choosing a differentiation procedure under time pressure.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 2: Probability, Random Variables, and Probability Distributions",
        focus:
          "The addition and complement rules, conditional probability, and testing independence numerically.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 10: Electrostatics (Electric Force, Field, and Potential)",
        focus: "Coulomb's law, charging by conduction and induction, field lines, and superposition of fields.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 3: Longer Fiction or Drama I (Antigone)",
        focus:
          "Start Antigone: track Antigone's and Creon's central conflict, and how the prologue and early episodes set up later reversals of law, family, and the state.",
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
        practiceSetId: "stat-u2-ps",
        label: "Questions 1-4 on probability rules, expected value, and binomial conditions.",
      },
      {
        course: "ap-calculus-bc",
        label: "Saturday timed section: 20 no-calculator Calculus BC multiple-choice questions from Units 1-3 in 40 minutes.",
      },
    ],
  },
  {
    week: 7,
    dateRange: "Oct 19 - Oct 25",
    startDate: "2026-10-19",
    phase: "build",
    goal: "Turn derivatives into interpretation: rates in context, and start probability.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 4: Contextual Applications of Differentiation",
        focus:
          "Interpreting the derivative with units, straight-line motion with position, velocity, and acceleration, and deciding when an object speeds up.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 2: Probability, Random Variables, and Probability Distributions",
        focus:
          "Discrete random variables, expected value and standard deviation, and the binomial model: recognizing it, computing probabilities, and using mean and standard deviation correctly.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 10: Electrostatics (Electric Force, Field, and Potential)",
        focus:
          "Uniform fields between parallel plates, electric potential energy versus potential, and equipotential surfaces.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 3: Longer Fiction or Drama I (Antigone)",
        focus:
          "Antigone: dramatic irony and character. What Antigone, Creon, and the Chorus can and cannot see, and how those limits produce the play's argument.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u4-ps",
        label: "Questions 1-3 on motion and related rates setup.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u2-ps",
        label: "Questions 1-4 on probability rules and discrete random variables; name the distribution before computing.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u9-ps",
        label: "Spaced retake of two thermodynamics items, two weeks after finishing the unit.",
      },
    ],
  },
  {
    week: 8,
    dateRange: "Oct 26 - Nov 1",
    startDate: "2026-10-26",
    phase: "build",
    goal: "Finish related rates and linearization, and finish the electrostatics unit.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 4: Contextual Applications of Differentiation",
        focus:
          "Related rates from geometric relationships, linear approximation and whether it over- or underestimates, and L'Hospital's rule.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 2: Probability, Random Variables, and Probability Distributions",
        focus:
          "The normal distribution, z-scores, the empirical rule, and percentile calculations in both directions.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 10: Electrostatics (Electric Force, Field, and Potential)",
        focus:
          "Capacitors, capacitance and dielectrics, and conservation of energy for a charge moving through a potential difference.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 3: Longer Fiction or Drama I (Antigone)",
        focus:
          "Finish Antigone and write a literary argument thesis that makes a defensible interpretive claim about the whole play (structure, character, and competing claims of duty).",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u4-ps",
        label: "Full set, timed; every related-rates answer needs units and a labeled diagram.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u10-ps",
        label: "Complete electrostatics set with a sketch of the field for each configuration.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u3-set",
        label: "Longer fiction or drama passage set, then outline a Q3 literary argument on Antigone in ten minutes.",
      },
    ],
  },
  {
    week: 9,
    dateRange: "Nov 2 - Nov 8",
    startDate: "2026-11-02",
    phase: "build",
    goal: "Curve analysis with justification language, and finish probability distributions.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 5: Analytical Applications of Differentiation",
        focus:
          "Mean Value and Extreme Value Theorems, increasing and decreasing intervals, and the first derivative test with justification sentences.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 2: Probability, Random Variables, and Probability Distributions",
        focus:
          "Sampling variability, the Central Limit Theorem, and using a sampling distribution to judge whether a result is surprising.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 11: Electric Circuits",
        focus: "Current and conventional direction, EMF and terminal voltage, resistance and resistivity, and Ohm's law.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 4: Short Fiction II (Jago anthology)",
        focus:
          "Jago anthology: character change over a story. Interpret contrasts and inconsistencies instead of smoothing them over.",
      },
    ],
    practice: [
      {
        course: "ap-statistics",
        practiceSetId: "stat-u2-ps",
        label: "Full set, including the binomial and normal free-response items; name the distribution before computing.",
      },
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u5-ps",
        label: "Questions 1-3 on extrema and the first derivative test.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u4-set",
        label: "Short Fiction II set (Jago-style prose) under a strict 30-minute clock.",
      },
    ],
  },
  {
    week: 10,
    dateRange: "Nov 9 - Nov 15",
    startDate: "2026-11-09",
    phase: "build",
    goal: "Optimization and concavity done properly, and inference for a proportion started.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 5: Analytical Applications of Differentiation",
        focus:
          "Concavity and the second derivative test, connecting f, f', and f'' across graphs, optimization problems, and implicit relationships.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 3: Inference for Categorical Data: Proportions",
        focus:
          "Unbiased estimators, the sampling distribution of a sample proportion with its conditions, and the logic of a confidence interval for one proportion.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 11: Electric Circuits",
        focus:
          "Electric power, series and parallel resistors, and the loop and junction rules on multi-branch circuits.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 4: Short Fiction II (Jago anthology)",
        focus:
          "Finish Short Fiction II with a timed prose analysis essay on a Jago anthology story, focused on commentary that explains, not restates.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u5-ps",
        label: "Full set, timed, with a justification sentence written for every extremum claim.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u10-ps",
        label: "Retake the two capacitor items from memory before moving deeper into circuits.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u4-set",
        label: "Finish the Short Fiction II set, then rewrite two commentary sentences from the essay to be more specific.",
      },
    ],
  },
  {
    week: 11,
    dateRange: "Nov 16 - Nov 22",
    startDate: "2026-11-16",
    phase: "build",
    goal: "Open integration, run the first significance test for a proportion, and finish circuits.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 6: Integration and Accumulation of Change",
        focus:
          "Riemann sums and accumulation, the definite integral as accumulated change, and the Fundamental Theorem of Calculus with a variable upper limit.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 3: Inference for Categorical Data: Proportions",
        focus:
          "One-sample significance test for a proportion: hypotheses, conditions, standardized test statistic, p-value, and a conclusion in context.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 11: Electric Circuits",
        focus: "Capacitors in circuits, RC behavior at t = 0 and long after, and reasoning about brightness and current changes.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 5: Poetry II (Jago anthology)",
        focus:
          "Jago anthology: extended metaphor and conceit. How a comparison develops and where it strains or breaks.",
      },
    ],
    practice: [
      {
        course: "ap-statistics",
        practiceSetId: "stat-u3-ps",
        label: "Questions 1-6 on sampling distributions of p-hat, confidence intervals, and the one-proportion z-test.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u11-ps",
        label: "Complete circuits set, including the multi-loop free response.",
      },
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u6-ps",
        label: "Questions 1-2 on Riemann sums and accumulation functions.",
      },
    ],
  },
  {
    week: 12,
    dateRange: "Nov 23 - Nov 29",
    startDate: "2026-11-23",
    phase: "build",
    goal: "Consolidate the first half of the fall with no new content and a real break.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Units 1-5 review (no new content)",
        focus:
          "One 45-minute session clearing the derivative entries in the error log; skip the optimization problems you already own.",
      },
      {
        course: "ap-statistics",
        unit: "Units 1-2 review (no new content)",
        focus: "Rebuild the study-design and probability-rule pages from memory, then check them against notes.",
      },
      {
        course: "ap-physics-2",
        unit: "Units 9-11 review (no new content)",
        focus:
          "Reread the two conceptual maps that feel weakest among thermodynamics, electrostatics, and circuits, and redo one circuits item you missed. Fluids is not a class unit.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 5: Poetry II (Jago anthology)",
        focus:
          "Jago anthology, reading only: two poems a day with light annotation and no essay this week. Keep the habit, drop the intensity.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u1-ps",
        label: "Spaced retake of the limits set, ten weeks after first study.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u1-ps",
        label: "Spaced retake of the study-design items; these reappear on every mock exam.",
      },
    ],
    note: "Thanksgiving week: deliberately light. Two short weekday sessions and one weekend session, no timed exam, and no new units. Rest is part of the plan, not a failure of it.",
  },
  {
    week: 13,
    dateRange: "Nov 30 - Dec 6",
    startDate: "2026-11-30",
    phase: "build",
    goal: "Antidifferentiation technique, two-proportion inference, and magnetic force.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 6: Integration and Accumulation of Change",
        focus:
          "Both parts of the Fundamental Theorem, basic antiderivatives, u-substitution, and properties of definite integrals.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 3: Inference for Categorical Data: Proportions",
        focus:
          "Two-proportion intervals and tests, including the pooled proportion, plus interpreting the interval and the level correctly.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 12: Magnetism and Electromagnetism",
        focus:
          "Magnetic fields and field direction, force on a moving charge, and circular motion of a charge in a uniform field.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 5: Poetry II (Jago anthology)",
        focus:
          "Jago anthology: extended metaphor continued plus sound and syntax. How meter, rhyme, and sentence shape support the poem's argument.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u6-ps",
        label: "Questions 3-4 on the Fundamental Theorem and u-substitution.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u3-ps",
        label: "Questions 3-6 on one-proportion intervals and tests; write the interpretation in context every time.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u5-set",
        label: "Poetry II passage set, then annotate the two questions you spent longest on.",
      },
    ],
  },
  {
    week: 14,
    dateRange: "Dec 7 - Dec 13",
    startDate: "2026-12-07",
    phase: "build",
    goal: "Finish integration technique, run your first significance test, and finish Poetry II.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 6: Integration and Accumulation of Change",
        focus:
          "BC-only technique: integration by parts, partial fractions, and improper integrals with a limit written explicitly.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 3: Inference for Categorical Data: Proportions",
        focus:
          "Type I and Type II errors and power in context, then selecting among one- and two-proportion procedures.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 12: Magnetism and Electromagnetism",
        focus: "Force on a current-carrying wire, fields from wires and loops, and magnetic flux through a surface.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 5: Poetry II (Jago anthology)",
        focus:
          "Finish Poetry II with a timed poetry analysis essay on a Jago anthology poem; the thesis must name the poem's movement, not just its subject.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u6-ps",
        label: "Full integration set, timed, half with no calculator.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u12-ps",
        label: "Questions 1-3 on magnetic force and field direction; use the right-hand rule deliberately.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u5-set",
        label: "Finish the Poetry II set and log every question type you rushed.",
      },
    ],
  },
  {
    week: 15,
    dateRange: "Dec 14 - Dec 20",
    startDate: "2026-12-14",
    phase: "build",
    goal: "Differential equations opened, chi-square tests started, electromagnetism closed.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 7: Differential Equations",
        focus:
          "Verifying solutions, sketching and reading slope fields, separation of variables with an initial condition, and exponential models.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 3: Inference for Categorical Data: Proportions",
        focus:
          "The chi-square statistic and distributions, expected counts in a two-way table, and the chi-square test for homogeneity. Skip goodness-of-fit: it is not assessed in 2026-27.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 12: Magnetism and Electromagnetism",
        focus: "Faraday's law, Lenz's law, and induced EMF from a changing flux, including the direction of induced current.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 6: Longer Fiction or Drama II (Their Eyes Were Watching God)",
        focus:
          "Begin Their Eyes Were Watching God: chart how structure, foils, and setting shifts (Eatonville, the muck) advance Janie's central tension. Track narration and dialect as they reveal character.",
      },
    ],
    practice: [
      {
        course: "ap-statistics",
        practiceSetId: "stat-u3-ps",
        label: "Complete set including both proportion free-response items; conclusions must link p-value to alpha to context.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u12-ps",
        label: "Complete set with the induction free response written as a full paragraph argument.",
      },
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u7-ps",
        label: "Questions 1-3 on slope fields and separable equations.",
      },
    ],
  },
  {
    week: 16,
    dateRange: "Dec 21 - Jan 3",
    startDate: "2026-12-21",
    phase: "build",
    goal: "Hold the fall's gains over the break and read the long work without exam pressure.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 7: Differential Equations",
        focus:
          "Two short sessions only: Euler's method and logistic growth, plus a slow rework of the fall's messiest integration problems.",
      },
      {
        course: "ap-statistics",
        unit: "Units 1-3 maintenance",
        focus:
          "One page from memory listing every inference condition met so far, and one interpretation sentence per procedure.",
      },
      {
        course: "ap-physics-2",
        unit: "Units 9-12 maintenance",
        focus:
          "Rebuild the thermodynamics, electrostatics, circuits, and magnetism concept maps from blank paper; check them only after you have finished.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 6: Longer Fiction or Drama II (Their Eyes Were Watching God)",
        focus:
          "Break reading push: finish Their Eyes Were Watching God and keep a running quotation bank of twelve passages for the literary argument essay. Attend to narration, dialect, and who is allowed to tell Janie's story.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u7-ps",
        label: "Finish the differential equations set at a relaxed pace, untimed.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u2-ps",
        label: "Spaced retake of probability, binomial, and the Central Limit Theorem, six weeks after first study.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u6-set",
        label: "One passage set on Their Eyes Were Watching God, untimed, for comprehension rather than speed.",
      },
    ],
    note: "This entry covers the two-week winter break (Dec 21 - Jan 3). Plan roughly half the usual weekly load: reading stays daily, everything else drops to two or three sessions per week, and there are no timed exams. Adjust to your school's actual break dates.",
  },
  {
    week: 17,
    dateRange: "Jan 4 - Jan 10",
    startDate: "2027-01-04",
    phase: "build",
    goal: "Restart at full volume: integration applications, chi-square tests, and optics.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 8: Applications of Integration",
        focus:
          "Average value, area between curves, and volumes by cross sections and by the disc and washer methods.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 3: Inference for Categorical Data: Proportions",
        focus:
          "Chi-square test for independence, degrees of freedom for a two-way table, and selecting among chi-square, two-proportion, and other categorical procedures.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 13: Geometric Optics",
        focus:
          "Reflection and refraction, index of refraction, total internal reflection, and ray diagrams for plane and curved mirrors.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 6: Longer Fiction or Drama II (Their Eyes Were Watching God)",
        focus:
          "Finish Unit 6 with a literary argument essay on Their Eyes Were Watching God, using the quotation bank built over the break.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u8-ps",
        label: "Questions 1-2 on area between curves and volume by cross sections.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u3-ps",
        label: "Chi-square items from the set, timed; write the hypotheses about association or homogeneity in context every time.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u13-ps",
        label: "Questions 1-2 on refraction and mirror ray diagrams.",
      },
    ],
  },
  {
    week: 18,
    dateRange: "Jan 11 - Jan 17",
    startDate: "2027-01-11",
    phase: "midyear-checkpoint",
    goal: "Take a full-length timed section in every course and rewrite the spring plan around the results.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Units 1-8 checkpoint",
        focus:
          "Full Section I under exam timing, then classify every miss as knowledge, algebra, or timing before doing anything else.",
      },
      {
        course: "ap-statistics",
        unit: "Units 1-3 checkpoint",
        focus:
          "Full multiple-choice section plus one ten-point free-response question scored against the official rubric. There is no Investigative Task on the 2026-27 exam.",
      },
      {
        course: "ap-physics-2",
        unit: "Units 9-13 checkpoint",
        focus:
          "Timed multiple-choice section covering thermodynamics through geometric optics, then one paragraph-length argument question graded for physics reasoning, not prose.",
      },
      {
        course: "ap-english-literature",
        unit: "Units 1-6 checkpoint (Jago, Antigone, Their Eyes)",
        focus:
          "Full 55-question multiple-choice section in 60 minutes plus one timed essay of each of the three types. Write Q3 from memory on Antigone or Their Eyes Were Watching God.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        label: "Full Calculus BC Section I: 29 no-calculator questions in 62 minutes, then 13 calculator questions in 38 minutes.",
      },
      {
        course: "ap-statistics",
        label: "Full Statistics Section I: 42 multiple-choice questions in 90 minutes.",
      },
      {
        course: "ap-physics-2",
        label: "Physics 2 Section I: 42 multiple-choice questions in 85 minutes, calculator allowed.",
      },
      {
        course: "ap-english-literature",
        label: "AP Lit Section I: 55 questions in 60 minutes, followed on Sunday by two timed essays (include a Q3 from Antigone or Their Eyes Were Watching God).",
      },
    ],
    note: "Midyear checkpoint. Score everything honestly and write down the three weakest topics per course; weeks 19 onward should give those topics extra practice time. Do not start new units this week.",
  },
  {
    week: 19,
    dateRange: "Jan 18 - Jan 24",
    startDate: "2027-01-18",
    phase: "deepen",
    goal: "Close applications of integration, start t-procedures, and finish geometric optics.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 8: Applications of Integration",
        focus:
          "Volumes of revolution about a line other than an axis, arc length as a definite integral, and total distance versus displacement from velocity.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 4: Inference for Quantitative Data: Means",
        focus:
          "Sampling distributions of sample means, why t rather than z, degrees of freedom, and the one-sample t interval for a mean with conditions checked in writing.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 13: Geometric Optics",
        focus:
          "The mirror and lens equation with sign conventions, ray diagrams for thin lenses, and converging versus diverging lenses including image character.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 7: Short Fiction III (Jago anthology)",
        focus:
          "Jago anthology: sources of narrator unreliability. Name the cause (youth, self-interest, limited access) and the sentence where the narration betrays itself.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u8-ps",
        label: "Full set, timed, including the washer-about-a-line and arc-length items.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u4-ps",
        label: "Questions 1-2 on sampling distributions of means and one-sample t intervals.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u13-ps",
        label: "Complete geometric optics set with a labeled ray diagram on every lens item.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u7-set",
        label: "Short Fiction III set, questions 1-3 on narrative distance; mark the words that belong to the character rather than the narrator.",
      },
    ],
    note: "Pull the three weakest topics per course from the Week 18 checkpoint into Friday's repair block this week and keep them there until they leave the error log.",
  },
  {
    week: 20,
    dateRange: "Jan 25 - Jan 31",
    startDate: "2027-01-25",
    phase: "deepen",
    goal: "Open parametric calculus, run one-sample t-tests, and start the waves unit.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "Parametric dy/dx as (dy/dt)/(dx/dt), the second derivative with the extra division by dx/dt, and horizontal versus vertical tangents.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 4: Inference for Quantitative Data: Means",
        focus:
          "One-sample t-test for a mean: hypotheses about mu not x-bar, conditions checked in writing, and a conclusion that links p-value to alpha to context.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 14: Waves, Sound, and Physical Optics",
        focus:
          "Wave pulses and the wave equation, electromagnetic waves and the spectrum, polarization at a boundary, and the Doppler effect from compressed wavefronts.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 7: Short Fiction III (Jago anthology)",
        focus:
          "Jago anthology: free indirect discourse and the retrospective narrator. Separate the narrating self from the narrated self, and mark idiom that is the character's.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u9-ps",
        label: "Questions 1-3 on parametric derivatives and tangents.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u4-ps",
        label: "Questions 1-4 on one-sample t intervals and tests; hypotheses must be about mu, not x-bar.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u14-ps",
        label: "Questions 1-3 on wave properties and Doppler reasoning.",
      },
    ],
  },
  {
    week: 21,
    dateRange: "Feb 1 - Feb 7",
    startDate: "2027-02-01",
    phase: "deepen",
    goal: "Finish vector-valued motion, finish matched-pairs t, and own standing waves.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "Vector-valued position, velocity, and acceleration; speed as a scalar; displacement versus total distance; and recovering position from velocity plus an initial point.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 4: Inference for Quantitative Data: Means",
        focus:
          "Recognizing a matched-pairs design and running a one-sample t procedure on the differences, with df equal to the number of pairs minus one.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 14: Waves, Sound, and Physical Optics",
        focus:
          "Superposition, interference, and beats, then standing waves on strings and in pipes: nodes versus antinodes, and odd harmonics only in a closed-open pipe.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 7: Short Fiction III (Jago anthology)",
        focus:
          "Finish Short Fiction III with a 40-minute prose analysis essay on a Jago anthology story; the thesis must name what the narration does, not what the story is about.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u9-ps",
        label: "Questions 4-6 on vector motion, speed, and total distance.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u4-ps",
        label: "Full set, timed; the matched-pairs item is scored zero if you run a two-sample test on it.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u7-set",
        label: "Finish the Short Fiction III set, then rewrite two commentary sentences so they explain the language rather than restate the plot.",
      },
    ],
  },
  {
    week: 22,
    dateRange: "Feb 8 - Feb 14",
    startDate: "2027-02-08",
    phase: "deepen",
    goal: "Close polar calculus, close two-sample t, and start physical optics and Poetry III.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "Polar conversion, dy/dx in polar form, area as (1/2) times the integral of r-squared, and area between two polar curves with the right theta limits.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 4: Inference for Quantitative Data: Means",
        focus:
          "Two-sample t interval and test, conservative df, and the decision not to pool variances unless the problem explicitly says to.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 14: Waves, Sound, and Physical Optics",
        focus:
          "Diffraction, double-slit interference and diffraction gratings, and thin-film interference including the half-wavelength phase shift on reflection from a higher-index surface.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 8: Poetry III (Jago anthology)",
        focus:
          "Jago anthology: paradox, ambiguity, and juxtaposition. How a contrast or a double meaning produces the poem's argument rather than decorating it.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u9-ps",
        label: "Full set, timed, with the polar-area items written as integrals before any evaluation.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u4-ps",
        label: "Retake the two-sample items from memory and rewrite every conclusion in context.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u14-ps",
        label: "Remaining items, including double-slit and thin-film; count phase shifts before choosing constructive or destructive.",
      },
    ],
  },
  {
    week: 23,
    dateRange: "Feb 15 - Feb 21",
    startDate: "2027-02-15",
    phase: "deepen",
    goal: "Open infinite series, finish inference for means, and close physical optics.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "Nth-term test for divergence only, geometric series with the correct first term, p-series and the harmonic series, and the integral test with a limit written out.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 4: Inference for Quantitative Data: Means",
        focus:
          "Selecting among one-sample, matched-pairs, and two-sample t procedures, and writing state-plan-do-conclude for a mixed means free-response item.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 14: Waves, Sound, and Physical Optics",
        focus:
          "Finish the unit with mixed interference and standing-wave items under time pressure, then write one experimental-design outline for measuring wavelength.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 8: Poetry III (Jago anthology)",
        focus:
          "Jago anthology: irony and conceit in a denser poem. Name which kind of irony operates, who is its target, and whether the speaker is in on it.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u10-ps",
        label: "Questions 1-3 on geometric sums, p-series, and the nth-term test.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u4-ps",
        label: "Complete set, timed; name the procedure first and check conditions with numbers.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u14-ps",
        label: "Full retake of any missed interference or standing-wave item, closed notes.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u8-set",
        label: "First Poetry III passage set (Jago-style); mark the two lines that carry the poem's turn.",
      },
    ],
  },
  {
    week: 24,
    dateRange: "Feb 22 - Feb 28",
    startDate: "2027-02-22",
    phase: "deepen",
    goal: "Comparison tests fluent, regression analysis started, and modern physics opened.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "Direct comparison and limit comparison with a named p-series or geometric series, plus the alternating series test and its truncation-error bound.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 5: Regression Analysis",
        focus:
          "Describing a scatterplot by direction, unusual features, form, and strength, plus correlation r and its properties.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 15: Modern Physics",
        focus:
          "Photon energy E = hf = hc/lambda, de Broglie wavelength, the photoelectric effect with threshold frequency, and stopping potential versus intensity.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 8: Poetry III (Jago anthology)",
        focus:
          "Finish Poetry III with a timed poetry analysis essay on a Jago anthology poem; the thesis must name the poem's movement and a specific tension, not just its subject.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u10-ps",
        label: "Questions on comparison tests and the alternating-series error bound; the justification sentence is required.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u5-ps",
        label: "Questions 1-4 on the least-squares line, residuals, r-squared, and properties of r.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u15-ps",
        label: "Questions 1-3 on photon energy and the photoelectric effect.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u8-set",
        label: "Finish the Poetry III set and log which stem type (shift, diction, structure) keeps costing time.",
      },
    ],
  },
  {
    week: 25,
    dateRange: "Mar 1 - Mar 7",
    startDate: "2027-03-01",
    phase: "deepen",
    goal: "Ratio test and interval of convergence, finish regression analysis, and spectra opened.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "Ratio test, absolute versus conditional convergence, radius of convergence from the ratio test, and testing both endpoints separately.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 5: Regression Analysis",
        focus:
          "Least-squares regression, residual plots, r versus r-squared, influential points, and reading regression computer output. Inference for the slope is not on the 2026-27 exam.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 15: Modern Physics",
        focus:
          "Bohr model and quantized energy levels, emission and absorption spectra, and blackbody radiation: hotter objects peak at shorter wavelengths.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 9: Longer Fiction or Drama III (Never Let Me Go + choice novel)",
        focus:
          "Begin Never Let Me Go: track how structure, character complexity, and setting interact across Hailsham rather than scene by scene. Also choose (or continue) your independent novel for the Q3 literary-argument bank.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u10-ps",
        label: "Interval-of-convergence items; write the endpoint tests out in full even when the radius is obvious.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u5-ps",
        label: "Full set including the regression output item; interpret slope and r-squared in context every time, and answer the observational-causation question in a complete sentence.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u15-ps",
        label: "Questions on energy-level transitions and spectra; compute photon energy with hc = 1240 eV nm.",
      },
    ],
    note: "New Statistics content finishes this week with Unit 5: Regression Analysis. Inference for slopes was removed from the 2026-27 course; do not treat it as May material.",
  },
  {
    week: 26,
    dateRange: "Mar 8 - Mar 14",
    startDate: "2027-03-08",
    phase: "deepen",
    goal: "Taylor polynomials with error bounds, mixed inference fluency, and nuclear physics closed.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "Taylor and Maclaurin polynomials, the Lagrange error bound with M named and justified, and the alternating-series error bound used only when it applies.",
      },
      {
        course: "ap-statistics",
        unit: "Units 3-4 inference fluency",
        focus:
          "Two full inference free-response questions under a twenty-minute clock each: name the procedure first, check conditions with numbers, then conclude in context.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 15: Modern Physics",
        focus:
          "Compton scattering, mass-energy equivalence and nuclear binding energy, and radioactive decay, fission, and fusion with charge and mass number conserved.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 9: Longer Fiction or Drama III (Never Let Me Go + choice novel)",
        focus:
          "Never Let Me Go: character complexity and social or historical setting as pressure, not backdrop. Keep a running quotation bank of twelve passages. Read the choice novel in parallel for Q3.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u10-ps",
        label: "Taylor-polynomial and error-bound items; name which error bound you are using before computing.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u3-ps",
        label: "Spaced retake of the proportions and chi-square set; conclusions must still name alpha.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u15-ps",
        label: "Complete modern-physics set, including the nuclear and photoelectric free-response items.",
      },
    ],
  },
  {
    week: 27,
    dateRange: "Mar 15 - Mar 21",
    startDate: "2027-03-15",
    phase: "deepen",
    goal: "Hold series and inference over a lighter week, and keep reading the long work.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "Two short sessions only: memorized Maclaurin series for e^x, sin x, cos x, and 1/(1 - x), plus one substitution or differentiation to build a new series.",
      },
      {
        course: "ap-statistics",
        unit: "Units 3-5 maintenance",
        focus:
          "One page from memory listing every inference procedure with its hypotheses, statistic, and df; check it against notes only after you have finished.",
      },
      {
        course: "ap-physics-2",
        unit: "Units 13-15 maintenance",
        focus:
          "Rebuild the optics, waves, and modern-physics concept maps from blank paper; redo one photoelectric or thin-film item you missed.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 9: Longer Fiction or Drama III (Never Let Me Go + choice novel)",
        focus:
          "Reading push: finish or nearly finish Never Let Me Go. Light annotation only, no timed essay this week. Keep the choice novel moving.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u10-ps",
        label: "Maclaurin-manipulation items untimed; write the known series first, then substitute.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u9-set",
        label: "One Unit 9 passage set (skills for Never Let Me Go), untimed, for comprehension rather than speed.",
      },
    ],
    note: "Likely spring-break window: deliberately light, on the Thanksgiving-week pattern. Two short weekday sessions and one weekend session, no full timed exam. Adjust to your school's actual break dates.",
  },
  {
    week: 28,
    dateRange: "Mar 22 - Mar 28",
    startDate: "2027-03-22",
    phase: "deepen",
    goal: "Series free-response fluency, inference under a clock, and the last literary argument on a new work.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "A one-page convergence-test decision tree, then two released-style series free-response questions: interval of convergence and a Taylor remainder.",
      },
      {
        course: "ap-statistics",
        unit: "Units 3-5 inference fluency",
        focus:
          "Four mixed inference items in forty minutes: two intervals and two tests, covering proportions, means, and chi-square. Procedure name is the first sentence of every solution.",
      },
      {
        course: "ap-physics-2",
        unit: "Units 13-15 FRQ formats",
        focus:
          "One of each remaining free-response format: Mathematical Routines, Translation Between Representations, Experimental Design, and Qualitative/Quantitative Translation, drawn from optics, waves, or modern physics.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 9: Longer Fiction or Drama III (Never Let Me Go + choice novel)",
        focus:
          "Finish Unit 9 with a literary argument essay on Never Let Me Go, using the quotation bank. The line of reasoning should not be rearrangable. Add the choice novel to the Q3 bank with two or three scenes you can write from memory.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u10-ps",
        label: "Full series set, timed, half with no calculator.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u4-ps",
        label: "Spaced retake of the means set; write expected conditions with numbers.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u9-set",
        label: "Finish the Unit 9 set, then outline a Q3 literary argument from memory on Never Let Me Go or the choice novel.",
      },
    ],
  },
  {
    week: 29,
    dateRange: "Mar 29 - Apr 4",
    startDate: "2027-03-29",
    phase: "deepen",
    goal: "All new content is done: spend the extra room on series, mixed inference, and essay speed.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "Mixed series multiple-choice under a clock, then rework every miss by naming the test or the known series before restarting the algebra.",
      },
      {
        course: "ap-statistics",
        unit: "Units 3-5 inference fluency",
        focus:
          "Procedure-selection drill: twelve stems, name the procedure and the hypotheses in thirty seconds each, then fully work the four you are least sure of.",
      },
      {
        course: "ap-physics-2",
        unit: "Units 13-15 mixed review",
        focus:
          "Interleaved items from geometric optics, waves, and modern physics. Every explanation has to name a principle, not a formula rearrangement.",
      },
      {
        course: "ap-english-literature",
        unit: "Units 7-9 mixed review (Jago, Never Let Me Go, choice novel)",
        focus:
          "One timed essay of each type this week (poetry, prose, literary argument). Write Q3 from the school bank: Antigone, Their Eyes Were Watching God, Never Let Me Go, or the choice novel. Score thesis and evidence rows only.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u9-ps",
        label: "Spaced retake of the parametric, polar, and vector set, six weeks after first study.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u13-ps",
        label: "Spaced retake of geometric optics; redraw every ray diagram from memory.",
      },
      {
        course: "ap-calculus-bc",
        label: "Saturday timed section: 29 no-calculator Calculus BC multiple-choice questions from Units 8-10 in 62 minutes (2027 format).",
      },
    ],
  },
  {
    week: 30,
    dateRange: "Apr 5 - Apr 11",
    startDate: "2027-04-05",
    phase: "deepen",
    goal: "Clear the checkpoint error log in every course before exam-review starts next week.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Units 1-10 error-log repair",
        focus:
          "The three weakest Calculus BC topics from the Week 18 checkpoint plus any series misses from Weeks 23-29. A problem leaves the log only after two clean solves on different days.",
      },
      {
        course: "ap-statistics",
        unit: "Units 1-5 error-log repair",
        focus:
          "The three weakest Statistics topics from the checkpoint, weighted toward inference conditions and interpretation sentences. Do not spend time on slope inference; it is not assessed.",
      },
      {
        course: "ap-physics-2",
        unit: "Units 9-15 error-log repair",
        focus:
          "The three weakest Physics 2 topics from the checkpoint plus any waves or photoelectric misses. Rebuild one concept map from blank paper.",
      },
      {
        course: "ap-english-literature",
        unit: "Units 1-9 error-log repair",
        focus:
          "Reread the three essay types that scored lowest on Row B this spring and rewrite one body paragraph of each with embedded evidence. For Q3, use a scene from Antigone, Their Eyes Were Watching God, Never Let Me Go, or the choice novel.",
      },
    ],
    practice: [
      {
        course: "ap-statistics",
        practiceSetId: "stat-u2-ps",
        label: "Spaced retake of probability and the Central Limit Theorem; state shape, center, and variability for every sampling-distribution item.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u12-ps",
        label: "Spaced retake of magnetism and induction, fourteen weeks after first study.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u5-set",
        label: "Spaced retake of a Poetry II set under a 30-minute clock.",
      },
    ],
    note: "Last deepen week. Starting Week 31 the work shifts to full timed mocks and targeted repair; do not open new units after this week.",
  },
  {
    week: 31,
    dateRange: "Apr 12 - Apr 18",
    startDate: "2027-04-12",
    phase: "exam-review",
    goal: "Sit a full-length timed mock in every course and rewrite the last three weeks around the misses.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Full exam mock (2027 format)",
        focus:
          "Section I: 29 no-calculator questions in 62 minutes, then 13 calculator questions in 38 minutes. Section II: 2 calculator free-response questions in 30 minutes, then 4 no-calculator in 60 minutes. Classify every miss as knowledge, algebra, or timing.",
      },
      {
        course: "ap-statistics",
        unit: "Full exam mock (2026-27 format)",
        focus:
          "Section I: 42 multiple-choice questions in 90 minutes. Section II: 4 ten-point free-response questions in 90 minutes. Score conclusions and conditions as strictly as the numbers.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 16: AP Test Prep (full exam mock)",
        focus:
          "Unofficial school Unit 16. Section I: 42 single-select questions in 85 minutes. Section II: all four free-response formats in 95 minutes. Grade the written reasoning, not the arithmetic.",
      },
      {
        course: "ap-english-literature",
        unit: "Full exam mock",
        focus:
          "Section I: 55 questions in 60 minutes. Section II: poetry analysis, prose fiction analysis, and a literary argument from the school Q3 bank (Antigone, Their Eyes Were Watching God, Never Let Me Go, or the choice novel) in 120 minutes. Self-score every essay on all three rubric rows.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        label: "Full Calculus BC mock under official 2027 timing, phone in another room, official directions read aloud.",
      },
      {
        course: "ap-statistics",
        label: "Full Statistics mock: 42 multiple-choice in 90 minutes and 4 free-response questions in 90 minutes.",
      },
      {
        course: "ap-physics-2",
        label: "Full Physics 2 mock: 42 multiple-choice in 85 minutes and 4 free-response questions in 95 minutes.",
      },
      {
        course: "ap-english-literature",
        label: "Full AP Lit mock: 55 questions in 60 minutes and three essays in 120 minutes. Q3 from the school literary-argument bank.",
      },
    ],
    note: "First full mock week. Do not take all four exams on the same day: two on Saturday, two on Sunday, with a real break between sections. Write the three weakest topics per course before Monday.",
  },
  {
    week: 32,
    dateRange: "Apr 19 - Apr 25",
    startDate: "2027-04-19",
    phase: "exam-review",
    goal: "Repair the mock misses: series and mixed FRQs in Calculus BC, inference sentences in Statistics, written reasoning in Physics 2, and Row B commentary in AP Lit.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Targeted review: Unit 10 and mock misses",
        focus:
          "Every series miss from the mock, plus two released-style series free-response questions. Rebuild the convergence-test decision tree from blank paper.",
      },
      {
        course: "ap-statistics",
        unit: "Targeted review: inference Units 3-4",
        focus:
          "Every inference miss from the mock. Rewrite each conclusion in context, and run a twelve-stem procedure-selection drill. Do not spend time on slope inference.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 16: AP Test Prep (targeted review)",
        focus:
          "Rework every missed multiple-choice with a principle named, then one Experimental Design and one Qualitative/Quantitative Translation from the weakest unit among 9-15.",
      },
      {
        course: "ap-english-literature",
        unit: "Targeted review: essay Row B and passage timing",
        focus:
          "Rewrite the lowest-scoring body paragraph from each mock essay with embedded evidence. For Q3, rebuild from the school bank (Antigone, Their Eyes Were Watching God, Never Let Me Go, or the choice novel). Then two 30-minute passage sets on the question type you missed most.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u10-ps",
        label: "Full series set closed-notes, timed; any justification-free convergence claim is a miss.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u3-ps",
        label: "Proportions and chi-square set plus the free-response items, scored only on conditions and conclusion language.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u14-ps",
        label: "Waves and physical-optics set; write a one-sentence principle under every numerical answer.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u8-set",
        label: "Poetry III set under a strict 30-minute clock, then reread every stem you missed.",
      },
    ],
  },
  {
    week: 33,
    dateRange: "Apr 26 - May 2",
    startDate: "2027-04-26",
    phase: "exam-review",
    goal: "Second full mock in every course, then a short, specific list of what is still shaky.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Second full exam mock",
        focus:
          "Repeat the 2027-format mock on fresh questions. Compare miss categories to Week 31; timing issues get a pacing plan, knowledge issues get two extra problems each.",
      },
      {
        course: "ap-statistics",
        unit: "Second full exam mock",
        focus:
          "42 multiple-choice and 4 free-response questions on a new set. Any conclusion that does not mention context, the parameter, and the p-value or interval is a miss.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 16: AP Test Prep (second full mock)",
        focus:
          "42 multiple-choice questions in 85 minutes and 4 free-response questions in 95 minutes. After scoring, write one model paragraph for the Qualitative/Quantitative Translation you lost the most points on.",
      },
      {
        course: "ap-english-literature",
        unit: "Second full exam mock",
        focus:
          "55 questions and three essays. Write Q3 from the school bank (Antigone, Their Eyes Were Watching God, Never Let Me Go, or the choice novel). After scoring, rewrite only the thesis and the weakest paragraph of each essay, not the whole essay.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        label: "Second full Calculus BC mock under 2027 timing. Stop at the official breaks; do not push through fatigue you will not have on exam day.",
      },
      {
        course: "ap-statistics",
        label: "Second full Statistics mock, 42 + 4, same day-of-week slot you will actually sit.",
      },
      {
        course: "ap-physics-2",
        label: "Second full Physics 2 mock, 42 + 4. Calculator out, equation sheet only if your administration provides one.",
      },
      {
        course: "ap-english-literature",
        label: "Second full AP Lit mock. Start the essays in the exam order: poetry, prose, literary argument from the school Q3 bank.",
      },
    ],
    note: "Last full-mock week. Sleep and a normal meal schedule beat an extra problem set. Confirm exam dates, session times, and what to bring with the school's AP coordinator this week; published dates can move.",
  },
  {
    week: 34,
    dateRange: "May 3 - May 9",
    startDate: "2027-05-03",
    phase: "exam-weeks",
    goal: "Sit AP English Literature and AP Physics 2 this week, and keep Calculus BC and Statistics sharp for Monday and Tuesday of next week.",
    assignments: [
      {
        course: "ap-english-literature",
        unit: "Exam day: Wednesday, May 5",
        focus:
          "Monday and Tuesday: light reread of quotation banks (Antigone, Their Eyes Were Watching God, Never Let Me Go, choice novel) and one untimed poem from the Jago anthology. No new texts. After the exam, stop AP Lit work entirely.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 16: AP Test Prep — exam day Thursday, May 6",
        focus:
          "Monday through Wednesday morning: one page of relationship recall (thermodynamics through modern physics, Units 9-15) and two qualitative questions. No full mock. After the exam, stop Physics 2 work entirely.",
      },
      {
        course: "ap-calculus-bc",
        unit: "Exam day: Monday, May 10",
        focus:
          "Light daily retrieval: ten mixed series and integration cards, one free-response question untimed on Friday or Saturday, then rest Sunday. The exam is the following Monday.",
      },
      {
        course: "ap-statistics",
        unit: "Exam day: Tuesday, May 11",
        focus:
          "Light daily retrieval: procedure names, conditions, and one interpretation sentence. One short mixed inference item on Saturday. The exam is the following Tuesday.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u10-ps",
        label: "Three series items from memory, untimed, no more. Stop if they are clean.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u4-ps",
        label: "Two inference items untimed, scored only on the conclusion sentence.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u15-ps",
        label: "Two modern-physics items Monday or Tuesday only, then put the set away.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u7-set",
        label: "One passage set Monday, untimed, then stop. Do not take a timed section the day before the exam.",
      },
    ],
    note: "Published 2027 dates: AP English Literature Wednesday May 5, AP Physics 2 Thursday May 6, AP Calculus BC Monday May 10, AP Statistics Tuesday May 11. Session times are typically 8 a.m. local for Lit, Physics 2, and Calculus BC, and 12 p.m. local for Statistics. Confirm dates, sessions, and what to bring with the school's AP coordinator; do not treat these dates as final until that confirmation. After each exam, stop that course. Sleep is the study plan for this week.",
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