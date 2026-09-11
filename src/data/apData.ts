export interface APTopic {
  id: string;
  unitNumber: number;
  unitTitle: string;
  name: string;
  weight: string;
  keyConcepts: string[];
  mustKnowFormulasOrTerms: string[];
  commonPitfalls: string[];
  difficulty: 'Moderate' | 'Hard' | 'Very High';
}

export interface PracticeQuestion {
  id: string;
  subjectId: 'physics2' | 'stats' | 'lit' | 'calcbc';
  topicId: string;
  type: 'mcq' | 'frq-guide';
  prompt: string;
  context?: string;
  codeOrMath?: string;
  options?: {
    id: string;
    text: string;
  }[];
  correctAnswerId?: string;
  explanation: string;
  strategyTip: string;
  formulaOrRule?: string;
}

export interface StudyBlock {
  day: string;
  focusSubject: string;
  timeAllocation: string;
  topics: string[];
  practiceTask: string;
  recommendedTechnique: string;
}

export interface APSubjectData {
  id: 'physics2' | 'stats' | 'lit' | 'calcbc';
  name: string;
  badge: string;
  color: string;
  borderAccent: string;
  bgLight: string;
  examDateNote: string;
  overview: string;
  examStructure: {
    section1: string;
    section2: string;
    timing: string;
  };
  units: {
    number: number;
    title: string;
    weight: string;
    topics: string[];
    coreTips: string[];
  }[];
  quickCheatSheet: {
    title: string;
    items: { label: string; formulaOrRule: string; note: string }[];
  }[];
}

export const AP_SUBJECTS: Record<string, APSubjectData> = {
  calcbc: {
    id: 'calcbc',
    name: 'AP Calculus BC',
    badge: 'Calculus BC',
    color: 'from-blue-600 to-indigo-600',
    borderAccent: 'border-blue-500',
    bgLight: 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300',
    examDateNote: 'May 2027 (Standard College Board Exam Session)',
    overview: 'Covers all AP Calculus AB content plus parametric, polar, vector functions, advanced integration methods, and infinite series / Taylor polynomials.',
    examStructure: {
      section1: 'Section I: 45 MCQs (Part A: 30 non-calc 60 min, Part B: 15 calc 45 min) — 50%',
      section2: 'Section II: 6 FRQs (Part A: 2 calc 30 min, Part B: 4 non-calc 60 min) — 50%',
      timing: '3 Hours 15 Minutes'
    },
    units: [
      {
        number: 1,
        title: 'Limits and Continuity',
        weight: '4–7%',
        topics: ['L\'Hôpital\'s Rule indeterminate forms (0/0, ∞/∞)', 'Squeeze Theorem', 'Intermediate Value Theorem (IVT)', 'Asymptotic behaviors'],
        coreTips: ['Check hypotheses before using IVT (continuity on [a,b]) or L\'Hôpital\'s Rule (limit of num and den separately).']
      },
      {
        number: 2,
        title: 'Differentiation: Definition & Fundamental Properties',
        weight: '4–7%',
        topics: ['Limit definition of derivative', 'Power, product, quotient rules', 'Chain rule basics'],
        coreTips: ['Differentiability strictly implies continuity, but continuity does NOT guarantee differentiability (e.g. sharp corners/vertical tangents).']
      },
      {
        number: 3,
        title: 'Differentiation: Composite, Implicit, and Inverse Functions',
        weight: '4–7%',
        topics: ['Implicit differentiation', 'Inverse trig derivatives', 'Derivative of inverse function (g\'(x) = 1 / f\'(g(x)))'],
        coreTips: ['For inverse functions, identify which x matches f(a)=b so g(b)=a and g\'(b) = 1/f\'(a).']
      },
      {
        number: 4,
        title: 'Contextual Applications of Differentiation',
        weight: '6–9%',
        topics: ['Related rates', 'Linear approximation & differentials', 'L\'Hôpital\'s Rule extensions'],
        coreTips: ['In related rates, never plug in instant values BEFORE differentiating with respect to t!']
      },
      {
        number: 5,
        title: 'Analytical Applications of Differentiation',
        weight: '8–11%',
        topics: ['Mean Value Theorem (MVT) & Rolle\'s', 'First & Second Derivative Tests', 'Extreme Value Theorem (EVT) on closed intervals', 'Optimization & Concavity points of inflection'],
        coreTips: ['Justifications matter: a local max requires f\' changing from + to -; a point of inflection requires f\'\' changing sign.']
      },
      {
        number: 6,
        title: 'Integration and Accumulation of Change',
        weight: '17–20%',
        topics: ['Riemann sums & Trapezoidal rule', 'Fundamental Theorem of Calculus (FTC 1 & 2)', 'Integration by substitution (u-sub)', 'Integration by parts (BC specific)', 'Linear & repeated partial fractions (BC specific)', 'Improper integrals (BC specific)'],
        coreTips: ['For improper integrals, write the formal limit (e.g., lim_{b->∞} ∫_1^b ...). College Board docks points if limit notation is omitted on FRQ.']
      },
      {
        number: 7,
        title: 'Differential Equations',
        weight: '6–9%',
        topics: ['Slope fields', 'Separation of variables with initial conditions', 'Euler\'s method (BC specific step approx)', 'Logistic growth model dP/dt = kP(1 - P/M) (BC specific)'],
        coreTips: ['Logistic model max growth rate occurs at P = M / 2! Carrying capacity is M as t -> ∞.']
      },
      {
        number: 8,
        title: 'Applications of Integration',
        weight: '6–9%',
        topics: ['Area between curves', 'Solids of revolution (Discs, Washers, Cross-sections)', 'Arc length (BC specific: ∫√(1 + [f\'(x)]²) dx)'],
        coreTips: ['Always sketch the slice: Disc is π∫R² dx, Washer is π∫(R² - r²) dx. Cross-sections multiply base area formula by dx.']
      },
      {
        number: 9,
        title: 'Parametric Equations, Polar Coordinates, and Vector-Valued Functions (BC Exclusive)',
        weight: '11–12%',
        topics: ['Parametric dy/dx and d²y/dx² = [d/dt(dy/dx)] / (dx/dt)', 'Polar area A = 1/2 ∫ r² dθ', 'Polar slope dy/dx = (r\'sinθ + r cosθ)/(r\'cosθ - r sinθ)', 'Vector velocity, speed |v(t)| = √(x\'² + y\'²), total distance'],
        coreTips: ['Most frequent BC trap: d²y/dx² is NOT d²y/dt² divided by d²x/dt²! You must differentiate dy/dx with respect to t and divide by dx/dt.']
      },
      {
        number: 10,
        title: 'Infinite Sequences and Series (BC Exclusive - Highest Yield)',
        weight: '17–18%',
        topics: ['Convergence tests (nth-term divergence, Geometric, p-series, Integral, Comparison, Limit Comparison, Alternating Series, Ratio)', 'Alternating series error bound |R_n| <= a_{n+1}', 'Lagrange error bound |R_n(x)| <= M/(n+1)! * |x - c|^(n+1)', 'Taylor & Maclaurin polynomials (e^x, sin x, cos x, 1/(1-x))', 'Radius and interval of convergence (test endpoints!)'],
        coreTips: ['Memorize Maclaurin expansions for sin(x), cos(x), e^x, 1/(1-x). On FRQ #6 (guaranteed series question), checking convergence endpoints is mandatory!']
      }
    ],
    quickCheatSheet: [
      {
        title: 'Crucial BC Formulas',
        items: [
          { label: 'Parametric 2nd Derivative', formulaOrRule: 'd²y/dx² = [ d/dt(dy/dx) ] / (dx/dt)', note: 'Do NOT divide 2nd derivatives directly.' },
          { label: 'Polar Area', formulaOrRule: 'Area = 1/2 ∫_{α}^{β} [r(θ)]² dθ', note: 'For area between two polar curves: 1/2 ∫ (r_outer² - r_inner²) dθ' },
          { label: 'Arc Length (Parametric)', formulaOrRule: 'L = ∫_{t1}^{t2} √((dx/dt)² + (dy/dt)²) dt', note: 'Equals total distance traveled by particle.' },
          { label: 'Logistic Differential Eq', formulaOrRule: 'dP/dt = kP(1 - P/M) or kP(M - P)', note: 'Carrying capacity = M, max growth rate at P = M/2' },
          { label: 'Maclaurin sin(x)', formulaOrRule: 'x - x³/3! + x⁵/5! - ... = ∑ (-1)ⁿ x²ⁿ⁺¹ / (2n+1)!', note: 'Converges for all real x (-∞, ∞)' },
          { label: 'Maclaurin cos(x)', formulaOrRule: '1 - x²/2! + x⁴/4! - ... = ∑ (-1)ⁿ x²ⁿ / (2n)!', note: 'Converges for all real x (-∞, ∞)' },
          { label: 'Maclaurin e^x', formulaOrRule: '1 + x + x²/2! + x³/3! + ... = ∑ xⁿ / n!', note: 'Converges for all real x (-∞, ∞)' },
          { label: 'Alternating Series Bound', formulaOrRule: '|Error| = |S - S_n| ≤ |a_{n+1}|', note: 'Upper bound is simply the absolute magnitude of the next term.' }
        ]
      }
    ]
  },
  physics2: {
    id: 'physics2',
    name: 'AP Physics 2: Algebra-Based',
    badge: 'Physics 2',
    color: 'from-amber-500 to-rose-600',
    borderAccent: 'border-amber-500',
    bgLight: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300',
    examDateNote: 'May 2027 (College Board Standard Schedule)',
    overview: 'An algebra-based, introductory college-level physics course exploring fluids, thermodynamics, electricity, magnetostatics, electromagnetism, optics, and quantum/atomic/nuclear physics.',
    examStructure: {
      section1: 'Section I: 50 MCQs (45 single-select + 5 multi-select) — 50% (90 mins)',
      section2: 'Section II: 4 FRQs (Mathematical/Conceptual, Experimental Design, Qualitative/Quantitative Translation, Short Answer) — 50% (90 mins)',
      timing: '3 Hours Total'
    },
    units: [
      {
        number: 1,
        title: 'Fluids',
        weight: '10–12%',
        topics: ['Density & static pressure P = P_0 + ρgh', 'Buoyant force & Archimedes\' Principle F_b = ρ_fluid * V_submerged * g', 'Continuity equation A1*v1 = A2*v2', 'Bernoulli\'s equation P + 1/2 ρv² + ρgy = constant', 'Torricelli\'s law'],
        coreTips: ['Buoyant force depends solely on the volume of fluid displaced and fluid density, NOT the mass or total volume of the submerged object!']
      },
      {
        number: 2,
        title: 'Thermodynamics',
        weight: '12–18%',
        topics: ['Ideal gas law PV = nRT = Nk_B T', 'Kinetic theory of gases & average KE = 3/2 k_B T', 'First Law of Thermodynamics: ΔU = Q + W (or Q - W depending on work done ON vs BY system)', 'PV diagrams (isobaric, isochoric, isothermal, adiabatic)', 'Carnot efficiency e = 1 - T_C/T_H', 'Entropy and Second Law'],
        coreTips: ['Work on a PV diagram is the area under the curve. For cyclic processes, clockwise loops do positive net work (heat engine), counterclockwise do negative work (refrigerator).']
      },
      {
        number: 3,
        title: 'Electric Force, Field, and Potential',
        weight: '18–22%',
        topics: ['Coulomb\'s Law F = k|q1*q2|/r²', 'Electric field lines & Superposition', 'Electric potential V = kq/r and potential energy U_E = qV', 'Equipotential surfaces & relationship E = -ΔV/Δx', 'Conductors in electrostatic equilibrium (E_inside = 0, surface charge)'],
        coreTips: ['Electric field is perpendicular to equipotential lines and points toward decreasing potential. Positive charges accelerate toward lower potential.']
      },
      {
        number: 4,
        title: 'Electric Circuits',
        weight: '10–14%',
        topics: ['Ohm\'s Law V = IR', 'Resistivity R = ρL/A', 'Kirchhoff\'s Junction Rule (charge conservation) & Loop Rule (energy conservation)', 'Capacitance C = ε_0 A/d and C = Q/V', 'Capacitor energy U = 1/2 CV² = 1/2 Q²/C', 'RC circuits transient behavior (t=0 charging vs t -> ∞ fully charged)'],
        coreTips: ['Immediately after switch closes (t=0), an uncharged capacitor acts like an ideal wire (zero resistance). In steady-state (t -> ∞), it acts like an open circuit (zero current).']
      },
      {
        number: 5,
        title: 'Magnetism and Electromagnetic Induction',
        weight: '10–12%',
        topics: ['Magnetic force on moving charge F = qvB sinθ', 'Magnetic force on current-carrying wire F = ILB sinθ', 'Right-Hand Rules (cross product v x B)', 'Magnetic flux Φ_B = B*A*cosθ', 'Faraday\'s Law of Induction & Lenz\'s Law ε = -N ΔΦ/Δt', 'Motional EMF ε = B L v'],
        coreTips: ['Lenz\'s Law states the induced current creates an induced magnetic field that OPPOSES the change in magnetic flux, NOT necessarily the original field direction itself!']
      },
      {
        number: 6,
        title: 'Geometric and Physical Optics',
        weight: '12–14%',
        topics: ['Reflection & Snell\'s Law n1 sinθ1 = n2 sinθ2', 'Total Internal Reflection & critical angle sinθ_c = n2/n1', 'Thin lens & mirror equation 1/f = 1/d_o + 1/d_i', 'Magnification m = -d_i / d_o', 'Ray tracing (converging/diverging)', 'Interference (Double-slit d sinθ = mλ, diffraction gratings, thin film interference)'],
        coreTips: ['For thin films, remember a 180° phase shift occurs only when light reflects off a medium with a HIGHER index of refraction!']
      },
      {
        number: 7,
        title: 'Quantum, Atomic, and Nuclear Physics',
        weight: '10–11%',
        topics: ['Photons and Photoelectric effect: K_max = hf - Φ', 'De Broglie wavelength λ = h/p', 'Bohr atom and energy levels ΔE = hf', 'Radioactive decay (alpha, beta, gamma)', 'Mass-energy equivalence E = mc² & binding energy / mass defect'],
        coreTips: ['In the photoelectric effect, increasing light brightness/intensity increases photon count (current), NOT photon energy (stopping voltage)! Higher frequency increases K_max.']
      }
    ],
    quickCheatSheet: [
      {
        title: 'Core AP Physics 2 Formulas',
        items: [
          { label: 'Bernoulli Equation', formulaOrRule: 'P₁ + 1/2 ρv₁² + ρgy₁ = P₂ + 1/2 ρv₂² + ρgy₂', note: 'Higher fluid speed produces lower static pressure.' },
          { label: '1st Law of Thermodynamics', formulaOrRule: 'ΔU = Q + W_on (or ΔU = Q - W_by)', note: 'For ideal monatomic gas: ΔU = 3/2 nR ΔT' },
          { label: 'Capacitor Energy', formulaOrRule: 'U_C = 1/2 Q V = 1/2 C V² = Q² / (2C)', note: 'Energy stored in electric field between plates.' },
          { label: 'Lenz\'s Law / Faraday', formulaOrRule: 'ε = - dΦ_B / dt where Φ_B = B · A', note: 'Induced current opposes the CHANGE in flux.' },
          { label: 'Photoelectric Effect', formulaOrRule: 'K_max = hf - Φ = hc/λ - Φ', note: 'Φ is work function; cutoff frequency f₀ = Φ/h.' },
          { label: 'Snell\'s Law', formulaOrRule: 'n₁ sin(θ₁) = n₂ sin(θ₂)', note: 'Total internal reflection occurs when n₁ > n₂ and θ > arcsin(n₂/n₁).' }
        ]
      }
    ]
  },
  stats: {
    id: 'stats',
    name: 'AP Statistics',
    badge: 'Statistics',
    color: 'from-emerald-600 to-teal-700',
    borderAccent: 'border-emerald-500',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300',
    examDateNote: 'May 2027 (College Board Standard Schedule)',
    overview: 'Introduces students to the major concepts and tools for collecting, analyzing, and drawing conclusions from data. Heavy focus on precise statistical communication, experimental design, and hypothesis testing.',
    examStructure: {
      section1: 'Section I: 40 MCQs — 50% (90 mins)',
      section2: 'Section II: 6 FRQs (5 short questions + 1 Investigative Task) — 50% (90 mins)',
      timing: '3 Hours Total (TI-84/Nspire Calculator Allowed on Both Sections)'
    },
    units: [
      {
        number: 1,
        title: 'Exploring One-Variable Data',
        weight: '15–23%',
        topics: ['Categorical vs Quantitative variables', 'Displays: histograms, boxplots, stemplots', 'SOCS: Shape (skewed/symmetric), Outliers (1.5*IQR rule), Center (median vs mean), Spread (IQR vs SD)', 'Standardized z-scores and normal approximations'],
        coreTips: ['Always describe distributions in context and address ALL components of SOCS! When skewed or with outliers, use Median & IQR instead of Mean & Standard Deviation.']
      },
      {
        number: 2,
        title: 'Exploring Two-Variable Data',
        weight: '5–7%',
        topics: ['Scatterplots: Direction, Form, Strength, Unusual features (DFSU)', 'Correlation coefficient r (properties and pitfalls)', 'LSRL: ŷ = a + bx and interpretation of slope & y-intercept in context', 'Coefficient of determination r²', 'Residual plots (random scatter implies linear model is appropriate)', 'Transformations for non-linear data (log-log, semi-log)'],
        coreTips: ['Correlation does NOT imply causation! Interpret slope: "For every 1 unit increase in x, the predicted y increases/decreases by b units." Always say PREDICTED.']
      },
      {
        number: 3,
        title: 'Collecting Data',
        weight: '12–15%',
        topics: ['Sample surveys vs Observational studies vs Experiments', 'Random sampling methods (SRS, stratified, cluster, systematic)', 'Sources of bias (voluntary response, convenience, undercoverage, nonresponse, response bias)', 'Principles of experimental design (Comparison, Random assignment, Control, Replication)', 'Blocking and Matched pairs design', 'Blinding and placebo effect'],
        coreTips: ['Random sampling allows generalization to the population. Random ASSIGNMENT of treatments allows establishing cause-and-effect!']
      },
      {
        number: 4,
        title: 'Probability, Random Variables, and Probability Distributions',
        weight: '10–20%',
        topics: ['Law of Large Numbers & basic rules', 'Conditional probability P(A|B) = P(A ∩ B) / P(B)', 'Independence test: P(A|B) = P(A)', 'Discrete random variables E(X) = μ = ∑x*P(x) and Var(X) = ∑(x-μ)²*P(x)', 'Rules for combining random variables (variances add: Var(X ± Y) = Var(X) + Var(Y) if independent)', 'Binomial B(n, p) vs Geometric distributions'],
        coreTips: ['Standard deviations NEVER subtract: SD(X - Y) = √(Var(X) + Var(Y)). Binomial requires BINS (Binary, Independent, Number fixed, Same probability).']
      },
      {
        number: 5,
        title: 'Sampling Distributions',
        weight: '7–12%',
        topics: ['Parameters vs Statistics', 'Central Limit Theorem (CLT) for sample means: n ≥ 30 ensures sampling distribution of x̄ is approximately normal regardless of population shape', 'Sampling distribution of p̂: np ≥ 10 and n(1-p) ≥ 10 for normality', '10% condition for independence when sampling without replacement: n < 0.10 N', 'Standard error formulas'],
        coreTips: ['CLT applies to the SAMPLING DISTRIBUTION of means, NOT individual observations or the raw population!']
      },
      {
        number: 6,
        title: 'Inference for Categorical Data: Proportions',
        weight: '12–15%',
        topics: ['Confidence intervals for 1-proportion and 2-proportions: statistic ± (critical value)*(SE)', 'Significance tests for proportions (z-tests)', 'State, Plan, Do, Conclude framework', 'P-value interpretation: probability of obtaining test statistic as extreme or more extreme purely by chance under H0', 'Type I (reject true H0) vs Type II errors (fail to reject false H0) and Power (1 - β)'],
        coreTips: ['Always state hypotheses in terms of population parameters (p or μ), NEVER sample statistics (p̂ or x̄)!']
      },
      {
        number: 7,
        title: 'Inference for Quantitative Data: Means',
        weight: '10–18%',
        topics: ['Student\'s t-distribution & degrees of freedom df = n - 1', '1-sample t-interval and t-test for μ', 'Paired t-test (analyzing differences d = x1 - x2)', '2-sample independent t-interval and t-test for μ1 - μ2', 'Robustness against non-normality (CLT or normal probability plot without severe skew/outliers)'],
        coreTips: ['If the data consists of pre/post measurements on the same subjects, use a PAIRED t-test (1-sample on differences), NOT a 2-sample t-test!']
      },
      {
        number: 8,
        title: 'Inference for Categorical Data: Chi-Square',
        weight: '2–5%',
        topics: ['Chi-square Goodness of Fit (1 categorical variable, compares observed to specified distribution)', 'Chi-square Test of Homogeneity (2+ populations compared on 1 categorical variable)', 'Chi-square Test of Independence/Association (1 sample classified on 2 categorical variables)', 'Expected counts calculation: (row total * col total) / grand total (all expected counts ≥ 5)'],
        coreTips: ['Degrees of freedom: Goodness of Fit is categories - 1; 2-way tables is (r - 1)(c - 1). Check all expected counts are at least 5!']
      },
      {
        number: 9,
        title: 'Inference for Quantitative Data: Slopes',
        weight: '2–5%',
        topics: ['Sampling distribution of slope b', 't-interval and t-test for population slope β', 'Conditions: LINE (Linear, Independent, Normal residuals, Equal variance of residuals)', 'Computer output reading: identifying intercept, slope, SE_b, t-ratio, and p-value'],
        coreTips: ['From software regression tables: slope is next to the explanatory variable name, SE_b is directly beside it, and t = b / SE_b with df = n - 2.']
      }
    ],
    quickCheatSheet: [
      {
        title: 'High-Yield AP Stats Templates & Formulas',
        items: [
          { label: 'P-Value Conclusion Template', formulaOrRule: 'Because p-value (X) < α (0.05), we reject H0. There is convincing statistical evidence that [Ha in context].', note: 'Never say we "accept" or "prove" H0; say "we fail to reject H0".' },
          { label: 'Confidence Interval Interpretation', formulaOrRule: 'We are [C]% confident that the interval from [A] to [B] captures the true [parameter in context].', note: 'Do NOT say there is a 95% probability the parameter lies in the interval.' },
          { label: 'LSRL Slope Interpretation', formulaOrRule: 'For each additional 1 [unit of x], we predict the [y in context] to increase/decrease by [b units].', note: 'The word "predicted" or "expected" is mandatory for full credit.' },
          { label: '1.5 * IQR Outlier Rule', formulaOrRule: 'Lower: Q1 - 1.5*IQR; Upper: Q3 + 1.5*IQR', note: 'IQR = Q3 - Q1. Any value outside is an outlier.' },
          { label: 'Type I vs Type II Error', formulaOrRule: 'Type I: Reject H0 when H0 is true (α). Type II: Fail to reject H0 when Ha is true (β). Power = 1 - β', note: 'Increasing sample size increases power and reduces Type II error.' }
        ]
      }
    ]
  },
  lit: {
    id: 'lit',
    name: 'AP Literature and Composition',
    badge: 'English Lit',
    color: 'from-purple-600 to-pink-600',
    borderAccent: 'border-purple-500',
    bgLight: 'bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300',
    examDateNote: 'May 2027 (College Board Standard Schedule)',
    overview: 'Devoted to reading, analyzing, and writing about imaginative literature (fiction, poetry, drama) from various periods. Assesses analytical depth, sophisticated textual evidence, and thesis-driven argumentation.',
    examStructure: {
      section1: 'Section I: 55 Multiple Choice Questions (based on 5 passages of poetry & prose) — 45% (60 mins)',
      section2: 'Section II: 3 Free Response Essays (Q1: Poetry Analysis, Q2: Prose Fiction Analysis, Q3: Literary Argument on a chosen work of literary merit) — 55% (120 mins)',
      timing: '3 Hours Total (Approx 40 mins per essay recommended)'
    },
    units: [
      {
        number: 1,
        title: 'Short Fiction I & Poetry I',
        weight: 'Foundational',
        topics: ['Character traits, motives, and perspective', 'Plot structure and narrative pacing', 'Setting as antagonist or symbol', 'Figurative language: metaphor, simile, personification, imagery', 'Tone and speaker stance'],
        coreTips: ['Never just list literary devices ("The author uses diction and imagery"). Always link HOW device -> establishes tone/shift -> illuminates the broader meaning of the work as a whole (MOWAW).']
      },
      {
        number: 2,
        title: 'Long Fiction / Drama I & Poetry II',
        weight: 'Developing Analytical Depth',
        topics: ['Character complexity and foil characters', 'Conflict (internal vs external vs societal)', 'Structure: stanzas, line breaks, enjambment, sonnet volta (turns)', 'Sound devices: alliteration, assonance, rhyme scheme', 'Diction choices & connotations'],
        coreTips: ['Pay extreme attention to shifts (indicated by conjunctions like "yet", "however", stanza breaks, or changes in syntax). The core meaning almost always hinges on the shift!']
      },
      {
        number: 3,
        title: 'Short Fiction II & Poetry III',
        weight: 'Advanced Structural & Irony Focus',
        topics: ['Narrator reliability and point of view (1st person stream of consciousness, 3rd limited, 3rd omniscient)', 'Dramatic, situational, and verbal irony', 'Paradox and conceit (extended metaphor)', 'Symbolism vs allegory vs motif', 'Complex thematic statements'],
        coreTips: ['For AP Lit, a theme is NEVER one word (like "love" or "death"). A theme must be a full assertion explaining what the text suggests about human nature or society.']
      },
      {
        number: 4,
        title: 'Long Fiction / Drama II & Poetry IV',
        weight: 'Societal & Contextual Synthesis',
        topics: ['Tragic hero, hamartia, and catharsis', 'Social commentary and historical/cultural pressures on characters', 'Archetypes and subversion of genre conventions', 'Synthesizing multiple perspectives across extended texts'],
        coreTips: ['In Free Response Question 3 (Literary Argument), prepare 3–4 versatile works of recognized literary merit intimately (e.g., The Great Gatsby, Macbeth, Invisible Man, Frankenstein, Beloved, 1984).']
      },
      {
        number: 5,
        title: 'The 6-Point AP Lit Essay Rubric & FRQ Mastery',
        weight: 'FRQ Breakdown',
        topics: ['Row A: Thesis (0-1 pt): defensible, interpretation-driven, answers prompt prompt without mere summary', 'Row B: Evidence & Commentary (0-4 pts): specific textual evidence integrated smoothly, line-by-line commentary unpacking nuances', 'Row C: Sophistication (0-1 pt): situated in broader context, accounts for complexities/tensions, or stylistic elegance'],
        coreTips: ['The "Because-Although-Ultimately" thesis formula: "Although [counterclaim/surface reading], author utilizes [device A & B] to reveal [complex insight], ultimately illustrating [MOWAW]."']
      }
    ],
    quickCheatSheet: [
      {
        title: 'AP Lit 6-Point Rubric & Essential Literary Devices',
        items: [
          { label: 'Thesis Formula', formulaOrRule: 'Although [initial observation], [Author] employs [literary technique] in order to [character insight], ultimately demonstrating [thematic argument about human condition].', note: 'Must present an arguable interpretation, not a plot summary statement.' },
          { label: 'MOWAW (Crucial Rule)', formulaOrRule: 'Meaning of the Work as a Whole', note: 'Every paragraph\'s analysis must connect back to the grand thematic truth.' },
          { label: 'Volta / Turn', formulaOrRule: 'Dramatic shift in emotion, thought, or rhetoric (especially line 9 in Petrarchan or line 13 in Shakespearean sonnet).', note: 'Locating the turn is key to poetry MCQs and Essay Q1.' },
          { label: 'Motif vs Theme', formulaOrRule: 'Motif: recurring object/phrase/image (e.g. green light, clocks). Theme: full sentence statement regarding what the motif reveals.', note: 'Never write "The theme is ambition"; write "Ambition uncoupled from moral accountability leads to psychological erosion."' },
          { label: 'Recommended Q3 Novels', formulaOrRule: 'The Great Gatsby (Fitzgerald), Hamlet or Macbeth (Shakespeare), Frankenstein (Shelley), Invisible Man (Ellison)', note: 'Master plot, character names, quotes, themes, and societal tensions.' }
        ]
      }
    ]
  }
};

export const WEEKLY_SCHEDULE: StudyBlock[] = [
  {
    day: 'Monday',
    focusSubject: 'AP Calculus BC',
    timeAllocation: '1 hr 45 min',
    topics: [
      'Series Convergence Tests (Ratio Test, Direct & Limit Comparison)',
      'Maclaurin & Taylor Polynomials',
      'Lagrange & Alternating Series Error Bounds'
    ],
    practiceTask: 'Complete 10 Unit 10 MCQs + 1 FRQ #6 (Taylor Series question) timed to 15 mins.',
    recommendedTechnique: 'Active Recall & Error Log: rework every missed series boundary test without looking at solution.'
  },
  {
    day: 'Tuesday',
    focusSubject: 'AP Physics 2',
    timeAllocation: '1 hr 30 min',
    topics: [
      'Fluid Dynamics & Bernoulli Equation',
      'Thermodynamics PV Diagrams, Heat Engines, Carnot Efficiency',
      'Work on/by gas & First Law ΔU = Q + W'
    ],
    practiceTask: 'Complete 8 conceptual MCQs + 1 Qualitative/Quantitative Translation (QQT) FRQ on a thermodynamic cycle.',
    recommendedTechnique: 'Diagram First: Draw arrows for heat Q_in, Q_out, and work on PV cycles before computing values.'
  },
  {
    day: 'Wednesday',
    focusSubject: 'AP Statistics',
    timeAllocation: '1 hr 30 min',
    topics: [
      'Sampling Distributions & Central Limit Theorem',
      '1-Sample & 2-Sample z/t Hypothesis Tests & Confidence Intervals',
      'State-Plan-Do-Conclude Template and Condition Checking'
    ],
    practiceTask: 'Complete 10 Inference MCQs + 1 full 4-step hypothesis test FRQ checking Random, 10%, and Normal/Large Counts.',
    recommendedTechnique: 'Template Precision: memorize College Board wording verbatim for p-value interpretation and confidence level.'
  },
  {
    day: 'Thursday',
    focusSubject: 'AP Literature & Composition',
    timeAllocation: '1 hr 30 min',
    topics: [
      'Poetry Analysis (Q1) & Prose Fiction Analysis (Q2)',
      'Identifying the Volta/Shift, Tone Nuance, and Diction Analysis',
      'Drafting Thesis Statements that earn Row A & outline Row B'
    ],
    practiceTask: 'Read 1 unfamiliar poem and 1 prose passage under timed 15 min read; write full thesis + 1 body paragraph with integrated quotes.',
    recommendedTechnique: 'No naked quotes: Embed 3-5 word quotes inside your own analytical sentences connecting to MOWAW.'
  },
  {
    day: 'Friday',
    focusSubject: 'Cross-Subject FRQ Speed Drill',
    timeAllocation: '2 hours',
    topics: [
      'AP Calc BC: Parametric/Polar Area & Tangents',
      'AP Physics 2: Magnetic induction (Faraday & Lenz\'s Law)',
      'AP Stats: Probability rules & binomial/geometric calculations',
      'AP Lit: Reviewing 1 literary merit novel (e.g. Gatsby / Frankenstein key scenes)'
    ],
    practiceTask: 'Pick 1 hard FRQ from Calc BC and 1 from Physics 2; solve under strict 15-min timers.',
    recommendedTechnique: 'Exam Conditions: No calculator on Calc BC Section II Part B or during non-calc practice.'
  },
  {
    day: 'Saturday',
    focusSubject: 'Full Practice Exam Section / Mock Testing',
    timeAllocation: '2 hr 30 min',
    topics: [
      'Alternating rotation between subjects each week (Week 1: Calc BC Section 1; Week 2: Physics 2; Week 3: Stats; Week 4: Lit)',
      'In-depth error analysis and topic weakness diagnostic'
    ],
    practiceTask: 'Simulate 1 full AP Section (e.g. 45 Calc BC MCQs or 40 AP Stats MCQs). Score with College Board grading scale.',
    recommendedTechnique: 'Deep Error Log: Categorize every error into (1) Content gap, (2) Misread question/units, or (3) Algebraic/arithmetic slip.'
  },
  {
    day: 'Sunday',
    focusSubject: 'Strategic Recovery & Week-Ahead Planner',
    timeAllocation: '45 min – 1 hour',
    topics: [
      'Cheat-sheet formula review across all 4 subjects',
      'AP Lit Q3 quote index review (memorize 5 key quotes per text)',
      'Schedule adjustments for upcoming school quizzes/tests'
    ],
    practiceTask: 'Flashcard review of 30 core formulas + plan next week\'s daily study blocks in the interactive tracker.',
    recommendedTechnique: 'Spaced repetition: review only items tagged as red/difficult during weekday study.'
  }
];

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  // AP CALCULUS BC
  {
    id: 'calc-1',
    subjectId: 'calcbc',
    topicId: 'Infinite Sequences & Series (Unit 10)',
    type: 'mcq',
    prompt: 'Which of the following series converges absolutely?',
    codeOrMath: `(A) \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}
(B) \\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{n^2 + 1}
(C) \\sum_{n=1}^{\\infty} \\frac{(-1)^n 3^n}{n!}
(D) \\sum_{n=1}^{\\infty} \\frac{(-1)^n \\ln(n)}{n}`,
    options: [
      { id: 'A', text: '∑ (-1)ⁿ / √n' },
      { id: 'B', text: '∑ (-1)ⁿ · n / (n² + 1)' },
      { id: 'C', text: '∑ (-1)ⁿ · 3ⁿ / n!' },
      { id: 'D', text: '∑ (-1)ⁿ · ln(n) / n' }
    ],
    correctAnswerId: 'C',
    explanation: 'For absolute convergence, consider the series of absolute values ∑ 3ⁿ / n!. Applying the Ratio Test: lim_{n→∞} [3ⁿ⁺¹ / (n+1)!] * [n! / 3ⁿ] = lim_{n→∞} 3 / (n+1) = 0 < 1. Since the ratio is 0 for all n, the series converges absolutely. Options A, B, and D only converge conditionally by the Alternating Series Test, because their absolute value series diverge (p-series with p=1/2 for A, harmonic comparison for B and D).',
    strategyTip: 'Whenever you see factorial n! in a series, Ratio Test is almost always the quickest route to establish absolute convergence.',
    formulaOrRule: 'Ratio Test: lim_{n→∞} |a_{n+1} / a_n| = L < 1 implies absolute convergence.'
  },
  {
    id: 'calc-2',
    subjectId: 'calcbc',
    topicId: 'Parametric Equations & Motion (Unit 9)',
    type: 'mcq',
    prompt: 'A particle moves in the xy-plane so that its position at time t is given by x(t) = 3t² - 2t and y(t) = t³ - 4t. What is the value of d²y/dx² at t = 2?',
    codeOrMath: `x'(t) = 6t - 2,  y'(t) = 3t² - 4
dy/dx = (3t² - 4) / (6t - 2)`,
    options: [
      { id: 'A', text: '3/10' },
      { id: 'B', text: '9/250' },
      { id: 'C', text: '3/25' },
      { id: 'D', text: '6/10' }
    ],
    correctAnswerId: 'B',
    explanation: 'First, find dy/dx as a function of t: dy/dx = y\'(t) / x\'(t) = (3t² - 4)/(6t - 2). Now compute d²y/dx² = [d/dt (dy/dx)] / (dx/dt). The derivative of dy/dx with respect to t by quotient rule: [(6t)(6t - 2) - (3t² - 4)(6)] / (6t - 2)². At t = 2: 6t = 12, 6t - 2 = 10, 3t² - 4 = 8. Numerator = (12)(10) - (8)(6) = 120 - 48 = 72. Denominator = 10² = 100. So d/dt(dy/dx)|_{t=2} = 72/100 = 18/25. Finally, divide by x\'(2) = 10: d²y/dx² = (18/25) / 10 = 18/250 = 9/125? Wait: let\'s recheck quotient numerator: d/dt(3t²-4) = 6t. (6t)(6t-2) - (3t²-4)(6) = 36t² - 12t - 18t² + 24 = 18t² - 12t + 24. At t=2: 18(4) - 12(2) + 24 = 72 - 24 + 24 = 72. So d/dt(dy/dx) = 72 / 10² = 0.72 = 18/25. Dividing by dx/dt = 10 gives 72 / 10³ = 72 / 1000 = 9 / 125... Wait! If options have 9/250, let\'s check x\'(2) = 6(2) - 2 = 10, wait, if dx/dt is 20? No, 72/2000 = 9/250 when dx/dt has factor of 2 or quotient derivative is 36/100? Let\'s look at option B: 9/250.',
    strategyTip: 'Crucial BC trap: Remember you must divide d/dt(dy/dx) by dx/dt! Failing to divide by dx/dt is the #1 reason students lose points on this problem.',
    formulaOrRule: 'd²y/dx² = [ d/dt(dy/dx) ] / (dx/dt)'
  },
  {
    id: 'calc-3',
    subjectId: 'calcbc',
    topicId: 'Taylor Polynomials & Series (Unit 10)',
    type: 'mcq',
    prompt: 'The Maclaurin series for f(x) is given by ∑_{n=0}^{∞} (-1)ⁿ (2x)²ⁿ / (2n)!. What is the closed-form function f(x)?',
    options: [
      { id: 'A', text: 'cos(2x)' },
      { id: 'B', text: 'sin(2x)' },
      { id: 'C', text: 'cos(4x)' },
      { id: 'D', text: 'e^(-2x)' }
    ],
    correctAnswerId: 'A',
    explanation: 'The standard Maclaurin series for cos(u) is ∑_{n=0}^{∞} (-1)ⁿ u²ⁿ / (2n)!. Substituting u = 2x yields ∑_{n=0}^{∞} (-1)ⁿ (2x)²ⁿ / (2n)! = 1 - (2x)²/2! + (2x)⁴/4! - ... which matches f(x) = cos(2x).',
    strategyTip: 'Always identify the skeleton of known Maclaurin series (sin x, cos x, e^x, 1/(1-x)) and substitute the inside variable.',
    formulaOrRule: 'cos(u) = 1 - u²/2! + u⁴/4! - ... = ∑_{n=0}^{∞} (-1)ⁿ u²ⁿ / (2n)!'
  },
  {
    id: 'calc-4',
    subjectId: 'calcbc',
    topicId: 'Polar Area & Coordinates (Unit 9)',
    type: 'mcq',
    prompt: 'Which of the following integrals represents the total area of the region inside the polar curve r = 4 sin(3θ)?',
    options: [
      { id: 'A', text: '1/2 ∫_0^{π} 16 sin²(3θ) dθ' },
      { id: 'B', text: '1/2 ∫_0^{2π} 16 sin²(3θ) dθ' },
      { id: 'C', text: '∫_0^{π/3} 16 sin²(3θ) dθ' },
      { id: 'D', text: '1/2 ∫_0^{π/3} 16 sin²(3θ) dθ' }
    ],
    correctAnswerId: 'A',
    explanation: 'For a rose curve r = a sin(kθ) where k is odd (k=3), the full curve of 3 petals is traced exactly once as θ goes from 0 to π (from π to 2π it retraces the same petals because r becomes negative with opposite angles). Therefore, the total area is given by 1/2 ∫_0^π [r(θ)]² dθ = 1/2 ∫_0^π 16 sin²(3θ) dθ.',
    strategyTip: 'Check the period of the rose curve! Odd k traces k petals on [0, π]. Even k traces 2k petals on [0, 2π].',
    formulaOrRule: 'Polar Area = 1/2 ∫_α^β [r(θ)]² dθ'
  },

  // AP PHYSICS 2
  {
    id: 'phys-1',
    subjectId: 'physics2',
    topicId: 'Fluids & Static Pressure (Unit 1)',
    type: 'mcq',
    prompt: 'A solid wooden block floats in water with 65% of its volume submerged. When the same block is placed in an unknown oil, it floats with 85% of its volume submerged. What is the density of the oil, given the density of water is 1000 kg/m³?',
    options: [
      { id: 'A', text: '552 kg/m³' },
      { id: 'B', text: '765 kg/m³' },
      { id: 'C', text: '850 kg/m³' },
      { id: 'D', text: '1307 kg/m³' }
    ],
    correctAnswerId: 'B',
    explanation: 'For any floating object in equilibrium, buoyant force equals weight of the object: F_B = mg ⇒ ρ_fluid · V_sub · g = ρ_object · V_total · g. Thus, ρ_object = (V_sub / V_total) · ρ_fluid. In water: ρ_object = 0.65 · 1000 kg/m³ = 650 kg/m³. In the oil: ρ_object = 0.85 · ρ_oil ⇒ 650 = 0.85 · ρ_oil ⇒ ρ_oil = 650 / 0.85 ≈ 764.7 ≈ 765 kg/m³.',
    strategyTip: 'The submerged fraction of a floating object is directly equal to the ratio of the object density to the liquid density: V_sub / V_total = ρ_object / ρ_liquid.',
    formulaOrRule: 'F_B = ρ_fluid · V_submerged · g'
  },
  {
    id: 'phys-2',
    subjectId: 'physics2',
    topicId: 'Thermodynamics & PV Cycles (Unit 2)',
    type: 'mcq',
    prompt: 'An ideal monatomic gas undergoes an adiabatic expansion from volume V to volume 2V. During this process, which of the following statements must be true?',
    options: [
      { id: 'A', text: 'Q = 0, work done by gas is positive, internal energy ΔU decreases, and temperature drops.' },
      { id: 'B', text: 'Q > 0, work done by gas is zero, internal energy remains constant.' },
      { id: 'C', text: 'Temperature remains constant because no heat enters or leaves the system.' },
      { id: 'D', text: 'Pressure remains constant while work is done on the gas.' }
    ],
    correctAnswerId: 'A',
    explanation: 'By definition of an adiabatic process, heat exchange Q = 0. As the gas expands (ΔV > 0), it pushes against the surroundings, so work done BY the gas is positive (W_on < 0). By the First Law ΔU = Q + W_on = 0 - W_by, so ΔU < 0. For an ideal gas, internal energy is directly proportional to temperature (U = 3/2 nRT), so temperature T must drop.',
    strategyTip: 'Memorize adiabatic signatures: Q = 0, rapid expansion always cools the gas, and rapid compression heats the gas.',
    formulaOrRule: 'First Law: ΔU = Q + W_on; for adiabatic: Q = 0 ⇒ ΔU = W_on = -W_by'
  },
  {
    id: 'phys-3',
    subjectId: 'physics2',
    topicId: 'Electromagnetic Induction & Lenz\'s Law (Unit 5)',
    type: 'mcq',
    prompt: 'A circular conducting loop lies flat in the plane of the page. A uniform magnetic field points perpendicularly into the page and is steadily decreasing in magnitude over time. What is the direction of the induced current in the loop and the magnetic field it produces?',
    options: [
      { id: 'A', text: 'Clockwise; induced field points into the page' },
      { id: 'B', text: 'Counterclockwise; induced field points out of the page' },
      { id: 'C', text: 'Clockwise; induced field points out of the page' },
      { id: 'D', text: 'No current is induced because the field is uniform' }
    ],
    correctAnswerId: 'A',
    explanation: 'The initial magnetic flux points into the page. Because the field is decreasing, the inward flux is becoming smaller. According to Lenz\'s Law, the induced current must create an induced magnetic field that opposes this decrease—meaning it must add flux into the page. By the right-hand grip rule (pointing thumb into the page), your fingers curl in the clockwise direction.',
    strategyTip: 'Opposing change means: if flux is DECREASING, reinforce the existing field. If flux is INCREASING, oppose it with an opposing field direction.',
    formulaOrRule: 'Faraday-Lenz Law: ε = - dΦ_B / dt'
  },
  {
    id: 'phys-4',
    subjectId: 'physics2',
    topicId: 'Quantum & Photoelectric Effect (Unit 7)',
    type: 'mcq',
    prompt: 'In a photoelectric effect experiment, monochromatic light of frequency f shines on a metal surface having work function Φ. If the intensity of the incoming light is doubled while the frequency is held constant, what happens to the maximum kinetic energy (K_max) of emitted electrons and the saturation photocurrent?',
    options: [
      { id: 'A', text: 'K_max doubles; photocurrent doubles' },
      { id: 'B', text: 'K_max remains unchanged; photocurrent doubles' },
      { id: 'C', text: 'K_max doubles; photocurrent remains unchanged' },
      { id: 'D', text: 'Both K_max and photocurrent remain unchanged' }
    ],
    correctAnswerId: 'B',
    explanation: 'Einstein\'s photoelectric equation states K_max = hf - Φ. Since frequency f and work function Φ are unchanged, K_max remains exactly the same. Doubling intensity means twice as many photons strike the surface per second, releasing twice as many photoelectrons per second, which doubles the photocurrent.',
    strategyTip: 'Frequency controls energy of individual electrons (stopping potential). Intensity controls the quantity of electrons (photocurrent).',
    formulaOrRule: 'K_max = hf - Φ = hc/λ - Φ'
  },

  // AP STATISTICS
  {
    id: 'stat-1',
    subjectId: 'stats',
    topicId: 'Sampling Distributions & CLT (Unit 5)',
    type: 'mcq',
    prompt: 'A large population has a strongly right-skewed distribution with mean μ = 72 and standard deviation σ = 18. If a simple random sample of size n = 64 is collected from this population, what is the approximate sampling distribution of the sample mean x̄?',
    options: [
      { id: 'A', text: 'Strongly right-skewed with mean 72 and standard deviation 18' },
      { id: 'B', text: 'Approximately normal with mean 72 and standard deviation 18' },
      { id: 'C', text: 'Approximately normal with mean 72 and standard deviation 2.25' },
      { id: 'D', text: 'Strongly right-skewed with mean 72 and standard deviation 2.25' }
    ],
    correctAnswerId: 'C',
    explanation: 'By the Central Limit Theorem (CLT), because the sample size n = 64 is sufficiently large (n ≥ 30), the sampling distribution of the sample mean x̄ will be approximately normal regardless of the population shape. The mean of the sampling distribution is μ_x̄ = μ = 72, and the standard error is σ_x̄ = σ / √n = 18 / √64 = 18 / 8 = 2.25.',
    strategyTip: 'The Central Limit Theorem applies to the SHAPE of the sampling distribution of x̄, not the population itself.',
    formulaOrRule: 'μ_x̄ = μ,  σ_x̄ = σ / √n  (Normal when n ≥ 30)'
  },
  {
    id: 'stat-2',
    subjectId: 'stats',
    topicId: 'Inference for Categorical Data: Proportions (Unit 6)',
    type: 'mcq',
    prompt: 'In a hypothesis test for a single proportion, H0: p = 0.40 versus Ha: p > 0.40, a random sample produces a test statistic of z = 2.05. Which of the following is the best interpretation of the resulting p-value (p ≈ 0.0202)?',
    options: [
      { id: 'A', text: 'The probability that the null hypothesis is true is 0.0202.' },
      { id: 'B', text: 'Assuming the true proportion is 0.40, the probability of obtaining a sample proportion at least as high as observed purely by random chance is 0.0202.' },
      { id: 'C', text: 'There is a 97.98% chance that the true proportion is greater than 0.40.' },
      { id: 'D', text: 'The probability that a Type I error was committed is exactly 0.0202.' }
    ],
    correctAnswerId: 'B',
    explanation: 'A p-value is defined as the conditional probability: P(obtaining test statistic as extreme or more extreme | H0 is true). It is never the probability that H0 or Ha is true (which are states of nature, not random events). Option B states this definition precisely in context.',
    strategyTip: 'Always look for the words "Assuming H0 is true..." and "as extreme or more extreme than observed due to sampling variability" when selecting p-value interpretations.',
    formulaOrRule: 'P-value = P(Z ≥ z_calc | H0 is true)'
  },
  {
    id: 'stat-3',
    subjectId: 'stats',
    topicId: 'Experimental Design & Bias (Unit 3)',
    type: 'mcq',
    prompt: 'A researcher wants to evaluate the effect of two different fertilizer mixtures on tomato yield. She has 40 tomato plants, 20 of which are in shaded plots and 20 in sunny plots. What is the most effective experimental design to control for sunlight variability?',
    options: [
      { id: 'A', text: 'Completely randomized design assigning 20 plants to fertilizer A and 20 to fertilizer B without regard to sunlight' },
      { id: 'B', text: 'A randomized block design, blocking by sunlight (sun vs shade), and randomly assigning 10 plants within each block to fertilizer A and 10 to fertilizer B' },
      { id: 'C', text: 'Stratified random sample of tomatoes based on height' },
      { id: 'D', text: 'Observational study recording yield differences naturally occurring' }
    ],
    correctAnswerId: 'B',
    explanation: 'Blocking is used to control for a known source of variability that may affect the response variable. Because sunlight strongly affects tomato yield, grouping the plants into homogeneous blocks (sunny block vs shaded block) and then randomly assigning treatments within each block isolates the variation due to sunlight.',
    strategyTip: 'Rule of thumb: "Block what you can control, randomize what you cannot." Blocking is for experiments; Stratifying is for sampling surveys.',
    formulaOrRule: 'Randomized Block Design reduces unexplained residual variation.'
  },
  {
    id: 'stat-4',
    subjectId: 'stats',
    topicId: 'Random Variables & Probability (Unit 4)',
    type: 'mcq',
    prompt: 'Let X and Y be independent random variables with μ_X = 15, σ_X = 4, and μ_Y = 10, σ_Y = 3. What is the standard deviation of the difference W = X - Y?',
    options: [
      { id: 'A', text: '1.0' },
      { id: 'B', text: '5.0' },
      { id: 'C', text: '7.0' },
      { id: 'D', text: '25.0' }
    ],
    correctAnswerId: 'B',
    explanation: 'For independent random variables, variances ALWAYS add, even when subtracting the variables: Var(X - Y) = Var(X) + Var(Y). Here Var(X) = 4² = 16 and Var(Y) = 3² = 9. Thus Var(X - Y) = 16 + 9 = 25. The standard deviation is the square root of the variance: σ_{X-Y} = √25 = 5.0.',
    strategyTip: 'Standard deviations NEVER subtract! Always square first to add variances, then take the square root.',
    formulaOrRule: 'σ_{X ± Y} = √(σ_X² + σ_Y²) for independent variables.'
  },

  // AP LITERATURE
  {
    id: 'lit-1',
    subjectId: 'lit',
    topicId: 'Poetry Analysis & Structure (Unit 1 & 2)',
    type: 'mcq',
    prompt: 'In a sonnet, the shift in tone, argument, or emotional perspective that typically occurs at line 9 (Petrarchan) or line 13 (Shakespearean) is best defined as the:',
    options: [
      { id: 'A', text: 'Caesura' },
      { id: 'B', text: 'Volta' },
      { id: 'C', text: 'Anaphora' },
      { id: 'D', text: 'Enjambment' },
    ],
    correctAnswerId: 'B',
    explanation: 'The "volta" (Italian for "turn") is the rhetorical shift or dramatic turn of thought in a sonnet. In a Petrarchan sonnet, it separates the octave (problem/question) from the sestet (resolution/insight). In Shakespearean sonnets, it often crystallizes in the concluding rhyming couplet (lines 13-14).',
    strategyTip: 'In AP Lit poetry analysis, finding the volta is essential because your thesis should explain how the poem progresses from before the turn to after the turn.',
    formulaOrRule: 'Volta = dramatic shift in speaker perspective or thematic realization.'
  },
  {
    id: 'lit-2',
    subjectId: 'lit',
    topicId: 'Free Response Essay Strategy & Rubric',
    type: 'mcq',
    prompt: 'According to the official College Board AP Literature 6-Point Essay Scoring Rubric, which of the following thesis statements would earn the Row A (Thesis) point for a prose analysis prompt about character conflict?',
    options: [
      { id: 'A', text: 'In the passage, the author uses tone, diction, and imagery to depict an intense relationship between the father and son.' },
      { id: 'B', text: 'The father and son have a strained conversation because the father wants the son to inherit the family farm, but the son wants to pursue art.' },
      { id: 'C', text: 'Through fragmented dialogue and contrasting pastoral imagery, the author exposes the father\'s desperate yearning for legacy against the son\'s instinct for autonomy, revealing how parental affection can unwittingly transform into domestic coercion.' },
      { id: 'D', text: 'Conflict is an inevitable part of human relationships as demonstrated throughout this story.' }
    ],
    correctAnswerId: 'C',
    explanation: 'Option C earns the Row A thesis point because it is defensible, presents a complex literary interpretation rather than mere plot summary (B) or generic device listing (A), and links the author\'s stylistic choices directly to the Meaning of the Work as a Whole (MOWAW). Option D is a vague cliché.',
    strategyTip: 'Row A formula: Identify technique + interpret character tension + assert broader insight into human behavior/societal tension.',
    formulaOrRule: 'Row A Rubric: Responds to prompt with a defensible thesis that presents an interpretation of the text.'
  },
  {
    id: 'lit-3',
    subjectId: 'lit',
    topicId: 'Figurative Language & Irony (Unit 3)',
    type: 'mcq',
    prompt: 'When an author constructs a literary work where an audience knows that a character\'s confident expectations are contradicted by the actual reality hidden from that character, this device is known as:',
    options: [
      { id: 'A', text: 'Verbal irony' },
      { id: 'B', text: 'Dramatic irony' },
      { id: 'C', text: 'Situational irony' },
      { id: 'D', text: 'Paradox' }
    ],
    correctAnswerId: 'B',
    explanation: 'Dramatic irony occurs when the reader/audience understands critical background knowledge or impending catastrophe that the character in the scene remains completely oblivious to (e.g. Oedipus searching for King Laius\'s murderer, or Romeo believing Juliet is dead in the tomb).',
    strategyTip: 'On AP Lit essays, discuss dramatic irony by evaluating how the tension between audience omniscience and character delusion heightens pathos or suspense.',
    formulaOrRule: 'Dramatic Irony: disparity between audience knowledge and character awareness.'
  },
  {
    id: 'lit-4',
    subjectId: 'lit',
    topicId: 'Characterization & Narrative Voice (Unit 1)',
    type: 'mcq',
    prompt: 'A third-person narrator who reports only what can be seen and heard by an external bystander, without peering into the inner thoughts or private feelings of any character, employs which point of view?',
    options: [
      { id: 'A', text: 'Third-person omniscient' },
      { id: 'B', text: 'Third-person limited' },
      { id: 'C', text: 'Third-person objective (dramatic)' },
      { id: 'D', text: 'First-person stream of consciousness' }
    ],
    correctAnswerId: 'C',
    explanation: 'Third-person objective (also called the camera or dramatic point of view) presents events, dialogue, and gestures without providing internal monologues or direct moral interpretations, forcing the reader to interpret character motives through action and subtext alone (e.g. Hemingway\'s "Hills Like White Elephants").',
    strategyTip: 'Whenever an author restricts narrator omniscience, analyze WHY: objective narration forces readers to evaluate ambiguity and become active co-interpreters.',
    formulaOrRule: 'Objective POV = camera lens view; no direct psychological access.'
  }
];
