import type { Course } from "../types";

/**
 * AP Physics 2: Algebra-Based.
 *
 * IMPORTANT CONTENT NOTE: the 2024 redesign restructured this course. The
 * current CED has seven assessed units, numbered 9 through 15 to follow the
 * eight units of AP Physics 1. Fluids moved OUT of Physics 2 into AP Physics 1
 * (Unit 8), a full treatment of waves and sound moved IN, and the old single
 * optics unit was split into Geometric Optics and Waves, Sound, and Physical
 * Optics. This module follows the real current structure and keeps Fluids as a
 * clearly-labeled bridge unit, because many Physics 2 students still want it.
 *
 * Every numeric answer below was computed in Python before being written down.
 * g = 9.8 m/s², k = 8.99 x 10^9 N m²/C², and the photon shortcut
 * hc = 1240 eV nm are used throughout.
 */
export const physics2: Course = {
  slug: "ap-physics-2",
  name: "AP Physics 2: Algebra-Based",
  shortName: "Physics 2",
  accent: "amber",
  tagline: "Seven units, four free-response formats, and a lot of explaining.",
  description:
    "Physics 2 is conceptually broader than Physics 1 and much lighter on algebra than you expect. Since the 2024 redesign, all four free-response questions are distinct formats - Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, and Qualitative/Quantitative Translation - and three of the four are mostly writing, drawing, and deriving. Practice explaining physics in words and sketches, not just plugging into equations.",
  examDate: "2027-05-06",
  examSession: "Session 1 - typically 8 a.m. local time",
  examSections: [
    {
      name: "Section I: Multiple Choice",
      detail: "40 single-select questions (no multiselect since the 2024 redesign)",
      weight: "50% of exam score",
      time: "1 hour 20 minutes",
      calculator: "allowed",
    },
    {
      name: "Section II, Question 1",
      detail: "Mathematical Routines - derive and calculate",
      weight: "~12.5% of exam score",
      time: "part of the 100-minute block",
      calculator: "allowed",
    },
    {
      name: "Section II, Question 2",
      detail:
        "Translation Between Representations - sketch graphs, diagrams, and bar charts and connect them to equations",
      weight: "~12.5% of exam score",
      time: "part of the 100-minute block",
      calculator: "allowed",
    },
    {
      name: "Section II, Question 3",
      detail:
        "Experimental Design and Analysis - propose a procedure, linearize data, discuss sources of error",
      weight: "~12.5% of exam score",
      time: "part of the 100-minute block",
      calculator: "allowed",
    },
    {
      name: "Section II, Question 4",
      detail:
        "Qualitative/Quantitative Translation - make a claim with reasoning, then derive an equation, then connect the two",
      weight: "~12.5% of exam score",
      time: "part of the 100-minute block",
      calculator: "allowed",
    },
  ],
  courseNotes: [
    {
      tone: "warning",
      text: "AP Physics 2 was redesigned effective 2024-25. Fluids are no longer part of AP Physics 2 - they moved to AP Physics 1 as Unit 8. Waves, sound, standing waves, and the Doppler effect moved INTO Physics 2. The units are numbered 9 through 15 in the CED so that they follow the eight Physics 1 units.",
    },
    {
      tone: "warning",
      text: "The exam also changed: 40 multiple-choice questions in 80 minutes (down from 50 in 90), no multiselect questions, and four brand-new free-response formats in 100 minutes (up from 90). Any prep book printed before 2024 has the wrong unit list and the wrong exam structure.",
    },
    {
      tone: "info",
      text: "The Fluids unit below is labeled Unit 8 and marked as not assessed. Keep it if your teacher covers it or if you want the review; skip it entirely if you are short on time before the May exam.",
    },
  ],
  resources: [
    {
      label: "The AP Physics 2 equation sheet",
      detail:
        "You get it on exam day, so stop memorizing formulas and start memorizing which formula applies when. Print it now and work every problem with it in front of you.",
    },
    {
      label: "Released free-response questions for the redesigned exam",
      detail:
        "Only the 2025 and later released questions match the four new formats. Older released FRQs are still good physics practice but do not reflect the current question types.",
    },
    {
      label: "Lab notebook",
      detail:
        "The Experimental Design and Analysis question rewards students who have actually designed experiments. For each lab you do, write down the independent variable, the dependent variable, what you held constant, and how you linearized the data.",
    },
  ],
  units: [
    /* ------------------------------------------------------------------ */
    {
      id: "phys-u8",
      number: "8",
      title: "Fluids (bridge unit - AP Physics 1 content)",
      examWeight: "Not assessed on the AP Physics 2 exam",
      examWeightMidpoint: 0,
      classPeriods: "~6-8 class periods if covered",
      summary:
        "Density, pressure, buoyancy, and fluid flow. This was Unit 1 of the old Physics 2 course; the 2024 redesign moved it to AP Physics 1 as Unit 8. It is included here as review because it is genuinely useful physics and because many courses still teach it, but it will not appear on the May 2027 Physics 2 exam.",
      cedNote: {
        tone: "warning",
        text: "NOT ASSESSED on the AP Physics 2 exam. Fluids moved to AP Physics 1 (Unit 8) in the 2024 redesign. Treat this unit as optional review.",
      },
      topics: [
        {
          id: "phys-u8-t1",
          title: "Density and pressure",
          detail:
            "Density is mass per volume; pressure is force per area. Pressure is a scalar and acts perpendicular to any surface.",
        },
        {
          id: "phys-u8-t2",
          title: "Pressure as a function of depth",
          detail:
            "Absolute pressure P = P0 + (rho)gh. Gauge pressure is the (rho)gh part alone and depends only on depth, not on container shape.",
        },
        {
          id: "phys-u8-t3",
          title: "Pascal's principle and hydraulics",
          detail:
            "Pressure applied to an enclosed fluid transmits undiminished. A hydraulic lift trades force for distance, conserving work.",
        },
        {
          id: "phys-u8-t4",
          title: "Buoyant force and Archimedes' principle",
          detail:
            "The buoyant force equals the weight of displaced fluid, (rho_fluid)(V_displaced)g. A floating object displaces its own weight.",
        },
        {
          id: "phys-u8-t5",
          title: "Floating, sinking, and fraction submerged",
          detail:
            "For a floating object, the fraction submerged equals the ratio of object density to fluid density.",
        },
        {
          id: "phys-u8-t6",
          title: "Continuity equation for incompressible flow",
          detail:
            "A1v1 = A2v2. Halving a pipe's diameter quarters its area and quadruples the speed.",
        },
        {
          id: "phys-u8-t7",
          title: "Bernoulli's equation",
          detail:
            "P + (1/2)(rho)v² + (rho)gy is constant along a streamline. Where the fluid moves faster, the pressure is lower.",
        },
      ],
      keySkills: [
        "P = P0 + (rho)gh",
        "Buoyant force = (rho_fluid)(V_displaced)g",
        "Fraction submerged = (rho_object)/(rho_fluid)",
        "Continuity: A1v1 = A2v2",
        "Torricelli: speed from a hole at depth h is sqrt(2gh)",
      ],
      commonMistakes: [
        "Using the object's own volume for V_displaced when the object floats. Only the submerged part displaces fluid.",
        "Adding atmospheric pressure when the question asks for gauge pressure.",
        "Thinking pressure depends on the total amount of fluid rather than only on depth.",
      ],
      practiceSet: {
        id: "phys-u8-ps",
        title: "Unit 8 Practice: Fluids (optional review)",
        focus:
          "Pressure with depth, buoyancy, continuity, and a floating-block calculation. Not assessed on the 2027 Physics 2 exam.",
        estimatedMinutes: 30,
        calculator: "allowed",
        problems: [
          {
            id: "phys-u8-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "What is the gauge pressure at a depth of 5.0 m in fresh water (density 1000 kg/m³)? Use g = 9.8 m/s².",
            choices: [
              { label: "A", text: "4.9 x 10³ Pa" },
              { label: "B", text: "4.9 x 10⁴ Pa" },
              { label: "C", text: "1.5 x 10⁵ Pa" },
              { label: "D", text: "9.8 x 10⁵ Pa" },
            ],
            answer: "B",
            solution:
              "Gauge pressure is (rho)gh = (1000)(9.8)(5.0) = 49,000 Pa = 4.9 x 10⁴ Pa. (The absolute pressure would be 101,325 + 49,000 = 1.5 x 10⁵ Pa, which is choice C.)",
            note: "Choice C is the absolute pressure. Read whether the question says gauge or absolute.",
          },
          {
            id: "phys-u8-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "An object of volume 0.0020 m³ is fully submerged in water. What is the magnitude of the buoyant force on it?",
            choices: [
              { label: "A", text: "2.0 N" },
              { label: "B", text: "9.8 N" },
              { label: "C", text: "19.6 N" },
              { label: "D", text: "It depends on the object's mass." },
            ],
            answer: "C",
            solution:
              "Buoyant force = (rho_fluid)(V_displaced)g = (1000)(0.0020)(9.8) = 19.6 N. Because the object is fully submerged, the displaced volume is the object's whole volume, and the object's own density and mass are irrelevant to the buoyant force.",
            note: "Choice D is the trap. Mass determines whether the object floats, but not the buoyant force when fully submerged.",
          },
          {
            id: "phys-u8-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "Water flows at 2.0 m/s through a pipe. The pipe narrows so that its diameter is halved. What is the new speed?",
            choices: [
              { label: "A", text: "1.0 m/s" },
              { label: "B", text: "4.0 m/s" },
              { label: "C", text: "8.0 m/s" },
              { label: "D", text: "16 m/s" },
            ],
            answer: "C",
            solution:
              "Cross-sectional area is proportional to diameter squared, so halving the diameter divides the area by 4. By continuity A1v1 = A2v2, the speed must multiply by 4: v2 = 4(2.0) = 8.0 m/s.",
            note: "Choice B is the answer if you scale with diameter instead of area. The squared relationship is the whole point.",
          },
          {
            id: "phys-u8-p4",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "A solid wooden cube of side length 0.20 m and density 600 kg/m³ floats in fresh water. A small hole is later opened in the side of a separate water tank 3.0 m below the water's surface.",
            parts: [
              { label: "(a)", text: "Find the cube's mass and weight." },
              { label: "(b)", text: "Find the volume of water the cube displaces while floating." },
              { label: "(c)", text: "Find the depth to which the cube sinks, and the fraction of the cube that is submerged." },
              { label: "(d)", text: "Find the speed at which water exits the hole 3.0 m below the surface of the separate tank." },
            ],
            solution:
              "(a) The volume is (0.20)³ = 0.0080 m³, so the mass is (600)(0.0080) = 4.8 kg and the weight is (4.8)(9.8) = 47.04 N, about 47 N.\n\n(b) A floating object displaces its own weight of fluid, so the buoyant force equals 47.04 N. Setting (rho_water)(V_disp)g = 47.04 gives V_disp = 47.04/((1000)(9.8)) = 0.0048 m³.\n\n(c) The horizontal cross-section is (0.20)(0.20) = 0.040 m², so the submerged depth is 0.0048/0.040 = 0.12 m. The fraction submerged is 0.0048/0.0080 = 0.60, which matches the density ratio 600/1000 = 0.60 exactly, as it must.\n\n(d) Apply Bernoulli's equation from the open top surface to the hole, where both are at atmospheric pressure and the surface speed is negligible. The pressure terms cancel and (rho)gh = (1/2)(rho)v², giving v = sqrt(2gh) = sqrt(2(9.8)(3.0)) = sqrt(58.8) = 7.7 m/s.",
            rubric: [
              { points: "1 pt", criterion: "Correct mass 4.8 kg and weight 47 N." },
              { points: "2 pts", criterion: "Sets buoyant force equal to weight and finds V_disp = 0.0048 m³." },
              { points: "2 pts", criterion: "Submerged depth 0.12 m and fraction 0.60." },
              { points: "1 pt", criterion: "Notes the fraction equals the density ratio." },
              { points: "2 pts", criterion: "Applies Bernoulli correctly and gets 7.7 m/s." },
            ],
            note: "The density-ratio shortcut in part (c) is worth internalizing: a floating object always sinks to the fraction of its depth equal to its relative density.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "phys-u9",
      number: "9",
      title: "Thermodynamics",
      examWeight: "15-18%",
      examWeightMidpoint: 16.5,
      classPeriods: "~10-16 class periods",
      summary:
        "Microscopic kinetic theory and macroscopic gas laws, joined by the first law. The single most-tested skill is reading a PV diagram: area under the curve is work, and the sign convention will decide whether you get the problem right.",
      topics: [
        {
          id: "phys-u9-t1",
          title: "Kinetic theory of temperature and pressure",
          detail:
            "Absolute temperature measures average translational kinetic energy: K_avg = (3/2)k_B T. Pressure comes from molecular collisions with the walls.",
        },
        {
          id: "phys-u9-t2",
          title: "Root-mean-square molecular speed",
          detail:
            "v_rms = sqrt(3k_B T/m) = sqrt(3RT/M). Doubling the absolute temperature multiplies v_rms by sqrt(2), not by 2.",
        },
        {
          id: "phys-u9-t3",
          title: "The ideal gas law",
          detail:
            "PV = nRT = N k_B T. Temperature must be in kelvin, always.",
        },
        {
          id: "phys-u9-t4",
          title: "PV diagrams and the four standard processes",
          detail:
            "Isothermal (constant T, hyperbola), isobaric (horizontal), isochoric (vertical), adiabatic (Q = 0, steeper than isothermal).",
        },
        {
          id: "phys-u9-t5",
          title: "Work as area under a PV curve",
          detail:
            "Work done on the gas is negative of the area under the curve. Expansion means work done by the gas; compression means work done on it.",
        },
        {
          id: "phys-u9-t6",
          title: "The first law of thermodynamics",
          detail:
            "Change in internal energy = Q + W, with W the work done ON the gas in the AP sign convention. For a closed cycle the net change in internal energy is zero.",
        },
        {
          id: "phys-u9-t7",
          title: "Internal energy of a monatomic ideal gas",
          detail:
            "U = (3/2)nRT = (3/2)PV, so any change in internal energy can be computed from the change in the product PV.",
        },
        {
          id: "phys-u9-t8",
          title: "Specific heat and latent heat",
          detail:
            "Q = mc(change in T) for temperature changes; Q = mL during a phase change, where temperature stays constant.",
        },
        {
          id: "phys-u9-t9",
          title: "Thermal conduction, convection, and radiation",
          detail:
            "Conduction rate = kA(change in T)/L. Thicker insulation lowers the rate; larger area and larger temperature difference raise it.",
        },
        {
          id: "phys-u9-t10",
          title: "Entropy and the second law",
          detail:
            "Total entropy of an isolated system never decreases. Heat spontaneously flows from hot to cold, and no cycle converts heat entirely into work.",
        },
      ],
      keySkills: [
        "PV = nRT = N k_B T, with T in kelvin",
        "K_avg = (3/2)k_B T and v_rms = sqrt(3k_B T/m)",
        "Change in U = Q + W, with W the work done on the gas",
        "For a monatomic ideal gas, U = (3/2)PV, so change in U = (3/2)(change in PV)",
        "Q = mc(change in T); conduction rate = kA(change in T)/L",
      ],
      commonMistakes: [
        "Using Celsius in the ideal gas law or in kinetic-theory formulas. Always convert to kelvin.",
        "Getting the sign of work backwards. In the AP convention W is work done on the gas, so expansion gives negative W.",
        "Saying v_rms doubles when T doubles. The square root matters.",
        "Forgetting that temperature is constant during a phase change, so Q = mc(change in T) does not apply there.",
      ],
      practiceSet: {
        id: "phys-u9-ps",
        title: "Unit 9 Practice: Thermodynamics",
        focus:
          "Kinetic theory, the ideal gas law, a complete three-process PV cycle, and calorimetry with conduction.",
        estimatedMinutes: 50,
        calculator: "allowed",
        problems: [
          {
            id: "phys-u9-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "The absolute temperature of a sample of ideal gas is doubled. By what factor does the root-mean-square speed of its molecules change?",
            choices: [
              { label: "A", text: "sqrt(2)" },
              { label: "B", text: "2" },
              { label: "C", text: "4" },
              { label: "D", text: "It does not change." },
            ],
            answer: "A",
            solution:
              "v_rms = sqrt(3k_B T/m), so v_rms is proportional to sqrt(T). Doubling T multiplies v_rms by sqrt(2), about 1.41.",
            note: "The average kinetic energy doubles (it is proportional to T), but speed goes as the square root. Both facts are tested.",
          },
          {
            id: "phys-u9-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "A gas is heated while its volume is held constant. Which statement is true?",
            choices: [
              { label: "A", text: "The work done on the gas is positive, and the internal energy decreases." },
              { label: "B", text: "No work is done, so all the heat added goes into internal energy." },
              { label: "C", text: "No work is done, and the internal energy stays constant." },
              { label: "D", text: "The gas does work on its surroundings equal to the heat added." },
            ],
            answer: "B",
            solution:
              "At constant volume the gas neither expands nor is compressed, so W = 0. The first law then gives change in U = Q. All of the added heat raises the internal energy, which for an ideal gas means the temperature rises and so does the pressure.",
            note: "On a PV diagram this is a vertical line, and the area under a vertical line is zero - a fast visual confirmation that W = 0.",
          },
          {
            id: "phys-u9-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "What is the pressure of 2.0 mol of an ideal gas occupying 0.025 m³ at 300 K? (R = 8.314 J/(mol K))",
            choices: [
              { label: "A", text: "2.0 x 10³ Pa" },
              { label: "B", text: "5.0 x 10⁴ Pa" },
              { label: "C", text: "2.0 x 10⁵ Pa" },
              { label: "D", text: "5.0 x 10⁶ Pa" },
            ],
            answer: "C",
            solution:
              "P = nRT/V = (2.0)(8.314)(300)/0.025 = 4988.4/0.025 = 199,536 Pa, which is about 2.0 x 10⁵ Pa - close to two atmospheres.",
            note: "Sanity check every gas-law answer against atmospheric pressure, 1.0 x 10⁵ Pa. If you get 10³ or 10⁷ for a lab-scale gas, you dropped a factor.",
          },
          {
            id: "phys-u9-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "How much heat is required to raise the temperature of 0.50 kg of water from 20 °C to 80 °C? (c_water = 4186 J/(kg K))",
            choices: [
              { label: "A", text: "4.2 x 10⁴ J" },
              { label: "B", text: "1.3 x 10⁵ J" },
              { label: "C", text: "1.7 x 10⁵ J" },
              { label: "D", text: "2.1 x 10⁵ J" },
            ],
            answer: "B",
            solution:
              "Q = mc(change in T) = (0.50)(4186)(60) = 125,580 J, about 1.3 x 10⁵ J. Note that a 60 °C change equals a 60 K change, so no temperature conversion is needed for a difference.",
            note: "Choice C uses the final temperature 80 instead of the change of 60 - a very common slip. Only differences matter here.",
          },
          {
            id: "phys-u9-p5",
            kind: "free-response",
            label: "FRQ 1 (Mathematical Routines)",
            prompt:
              "0.10 mol of a monatomic ideal gas is taken through the cycle A to B to C to A.\n\nState A: P = 2.0 x 10⁵ Pa, V = 0.0010 m³\nState B: P = 2.0 x 10⁵ Pa, V = 0.0030 m³\nState C: P = 1.0 x 10⁵ Pa, V = 0.0030 m³\n\nA to B is isobaric, B to C is isochoric, and C to A is isobaric.",
            parts: [
              { label: "(a)", text: "Find the temperature at each of the three states." },
              { label: "(b)", text: "For each process, find the work done on the gas, the change in internal energy, and the heat added." },
              { label: "(c)", text: "Find the net work done by the gas over the complete cycle, and confirm it equals the enclosed area on the PV diagram." },
              { label: "(d)", text: "Find the efficiency of this cycle, defined as net work done by the gas divided by total heat absorbed." },
            ],
            solution:
              "(a) From PV = nRT with n = 0.10 mol and R = 8.314:\n  T_A = (2.0 x 10⁵)(0.0010)/((0.10)(8.314)) = 200/0.8314 = 241 K.\n  T_B = (2.0 x 10⁵)(0.0030)/0.8314 = 600/0.8314 = 722 K.\n  T_C = (1.0 x 10⁵)(0.0030)/0.8314 = 300/0.8314 = 361 K.\n\n(b) For a monatomic ideal gas, change in U = (3/2)(change in PV), and W (on the gas) = -P(change in V) for constant-pressure steps.\n  A to B: change in PV = 600 - 200 = 400 J, so change in U = +600 J. W = -(2.0 x 10⁵)(0.0020) = -400 J. Then Q = change in U - W = 600 - (-400) = +1000 J.\n  B to C: volume is constant so W = 0. Change in PV = 300 - 600 = -300 J, so change in U = -450 J and Q = -450 J.\n  C to A: W = -(1.0 x 10⁵)(0.0010 - 0.0030) = +200 J. Change in PV = 200 - 300 = -100 J, so change in U = -150 J and Q = -150 - 200 = -350 J.\n  Check: the three changes in U sum to 600 - 450 - 150 = 0, as required for a closed cycle.\n\n(c) Net work on the gas is -400 + 0 + 200 = -200 J, so the gas does +200 J of work on its surroundings. The enclosed area on the PV diagram is a rectangle of height (2.0 - 1.0) x 10⁵ Pa and width (0.0030 - 0.0010) m³, giving (1.0 x 10⁵)(0.0020) = 200 J. The two agree, and the cycle runs clockwise, which confirms net work is done by the gas.\n\n(d) Heat is absorbed only in A to B, where Q = +1000 J (the other two steps release heat). Efficiency = 200/1000 = 0.20, or 20%.",
            rubric: [
              { points: "2 pts", criterion: "All three temperatures correct from PV = nRT." },
              { points: "3 pts", criterion: "Correct W for each process with the right sign convention." },
              { points: "2 pts", criterion: "Correct change in U for each process using (3/2)(change in PV)." },
              { points: "1 pt", criterion: "Correct Q for each process via the first law." },
              { points: "1 pt", criterion: "Net work 200 J matched to the enclosed rectangle area." },
              { points: "1 pt", criterion: "Efficiency 20% using only the heat absorbed." },
            ],
            note: "Using change in U = (3/2)(change in PV) instead of (3/2)nR(change in T) skips the temperature step entirely and eliminates a rounding error. Also note that the changes in U must sum to zero around any cycle - free error checking.",
          },
          {
            id: "phys-u9-p6",
            kind: "free-response",
            label: "FRQ 2 (Experimental Design and Analysis)",
            prompt:
              "A 0.150 kg aluminum block (c = 900 J/(kg K)) is heated to 200 °C and dropped into 0.300 kg of water (c = 4186 J/(kg K)) at 20 °C in an insulated calorimeter. Separately, a laboratory window of area 1.5 m², thickness 5.0 mm, and thermal conductivity 0.80 W/(m K) separates the 22 °C room from 2 °C outside air.",
            parts: [
              { label: "(a)", text: "Find the final equilibrium temperature of the aluminum-water system, stating the principle you used." },
              { label: "(b)", text: "Explain why the final temperature is much closer to the water's initial temperature than to the aluminum's." },
              { label: "(c)", text: "Find the rate of heat conduction through the window." },
              { label: "(d)", text: "A student proposes to test whether conduction rate is inversely proportional to thickness. Describe the measurements they should take and how they should graph the data to get a straight line." },
            ],
            solution:
              "(a) The calorimeter is insulated, so the heat lost by the aluminum equals the heat gained by the water: m_Al c_Al (200 - T) = m_w c_w (T - 20). Substituting, (0.150)(900)(200 - T) = (0.300)(4186)(T - 20), so 135(200 - T) = 1255.8(T - 20). Expanding gives 27,000 - 135T = 1255.8T - 25,116, so 52,116 = 1390.8T and T = 37.5 °C.\n\n(b) The relevant quantity is heat capacity, the product mc. For the aluminum that is (0.150)(900) = 135 J/K; for the water it is (0.300)(4186) = 1256 J/K, more than nine times larger. The same amount of transferred heat therefore changes the aluminum's temperature about nine times as much as the water's, so equilibrium lands close to the water's starting value.\n\n(c) Rate = kA(change in T)/L = (0.80)(1.5)(22 - 2)/0.0050 = (0.80)(1.5)(20)/0.0050 = 24/0.0050 = 4800 W, or 4.8 kW.\n\n(d) Hold the area, the material (and therefore k), and the temperature difference across the pane fixed, then measure the heat conduction rate for several panes of different thickness L - for example by measuring how much electrical power a heater must supply to hold the inside temperature steady. Record at least five (L, rate) pairs. To linearize, graph the conduction rate on the vertical axis against 1/L on the horizontal axis. If rate = kA(change in T)/L, the graph should be a straight line through the origin with slope kA(change in T), from which k can be extracted by dividing the slope by A and the temperature difference. Chief sources of error are heat leaking around the pane's edges and the temperature difference drifting during a run.",
            rubric: [
              { points: "2 pts", criterion: "States heat lost equals heat gained and sets up the equation correctly." },
              { points: "1 pt", criterion: "Final temperature 37.5 °C." },
              { points: "2 pts", criterion: "Explains using the product mc, with numbers." },
              { points: "2 pts", criterion: "Conduction rate 4800 W with correct unit conversion of 5.0 mm." },
              { points: "3 pts", criterion: "Names controlled variables, describes repeated measurements, and specifies a rate versus 1/L graph with the slope's meaning." },
            ],
            note: "Part (d) is the shape of the Experimental Design and Analysis question every year: identify the controls, then say exactly what to plot against what so that the theory predicts a straight line, then say what the slope means.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "phys-u10",
      number: "10",
      title: "Electric Force, Field, and Potential",
      examWeight: "15-18%",
      examWeightMidpoint: 16.5,
      classPeriods: "~14-21 class periods",
      summary:
        "The largest unit by class time and tied for the heaviest weighting. The recurring difficulty is keeping field (a vector) separate from potential (a scalar) - most lost points trace back to adding potentials as vectors or fields as scalars.",
      topics: [
        {
          id: "phys-u10-t1",
          title: "Electric charge and Coulomb's law",
          detail:
            "F = kq1q2/r², an inverse-square law along the line joining the charges. Like charges repel; opposite charges attract.",
        },
        {
          id: "phys-u10-t2",
          title: "Conservation of charge and methods of charging",
          detail:
            "Friction, conduction, and induction. Charge is quantized in units of e = 1.60 x 10^-19 C and is never created or destroyed.",
        },
        {
          id: "phys-u10-t3",
          title: "Polarization and conductors versus insulators",
          detail:
            "A neutral object can be attracted to a charged one through induced polarization. In a conductor at equilibrium the interior field is zero.",
        },
        {
          id: "phys-u10-t4",
          title: "Electric fields and field lines",
          detail:
            "E = F/q for a positive test charge, and E = kQ/r² for a point charge. Field lines start on positive charge and end on negative, never crossing.",
        },
        {
          id: "phys-u10-t5",
          title: "Superposition of electric fields",
          detail:
            "Add contributions as vectors. Along a line, assign signs by direction; off a line, break into components.",
        },
        {
          id: "phys-u10-t6",
          title: "Uniform fields between parallel plates",
          detail:
            "E = V/d, directed from the high-potential plate to the low. A charged particle in this region feels a constant force qE.",
        },
        {
          id: "phys-u10-t7",
          title: "Electric potential energy and electric potential",
          detail:
            "U = kq1q2/r for a pair of point charges; V = kQ/r for the potential of a point charge. Both are signed scalars that add algebraically.",
        },
        {
          id: "phys-u10-t8",
          title: "Equipotential surfaces",
          detail:
            "Equipotentials are perpendicular to field lines everywhere, and no work is required to move a charge along one.",
        },
        {
          id: "phys-u10-t9",
          title: "Capacitors, capacitance, and dielectrics",
          detail:
            "C = Q/V and C = (epsilon_0)A/d for parallel plates. Stored energy is (1/2)CV² = Q²/(2C). Inserting a dielectric multiplies C by kappa.",
        },
        {
          id: "phys-u10-t10",
          title: "Conservation of energy for moving charges",
          detail:
            "Work done by the field is q times the potential difference, and it converts into kinetic energy: qV = (1/2)mv².",
        },
      ],
      keySkills: [
        "F = kq1q2/r² and E = kQ/r², with k = 8.99 x 10⁹ N m²/C²",
        "E = V/d for a uniform field between parallel plates",
        "V = kQ/r adds as a signed scalar; E adds as a vector",
        "C = Q/V = (epsilon_0)A/d; energy stored = (1/2)CV² = Q²/(2C)",
        "Energy conservation for a charge: qV = change in kinetic energy",
      ],
      commonMistakes: [
        "Adding potentials with vector arrows or adding fields without direction. Potential is a scalar; field is a vector.",
        "Putting r instead of r² in Coulomb's law or the point-charge field.",
        "Assuming the field is zero wherever the potential is zero. At the midpoint between two equal opposite charges the potential is zero and the field is maximal.",
        "Forgetting that when a battery is disconnected, Q stays fixed and V changes; when it stays connected, V stays fixed and Q changes.",
      ],
      practiceSet: {
        id: "phys-u10-ps",
        title: "Unit 10 Practice: Electric Force, Field, Potential",
        focus:
          "Coulomb's law, field and potential superposition along a line, parallel plates, and a capacitor-with-dielectric analysis.",
        estimatedMinutes: 55,
        calculator: "allowed",
        problems: [
          {
            id: "phys-u10-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "Two point charges of +2.0 microcoulombs and -3.0 microcoulombs are 0.10 m apart. What is the magnitude and nature of the force between them?",
            choices: [
              { label: "A", text: "0.54 N, repulsive" },
              { label: "B", text: "0.54 N, attractive" },
              { label: "C", text: "5.4 N, repulsive" },
              { label: "D", text: "5.4 N, attractive" },
            ],
            answer: "D",
            solution:
              "F = kq1q2/r² = (8.99 x 10⁹)(2.0 x 10⁻⁶)(3.0 x 10⁻⁶)/(0.10)² = (8.99 x 10⁹)(6.0 x 10⁻¹²)/0.010 = 0.0539/0.010 = 5.4 N. The charges have opposite signs, so the force is attractive.",
            note: "The factor-of-10 choices exist to catch a squared-radius error: (0.10)² = 0.010, not 0.10.",
          },
          {
            id: "phys-u10-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "What is the magnitude of the electric field 0.020 m from a point charge of +5.0 nC?",
            choices: [
              { label: "A", text: "2.2 x 10³ N/C" },
              { label: "B", text: "1.1 x 10⁴ N/C" },
              { label: "C", text: "1.1 x 10⁵ N/C" },
              { label: "D", text: "2.2 x 10⁶ N/C" },
            ],
            answer: "C",
            solution:
              "E = kQ/r² = (8.99 x 10⁹)(5.0 x 10⁻⁹)/(0.020)² = 44.95/4.0 x 10⁻⁴ = 1.12 x 10⁵ N/C.",
          },
          {
            id: "phys-u10-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "Two parallel plates are separated by 4.0 mm and held at a potential difference of 120 V. What is the magnitude of the electric force on an electron placed between them?",
            choices: [
              { label: "A", text: "4.8 x 10⁻¹⁸ N" },
              { label: "B", text: "4.8 x 10⁻¹⁵ N" },
              { label: "C", text: "1.9 x 10⁻¹⁷ N" },
              { label: "D", text: "3.0 x 10⁴ N" },
            ],
            answer: "B",
            solution:
              "The field between the plates is E = V/d = 120/0.0040 = 3.0 x 10⁴ V/m. The force magnitude is F = qE = (1.60 x 10⁻¹⁹)(3.0 x 10⁴) = 4.8 x 10⁻¹⁵ N.",
            note: "Choice D is the field, not the force. Converting 4.0 mm to 0.0040 m is where most of the remaining errors happen.",
          },
          {
            id: "phys-u10-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "Two identical positive point charges are held a fixed distance apart. At the exact midpoint between them,",
            choices: [
              { label: "A", text: "the electric field is zero and the electric potential is zero." },
              { label: "B", text: "the electric field is zero and the electric potential is positive." },
              { label: "C", text: "the electric field is positive and the electric potential is zero." },
              { label: "D", text: "both the field and the potential are at a maximum." },
            ],
            answer: "B",
            solution:
              "The two field contributions have equal magnitude and point in opposite directions, so they cancel and E = 0. Potentials are scalars that add with their signs, and both charges are positive, so the potentials add to a positive value - in fact twice the potential of either charge alone.",
            note: "This item exists purely to test that you know field is a vector and potential is a scalar. Compare with two opposite charges, where the midpoint has zero potential but a nonzero field.",
          },
          {
            id: "phys-u10-p5",
            kind: "free-response",
            label: "FRQ 1 (Mathematical Routines)",
            prompt:
              "A charge q1 = +4.0 microcoulombs sits at x = 0 and a charge q2 = -2.0 microcoulombs sits at x = 0.30 m, both on the x-axis.",
            parts: [
              { label: "(a)", text: "Find the magnitude and direction of the net electric field at x = 0.10 m." },
              { label: "(b)", text: "Find the electric potential at x = 0.10 m." },
              { label: "(c)", text: "Find the work an external agent must do to bring a +1.0 microcoulomb charge from very far away to x = 0.10 m." },
              { label: "(d)", text: "Find the location on the x-axis, other than at infinity, where the net electric field is zero." },
            ],
            solution:
              "(a) From q1, at distance 0.10 m: E1 = (8.99 x 10⁹)(4.0 x 10⁻⁶)/(0.10)² = 3.60 x 10⁶ N/C, pointing away from the positive charge, so in the +x direction. From q2, at distance 0.20 m: E2 = (8.99 x 10⁹)(2.0 x 10⁻⁶)/(0.20)² = 4.50 x 10⁵ N/C, pointing toward the negative charge, also in the +x direction. Both point the same way, so the magnitudes add: E_net = 3.60 x 10⁶ + 4.50 x 10⁵ = 4.05 x 10⁶ N/C in the +x direction.\n\n(b) Potentials add as signed scalars: V = kq1/r1 + kq2/r2 = (8.99 x 10⁹)(4.0 x 10⁻⁶)/0.10 + (8.99 x 10⁹)(-2.0 x 10⁻⁶)/0.20 = 3.596 x 10⁵ - 0.899 x 10⁵ = 2.70 x 10⁵ V.\n\n(c) Work equals the change in potential energy, and the potential is zero infinitely far away, so W = qV = (1.0 x 10⁻⁶)(2.70 x 10⁵) = 0.27 J. The work is positive because the point sits at a positive potential and the test charge is positive - the external agent must push it in.\n\n(d) The field can only vanish outside the pair, on the side of the smaller-magnitude charge, so look for x > 0.30 m. Setting the magnitudes equal: k(4.0 x 10⁻⁶)/x² = k(2.0 x 10⁻⁶)/(x - 0.30)². That gives 4(x - 0.30)² = 2x², so 2(x - 0.30)² = x² and sqrt(2)(x - 0.30) = x. Solving, x(sqrt(2) - 1) = 0.30 sqrt(2), so x = 0.30 sqrt(2)/(sqrt(2) - 1) = 0.4243/0.4142 = 1.02 m. Checking: 4/(1.02)² = 3.81 and 2/(0.72)² = 3.81, so the contributions do cancel there.",
            rubric: [
              { points: "2 pts", criterion: "Both field magnitudes correct with correct directions." },
              { points: "1 pt", criterion: "Net field 4.05 x 10⁶ N/C in the +x direction." },
              { points: "2 pts", criterion: "Potential computed as a signed scalar sum, 2.70 x 10⁵ V." },
              { points: "2 pts", criterion: "Work 0.27 J with a sign explanation." },
              { points: "3 pts", criterion: "Argues the zero must lie beyond the smaller charge, sets up and solves the equation, x = 1.02 m." },
            ],
            note: "Part (d)'s reasoning step matters as much as the algebra: between two opposite charges the two fields point the same way and can never cancel, so the only candidate region is outside, beyond the weaker charge.",
          },
          {
            id: "phys-u10-p6",
            kind: "free-response",
            label: "FRQ 2 (Translation Between Representations)",
            prompt:
              "A parallel-plate capacitor has plate area 0.020 m² and plate separation 1.0 mm. It is connected to a 9.0 V battery and allowed to fully charge. (epsilon_0 = 8.85 x 10⁻¹² F/m)",
            parts: [
              { label: "(a)", text: "Find the capacitance, the charge stored, and the energy stored." },
              { label: "(b)", text: "The battery is then disconnected and a dielectric slab with kappa = 2.5 is inserted, filling the gap. Find the new capacitance, voltage, and stored energy." },
              { label: "(c)", text: "Describe the energy bar chart for the system before and after insertion, and explain where the missing energy went." },
              { label: "(d)", text: "Sketch and describe how your answers to part (b) would differ if the battery had remained connected." },
            ],
            solution:
              "(a) C = (epsilon_0)A/d = (8.85 x 10⁻¹²)(0.020)/0.0010 = 1.77 x 10⁻¹⁰ F = 177 pF. The charge is Q = CV = (1.77 x 10⁻¹⁰)(9.0) = 1.59 x 10⁻⁹ C = 1.59 nC. The stored energy is (1/2)CV² = (0.5)(1.77 x 10⁻¹⁰)(81) = 7.17 x 10⁻⁹ J.\n\n(b) With the battery disconnected, the charge on the plates cannot change. The capacitance becomes C' = (2.5)(1.77 x 10⁻¹⁰) = 4.43 x 10⁻¹⁰ F = 443 pF. Since Q is fixed, V' = Q/C' = 9.0/2.5 = 3.6 V. The stored energy is U' = Q²/(2C') = 7.17 x 10⁻⁹/2.5 = 2.87 x 10⁻⁹ J.\n\n(c) The bar for stored electric potential energy shrinks from about 7.17 nJ to about 2.87 nJ, a drop of about 4.30 nJ, while the charge bar stays the same height. The energy was not destroyed: as the slab entered the gap, the fringing field pulled it in, so the field did positive work on the slab. That work appears as kinetic energy of the slab and, once it settles, as thermal energy from the friction and vibration that stopped it. A complete bar chart adds a new bar for that energy transferred out of the field.\n\n(d) With the battery still attached, V is clamped at 9.0 V instead of Q being fixed. Then C' = 443 pF as before, but Q' = C'V = (4.43 x 10⁻¹⁰)(9.0) = 3.98 nC, which is 2.5 times the original charge, and U' = (1/2)C'V² = 1.79 x 10⁻⁸ J, which is 2.5 times the original energy. So the stored energy goes up rather than down, and the extra energy - plus an equal amount again - is supplied by the battery. The two scenarios move in opposite directions, which is exactly why identifying the fixed quantity is the first step.",
            rubric: [
              { points: "2 pts", criterion: "C = 177 pF, Q = 1.59 nC, U = 7.17 nJ." },
              { points: "1 pt", criterion: "Recognizes Q is constant when the battery is disconnected." },
              { points: "2 pts", criterion: "C' = 443 pF, V' = 3.6 V, U' = 2.87 nJ." },
              { points: "3 pts", criterion: "Describes both bar charts and accounts for the energy leaving the field as work on the slab." },
              { points: "2 pts", criterion: "Correctly reverses the analysis for the battery-connected case with V fixed." },
            ],
            note: "Ask yourself one question before any dielectric problem: is the battery connected? Battery connected means V fixed. Battery disconnected means Q fixed. Everything else follows.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "phys-u11",
      number: "11",
      title: "Electric Circuits",
      examWeight: "15-18%",
      examWeightMidpoint: 16.5,
      classPeriods: "~12-20 class periods",
      summary:
        "The redesign expanded circuits to include a fuller treatment of Kirchhoff's rules and RC circuits. The highest-yield habit is drawing a clean circuit diagram and labeling the current in every branch before touching a calculator.",
      topics: [
        {
          id: "phys-u11-t1",
          title: "Electric current and conventional current direction",
          detail:
            "I = change in charge over change in time. Conventional current flows from + to - outside the battery, opposite the electrons' drift.",
        },
        {
          id: "phys-u11-t2",
          title: "Simple circuits, EMF, and terminal voltage",
          detail:
            "A real battery has internal resistance, so terminal voltage = EMF - I(r_internal) and drops as current increases.",
        },
        {
          id: "phys-u11-t3",
          title: "Resistance, resistivity, and Ohm's law",
          detail:
            "R = (rho)L/A and V = IR. Doubling length doubles resistance; doubling diameter quarters it because area goes as diameter squared.",
        },
        {
          id: "phys-u11-t4",
          title: "Electric power",
          detail:
            "P = IV = I²R = V²/R. Pick the version that uses the two quantities you already know.",
        },
        {
          id: "phys-u11-t5",
          title: "Resistors in series and in parallel",
          detail:
            "Series resistances add and share the same current. Parallel reciprocals add and share the same voltage. Parallel resistance is always less than the smallest branch.",
        },
        {
          id: "phys-u11-t6",
          title: "Compound direct-current circuits",
          detail:
            "Collapse the network to a single equivalent resistance, find the total current, then expand back out to get branch values.",
        },
        {
          id: "phys-u11-t7",
          title: "Kirchhoff's loop rule",
          detail:
            "The algebraic sum of potential changes around any closed loop is zero. It is conservation of energy per unit charge.",
        },
        {
          id: "phys-u11-t8",
          title: "Kirchhoff's junction rule",
          detail:
            "Current in equals current out at every junction. It is conservation of charge.",
        },
        {
          id: "phys-u11-t9",
          title: "RC circuits: charging and discharging",
          detail:
            "The time constant is (tau) = RC. At t = 0 an uncharged capacitor behaves like a wire; after a long time it behaves like a break in the circuit.",
        },
      ],
      keySkills: [
        "V = IR and P = IV = I²R = V²/R",
        "Series: R_eq = R1 + R2 + ...; Parallel: 1/R_eq = 1/R1 + 1/R2 + ...",
        "R = (rho)L/A, with A proportional to diameter squared",
        "Loop rule is energy conservation; junction rule is charge conservation",
        "RC: (tau) = RC; uncharged capacitor acts as a wire at t = 0 and as an open circuit at steady state",
      ],
      commonMistakes: [
        "Adding parallel resistances directly instead of adding reciprocals.",
        "Getting a parallel equivalent resistance larger than one of the branches, which is always an arithmetic error.",
        "Treating a fully charged capacitor as though current still flows through it in steady state.",
        "Using total voltage instead of branch voltage when computing power in a single resistor.",
      ],
      practiceSet: {
        id: "phys-u11-ps",
        title: "Unit 11 Practice: Electric Circuits",
        focus:
          "Series and parallel reduction, power in individual resistors, and a full RC charging analysis.",
        estimatedMinutes: 50,
        calculator: "allowed",
        problems: [
          {
            id: "phys-u11-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "A 6.0 ohm resistor and a 3.0 ohm resistor are connected in parallel. What is the equivalent resistance?",
            choices: [
              { label: "A", text: "0.50 ohm" },
              { label: "B", text: "2.0 ohm" },
              { label: "C", text: "4.5 ohm" },
              { label: "D", text: "9.0 ohm" },
            ],
            answer: "B",
            solution:
              "1/R_eq = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, so R_eq = 2.0 ohms. Note it is less than 3.0, the smaller branch, as a parallel combination must be.",
            note: "Choice A is the reciprocal you get by forgetting to flip back at the end. Choice D is the series answer.",
          },
          {
            id: "phys-u11-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "A 4.0 ohm resistor has a 12 V potential difference across it. What power does it dissipate?",
            choices: [
              { label: "A", text: "3.0 W" },
              { label: "B", text: "12 W" },
              { label: "C", text: "36 W" },
              { label: "D", text: "48 W" },
            ],
            answer: "C",
            solution:
              "P = V²/R = 144/4.0 = 36 W. Equivalently the current is I = V/R = 3.0 A and P = IV = (3.0)(12) = 36 W.",
            note: "Choice A is the current in amps, not the power. Choice D comes from P = IV with the current mistaken for 4 A.",
          },
          {
            id: "phys-u11-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "A cylindrical wire is replaced by one of the same material and length but twice the diameter. The new resistance is",
            choices: [
              { label: "A", text: "one quarter of the original." },
              { label: "B", text: "one half of the original." },
              { label: "C", text: "twice the original." },
              { label: "D", text: "four times the original." },
            ],
            answer: "A",
            solution:
              "R = (rho)L/A and the cross-sectional area of a cylinder is proportional to the square of the diameter. Doubling the diameter multiplies the area by 4, so the resistance is divided by 4.",
          },
          {
            id: "phys-u11-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "In a series RC circuit connected to a battery, a long time after the switch closes,",
            choices: [
              { label: "A", text: "the current is at its maximum and the capacitor voltage is zero." },
              { label: "B", text: "the current is zero and the capacitor voltage equals the battery EMF." },
              { label: "C", text: "both the current and the capacitor voltage are zero." },
              { label: "D", text: "the current is constant and nonzero, and the capacitor voltage is half the EMF." },
            ],
            answer: "B",
            solution:
              "As the capacitor charges its voltage rises and opposes the battery, so the current decays exponentially toward zero. At steady state no current flows, so there is no drop across the resistor and the entire EMF appears across the capacitor.",
            note: "Choice A describes the instant the switch closes, t = 0, when an uncharged capacitor behaves like a plain wire. Knowing both limits turns most RC multiple-choice items into a two-second read.",
          },
          {
            id: "phys-u11-p5",
            kind: "free-response",
            label: "FRQ 1 (Mathematical Routines)",
            prompt:
              "An ideal 12 V battery is connected to a 4.0 ohm resistor R1 in series with a parallel combination of R2 = 6.0 ohms and R3 = 12 ohms.",
            parts: [
              { label: "(a)", text: "Find the equivalent resistance of the circuit and the total current from the battery." },
              { label: "(b)", text: "Find the potential difference across R1 and across the parallel combination." },
              { label: "(c)", text: "Find the current through R2 and through R3." },
              { label: "(d)", text: "Find the power dissipated in each resistor and verify that the total equals the power delivered by the battery." },
            ],
            solution:
              "(a) The parallel pair has 1/R_p = 1/6 + 1/12 = 2/12 + 1/12 = 3/12, so R_p = 4.0 ohms. In series with R1, the equivalent resistance is 4.0 + 4.0 = 8.0 ohms. The total current is I = 12/8.0 = 1.5 A.\n\n(b) Across R1: V1 = IR1 = (1.5)(4.0) = 6.0 V. The remainder appears across the parallel section: 12 - 6.0 = 6.0 V (which also equals IR_p = (1.5)(4.0) = 6.0 V).\n\n(c) Both parallel branches share that 6.0 V. I2 = 6.0/6.0 = 1.0 A and I3 = 6.0/12 = 0.50 A. Their sum is 1.5 A, matching the total current, as the junction rule requires.\n\n(d) P1 = I²R1 = (1.5)²(4.0) = 9.0 W. P2 = (1.0)²(6.0) = 6.0 W. P3 = (0.50)²(12) = 3.0 W. The total is 9.0 + 6.0 + 3.0 = 18 W. The battery delivers P = EMF x I = (12)(1.5) = 18 W. They agree, as energy conservation requires.",
            rubric: [
              { points: "2 pts", criterion: "R_p = 4.0 ohms and R_eq = 8.0 ohms." },
              { points: "1 pt", criterion: "Total current 1.5 A." },
              { points: "2 pts", criterion: "V1 = 6.0 V and V_parallel = 6.0 V." },
              { points: "2 pts", criterion: "I2 = 1.0 A and I3 = 0.50 A, summing to the total." },
              { points: "3 pts", criterion: "All three powers correct and matched to the battery's 18 W." },
            ],
            note: "Notice that the smaller resistor in the parallel pair carries the larger current and dissipates more power. If your answer has more current in the 12 ohm branch, you inverted a ratio.",
          },
          {
            id: "phys-u11-p6",
            kind: "free-response",
            label: "FRQ 2 (Translation Between Representations)",
            prompt:
              "A 9.0 V battery, a 2.0 kilohm resistor, and an initially uncharged 100 microfarad capacitor are connected in series with an open switch. At t = 0 the switch is closed.",
            parts: [
              { label: "(a)", text: "Find the current immediately after the switch closes, and explain your reasoning about the capacitor." },
              { label: "(b)", text: "Find the time constant of the circuit." },
              { label: "(c)", text: "Find the final charge on the capacitor and the final energy stored." },
              { label: "(d)", text: "Find the charge on the capacitor and the current in the circuit at t = 0.20 s." },
              { label: "(e)", text: "Sketch and describe graphs of current versus time and capacitor voltage versus time, labeling key values." },
            ],
            solution:
              "(a) At t = 0 the capacitor is uncharged, so it has no voltage across it and behaves like a plain wire. The full 9.0 V therefore appears across the resistor, giving I = 9.0/2000 = 4.5 x 10⁻³ A = 4.5 mA.\n\n(b) (tau) = RC = (2000)(100 x 10⁻⁶) = 0.20 s.\n\n(c) After a long time no current flows, so there is no drop across the resistor and the capacitor holds the full 9.0 V. Then Q_max = CV = (100 x 10⁻⁶)(9.0) = 9.0 x 10⁻⁴ C = 900 microcoulombs, and the stored energy is (1/2)CV² = (0.5)(100 x 10⁻⁶)(81) = 4.05 x 10⁻³ J.\n\n(d) t = 0.20 s is exactly one time constant. The charge follows Q(t) = Q_max(1 - e^(-t/tau)), so Q = 900(1 - e⁻¹) = 900(0.632) = 569 microcoulombs. The current follows I(t) = I_0 e^(-t/tau), so I = 4.5(e⁻¹) = 4.5(0.368) = 1.66 mA.\n\n(e) Current versus time starts at 4.5 mA at t = 0 and decays exponentially toward 0, passing through 1.66 mA at t = 0.20 s and being essentially zero by about 1.0 s (five time constants). Capacitor voltage versus time starts at 0, rises with decreasing slope, passes through 9.0(0.632) = 5.7 V at t = 0.20 s, and approaches the horizontal asymptote V = 9.0 V. The two curves are complementary: at every instant the resistor voltage plus the capacitor voltage equals 9.0 V, which is the loop rule holding at all times.",
            rubric: [
              { points: "2 pts", criterion: "I_0 = 4.5 mA with the reasoning that an uncharged capacitor acts as a wire." },
              { points: "1 pt", criterion: "Time constant 0.20 s." },
              { points: "2 pts", criterion: "Q_max = 900 microcoulombs and energy 4.05 mJ." },
              { points: "2 pts", criterion: "Q = 569 microcoulombs and I = 1.66 mA at one time constant." },
              { points: "3 pts", criterion: "Both graphs described with correct shapes, asymptotes, and the one-time-constant values labeled." },
            ],
            note: "The 63% and 37% values at one time constant are worth memorizing - they let you label a graph instantly without recomputing the exponential.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "phys-u12",
      number: "12",
      title: "Magnetism and Electromagnetism",
      examWeight: "12-15%",
      examWeightMidpoint: 13.5,
      classPeriods: "~10-13 class periods",
      summary:
        "Short unit, heavy on three-dimensional reasoning. Almost every question requires a right-hand rule, so build a physical habit with your actual hand rather than trying to visualize it.",
      topics: [
        {
          id: "phys-u12-t1",
          title: "Magnetic fields and field lines",
          detail:
            "Field lines form closed loops, exiting a magnet's north pole and entering its south. There are no magnetic monopoles.",
        },
        {
          id: "phys-u12-t2",
          title: "Magnetic force on a moving charge",
          detail:
            "F = qvB sin(theta), perpendicular to both v and B by the right-hand rule, with the direction reversed for negative charges.",
        },
        {
          id: "phys-u12-t3",
          title: "Why magnetic forces do no work",
          detail:
            "The force is always perpendicular to velocity, so it changes direction but never speed or kinetic energy.",
        },
        {
          id: "phys-u12-t4",
          title: "Circular motion in a uniform magnetic field",
          detail:
            "Setting qvB equal to mv²/r gives r = mv/(qB). Heavier or faster particles curve less; stronger fields curve them more.",
        },
        {
          id: "phys-u12-t5",
          title: "Velocity selectors and mass spectrometers",
          detail:
            "Crossed electric and magnetic fields pass only particles with v = E/B. A following magnetic region then sorts them by mass.",
        },
        {
          id: "phys-u12-t6",
          title: "Magnetic force on a current-carrying wire",
          detail:
            "F = BIL sin(theta). Two parallel wires with currents in the same direction attract each other.",
        },
        {
          id: "phys-u12-t7",
          title: "Magnetic field of a long straight wire",
          detail:
            "B = (mu_0)I/(2 pi r), circling the wire in the direction your right-hand fingers curl when your thumb points along the current.",
        },
        {
          id: "phys-u12-t8",
          title: "Magnetic flux",
          detail:
            "Flux = BA cos(theta), where theta is measured from the normal to the loop. Flux changes if B, A, or the orientation changes.",
        },
        {
          id: "phys-u12-t9",
          title: "Faraday's law and induced EMF",
          detail:
            "The induced EMF equals the negative rate of change of magnetic flux. A steady field through a stationary loop induces nothing.",
        },
        {
          id: "phys-u12-t10",
          title: "Lenz's law and motional EMF",
          detail:
            "The induced current opposes the flux change that created it. For a rod of length L moving at speed v, the EMF is BLv.",
        },
      ],
      keySkills: [
        "F = qvB sin(theta) and F = BIL sin(theta)",
        "Radius of circular motion: r = mv/(qB)",
        "Field of a long wire: B = (mu_0)I/(2 pi r), with mu_0 = 4 pi x 10⁻⁷ T m/A",
        "Flux = BA cos(theta); induced EMF = -(change in flux)/(change in time)",
        "Velocity selector: v = E/B",
      ],
      commonMistakes: [
        "Forgetting to reverse the right-hand rule result for a negative charge.",
        "Claiming a magnetic field does work on a moving charge. It cannot - the force is always perpendicular to the motion.",
        "Measuring the flux angle from the plane of the loop instead of from its normal.",
        "Expecting an induced current when the field is strong but unchanging. Only a changing flux induces EMF.",
      ],
      practiceSet: {
        id: "phys-u12-ps",
        title: "Unit 12 Practice: Magnetism and Induction",
        focus:
          "Magnetic force, circular radius, field of a wire, Faraday's law, and a full motional-EMF energy audit.",
        estimatedMinutes: 50,
        calculator: "allowed",
        problems: [
          {
            id: "phys-u12-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "A proton moves at 2.0 x 10⁶ m/s perpendicular to a 0.50 T magnetic field. What is the magnitude of the magnetic force on it?",
            choices: [
              { label: "A", text: "8.0 x 10⁻¹⁴ N" },
              { label: "B", text: "1.6 x 10⁻¹³ N" },
              { label: "C", text: "3.2 x 10⁻¹³ N" },
              { label: "D", text: "1.6 x 10⁻¹⁹ N" },
            ],
            answer: "B",
            solution:
              "F = qvB sin(90 degrees) = (1.60 x 10⁻¹⁹)(2.0 x 10⁶)(0.50) = 1.6 x 10⁻¹³ N.",
          },
          {
            id: "phys-u12-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "That same proton (mass 1.67 x 10⁻²⁷ kg) travels in a circle in the 0.50 T field at 2.0 x 10⁶ m/s. What is the radius of its path?",
            choices: [
              { label: "A", text: "2.1 x 10⁻³ m" },
              { label: "B", text: "4.2 x 10⁻² m" },
              { label: "C", text: "0.42 m" },
              { label: "D", text: "24 m" },
            ],
            answer: "B",
            solution:
              "Setting the magnetic force equal to the centripetal requirement, qvB = mv²/r, gives r = mv/(qB) = (1.67 x 10⁻²⁷)(2.0 x 10⁶)/((1.60 x 10⁻¹⁹)(0.50)) = 3.34 x 10⁻²¹/8.0 x 10⁻²⁰ = 4.2 x 10⁻² m, about 4.2 cm.",
            note: "Deriving r = mv/(qB) from qvB = mv²/r takes ten seconds and is safer than half-remembering the formula.",
          },
          {
            id: "phys-u12-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "What is the magnitude of the magnetic field 2.0 cm from a long straight wire carrying 5.0 A?",
            choices: [
              { label: "A", text: "5.0 x 10⁻⁵ T" },
              { label: "B", text: "1.0 x 10⁻⁴ T" },
              { label: "C", text: "3.1 x 10⁻⁴ T" },
              { label: "D", text: "5.0 x 10⁻³ T" },
            ],
            answer: "A",
            solution:
              "B = (mu_0)I/(2 pi r) = (4 pi x 10⁻⁷)(5.0)/(2 pi (0.020)). The pi cancels, leaving (2 x 10⁻⁷)(5.0)/0.020 = 1.0 x 10⁻⁶/0.020 = 5.0 x 10⁻⁵ T.",
            note: "Canceling pi first turns this into (2 x 10⁻⁷)I/r, which is a fast shortcut worth remembering.",
          },
          {
            id: "phys-u12-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "A flat 0.040 m² loop sits perpendicular to a magnetic field that increases steadily from 0.20 T to 0.50 T over 0.10 s. What is the magnitude of the average induced EMF?",
            choices: [
              { label: "A", text: "0.012 V" },
              { label: "B", text: "0.12 V" },
              { label: "C", text: "1.2 V" },
              { label: "D", text: "12 V" },
            ],
            answer: "B",
            solution:
              "The loop is perpendicular to the field, so its normal is parallel to the field and cos(theta) = 1. The flux changes from (0.20)(0.040) = 0.0080 Wb to (0.50)(0.040) = 0.020 Wb, a change of 0.012 Wb. Dividing by 0.10 s gives an EMF of 0.12 V.",
            note: "Choice A is the change in flux itself, in webers. Divide by the time interval to get volts.",
          },
          {
            id: "phys-u12-p5",
            kind: "free-response",
            label: "FRQ 1 (Qualitative/Quantitative Translation)",
            prompt:
              "A conducting rod of length 0.25 m slides at a constant 3.0 m/s along two frictionless horizontal rails connected by a 2.0 ohm resistor. A uniform 0.40 T magnetic field points out of the page, perpendicular to the plane of the rails.",
            parts: [
              { label: "(a)", text: "Without using equations, explain why a current flows and argue for the direction of the force the field exerts on the rod." },
              { label: "(b)", text: "Derive an expression for the induced EMF and compute its value." },
              { label: "(c)", text: "Find the current and the external force needed to keep the rod moving at constant speed." },
              { label: "(d)", text: "Show that the mechanical power you supply equals the electrical power dissipated in the resistor." },
            ],
            solution:
              "(a) As the rod slides, the area of the circuit enclosed between the rod, the rails, and the resistor grows, so the magnetic flux through the circuit increases. A changing flux induces an EMF and therefore a current. By Lenz's law the induced current flows in whichever sense produces a magnetic field opposing the increase - that is, into the page inside the loop. The field then exerts a force on that current-carrying rod directed opposite to the rod's motion, because the induced effects always oppose the change that produced them. Physically this must be so: if the force helped the motion, the rod would accelerate on its own while also generating electrical energy, violating conservation of energy.\n\n(b) In time (change in t) the rod sweeps out an area L v (change in t), so the flux change is B L v (change in t). Dividing by the time interval, the magnitude of the EMF is B L v. Numerically, EMF = (0.40)(0.25)(3.0) = 0.30 V.\n\n(c) The current is I = EMF/R = 0.30/2.0 = 0.15 A. The magnetic force on the rod has magnitude F = B I L = (0.40)(0.15)(0.25) = 0.015 N and opposes the motion. Since the rails are frictionless and the rod moves at constant velocity, the net force is zero, so the external force must also be 0.015 N, directed along the motion.\n\n(d) Mechanical power supplied = F v = (0.015)(3.0) = 0.045 W. Electrical power dissipated = I²R = (0.15)²(2.0) = 0.045 W. They are equal, which is the content of the argument in part (a): the work you do against the magnetic force is exactly the electrical energy that ends up as heat in the resistor.",
            rubric: [
              { points: "3 pts", criterion: "Qualitative claim with reasoning: growing area means growing flux, Lenz's law gives an opposing force, and energy conservation supports it." },
              { points: "2 pts", criterion: "Derives EMF = BLv from the swept area." },
              { points: "1 pt", criterion: "EMF = 0.30 V." },
              { points: "2 pts", criterion: "Current 0.15 A and force 0.015 N with direction." },
              { points: "2 pts", criterion: "Shows Fv = I²R = 0.045 W and connects it back to part (a)." },
            ],
            note: "This is exactly the structure of the Qualitative/Quantitative Translation question: claim and reasoning with no equations, then a derivation, then an explicit sentence connecting the two.",
          },
          {
            id: "phys-u12-p6",
            kind: "free-response",
            label: "FRQ 2 (Experimental Design and Analysis)",
            prompt:
              "A mass spectrometer first sends ions through a velocity selector with a 3.0 x 10⁴ V/m electric field and a 0.15 T magnetic field, then into a region with the same 0.15 T magnetic field where they travel in semicircles before striking a detector.",
            parts: [
              { label: "(a)", text: "Find the speed of the ions that pass straight through the velocity selector, and explain why only that speed survives." },
              { label: "(b)", text: "A singly-charged ion strikes the detector after a semicircle of radius 0.25 m. Find its mass in kilograms and in atomic mass units (1 u = 1.66 x 10⁻²⁷ kg)." },
              { label: "(c)", text: "Explain how the detector position distinguishes two isotopes of the same element." },
              { label: "(d)", text: "Identify two likely sources of experimental uncertainty and state how each would affect the measured mass." },
            ],
            solution:
              "(a) In the selector the electric force qE and the magnetic force qvB are arranged to point in opposite directions. They cancel only when qE = qvB, that is when v = E/B = (3.0 x 10⁴)/0.15 = 2.0 x 10⁵ m/s. A slower ion feels a larger electric force than magnetic force and is deflected one way; a faster ion feels a larger magnetic force and is deflected the other way. Only ions at exactly v = E/B travel in a straight line and pass through the exit slit, so the device outputs a single, known speed regardless of ion mass.\n\n(b) In the second region r = mv/(qB), so m = qBr/v = (1.60 x 10⁻¹⁹)(0.15)(0.25)/(2.0 x 10⁵) = 6.0 x 10⁻²¹/2.0 x 10⁵ = 3.0 x 10⁻²⁶ kg. In atomic mass units that is (3.0 x 10⁻²⁶)/(1.66 x 10⁻²⁷) = 18 u.\n\n(c) Isotopes have the same charge but different masses. Because r = mv/(qB) and both v and B are the same for every ion leaving the selector, the radius is directly proportional to mass. The heavier isotope therefore lands farther from the entry slit by exactly the ratio of the two masses, and measuring the two landing positions gives the mass ratio directly.\n\n(d) First, uncertainty in the magnetic field strength: B appears once in the radius equation, so a 2% error in B produces a 2% error in the computed mass, and it partly cancels because B also sets the selector speed - an overestimate of B makes v appear smaller and m appear larger. Second, uncertainty in reading the landing position, and therefore the radius: since m is proportional to r, a 1 mm error over a 250 mm radius gives a 0.4% mass error. Stray fields near the apparatus and the finite width of the exit slit (which admits a small range of speeds rather than exactly one) would both broaden the detected spot and blur the measurement.",
            rubric: [
              { points: "2 pts", criterion: "v = 2.0 x 10⁵ m/s with a correct force-balance explanation." },
              { points: "2 pts", criterion: "Mass 3.0 x 10⁻²⁶ kg from r = mv/(qB)." },
              { points: "1 pt", criterion: "Converts to 18 u." },
              { points: "2 pts", criterion: "Explains radius proportional to mass for isotope separation." },
              { points: "3 pts", criterion: "Two specific uncertainty sources with the direction or size of their effect on m." },
            ],
            note: "For part (d), vague answers like 'human error' earn nothing. Name a measured quantity, say how its uncertainty propagates, and if you can, estimate the percentage.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "phys-u13",
      number: "13",
      title: "Geometric Optics",
      examWeight: "12-15%",
      examWeightMidpoint: 13.5,
      classPeriods: "~8-12 class periods",
      summary:
        "Reflection, refraction, mirrors, and lenses - one equation and a sign convention. The 2024 redesign separated this from physical optics, so expect focused questions on ray diagrams and image characteristics.",
      topics: [
        {
          id: "phys-u13-t1",
          title: "Law of reflection and specular versus diffuse reflection",
          detail:
            "The angle of incidence equals the angle of reflection, both measured from the normal. Rough surfaces scatter in all directions.",
        },
        {
          id: "phys-u13-t2",
          title: "Plane mirror images",
          detail:
            "Virtual, upright, the same size, and as far behind the mirror as the object is in front.",
        },
        {
          id: "phys-u13-t3",
          title: "Spherical mirrors and focal length",
          detail:
            "For a spherical mirror, f = R/2. Concave mirrors have positive f and can form real images; convex mirrors have negative f and cannot.",
        },
        {
          id: "phys-u13-t4",
          title: "The mirror and lens equation",
          detail:
            "1/f = 1/d_o + 1/d_i, with magnification m = -d_i/d_o. Negative d_i means a virtual image; negative m means inverted.",
        },
        {
          id: "phys-u13-t5",
          title: "Ray diagrams",
          detail:
            "Draw the parallel ray through the focal point, the focal ray emerging parallel, and the center ray. Their intersection locates the image.",
        },
        {
          id: "phys-u13-t6",
          title: "Index of refraction and wave speed",
          detail:
            "n = c/v, so a larger index means slower light and a shorter wavelength. The frequency never changes on crossing a boundary.",
        },
        {
          id: "phys-u13-t7",
          title: "Snell's law",
          detail:
            "n1 sin(theta_1) = n2 sin(theta_2). Light entering a denser medium bends toward the normal.",
        },
        {
          id: "phys-u13-t8",
          title: "Total internal reflection and the critical angle",
          detail:
            "Possible only going from higher to lower index, when sin(theta_c) = n2/n1 is exceeded. This is how optical fibers work.",
        },
        {
          id: "phys-u13-t9",
          title: "Dispersion",
          detail:
            "Index varies slightly with wavelength, so violet bends more than red - the origin of prism spectra and rainbows.",
        },
        {
          id: "phys-u13-t10",
          title: "Converging and diverging thin lenses",
          detail:
            "A diverging lens always produces a virtual, upright, reduced image no matter where the object sits.",
        },
      ],
      keySkills: [
        "1/f = 1/d_o + 1/d_i and m = -d_i/d_o",
        "Sign conventions: concave mirror and converging lens have f > 0; virtual images have d_i < 0",
        "n = c/v; Snell's law n1 sin(theta_1) = n2 sin(theta_2)",
        "Critical angle: sin(theta_c) = n2/n1, only for n1 > n2",
        "f = R/2 for a spherical mirror",
      ],
      commonMistakes: [
        "Measuring angles from the surface instead of from the normal.",
        "Looking for total internal reflection when going from lower to higher index, where it cannot happen.",
        "Reporting a positive magnification for a real image formed by a single converging element. Real images from one lens or mirror are inverted.",
        "Saying frequency changes when light enters glass. Wavelength and speed change; frequency does not.",
      ],
      practiceSet: {
        id: "phys-u13-ps",
        title: "Unit 13 Practice: Geometric Optics",
        focus:
          "Snell's law, critical angle, the lens/mirror equation in both real and virtual cases, and image characteristics.",
        estimatedMinutes: 45,
        calculator: "allowed",
        problems: [
          {
            id: "phys-u13-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "Light travels from air (n = 1.00) into glass (n = 1.50), striking the surface at 30 degrees from the normal. What is the angle of refraction?",
            choices: [
              { label: "A", text: "13.5 degrees" },
              { label: "B", text: "19.5 degrees" },
              { label: "C", text: "30.0 degrees" },
              { label: "D", text: "48.6 degrees" },
            ],
            answer: "B",
            solution:
              "Snell's law gives (1.00) sin(30) = (1.50) sin(theta_2), so sin(theta_2) = 0.500/1.50 = 0.3333 and theta_2 = 19.5 degrees. The ray bends toward the normal, as it must when entering a denser medium.",
            note: "Choice D is 48.6 degrees, which is what you get by multiplying by 1.50 instead of dividing - light bending away from the normal into glass, which is physically impossible.",
          },
          {
            id: "phys-u13-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "What is the critical angle for light attempting to pass from water (n = 1.33) into air?",
            choices: [
              { label: "A", text: "36.9 degrees" },
              { label: "B", text: "41.3 degrees" },
              { label: "C", text: "48.8 degrees" },
              { label: "D", text: "There is no critical angle for this pair." },
            ],
            answer: "C",
            solution:
              "sin(theta_c) = n2/n1 = 1.00/1.33 = 0.7519, so theta_c = 48.8 degrees. Light striking the water-air surface at more than 48.8 degrees from the normal is totally internally reflected back into the water.",
          },
          {
            id: "phys-u13-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "An object is 15 cm in front of a converging lens of focal length 10 cm. Describe the image.",
            choices: [
              { label: "A", text: "6.0 cm from the lens, virtual, upright, reduced" },
              { label: "B", text: "30 cm from the lens, real, inverted, twice as large" },
              { label: "C", text: "30 cm from the lens, virtual, upright, twice as large" },
              { label: "D", text: "25 cm from the lens, real, inverted, the same size" },
            ],
            answer: "B",
            solution:
              "1/d_i = 1/f - 1/d_o = 1/10 - 1/15 = 3/30 - 2/30 = 1/30, so d_i = +30 cm. The positive sign means a real image on the far side. The magnification is m = -d_i/d_o = -30/15 = -2, so the image is inverted and twice as large.",
            note: "The object sits between f and 2f, which is exactly the configuration that produces a magnified real inverted image - the projector arrangement.",
          },
          {
            id: "phys-u13-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "Light with a frequency of 5.0 x 10¹⁴ Hz travels from vacuum into glass with n = 1.50. In the glass,",
            choices: [
              { label: "A", text: "the frequency becomes 3.3 x 10¹⁴ Hz and the speed becomes 2.0 x 10⁸ m/s." },
              { label: "B", text: "the frequency stays 5.0 x 10¹⁴ Hz and the speed becomes 2.0 x 10⁸ m/s." },
              { label: "C", text: "the frequency stays 5.0 x 10¹⁴ Hz and the speed stays 3.0 x 10⁸ m/s." },
              { label: "D", text: "the frequency becomes 7.5 x 10¹⁴ Hz and the wavelength increases." },
            ],
            answer: "B",
            solution:
              "Frequency is set by the source and does not change on crossing a boundary. The speed becomes v = c/n = (3.0 x 10⁸)/1.50 = 2.0 x 10⁸ m/s, and since v = f(lambda) with f fixed, the wavelength shortens by the same factor of 1.50.",
            note: "If frequency changed at a boundary, the wave crests arriving on one side would not match those leaving on the other. That physical argument is worth one sentence on a free-response question.",
          },
          {
            id: "phys-u13-p5",
            kind: "free-response",
            label: "FRQ 1 (Mathematical Routines)",
            prompt:
              "A concave mirror has a focal length of 12 cm. An object of height 4.0 cm is placed in front of it.",
            parts: [
              { label: "(a)", text: "The object is 30 cm from the mirror. Find the image distance, the magnification, the image height, and describe the image." },
              { label: "(b)", text: "The object is moved to 8.0 cm from the mirror. Repeat the analysis." },
              { label: "(c)", text: "Explain what distinguishes the two cases physically, and state the radius of curvature of this mirror." },
            ],
            solution:
              "(a) 1/d_i = 1/f - 1/d_o = 1/12 - 1/30 = 5/60 - 2/60 = 3/60 = 1/20, so d_i = +20 cm. The magnification is m = -d_i/d_o = -20/30 = -0.67, so the image height is (-0.67)(4.0) = -2.7 cm. The positive image distance means the image is real and forms in front of the mirror, 20 cm away; the negative magnification means it is inverted; and |m| < 1 means it is reduced, 2.7 cm tall.\n\n(b) 1/d_i = 1/12 - 1/8 = 2/24 - 3/24 = -1/24, so d_i = -24 cm. The magnification is m = -(-24)/8 = +3.0, giving an image height of (3.0)(4.0) = 12 cm. The negative image distance means the image is virtual and located 24 cm behind the mirror; the positive magnification means it is upright; and |m| > 1 means it is magnified to 12 cm tall.\n\n(c) The dividing line is the focal point. When the object is outside the focal length, as in part (a) with 30 cm > 12 cm, reflected rays converge and form a real, inverted image. When the object is inside the focal length, as in part (b) with 8.0 cm < 12 cm, the reflected rays diverge and only their backward extensions meet, giving a virtual, upright, magnified image - this is the shaving or makeup mirror configuration. Since f = R/2, the radius of curvature is R = 2f = 24 cm.",
            rubric: [
              { points: "2 pts", criterion: "d_i = +20 cm in part (a)." },
              { points: "2 pts", criterion: "m = -0.67, height -2.7 cm, and a correct real/inverted/reduced description." },
              { points: "2 pts", criterion: "d_i = -24 cm in part (b)." },
              { points: "2 pts", criterion: "m = +3.0, height 12 cm, and a correct virtual/upright/magnified description." },
              { points: "2 pts", criterion: "Identifies the focal point as the boundary case and gives R = 24 cm." },
            ],
            note: "Get in the habit of stating all three image characteristics - real or virtual, upright or inverted, magnified or reduced - and tying each to the sign of a computed quantity. Readers award those separately.",
          },
          {
            id: "phys-u13-p6",
            kind: "free-response",
            label: "FRQ 2 (Qualitative/Quantitative Translation)",
            prompt:
              "A diver shines a flashlight upward from underwater (n = 1.33) toward the flat water-air surface.",
            parts: [
              { label: "(a)", text: "The beam strikes the surface at 40 degrees from the normal. Find the angle at which it leaves into the air." },
              { label: "(b)", text: "The diver rotates the flashlight so the beam strikes at 50 degrees. Explain what happens, with a calculation." },
              { label: "(c)", text: "Find the critical angle, and describe qualitatively what the diver sees looking up as the angle increases past it." },
              { label: "(d)", text: "Explain how this phenomenon makes optical fibers work." },
            ],
            solution:
              "(a) Snell's law: (1.33) sin(40) = (1.00) sin(theta_air), so sin(theta_air) = (1.33)(0.6428) = 0.8549 and theta_air = 58.8 degrees. The ray bends away from the normal, as expected when entering a less dense medium.\n\n(b) Attempting the same calculation at 50 degrees gives sin(theta_air) = (1.33)(0.766) = 1.019, which is impossible since a sine cannot exceed 1. Physically this means no light refracts out: the beam undergoes total internal reflection and is reflected entirely back down into the water, obeying the law of reflection at 50 degrees on the water side.\n\n(c) The critical angle satisfies sin(theta_c) = 1.00/1.33 = 0.7519, so theta_c = 48.8 degrees. Looking up, the diver sees the entire world above the water compressed into a bright circular window - Snell's window - spanning about 49 degrees from vertical. Beyond that angle the surface behaves like a mirror, showing the diver reflections of the pool floor and objects underwater rather than the sky.\n\n(d) An optical fiber has a core of higher index surrounded by cladding of lower index. Light launched into the core at a shallow enough angle strikes the core-cladding boundary beyond the critical angle, so it is totally internally reflected with essentially no loss, over and over, and is guided along the fiber even around gentle bends. Because total internal reflection loses no energy to transmission - unlike a metal mirror, which absorbs a few percent at every bounce - signals can travel many kilometers before needing amplification.",
            rubric: [
              { points: "2 pts", criterion: "Correct Snell's law application and 58.8 degrees." },
              { points: "3 pts", criterion: "Shows sin(theta) > 1 is impossible and names total internal reflection." },
              { points: "2 pts", criterion: "Critical angle 48.8 degrees." },
              { points: "1 pt", criterion: "Describes Snell's window or the mirror-like surface." },
              { points: "2 pts", criterion: "Explains fiber optics using higher-index core, lower-index cladding, and lossless reflection." },
            ],
            note: "Getting sin(theta) > 1 is not an error - it is the answer. Write the sentence 'since the sine of an angle cannot exceed 1, no refracted ray exists and the light is totally internally reflected.'",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "phys-u14",
      number: "14",
      title: "Waves, Sound, and Physical Optics",
      examWeight: "12-15%",
      examWeightMidpoint: 13.5,
      classPeriods: "~14-23 class periods",
      summary:
        "The unit the 2024 redesign added to Physics 2, combining the full treatment of mechanical waves and sound (formerly in Physics 1) with interference and diffraction. It is the longest unit by class time in the whole course.",
      cedNote: {
        tone: "info",
        text: "This unit is new to AP Physics 2 as of the 2024 redesign. Mechanical waves, standing waves, sound, and the Doppler effect moved here from AP Physics 1, and physical optics was split off from the old combined optics unit.",
      },
      topics: [
        {
          id: "phys-u14-t1",
          title: "Wave pulses and wave properties",
          detail:
            "Transverse versus longitudinal, amplitude, wavelength, period, frequency, and the fact that waves transport energy without transporting matter.",
        },
        {
          id: "phys-u14-t2",
          title: "Periodic waves and the wave equation",
          detail:
            "v = f(lambda). Wave speed is set by the medium, so changing the source frequency changes the wavelength, not the speed.",
        },
        {
          id: "phys-u14-t3",
          title: "Boundary behavior and polarization",
          detail:
            "A pulse reflecting from a denser medium inverts; from a less dense medium it does not. Polarizing filters pass only one orientation of a transverse wave.",
        },
        {
          id: "phys-u14-t4",
          title: "Electromagnetic waves and the spectrum",
          detail:
            "All electromagnetic waves travel at c in vacuum. Order the spectrum from radio through gamma by increasing frequency and energy.",
        },
        {
          id: "phys-u14-t5",
          title: "The Doppler effect",
          detail:
            "Relative approach raises the observed frequency; relative recession lowers it. Reason about compressed or stretched wavefronts rather than memorizing the formula.",
        },
        {
          id: "phys-u14-t6",
          title: "Superposition, interference, and beats",
          detail:
            "Path differences of whole wavelengths give constructive interference; half-integer wavelengths give destructive. Beat frequency equals the difference of the two frequencies.",
        },
        {
          id: "phys-u14-t7",
          title: "Standing waves on strings and in pipes",
          detail:
            "Fixed ends and closed pipe ends are nodes; free ends and open pipe ends are antinodes. A pipe closed at one end supports only odd harmonics.",
        },
        {
          id: "phys-u14-t8",
          title: "Diffraction",
          detail:
            "Spreading is significant when the aperture is comparable to the wavelength. Narrower slits produce wider central maxima.",
        },
        {
          id: "phys-u14-t9",
          title: "Double-slit interference and diffraction gratings",
          detail:
            "Bright fringes at d sin(theta) = m(lambda), with small-angle fringe spacing (lambda)L/d. Gratings have much smaller d and therefore much wider spacing.",
        },
        {
          id: "phys-u14-t10",
          title: "Thin-film interference",
          detail:
            "Reflection off a higher-index medium adds a half-wavelength phase shift. Count shifts before deciding which path difference is constructive.",
        },
      ],
      keySkills: [
        "v = f(lambda), with v fixed by the medium",
        "Standing waves, string fixed at both ends: f_n = nv/(2L)",
        "Open pipe: f_n = nv/(2L). Closed-open pipe: f_n = nv/(4L) for odd n only",
        "Double slit: d sin(theta) = m(lambda); fringe spacing on a distant screen is (lambda)L/d",
        "Beat frequency = |f1 - f2|",
      ],
      commonMistakes: [
        "Thinking a higher-frequency source makes a wave travel faster. Speed is a property of the medium.",
        "Using the full pipe length as the fundamental wavelength. For an open-open pipe the fundamental wavelength is 2L.",
        "Expecting even harmonics from a pipe closed at one end.",
        "Forgetting the half-wavelength phase shift on reflection from a higher-index film, which flips the constructive and destructive conditions.",
      ],
      practiceSet: {
        id: "phys-u14-ps",
        title: "Unit 14 Practice: Waves, Sound, Physical Optics",
        focus:
          "The wave equation, standing waves in strings and pipes, beats, and a full double-slit-plus-grating analysis.",
        estimatedMinutes: 55,
        calculator: "allowed",
        problems: [
          {
            id: "phys-u14-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "A wave on a string has frequency 250 Hz and wavelength 0.80 m. What is its speed?",
            choices: [
              { label: "A", text: "0.0032 m/s" },
              { label: "B", text: "200 m/s" },
              { label: "C", text: "313 m/s" },
              { label: "D", text: "It cannot be determined without the string tension." },
            ],
            answer: "B",
            solution:
              "v = f(lambda) = (250)(0.80) = 200 m/s. The tension and linear density determine the speed physically, but here the speed is already pinned down by the frequency and wavelength.",
          },
          {
            id: "phys-u14-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "A 1.5 m string is fixed at both ends, and waves travel along it at 150 m/s. What is the frequency of the third harmonic?",
            choices: [
              { label: "A", text: "50 Hz" },
              { label: "B", text: "100 Hz" },
              { label: "C", text: "150 Hz" },
              { label: "D", text: "300 Hz" },
            ],
            answer: "C",
            solution:
              "For a string fixed at both ends the fundamental wavelength is 2L = 3.0 m, so f1 = v/(2L) = 150/3.0 = 50 Hz. The third harmonic is 3f1 = 150 Hz.",
            note: "Choice A is the fundamental. On a string fixed at both ends all integer harmonics are present, so the nth harmonic is just n times the fundamental.",
          },
          {
            id: "phys-u14-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "Two tuning forks at 440 Hz and 444 Hz are struck together. What beat frequency does a listener hear?",
            choices: [
              { label: "A", text: "2 Hz" },
              { label: "B", text: "4 Hz" },
              { label: "C", text: "442 Hz" },
              { label: "D", text: "884 Hz" },
            ],
            answer: "B",
            solution:
              "The beat frequency is the magnitude of the difference: |444 - 440| = 4 Hz. The listener hears a single tone near 442 Hz whose loudness pulses four times per second.",
            note: "Choice C is the perceived pitch, the average. Beats are about the difference; the pitch is about the average.",
          },
          {
            id: "phys-u14-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "Light of wavelength 600 nm passes through a double slit with separation 0.050 mm and falls on a screen 2.0 m away. What is the distance between adjacent bright fringes?",
            choices: [
              { label: "A", text: "0.24 mm" },
              { label: "B", text: "2.4 mm" },
              { label: "C", text: "2.4 cm" },
              { label: "D", text: "24 cm" },
            ],
            answer: "C",
            solution:
              "For small angles the fringe spacing is (lambda)L/d = (600 x 10⁻⁹)(2.0)/(5.0 x 10⁻⁵) = 1.2 x 10⁻⁶/5.0 x 10⁻⁵ = 0.024 m = 2.4 cm.",
            note: "The factor-of-ten choices punish unit slips. Convert 0.050 mm to 5.0 x 10⁻⁵ m and 600 nm to 6.0 x 10⁻⁷ m before you start.",
          },
          {
            id: "phys-u14-p5",
            kind: "free-response",
            label: "FRQ 1 (Mathematical Routines)",
            prompt:
              "Monochromatic light of wavelength 550 nm illuminates a double slit whose slits are 2.0 x 10⁻⁵ m apart. A screen sits 1.5 m beyond the slits.",
            parts: [
              { label: "(a)", text: "Find the angle to the first-order (m = 1) bright fringe." },
              { label: "(b)", text: "Find the angle to the second-order bright fringe." },
              { label: "(c)", text: "Find the distance from the central bright fringe to the first-order fringe on the screen." },
              { label: "(d)", text: "The double slit is replaced by a diffraction grating with 5000 lines per centimeter. Find the first-order angle and the highest order that can be observed." },
            ],
            solution:
              "(a) d sin(theta) = m(lambda) gives sin(theta) = (550 x 10⁻⁹)/(2.0 x 10⁻⁵) = 0.0275, so theta = 1.58 degrees.\n\n(b) For m = 2, sin(theta) = 2(0.0275) = 0.0550, so theta = 3.15 degrees - almost exactly twice the first-order angle, because the angles are small enough that sine and angle are nearly proportional.\n\n(c) y = L tan(theta) = (1.5) tan(1.58 degrees) = (1.5)(0.02751) = 0.0413 m, about 4.1 cm. The small-angle shortcut (lambda)L/d = (1.5)(0.0275) = 0.0413 m gives the same value here.\n\n(d) A grating with 5000 lines per centimeter has 500,000 lines per meter, so d = 1/500,000 = 2.0 x 10⁻⁶ m - one tenth the double-slit spacing. For m = 1, sin(theta) = (550 x 10⁻⁹)/(2.0 x 10⁻⁶) = 0.275, so theta = 16.0 degrees, ten times the double-slit angle. The largest observable order satisfies m(lambda)/d not exceeding 1, so m is at most d/(lambda) = (2.0 x 10⁻⁶)/(550 x 10⁻⁹) = 3.64. The highest observable order is therefore m = 3.",
            rubric: [
              { points: "2 pts", criterion: "First-order angle 1.58 degrees from d sin(theta) = m(lambda)." },
              { points: "1 pt", criterion: "Second-order angle 3.15 degrees." },
              { points: "2 pts", criterion: "Screen distance 4.1 cm with correct geometry." },
              { points: "2 pts", criterion: "Converts 5000 lines/cm to d = 2.0 x 10⁻⁶ m." },
              { points: "1 pt", criterion: "First-order grating angle 16.0 degrees." },
              { points: "2 pts", criterion: "Argues sin(theta) cannot exceed 1 and concludes m = 3." },
            ],
            note: "Part (d) is the classic grating question. The limit on order always comes from the same physical fact: sin(theta) cannot exceed 1.",
          },
          {
            id: "phys-u14-p6",
            kind: "free-response",
            label: "FRQ 2 (Translation Between Representations)",
            prompt:
              "A pipe of length 0.60 m is filled with air in which sound travels at 343 m/s.",
            parts: [
              { label: "(a)", text: "The pipe is open at both ends. Find the three lowest resonant frequencies and sketch the displacement pattern for the fundamental." },
              { label: "(b)", text: "One end is now closed. Find the three lowest resonant frequencies and describe how the pattern changes." },
              { label: "(c)", text: "Explain, in terms of nodes and antinodes, why the closed pipe supports only odd harmonics." },
              { label: "(d)", text: "The air is replaced by helium, in which sound travels about 2.9 times faster. Describe what happens to the frequencies and to the wavelengths of the standing waves." },
            ],
            solution:
              "(a) An open-open pipe has a displacement antinode at each end, so the fundamental fits half a wavelength in the pipe: lambda_1 = 2L = 1.2 m and f_1 = v/(2L) = 343/1.2 = 286 Hz. All integer multiples are allowed, so f_2 = 572 Hz and f_3 = 858 Hz. The fundamental's displacement pattern shows maximum motion at both open ends and a single node at the center of the pipe.\n\n(b) A closed-open pipe has a node at the closed end and an antinode at the open end, so the fundamental fits a quarter wavelength: lambda_1 = 4L = 2.4 m and f_1 = v/(4L) = 343/2.4 = 143 Hz - exactly half the open-pipe fundamental. Only odd multiples are allowed, so the next two are 3f_1 = 429 Hz and 5f_1 = 715 Hz. The pattern now has zero displacement at the closed end and maximum displacement at the open end.\n\n(c) The boundary conditions require a node at the closed end and an antinode at the open end, and the distance from a node to the nearest antinode is one quarter of a wavelength. The pipe length must therefore be an odd number of quarter wavelengths: L = (lambda)/4, 3(lambda)/4, 5(lambda)/4, and so on. Solving for frequency, f = nv/(4L) with n odd. An even n would demand either two nodes or two antinodes at the ends, which the physical boundary conditions forbid.\n\n(d) The standing-wave wavelengths are fixed entirely by the pipe geometry and the boundary conditions, so they do not change at all: the open-open fundamental still has lambda = 1.2 m. But v = f(lambda) with v now about 2.9 times larger forces every frequency up by that same factor - the open-pipe fundamental rises from 286 Hz to about 829 Hz. This is exactly why inhaling helium raises the pitch of your voice: your vocal tract geometry is unchanged, but sound travels faster through it.",
            rubric: [
              { points: "2 pts", criterion: "Open-open frequencies 286, 572, 858 Hz with lambda_1 = 2L." },
              { points: "2 pts", criterion: "Closed-open frequencies 143, 429, 715 Hz with lambda_1 = 4L." },
              { points: "1 pt", criterion: "Correct displacement patterns described for both cases." },
              { points: "3 pts", criterion: "Explains odd harmonics using node-to-antinode quarter-wavelength spacing." },
              { points: "2 pts", criterion: "States wavelengths unchanged and frequencies scaled by the speed ratio, with the helium example." },
            ],
            note: "Part (d) is a favorite because it separates two things students conflate. Geometry fixes the wavelength; the medium fixes the speed; frequency is whatever v = f(lambda) then requires.",
          },
        ],
      },
    },
    /* ------------------------------------------------------------------ */
    {
      id: "phys-u15",
      number: "15",
      title: "Modern Physics",
      examWeight: "12-15%",
      examWeightMidpoint: 13.5,
      classPeriods: "~14-22 class periods",
      summary:
        "Photons, atoms, and nuclei. The redesign added blackbody radiation and Compton scattering. Almost every calculation reduces to photon energy, energy-level differences, or conservation of charge and mass number.",
      cedNote: {
        tone: "info",
        text: "The CED calls this Unit 15: Modern Physics. It covers what older resources label 'Quantum, Atomic, and Nuclear Physics', plus blackbody radiation and Compton scattering, which the 2024 redesign added.",
      },
      topics: [
        {
          id: "phys-u15-t1",
          title: "Quantum theory and wave-particle duality",
          detail:
            "Light and matter both show wave and particle behavior depending on the experiment. Photon energy is E = hf = hc/(lambda).",
        },
        {
          id: "phys-u15-t2",
          title: "The de Broglie wavelength",
          detail:
            "Any particle with momentum p has wavelength (lambda) = h/p. Electrons diffract; baseballs technically do too, immeasurably.",
        },
        {
          id: "phys-u15-t3",
          title: "The Bohr model and quantized energy levels",
          detail:
            "For hydrogen, E_n = -13.6/n² eV. Only transitions between allowed levels are possible, which is why spectra are discrete.",
        },
        {
          id: "phys-u15-t4",
          title: "Emission and absorption spectra",
          detail:
            "Emission lines appear when electrons drop to lower levels; absorption lines appear at the same wavelengths when photons are taken up.",
        },
        {
          id: "phys-u15-t5",
          title: "Blackbody radiation",
          detail:
            "Every object radiates a continuous spectrum. Hotter objects radiate more total power and peak at shorter wavelengths.",
        },
        {
          id: "phys-u15-t6",
          title: "The photoelectric effect",
          detail:
            "K_max = hf - (work function). Below the threshold frequency no electrons are emitted no matter how intense the light.",
        },
        {
          id: "phys-u15-t7",
          title: "Stopping potential and intensity versus frequency",
          detail:
            "Intensity controls how many electrons are emitted; frequency controls their maximum kinetic energy. The stopping potential equals K_max divided by e.",
        },
        {
          id: "phys-u15-t8",
          title: "Compton scattering",
          detail:
            "A photon scattering off an electron transfers energy and momentum, so the scattered photon has lower energy and longer wavelength.",
        },
        {
          id: "phys-u15-t9",
          title: "Mass-energy equivalence and nuclear binding energy",
          detail:
            "E = mc². The mass defect of a nucleus, multiplied by 931.5 MeV per atomic mass unit, gives its binding energy.",
        },
        {
          id: "phys-u15-t10",
          title: "Types of radioactive decay, fission, and fusion",
          detail:
            "Alpha, beta-minus, beta-plus, and gamma decay all conserve charge and mass number. Both fission and fusion release energy by moving toward more tightly bound nuclei.",
        },
      ],
      keySkills: [
        "E = hf = hc/(lambda); the shortcut hc = 1240 eV nm gives energy in eV directly from wavelength in nm",
        "Photoelectric: K_max = hf - (work function); threshold wavelength = 1240/(work function in eV) nm",
        "Hydrogen: E_n = -13.6/n² eV, so the transition energy is 13.6(1/n_f² - 1/n_i²) in magnitude",
        "de Broglie: (lambda) = h/p, with p = sqrt(2mK) for a nonrelativistic particle",
        "Binding energy = (mass defect in u) x 931.5 MeV/u",
      ],
      commonMistakes: [
        "Mixing joules and electron volts in the same equation. Pick one system and convert first.",
        "Expecting more intense light to eject faster electrons. Intensity changes the number of electrons, not their maximum energy.",
        "Using n = 1 and n = 2 for a transition described as the second line of a series without checking which levels are involved.",
        "Failing to balance both charge and mass number in a decay equation.",
      ],
      practiceSet: {
        id: "phys-u15-ps",
        title: "Unit 15 Practice: Modern Physics",
        focus:
          "Photon energy, hydrogen transitions, de Broglie wavelength, a full photoelectric experiment, and nuclear binding energy.",
        estimatedMinutes: 55,
        calculator: "allowed",
        problems: [
          {
            id: "phys-u15-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt: "What is the energy of a photon of 500 nm light, in electron volts?",
            choices: [
              { label: "A", text: "1.24 eV" },
              { label: "B", text: "2.48 eV" },
              { label: "C", text: "3.98 eV" },
              { label: "D", text: "620 eV" },
            ],
            answer: "B",
            solution:
              "Using E = hc/(lambda) with the shortcut hc = 1240 eV nm, E = 1240/500 = 2.48 eV. In SI units this is (6.626 x 10⁻³⁴)(3.0 x 10⁸)/(500 x 10⁻⁹) = 3.98 x 10⁻¹⁹ J, which divided by 1.60 x 10⁻¹⁹ J/eV gives the same 2.48 eV.",
            note: "Choice C is the answer in units of 10⁻¹⁹ joules. Memorize hc = 1240 eV nm - it converts wavelength in nanometers to energy in electron volts in one division.",
          },
          {
            id: "phys-u15-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "Light of energy 3.5 eV strikes a metal whose work function is 2.0 eV. What is the stopping potential?",
            choices: [
              { label: "A", text: "1.5 V" },
              { label: "B", text: "2.0 V" },
              { label: "C", text: "3.5 V" },
              { label: "D", text: "5.5 V" },
            ],
            answer: "A",
            solution:
              "K_max = hf - (work function) = 3.5 - 2.0 = 1.5 eV. The stopping potential is the voltage that just halts the most energetic electron, so eV_stop = K_max and V_stop = 1.5 V.",
            note: "The numerical coincidence between K_max in eV and V_stop in volts is not luck - it is the definition of the electron volt.",
          },
          {
            id: "phys-u15-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "A hydrogen atom transitions from n = 3 to n = 2. What is the wavelength of the emitted photon?",
            choices: [
              { label: "A", text: "122 nm" },
              { label: "B", text: "365 nm" },
              { label: "C", text: "657 nm" },
              { label: "D", text: "1875 nm" },
            ],
            answer: "C",
            solution:
              "The energy released is 13.6(1/2² - 1/3²) = 13.6(0.2500 - 0.1111) = 13.6(0.1389) = 1.889 eV. The wavelength is 1240/1.889 = 657 nm, in the red part of the visible spectrum - this is the familiar H-alpha line.",
            note: "Choice A is the n = 2 to n = 1 transition (ultraviolet) and choice D is n = 4 to n = 3 (infrared). Only transitions ending at n = 2 land in the visible range for hydrogen.",
          },
          {
            id: "phys-u15-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "Uranium-238 undergoes alpha decay. What is the resulting nuclide?",
            choices: [
              { label: "A", text: "Thorium-234" },
              { label: "B", text: "Protactinium-238" },
              { label: "C", text: "Uranium-234" },
              { label: "D", text: "Neptunium-238" },
            ],
            answer: "A",
            solution:
              "An alpha particle is a helium-4 nucleus with 2 protons and 2 neutrons. The mass number drops by 4, from 238 to 234, and the atomic number drops by 2, from 92 to 90. Element 90 is thorium, so the product is thorium-234.",
            note: "Balance the two numbers separately every time: mass number on top, atomic number on the bottom. Choice C keeps the element the same, which alpha decay never does.",
          },
          {
            id: "phys-u15-p5",
            kind: "free-response",
            label: "FRQ 1 (Experimental Design and Analysis)",
            prompt:
              "A student investigates the photoelectric effect using a metal with a work function of 2.3 eV. Light of variable wavelength illuminates the metal, and the student measures the stopping potential needed to halt the most energetic photoelectrons.",
            parts: [
              { label: "(a)", text: "Find the threshold frequency and the longest wavelength of light that will eject any electrons." },
              { label: "(b)", text: "Find the maximum kinetic energy and stopping potential for 400 nm light." },
              { label: "(c)", text: "Describe how the student should graph the data so the slope gives Planck's constant, and state what the horizontal intercept means." },
              { label: "(d)", text: "Predict what happens to the measured current and the stopping potential if the light intensity is doubled at fixed wavelength, and explain why." },
            ],
            solution:
              "(a) Emission begins when the photon energy just equals the work function. The threshold frequency is f_0 = (work function)/h = (2.3)(1.602 x 10⁻¹⁹)/(6.626 x 10⁻³⁴) = 5.56 x 10¹⁴ Hz. The corresponding longest wavelength is 1240/2.3 = 539 nm, in the green part of the spectrum, so red light will not eject electrons from this metal no matter how bright it is.\n\n(b) The photon energy is 1240/400 = 3.10 eV. Then K_max = 3.10 - 2.3 = 0.80 eV, and the stopping potential is 0.80 V.\n\n(c) Plot the maximum kinetic energy of the photoelectrons (equivalently e times the stopping potential) on the vertical axis against the light frequency on the horizontal axis. Since K_max = hf - (work function), the graph is a straight line whose slope is Planck's constant h and whose vertical intercept is the negative of the work function. The horizontal intercept is the threshold frequency f_0 - the frequency at which K_max reaches zero, below which no electrons are emitted at all. Data should span several frequencies above threshold, and each stopping potential should be measured several times and averaged.\n\n(d) Doubling the intensity at fixed wavelength roughly doubles the number of photons arriving per second, so roughly twice as many electrons are ejected per second and the measured photocurrent approximately doubles. The stopping potential does not change at all, because each electron is still ejected by a single photon of the same energy, so K_max is unchanged. This intensity-independence of K_max is precisely the observation that classical wave theory could not explain and that the photon model does.",
            rubric: [
              { points: "2 pts", criterion: "Threshold frequency 5.56 x 10¹⁴ Hz and wavelength 539 nm." },
              { points: "2 pts", criterion: "K_max = 0.80 eV and stopping potential 0.80 V for 400 nm." },
              { points: "3 pts", criterion: "Specifies K_max versus frequency, identifies slope as h, and interprets the horizontal intercept as f_0." },
              { points: "3 pts", criterion: "Current doubles, stopping potential unchanged, with a photon-model explanation." },
            ],
            note: "Part (d) is the conceptual core of the whole unit. If you can explain why K_max is independent of intensity, you can answer most photoelectric questions without a calculator.",
          },
          {
            id: "phys-u15-p6",
            kind: "free-response",
            label: "FRQ 2 (Mathematical Routines)",
            prompt:
              "Consider nuclear structure and decay. Use m_proton = 1.00728 u, m_neutron = 1.00866 u, the nuclear mass of helium-4 = 4.00151 u, and 1 u = 931.5 MeV/c².",
            parts: [
              { label: "(a)", text: "Write the balanced nuclear equation for the alpha decay of uranium-238 and for the beta-minus decay of carbon-14." },
              { label: "(b)", text: "Find the mass defect of a helium-4 nucleus." },
              { label: "(c)", text: "Find the total binding energy and the binding energy per nucleon of helium-4." },
              { label: "(d)", text: "An electron is accelerated from rest through 100 V. Find its de Broglie wavelength. (m_electron = 9.11 x 10⁻³¹ kg)" },
            ],
            solution:
              "(a) Alpha decay of uranium-238: uranium-238 (Z = 92) becomes thorium-234 (Z = 90) plus a helium-4 nucleus. Mass numbers: 238 = 234 + 4. Charges: 92 = 90 + 2. Beta-minus decay of carbon-14: carbon-14 (Z = 6) becomes nitrogen-14 (Z = 7) plus an electron plus an antineutrino. Mass numbers: 14 = 14 + 0. Charges: 6 = 7 + (-1). In beta-minus decay a neutron converts into a proton, so the mass number is unchanged while the atomic number rises by one.\n\n(b) The separated constituents of helium-4 are 2 protons and 2 neutrons: 2(1.00728) + 2(1.00866) = 2.01456 + 2.01732 = 4.03188 u. The assembled nucleus has mass 4.00151 u, so the mass defect is 4.03188 - 4.00151 = 0.03037 u.\n\n(c) Binding energy = (0.03037)(931.5) = 28.3 MeV. Dividing by the 4 nucleons gives about 7.07 MeV per nucleon, which is unusually high for such a light nucleus and is why helium-4 is so stable and why alpha particles are emitted as intact units.\n\n(d) The kinetic energy gained is K = eV = 100 eV = (100)(1.602 x 10⁻¹⁹) = 1.602 x 10⁻¹⁷ J. Nonrelativistically, p = sqrt(2mK) = sqrt(2(9.11 x 10⁻³¹)(1.602 x 10⁻¹⁷)) = sqrt(2.919 x 10⁻⁴⁷) = 5.40 x 10⁻²⁴ kg m/s. Then (lambda) = h/p = (6.626 x 10⁻³⁴)/(5.40 x 10⁻²⁴) = 1.23 x 10⁻¹⁰ m, about 0.12 nm - comparable to atomic spacing in a crystal, which is exactly why 100 eV electrons diffract off crystals.",
            rubric: [
              { points: "3 pts", criterion: "Both decay equations balanced in mass number and charge, with the antineutrino noted." },
              { points: "2 pts", criterion: "Mass defect 0.03037 u from correctly summed constituents." },
              { points: "2 pts", criterion: "Binding energy 28.3 MeV and 7.07 MeV per nucleon." },
              { points: "3 pts", criterion: "Momentum from p = sqrt(2mK) and wavelength 0.12 nm." },
            ],
            note: "In part (d), do not use (lambda) = h/(mv) with v computed separately unless you have to - p = sqrt(2mK) goes straight from energy to momentum in one step and avoids a rounding cascade.",
          },
        ],
      },
    },
  ],
};
