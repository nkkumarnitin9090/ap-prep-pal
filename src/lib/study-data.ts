export type SubjectId = "physics" | "statistics" | "literature" | "calculus";
export type PhaseId = "foundation" | "build" | "integrate" | "review" | "exam";

export type StudyUnit = {
  title: string;
  topics: string[];
  practice: string[];
  phase: PhaseId;
};

export type Subject = {
  id: SubjectId;
  short: string;
  name: string;
  color: string;
  soft: string;
  weeklyHours: string;
  units: StudyUnit[];
};

export const phases = [
  {
    id: "foundation" as const,
    number: "01",
    title: "Build the base",
    dates: "Sep 14 – Nov 22",
    weeks: "Weeks 1–10",
    note: "Learn core ideas carefully; favor short, frequent retrieval over cramming.",
  },
  {
    id: "build" as const,
    number: "02",
    title: "Extend & connect",
    dates: "Nov 23 – Feb 7",
    weeks: "Weeks 11–21",
    note: "Finish first-pass content and begin mixing old units into every week.",
  },
  {
    id: "integrate" as const,
    number: "03",
    title: "Mixed practice",
    dates: "Feb 8 – Mar 28",
    weeks: "Weeks 22–28",
    note: "Shift from chapter practice to timed, interleaved sets and written reasoning.",
  },
  {
    id: "review" as const,
    number: "04",
    title: "Exam rehearsal",
    dates: "Mar 29 – May 2",
    weeks: "Weeks 29–33",
    note: "Run section-length simulations, diagnose misses, and revisit weak skills.",
  },
  {
    id: "exam" as const,
    number: "05",
    title: "AP exam window",
    dates: "May 3 – May 14",
    weeks: "Weeks 34–35",
    note: "Taper, sleep, and use light recall only. Confirm your school’s official dates.",
  },
];

export const subjects: Subject[] = [
  {
    id: "physics",
    short: "PHY",
    name: "AP Physics 2",
    color: "#dc5f41",
    soft: "#fff1ec",
    weeklyHours: "3–3.5 hrs",
    units: [
      {
        title: "Thermodynamics",
        phase: "foundation",
        topics: ["Fluids, density, pressure & buoyancy", "Temperature, kinetic theory & ideal gases", "Thermal energy transfer", "First and second laws; PV diagrams"],
        practice: ["Sketch and annotate 4 pressure-vs-depth scenarios", "Solve 6 ideal-gas and calorimetry calculations", "Explain 3 thermodynamic processes from PV graphs", "Complete one 25-minute mixed FRQ-style set"],
      },
      {
        title: "Electric force, field & potential",
        phase: "foundation",
        topics: ["Charge and Coulomb’s law", "Electric fields and field maps", "Flux and qualitative Gauss’s law", "Electric potential, energy & capacitors"],
        practice: ["Draw net-force vectors for 5 charge arrangements", "Create 4 field/equipotential maps", "Solve 6 potential-energy and capacitor problems", "Write one claim-evidence-reasoning response"],
      },
      {
        title: "Electric circuits",
        phase: "build",
        topics: ["Current, resistance and power", "Series and parallel circuits", "Kirchhoff’s loop and junction rules", "RC circuits and experimental analysis"],
        practice: ["Reduce 5 multi-loop resistor networks", "Solve 4 Kirchhoff systems with sign checks", "Graph charging/discharging data and estimate a time constant", "Design a circuit experiment with variables and uncertainty"],
      },
      {
        title: "Magnetism & electromagnetism",
        phase: "build",
        topics: ["Magnetic force on charges and wires", "Fields from currents", "Electromagnetic induction", "Faraday’s and Lenz’s laws"],
        practice: ["Use the right-hand rule on 10 rapid prompts", "Solve 5 force/radius problems", "Predict induced-current direction in 6 scenarios", "Explain energy conservation in one induction setup"],
      },
      {
        title: "Geometric optics",
        phase: "build",
        topics: ["Reflection and refraction", "Ray diagrams", "Thin lenses and mirrors", "Optical instruments"],
        practice: ["Draw 6 principal-ray diagrams", "Solve 6 lens/mirror equation problems", "Compare real and virtual image cases in a table", "Analyze an unknown-lens lab from sample measurements"],
      },
      {
        title: "Waves, sound & physical optics",
        phase: "integrate",
        topics: ["Wave properties and superposition", "Sound, standing waves and Doppler effect", "Interference and diffraction", "Double-slit patterns"],
        practice: ["Build 4 standing-wave sketches with nodes", "Solve 5 Doppler/beat-frequency problems", "Predict changes to 6 interference patterns", "Complete one timed experimental-design response"],
      },
      {
        title: "Modern physics",
        phase: "integrate",
        topics: ["Photons and the photoelectric effect", "Wave-particle duality", "Atomic energy levels and spectra", "Nuclear physics, decay and mass-energy"],
        practice: ["Interpret 4 photoelectric-effect graphs", "Calculate 5 wavelength/energy transitions", "Complete 6 half-life and binding-energy problems", "Write a comparison of classical and photon models"],
      },
    ],
  },
  {
    id: "statistics",
    short: "STA",
    name: "AP Statistics",
    color: "#277b67",
    soft: "#e9f7f2",
    weeklyHours: "2.5–3 hrs",
    units: [
      {
        title: "Exploring one-variable data",
        phase: "foundation",
        topics: ["Categorical and quantitative displays", "Center, spread and shape", "Percentiles, z-scores and normal distributions", "Comparing distributions"],
        practice: ["Describe 4 distributions using context and SOCS", "Calculate and interpret 8 z-scores/percentiles", "Choose and defend a display for 3 datasets", "Write one comparison paragraph from a boxplot"],
      },
      {
        title: "Exploring two-variable data",
        phase: "foundation",
        topics: ["Two-way tables", "Scatterplots and correlation", "Least-squares regression", "Residuals, transformations and influential points"],
        practice: ["Compute 5 conditional proportions from a table", "Interpret slope, intercept and r² in 3 contexts", "Read 4 residual plots", "Complete one regression free-response task"],
      },
      {
        title: "Collecting data",
        phase: "foundation",
        topics: ["Sampling methods and bias", "Observational studies vs. experiments", "Random assignment, control and replication", "Experimental design"],
        practice: ["Identify bias in 6 sampling plans", "Design 3 randomized experiments", "Explain scope of inference for 5 studies", "Critique a survey and rewrite two questions"],
      },
      {
        title: "Probability, random variables & distributions",
        phase: "build",
        topics: ["Probability rules and conditional probability", "Discrete random variables", "Binomial and geometric distributions", "Combining random variables; simulation"],
        practice: ["Draw 4 tree/Venn models", "Solve 8 binomial or geometric calculations", "Find mean/SD for 4 transformed variables", "Design and run a 20-trial simulation"],
      },
      {
        title: "Sampling distributions",
        phase: "build",
        topics: ["Sampling variability", "Central Limit Theorem", "Sampling distributions for proportions", "Sampling distributions for means"],
        practice: ["Sketch 6 sampling distributions with labels", "Check conditions in 8 scenarios", "Compare effects of sample size in 4 cases", "Explain the CLT without formulas in context"],
      },
      {
        title: "Inference for categorical data: proportions",
        phase: "build",
        topics: ["Confidence intervals for proportions", "Significance tests for proportions", "Type I/II errors and power", "Comparing two proportions"],
        practice: ["Complete 3 one-proportion inference writeups", "Complete 3 two-proportion writeups", "Interpret confidence level and p-value in context", "Diagnose 6 condition/procedure errors"],
      },
      {
        title: "Inference for quantitative data: means",
        phase: "build",
        topics: ["t distributions", "One-sample and paired t procedures", "Two-sample t procedures", "Confidence intervals and tests for means"],
        practice: ["Choose the correct t procedure for 8 prompts", "Complete one paired and one two-sample writeup", "Read calculator output in 5 cases", "Explain robustness and conditions"],
      },
      {
        title: "Inference for categorical data: chi-square",
        phase: "integrate",
        topics: ["Goodness of fit", "Homogeneity", "Independence", "Expected counts and contributions"],
        practice: ["Classify 8 chi-square scenarios", "Compute expected counts for 3 tables", "Complete 3 full inference writeups", "Identify which cells drive a result"],
      },
      {
        title: "Inference for quantitative data: slopes",
        phase: "integrate",
        topics: ["Sampling distribution of slope", "Confidence intervals for slope", "Significance tests for slope", "Regression inference conditions"],
        practice: ["Check regression conditions on 3 plots", "Complete 3 slope-inference writeups", "Interpret interval and p-value in context", "Run one 35-minute mixed FRQ set"],
      },
    ],
  },
  {
    id: "literature",
    short: "LIT",
    name: "AP English Literature",
    color: "#7954a8",
    soft: "#f3edfb",
    weeklyHours: "2.5–3 hrs",
    units: [
      {
        title: "Short fiction I",
        phase: "foundation",
        topics: ["Close reading and annotation", "Character, setting and plot", "Narrator and point of view", "Evidence and defensible claims"],
        practice: ["Annotate one short story for shifts and tensions", "Write 3 defensible thesis statements", "Select and explain 5 evidence pairs", "Complete 12 passage-based multiple-choice questions"],
      },
      {
        title: "Poetry I",
        phase: "foundation",
        topics: ["Speaker and situation", "Imagery and figurative language", "Structure and contrasts", "Tone and complexity"],
        practice: ["Mark shifts in 3 poems", "Write one 12-minute poetry paragraph", "Explain effects of 6 images or comparisons", "Complete 12 poetry multiple-choice questions"],
      },
      {
        title: "Longer fiction or drama I",
        phase: "foundation",
        topics: ["Character development", "Conflict and structure", "Narrative perspective", "Theme as interpretation"],
        practice: ["Build a scene/chapter evidence log", "Trace one character tension across 4 moments", "Draft one open-question thesis and outline", "Write one 40-minute literary argument"],
      },
      {
        title: "Short fiction II",
        phase: "build",
        topics: ["Irony and contrast", "Pacing and chronology", "Symbol and motif", "Complex relationships"],
        practice: ["Analyze structure in 2 short stories", "Write 2 paragraphs connecting device to meaning", "Revise a thesis to add complexity", "Complete one timed prose analysis essay"],
      },
      {
        title: "Poetry II",
        phase: "build",
        topics: ["Sound, syntax and lineation", "Metaphor and ambiguity", "Form and pattern", "Juxtaposition and qualification"],
        practice: ["Scan sound/syntax choices in 3 poems", "Compare two poems in an evidence matrix", "Write one timed poetry analysis essay", "Score the essay with the AP 6-point rubric"],
      },
      {
        title: "Longer fiction or drama II",
        phase: "build",
        topics: ["Foils and competing values", "Setting as social context", "Dramatic structure", "Complex thematic interpretation"],
        practice: ["Map 3 competing character values", "Collect 8 flexible evidence moments", "Draft outlines for 3 open prompts", "Write and self-score one literary argument"],
      },
      {
        title: "Short fiction III",
        phase: "integrate",
        topics: ["Unreliable narration", "Ambiguity and paradox", "Allusion and context", "Whole-text interpretation"],
        practice: ["Compare 2 narrators’ reliability", "Complete 15 mixed prose questions", "Write one timed prose essay", "Revise one body paragraph for commentary depth"],
      },
      {
        title: "Poetry III",
        phase: "integrate",
        topics: ["Layered meanings", "Complex tone", "Traditional vs. experimental form", "Synthesis across the whole poem"],
        practice: ["Annotate 3 unfamiliar poems in 8 minutes each", "Complete 15 mixed poetry questions", "Write one timed poetry essay", "Create a one-page poetry move checklist"],
      },
      {
        title: "Longer fiction or drama III",
        phase: "integrate",
        topics: ["Selecting a work for an open prompt", "Nuanced thesis and line of reasoning", "Specific evidence from memory", "Sophistication through tension and qualification"],
        practice: ["Build evidence banks for 3 works", "Outline 5 varied open prompts", "Write one 40-minute literary argument", "Complete a 60-minute mixed MCQ section"],
      },
    ],
  },
  {
    id: "calculus",
    short: "CAL",
    name: "AP Calculus BC",
    color: "#2e65a6",
    soft: "#eaf2fb",
    weeklyHours: "3–3.5 hrs",
    units: [
      {
        title: "Limits & continuity",
        phase: "foundation",
        topics: ["Limit representations and laws", "One-sided and infinite limits", "Continuity and IVT", "Asymptotic behavior"],
        practice: ["Evaluate 10 limits algebraically", "Read 8 limits from graphs/tables", "Justify continuity in 4 cases", "Complete one 20-minute no-calculator set"],
      },
      {
        title: "Differentiation: definition & properties",
        phase: "foundation",
        topics: ["Derivative definition", "Basic derivative rules", "Product and quotient rules", "Tangent lines and differentiability"],
        practice: ["Find 12 derivatives without a calculator", "Use the limit definition in 3 problems", "Write 4 tangent-line equations", "Explain differentiability vs. continuity"],
      },
      {
        title: "Composite, implicit & inverse functions",
        phase: "foundation",
        topics: ["Chain rule", "Implicit differentiation", "Inverse and inverse trig derivatives", "Higher-order derivatives"],
        practice: ["Differentiate 12 composite functions", "Solve 5 implicit derivative problems", "Find 4 inverse-function derivatives", "Complete one mixed skills sprint"],
      },
      {
        title: "Contextual applications of differentiation",
        phase: "build",
        topics: ["Motion", "Related rates", "Local linearity", "Rates in applied contexts"],
        practice: ["Solve 6 particle-motion prompts", "Model 5 related-rates scenarios", "Use linearization with error discussion", "Write units on every quantity in a timed FRQ"],
      },
      {
        title: "Analytical applications of differentiation",
        phase: "build",
        topics: ["MVT and EVT", "Increasing/decreasing and extrema", "Concavity and curve sketching", "Optimization"],
        practice: ["Build 4 sign charts", "Justify extrema in 5 cases", "Sketch 3 functions from derivative data", "Complete 4 optimization problems"],
      },
      {
        title: "Integration & accumulation of change",
        phase: "build",
        topics: ["Riemann sums", "Fundamental Theorem of Calculus", "Antiderivatives and definite integrals", "Accumulation functions"],
        practice: ["Write 5 Riemann sums from context", "Evaluate 12 basic integrals", "Analyze 5 accumulation functions", "Complete one calculator-active FRQ set"],
      },
      {
        title: "Differential equations",
        phase: "build",
        topics: ["Slope fields", "Euler’s method", "Separation of variables", "Exponential and logistic models"],
        practice: ["Sketch 4 slope fields", "Run Euler’s method on 4 tables", "Solve 8 separable equations", "Interpret parameters in 3 logistic models"],
      },
      {
        title: "Applications of integration",
        phase: "build",
        topics: ["Average value", "Area between curves", "Volumes by cross sections", "Disc and washer methods; arc length"],
        practice: ["Set up 8 area/volume integrals", "Evaluate 5 calculator-active applications", "Solve 3 average-value problems", "Complete one 30-minute applications set"],
      },
      {
        title: "Parametric, polar & vector-valued functions",
        phase: "integrate",
        topics: ["Parametric derivatives and motion", "Vector-valued motion", "Polar graphs and area", "Polar slope and distance traveled"],
        practice: ["Analyze 5 parametric motion problems", "Sketch 6 polar curves", "Set up 4 polar-area integrals", "Complete one timed BC-only FRQ"],
      },
      {
        title: "Infinite sequences & series",
        phase: "integrate",
        topics: ["Convergence and divergence tests", "Absolute vs. conditional convergence", "Power series and intervals", "Taylor/Maclaurin series and error"],
        practice: ["Classify 15 series and select a test", "Find 5 intervals of convergence", "Build 6 Taylor polynomials", "Bound error in 5 alternating/Taylor cases"],
      },
    ],
  },
];

export const weeklyRhythm = [
  { day: "MON", title: "Learn", time: "45–60 min", detail: "One new concept block in the subject with the next assessment." },
  { day: "TUE", title: "Retrieve", time: "45–60 min", detail: "Closed-notes recall, then a focused practice set." },
  { day: "WED", title: "Learn", time: "45–60 min", detail: "Second priority subject; update formula or evidence sheets." },
  { day: "THU", title: "Apply", time: "60–75 min", detail: "FRQ, essay, or calculator-active set under light timing." },
  { day: "FRI", title: "Reset", time: "20–30 min", detail: "Correct misses and choose next week’s two weak skills." },
  { day: "SAT", title: "Deep work", time: "2 × 75 min", detail: "Two subjects, separated by a real break; one mixed set each." },
  { day: "SUN", title: "Light review", time: "45 min", detail: "Spaced recall only. Keep the rest of the day protected." },
];

export const reviewTasks = [
  "Complete one timed multiple-choice section and log every miss",
  "Complete one timed free-response or essay section",
  "Redo five prior misses without notes after 72 hours",
  "Teach the week’s weakest concept aloud in five minutes",
];
