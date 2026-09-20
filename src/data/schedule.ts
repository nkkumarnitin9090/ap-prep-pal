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
          "AB review: diagnostic on limit notation, algebra (factoring, conjugates, common denominators), continuity, squeeze theorem, limits at infinity, and the Intermediate Value Theorem. Find gaps; do not restudy what you already own.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 1: Exploring One-Variable Data and Collecting Data",
        focus:
          "Categorical versus quantitative variables, and describing a distribution in the CED order: shape, center, variability, unusual features.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 9: Thermodynamics",
        focus:
          "Start the CED course: Topic 9.1 Kinetic Theory of Temperature and Pressure. Connect pressure to molecular collisions and temperature to average kinetic energy. Fluids is AP Physics 1, not this exam.",
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
        label: "AB review diagnostic, untimed: limits set to find gaps, not to score well.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u1-ps",
        label: "Questions 1-3 as a diagnostic on distribution description.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u9-ps",
        label: "Thermodynamics set, questions 1-2: kinetic theory and rms speed.",
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
        unit: "Unit 2: Differentiation - Definition and Fundamental Properties",
        focus:
          "AB review: average versus instantaneous rate of change, the limit definition, differentiability implies continuity, and every basic rule (power, product, quotient, trig, e^x, ln x) plus tangent lines.",
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
          "Finish 9.1 and start 9.2 The Ideal Gas Law with T in kelvin. Sketch a P versus T graph and know that the zero-pressure intercept is absolute zero.",
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
        practiceSetId: "calc-u2-ps",
        label: "AB review: full derivative-rules set, timed. Any item solved by pattern-matching gets rewritten with the rule named.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u9-ps",
        label: "Thermodynamics set, questions 1-3: kinetic theory, rms speed, and the ideal gas law.",
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
        unit: "Unit 3: Differentiation - Composite, Implicit, and Inverse Functions",
        focus:
          "AB review: chain rule on nested compositions, implicit differentiation with tangent lines, inverse and inverse-trig derivatives, and higher-order derivatives. Name the procedure before the algebra.",
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
          "Topic 9.3 Thermal Energy Transfer and Equilibrium: conduction, convection, radiation, and thermal equilibrium. Then open 9.4 with PV diagrams.",
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
        practiceSetId: "calc-u3-ps",
        label: "AB review: full chain-rule / implicit / inverse set, timed, with the procedure named before any algebra.",
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
        unit: "Unit 4: Contextual Applications of Differentiation",
        focus:
          "AB review: interpreting the derivative with units, straight-line motion (position, velocity, acceleration, speeding up), related rates from a labeled diagram, linearization, and L'Hospital's rule.",
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
          "Topic 9.4 The First Law: change in U = Q + W (W on the gas), U = (3/2)nRT for a monatomic gas, and isovolumetric, isothermal, isobaric, and adiabatic processes.",
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
        practiceSetId: "calc-u4-ps",
        label: "AB review: full set, timed; every related-rates answer needs units and a labeled diagram.",
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
        unit: "Unit 5: Analytical Applications of Differentiation",
        focus:
          "AB review: Mean Value and Extreme Value Theorems, increasing/decreasing intervals, concavity, connecting f/f'/f'' across graphs, optimization, and a justification sentence for every extremum claim.",
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
          "Topics 9.5 and 9.6: specific heat and thermal conductivity, then entropy and the second law. Close Unit 9 this week.",
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
        practiceSetId: "calc-u5-ps",
        label: "AB review: full set, timed, with a justification sentence written for every extremum claim.",
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
        unit: "Unit 6: Integration and Accumulation of Change (AB)",
        focus:
          "AB review: Riemann sums from a table, accumulation, both parts of the Fundamental Theorem (including a variable upper limit), basic antiderivatives, u-substitution, and properties of definite integrals. Stop before by-parts and partial fractions.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 2: Probability, Random Variables, and Probability Distributions",
        focus:
          "The addition and complement rules, conditional probability, and testing independence numerically.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 10: Electric Force, Field, and Potential",
        focus: "Topics 10.1-10.3: electric charge and Coulomb's law, conservation of charge and charging processes, and electric fields with superposition.",
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
        practiceSetId: "calc-u6-ps",
        label: "AB review: questions 1-2 on Riemann sums and accumulation functions only; save by-parts items for Week 9.",
      },
      {
        course: "ap-statistics",
        practiceSetId: "stat-u2-ps",
        label: "Questions 1-4 on probability rules, expected value, and binomial conditions.",
      },
      {
        course: "ap-calculus-bc",
        label: "Saturday timed section: 20 no-calculator AB-review multiple-choice questions from Units 1-5 in 40 minutes.",
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
        unit: "Unit 7: Differential Equations",
        focus:
          "AB review: verifying solutions, slope fields, separation of variables with an initial condition, and exponential models. Brief BC extras while you are here: Euler's method and logistic growth.",
      },
      {
        course: "ap-statistics",
        unit: "Unit 2: Probability, Random Variables, and Probability Distributions",
        focus:
          "Discrete random variables, expected value and standard deviation, and the binomial model: recognizing it, computing probabilities, and using mean and standard deviation correctly.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 10: Electric Force, Field, and Potential",
        focus:
          "Topics 10.4-10.5: electric potential energy versus electric potential, equipotentials, and E = (change in V)/d between parallel plates.",
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
        practiceSetId: "calc-u7-ps",
        label: "AB review: questions 1-3 on slope fields and separable equations, plus a slow look at the Euler/logistic items.",
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
    goal: "Finish related rates and linearization, and finish Unit 10 Electric Force, Field, and Potential.",
    assignments: [
      {
        course: "ap-calculus-bc",
        unit: "Unit 8: Applications of Integration",
        focus:
          "AB review: average value, area between curves, volumes by cross sections and by disc/washer (including about a line other than an axis), and displacement versus total distance from velocity. Brief BC extra: arc length of y = f(x).",
      },
      {
        course: "ap-statistics",
        unit: "Unit 2: Probability, Random Variables, and Probability Distributions",
        focus:
          "The normal distribution, z-scores, the empirical rule, and percentile calculations in both directions.",
      },
      {
        course: "ap-physics-2",
        unit: "Unit 10: Electric Force, Field, and Potential",
        focus:
          "Topics 10.6-10.7: capacitors and dielectrics, then conservation of electric energy for a charge moving through a potential difference.",
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
        practiceSetId: "calc-u8-ps",
        label: "AB review: full applications set, timed, including washer-about-a-line and arc-length items.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u10-ps",
        label: "Complete Unit 10 set with a sketch of the field for each configuration.",
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
        unit: "Unit 6: Integration and Accumulation of Change (BC techniques)",
        focus:
          "New BC: integration by parts. Choose u by LIATE, write uv - integral of v du every time, and be ready to repeat parts or combine with a substitution. Mastery-quiz the by-parts formula; it is not on the AP sheet.",
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
        focus: "Topics 11.1-11.3: electric current, simple circuits with emf and terminal voltage, and resistance, resistivity, and Ohm's law.",
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
        practiceSetId: "calc-u6-ps",
        label: "New BC: by-parts items from the integration set. Write u, dv, du, and v before integrating.",
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
        unit: "Unit 6: Integration and Accumulation of Change (BC techniques)",
        focus:
          "New BC: long division, completing the square, and linear partial fractions. Split distinct linear factors, clear denominators, and substitute each root. These algebra steps are daily journal work, not a one-night cram.",
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
          "Topics 11.4-11.7: electric power, compound DC circuits (series and parallel), and Kirchhoff's loop and junction rules.",
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
        practiceSetId: "calc-u6-ps",
        label: "New BC: partial-fraction and long-division items; split, clear denominators, substitute each root.",
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
        unit: "Unit 6: Integration and Accumulation of Change (BC techniques)",
        focus:
          "New BC: improper integrals. Replace an infinite bound or a discontinuity with a limit variable, integrate, then take the limit. Say diverges when it does; never write infinity as if it were a number.",
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
        focus: "Topic 11.8: RC circuits at t = 0 and long after, plus series and parallel capacitors. Reason about brightness and current changes.",
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
        label: "New BC: improper-integral items with an explicit limit in every solution; diverges is an acceptable answer.",
      },
    ],
    note: "Calc homework this week should stay in the school's 1-2 hour band if you use class time for the journal; do not expand it to the weekday 2-3 hour block.",
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
        unit: "Units 1-6 review (no new content)",
        focus:
          "AB review plus New BC so far (no new content): one short session clearing remaining derivative misses, then a journal pass on by-parts, partial fractions, and improper-integral setups from Weeks 9-11.",
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
          "Reread the two conceptual maps that feel weakest among thermodynamics, electric force/field/potential, and circuits, and redo one circuits item you missed.",
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
        practiceSetId: "calc-u6-ps",
        label: "Light journal retake: two by-parts or improper-integral items untimed. No timed exam.",
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
        unit: "Unit 6: Integration and Accumulation of Change (BC techniques)",
        focus:
          "New BC: mixed integration-technique fluency. Given an integrand, choose substitution, parts, or partial fractions before any algebra, then finish a released-style accumulation free-response that also uses a table Riemann sum.",
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
          "Topics 12.1-12.2: magnetic fields and dipoles, then the force on a moving charge and circular motion with r = mv/(qB).",
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
        label: "New BC: full integration set, timed, half with no calculator. Name the technique before the algebra.",
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
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "New BC: parametric calculus. dy/dx = (dy/dt)/(dx/dt), the second derivative with the extra division by dx/dt, and horizontal versus vertical tangents from dy/dt = 0 or dx/dt = 0 (not both).",
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
        focus: "Topic 12.3: magnetic fields of wires and the force on a current-carrying wire. Start 12.4 with magnetic flux.",
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
        practiceSetId: "calc-u9-ps",
        label: "New BC: questions 1-3 on parametric derivatives and tangents.",
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
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "New BC: parametric motion and arc length. Speed as sqrt((dx/dt)^2 + (dy/dt)^2), total distance as the integral of speed, displacement from integrating the components, and parametric arc length.",
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
        focus: "Topic 12.4: Faraday's law, Lenz's law, and induced emf from a changing flux, including the direction of induced current.",
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
        practiceSetId: "calc-u9-ps",
        label: "New BC: parametric arc-length and total-distance items; write the speed integrand before evaluating.",
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
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "New BC (no new content): two short sessions only, reworking parametric derivatives and arc-length setups from Weeks 14-15. Polar waits until after the break.",
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
          "Rebuild the thermodynamics, electric force/field/potential, circuits, and magnetism concept maps from blank paper; check them only after you have finished.",
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
        practiceSetId: "calc-u9-ps",
        label: "Break pace, untimed: two parametric derivative items from Weeks 14-15. No polar yet.",
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
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "New BC: vector-valued position, velocity, and acceleration; speed as a scalar; displacement versus total distance; and recovering position from velocity plus an initial point. TI-83/TI-84: graph parametric mode in an appropriate window.",
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
          "Topics 13.1-13.2: the law of reflection, plane and spherical mirrors, and ray diagrams. Physical optics waits for Unit 14.",
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
        practiceSetId: "calc-u9-ps",
        label: "New BC: questions 4-6 on vector motion, speed, and total distance.",
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
        unit: "Units 1-9 checkpoint (AB plus BC so far)",
        focus:
          "AB review plus New BC so far: full Section I under exam timing on Units 1-8, BC integration techniques, and parametric/vector calculus (polar is next). Classify every miss as knowledge, algebra, or timing before doing anything else.",
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
        label: "Full Calculus BC Section I: 29 no-calculator questions in 62 minutes, then 13 calculator questions in 38 minutes. Score AB, integration-technique, and parametric/vector items separately.",
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
        unit: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        focus:
          "New BC: polar derivatives. Convert between polar and rectangular, write dy/dx from r and theta, and identify horizontal versus vertical tangents. Sketch r(theta) before differentiating so the graph matches the formula.",
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
          "Topics 13.3-13.4: Snell's law and total internal reflection, then thin-lens images with sign conventions and ray diagrams.",
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
        practiceSetId: "calc-u9-ps",
        label: "New BC: polar-derivative items; convert and write dy/dx before using the calculator.",
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
          "New BC: polar integrals. Area as (1/2) times the integral of r-squared, area between two polar curves with the correct theta limits, and writing the integral before any calculator evaluation.",
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
          "Topics 14.1-14.5: wave pulses, periodic waves, boundary behavior and polarization, electromagnetic waves, and the Doppler effect.",
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
        label: "New BC: full parametric/polar/vector set, timed, with polar-area items written as integrals before any evaluation.",
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
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "New BC: sequences, the nth-term test for divergence only, geometric series with the correct first term, p-series and the harmonic series. This is the start of the heaviest BC block; keep the journal to the school's 1-2 hour band if class time is carrying the rest.",
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
          "Topic 14.6: superposition, beats, and standing waves on strings and in pipes (nodes versus antinodes; odd harmonics only in a closed-open pipe).",
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
        practiceSetId: "calc-u10-ps",
        label: "New BC: questions 1-3 on geometric sums, p-series, and the nth-term test.",
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
    note: "Calc homework this week should stay in the school's 1-2 hour band if you use class time for the journal; do not expand it to the weekday 2-3 hour block.",
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
        unit: "Unit 10: Infinite Sequences and Series",
        focus:
          "New BC: integral test with a limit written out, direct comparison, and limit comparison against a named p-series or geometric series. The justification sentence (which test, which comparison series) is required.",
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
          "Topics 14.7-14.9: diffraction, double-slit interference and diffraction gratings, and thin-film interference including the half-wavelength phase shift.",
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
        practiceSetId: "calc-u10-ps",
        label: "New BC: comparison-test items; the justification sentence naming the comparison series is required.",
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
          "New BC: alternating series test and its truncation-error bound, plus the ratio test. Mastery-quiz the conditions of each test; they are not on the AP formula sheet.",
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
        label: "New BC: alternating-series error bound and ratio-test items; write the conditions before the algebra.",
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
          "New BC: absolute versus conditional convergence, radius of convergence from the ratio test, and testing both endpoints separately. Write the endpoint tests in full even when the radius is obvious.",
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
          "Topics 15.1 and 15.5: photon energy E = hf = hc/lambda, de Broglie wavelength, and the photoelectric effect with threshold frequency versus intensity.",
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
        label: "New BC: interval-of-convergence items; write both endpoint tests out in full even when the radius is obvious.",
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
          "New BC: power series centered at a, term-by-term differentiation and integration, and building a new series by substituting into a geometric series. Interval of convergence must be rechecked after you operate on the series.",
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
          "Topics 15.2-15.4: Bohr model and quantized energy levels, emission and absorption spectra, and blackbody radiation.",
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
        label: "New BC: power-series manipulation items; recheck the interval of convergence after differentiating or integrating.",
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
          "New BC: Taylor and Maclaurin polynomials. Write the definition with f^(n)(a)/n!, then the Lagrange error bound with M named and justified. Use the alternating-series error bound only when it applies.",
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
          "Topics 15.6-15.8: Compton scattering, fission/fusion and nuclear decay with E = mc², and alpha, beta, and gamma decay with nucleon number and charge conserved.",
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
        label: "New BC: Taylor-polynomial and error-bound items; name which error bound you are using before computing.",
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
    note: "Calc homework this week should stay in the school's 1-2 hour band if you use class time for the journal; do not expand it to the weekday 2-3 hour block.",
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
          "New BC (no new content): two short sessions only. Memorize Maclaurin series for e^x, sin x, cos x, and 1/(1 - x), then one substitution to build a new series. No timed exam this week.",
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
        label: "New BC, untimed: Maclaurin-manipulation items. Write the known series first, then substitute.",
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
          "New BC: a one-page convergence-test decision tree from memory, then two released-style series free-response questions (interval of convergence and a Taylor remainder). Keep Calc homework in the 1-2 hour band if class time is carrying the journal.",
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
        label: "New BC: full series set, timed, half with no calculator.",
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
          "New BC: mixed series multiple-choice under a clock, then rework every miss by naming the test or the known series before restarting the algebra. All new BC content is done after this week.",
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
        label: "Spaced retake of the parametric, polar, and vector set from Weeks 14-20.",
      },
      {
        course: "ap-physics-2",
        practiceSetId: "phys-u13-ps",
        label: "Spaced retake of geometric optics; redraw every ray diagram from memory.",
      },
      {
        course: "ap-calculus-bc",
        label: "Saturday timed section: 29 no-calculator Calculus BC multiple-choice questions from Units 6, 9, and 10 in 62 minutes (2027 format).",
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
          "AB review plus New BC: the three weakest Calculus BC topics from the Week 18 checkpoint plus any series, polar, or integration-technique misses from Weeks 9-29. A problem leaves the log only after two clean solves on different days.",
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
        course: "ap-calculus-bc",
        practiceSetId: "calc-u10-ps",
        label: "Error-log repair: series items you missed in Weeks 21-29, then one mixed by-parts or polar-area item if those are still in the log.",
      },
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
          "Exam review: Section I: 29 no-calculator questions in 62 minutes, then 13 calculator questions in 38 minutes. Section II: 2 calculator free-response questions in 30 minutes, then 4 no-calculator in 60 minutes. Expect series, polar/parametric, and integration techniques. Classify every miss as knowledge, algebra, or timing.",
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
          "Exam review / New BC: every series miss from the mock, plus two released-style series free-response questions. Rebuild the convergence-test decision tree from blank paper, then one polar-area or by-parts item if those appeared in the miss list.",
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
          "Exam review: repeat the 2027-format mock on fresh questions. Compare miss categories to Week 31; timing issues get a pacing plan, knowledge issues (especially series tests and polar integrals) get two extra problems each.",
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
          "Exam review: light daily retrieval of series tests, known Maclaurin series, integration-by-parts, and polar area. Ten mixed cards, one free-response question untimed on Friday or Saturday, then rest Sunday. The exam is the following Monday.",
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