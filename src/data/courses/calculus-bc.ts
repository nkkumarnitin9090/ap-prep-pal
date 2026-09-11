import type { Course } from "../types";

/**
 * AP Calculus BC - unit structure from the College Board Course and Exam
 * Description (10 units). Exam weightings are the ranges published on the
 * AP Central AP Calculus BC course page for the 2026-27 school year.
 *
 * Every numeric answer in the practice sets below was computed and checked
 * symbolically before being written down.
 */
export const calculusBC: Course = {
  slug: "ap-calculus-bc",
  name: "AP Calculus BC",
  shortName: "Calc BC",
  accent: "indigo",
  tagline: "Ten units, two semesters, one very long free-response section.",
  description:
    "Calculus BC is AB plus parametric/polar/vector calculus and infinite series. The two heaviest units on the exam are Unit 6 (Integration and Accumulation of Change) and Unit 10 (Infinite Sequences and Series), which together are roughly a third of the multiple-choice section. Series is the unit students most often meet for the first time in March and then panic about in May, so this plan front-loads Taylor polynomials into the winter.",
  examDate: "2027-05-10",
  examSession: "Session 1 - typically 8 a.m. local time",
  examSections: [
    {
      name: "Section I, Part A",
      detail: "29 multiple-choice questions",
      weight: "~35% of exam score",
      time: "62 minutes",
      calculator: "not-permitted",
    },
    {
      name: "Section I, Part B",
      detail: "13 multiple-choice questions",
      weight: "~15% of exam score",
      time: "38 minutes",
      calculator: "required",
    },
    {
      name: "Section II, Part A",
      detail: "2 free-response questions",
      weight: "~16.7% of exam score",
      time: "30 minutes",
      calculator: "required",
    },
    {
      name: "Section II, Part B",
      detail: "4 free-response questions",
      weight: "~33.3% of exam score",
      time: "60 minutes",
      calculator: "not-permitted",
    },
  ],
  courseNotes: [
    {
      tone: "warning",
      text: "The multiple-choice section changed for the May 2027 exam: Part A is now 29 questions in 62 minutes and Part B is 13 questions in 38 minutes (previously 30/60 and 15/45). If a prep book says 45 multiple-choice questions in 1 hour 45 minutes, it is describing the older format. Course content did not change.",
    },
    {
      tone: "info",
      text: "AP Central currently lists the unit weightings as wider ranges (for example Unit 1 at 5-10%) than the 2019-20 CED did (4-7%). The ranges below follow the current course page. Treat every percentage as approximate and confirm against the CED you are issued.",
    },
  ],
  resources: [
    {
      label: "Released free-response questions",
      detail:
        "AP Central posts the real FRQs plus scoring guidelines back to 1998. Working four of these per week from March onward is the single highest-value thing you can do.",
    },
    {
      label: "AP Classroom Progress Checks",
      detail:
        "Your teacher can unlock a Progress Check for each unit. These are written by the same people who write the exam, so the phrasing is the most authentic practice available.",
    },
    {
      label: "Your graphing calculator manual",
      detail:
        "You need four calculator skills cold: graph in a window, find a zero, compute a numerical derivative, and compute a definite integral. Practice them until they are muscle memory.",
    },
  ],
  units: [
    /* ------------------------------------------------------------------ */
    {
      id: "calc-u1",
      number: "1",
      title: "Limits and Continuity",
      examWeight: "5-10%",
      examWeightMidpoint: 7.5,
      classPeriods: "~11-12 class periods",
      summary:
        "The vocabulary unit. Almost nothing here is hard, but the notation (one-sided limits, infinite limits, limits at infinity) shows up inside every later unit, and the Intermediate Value Theorem is a reliable free-response justification point.",
      topics: [
        {
          id: "calc-u1-t1",
          title: "Defining limits and using limit notation",
          detail:
            "Read a limit off a graph or table and write it correctly, including when the two-sided limit fails to exist because the one-sided limits disagree.",
        },
        {
          id: "calc-u1-t2",
          title: "Estimating limits from graphs and tables",
          detail:
            "Recognize that a table can only suggest a limit. Know that f(a) and lim f(x) as x approaches a are independent pieces of information.",
        },
        {
          id: "calc-u1-t3",
          title: "Limit laws and algebraic properties",
          detail:
            "Sums, products, quotients, and composition of limits, plus the conditions under which each law applies.",
        },
        {
          id: "calc-u1-t4",
          title: "Algebraic manipulation: factoring, conjugates, common denominators",
          detail:
            "Resolve 0/0 forms by cancelling a common factor, multiplying by a conjugate, or combining fractions. This is the most-tested skill in the unit.",
        },
        {
          id: "calc-u1-t5",
          title: "Trigonometric limits and the squeeze theorem",
          detail:
            "Know sin(x)/x approaches 1 and (1 - cos x)/x approaches 0 as x approaches 0, and use bounding functions to force a limit (for example x² cos(1/x)).",
        },
        {
          id: "calc-u1-t6",
          title: "Continuity at a point and on an interval",
          detail:
            "State the three-part definition: f(a) is defined, the limit exists, and they are equal. Solve for a parameter that makes a piecewise function continuous.",
        },
        {
          id: "calc-u1-t7",
          title: "Classifying and removing discontinuities",
          detail:
            "Distinguish removable (hole), jump, and infinite discontinuities, and redefine a function value to remove a removable one.",
        },
        {
          id: "calc-u1-t8",
          title: "Infinite limits and vertical asymptotes",
          detail:
            "Determine the sign of a one-sided infinite limit by testing the sign of numerator and denominator just to each side of the asymptote.",
        },
        {
          id: "calc-u1-t9",
          title: "Limits at infinity and horizontal asymptotes",
          detail:
            "Compare degrees for rational functions, and handle radicals carefully: sqrt(x²) equals |x|, which is -x when x is negative.",
        },
        {
          id: "calc-u1-t10",
          title: "The Intermediate Value Theorem",
          detail:
            "State all hypotheses (continuous on a closed interval) before concluding. Free-response readers want the words 'continuous on [a, b]' explicitly.",
        },
      ],
      keySkills: [
        "lim (sin x)/x = 1 and lim (1 - cos x)/x = 0, both as x approaches 0",
        "For rational functions as x approaches infinity: compare degrees (bottom-heavy gives 0, equal degrees gives the leading-coefficient ratio, top-heavy has no finite limit)",
        "sqrt(x²) = |x|, so as x approaches negative infinity, sqrt(4x² + 3) behaves like -2x",
        "Continuity at x = a requires f(a) defined, lim f(x) existing, and the two being equal",
        "IVT template: 'f is continuous on [a, b] and f(a) < k < f(b), therefore there exists c in (a, b) with f(c) = k'",
      ],
      commonMistakes: [
        "Writing 'the limit is 0/0' as a final answer. 0/0 is an indeterminate form, not a value - it is a signal to do algebra.",
        "Assuming f(a) equals the limit. A removable discontinuity is exactly the case where it does not.",
        "Dropping the absolute value when simplifying sqrt(x²) for negative x, which flips the sign of a limit at negative infinity.",
        "Invoking the IVT without stating continuity, which costs the justification point even when the answer is right.",
      ],
      practiceSet: {
        id: "calc-u1-ps",
        title: "Unit 1 Practice: Limits and Continuity",
        focus:
          "Algebraic limit techniques, one-sided and infinite behavior, continuity parameters, and IVT justification language.",
        estimatedMinutes: 40,
        calculator: "not-permitted",
        problems: [
          {
            id: "calc-u1-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt: "Evaluate lim as x approaches 2 of (x² - 4)/(x² - x - 2).",
            choices: [
              { label: "A", text: "0" },
              { label: "B", text: "3/4" },
              { label: "C", text: "4/3" },
              { label: "D", text: "The limit does not exist." },
            ],
            answer: "C",
            solution:
              "Both numerator and denominator are 0 at x = 2, so factor. The numerator is (x - 2)(x + 2) and the denominator is (x - 2)(x + 1). Cancel the common factor (x - 2), valid because x is approaching 2 but never equals 2, leaving (x + 2)/(x + 1). Substituting x = 2 gives 4/3.",
            note: "Choice B is the reciprocal, which is what you get if you flip the fraction while factoring. Choice D is tempting because the function is undefined at x = 2, but a hole does not stop a limit from existing.",
          },
          {
            id: "calc-u1-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt: "Evaluate lim as x approaches 0 of sin(5x)/(3x).",
            choices: [
              { label: "A", text: "0" },
              { label: "B", text: "3/5" },
              { label: "C", text: "5/3" },
              { label: "D", text: "5" },
            ],
            answer: "C",
            solution:
              "Rewrite to expose the standard limit: sin(5x)/(3x) = (5/3) · sin(5x)/(5x). As x approaches 0, 5x also approaches 0, so sin(5x)/(5x) approaches 1. The limit is therefore 5/3.",
            note: "The fastest check is the small-angle approximation sin(u) ≈ u, so sin(5x)/(3x) ≈ 5x/3x = 5/3.",
          },
          {
            id: "calc-u1-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "Evaluate lim as x approaches negative infinity of sqrt(4x² + 3)/(2x + 1).",
            choices: [
              { label: "A", text: "-1" },
              { label: "B", text: "0" },
              { label: "C", text: "1" },
              { label: "D", text: "2" },
            ],
            answer: "A",
            solution:
              "Factor x² out of the radical: sqrt(4x² + 3) = |x| · sqrt(4 + 3/x²). For x negative, |x| = -x, so the numerator behaves like -x · sqrt(4) = -2x. The denominator behaves like 2x. The ratio is -2x/(2x) = -1. More carefully, dividing numerator and denominator by x (negative) gives (-sqrt(4 + 3/x²))/(2 + 1/x), which approaches -2/2 = -1.",
            note: "Choice C is the answer to the same question as x approaches positive infinity. Any time a radical meets a limit at negative infinity, stop and write |x| explicitly.",
          },
          {
            id: "calc-u1-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "Let f(x) = ax + 3 for x < 1, f(x) = x² + b for 1 ≤ x < 2, and f(x) = 6x - 4 for x ≥ 2. If f is continuous for all real x, what is a + b?",
            choices: [
              { label: "A", text: "2" },
              { label: "B", text: "4" },
              { label: "C", text: "6" },
              { label: "D", text: "8" },
            ],
            answer: "C",
            solution:
              "Work from the right. Continuity at x = 2 requires 2² + b = 6(2) - 4, so 4 + b = 8 and b = 4. Continuity at x = 1 requires a(1) + 3 = 1² + b = 1 + 4 = 5, so a = 2. Then a + b = 2 + 4 = 6.",
            note: "Solve the branch point that involves only one unknown first. Starting at x = 1 leaves you with two unknowns in one equation.",
          },
          {
            id: "calc-u1-p5",
            kind: "multiple-choice",
            label: "MCQ 5",
            prompt: "Evaluate lim as x approaches 0 of x² cos(1/x).",
            choices: [
              { label: "A", text: "0" },
              { label: "B", text: "1" },
              { label: "C", text: "The limit is infinite." },
              { label: "D", text: "The limit does not exist because cos(1/x) oscillates." },
            ],
            answer: "A",
            solution:
              "Since -1 ≤ cos(1/x) ≤ 1 for every x other than 0, multiplying by the non-negative quantity x² gives -x² ≤ x² cos(1/x) ≤ x². Both -x² and x² approach 0 as x approaches 0, so by the squeeze theorem the middle expression also approaches 0.",
            note: "Choice D is the trap. The oscillation is bounded, and a bounded factor times something going to 0 goes to 0. Contrast this with cos(1/x) alone, whose limit at 0 genuinely does not exist.",
          },
          {
            id: "calc-u1-p6",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "Let g(x) = (x² - x - 6)/(x - 3) for x ≠ 3, and g(3) = 1.",
            parts: [
              { label: "(a)", text: "Find lim g(x) as x approaches 3, or explain why it does not exist." },
              { label: "(b)", text: "Classify the discontinuity of g at x = 3 and justify your classification." },
              { label: "(c)", text: "Give a value of g(3) that makes g continuous at x = 3." },
              {
                label: "(d)",
                text: "Using the original definition of g, show that there is a value c in the interval (0, 2) for which g(c) = 3, and find that value exactly.",
              },
            ],
            solution:
              "(a) Factor the numerator: x² - x - 6 = (x - 3)(x + 2). For x ≠ 3 the function simplifies to x + 2, so lim g(x) as x approaches 3 equals 3 + 2 = 5.\n\n(b) The limit exists (it is 5) but g(3) = 1, so the two are unequal. That is precisely a removable discontinuity - the graph is the line y = x + 2 with a hole at (3, 5) and an isolated point plotted at (3, 1).\n\n(c) Define g(3) = 5. Then f(3) is defined, the limit exists, and they are equal, satisfying all three parts of the definition of continuity.\n\n(d) On the closed interval [0, 2] the only problem point x = 3 is excluded, so g is continuous there and agrees with x + 2. Evaluate the endpoints: g(0) = (0 - 0 - 6)/(0 - 3) = -6/-3 = 2, and g(2) = (4 - 2 - 6)/(2 - 3) = -4/-1 = 4. Since g is continuous on [0, 2] and 2 < 3 < 4, the Intermediate Value Theorem guarantees some c in (0, 2) with g(c) = 3. Solving c + 2 = 3 gives c = 1, and 1 is indeed in (0, 2).",
            rubric: [
              { points: "1 pt", criterion: "Factors and simplifies to obtain the limit 5." },
              { points: "1 pt", criterion: "Names the discontinuity as removable." },
              { points: "1 pt", criterion: "Justifies by comparing lim g(x) = 5 to g(3) = 1." },
              { points: "1 pt", criterion: "States the redefinition g(3) = 5." },
              { points: "1 pt", criterion: "States that g is continuous on [0, 2] and computes g(0) = 2 and g(2) = 4." },
              { points: "1 pt", criterion: "Cites the IVT with 2 < 3 < 4 and produces c = 1." },
            ],
            note: "Part (d) is worth practicing out loud. The point is awarded for the sentence 'g is continuous on [0, 2]', not for the arithmetic.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "calc-u2",
      number: "2",
      title: "Differentiation: Definition and Fundamental Properties",
      examWeight: "5-10%",
      examWeightMidpoint: 7.5,
      classPeriods: "~9-10 class periods",
      summary:
        "Where the derivative stops being a limit and becomes a toolkit. The exam keeps testing the limit definition long after you have memorized the rules, usually by handing you a limit and asking which derivative it represents.",
      topics: [
        {
          id: "calc-u2-t1",
          title: "Average versus instantaneous rate of change",
          detail:
            "Average rate of change is the slope of a secant line, (f(b) - f(a))/(b - a). Instantaneous rate of change is the derivative, the slope of the tangent line.",
        },
        {
          id: "calc-u2-t2",
          title: "The limit definition of the derivative",
          detail:
            "Both forms: lim (f(x + h) - f(x))/h as h approaches 0, and lim (f(x) - f(a))/(x - a) as x approaches a. Be able to run them backwards.",
        },
        {
          id: "calc-u2-t3",
          title: "Differentiability implies continuity",
          detail:
            "The implication goes one way only. |x| at x = 0 is continuous but not differentiable. Corners, cusps, vertical tangents, and discontinuities all kill differentiability.",
        },
        {
          id: "calc-u2-t4",
          title: "Power rule, constant multiple, sum and difference",
          detail:
            "Rewrite radicals and reciprocals as powers before differentiating: sqrt(x) is x^(1/2), 1/x³ is x^(-3).",
        },
        {
          id: "calc-u2-t5",
          title: "Derivatives of sine, cosine, e^x, and ln x",
          detail:
            "Memorize these four cold. The derivative of cos x carries a negative sign; the derivative of ln x is 1/x only for x > 0.",
        },
        {
          id: "calc-u2-t6",
          title: "The product rule",
          detail:
            "(fg)' = f'g + fg'. Use it whenever a product cannot be trivially expanded, and always write both terms before simplifying.",
        },
        {
          id: "calc-u2-t7",
          title: "The quotient rule",
          detail:
            "(f/g)' = (f'g - fg')/g². The order of subtraction matters, and the denominator is squared, not differentiated.",
        },
        {
          id: "calc-u2-t8",
          title: "Derivatives of tangent, cotangent, secant, and cosecant",
          detail:
            "Derive them from the quotient rule at least once so you can reconstruct them under pressure: (tan x)' = sec²x, (sec x)' = sec x tan x.",
        },
        {
          id: "calc-u2-t9",
          title: "Tangent line equations and linear approximation setup",
          detail:
            "y - f(a) = f'(a)(x - a). Leaving a tangent line in point-slope form is always acceptable and much less error-prone.",
        },
      ],
      keySkills: [
        "f'(a) = lim (f(a + h) - f(a))/h as h approaches 0",
        "Product rule: f'g + fg'. Quotient rule: (f'g - fg')/g²",
        "(sin x)' = cos x, (cos x)' = -sin x, (tan x)' = sec²x, (sec x)' = sec x tan x",
        "(e^x)' = e^x, (ln x)' = 1/x, (a^x)' = a^x ln a, (log_a x)' = 1/(x ln a)",
        "Tangent line at x = a: y = f(a) + f'(a)(x - a)",
      ],
      commonMistakes: [
        "Using the quotient rule on something like (x² + 1)/5, where the denominator is a constant and the power rule is far faster.",
        "Reversing the subtraction in the quotient rule, which flips the sign of the whole answer.",
        "Claiming a function is differentiable because it is continuous. The converse is false.",
        "Forgetting that the answer to a 'find the tangent line' question must be a line, not just a slope.",
      ],
      practiceSet: {
        id: "calc-u2-ps",
        title: "Unit 2 Practice: Definition and Basic Rules",
        focus:
          "Recognizing the limit definition, applying product and quotient rules, and building tangent lines from tabular data.",
        estimatedMinutes: 40,
        calculator: "not-permitted",
        problems: [
          {
            id: "calc-u2-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt: "If f(x) = x³ - 4x, what is f'(2)?",
            choices: [
              { label: "A", text: "0" },
              { label: "B", text: "4" },
              { label: "C", text: "8" },
              { label: "D", text: "12" },
            ],
            answer: "C",
            solution:
              "By the power rule, f'(x) = 3x² - 4. Then f'(2) = 3(4) - 4 = 12 - 4 = 8.",
            note: "Choice A is f(2) = 8 - 8 = 0, and choice D is 3x² evaluated at 2 with the -4 forgotten. Read whether the question wants f or f'.",
          },
          {
            id: "calc-u2-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt: "If f(x) = (x² + 1)/(x - 1), what is f'(0)?",
            choices: [
              { label: "A", text: "-1" },
              { label: "B", text: "0" },
              { label: "C", text: "1" },
              { label: "D", text: "2" },
            ],
            answer: "A",
            solution:
              "Quotient rule: f'(x) = [(2x)(x - 1) - (x² + 1)(1)]/(x - 1)². Expanding the numerator gives 2x² - 2x - x² - 1 = x² - 2x - 1, so f'(x) = (x² - 2x - 1)/(x - 1)². At x = 0 the numerator is -1 and the denominator is 1, so f'(0) = -1.",
          },
          {
            id: "calc-u2-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt: "Evaluate lim as h approaches 0 of [ln(3 + h) - ln 3]/h.",
            choices: [
              { label: "A", text: "0" },
              { label: "B", text: "1/3" },
              { label: "C", text: "ln 3" },
              { label: "D", text: "3" },
            ],
            answer: "B",
            solution:
              "This is exactly the limit definition of the derivative of f(x) = ln x evaluated at x = 3. Since f'(x) = 1/x, the limit equals f'(3) = 1/3.",
            note: "Recognizing the pattern takes two seconds; expanding ln(3 + h) takes two minutes and usually fails. Scan for the shape [f(a + h) - f(a)]/h first.",
          },
          {
            id: "calc-u2-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt: "If f(x) = x² sin x, what is f'(π)?",
            choices: [
              { label: "A", text: "-π²" },
              { label: "B", text: "0" },
              { label: "C", text: "2π" },
              { label: "D", text: "π²" },
            ],
            answer: "A",
            solution:
              "Product rule: f'(x) = 2x sin x + x² cos x. At x = π, sin π = 0 and cos π = -1, so f'(π) = 2π(0) + π²(-1) = -π².",
            note: "Choice C comes from differentiating only the x² factor. Write both product-rule terms down before substituting anything.",
          },
          {
            id: "calc-u2-p5",
            kind: "multiple-choice",
            label: "MCQ 5",
            prompt:
              "Let f(x) = x² for x ≤ 1 and f(x) = ax + b for x > 1. If f is differentiable at x = 1, what is the ordered pair (a, b)?",
            choices: [
              { label: "A", text: "(1, 0)" },
              { label: "B", text: "(2, -1)" },
              { label: "C", text: "(2, 1)" },
              { label: "D", text: "(-1, 2)" },
            ],
            answer: "B",
            solution:
              "Differentiability at x = 1 requires two conditions. Continuity: 1² = a(1) + b, so a + b = 1. Matching derivatives: the left branch has derivative 2x, which is 2 at x = 1; the right branch has derivative a. So a = 2, and then b = 1 - 2 = -1. The pair is (2, -1).",
            note: "Choice C satisfies the derivative condition but not continuity. Differentiability always requires both equations - never just the slopes.",
          },
          {
            id: "calc-u2-p6",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "The functions f and g are differentiable, with the values below.\n\nf(2) = 3, f'(2) = -1, g(2) = -4, g'(2) = 5",
            parts: [
              { label: "(a)", text: "Find (fg)'(2)." },
              { label: "(b)", text: "Find the derivative of f/g at x = 2." },
              { label: "(c)", text: "If h(x) = 3f(x) - 2g(x) + 7, find h'(2)." },
              { label: "(d)", text: "Write an equation for the line tangent to y = f(x) at x = 2, and use it to approximate f(2.1)." },
            ],
            solution:
              "(a) Product rule: (fg)'(2) = f'(2)g(2) + f(2)g'(2) = (-1)(-4) + (3)(5) = 4 + 15 = 19.\n\n(b) Quotient rule: (f/g)'(2) = [f'(2)g(2) - f(2)g'(2)]/[g(2)]² = [(-1)(-4) - (3)(5)]/(-4)² = (4 - 15)/16 = -11/16.\n\n(c) Constants pass through and the +7 disappears: h'(x) = 3f'(x) - 2g'(x), so h'(2) = 3(-1) - 2(5) = -3 - 10 = -13.\n\n(d) The tangent line is y = f(2) + f'(2)(x - 2) = 3 - (x - 2). Approximating at x = 2.1 gives 3 - 0.1 = 2.9. Because f'(2) is negative, the approximation is slightly less than 3, as expected.",
            rubric: [
              { points: "1 pt", criterion: "Correct product-rule setup." },
              { points: "1 pt", criterion: "Correct value 19." },
              { points: "1 pt", criterion: "Correct quotient-rule setup with g(2) squared in the denominator." },
              { points: "1 pt", criterion: "Correct value -11/16." },
              { points: "1 pt", criterion: "Correct value -13 for h'(2)." },
              { points: "1 pt", criterion: "Tangent line in a correct form and the approximation 2.9." },
            ],
            note: "Tabular derivative questions are nearly free points on the real exam, but only if you write the general rule first and substitute second.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "calc-u3",
      number: "3",
      title: "Differentiation: Composite, Implicit, and Inverse Functions",
      examWeight: "5-10%",
      examWeightMidpoint: 7.5,
      classPeriods: "~9-10 class periods",
      summary:
        "The chain rule, and then the chain rule wearing three disguises: implicit differentiation, inverse functions, and inverse trig. Nearly every later unit depends on chain-rule fluency, so this is the unit to over-practice.",
      topics: [
        {
          id: "calc-u3-t1",
          title: "The chain rule",
          detail:
            "d/dx f(g(x)) = f'(g(x)) · g'(x). Identify the outer and inner functions explicitly before differentiating anything nested more than twice.",
        },
        {
          id: "calc-u3-t2",
          title: "Implicit differentiation",
          detail:
            "Differentiate both sides with respect to x, attach dy/dx to every y term, then solve algebraically for dy/dx.",
        },
        {
          id: "calc-u3-t3",
          title: "Differentiating inverse functions",
          detail:
            "If g is the inverse of f, then g'(x) = 1/f'(g(x)). Most questions hand you a table and want a single evaluation.",
        },
        {
          id: "calc-u3-t4",
          title: "Derivatives of inverse trigonometric functions",
          detail:
            "(arcsin u)' = u'/sqrt(1 - u²), (arctan u)' = u'/(1 + u²), (arcsec u)' = u'/(|u| sqrt(u² - 1)).",
        },
        {
          id: "calc-u3-t5",
          title: "Higher-order derivatives",
          detail:
            "Second and third derivatives of composite and implicit relations. For implicit second derivatives you must substitute the expression for dy/dx back in.",
        },
        {
          id: "calc-u3-t6",
          title: "Tangent and normal lines to implicitly defined curves",
          detail:
            "Find horizontal tangents where the numerator of dy/dx is 0 and vertical tangents where the denominator is 0, checking that the point is actually on the curve.",
        },
        {
          id: "calc-u3-t7",
          title: "Selecting a differentiation procedure",
          detail:
            "Practice deciding, in under five seconds, whether an expression calls for product, quotient, chain, implicit, or simple rewriting.",
        },
      ],
      keySkills: [
        "Chain rule: outer derivative evaluated at the inner function, times the inner derivative",
        "Implicit: d/dx(y³) = 3y² · dy/dx, and d/dx(xy) = y + x · dy/dx by the product rule",
        "Inverse derivative: (f⁻¹)'(b) = 1/f'(a) where f(a) = b",
        "(arctan u)' = u'/(1 + u²) and (arcsin u)' = u'/sqrt(1 - u²)",
        "Horizontal tangent when dy/dx = 0; vertical tangent when the denominator of dy/dx is 0 and the numerator is not",
      ],
      commonMistakes: [
        "Forgetting the inner derivative. d/dx sin(3x) is 3cos(3x), not cos(3x).",
        "Treating y as a constant during implicit differentiation, so the dy/dx factors never appear.",
        "Writing (f⁻¹)'(b) = 1/f'(b) instead of 1/f'(a). You must first find the input a whose output is b.",
        "Reporting a horizontal tangent at a point that is not actually on the curve - always substitute back and check.",
      ],
      practiceSet: {
        id: "calc-u3-ps",
        title: "Unit 3 Practice: Chain, Implicit, and Inverse",
        focus:
          "Chain-rule evaluation, implicit slopes at a point, inverse-function derivatives, and locating tangents on an implicit curve.",
        estimatedMinutes: 45,
        calculator: "not-permitted",
        problems: [
          {
            id: "calc-u3-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt: "If f(x) = (3x² + 1)⁴, what is f'(1)?",
            choices: [
              { label: "A", text: "256" },
              { label: "B", text: "384" },
              { label: "C", text: "1536" },
              { label: "D", text: "6144" },
            ],
            answer: "C",
            solution:
              "Chain rule: f'(x) = 4(3x² + 1)³ · 6x = 24x(3x² + 1)³. At x = 1, 3x² + 1 = 4, so f'(1) = 24(1)(4³) = 24 · 64 = 1536.",
            note: "Choice A is 4³·4 = 256, which is what you get by forgetting the 6x entirely.",
          },
          {
            id: "calc-u3-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "The curve x² + xy + y² = 7 passes through the point (1, 2). What is dy/dx at that point?",
            choices: [
              { label: "A", text: "-4/5" },
              { label: "B", text: "-1/2" },
              { label: "C", text: "4/5" },
              { label: "D", text: "5/4" },
            ],
            answer: "A",
            solution:
              "First confirm the point is on the curve: 1 + 2 + 4 = 7. Differentiate implicitly, remembering the product rule on xy: 2x + (y + x·dy/dx) + 2y·dy/dx = 0. Group the dy/dx terms: dy/dx(x + 2y) = -(2x + y), so dy/dx = -(2x + y)/(x + 2y). At (1, 2) this is -(2 + 2)/(1 + 4) = -4/5.",
            note: "The most common error here is differentiating xy as x·dy/dx, dropping the y term from the product rule.",
          },
          {
            id: "calc-u3-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "Let f(x) = x³ + x + 1, which is increasing for all x and therefore invertible. If g is the inverse of f, what is g'(3)?",
            choices: [
              { label: "A", text: "1/28" },
              { label: "B", text: "1/4" },
              { label: "C", text: "4" },
              { label: "D", text: "28" },
            ],
            answer: "B",
            solution:
              "First find the input whose output is 3: f(1) = 1 + 1 + 1 = 3, so g(3) = 1. Then g'(3) = 1/f'(g(3)) = 1/f'(1). Since f'(x) = 3x² + 1, f'(1) = 4, so g'(3) = 1/4.",
            note: "Choice A is 1/f'(3) = 1/28, the error of plugging the output into f' instead of the input.",
          },
          {
            id: "calc-u3-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt: "If f(x) = arctan(2x), what is f'(1/2)?",
            choices: [
              { label: "A", text: "1/2" },
              { label: "B", text: "1" },
              { label: "C", text: "2" },
              { label: "D", text: "4" },
            ],
            answer: "B",
            solution:
              "With u = 2x, f'(x) = u'/(1 + u²) = 2/(1 + 4x²). At x = 1/2, 4x² = 1, so f'(1/2) = 2/2 = 1.",
          },
          {
            id: "calc-u3-p5",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "Consider the curve defined by x³ + y³ = 6xy, known as the folium of Descartes.",
            parts: [
              { label: "(a)", text: "Show that the point (3, 3) lies on the curve, and find dy/dx in terms of x and y." },
              { label: "(b)", text: "Write an equation for the line tangent to the curve at (3, 3)." },
              { label: "(c)", text: "Find the coordinates of the point in the first quadrant, other than the origin, where the tangent line is horizontal. Give exact values." },
            ],
            solution:
              "(a) Substituting (3, 3): 27 + 27 = 54 and 6(3)(3) = 54, so the point is on the curve. Differentiating implicitly, 3x² + 3y²·dy/dx = 6y + 6x·dy/dx. Collect: dy/dx(3y² - 6x) = 6y - 3x², so dy/dx = (6y - 3x²)/(3y² - 6x) = (2y - x²)/(y² - 2x).\n\n(b) At (3, 3): dy/dx = (6 - 9)/(9 - 6) = -3/3 = -1. The tangent line is y - 3 = -(x - 3), equivalently y = -x + 6.\n\n(c) A horizontal tangent needs the numerator 2y - x² = 0 with the denominator nonzero, so y = x²/2. Substitute into the curve: x³ + (x²/2)³ = 6x(x²/2), which is x³ + x⁶/8 = 3x³. Rearranged, x⁶/8 = 2x³, so x⁶ = 16x³. For x ≠ 0 this gives x³ = 16, hence x = 16^(1/3) = 2·2^(1/3) ≈ 2.5198. Then y = x²/2 = 2^(8/3)/2 = 2^(5/3) = 2·4^(1/3) ≈ 3.1748. Check the denominator: y² - 2x ≈ 10.08 - 5.04 ≈ 5.04, which is nonzero, so the tangent really is horizontal there. The point is (2·2^(1/3), 2·4^(1/3)).",
            rubric: [
              { points: "1 pt", criterion: "Verifies (3, 3) satisfies the equation." },
              { points: "2 pts", criterion: "Correct implicit differentiation and solved expression for dy/dx." },
              { points: "1 pt", criterion: "Slope -1 and a correct tangent line equation." },
              { points: "1 pt", criterion: "Sets the numerator of dy/dx equal to zero." },
              { points: "1 pt", criterion: "Solves the system to get exact coordinates and checks the denominator is nonzero." },
            ],
            note: "Part (c) is the classic 'set the numerator to zero and substitute into the original equation' move. You must use the original curve, not just dy/dx, because you need both coordinates.",
          },
          {
            id: "calc-u3-p6",
            kind: "free-response",
            label: "FRQ 2",
            prompt:
              "The function f is differentiable and increasing, with f(2) = 5, f'(2) = 3, f(5) = 11, and f'(5) = 1/2. Let g be the inverse function of f.",
            parts: [
              { label: "(a)", text: "Find g'(5)." },
              { label: "(b)", text: "Find g'(11)." },
              { label: "(c)", text: "If h(x) = f(f(x)), find h'(2)." },
              { label: "(d)", text: "Explain why g is guaranteed to exist on the relevant interval." },
            ],
            solution:
              "(a) g'(5) = 1/f'(g(5)). Since f(2) = 5, g(5) = 2, so g'(5) = 1/f'(2) = 1/3.\n\n(b) g'(11) = 1/f'(g(11)). Since f(5) = 11, g(11) = 5, so g'(11) = 1/f'(5) = 1/(1/2) = 2.\n\n(c) Chain rule: h'(x) = f'(f(x)) · f'(x), so h'(2) = f'(f(2)) · f'(2) = f'(5) · 3 = (1/2)(3) = 3/2.\n\n(d) f is differentiable and increasing, so it is one-to-one on its domain. A one-to-one function has an inverse, and because f' is never zero at the points of interest, g is differentiable there as well.",
            rubric: [
              { points: "1 pt", criterion: "Identifies g(5) = 2 from f(2) = 5." },
              { points: "1 pt", criterion: "Correct value 1/3." },
              { points: "1 pt", criterion: "Correct value 2." },
              { points: "1 pt", criterion: "Chain-rule setup f'(f(2))·f'(2)." },
              { points: "1 pt", criterion: "Correct value 3/2." },
              { points: "1 pt", criterion: "Justifies invertibility via increasing (one-to-one)." },
            ],
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "calc-u4",
      number: "4",
      title: "Contextual Applications of Differentiation",
      examWeight: "5-10%",
      examWeightMidpoint: 7.5,
      classPeriods: "~10-11 class periods",
      summary:
        "Derivatives with units attached. Related rates and straight-line motion appear on essentially every exam, and the free-response scorers care as much about your sentence with units as about the number.",
      topics: [
        {
          id: "calc-u4-t1",
          title: "Interpreting the derivative in context",
          detail:
            "Write meaning statements with units and a time or place: 'at t = 4 minutes, the volume is decreasing at 3 gallons per minute.'",
        },
        {
          id: "calc-u4-t2",
          title: "Straight-line motion: position, velocity, acceleration",
          detail:
            "Velocity is the derivative of position, acceleration is the derivative of velocity. Speed is |v(t)|, which is not the same as velocity.",
        },
        {
          id: "calc-u4-t3",
          title: "Direction changes and speeding up versus slowing down",
          detail:
            "The particle changes direction where v changes sign. Speed increases exactly when v and a have the same sign.",
        },
        {
          id: "calc-u4-t4",
          title: "Rates of change in non-motion contexts",
          detail:
            "Temperature, cost, population, and flow problems. The derivative of a quantity measured in gallons with respect to minutes has units of gallons per minute.",
        },
        {
          id: "calc-u4-t5",
          title: "Related rates",
          detail:
            "Write a geometric relationship, reduce to one variable using similar triangles or a given ratio, differentiate with respect to t, then substitute the instant.",
        },
        {
          id: "calc-u4-t6",
          title: "Local linearity and linear approximation",
          detail:
            "L(x) = f(a) + f'(a)(x - a). Whether the estimate is high or low depends on concavity: concave down gives an overestimate.",
        },
        {
          id: "calc-u4-t7",
          title: "L'Hospital's Rule",
          detail:
            "Only for 0/0 or infinity/infinity. Verify the indeterminate form in writing before differentiating, and re-check the form after each application.",
        },
      ],
      keySkills: [
        "Related-rates recipe: relate, reduce to one variable, differentiate with respect to t, substitute last",
        "Sphere: V = (4/3)πr³ so dV/dt = 4πr² · dr/dt. Cone: V = (1/3)πr²h",
        "Speed is increasing when v(t) and a(t) share a sign",
        "Linearization L(x) = f(a) + f'(a)(x - a); concave down means L overestimates f",
        "L'Hospital applies only after you confirm 0/0 or ∞/∞",
      ],
      commonMistakes: [
        "Substituting the instantaneous values before differentiating, which turns variables into constants and produces a derivative of zero.",
        "Omitting units in a meaning statement, which loses a point even with a perfect number.",
        "Applying L'Hospital to a limit that is not indeterminate, such as 3/0 or 5/2.",
        "Confusing 'velocity is decreasing' with 'the particle is slowing down' - they are different conditions.",
      ],
      practiceSet: {
        id: "calc-u4-ps",
        title: "Unit 4 Practice: Motion, Related Rates, Approximation",
        focus:
          "Sign analysis for particle motion, a full cone related-rates problem, linearization error direction, and L'Hospital's Rule.",
        estimatedMinutes: 45,
        calculator: "allowed",
        problems: [
          {
            id: "calc-u4-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "A particle moves along a line with position s(t) = t³ - 6t² + 9t for t ≥ 0. At which values of t does the particle change direction?",
            choices: [
              { label: "A", text: "t = 2 only" },
              { label: "B", text: "t = 1 and t = 3" },
              { label: "C", text: "t = 0 and t = 3" },
              { label: "D", text: "The particle never changes direction." },
            ],
            answer: "B",
            solution:
              "Velocity is v(t) = 3t² - 12t + 9 = 3(t - 1)(t - 3). This is zero at t = 1 and t = 3. Testing signs: v is positive for t < 1, negative between 1 and 3, and positive again for t > 3. Because v changes sign at both, the particle changes direction at t = 1 and t = 3.",
            note: "Choice A is where acceleration is zero (a(t) = 6t - 12), which is the inflection point of position, not a direction change.",
          },
          {
            id: "calc-u4-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "The radius of a sphere is increasing at a constant rate of 2 cm/s. How fast is the volume increasing at the instant the radius is 5 cm?",
            choices: [
              { label: "A", text: "20π cm³/s" },
              { label: "B", text: "100π cm³/s" },
              { label: "C", text: "200π cm³/s" },
              { label: "D", text: "500π cm³/s" },
            ],
            answer: "C",
            solution:
              "V = (4/3)πr³, so dV/dt = 4πr² · dr/dt. Substituting r = 5 and dr/dt = 2 gives dV/dt = 4π(25)(2) = 200π cm³/s.",
            note: "Choice B is what you get by using 4πr² (the surface area) without multiplying by dr/dt. Differentiate the formula first, substitute the instant last.",
          },
          {
            id: "calc-u4-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt: "Evaluate lim as x approaches 0 of (e^(2x) - 1 - 2x)/x².",
            choices: [
              { label: "A", text: "0" },
              { label: "B", text: "1" },
              { label: "C", text: "2" },
              { label: "D", text: "4" },
            ],
            answer: "C",
            solution:
              "At x = 0 the numerator is 1 - 1 - 0 = 0 and the denominator is 0, so the form is 0/0 and L'Hospital applies. Differentiating gives (2e^(2x) - 2)/(2x), which is still 0/0 at x = 0. Applying L'Hospital again gives 4e^(2x)/2 = 2e^(2x), which equals 2 at x = 0.",
            note: "You can confirm with the Maclaurin series e^(2x) = 1 + 2x + 2x² + ..., so the numerator is 2x² + higher-order terms and the ratio approaches 2.",
          },
          {
            id: "calc-u4-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "Let f(x) = sqrt(x). Using the tangent line to f at x = 16 to approximate sqrt(16.5), the approximation is",
            choices: [
              { label: "A", text: "4.0625, and it overestimates sqrt(16.5)." },
              { label: "B", text: "4.0625, and it underestimates sqrt(16.5)." },
              { label: "C", text: "4.125, and it overestimates sqrt(16.5)." },
              { label: "D", text: "4.125, and it underestimates sqrt(16.5)." },
            ],
            answer: "A",
            solution:
              "f(16) = 4 and f'(x) = 1/(2 sqrt(x)), so f'(16) = 1/8. The linearization is L(x) = 4 + (1/8)(x - 16), giving L(16.5) = 4 + 0.5/8 = 4.0625. Since f''(x) = -1/(4x^(3/2)) is negative, f is concave down, so the tangent line lies above the curve and the estimate is too high. Indeed sqrt(16.5) ≈ 4.06202 < 4.0625.",
            note: "Concave down means tangent line above the curve, so overestimate. Sketch the concavity rather than trying to remember a rule.",
          },
          {
            id: "calc-u4-p5",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "Water drains from an inverted right circular cone whose radius at the top is 5 feet and whose height is 10 feet. Water is leaving the tank at a constant rate of 2 cubic feet per minute. Let h be the depth of the water in feet.",
            parts: [
              { label: "(a)", text: "Show that the volume of water can be written as V = πh³/12." },
              { label: "(b)", text: "Find the rate at which the water level is falling when h = 4 feet. Include units." },
              { label: "(c)", text: "Find the rate at which the radius of the water's surface is changing at that instant." },
              { label: "(d)", text: "Find the rate at which the area of the circular water surface is changing at that instant." },
            ],
            solution:
              "(a) Similar triangles give r/h = 5/10 = 1/2, so r = h/2. Substituting into V = (1/3)πr²h gives V = (1/3)π(h/2)²h = (1/3)π(h²/4)h = πh³/12.\n\n(b) Differentiate with respect to t: dV/dt = (3πh²/12)·dh/dt = (πh²/4)·dh/dt. With dV/dt = -2 and h = 4: -2 = (π·16/4)·dh/dt = 4π·dh/dt, so dh/dt = -1/(2π) ≈ -0.159 feet per minute. The water level is falling at about 0.159 ft/min.\n\n(c) Since r = h/2, dr/dt = (1/2)·dh/dt = -1/(4π) ≈ -0.0796 feet per minute.\n\n(d) The surface is a circle of area A = πr², so dA/dt = 2πr·dr/dt. At h = 4 the radius is r = 2, so dA/dt = 2π(2)(-1/(4π)) = -1 square foot per minute. The surface area is shrinking at exactly 1 ft²/min.",
            rubric: [
              { points: "1 pt", criterion: "Uses similar triangles to get r = h/2." },
              { points: "1 pt", criterion: "Correct one-variable volume formula πh³/12." },
              { points: "1 pt", criterion: "Differentiates with respect to t correctly." },
              { points: "1 pt", criterion: "dh/dt = -1/(2π) ft/min with units and the negative sign." },
              { points: "1 pt", criterion: "dr/dt = -1/(4π) ft/min." },
              { points: "1 pt", criterion: "dA/dt = -1 ft²/min." },
            ],
            note: "The exact answer -1 ft²/min in part (d) is a good sign you did (b) and (c) right. Reducing to one variable in part (a) is what makes the rest easy.",
          },
          {
            id: "calc-u4-p6",
            kind: "free-response",
            label: "FRQ 2",
            prompt:
              "A particle moves along a horizontal line with velocity v(t) = t² - 4t + 3 meters per second for 0 ≤ t ≤ 5 seconds. At time t = 0 the particle is at position x = 2 meters.",
            parts: [
              { label: "(a)", text: "At what times in the interval is the particle at rest?" },
              { label: "(b)", text: "On what intervals is the particle moving left?" },
              { label: "(c)", text: "Find all times at which the particle's speed is increasing, with justification." },
              { label: "(d)", text: "Find the particle's position at t = 3." },
            ],
            solution:
              "(a) v(t) = (t - 1)(t - 3) = 0 at t = 1 and t = 3, both in [0, 5].\n\n(b) Moving left means v(t) < 0. The parabola opens upward with roots 1 and 3, so v < 0 exactly on the open interval 1 < t < 3.\n\n(c) Acceleration is a(t) = 2t - 4, which is zero at t = 2, negative for t < 2, and positive for t > 2. Speed increases when v and a have the same sign.\n  - On (0, 1): v > 0, a < 0 - opposite signs, speed decreasing.\n  - On (1, 2): v < 0, a < 0 - same sign, speed increasing.\n  - On (2, 3): v < 0, a > 0 - opposite signs, speed decreasing.\n  - On (3, 5): v > 0, a > 0 - same sign, speed increasing.\nSpeed is increasing on (1, 2) and on (3, 5).\n\n(d) x(3) = x(0) + the integral of v from 0 to 3 = 2 + [t³/3 - 2t² + 3t] evaluated from 0 to 3 = 2 + (9 - 18 + 9) = 2 + 0 = 2 meters. The particle is back where it started.",
            rubric: [
              { points: "1 pt", criterion: "t = 1 and t = 3." },
              { points: "1 pt", criterion: "Interval 1 < t < 3 for leftward motion." },
              { points: "1 pt", criterion: "Computes a(t) = 2t - 4." },
              { points: "2 pts", criterion: "Correct sign analysis and both intervals (1, 2) and (3, 5)." },
              { points: "1 pt", criterion: "Position 2 meters using x(0) plus the integral of v." },
            ],
            note: "Part (c) is the part students lose. 'Speeding up' is a statement about v and a agreeing in sign, not about a being positive.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "calc-u5",
      number: "5",
      title: "Analytical Applications of Differentiation",
      examWeight: "10-15%",
      examWeightMidpoint: 12.5,
      classPeriods: "~15-16 class periods",
      summary:
        "The justification unit. Everything here - increasing/decreasing, extrema, concavity, optimization - is graded on whether you cite the right test and the right evidence, not on whether you found the right x-value.",
      topics: [
        {
          id: "calc-u5-t1",
          title: "Mean Value Theorem",
          detail:
            "If f is continuous on [a, b] and differentiable on (a, b), some c in (a, b) has f'(c) equal to the average rate of change. State both hypotheses.",
        },
        {
          id: "calc-u5-t2",
          title: "Extreme Value Theorem and the candidates test",
          detail:
            "On a closed interval, compare f at every critical number and at both endpoints. The largest value is the absolute maximum.",
        },
        {
          id: "calc-u5-t3",
          title: "Increasing and decreasing behavior from f'",
          detail:
            "f is increasing where f' > 0. Justify with a sign chart of f' and reference f', never f itself.",
        },
        {
          id: "calc-u5-t4",
          title: "First derivative test for local extrema",
          detail:
            "A local max occurs where f' changes from positive to negative. A critical point where f' does not change sign is neither.",
        },
        {
          id: "calc-u5-t5",
          title: "Concavity, inflection points, and the second derivative test",
          detail:
            "f is concave up where f'' > 0. An inflection point requires f'' to change sign, not merely to equal zero.",
        },
        {
          id: "calc-u5-t6",
          title: "Connecting graphs of f, f', and f''",
          detail:
            "Given the graph of one, describe the other two. Zeros of f' are the extrema of f; zeros of f'' are the extrema of f'.",
        },
        {
          id: "calc-u5-t7",
          title: "Optimization in applied contexts",
          detail:
            "Write the objective and the constraint, reduce to one variable, find critical points, and verify it is a maximum with a sign chart or the second derivative.",
        },
        {
          id: "calc-u5-t8",
          title: "Behavior of implicitly defined relations",
          detail:
            "Use dy/dx and d²y/dx² from implicit differentiation to classify a point on a curve as a local max, min, or neither.",
        },
      ],
      keySkills: [
        "MVT conclusion: f'(c) = (f(b) - f(a))/(b - a)",
        "Candidates test: evaluate f at all critical numbers and both endpoints",
        "Local max where f' goes + to -; local min where f' goes - to +",
        "Inflection point requires a sign change in f''",
        "Optimization: always verify the critical point is the extremum you want",
      ],
      commonMistakes: [
        "Claiming an inflection point wherever f'' = 0. If f'' does not change sign, there is no inflection point (f(x) = x⁴ at x = 0).",
        "Justifying increasing behavior by saying 'f is going up' instead of citing f' > 0.",
        "Forgetting endpoints in a closed-interval maximum problem.",
        "Reporting the x-value when the question asks for the maximum value of f, or vice versa.",
      ],
      practiceSet: {
        id: "calc-u5-ps",
        title: "Unit 5 Practice: Curve Analysis and Optimization",
        focus:
          "MVT computation, first and second derivative tests, closed-interval extrema, and a full optimization write-up.",
        estimatedMinutes: 50,
        calculator: "not-permitted",
        problems: [
          {
            id: "calc-u5-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "Let f(x) = x² - 3x on [1, 4]. The Mean Value Theorem guarantees a value c in (1, 4) with f'(c) equal to the average rate of change. What is c?",
            choices: [
              { label: "A", text: "3/2" },
              { label: "B", text: "2" },
              { label: "C", text: "5/2" },
              { label: "D", text: "3" },
            ],
            answer: "C",
            solution:
              "Average rate of change = (f(4) - f(1))/(4 - 1) = ((16 - 12) - (1 - 3))/3 = (4 - (-2))/3 = 6/3 = 2. Setting f'(c) = 2c - 3 = 2 gives c = 5/2, which lies in (1, 4).",
            note: "For any quadratic on [a, b], the MVT value is always the midpoint (a + b)/2 = 5/2 here. Good sanity check.",
          },
          {
            id: "calc-u5-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "A differentiable function f has f'(x) = (x - 1)²(x - 4). At which x does f have a local minimum?",
            choices: [
              { label: "A", text: "x = 1 only" },
              { label: "B", text: "x = 4 only" },
              { label: "C", text: "x = 1 and x = 4" },
              { label: "D", text: "Neither, because f' is never negative." },
            ],
            answer: "B",
            solution:
              "The factor (x - 1)² is never negative, so the sign of f' is the sign of (x - 4). For x < 4 (other than x = 1) f' is negative; for x > 4 it is positive. f' changes from negative to positive only at x = 4, giving a local minimum there. At x = 1, f' touches zero without changing sign, so there is no extremum.",
            note: "Even-power factors do not change sign. Circling them as you build the sign chart saves this mistake.",
          },
          {
            id: "calc-u5-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "For f(x) = x⁴ - 6x², on which intervals is the graph of f concave up?",
            choices: [
              { label: "A", text: "(-1, 1)" },
              { label: "B", text: "(-infinity, -1) and (1, infinity)" },
              { label: "C", text: "(-infinity, 0) and (0, infinity)" },
              { label: "D", text: "All real numbers" },
            ],
            answer: "B",
            solution:
              "f'(x) = 4x³ - 12x and f''(x) = 12x² - 12 = 12(x² - 1) = 12(x - 1)(x + 1). This is positive when |x| > 1, so f is concave up on (-infinity, -1) and (1, infinity), with inflection points at x = -1 and x = 1 where f'' changes sign.",
          },
          {
            id: "calc-u5-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "What is the absolute maximum value of f(x) = x³ - 3x on the closed interval [0, 3]?",
            choices: [
              { label: "A", text: "-2" },
              { label: "B", text: "0" },
              { label: "C", text: "2" },
              { label: "D", text: "18" },
            ],
            answer: "D",
            solution:
              "f'(x) = 3x² - 3 = 3(x - 1)(x + 1), so the only critical number in [0, 3] is x = 1. Run the candidates test: f(0) = 0, f(1) = 1 - 3 = -2, f(3) = 27 - 9 = 18. The absolute maximum value is 18, attained at the right endpoint.",
            note: "Choice A is the local minimum value and the answer you get if you stop at the critical point. Endpoints are candidates too.",
          },
          {
            id: "calc-u5-p5",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "A rectangle has its base on the x-axis and its two upper vertices on the parabola y = 12 - x². Let the upper-right vertex be at (x, 12 - x²) with 0 < x < sqrt(12).",
            parts: [
              { label: "(a)", text: "Write the area of the rectangle as a function of x." },
              { label: "(b)", text: "Find the value of x that maximizes the area, and justify that it gives a maximum." },
              { label: "(c)", text: "State the maximum area and the dimensions of that rectangle." },
            ],
            solution:
              "(a) By symmetry about the y-axis, the width is 2x and the height is 12 - x², so A(x) = 2x(12 - x²) = 24x - 2x³ for 0 < x < sqrt(12).\n\n(b) A'(x) = 24 - 6x² = 6(4 - x²) = 6(2 - x)(2 + x). On the domain 0 < x < sqrt(12), the only critical number is x = 2. A' is positive for 0 < x < 2 and negative for x > 2, so A changes from increasing to decreasing at x = 2: a local and, since it is the only critical point on the interval, absolute maximum. (Equivalently A''(x) = -12x, which is negative at x = 2.)\n\n(c) A(2) = 2(2)(12 - 4) = 4 · 8 = 32 square units. The rectangle is 4 units wide (from x = -2 to x = 2) and 8 units tall.",
            rubric: [
              { points: "1 pt", criterion: "Correct area function using width 2x." },
              { points: "1 pt", criterion: "Correct derivative A'(x) = 24 - 6x²." },
              { points: "1 pt", criterion: "Critical value x = 2." },
              { points: "1 pt", criterion: "Justification via sign change of A' or A'' < 0." },
              { points: "1 pt", criterion: "Maximum area 32." },
              { points: "1 pt", criterion: "Dimensions 4 by 8." },
            ],
            note: "The width is 2x, not x. Forgetting the symmetry is the single most common error in this classic problem and it silently halves your answer.",
          },
          {
            id: "calc-u5-p6",
            kind: "free-response",
            label: "FRQ 2",
            prompt: "Let f(x) = x² e^(-x), defined for all real x.",
            parts: [
              { label: "(a)", text: "Find f'(x) and determine the intervals on which f is increasing and decreasing." },
              { label: "(b)", text: "Classify each critical point as a local maximum, local minimum, or neither, and give the value of f there." },
              { label: "(c)", text: "Find the x-coordinates of all inflection points, with justification." },
              { label: "(d)", text: "Find the limits of f as x approaches infinity and as x approaches negative infinity, and describe the resulting end behavior." },
            ],
            solution:
              "(a) Product rule: f'(x) = 2x e^(-x) + x²(-e^(-x)) = e^(-x)(2x - x²) = -x(x - 2)e^(-x). Since e^(-x) > 0 always, the sign of f' is the sign of -x(x - 2), which is negative for x < 0, positive for 0 < x < 2, and negative for x > 2. So f is decreasing on (-infinity, 0), increasing on (0, 2), and decreasing on (2, infinity).\n\n(b) At x = 0, f' changes from negative to positive, so f has a local minimum with f(0) = 0. At x = 2, f' changes from positive to negative, so f has a local maximum with f(2) = 4e^(-2) ≈ 0.5413.\n\n(c) Differentiate again: f''(x) = e^(-x)(x² - 4x + 2). The exponential is positive, so inflection candidates solve x² - 4x + 2 = 0, giving x = 2 ± sqrt(2), approximately 0.586 and 3.414. The quadratic is positive outside its roots and negative between them, so f'' changes sign at both values and both are inflection points.\n\n(d) As x approaches infinity, e^(-x) decays faster than x² grows, so the limit is 0 (confirmable with L'Hospital applied twice to x²/e^x). As x approaches negative infinity, x² approaches infinity and e^(-x) also approaches infinity, so the limit is infinity. The graph rises without bound to the left and flattens toward the x-axis from above on the right, with a horizontal asymptote y = 0 as x approaches infinity.",
            rubric: [
              { points: "1 pt", criterion: "Correct f'(x) with e^(-x) factored." },
              { points: "1 pt", criterion: "Correct increasing/decreasing intervals with sign justification." },
              { points: "1 pt", criterion: "Local min at x = 0 and local max at x = 2, classified by the first derivative test." },
              { points: "1 pt", criterion: "f(2) = 4e^(-2)." },
              { points: "1 pt", criterion: "Correct f'' and inflection points at 2 ± sqrt(2) with a sign-change argument." },
              { points: "1 pt", criterion: "Both limits correct with a described end behavior." },
            ],
            note: "Factoring e^(-x) out immediately is what makes the sign analysis trivial. Students who expand instead usually lose the concavity part.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "calc-u6",
      number: "6",
      title: "Integration and Accumulation of Change",
      examWeight: "15-20%",
      examWeightMidpoint: 17.5,
      classPeriods: "~15-16 class periods",
      summary:
        "The heaviest unit on the exam, and the one with the most BC-only techniques: integration by parts, partial fractions, and improper integrals all live here. Riemann sums from a table appear on the free-response section almost every year.",
      topics: [
        {
          id: "calc-u6-t1",
          title: "Riemann sums and approximating accumulation",
          detail:
            "Left, right, midpoint, and trapezoidal sums over possibly unequal subintervals. Decide over/under estimation from whether the function is increasing or decreasing.",
        },
        {
          id: "calc-u6-t2",
          title: "Definite integral notation and the definition as a limit",
          detail:
            "The definite integral is the limit of Riemann sums as the number of subintervals grows without bound.",
        },
        {
          id: "calc-u6-t3",
          title: "The Fundamental Theorem of Calculus and accumulation functions",
          detail:
            "If g(x) is the integral of f from a to x, then g'(x) = f(x). With a variable upper limit u(x), g'(x) = f(u(x))·u'(x).",
        },
        {
          id: "calc-u6-t4",
          title: "Properties of definite integrals",
          detail:
            "Additivity over intervals, reversing orientation to flip the sign, and pulling out constants.",
        },
        {
          id: "calc-u6-t5",
          title: "Antiderivatives and indefinite integrals",
          detail:
            "Reverse the basic derivative rules, including 1/x giving ln|x| with the absolute value, and never lose the + C.",
        },
        {
          id: "calc-u6-t6",
          title: "u-substitution",
          detail:
            "Choose u so du appears (up to a constant) in the integrand. For definite integrals, convert the limits rather than back-substituting.",
        },
        {
          id: "calc-u6-t7",
          title: "Long division and completing the square",
          detail:
            "Rewrite improper rational integrands by dividing, and recognize forms that integrate to arctangent after completing the square.",
        },
        {
          id: "calc-u6-t8",
          title: "Integration by parts (BC)",
          detail:
            "The integral of u dv equals uv minus the integral of v du. Choose u by LIATE: logs and inverse trig before algebraic before exponential and trig.",
        },
        {
          id: "calc-u6-t9",
          title: "Integration with linear partial fractions (BC)",
          detail:
            "Factor the denominator into distinct linear factors, split with unknown numerators, and solve by substituting the roots.",
        },
        {
          id: "calc-u6-t10",
          title: "Improper integrals (BC)",
          detail:
            "Replace the infinite bound or the discontinuity with a limit variable, integrate, then take the limit. Say the word 'diverges' when it does.",
        },
      ],
      keySkills: [
        "FTC part 2: d/dx of the integral of f from a to u(x) equals f(u(x))·u'(x)",
        "The integral of 1/x dx is ln|x| + C - the absolute value matters",
        "By parts: ∫u dv = uv - ∫v du, with u chosen by LIATE",
        "Partial fractions for distinct linear factors: split, clear denominators, substitute each root",
        "p-integral test at infinity: ∫₁^∞ x^(-p) dx converges exactly when p > 1",
      ],
      commonMistakes: [
        "Forgetting to change the limits of integration after a u-substitution in a definite integral.",
        "Treating an improper integral as ordinary and writing 'infinity - something' instead of setting up a limit.",
        "Using equal subinterval widths on a table-based Riemann sum when the table's time steps are unequal.",
        "Dropping the chain-rule factor in an FTC derivative with a variable upper limit.",
      ],
      practiceSet: {
        id: "calc-u6-ps",
        title: "Unit 6 Practice: Integration Techniques and Accumulation",
        focus:
          "FTC derivatives, by parts, partial fractions, improper integrals, and a full table-based Riemann sum free-response.",
        estimatedMinutes: 55,
        calculator: "not-permitted",
        problems: [
          {
            id: "calc-u6-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "If g(x) is the integral of sin t dt from 0 to x², what is g'(x)?",
            choices: [
              { label: "A", text: "sin(x²)" },
              { label: "B", text: "2x sin(x²)" },
              { label: "C", text: "cos(x²) · 2x" },
              { label: "D", text: "1 - cos(x²)" },
            ],
            answer: "B",
            solution:
              "By the Fundamental Theorem of Calculus with a variable upper limit, g'(x) = sin(u(x)) · u'(x) where u(x) = x². Since u'(x) = 2x, g'(x) = 2x sin(x²).",
            note: "Choice D is g(x) itself, correctly evaluated. Choice A is the FTC without the chain rule, which is the most common slip.",
          },
          {
            id: "calc-u6-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt: "Evaluate the definite integral of x e^x dx from 0 to 1.",
            choices: [
              { label: "A", text: "0" },
              { label: "B", text: "1" },
              { label: "C", text: "e - 1" },
              { label: "D", text: "e" },
            ],
            answer: "B",
            solution:
              "Integrate by parts with u = x and dv = e^x dx, so du = dx and v = e^x. Then ∫x e^x dx = x e^x - ∫e^x dx = x e^x - e^x + C. Evaluating from 0 to 1: (1·e - e) - (0 - 1) = 0 + 1 = 1.",
            note: "Choice C is what you get by forgetting the -e^x term. The antiderivative e^x(x - 1) is worth remembering.",
          },
          {
            id: "calc-u6-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt: "Evaluate the improper integral of x^(-3/2) dx from 1 to infinity.",
            choices: [
              { label: "A", text: "1/2" },
              { label: "B", text: "1" },
              { label: "C", text: "2" },
              { label: "D", text: "The integral diverges." },
            ],
            answer: "C",
            solution:
              "Write it as the limit as b approaches infinity of the integral from 1 to b. An antiderivative is -2x^(-1/2), so the integral from 1 to b equals -2/sqrt(b) + 2. As b approaches infinity, -2/sqrt(b) approaches 0, leaving 2. Since p = 3/2 > 1, convergence was expected.",
            note: "The p-test is the fastest first check: ∫₁^∞ x^(-p) dx converges exactly when p > 1.",
          },
          {
            id: "calc-u6-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt: "Which expression is equal to the integral of (5x - 3)/(x² - 2x - 3) dx?",
            choices: [
              { label: "A", text: "3 ln|x - 3| + 2 ln|x + 1| + C" },
              { label: "B", text: "2 ln|x - 3| + 3 ln|x + 1| + C" },
              { label: "C", text: "5 ln|x² - 2x - 3| + C" },
              { label: "D", text: "ln|x - 3| + 4 ln|x + 1| + C" },
            ],
            answer: "A",
            solution:
              "Factor the denominator: x² - 2x - 3 = (x - 3)(x + 1). Write (5x - 3)/((x - 3)(x + 1)) = A/(x - 3) + B/(x + 1). Clearing denominators gives A(x + 1) + B(x - 3) = 5x - 3. Substituting x = 3: 4A = 12, so A = 3. Substituting x = -1: -4B = -8, so B = 2. The integral is therefore 3 ln|x - 3| + 2 ln|x + 1| + C.",
            note: "Choice B swaps A and B, which is what happens if you substitute the roots into the wrong factor. Substituting the root that kills one term is always the fastest way to solve for the coefficients.",
          },
          {
            id: "calc-u6-p5",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "Water flows into a tank at a rate R(t) gallons per minute, where R is a differentiable, increasing function. Selected values are given.\n\nt (minutes):  0    2    5    9    10\nR(t) (gal/min): 20   30   40   55   65",
            parts: [
              { label: "(a)", text: "Use a left Riemann sum with the four subintervals given by the table to approximate the total gallons that flow in over the 10 minutes. Show the terms." },
              { label: "(b)", text: "Use a right Riemann sum with the same subintervals." },
              { label: "(c)", text: "Use a trapezoidal sum with the same subintervals." },
              { label: "(d)", text: "Explain the meaning of the integral of R(t) dt from 0 to 10 in the context of this problem, including units." },
              { label: "(e)", text: "Is the left Riemann sum an underestimate or an overestimate of that integral? Justify." },
            ],
            solution:
              "(a) The subinterval widths are 2, 3, 4, and 1. Left sum = 20(2) + 30(3) + 40(4) + 55(1) = 40 + 90 + 160 + 55 = 345 gallons.\n\n(b) Right sum = 30(2) + 40(3) + 55(4) + 65(1) = 60 + 120 + 220 + 65 = 465 gallons.\n\n(c) Trapezoidal sum = 2(20 + 30)/2 + 3(30 + 40)/2 + 4(40 + 55)/2 + 1(55 + 65)/2 = 50 + 105 + 190 + 60 = 405 gallons. Note this is the average of the left and right sums, (345 + 465)/2 = 405, as it must be when the subintervals match.\n\n(d) R(t) is a rate in gallons per minute and t is in minutes, so the integral accumulates gallons. It represents the total number of gallons of water that flowed into the tank during the first 10 minutes.\n\n(e) R is increasing, so on each subinterval the left endpoint gives the smallest value of R. Every rectangle therefore sits below the curve, and the left Riemann sum underestimates the integral.",
            rubric: [
              { points: "1 pt", criterion: "Uses the correct unequal widths 2, 3, 4, 1." },
              { points: "1 pt", criterion: "Left sum 345." },
              { points: "1 pt", criterion: "Right sum 465." },
              { points: "1 pt", criterion: "Trapezoidal sum 405." },
              { points: "1 pt", criterion: "Interpretation names total gallons over 0 to 10 minutes with units." },
              { points: "1 pt", criterion: "Says underestimate and justifies with R increasing." },
            ],
            note: "Write out the individual products rather than a single total. Readers award the setup point for visible terms even when arithmetic slips.",
          },
          {
            id: "calc-u6-p6",
            kind: "free-response",
            label: "FRQ 2",
            prompt: "Evaluate each integral, showing the technique you used.",
            parts: [
              { label: "(a)", text: "The integral of 2x sqrt(x² + 1) dx." },
              { label: "(b)", text: "The integral of e^(2x)/(1 + e^(2x)) dx from 0 to ln 2." },
              { label: "(c)", text: "The integral of x² ln x dx." },
              { label: "(d)", text: "The integral of e^(-3x) dx from 0 to infinity." },
            ],
            solution:
              "(a) Substitute u = x² + 1, du = 2x dx. The integral becomes ∫sqrt(u) du = (2/3)u^(3/2) + C = (2/3)(x² + 1)^(3/2) + C.\n\n(b) Substitute u = 1 + e^(2x), du = 2e^(2x) dx, so e^(2x) dx = du/2. The limits become u = 2 at x = 0 and u = 1 + 4 = 5 at x = ln 2. The integral is (1/2)∫ du/u from 2 to 5 = (1/2)[ln 5 - ln 2] = (1/2) ln(5/2) ≈ 0.4581.\n\n(c) Integrate by parts with u = ln x (the L in LIATE) and dv = x² dx, so du = dx/x and v = x³/3. Then ∫x² ln x dx = (x³/3)ln x - ∫(x³/3)(1/x) dx = (x³/3)ln x - ∫x²/3 dx = (x³/3)ln x - x³/9 + C. Factored, this is x³(3 ln x - 1)/9 + C.\n\n(d) Set it up as a limit: lim as b approaches infinity of the integral from 0 to b. An antiderivative is -(1/3)e^(-3x), so the integral from 0 to b is -(1/3)e^(-3b) + 1/3. As b approaches infinity, e^(-3b) approaches 0, so the value is 1/3.",
            rubric: [
              { points: "1 pt", criterion: "Correct substitution and antiderivative in (a)." },
              { points: "2 pts", criterion: "Correct substitution, converted limits, and value (1/2)ln(5/2) in (b)." },
              { points: "2 pts", criterion: "Correct by-parts choice and antiderivative in (c)." },
              { points: "1 pt", criterion: "Limit notation and value 1/3 in (d)." },
            ],
            note: "In (c), choosing u = x² instead of u = ln x makes the problem worse, not better. LIATE exists because logs must be the u.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "calc-u7",
      number: "7",
      title: "Differential Equations",
      examWeight: "5-10%",
      examWeightMidpoint: 7.5,
      classPeriods: "~8-9 class periods",
      summary:
        "Small unit, predictable questions. Separation of variables with an initial condition is nearly guaranteed, and BC adds Euler's method and qualitative analysis of the logistic model.",
      topics: [
        {
          id: "calc-u7-t1",
          title: "Modeling situations with differential equations",
          detail:
            "Translate sentences into equations: 'proportional to y' means dy/dt = ky, 'proportional to the product of y and (L - y)' is logistic.",
        },
        {
          id: "calc-u7-t2",
          title: "Verifying solutions to differential equations",
          detail:
            "Differentiate the candidate and substitute into both sides. This is a two-line answer and an easy point.",
        },
        {
          id: "calc-u7-t3",
          title: "Slope fields",
          detail:
            "Sketch or match a slope field by testing a handful of points, and use it to describe the behavior of a particular solution.",
        },
        {
          id: "calc-u7-t4",
          title: "Euler's method (BC)",
          detail:
            "y_new = y_old + (step size)(slope at the old point). Tabulate the steps; the exam usually asks for two or three.",
        },
        {
          id: "calc-u7-t5",
          title: "Separation of variables",
          detail:
            "Separate, integrate both sides, add one constant, then apply the initial condition before simplifying.",
        },
        {
          id: "calc-u7-t6",
          title: "Exponential growth and decay models",
          detail:
            "dy/dt = ky gives y = y₀e^(kt). Convert half-life or doubling time to k with k = ±ln 2 divided by that time.",
        },
        {
          id: "calc-u7-t7",
          title: "The logistic model (BC)",
          detail:
            "For dP/dt = kP(1 - P/L), the carrying capacity is L, and the population grows fastest when P = L/2. You are not required to solve it analytically.",
        },
        {
          id: "calc-u7-t8",
          title: "Domain of a particular solution",
          detail:
            "The solution must be continuous and pass through the initial point, which often restricts the domain and the sign of a square root.",
        },
      ],
      keySkills: [
        "Exponential model: y = y₀e^(kt); half-life h gives k = -(ln 2)/h",
        "Euler: y_(n+1) = y_n + h·f(x_n, y_n)",
        "Logistic dP/dt = kP(1 - P/L): carrying capacity L, fastest growth at P = L/2",
        "After separating and integrating, apply the initial condition before solving for y",
        "Choose the branch of a square-root solution using the sign of the initial value",
      ],
      commonMistakes: [
        "Adding + C to both sides or forgetting it entirely. One constant, on one side, before applying the initial condition.",
        "Solving for the general solution and then never using the initial condition the problem gave you.",
        "Taking the positive square root when the initial y-value is negative.",
        "Using the previous slope instead of the newly computed point in the second Euler step.",
      ],
      practiceSet: {
        id: "calc-u7-ps",
        title: "Unit 7 Practice: Differential Equations",
        focus:
          "Separation of variables with initial conditions, Euler's method, logistic reasoning, and a decay model with units.",
        estimatedMinutes: 45,
        calculator: "allowed",
        problems: [
          {
            id: "calc-u7-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "If dy/dx = 2xy and y = 3 when x = 0, what is y as a function of x?",
            choices: [
              { label: "A", text: "y = 3e^(x²)" },
              { label: "B", text: "y = 3e^(2x)" },
              { label: "C", text: "y = x² + 3" },
              { label: "D", text: "y = 3 + ln|x²|" },
            ],
            answer: "A",
            solution:
              "Separate: dy/y = 2x dx. Integrating gives ln|y| = x² + C. Exponentiating, y = Ae^(x²). The initial condition y(0) = 3 gives A = 3, so y = 3e^(x²).",
            note: "Choice B is the answer to dy/dx = 2y. The x in front is exactly what turns the exponent into x².",
          },
          {
            id: "calc-u7-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "Let dy/dx = x + y with y(0) = 1. Using Euler's method with two steps of size 0.5, what is the approximation for y(1)?",
            choices: [
              { label: "A", text: "2.0" },
              { label: "B", text: "2.5" },
              { label: "C", text: "3.0" },
              { label: "D", text: "3.5" },
            ],
            answer: "B",
            solution:
              "Step 1 from (0, 1): slope = 0 + 1 = 1, so y(0.5) ≈ 1 + 0.5(1) = 1.5. Step 2 from (0.5, 1.5): slope = 0.5 + 1.5 = 2, so y(1) ≈ 1.5 + 0.5(2) = 2.5.",
            note: "Choice A comes from reusing the first slope for both steps. Recompute the slope at the new point every time.",
          },
          {
            id: "calc-u7-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "A population satisfies dP/dt = 0.05P(1 - P/2000). For which value of P is the population growing fastest?",
            choices: [
              { label: "A", text: "P = 0" },
              { label: "B", text: "P = 1000" },
              { label: "C", text: "P = 2000" },
              { label: "D", text: "P = 4000" },
            ],
            answer: "B",
            solution:
              "This is logistic with carrying capacity L = 2000. Treating dP/dt as a function of P, it is the downward parabola 0.05P - 0.000025P², whose vertex is halfway between the roots P = 0 and P = 2000, namely P = 1000. Growth is fastest at half the carrying capacity.",
            note: "Choice C is where growth stops, not where it peaks. P = L/2 is worth memorizing along with the fact that the solution curve has an inflection point there.",
          },
          {
            id: "calc-u7-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "If dy/dx = x/y and y(0) = 2, which is the particular solution?",
            choices: [
              { label: "A", text: "y = sqrt(x² + 4)" },
              { label: "B", text: "y = -sqrt(x² + 4)" },
              { label: "C", text: "y = x² + 2" },
              { label: "D", text: "y = 2e^(x²/2)" },
            ],
            answer: "A",
            solution:
              "Separate: y dy = x dx. Integrating gives y²/2 = x²/2 + C, or y² = x² + K. The condition y(0) = 2 gives 4 = 0 + K, so y² = x² + 4. Since y(0) = 2 is positive and the solution must be continuous, take the positive branch: y = sqrt(x² + 4).",
            note: "Choice B satisfies the same implicit equation but fails the initial condition. Always use the sign of the initial value to pick the branch.",
          },
          {
            id: "calc-u7-p5",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "A patient receives a 500 mg dose of a drug. The amount A(t) in the bloodstream, in milligrams, decreases at a rate proportional to the amount present, and the drug has a half-life of 4 hours.",
            parts: [
              { label: "(a)", text: "Write a differential equation for A and find the value of the decay constant k." },
              { label: "(b)", text: "Find A(t) explicitly." },
              { label: "(c)", text: "How much of the drug remains after 10 hours? Round to three decimal places." },
              { label: "(d)", text: "At what time is only 50 mg left? Round to three decimal places." },
            ],
            solution:
              "(a) 'Decreases at a rate proportional to the amount' means dA/dt = -kA with k > 0. A half-life of 4 hours means A(4) = 250 = 500e^(-4k), so e^(-4k) = 1/2 and 4k = ln 2. Therefore k = (ln 2)/4 ≈ 0.173287 per hour.\n\n(b) Separating and integrating gives A(t) = 500e^(-kt) = 500e^(-(ln 2/4)t), which can also be written as A(t) = 500·2^(-t/4).\n\n(c) A(10) = 500·2^(-10/4) = 500·2^(-2.5) = 500/5.656854 ≈ 88.388 mg.\n\n(d) Solve 500·2^(-t/4) = 50, so 2^(-t/4) = 0.1 and -t/4 = log₂(0.1) = -log₂(10). Then t = 4 log₂(10) = 4(3.321928) ≈ 13.288 hours.",
            rubric: [
              { points: "1 pt", criterion: "Differential equation dA/dt = -kA." },
              { points: "1 pt", criterion: "k = (ln 2)/4 from the half-life." },
              { points: "1 pt", criterion: "Explicit solution A(t) = 500e^(-kt) or 500·2^(-t/4)." },
              { points: "1 pt", criterion: "A(10) ≈ 88.388 mg with units." },
              { points: "2 pts", criterion: "Correct equation solved for t and the value ≈ 13.288 hours." },
            ],
            note: "Writing the model in the base-2 form 500·2^(-t/4) makes both numeric parts nearly mental arithmetic. Both forms earn full credit.",
          },
          {
            id: "calc-u7-p6",
            kind: "free-response",
            label: "FRQ 2",
            prompt: "Consider the differential equation dy/dx = (x + 1)/y with the initial condition y(0) = -2.",
            parts: [
              { label: "(a)", text: "Find the particular solution y = f(x)." },
              { label: "(b)", text: "State the domain of the particular solution and explain your reasoning." },
              { label: "(c)", text: "Find f(2)." },
              { label: "(d)", text: "Verify that your solution satisfies the differential equation." },
            ],
            solution:
              "(a) Separate: y dy = (x + 1) dx. Integrating both sides gives y²/2 = x²/2 + x + C. Applying y(0) = -2: (-2)²/2 = 2 equals 0 + 0 + C, so C = 2. Multiplying by 2, y² = x² + 2x + 4. Because y(0) = -2 is negative and the solution must be continuous, take the negative branch: y = -sqrt(x² + 2x + 4).\n\n(b) The radicand x² + 2x + 4 has discriminant 2² - 4(1)(4) = 4 - 16 = -12 < 0, so it is positive for every real x. It also never equals zero, so y is never zero and dy/dx = (x+1)/y is defined everywhere. The domain is all real numbers.\n\n(c) f(2) = -sqrt(4 + 4 + 4) = -sqrt(12) = -2 sqrt(3) ≈ -3.464.\n\n(d) Differentiate implicitly from y² = x² + 2x + 4: 2y·dy/dx = 2x + 2, so dy/dx = (x + 1)/y, which is the original equation. And y(0) = -sqrt(4) = -2 matches the initial condition.",
            rubric: [
              { points: "1 pt", criterion: "Separates variables correctly." },
              { points: "1 pt", criterion: "Antiderivatives with a single constant." },
              { points: "1 pt", criterion: "Uses the initial condition to get C = 2." },
              { points: "1 pt", criterion: "Chooses the negative square root and states y explicitly." },
              { points: "1 pt", criterion: "Domain all reals, justified by a negative discriminant." },
              { points: "1 pt", criterion: "f(2) = -2 sqrt(3)." },
            ],
            note: "Part (b) is the part almost everyone skips. A quick discriminant check is the entire argument.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "calc-u8",
      number: "8",
      title: "Applications of Integration",
      examWeight: "5-10%",
      examWeightMidpoint: 7.5,
      classPeriods: "~13-14 class periods",
      summary:
        "Area, volume, average value, and net change. The skill being tested is almost always 'set up the correct integral', so practice writing the integral and stopping, especially on calculator-allowed questions.",
      topics: [
        {
          id: "calc-u8-t1",
          title: "Average value of a function",
          detail:
            "The average value on [a, b] is 1/(b - a) times the integral of f over [a, b]. Do not confuse it with the average rate of change.",
        },
        {
          id: "calc-u8-t2",
          title: "Net change and position from velocity",
          detail:
            "Displacement is the integral of v; total distance is the integral of |v|, which requires splitting at the sign changes.",
        },
        {
          id: "calc-u8-t3",
          title: "Area between two curves",
          detail:
            "Integrate (top minus bottom) in x, or (right minus left) in y. Find the intersection points first and split if the curves swap.",
        },
        {
          id: "calc-u8-t4",
          title: "Volumes with known cross sections",
          detail:
            "Integrate the cross-sectional area. Squares give s², semicircles give (π/2)r² with r equal to half the chord, equilateral triangles give (sqrt(3)/4)s².",
        },
        {
          id: "calc-u8-t5",
          title: "Volumes of revolution: discs and washers",
          detail:
            "π times the integral of (outer radius squared minus inner radius squared). Measure radii from the axis of revolution, not from an axis of the coordinate system.",
        },
        {
          id: "calc-u8-t6",
          title: "Revolving about a line other than an axis",
          detail:
            "About y = k, the radius is |f(x) - k|. Sketch and label the radius before writing the integral.",
        },
        {
          id: "calc-u8-t7",
          title: "Arc length (BC)",
          detail:
            "Length equals the integral of sqrt(1 + (dy/dx)²) dx. Almost always a calculator question; set it up and evaluate numerically.",
        },
      ],
      keySkills: [
        "Average value = 1/(b - a) times the integral of f from a to b",
        "Total distance = the integral of |v(t)| dt, split at every zero of v",
        "Washer volume = π ∫ (R² - r²), radii measured from the axis of revolution",
        "Semicircular cross section on a chord of length L: area = (π/8)L²",
        "Arc length = ∫ sqrt(1 + (f'(x))²) dx",
      ],
      commonMistakes: [
        "Writing π∫(R - r)² instead of π∫(R² - r²). Squaring the difference is not the difference of squares.",
        "Using displacement when the question asks for total distance travelled.",
        "Integrating in x when the region is more naturally described in y, then forcing an unnecessary split.",
        "Forgetting the 1/(b - a) factor for average value.",
      ],
      practiceSet: {
        id: "calc-u8-ps",
        title: "Unit 8 Practice: Area, Volume, Average Value",
        focus:
          "Average value, area between curves, three different volume constructions on one region, and BC arc length.",
        estimatedMinutes: 50,
        calculator: "allowed",
        problems: [
          {
            id: "calc-u8-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt: "What is the average value of f(x) = x² on the interval [0, 3]?",
            choices: [
              { label: "A", text: "3" },
              { label: "B", text: "9/2" },
              { label: "C", text: "9" },
              { label: "D", text: "27" },
            ],
            answer: "A",
            solution:
              "Average value = (1/(3 - 0)) times the integral of x² from 0 to 3 = (1/3)(27/3) = (1/3)(9) = 3.",
            note: "Choice C is the integral without dividing by the interval length; choice D is the antiderivative evaluated without dividing by 3.",
          },
          {
            id: "calc-u8-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "What is the area of the region enclosed by the graphs of y = x² and y = 2x?",
            choices: [
              { label: "A", text: "2/3" },
              { label: "B", text: "4/3" },
              { label: "C", text: "8/3" },
              { label: "D", text: "4" },
            ],
            answer: "B",
            solution:
              "Set x² = 2x to find intersections: x(x - 2) = 0, so x = 0 and x = 2. On (0, 2) the line 2x is above the parabola x². Area = the integral from 0 to 2 of (2x - x²) dx = [x² - x³/3] from 0 to 2 = 4 - 8/3 = 4/3.",
          },
          {
            id: "calc-u8-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "The region bounded by y = sqrt(x), y = 0, and x = 4 is revolved about the x-axis. What is the volume of the resulting solid?",
            choices: [
              { label: "A", text: "4π" },
              { label: "B", text: "8π" },
              { label: "C", text: "16π" },
              { label: "D", text: "32π/3" },
            ],
            answer: "B",
            solution:
              "Discs with radius sqrt(x) give volume π times the integral from 0 to 4 of (sqrt(x))² dx = π times the integral of x dx = π[x²/2] from 0 to 4 = π(8) = 8π.",
          },
          {
            id: "calc-u8-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "A solid has as its base the region bounded by y = 1 - x² and the x-axis. Cross sections perpendicular to the x-axis are squares. What is the volume?",
            choices: [
              { label: "A", text: "8/15" },
              { label: "B", text: "16/15" },
              { label: "C", text: "4/3" },
              { label: "D", text: "16π/15" },
            ],
            answer: "B",
            solution:
              "The side of each square is the vertical extent of the base, s = 1 - x², so the cross-sectional area is (1 - x²)². The base runs from x = -1 to x = 1. Volume = the integral from -1 to 1 of (1 - 2x² + x⁴) dx = [x - 2x³/3 + x⁵/5] from -1 to 1 = 2(1 - 2/3 + 1/5) = 2(8/15) = 16/15.",
            note: "Choice A is the half-interval answer, from forgetting that the base is symmetric about the y-axis. Choice D wrongly inserts π - squares have no π.",
          },
          {
            id: "calc-u8-p5",
            kind: "multiple-choice",
            label: "MCQ 5",
            prompt:
              "What is the length of the curve y = (2/3)x^(3/2) from x = 0 to x = 3?",
            choices: [
              { label: "A", text: "7/3" },
              { label: "B", text: "3" },
              { label: "C", text: "14/3" },
              { label: "D", text: "28/3" },
            ],
            answer: "C",
            solution:
              "dy/dx = x^(1/2), so 1 + (dy/dx)² = 1 + x. Length = the integral from 0 to 3 of sqrt(1 + x) dx = (2/3)(1 + x)^(3/2) from 0 to 3 = (2/3)(8 - 1) = 14/3.",
            note: "This is one of the rare arc-length integrals with a clean closed form, which is exactly why it shows up on no-calculator sections.",
          },
          {
            id: "calc-u8-p6",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "Let R be the region in the first quadrant bounded above by y = x and below by y = x².",
            parts: [
              { label: "(a)", text: "Find the area of R." },
              { label: "(b)", text: "Find the volume of the solid generated when R is revolved about the x-axis." },
              { label: "(c)", text: "Find the volume of the solid generated when R is revolved about the y-axis." },
              { label: "(d)", text: "Region R is the base of a solid whose cross sections perpendicular to the x-axis are semicircles with diameter in R. Find that volume." },
            ],
            solution:
              "The curves meet where x = x², that is at x = 0 and x = 1, and on (0, 1) the line y = x lies above y = x².\n\n(a) Area = the integral from 0 to 1 of (x - x²) dx = [x²/2 - x³/3] from 0 to 1 = 1/2 - 1/3 = 1/6.\n\n(b) Washers about the x-axis with outer radius x and inner radius x²: V = π times the integral from 0 to 1 of (x² - x⁴) dx = π(1/3 - 1/5) = π(2/15) = 2π/15.\n\n(c) Revolving about the y-axis, work in y with 0 ≤ y ≤ 1. Solving each curve for x gives x = y from the line and x = sqrt(y) from the parabola, and on (0, 1) sqrt(y) ≥ y, so the outer radius is sqrt(y) and the inner radius is y. V = π times the integral from 0 to 1 of (y - y²) dy = π(1/2 - 1/3) = π/6.\n\n(d) The diameter of each semicircle is the vertical distance x - x², so the radius is (x - x²)/2 and the area is (1/2)π r² = (π/8)(x - x²)². V = (π/8) times the integral from 0 to 1 of (x² - 2x³ + x⁴) dx = (π/8)(1/3 - 1/2 + 1/5) = (π/8)(1/30) = π/240.",
            rubric: [
              { points: "1 pt", criterion: "Finds intersections x = 0 and x = 1 and identifies which curve is on top." },
              { points: "1 pt", criterion: "Area 1/6." },
              { points: "2 pts", criterion: "Correct washer setup and value 2π/15." },
              { points: "1 pt", criterion: "Correct radii in y and value π/6." },
              { points: "1 pt", criterion: "Semicircle area (π/8)(x - x²)² and value π/240." },
            ],
            note: "Part (d) trips people twice: the semicircle area is half of πr², and the radius is half the chord, so the (1/2)(1/4) = 1/8 factor appears. Write r = (top - bottom)/2 on your paper before integrating.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "calc-u9",
      number: "9",
      title: "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
      examWeight: "10-15%",
      examWeightMidpoint: 12.5,
      classPeriods: "~10-11 class periods",
      summary:
        "BC-only, and reliably one free-response question plus several multiple-choice items. Three new coordinate systems, but only about six formulas. Memorize them and this becomes one of the highest-yield units on the exam.",
      topics: [
        {
          id: "calc-u9-t1",
          title: "Derivatives of parametric equations",
          detail:
            "dy/dx = (dy/dt)/(dx/dt). Horizontal tangents need dy/dt = 0 with dx/dt nonzero; vertical tangents are the reverse.",
        },
        {
          id: "calc-u9-t2",
          title: "Second derivatives of parametric equations",
          detail:
            "d²y/dx² = (d/dt of dy/dx)/(dx/dt). The most common error is forgetting to divide by dx/dt a second time.",
        },
        {
          id: "calc-u9-t3",
          title: "Arc length of a parametric curve",
          detail:
            "Length equals the integral of sqrt((dx/dt)² + (dy/dt)²) dt over the parameter interval.",
        },
        {
          id: "calc-u9-t4",
          title: "Vector-valued functions: position, velocity, acceleration",
          detail:
            "Differentiate component-wise. Speed is the magnitude of velocity, sqrt((x')² + (y')²), a scalar.",
        },
        {
          id: "calc-u9-t5",
          title: "Displacement and total distance for planar motion",
          detail:
            "Displacement integrates each velocity component separately; total distance integrates speed.",
        },
        {
          id: "calc-u9-t6",
          title: "Finding position from velocity and an initial point",
          detail:
            "x(t) = x(0) plus the integral of x'(t), applied to each component independently.",
        },
        {
          id: "calc-u9-t7",
          title: "Polar coordinates and converting to rectangular",
          detail:
            "x = r cos θ, y = r sin θ. dy/dx in polar comes from treating x and y as functions of θ and using the parametric formula.",
        },
        {
          id: "calc-u9-t8",
          title: "Area of a polar region",
          detail:
            "Area = (1/2) times the integral of r² dθ. Finding the correct θ limits is usually harder than the integration.",
        },
        {
          id: "calc-u9-t9",
          title: "Area between two polar curves",
          detail:
            "Area = (1/2) times the integral of (outer r² minus inner r²) dθ, over the θ interval where the outer curve really is outer.",
        },
      ],
      keySkills: [
        "Parametric: dy/dx = (dy/dt)/(dx/dt); d²y/dx² = (d/dt[dy/dx])/(dx/dt)",
        "Parametric arc length and total distance: ∫ sqrt((dx/dt)² + (dy/dt)²) dt",
        "Speed = |v(t)| = sqrt((x'(t))² + (y'(t))²)",
        "Polar area: (1/2)∫ r² dθ; between curves, (1/2)∫ (R² - r²) dθ",
        "Polar dy/dx = (r' sin θ + r cos θ)/(r' cos θ - r sin θ)",
      ],
      commonMistakes: [
        "Computing d²y/dx² as (d²y/dt²)/(d²x/dt²), which is not a thing.",
        "Using ∫ r dθ instead of (1/2)∫ r² dθ for polar area.",
        "Integrating a polar cardioid over 0 to 2π when the petal or overlap region only spans part of that.",
        "Reporting displacement as a single number for planar motion. Displacement is a vector with two components.",
      ],
      practiceSet: {
        id: "calc-u9-ps",
        title: "Unit 9 Practice: Parametric, Polar, Vector",
        focus:
          "Parametric slopes and arc length, polar area including a region between curves, and a full planar-motion free-response.",
        estimatedMinutes: 55,
        calculator: "allowed",
        problems: [
          {
            id: "calc-u9-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "A curve is given by x = t² and y = t³ - 3t. What is dy/dx at t = 2?",
            choices: [
              { label: "A", text: "9/4" },
              { label: "B", text: "4/9" },
              { label: "C", text: "9" },
              { label: "D", text: "18" },
            ],
            answer: "A",
            solution:
              "dx/dt = 2t and dy/dt = 3t² - 3. So dy/dx = (3t² - 3)/(2t). At t = 2 this is (12 - 3)/4 = 9/4.",
            note: "Choice C is dy/dt alone. The division by dx/dt is the whole point of the formula.",
          },
          {
            id: "calc-u9-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "A particle moves in the plane with x(t) = t² and y(t) = ln t for t > 0. What is the particle's speed at t = 1?",
            choices: [
              { label: "A", text: "1" },
              { label: "B", text: "2" },
              { label: "C", text: "3" },
              { label: "D", text: "sqrt(5)" },
            ],
            answer: "D",
            solution:
              "The velocity vector is (2t, 1/t). At t = 1 that is (2, 1), so the speed is sqrt(2² + 1²) = sqrt(5) ≈ 2.236.",
            note: "Speed is a single non-negative number. If your answer has two components, you found velocity instead.",
          },
          {
            id: "calc-u9-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt: "What is the area enclosed by the cardioid r = 1 + cos θ?",
            choices: [
              { label: "A", text: "π/2" },
              { label: "B", text: "π" },
              { label: "C", text: "3π/2" },
              { label: "D", text: "2π" },
            ],
            answer: "C",
            solution:
              "Area = (1/2) times the integral from 0 to 2π of (1 + cos θ)² dθ. Expand the square to 1 + 2cos θ + cos²θ and integrate term by term over a full period. The integral of 1 is 2π. The integral of 2cos θ is 0. Using cos²θ = (1 + cos 2θ)/2, the integral of cos²θ is (1/2)(2π) + 0 = π. The total is 2π + 0 + π = 3π, and half of that is 3π/2.",
            note: "The general cardioid r = a(1 + cos θ) encloses area 3πa²/2, a useful check.",
          },
          {
            id: "calc-u9-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "A curve is given by x = 3t² and y = 2t³ for 0 ≤ t ≤ 1. What is the length of the curve?",
            choices: [
              { label: "A", text: "2 sqrt(2) - 1" },
              { label: "B", text: "4 sqrt(2) - 2" },
              { label: "C", text: "6 sqrt(2)" },
              { label: "D", text: "2 sqrt(2) + 2" },
            ],
            answer: "B",
            solution:
              "dx/dt = 6t and dy/dt = 6t². The speed is sqrt(36t² + 36t⁴) = 6t sqrt(1 + t²) for t ≥ 0. Length = the integral from 0 to 1 of 6t sqrt(1 + t²) dt. Substituting u = 1 + t², du = 2t dt, gives 3 times the integral of sqrt(u) du = 2u^(3/2), evaluated as 2(1 + t²)^(3/2) from 0 to 1 = 2(2^(3/2)) - 2 = 4 sqrt(2) - 2 ≈ 3.657.",
          },
          {
            id: "calc-u9-p5",
            kind: "multiple-choice",
            label: "MCQ 5",
            prompt:
              "For the polar curve r = θ, what is dy/dx at θ = π/2?",
            choices: [
              { label: "A", text: "-2/π" },
              { label: "B", text: "-π/2" },
              { label: "C", text: "0" },
              { label: "D", text: "2/π" },
            ],
            answer: "A",
            solution:
              "With r = θ, dr/dθ = 1. Using dy/dx = (r' sin θ + r cos θ)/(r' cos θ - r sin θ): at θ = π/2, sin θ = 1 and cos θ = 0, so the numerator is 1(1) + (π/2)(0) = 1 and the denominator is 1(0) - (π/2)(1) = -π/2. The slope is 1/(-π/2) = -2/π ≈ -0.637.",
            note: "If you cannot recall the polar formula, reconstruct it from x = r cos θ and y = r sin θ using the product rule. That takes fifteen seconds and always works.",
          },
          {
            id: "calc-u9-p6",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "A particle moves in the xy-plane with velocity vector v(t) = (2t, 3t²) for t ≥ 0. At time t = 0 the particle is at the point (1, -2).",
            parts: [
              { label: "(a)", text: "Find the speed of the particle at t = 1." },
              { label: "(b)", text: "Find the acceleration vector at t = 1." },
              { label: "(c)", text: "Find the position of the particle at t = 2." },
              { label: "(d)", text: "Find the total distance travelled by the particle from t = 0 to t = 2. Round to three decimal places." },
            ],
            solution:
              "(a) At t = 1 the velocity is (2, 3), so the speed is sqrt(4 + 9) = sqrt(13) ≈ 3.606.\n\n(b) Differentiate component-wise: a(t) = (2, 6t), so a(1) = (2, 6).\n\n(c) Integrate each component. x(t) = 1 + the integral from 0 to t of 2s ds = 1 + t², so x(2) = 1 + 4 = 5. y(t) = -2 + the integral from 0 to t of 3s² ds = -2 + t³, so y(2) = -2 + 8 = 6. The position is (5, 6).\n\n(d) Total distance = the integral from 0 to 2 of sqrt((2t)² + (3t²)²) dt = the integral of sqrt(4t² + 9t⁴) dt = the integral of t sqrt(4 + 9t²) dt for t ≥ 0. Substituting u = 4 + 9t², du = 18t dt, the antiderivative is (1/27)(4 + 9t²)^(3/2). Evaluating from 0 to 2 gives (1/27)(40^(3/2) - 4^(3/2)) = (1/27)(80 sqrt(10) - 8) ≈ (252.982 - 8)/27 ≈ 9.073.",
            rubric: [
              { points: "1 pt", criterion: "Speed sqrt(13) at t = 1." },
              { points: "1 pt", criterion: "Acceleration vector (2, 6)." },
              { points: "2 pts", criterion: "Integrates each component with the initial position to get (5, 6)." },
              { points: "1 pt", criterion: "Correct distance integral with the speed integrand." },
              { points: "1 pt", criterion: "Value ≈ 9.073." },
            ],
            note: "On the real exam part (d) is a calculator question - set up the integral, then let the calculator finish. The exact form (80 sqrt(10) - 8)/27 is a bonus, not a requirement.",
          },
          {
            id: "calc-u9-p7",
            kind: "free-response",
            label: "FRQ 2",
            prompt:
              "Consider the polar curves r = 3 (a circle) and r = 2 + 2 cos θ (a cardioid).",
            parts: [
              { label: "(a)", text: "Find all values of θ in [0, 2π) at which the two curves intersect." },
              { label: "(b)", text: "Set up and evaluate an integral for the area of the region that is inside the cardioid and outside the circle. Give an exact value and a decimal approximation." },
            ],
            solution:
              "(a) Set 2 + 2 cos θ = 3, so cos θ = 1/2 and θ = π/3 or θ = 5π/3 (equivalently ±π/3).\n\n(b) For -π/3 < θ < π/3 we have cos θ > 1/2, so the cardioid radius 2 + 2cos θ exceeds 3 and the cardioid is the outer curve. Area = (1/2) times the integral from -π/3 to π/3 of [(2 + 2cos θ)² - 3²] dθ. Expand the square: (2 + 2cos θ)² = 4 + 8cos θ + 4cos²θ = 4 + 8cos θ + 2 + 2cos 2θ = 6 + 8cos θ + 2cos 2θ. Subtracting 9 gives -3 + 8cos θ + 2cos 2θ. The integrand is even in θ, so the area equals the integral from 0 to π/3 of (-3 + 8cos θ + 2cos 2θ) dθ, which is [-3θ + 8 sin θ + sin 2θ] from 0 to π/3 = -π + 8(sqrt(3)/2) + sqrt(3)/2 = -π + 4 sqrt(3) + sqrt(3)/2 = 9 sqrt(3)/2 - π. Numerically that is 7.794 - 3.142 ≈ 4.653.",
            rubric: [
              { points: "1 pt", criterion: "Intersections at θ = ±π/3." },
              { points: "1 pt", criterion: "Identifies the cardioid as the outer curve on that interval." },
              { points: "2 pts", criterion: "Correct (1/2)∫(R² - r²) setup with correct limits." },
              { points: "1 pt", criterion: "Correct antiderivative." },
              { points: "1 pt", criterion: "Exact value 9 sqrt(3)/2 - π and a correct decimal." },
            ],
            note: "The symmetry shortcut (integrand even, so double the half-interval and cancel the 1/2) is worth doing deliberately - it removes two chances to drop a factor of 2.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "calc-u10",
      number: "10",
      title: "Infinite Sequences and Series",
      examWeight: "15-20%",
      examWeightMidpoint: 17.5,
      classPeriods: "~17-18 class periods",
      summary:
        "The other heavyweight unit, and BC-only. There are nine convergence tests and about six memorized Maclaurin series. Students who build a one-page decision tree for 'which test do I use' in January score dramatically better in May than students who wait.",
      topics: [
        {
          id: "calc-u10-t1",
          title: "Convergence and divergence of infinite series",
          detail:
            "A series converges when its sequence of partial sums has a finite limit. The nth-term test can only prove divergence, never convergence.",
        },
        {
          id: "calc-u10-t2",
          title: "Geometric series",
          detail:
            "Converges exactly when |r| < 1, with sum (first term)/(1 - r). Be careful about whether the index starts at 0 or 1.",
        },
        {
          id: "calc-u10-t3",
          title: "The integral test, harmonic series, and p-series",
          detail:
            "Sum 1/n^p converges exactly when p > 1. The harmonic series (p = 1) diverges, which is the most-tested single fact in the unit.",
        },
        {
          id: "calc-u10-t4",
          title: "Comparison and limit comparison tests",
          detail:
            "Compare with a known p-series or geometric series. State the inequality or the limit explicitly as your justification.",
        },
        {
          id: "calc-u10-t5",
          title: "Alternating series test and the error bound",
          detail:
            "If terms decrease in magnitude to zero, the alternating series converges, and the truncation error is at most the first omitted term.",
        },
        {
          id: "calc-u10-t6",
          title: "Ratio test, absolute and conditional convergence",
          detail:
            "The ratio test is the default for factorials and powers of n. Absolute convergence is stronger than conditional.",
        },
        {
          id: "calc-u10-t7",
          title: "Taylor and Maclaurin polynomials",
          detail:
            "The nth-degree Taylor polynomial at x = a uses f(a), f'(a)/1!, f''(a)/2!, and so on as coefficients of (x - a)^k.",
        },
        {
          id: "calc-u10-t8",
          title: "Lagrange error bound",
          detail:
            "The remainder is at most M|x - a|^(n+1)/(n + 1)!, where M bounds the (n+1)st derivative on the interval between a and x.",
        },
        {
          id: "calc-u10-t9",
          title: "Radius and interval of convergence",
          detail:
            "Use the ratio test for the radius, then test each endpoint separately. Endpoints are where most points are lost.",
        },
        {
          id: "calc-u10-t10",
          title: "Known Maclaurin series and manipulating them",
          detail:
            "Memorize the series for e^x, sin x, cos x, and 1/(1 - x), then substitute, differentiate, integrate, or multiply to build new ones.",
        },
      ],
      keySkills: [
        "Geometric sum: a/(1 - r) for |r| < 1",
        "p-series: sum 1/n^p converges exactly when p > 1",
        "e^x = sum x^n/n!; sin x = x - x³/3! + x⁵/5! - ...; cos x = 1 - x²/2! + x⁴/4! - ...; 1/(1 - x) = sum x^n for |x| < 1",
        "Alternating series error bound: |remainder| ≤ magnitude of the first omitted term",
        "Lagrange error bound: |R_n(x)| ≤ M|x - a|^(n+1)/(n + 1)!",
      ],
      commonMistakes: [
        "Concluding convergence from the nth-term test. The test only ever proves divergence.",
        "Finding the radius of convergence and then forgetting to test the two endpoints.",
        "Writing the Taylor coefficient as f⁽ⁿ⁾(a) without dividing by n!.",
        "Confusing the alternating series error bound with the Lagrange error bound. They apply to different situations.",
      ],
      practiceSet: {
        id: "calc-u10-ps",
        title: "Unit 10 Practice: Sequences and Series",
        focus:
          "Geometric sums, interval of convergence with endpoints, Maclaurin coefficients, error bounds, and building a new series from a known one.",
        estimatedMinutes: 60,
        calculator: "not-permitted",
        problems: [
          {
            id: "calc-u10-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt: "What is the sum of the series 3 + 3(2/5) + 3(2/5)² + 3(2/5)³ + ... ?",
            choices: [
              { label: "A", text: "3/5" },
              { label: "B", text: "2" },
              { label: "C", text: "5" },
              { label: "D", text: "15/2" },
            ],
            answer: "C",
            solution:
              "This is geometric with first term a = 3 and ratio r = 2/5. Since |r| < 1 it converges to a/(1 - r) = 3/(1 - 2/5) = 3/(3/5) = 5.",
            note: "The most common error is using a = 3(2/5) because of miscounting the first term. Write out the first two terms and read off a and r.",
          },
          {
            id: "calc-u10-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "What is the interval of convergence of the series, summed from n = 1 to infinity, of (x - 2)^n/(n · 3^n)?",
            choices: [
              { label: "A", text: "(-1, 5)" },
              { label: "B", text: "[-1, 5)" },
              { label: "C", text: "(-1, 5]" },
              { label: "D", text: "[-1, 5]" },
            ],
            answer: "B",
            solution:
              "Ratio test: the ratio of consecutive terms has limit |x - 2|/3, so the series converges absolutely when |x - 2| < 3, that is -1 < x < 5. Now test the endpoints. At x = 5 the terms become 3^n/(n·3^n) = 1/n, the harmonic series, which diverges. At x = -1 the terms become (-3)^n/(n·3^n) = (-1)^n/n, the alternating harmonic series, which converges by the alternating series test. The interval is therefore [-1, 5).",
            note: "Endpoint testing is where this question lives. Notice that one endpoint gives the harmonic series and the other gives the alternating harmonic series - that pairing is extremely common.",
          },
          {
            id: "calc-u10-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "What is the coefficient of x³ in the Maclaurin series for e^(-2x)?",
            choices: [
              { label: "A", text: "-8" },
              { label: "B", text: "-4/3" },
              { label: "C", text: "4/3" },
              { label: "D", text: "8/6" },
            ],
            answer: "B",
            solution:
              "Substitute u = -2x into e^u = sum u^n/n!. The x³ term is (-2x)³/3! = -8x³/6 = -(4/3)x³, so the coefficient is -4/3.",
            note: "Substituting into a known series is always faster than differentiating three times. Choice A forgets the 3! in the denominator.",
          },
          {
            id: "calc-u10-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "The series 1 - 1/4 + 1/9 - 1/16 + ... (that is, the sum of (-1)^(n+1)/n²) is approximated by its first four terms. Which is the best bound on the error?",
            choices: [
              { label: "A", text: "1/16" },
              { label: "B", text: "1/25" },
              { label: "C", text: "1/36" },
              { label: "D", text: "There is no bound because the series diverges." },
            ],
            answer: "B",
            solution:
              "The terms alternate and decrease in magnitude to zero, so the alternating series error bound applies: the error is at most the magnitude of the first omitted term. The first four terms use n = 1 through 4, so the first omitted term is the n = 5 term, of magnitude 1/25 = 0.04.",
            note: "Choice A is the last term you used rather than the first one you dropped - the single most common off-by-one in the unit.",
          },
          {
            id: "calc-u10-p5",
            kind: "multiple-choice",
            label: "MCQ 5",
            prompt:
              "What is the third-degree Taylor polynomial for f(x) = ln x centered at x = 1?",
            choices: [
              { label: "A", text: "(x - 1) - (x - 1)²/2 + (x - 1)³/3" },
              { label: "B", text: "(x - 1) - (x - 1)²/2! + (x - 1)³/3!" },
              { label: "C", text: "1 + (x - 1) - (x - 1)²/2 + (x - 1)³/3" },
              { label: "D", text: "(x - 1) + (x - 1)²/2 + (x - 1)³/3" },
            ],
            answer: "A",
            solution:
              "f(1) = ln 1 = 0. f'(x) = 1/x so f'(1) = 1. f''(x) = -1/x² so f''(1) = -1, giving a coefficient of -1/2!. f'''(x) = 2/x³ so f'''(1) = 2, giving a coefficient of 2/3! = 1/3. Assembling: P₃(x) = (x - 1) - (x - 1)²/2 + (x - 1)³/3.",
            note: "Choice B looks similar but has 3! rather than 3 in the last denominator - it forgets that f'''(1) = 2 cancels part of the factorial. Choice C wrongly includes a constant term.",
          },
          {
            id: "calc-u10-p6",
            kind: "free-response",
            label: "FRQ 1",
            prompt: "Let f(x) = 1/(1 + 2x).",
            parts: [
              { label: "(a)", text: "Find the Maclaurin series for f and its interval of convergence." },
              { label: "(b)", text: "Write the first four nonzero terms of the Maclaurin series for g(x) = ln(1 + 2x)." },
              { label: "(c)", text: "Use the first two nonzero terms of the series in part (b) to approximate ln(1.2), and state whether your approximation is too large or too small." },
              { label: "(d)", text: "Add the third term and compare with the true value of ln(1.2) ≈ 0.182322." },
            ],
            solution:
              "(a) Write f(x) = 1/(1 - (-2x)) and use the geometric series 1/(1 - u) = sum uⁿ with u = -2x. So f(x) = sum from n = 0 to infinity of (-2x)ⁿ = sum (-1)ⁿ2ⁿxⁿ = 1 - 2x + 4x² - 8x³ + ... . Convergence requires |u| = |2x| < 1, so |x| < 1/2 and the interval is (-1/2, 1/2). (At x = ±1/2 the terms have magnitude 1 and do not approach 0, so both endpoints diverge.)\n\n(b) Since the derivative of ln(1 + 2x) is 2/(1 + 2x) = 2f(x), integrate the series in (a) term by term and multiply by 2: g(x) = 2 sum (-1)ⁿ2ⁿx^(n+1)/(n + 1). Writing out the first four nonzero terms gives 2x - 2x² + (8/3)x³ - 4x⁴. (Equivalently, substitute u = 2x into ln(1 + u) = u - u²/2 + u³/3 - u⁴/4.) The constant of integration is 0 because g(0) = ln 1 = 0.\n\n(c) ln(1.2) = ln(1 + 2(0.1)), so x = 0.1. The first two terms give 2(0.1) - 2(0.1)² = 0.2 - 0.02 = 0.18. The next term, +(8/3)(0.001) ≈ +0.00267, is positive, so the two-term partial sum is too small.\n\n(d) Adding the third term gives 0.18 + 0.002667 ≈ 0.182667. The true value is 0.182322, so the three-term estimate is off by about 0.00035 - much better than the two-term error of about 0.0023, and it now overshoots because the next term, -4x⁴ = -0.0004, is negative.",
            rubric: [
              { points: "1 pt", criterion: "Recognizes the geometric form with r = -2x." },
              { points: "1 pt", criterion: "Correct series and interval (-1/2, 1/2)." },
              { points: "2 pts", criterion: "Correct first four terms of the log series." },
              { points: "1 pt", criterion: "Approximation 0.18 with a correct over/under claim." },
              { points: "1 pt", criterion: "Three-term value ≈ 0.18267 with a comparison to the true value." },
            ],
            note: "Deriving new series from the geometric series is the single most reusable skill in Unit 10. Almost every series FRQ starts by recognizing 1/(1 - u).",
          },
          {
            id: "calc-u10-p7",
            kind: "free-response",
            label: "FRQ 2",
            prompt:
              "Let P₃ be the third-degree Maclaurin polynomial for f(x) = e^x.",
            parts: [
              { label: "(a)", text: "Write P₃(x) and compute P₃(0.5) as an exact fraction and a decimal." },
              { label: "(b)", text: "Use the Lagrange error bound to bound the error |e^(0.5) - P₃(0.5)|." },
              { label: "(c)", text: "Compare your bound with the actual error, given e^(0.5) ≈ 1.6487213." },
            ],
            solution:
              "(a) Every derivative of e^x at 0 is 1, so P₃(x) = 1 + x + x²/2 + x³/6. At x = 0.5: 1 + 1/2 + 1/8 + 1/48. Using a common denominator of 48 gives (48 + 24 + 6 + 1)/48 = 79/48 ≈ 1.6458333.\n\n(b) The Lagrange bound is |R₃(0.5)| ≤ M(0.5)⁴/4!, where M bounds |f⁽⁴⁾(t)| = e^t for t between 0 and 0.5. Since e^t is increasing, M = e^(0.5) ≈ 1.6487 works, giving a bound of 1.6487(0.0625)/24 ≈ 0.004294. If you prefer a cleaner bound, e^(0.5) < 2, so M = 2 gives 2(0.0625)/24 = 0.0052083.\n\n(c) The actual error is 1.6487213 - 1.6458333 ≈ 0.0028879. This is smaller than both bounds (0.004294 and 0.005208), as the theorem guarantees. Note that the error is positive because every omitted term of the series is positive, so P₃ underestimates e^(0.5).",
            rubric: [
              { points: "1 pt", criterion: "Correct P₃(x)." },
              { points: "1 pt", criterion: "P₃(0.5) = 79/48 ≈ 1.645833." },
              { points: "1 pt", criterion: "Correct Lagrange form with (0.5)⁴/4!." },
              { points: "1 pt", criterion: "Justifies the choice of M using that e^t is increasing." },
              { points: "1 pt", criterion: "Numeric bound ≈ 0.0043 (or 0.0052 with M = 2)." },
              { points: "1 pt", criterion: "Compares to the actual error 0.00289 and notes it is smaller." },
            ],
            note: "Readers want to see the M justified, not just asserted. One sentence - 'e^t is increasing on [0, 0.5] so its maximum is e^(0.5)' - earns the point.",
          },
        ],
      },
    },
  ],
};
