import type { Drill, Subject, WeekPlan } from "./types";
import { physics2 } from "./data-physics2";
import { stats } from "./data-stats";
import { lit } from "./data-lit";
import { calcbc } from "./data-calcbc";

export const subjects: Subject[] = [physics2, calcbc, stats, lit];

export const subjectMap: Record<Subject["id"], Subject> = {
  physics2,
  stats,
  lit,
  "calc-bc": calcbc,
};

export const subjectIds = subjects.map((s) => s.id);

export function allQuestions(subjectId: Subject["id"]) {
  return subjectMap[subjectId].units.flatMap((u) =>
    u.practice.map((q) => ({ ...q, unitTitle: u.title, unitId: u.id }))
  );
}

export function totalQuestions() {
  return subjects.reduce(
    (n, s) => n + s.units.reduce((m, u) => m + u.practice.length, 0),
    0
  );
}

export function totalUnits() {
  return subjects.reduce((n, s) => n + s.units.length, 0);
}

export const drills: Drill[] = [
  { id: "dr-ph-mcq", subjectId: "physics2", title: "Physics 2 MCQ Sprint", minutes: 18, count: 8, strategy: "90 seconds per question. Eliminate by units first; save multi-select sets for last since they cost the most time." },
  { id: "dr-ph-frq", subjectId: "physics2", title: "Physics 2 FRQ Builder", minutes: 25, count: 3, strategy: "Write the governing equation before substituting numbers. Paragraph answers: principle → equation → reasoning." },
  { id: "dr-ca-nocalc", subjectId: "calc-bc", title: "Calc BC No-Calculator Drill", minutes: 30, count: 8, strategy: "Part A pace: ~2 min/MCQ. Do series and limit questions first while fresh; flag u-sub monsters and return." },
  { id: "dr-ca-frq", subjectId: "calc-bc", title: "Calc BC FRQ Setup Drill", minutes: 30, count: 3, strategy: "Write the full integral/series setup line first — it earns points even with arithmetic slips. Three decimals only at the end." },
  { id: "dr-st-mcq", subjectId: "stats", title: "Stats MCQ + Interpretation", minutes: 25, count: 8, strategy: "Underline the parameter in every stem. For 'which is true' sets, test each choice against conditions before computing." },
  { id: "dr-st-frq", subjectId: "stats", title: "Stats FRQ Communication Drill", minutes: 25, count: 3, strategy: "Name procedure → check conditions → compute with setup shown → conclude in context. Never skip the context sentence." },
  { id: "dr-li-mcq", subjectId: "lit", title: "Lit Passage Attack (MCQ)", minutes: 20, count: 8, strategy: "Read the questions' line refs first, then read the passage once with a pencil. Answer from the passage's logic, not yours." },
  { id: "dr-li-essay", subjectId: "lit", title: "Lit Thesis + Paragraph Sprint", minutes: 25, count: 3, strategy: "5 min: thesis + 3 topic sentences. 20 min: write ONE full body paragraph (claim, 2 embedded quotes, 2:1 commentary)." },
  { id: "dr-mixed", subjectId: "mixed", title: "Cross-Training Mixer", minutes: 20, count: 8, strategy: "Two questions per subject, shuffled. Trains context-switching for back-to-back exam days. No notes." },
];

export const weeklyRhythm = [
  { day: "Monday", focus: "Physics 2", minutes: "100 min", detail: "1 unit: read concepts → 6 practice Qs → log formulas missed" },
  { day: "Tuesday", focus: "Calc BC", minutes: "100 min", detail: "1 unit: skill practice → mixed review of prior units" },
  { day: "Wednesday", focus: "AP Stats", minutes: "90 min", detail: "1 unit: FRQ writing emphasis (conditions + context sentences)" },
  { day: "Thursday", focus: "AP Lit", minutes: "90 min", detail: "Reading + annotation; alternate weeks: timed essay" },
  { day: "Friday", focus: "Weakest subject", minutes: "60 min", detail: "Re-do missed questions from the week; update error log" },
  { day: "Saturday", focus: "Deep work + drill", minutes: "120 min", detail: "One timed drill + full review of solutions" },
  { day: "Sunday", focus: "Light / rest", minutes: "30 min", detail: "Flashcards, formula sheet upkeep, plan next week" },
];

export const schedule: WeekPlan[] = [
  {
    week: 1, dates: "Sep 14 – Sep 20", title: "Launch & Diagnostic",
    focus: [
      { subjectId: "physics2", text: "Fluids: statics + buoyancy" },
      { subjectId: "calc-bc", text: "Limits & continuity review" },
      { subjectId: "stats", text: "One-variable data + SOCS" },
      { subjectId: "lit", text: "Close-reading system setup" },
    ],
    tasks: ["Take one diagnostic MCQ set per STEM subject (untimed, note gaps)", "Set up formula sheet + Lit work bank doc", "Build annotation symbols and practice on 1 poem", "Log baseline scores in each subject page"],
    milestone: "Baselines recorded; study systems in place",
  },
  {
    week: 2, dates: "Sep 21 – Sep 27", title: "Foundations I",
    focus: [
      { subjectId: "physics2", text: "Fluids: Bernoulli + continuity" },
      { subjectId: "calc-bc", text: "Differentiation rules" },
      { subjectId: "stats", text: "Two-variable data + regression" },
      { subjectId: "lit", text: "Poetry: speaker, situation, sound" },
    ],
    tasks: ["Finish Fluids + regression practice sets", "Memorize Big Five series (preview for later)", "Annotate 2 poems; write 1 close-reading paragraph", "Saturday drill: Physics MCQ Sprint"],
  },
  {
    week: 3, dates: "Sep 28 – Oct 4", title: "Foundations II",
    focus: [
      { subjectId: "physics2", text: "Thermodynamics: laws + PV diagrams" },
      { subjectId: "calc-bc", text: "Differentiation: implicit, related rates" },
      { subjectId: "stats", text: "Sampling & experiments" },
      { subjectId: "lit", text: "Poetry: form + volta (sonnets)" },
    ],
    tasks: ["Draw 3 PV cycles from memory with sign tables", "Design 1 experiment start-to-finish (FRQ style)", "Q1 thesis + body paragraph practice", "Saturday drill: Calc no-calculator"],
  },
  {
    week: 4, dates: "Oct 5 – Oct 11", title: "Check-in & Catch-up",
    focus: [
      { subjectId: "physics2", text: "Thermo: engines + entropy" },
      { subjectId: "calc-bc", text: "MVT + curve sketching" },
      { subjectId: "stats", text: "Probability rules" },
      { subjectId: "lit", text: "Prose: POV + reliability" },
    ],
    tasks: ["Re-do every missed Q from weeks 1–3", "First timed mini-mock: 15 MCQ per STEM subject", "Finish Q3 work-bank book #1 profile", "Light week if school exams hit — protect the habit"],
    milestone: "Month-1 review: all missed questions cleared",
  },
  {
    week: 5, dates: "Oct 12 – Oct 18", title: "E&M Begins",
    focus: [
      { subjectId: "physics2", text: "Electric force, field, potential" },
      { subjectId: "calc-bc", text: "Optimization + motion" },
      { subjectId: "stats", text: "Random variables + binomial" },
      { subjectId: "lit", text: "Prose: character + structure" },
    ],
    tasks: ["E-field zero-point + capacitor drills to fluency", "Optimization set: setup → derivative → justification", "Binomial/geometric conditions from memory", "Q2 thesis + paragraph on a passages you read in class"],
  },
  {
    week: 6, dates: "Oct 19 – Oct 25", title: "Circuits & Integrals",
    focus: [
      { subjectId: "physics2", text: "DC + RC circuits" },
      { subjectId: "calc-bc", text: "Integration: FTC + u-sub" },
      { subjectId: "stats", text: "Sampling distributions + CLT" },
      { subjectId: "lit", text: "Drama: irony, verse vs. prose" },
    ],
    tasks: ["Kirchhoff loop drills; RC τ explanation aloud", "U-sub speed set (20 integrals, timed)", "CLT simulation sketch + SE computations", "Saturday drill: Stats MCQ + Interpretation"],
  },
  {
    week: 7, dates: "Oct 26 – Nov 1", title: "Magnetism & Accumulation",
    focus: [
      { subjectId: "physics2", text: "Magnetism + Faraday/Lenz" },
      { subjectId: "calc-bc", text: "Parts, partial fractions, improper" },
      { subjectId: "stats", text: "Inference for proportions" },
      { subjectId: "lit", text: "Essay craft: thesis + embedding" },
    ],
    tasks: ["Right-hand rule fluency cards (10 configs)", "Full Q1 essay under 40 min, self-scored", "1-prop interval + test FRQ with conditions written out", "Saturday drill: Physics FRQ Builder"],
  },
  {
    week: 8, dates: "Nov 2 – Nov 8", title: "Midterm Mock Week", mockWeek: true,
    focus: [
      { subjectId: "physics2", text: "Fluids → magnetism cumulative" },
      { subjectId: "calc-bc", text: "Limits → integration cumulative" },
      { subjectId: "stats", text: "Units 1–5 cumulative" },
      { subjectId: "lit", text: "Q1 full essay + MCQ passage set" },
    ],
    tasks: ["Half-length mock per STEM subject (timed)", "Full Q1 essay timed; rewrite weakest paragraph", "Error-log triage: top 3 leaks per subject", "Plan Thanksgiving catch-up list"],
    milestone: "Mock #1 scored; error log drives weeks 9–12",
  },
  {
    week: 9, dates: "Nov 9 – Nov 15", title: "Optics & Diff-EQ",
    focus: [
      { subjectId: "physics2", text: "Geometric optics: lenses/mirrors" },
      { subjectId: "calc-bc", text: "Differential equations + Euler" },
      { subjectId: "stats", text: "Inference for means (t)" },
      { subjectId: "lit", text: "Q3: work bank books #2–3" },
    ],
    tasks: ["Ray diagrams for 6 lens/mirror cases from memory", "Separable DE set + Euler table drill", "Paired vs. two-sample decision drills", "Build Q3 profiles for books #2–3"],
  },
  {
    week: 10, dates: "Nov 16 – Nov 22", title: "Modern + Area/Volume",
    focus: [
      { subjectId: "physics2", text: "Quantum, atomic, nuclear" },
      { subjectId: "calc-bc", text: "Area, volumes, cross sections" },
      { subjectId: "stats", text: "Chi-square + slope inference" },
      { subjectId: "lit", text: "Q3: book #4 + prompt matching" },
    ],
    tasks: ["Photoelectric + H-spectrum computations", "Washer vs. shell decision set", "χ² test choice drills (GOF vs. independence)", "60-second Q3 fit-test on 5 past prompts"],
    milestone: "All Physics 2 + Stats content covered once",
  },
  {
    week: 11, dates: "Nov 23 – Nov 29", title: "Thanksgiving: Parametric & Series Start",
    focus: [
      { subjectId: "physics2", text: "Weak-unit repair (from mock #1)" },
      { subjectId: "calc-bc", text: "Parametric, polar, vector" },
      { subjectId: "stats", text: "Test-selection mega-drill" },
      { subjectId: "lit", text: "Full Q2 essay timed" },
    ],
    tasks: ["Light week: 45 min/day minimum, protect the streak", "Polar area + parametric derivative sets", "One full investigative-task FRQ (Stats)", "Family-week win: finish Lit work bank"],
  },
  {
    week: 12, dates: "Nov 30 – Dec 6", title: "Series Focus",
    focus: [
      { subjectId: "physics2", text: "Mixed E&M + optics repair" },
      { subjectId: "calc-bc", text: "Series: tests + Taylor" },
      { subjectId: "stats", text: "Cumulative mixed FRQs" },
      { subjectId: "lit", text: "Q1+Q2 back-to-back (80 min)" },
    ],
    tasks: ["Big Five series from memory daily", "Ratio/root + AST decision drills", "Stats mixed FRQ set (choose procedure first)", "Saturday drill: Calc FRQ Setup"],
  },
  {
    week: 13, dates: "Dec 7 – Dec 13", title: "Series + Interval Week",
    focus: [
      { subjectId: "physics2", text: "Modern + fluids mixed review" },
      { subjectId: "calc-bc", text: "Radius/interval + error bounds" },
      { subjectId: "stats", text: "Full MCQ section (40 Qs, timed)" },
      { subjectId: "lit", text: "Full MCQ section (55 Qs, timed)" },
    ],
    tasks: ["Endpoint testing drill (10 series)", "Lagrange + alternating remainder set", "Time each MCQ block; log pacing splits", "Saturday drill: Cross-Training Mixer"],
  },
  {
    week: 14, dates: "Dec 14 – Dec 20", title: "Mock #2 Week", mockWeek: true,
    focus: [
      { subjectId: "physics2", text: "Full-scope mock" },
      { subjectId: "calc-bc", text: "Full-scope mock" },
      { subjectId: "stats", text: "Full-scope mock" },
      { subjectId: "lit", text: "3 essays in one sitting" },
    ],
    tasks: ["Full-length timed mock per subject across 4 days", "Score with rubrics; update error log", "Rewrite one essay per Lit question type", "Set winter-break targets from mock gaps"],
    milestone: "Mock #2: target ≥ 4-range; winter plan set",
  },
  {
    week: 15, dates: "Dec 21 – Dec 27", title: "Winter Break: Repair",
    focus: [
      { subjectId: "physics2", text: "Top-3 missed units only" },
      { subjectId: "calc-bc", text: "Top-3 missed units only" },
      { subjectId: "stats", text: "Top-3 missed units only" },
      { subjectId: "lit", text: "Rewrite week: revise 3 essays" },
    ],
    tasks: ["45–60 min/day; no new content", "Re-take missed-unit practice sets fresh", "Condense formula sheets to one page per subject", "Rest: sleep is a study strategy"],
  },
  {
    week: 16, dates: "Dec 28 – Jan 3", title: "Spring Launch",
    focus: [
      { subjectId: "physics2", text: "FRQ fluency: design + paragraph" },
      { subjectId: "calc-bc", text: "Mixed BC-only set (polar/series/DE)" },
      { subjectId: "stats", text: "Investigative task #2" },
      { subjectId: "lit", text: "Q3 full essay timed" },
    ],
    tasks: ["January–May roadmap review (see spring phases)", "One timed section per subject to shake off rust", "Schedule spring mock dates (Mar + Apr)", "Celebrate: fall semester complete"],
    milestone: "Fall complete — spring exam-prep phase begins",
  },
];

export const springPhases = [
  { title: "Jan – Feb: Depth", detail: "Two units per week per subject at exam pace. Weekly FRQ/essay graded against rubrics. Finish any skipped content (usually polar/series, chi-square, Q3 bank)." },
  { title: "Mar: Mock #3 + repair", detail: "Full mock in each subject under real timing. Two-week repair cycle on the error log. Lock in calculator strategies and essay time budgets." },
  { title: "Apr: Mock #4 + polish", detail: "Final full mocks early April. Taper new content; drill weakest 20% only. One-page cheat sheets, exam-day logistics, sleep schedule." },
  { title: "Early May: Exam weeks", detail: "Light review only: formulas, work bank, Big Five series. No cramming the night before — trust the log. AP weeks typically run the first two weeks of May." },
];

export type { Drill, Subject, WeekPlan };
