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
        unit: "Unit 4: Probability, Random Variables, and Probability Distributions",
        focus:
          "Simulation to estimate probability, the addition and complement rules, conditional probability, and testing independence numerically.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 10: Electric Force, Field, and Potential",
        focus:
          "Uniform fields between parallel plates, electric potential energy versus potential, and equipotential surfaces.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 3: Longer Fiction or Drama I",
        focus:
          "Narrative perspective and reliability: what the narrator or speaker can and cannot see, and what that does to the reader.",
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
        practiceSetId: "stat-u4-ps",
        label: "Questions 1-3 on probability rules and conditional probability.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u9-ps",
        label: "Spaced retake of two thermodynamics items three weeks after first study.",
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
        unit: "Unit 4: Probability, Random Variables, and Probability Distributions",
        focus:
          "Discrete random variables, expected value and standard deviation, and combining independent random variables.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 10: Electric Force, Field, and Potential",
        focus:
          "Capacitors, capacitance and dielectrics, and conservation of energy for a charge moving through a potential difference.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 3: Longer Fiction or Drama I",
        focus:
          "Finish the work and write a literary argument thesis that makes a defensible interpretive claim about the whole text.",
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
        label: "Longer fiction passage set, then outline a Q3 literary argument in ten minutes.",
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
        unit: "Unit 4: Probability, Random Variables, and Probability Distributions",
        focus:
          "Binomial and geometric settings: recognizing them, computing probabilities, and using mean and standard deviation correctly.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 11: Electric Circuits",
        focus: "Current and conventional direction, EMF and terminal voltage, resistance and resistivity, and Ohm's law.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 4: Short Fiction II",
        focus:
          "Character change over a story: interpret contrasts and inconsistencies instead of smoothing them over.",
      },
    ],
    practice: [
      {
        course: "ap-statistics",
        practiceSetId: "stat-u4-ps",
        label: "Full set, including the binomial free response; name the distribution before computing.",
      },
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u5-ps",
        label: "Questions 1-3 on extrema and the first derivative test.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u4-set",
        label: "Short fiction set under a strict 30-minute clock.",
      },
    ],
  },
  {
    week: 10,
    dateRange: "Nov 9 - Nov 15",
    startDate: "2026-11-09",
    phase: "build",
    goal: "Optimization and concavity done properly, and sampling distributions started.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 5: Analytical Applications of Differentiation",
        focus:
          "Concavity and the second derivative test, connecting f, f', and f'' across graphs, optimization problems, and implicit relationships.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 5: Sampling Distributions",
        focus:
          "Sampling variability, bias versus variability, and the sampling distribution of a sample proportion with its conditions.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 11: Electric Circuits",
        focus:
          "Electric power, series and parallel resistors, and the loop and junction rules on multi-branch circuits.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 4: Short Fiction II",
        focus:
          "Finish Short Fiction II with a timed prose analysis essay focused on commentary that explains, not restates.",
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
        label: "Finish the set, then rewrite two commentary sentences from the essay to be more specific.",
      },
    ],
  },
  {
    week: 11,
    dateRange: "Nov 16 - Nov 22",
    startDate: "2026-11-16",
    phase: "build",
    goal: "Open integration, finish sampling distributions, and finish circuits.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 6: Integration and Accumulation of Change",
        focus:
          "Riemann sums and accumulation, the definite integral as accumulated change, and the Fundamental Theorem of Calculus with a variable upper limit.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 5: Sampling Distributions",
        focus:
          "Sampling distributions of a sample mean, the central limit theorem, and distributions for a difference of proportions or means.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 11: Electric Circuits",
        focus: "Capacitors in circuits, RC behavior at t = 0 and long after, and reasoning about brightness and current changes.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 5: Poetry II",
        focus: "Extended metaphor and conceit: how a comparison develops and where it strains or breaks.",
      },
    ],
    practice: [
      {
        course: "ap-statistics",
        practiceSetId: "stat-u5-ps",
        label: "Complete set; state shape, center, and variability for every sampling distribution.",
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
        unit: "Units 1-5 review (no new content)",
        focus: "Rebuild the sampling-distribution conditions from memory on one page, then check it against notes.",
      },
      {
        course: "ap-physics-2",
        unit: "Units 8-11 review (no new content)",
        focus: "Reread the two conceptual maps that feel weakest and redo one circuits item you missed.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 5: Poetry II",
        focus:
          "Reading only: two poems a day with light annotation and no essay this week. Keep the habit, drop the intensity.",
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
        practiceSetId: "stat-u3-ps",
        label: "Spaced retake of the study-design set; these items reappear on every mock exam.",
      },
    ],
    note: "Thanksgiving week: deliberately light. Two short weekday sessions and one weekend session, no timed exam, and no new units. Rest is part of the plan, not a failure of it.",
  },
  {
    week: 13,
    dateRange: "Nov 30 - Dec 6",
    startDate: "2026-11-30",
    phase: "build",
    goal: "Antidifferentiation technique, the first inference procedure, and magnetic force.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 6: Integration and Accumulation of Change",
        focus:
          "Both parts of the Fundamental Theorem, basic antiderivatives, u-substitution, and properties of definite integrals.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 6: Inference for Categorical Data - Proportions",
        focus:
          "The logic of a confidence interval, conditions for inference about one proportion, and interpreting the interval and the level correctly.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 12: Magnetism and Electromagnetism",
        focus:
          "Magnetic fields and field direction, force on a moving charge, and circular motion of a charge in a uniform field.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 5: Poetry II",
        focus:
          "Extended metaphor continued plus sound and syntax: how meter, rhyme, and sentence shape support the poem's argument.",
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
        practiceSetId: "stat-u6-ps",
        label: "Questions 1-3 on one-proportion intervals; write the interpretation in context every time.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u5-set",
        label: "Poetry passage set, then annotate the two questions you spent longest on.",
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
        unit: "Unit 6: Inference for Categorical Data - Proportions",
        focus:
          "One-sample significance test for a proportion: hypotheses, conditions, standardized test statistic, p-value, and a conclusion in context.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 12: Magnetism and Electromagnetism",
        focus: "Force on a current-carrying wire, fields from wires and loops, and magnetic flux through a surface.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 5: Poetry II",
        focus:
          "Finish Poetry II with a timed poetry analysis essay; the thesis must name the poem's movement, not just its subject.",
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
        label: "Finish the set and log every question type you rushed.",
      },
    ],
  },
  {
    week: 15,
    dateRange: "Dec 14 - Dec 20",
    startDate: "2026-12-14",
    phase: "build",
    goal: "Differential equations opened, two-proportion inference done, electromagnetism closed.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 7: Differential Equations",
        focus:
          "Verifying solutions, sketching and reading slope fields, separation of variables with an initial condition, and exponential models.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 6: Inference for Categorical Data - Proportions",
        focus:
          "Two-proportion intervals and tests, including the pooled proportion, plus Type I and Type II errors and power in context.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 12: Magnetism and Electromagnetism",
        focus: "Faraday's law, Lenz's law, and induced EMF from a changing flux, including the direction of induced current.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 6: Longer Fiction or Drama II",
        focus:
          "Begin the second long work: chart how structure, foils, and setting shifts advance a central tension.",
      },
    ],
    practice: [
      {
        course: "ap-statistics",
        practiceSetId: "stat-u6-ps",
        label: "Complete set including both free-response items; conclusions must link p-value to alpha to context.",
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
        unit: "Units 1-6 maintenance",
        focus:
          "One page from memory listing every inference condition met so far, and one interpretation sentence per procedure.",
      },
      {
        course: "ap-physics-2",
        unit: "Units 8-12 maintenance",
        focus:
          "Rebuild the electricity and magnetism concept maps from blank paper; check them only after you have finished.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 6: Longer Fiction or Drama II",
        focus:
          "Break reading push: finish the long work and keep a running quotation bank of twelve passages for the literary argument essay.",
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
        practiceSetId: "stat-u5-ps",
        label: "Spaced retake of sampling distributions, six weeks after first study.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u6-set",
        label: "One passage set on the long work, untimed, for comprehension rather than speed.",
      },
    ],
    note: "This entry covers the two-week winter break (Dec 21 - Jan 3). Plan roughly half the usual weekly load: reading stays daily, everything else drops to two or three sessions per week, and there are no timed exams. Adjust to your school's actual break dates.",
  },
  {
    week: 17,
    dateRange: "Jan 4 - Jan 10",
    startDate: "2027-01-04",
    phase: "build",
    goal: "Restart at full volume: integration applications, t-procedures, and optics.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 8: Applications of Integration",
        focus:
          "Average value, area between curves, and volumes by cross sections and by the disc and washer methods.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 7: Inference for Quantitative Data - Means",
        focus:
          "Why t rather than z, degrees of freedom, and the one-sample t interval for a mean with conditions checked in writing.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 13: Geometric Optics",
        focus:
          "Reflection and refraction, index of refraction, total internal reflection, and ray diagrams for plane and curved mirrors.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 6: Longer Fiction or Drama II",
        focus:
          "Finish Unit 6 with a literary argument essay on the long work, using the quotation bank built over the break.",
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
        practiceSetId: "stat-u7-ps",
        label: "Questions 1-3 on one-sample t intervals.",
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
        unit: "Units 1-7 checkpoint",
        focus:
          "Full multiple-choice section plus one investigative-task-style free response scored against the official rubric.",
      },
      {
        course: "ap-physics-2",
        unit: "Units 8-13 checkpoint",
        focus:
          "Timed multiple-choice section, then one paragraph-length argument question graded for physics reasoning, not prose.",
      },
      {
        course: "ap-english-literature",
        unit: "Units 1-6 checkpoint",
        focus: "Full 55-question multiple-choice section in 60 minutes plus one timed essay of each of the three types.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        label: "Full Calculus BC Section I: 30 no-calculator questions in 60 minutes, then 15 calculator questions in 45 minutes.",
      },
      {
        course: "ap-statistics",
        label: "Full Statistics Section I: 40 multiple-choice questions in 90 minutes.",
      },
      {
        course: "ap-physics-2",
        label: "Physics 2 Section I: 40 multiple-choice questions in 80 minutes, calculator allowed.",
      },
      {
        course: "ap-english-literature",
        label: "AP Lit Section I: 55 questions in 60 minutes, followed on Sunday by two timed essays.",
      },
    ],
    note: "Midyear checkpoint. Score everything honestly and write down the three weakest topics per course; weeks 19 onward should give those topics extra practice time. Do not start new units this week.",
  },
  {
    week: 19,
    dateRange: "Jan 18 - Jan 24",
    startDate: "2027-01-18",
    phase: "deepen",
    goal: "Close applications of integration, keep t-procedures moving, and finish geometric optics.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 8: Applications of Integration",
        focus:
          "Volumes of revolution about a line other than an axis, arc length as a definite integral, and total distance versus displacement from velocity.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 7: Inference for Quantitative Data - Means",
        focus:
          "One-sample t-test for a mean: hypotheses about mu not x-bar, conditions checked in writing, and a conclusion that links p-value to alpha to context.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 13: Geometric Optics",
        focus:
          "The mirror and lens equation with sign conventions, ray diagrams for thin lenses, and converging versus diverging lenses including image character.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 7: Short Fiction III",
        focus:
          "Sources of narrator unreliability: name the cause (youth, self-interest, limited access) and the sentence where the narration betrays itself.",
      },
    ],
    practice: [
      {
        course: "ap-calculus-bc",
        practiceSetId: "calc-u8-ps",
        label: "Full set, timed, including the washer-about-a-line and arc-length items.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u13-ps",
        label: "Complete geometric optics set with a labeled ray diagram on every lens item.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u7-set",
        label: "Questions 1-3 on narrative distance; mark the words that belong to the character rather than the narrator.",
      },
    ],
    note: "Pull the three weakest topics per course from the Week 18 checkpoint into Friday's repair block this week and keep them there until they leave the error log.",
  },
  {
    week: 20,
    dateRange: "Jan 25 - Jan 31",
    startDate: "2027-01-25",
    phase: "deepen",
    goal: "Open parametric calculus, finish matched-pairs t, and start the waves unit.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "Parametric dy/dx as (dy/dt)/(dx/dt), the second derivative with the extra division by dx/dt, and horizontal versus vertical tangents.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 7: Inference for Quantitative Data - Means",
        focus:
          "Recognizing a matched-pairs design and running a one-sample t procedure on the differences, with df equal to the number of pairs minus one.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 14: Waves, Sound, and Physical Optics",
        focus:
          "Wave pulses and the wave equation, electromagnetic waves and the spectrum, polarization at a boundary, and the Doppler effect from compressed wavefronts.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 7: Short Fiction III",
        focus:
          "Free indirect discourse and the retrospective narrator: separate the narrating self from the narrated self, and mark idiom that is the character's.",
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
        practiceSetId: "stat-u7-ps",
        label: "Full set, timed; the matched-pairs item is scored zero if you run a two-sample test on it.",
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
    goal: "Finish vector-valued motion, close two-sample t, and own standing waves.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "Vector-valued position, velocity, and acceleration; speed as a scalar; displacement versus total distance; and recovering position from velocity plus an initial point.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 7: Inference for Quantitative Data - Means",
        focus:
          "Two-sample t interval and test, conservative df, and the decision not to pool variances unless the problem explicitly says to.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 14: Waves, Sound, and Physical Optics",
        focus:
          "Superposition, interference, and beats, then standing waves on strings and in pipes: nodes versus antinodes, and odd harmonics only in a closed-open pipe.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 7: Short Fiction III",
        focus:
          "Finish Short Fiction III with a 40-minute prose analysis essay; the thesis must name what the narration does, not what the story is about.",
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
        practiceSetId: "stat-u7-ps",
        label: "Retake the two-sample items from memory and rewrite every conclusion in context.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u7-set",
        label: "Finish the set, then rewrite two commentary sentences so they explain the language rather than restate the plot.",
      },
    ],
  },
  {
    week: 22,
    dateRange: "Feb 8 - Feb 14",
    startDate: "2027-02-08",
    phase: "deepen",
    goal: "Close polar calculus, open chi-square, and start physical optics and Poetry III.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "Polar conversion, dy/dx in polar form, area as (1/2) times the integral of r-squared, and area between two polar curves with the right theta limits.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 8: Inference for Categorical Data - Chi-Square",
        focus:
          "The chi-square statistic and distributions, expected counts in a two-way table, and the chi-square test for homogeneity. Skip goodness-of-fit: it is not assessed in 2026-27.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 14: Waves, Sound, and Physical Optics",
        focus:
          "Diffraction, double-slit interference and diffraction gratings, and thin-film interference including the half-wavelength phase shift on reflection from a higher-index surface.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 8: Poetry III",
        focus:
          "Paradox, ambiguity, and juxtaposition: how a contrast or a double meaning produces the poem's argument rather than decorating it.",
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
        practiceSetId: "stat-u8-ps",
        label: "Questions 1-3 on expected counts and the homogeneity test.",
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
    goal: "Open infinite series, finish chi-square, and close physical optics.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "Nth-term test for divergence only, geometric series with the correct first term, p-series and the harmonic series, and the integral test with a limit written out.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 8: Inference for Categorical Data - Chi-Square",
        focus:
          "Chi-square test for independence, degrees of freedom for a two-way table, and selecting among chi-square, two-proportion, and other categorical procedures.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 14: Waves, Sound, and Physical Optics",
        focus:
          "Finish the unit with mixed interference and standing-wave items under time pressure, then write one experimental-design outline for measuring wavelength.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 8: Poetry III",
        focus:
          "Irony and conceit in a denser poem: name which kind of irony operates, who is its target, and whether the speaker is in on it.",
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
        practiceSetId: "stat-u8-ps",
        label: "Complete set, timed; write the hypotheses about association or homogeneity in context every time.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u14-ps",
        label: "Full retake of any missed interference or standing-wave item, closed notes.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u8-set",
        label: "First Poetry III passage set; mark the two lines that carry the poem's turn.",
      },
    ],
  },
  {
    week: 24,
    dateRange: "Feb 22 - Feb 28",
    startDate: "2027-02-22",
    phase: "deepen",
    goal: "Comparison tests fluent, mixed inference started, and modern physics opened.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "Direct comparison and limit comparison with a named p-series or geometric series, plus the alternating series test and its truncation-error bound.",
      },
      {
        course: "ap-statistics",
        unit: "Units 6-8 inference fluency",
        focus:
          "Procedure selection under time pressure: one versus two groups, categorical versus quantitative, interval versus test. Write state-plan-do-conclude for two mixed free-response items.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 15: Modern Physics",
        focus:
          "Photon energy E = hf = hc/lambda, de Broglie wavelength, the photoelectric effect with threshold frequency, and stopping potential versus intensity.",
      },
      {
        course: "ap-english-literature",
        unit: "Unit 8: Poetry III",
        focus:
          "Finish Poetry III with a timed poetry analysis essay; the thesis must name the poem's movement and a specific tension, not just its subject.",
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
        practiceSetId: "stat-u6-ps",
        label: "Spaced retake of the proportions set, ten weeks after first study; conclusions must still name alpha.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u15-ps",
        label: "Questions 1-3 on photon energy and the photoelectric effect.",
      },
      {
        course: "ap-english-literature",
        practiceSetId: "lit-u8-set",
        label: "Finish the set and log which stem type (shift, diction, structure) keeps costing time.",
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
