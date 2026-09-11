export interface SeniorPlannerResource {
  id: string;
  category: 'Strategy Guide' | 'College Board Official' | 'Calculator Trick' | 'Essay Template';
  title: string;
  description: string;
  subject: string;
  keyTakeaways: string[];
}

export const SENIOR_PLANNER_RESOURCES: SeniorPlannerResource[] = [
  {
    id: 'res-calcbc-1',
    category: 'Calculator Trick',
    subject: 'AP Calculus BC',
    title: 'TI-84 / TI-Nspire 4 Mandatory Calculator Skills',
    description: 'On Section I Part B and Section II Part A, College Board expects you to know exactly how to execute these four tasks directly on your graphing calculator without manual algebra.',
    keyTakeaways: [
      'Plotting a function in an arbitrary viewing window to find intersections (zeros / roots).',
      'Numerically calculating the derivative of a function at a point (Math 8: nDeriv).',
      'Numerically evaluating a definite integral (Math 9: fnInt).',
      'Storing functions into Y1 and Y2 so you can quickly compute composite operations without retyping long expressions.'
    ]
  },
  {
    id: 'res-phys2-1',
    category: 'Strategy Guide',
    subject: 'AP Physics 2',
    title: 'Mastering the QQT (Qualitative / Quantitative Translation) FRQ',
    description: 'The QQT FRQ is unique to AP Physics 1 & 2. It tests your ability to connect conceptual reasoning with mathematical derivations without contradiction.',
    keyTakeaways: [
      'Read part (a) and part (b) before writing anything to verify your conceptual claim and your algebraic equation tell the same story.',
      'Always refer to functional relationships: "As V increases, because P is inversely proportional to V at constant T, P must decrease."',
      'Check limiting cases: What happens if resistance R → 0? What if t → ∞? Limiting cases often award 1 explicit rubric point.'
    ]
  },
  {
    id: 'res-stats-1',
    category: 'Strategy Guide',
    subject: 'AP Statistics',
    title: 'The Investigative Task (FRQ #6) Survival Guide',
    description: 'Carries 25% of the total Section II score (approx 12.5% of the entire exam). It introduces a non-standard method not explicitly taught in the AP curriculum.',
    keyTakeaways: [
      'Allocate a full 25–30 minutes out of the 90-minute FRQ section specifically for Question 6.',
      'Do not panic when you see unfamiliar symbols or distributions (e.g. bootstrap percentiles or non-standard tests); the prompt will define them step-by-step.',
      'Part (a) and (b) are almost always routine standard curriculum tasks to build confidence. Parts (c) and (d) ask you to extend the concept.'
    ]
  },
  {
    id: 'res-lit-1',
    category: 'Essay Template',
    subject: 'AP Literature',
    title: 'Unlocking the Row C Sophistication Point',
    description: 'Only 5–10% of AP Lit test-takers earn Row C. Here are the 4 legitimate pathways to consistently capture the sophistication point.',
    keyTakeaways: [
      'Craft a nuanced thesis that acknowledges complexity or counter-readings (e.g., using "Although...", "While on the surface...").',
      'Situate the text within a broader historical, philosophical, or cultural context without deviating from close reading.',
      'Identify and analyze illuminating contradictions, ambiguities, or ironies within the characters or narrative voice.',
      'Maintain an elevated, varied rhetorical style with vivid vocabulary and seamless quote integration.'
    ]
  }
];
