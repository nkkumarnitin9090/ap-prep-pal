export interface FRQPrompt {
  id: string;
  subjectId: 'physics2' | 'stats' | 'lit' | 'calcbc';
  title: string;
  unit: string;
  calculatorPolicy: 'Calculator Allowed' | 'No Calculator' | 'Calculator Optional';
  suggestedMinutes: number;
  promptText: string;
  scenarioDetails?: string[];
  subQuestions: {
    part: string;
    question: string;
    points: number;
    scoringGuideline: string;
    modelSolution: string;
    commonStudentMistakes: string;
  }[];
}

export const FRQ_PRACTICE_SETS: FRQPrompt[] = [
  {
    id: 'frq-calc-1',
    subjectId: 'calcbc',
    title: 'Taylor Series & Alternating Error Bound (Classic FRQ #6 Style)',
    unit: 'Unit 10: Infinite Sequences and Series',
    calculatorPolicy: 'No Calculator',
    suggestedMinutes: 15,
    promptText: 'A function f has derivatives of all orders for all real numbers x. A portion of the graph of f and the line tangent to f at x = 0 is shown. It is known that f(0) = 2, f\'(0) = -3, f\'\'(0) = 5, and f\'\'\'(0) = -12.',
    scenarioDetails: [
      'f(0) = 2',
      'f\'(0) = -3',
      'f\'\'(0) = 5',
      'f\'\'\'(0) = -12',
      'The fourth derivative of f satisfies |f^{(4)}(x)| ≤ 48 for all x in [-0.5, 0.5]'
    ],
    subQuestions: [
      {
        part: '(a)',
        question: 'Write the third-degree Taylor polynomial for f about x = 0.',
        points: 2,
        scoringGuideline: '1 point for using Taylor coefficients formula f^(n)(0)/n! ; 1 point for the correct polynomial expression.',
        modelSolution: 'P₃(x) = f(0) + f\'(0)x + [f\'\'(0)/2!]x² + [f\'\'\'(0)/3!]x³\nP₃(x) = 2 - 3x + (5/2)x² + (-12/6)x³ = 2 - 3x + (5/2)x² - 2x³',
        commonStudentMistakes: 'Forgetting to divide by factorials (dividing by 3 instead of 3! = 6).'
      },
      {
        part: '(b)',
        question: 'Write the first three nonzero terms of the Maclaurin series for g(x) = f(x²).',
        points: 2,
        scoringGuideline: '1 point for substituting x² into the polynomial; 1 point for simplifying powers correctly.',
        modelSolution: 'Substitute x² for x in the polynomial terms: g(x) ≈ 2 - 3(x²) + (5/2)(x²)² = 2 - 3x² + (5/2)x⁴.',
        commonStudentMistakes: 'Squaring the entire polynomial instead of composing x² inside the variable argument.'
      },
      {
        part: '(c)',
        question: 'Use the Lagrange error bound to show that the third-degree Taylor polynomial approximation for f(0.2) differs from the true value of f(0.2) by less than 0.0035.',
        points: 3,
        scoringGuideline: '1 point for identifying n=3 and form of Lagrange bound; 1 point for applying max |f^(4)| ≤ 48; 1 point for numerical evaluation showing < 0.0035.',
        modelSolution: 'Lagrange Error Bound: |R₃(0.2)| ≤ [max |f^{(4)}(c)| / 4!] · |0.2 - 0|⁴.\nGiven max |f^{(4)}(c)| ≤ 48 for c in [0, 0.2]:\n|R₃(0.2)| ≤ [48 / 24] · (0.2)⁴ = 2 · (0.0016) = 0.0032.\nSince 0.0032 < 0.0035, the approximation differs by less than 0.0035.',
        commonStudentMistakes: 'Using 3! in the denominator instead of (n+1)! = 4! = 24.'
      }
    ]
  },
  {
    id: 'frq-phys-1',
    subjectId: 'physics2',
    title: 'Thermodynamic Cycle & PV Diagram (Qualitative/Quantitative Translation)',
    unit: 'Unit 2: Thermodynamics',
    calculatorPolicy: 'Calculator Allowed',
    suggestedMinutes: 20,
    promptText: 'One mole of an ideal monatomic gas undergoes a closed cyclic process 1 → 2 → 3 → 1 represented on a PV diagram. State 1 has pressure P₁ = 1.0 × 10⁵ Pa and volume V₁ = 0.02 m³. State 2 has pressure P₂ = 3.0 × 10⁵ Pa and volume V₂ = 0.02 m³ (isochoric heating). State 3 has volume V₃ = 0.06 m³ at constant pressure P₃ = 1.0 × 10⁵ Pa (isobaric cooling back to state 1 from state 3, preceded by a straight-line transition 2 → 3).',
    scenarioDetails: [
      'P₁ = 1.0 × 10⁵ Pa, V₁ = 0.02 m³',
      'P₂ = 3.0 × 10⁵ Pa, V₂ = 0.02 m³',
      'P₃ = 1.0 × 10⁵ Pa, V₃ = 0.06 m³',
      'Gas is monatomic: C_v = 3/2 R, C_p = 5/2 R'
    ],
    subQuestions: [
      {
        part: '(a)',
        question: 'Determine the temperature of the gas at State 1 and State 2.',
        points: 2,
        scoringGuideline: '1 point for using Ideal Gas Law T = PV / (nR); 1 point for correct values with units.',
        modelSolution: 'T₁ = (1.0 × 10⁵ Pa)(0.02 m³) / [(1 mol)(8.314 J/(mol·K))] = 2000 / 8.314 ≈ 240.6 K.\nSince volume is constant in 1 → 2, by Gay-Lussac\'s Law: T₂ = T₁ · (P₂ / P₁) = 240.6 · (3.0 / 1.0) ≈ 721.7 K.',
        commonStudentMistakes: 'Using temperature in Celsius instead of Kelvin or choosing incorrect gas constant units.'
      },
      {
        part: '(b)',
        question: 'Calculate the net work done by the gas during one full cycle 1 → 2 → 3 → 1.',
        points: 2,
        scoringGuideline: '1 point for identifying cycle area on PV diagram; 1 point for correct sign and magnitude.',
        modelSolution: 'The net work done during one cycle is equal to the enclosed area of the right triangle on the PV diagram:\nBase = V₃ - V₁ = 0.06 - 0.02 = 0.04 m³.\nHeight = P₂ - P₁ = (3.0 - 1.0) × 10⁵ = 2.0 × 10⁵ Pa.\nWork = 1/2 · Base · Height = 1/2 · (0.04 m³) · (2.0 × 10⁵ Pa) = 4,000 J.\nSince the cycle runs clockwise, the gas does positive net work: W_net = +4,000 J.',
        commonStudentMistakes: 'Forgetting the 1/2 for triangular area or confusing sign conventions of clockwise cycles.'
      },
      {
        part: '(c)',
        question: 'What is the change in internal energy ΔU for the complete cycle? Justify conceptually.',
        points: 1,
        scoringGuideline: '1 point for stating ΔU = 0 with correct state function justification.',
        modelSolution: 'ΔU = 0 J. Internal energy U is a state function that depends solely on the state variables (temperature, pressure, volume). Because the cycle returns to its initial state 1 (same T₁), there is no net change in internal energy over a complete closed cycle.',
        commonStudentMistakes: 'Confusing internal energy ΔU with net heat Q or net work W.'
      }
    ]
  },
  {
    id: 'frq-stats-1',
    subjectId: 'stats',
    title: 'Two-Sample Inference for Proportions (Complete 4-Step FRQ)',
    unit: 'Unit 6: Inference for Categorical Data',
    calculatorPolicy: 'Calculator Allowed',
    suggestedMinutes: 15,
    promptText: 'A high school principal wants to investigate whether providing a quiet morning study lounge increases the proportion of students who turn in homework on time. A random sample of 80 students is assigned to the morning lounge group, and 70 of them consistently turn in homework on time. An independent random sample of 100 students is assigned to the standard schedule group, and 72 turn in homework on time.',
    scenarioDetails: [
      'Lounge group: n₁ = 80, x₁ = 70, p̂₁ = 70/80 = 0.875',
      'Standard group: n₂ = 100, x₂ = 72, p̂₂ = 72/100 = 0.720',
      'Significance level: α = 0.05'
    ],
    subQuestions: [
      {
        part: '(a) STATE',
        question: 'State the appropriate null and alternative hypotheses, identifying the parameters of interest.',
        points: 1,
        scoringGuideline: '1 point for correct null and alternative hypotheses written with population parameters p₁ and p₂ in context.',
        modelSolution: 'H₀: p₁ - p₂ = 0 (or p₁ = p₂)\nH_a: p₁ - p₂ > 0 (or p₁ > p₂)\nwhere p₁ is the true proportion of all high school students using the morning lounge who turn in homework on time, and p₂ is the true proportion for students on the standard schedule.',
        commonStudentMistakes: 'Using sample statistics p̂ instead of population parameters p in the hypotheses.'
      },
      {
        part: '(b) PLAN',
        question: 'Identify the inference procedure and verify all required conditions.',
        points: 2,
        scoringGuideline: '1 point for naming 2-proportion z-test; 1 point for checking Random, 10% rule, and Large Counts (pooled or individual).',
        modelSolution: 'Procedure: Two-sample z-test for difference in proportions p₁ - p₂.\nConditions:\n1. Random: Problem states both samples are independent random samples.\n2. 10% Condition: 80 < 10% of all eligible lounge students, and 100 < 10% of all standard schedule students.\n3. Large Counts: Pooled proportion p̂_c = (70 + 72)/(80 + 100) = 142/180 ≈ 0.789.\nn₁p̂_c = 80(0.789) = 63.1 ≥ 10\nn₁(1-p̂_c) = 80(0.211) = 16.9 ≥ 10\nn₂p̂_c = 100(0.789) = 78.9 ≥ 10\nn₂(1-p̂_c) = 100(0.211) = 21.1 ≥ 10.\nAll counts are at least 10, so sampling distribution of p̂₁ - p̂₂ is approximately normal.',
        commonStudentMistakes: 'Not showing actual counts when checking the Large Counts condition.'
      },
      {
        part: '(c) DO & CONCLUDE',
        question: 'Calculate the test statistic and p-value, then make a statistical conclusion in context at α = 0.05.',
        points: 2,
        scoringGuideline: '1 point for correct z and p-value; 1 point for standard College Board conclusion template linking p-value to α and context.',
        modelSolution: 'DO:\nSE_pooled = √[ 0.789(1 - 0.789)(1/80 + 1/100) ] ≈ √[ 0.1665 · (0.0125 + 0.01) ] ≈ 0.0612.\nz = (0.875 - 0.720 - 0) / 0.0612 = 0.155 / 0.0612 ≈ 2.53.\np-value = P(Z ≥ 2.53) ≈ 0.0057.\n\nCONCLUDE:\nBecause the p-value (0.0057) is less than α = 0.05, we reject the null hypothesis H₀. There is convincing statistical evidence that the true proportion of students using the morning lounge who turn in homework on time is greater than that of students on the standard schedule.',
        commonStudentMistakes: 'Saying we "accept the alternative" or failing to link the decision explicitly to α = 0.05.'
      }
    ]
  },
  {
    id: 'frq-lit-1',
    subjectId: 'lit',
    title: 'Literary Argument (Question 3) & Thesis Crafting',
    unit: 'Unit 5: 6-Point Rubric & FRQ Q3',
    calculatorPolicy: 'No Calculator',
    suggestedMinutes: 40,
    promptText: 'Many works of literature feature a character whose pursuit of knowledge, ambition, or social mobility isolates them from their community. Select a novel or play of literary merit and write a well-developed, thesis-driven essay analyzing how this isolation functions in the work and what it reveals about the meaning of the work as a whole.',
    scenarioDetails: [
      'Focus: Ambition/Knowledge leading to isolation',
      'Suggested works: Frankenstein (Mary Shelley), The Great Gatsby (F. Scott Fitzgerald), Macbeth (William Shakespeare), Invisible Man (Ralph Ellison)',
      'Rubric: 1 Thesis (Row A), 4 Evidence/Commentary (Row B), 1 Sophistication (Row C)'
    ],
    subQuestions: [
      {
        part: 'Row A (Thesis)',
        question: 'Write an exemplary, defensible thesis statement using Mary Shelley\'s Frankenstein or F. Scott Fitzgerald\'s The Great Gatsby.',
        points: 1,
        scoringGuideline: '1 point: Defensible interpretation, answers both parts of prompt (isolation mechanism + MOWAW), does not merely summarize plot.',
        modelSolution: 'Exemplary Thesis (Frankenstein):\n"Although Victor Frankenstein initially frames his obsessive pursuit of scientific creation as an act of noble transcendence, Shelley employs gothic isolation and stark imagery of bodily decay to expose how unchecked intellectual hubris ruptures human empathy, ultimately arguing that knowledge divorced from moral reciprocity inevitably dehumanizes both the creator and the marginalized being he abandons."',
        commonStudentMistakes: 'Writing a restatement of the prompt without specifying the thematic significance ("Victor is isolated because he creates a monster and it ruins his life").'
      },
      {
        part: 'Row B (Evidence & Commentary Structure)',
        question: 'Outline two body paragraphs demonstrating integrated textual evidence and line-by-line commentary.',
        points: 4,
        scoringGuideline: 'Up to 4 points for specific text references without the book present, insightful commentary explaining HOW evidence proves thesis.',
        modelSolution: 'Body Paragraph 1 Focus:\n- Evidence: Victor retreating to solitary laboratory at Ingolstadt, ignoring letters from family and Elizabeth; contrast between vibrant nature and "dismal" anatomy rooms.\n- Commentary: Illustrates the voluntary severing of civic and familial bonds. His physical seclusion mirrors his psychological decay as he usurps the natural reproductive order.\n\nBody Paragraph 2 Focus:\n- Evidence: The Creature\'s involuntary isolation in the de Lacey hovel; viewing warmth through chinks in the wall; rejection based solely on outward form.\n- Commentary: Victor\'s isolation stems from narcissistic ambition, whereas the Creature\'s isolation is violently imposed by societal prejudice. This juxtaposition shifts the reader\'s moral culpability from creature to creator.',
        commonStudentMistakes: 'Spending whole paragraphs summarizing plot events instead of analyzing the author\'s craft and thematic purpose.'
      }
    ]
  }
];
