import type { Unit } from "@/data/types";

/**
 * CED units 1-5: Short Fiction I, Poetry I, Longer Fiction or Drama I, Short
 * Fiction II, Poetry II.
 *
 * Every practice passage in this file is original, written for this study
 * guide so that the devices the questions ask about are actually present in
 * the text. Where a canonical work is useful, it is named and described rather
 * than reproduced. Exam weightings are the CED's Section I (multiple-choice)
 * weightings; the three free-response essays are scored on the same six-point
 * analytic rubric no matter which unit the passage comes from.
 */

/** CED units 1-5: Short Fiction I, Poetry I, Longer Fiction or Drama I, Short Fiction II, Poetry II. */
export const unitsA: Unit[] = [
  /* ------------------------------------------------------------------ */
  {
    id: "lit-u1",
    number: "1",
    title: "Short Fiction I",
    examWeight: "16-20%",
    examWeightMidpoint: 18,
    classPeriods: "~18-20 class periods",
    summary:
      "The foundation unit: reading a short story closely enough that character, setting, plot order, and narration stop looking like background information and start looking like choices a writer made. The habit to build here is asking what a detail does rather than what it says.",
    cedNote: {
      tone: "info",
      text: "Unit weightings in AP English Literature apply only to Section I, the 55-question multiple-choice section. Section II is three essays scored on one six-point rubric (thesis 0-1, evidence and commentary 0-4, sophistication 0-1), so the skills in this unit are worth far more than 18% of your grade.",
    },
    topics: [
      {
        id: "lit-u1-t1",
        title: "Character revealed through specific textual detail",
        detail:
          "Mastery is pointing to the gesture, object, or word choice and saying what it implies about motive - not attaching an adjective like 'bitter' to a character and moving on.",
      },
      {
        id: "lit-u1-t2",
        title: "Character change, and the choice not to change",
        detail:
          "A character who refuses to change is doing interpretive work too. Name what the stasis costs them and what it asks the reader to judge.",
      },
      {
        id: "lit-u1-t3",
        title: "Setting as a pressure on character, not a backdrop",
        detail:
          "Where and when matters only insofar as it constrains, exposes, or contradicts someone. A described room is usually a described mind.",
      },
      {
        id: "lit-u1-t4",
        title: "Plot: the order events are told versus the order they happened",
        detail:
          "Separate the sequence of events from the sequence of telling, then ask why the writer withheld or front-loaded a particular fact.",
      },
      {
        id: "lit-u1-t5",
        title: "Narrator, speaker, and point of view",
        detail:
          "Identify grammatical person and, more importantly, whose consciousness the narration can enter. A limited third person creates gaps, and the gaps carry meaning.",
      },
      {
        id: "lit-u1-t6",
        title: "Narrative distance and reliability",
        detail:
          "Measure the space between what the narrator believes and what the text shows. Unreliability is rarely lying; it is usually limitation the reader can see past.",
      },
      {
        id: "lit-u1-t7",
        title: "Contrast, juxtaposition, and foils",
        detail:
          "When two things are set side by side, explain what the pairing makes visible that neither element would show alone.",
      },
      {
        id: "lit-u1-t8",
        title: "The analytical paragraph: claim, embedded evidence, commentary",
        detail:
          "The topic sentence should be arguable, the quotation should live inside your own grammar, and the commentary should be longer than the quotation.",
      },
    ],
    keySkills: [
      "Write a defensible thesis in the form 'the text does X in order to Y' rather than announcing a topic or listing devices",
      "Embed evidence three to eight words at a time inside your own sentence so your grammar carries the claim",
      "Convert every device you name into an effect in the same sentence: name it, then say what it makes the reader understand",
      "Distinguish what a narrator asserts from what the passage demonstrates, and argue from the gap",
      "Describe setting in functional terms ('the unwashed window narrows what he can see') instead of locational terms",
      "Sustain one line of reasoning across a paragraph: each sentence should depend on the one before it",
    ],
    commonMistakes: [
      "Retelling the story in order and calling it analysis; readers score narration of plot as no evidence at all.",
      "Device-spotting: 'the author uses imagery, diction, and syntax' with no statement of what any of them accomplishes.",
      "Quote-dumping - stacking two or three quotations with a sentence of glue and no commentary on either.",
      "A hedged non-thesis such as 'this passage contains many literary elements that reveal the character's emotions.'",
      "Labeling any first-person narrator 'unreliable' without citing the detail that exposes the limitation.",
      "Treating a described room or season as scene-setting and never asking what it reveals about the person inside it.",
    ],
    practiceSet: {
      id: "lit-u1-set",
      title: "Unit 1 Practice: Narration, Detail, and Character",
      focus:
        "Reading a narrator's selection and omission of detail as characterization, and writing a single paragraph of claim-evidence-commentary about it.",
      estimatedMinutes: 40,
      calculator: "n/a",
      problems: [
        {
          id: "lit-u1-q1",
          kind: "multiple-choice",
          label: "MCQ 1",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nMr. Pell had kept the hardware store for thirty-one years, and he liked to say that he could read a man's character off the nails he bought. The Ames boy came in on a Tuesday for a pound of two-inch finish nails and paid in coins counted twice, which Mr. Pell entered in the ledger as slow. He did not enter that the boy had swept the spilled sawdust back under the bin while he waited, or that he had asked after Mrs. Pell, who had been dead four months. The window behind the counter had not been washed since the funeral, and through it the street arrived grey and reduced, as though the town itself had thinned. When the boy had gone, Mr. Pell turned the ledger to the light and studied his own handwriting for a long while, the way a man studies a signature he is not certain is his.",
          prompt:
            "The narrator's decision to report what Mr. Pell \"did not enter\" in the ledger functions primarily to",
          choices: [
            { label: "A", text: "reveal that the Ames boy is concealing a dishonest motive" },
            { label: "B", text: "show that Mr. Pell deliberately falsifies his business records" },
            { label: "C", text: "expose how little of the boy's conduct Mr. Pell's judgment actually takes in" },
            { label: "D", text: "establish the ledger as an emblem of the town's economic decline" },
            { label: "E", text: "explain why Mr. Pell has managed to keep the store for thirty-one years" },
          ],
          answer: "C",
          solution:
            "Mr. Pell opens the passage claiming he can read character from a purchase. The narrator then lists two generous acts - sweeping the sawdust, asking after the dead wife - that never reach the ledger, while the one word that does reach it is \"slow.\" The omissions are evidence about the reader of character, not about the boy, so the detail measures the narrowness of Pell's attention.",
          note:
            "A turns the omissions into clues about the boy, which reverses whose limitation is on display. B confuses an incomplete record with a dishonest one; Pell writes down exactly what he notices, and that is the problem. D grabs the most symbolic-sounding object in the passage without checking what the passage does with it - nothing here concerns the town's economy.",
        },
        {
          id: "lit-u1-q2",
          kind: "multiple-choice",
          label: "MCQ 2",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nMr. Pell had kept the hardware store for thirty-one years, and he liked to say that he could read a man's character off the nails he bought. The Ames boy came in on a Tuesday for a pound of two-inch finish nails and paid in coins counted twice, which Mr. Pell entered in the ledger as slow. He did not enter that the boy had swept the spilled sawdust back under the bin while he waited, or that he had asked after Mrs. Pell, who had been dead four months. The window behind the counter had not been washed since the funeral, and through it the street arrived grey and reduced, as though the town itself had thinned. When the boy had gone, Mr. Pell turned the ledger to the light and studied his own handwriting for a long while, the way a man studies a signature he is not certain is his.",
          prompt:
            "The unwashed window and the street that \"arrived grey and reduced\" work together chiefly to",
          choices: [
            { label: "A", text: "situate the store in a commercial district that is failing" },
            { label: "B", text: "present the street as Pell's grief presents it, so that the setting reports his condition rather than the town's" },
            { label: "C", text: "foreshadow the sale of the hardware store" },
            { label: "D", text: "contrast the boy's youth with Pell's advanced age" },
            { label: "E", text: "fix the season in which the scene takes place" },
          ],
          answer: "B",
          solution:
            "The narration ties the greyness to a specific cause: the window \"had not been washed since the funeral,\" so the street only \"arrived\" that way after passing through Pell's neglect. The hedge \"as though the town itself had thinned\" marks the thinning as an impression rather than a fact about the town. The setting is doing characterization.",
          note:
            "A reads \"grey and reduced\" as economic reportage and ignores the window standing between Pell and the street. C invents a plot event the passage never supplies - a common trap when a detail feels ominous. E treats atmospheric language as mere scene-setting, which is exactly the reflex this unit is trying to break.",
        },
        {
          id: "lit-u1-q3",
          kind: "multiple-choice",
          label: "MCQ 3",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nMr. Pell had kept the hardware store for thirty-one years, and he liked to say that he could read a man's character off the nails he bought. The Ames boy came in on a Tuesday for a pound of two-inch finish nails and paid in coins counted twice, which Mr. Pell entered in the ledger as slow. He did not enter that the boy had swept the spilled sawdust back under the bin while he waited, or that he had asked after Mrs. Pell, who had been dead four months. The window behind the counter had not been washed since the funeral, and through it the street arrived grey and reduced, as though the town itself had thinned. When the boy had gone, Mr. Pell turned the ledger to the light and studied his own handwriting for a long while, the way a man studies a signature he is not certain is his.",
          prompt: "The ledger entry \"slow\" is ironic mainly because",
          choices: [
            { label: "A", text: "the boy in fact completed his purchase faster than the store's other customers" },
            { label: "B", text: "Pell's single word records the boy's hands and misses his attention to the room and to Pell himself" },
            { label: "C", text: "Pell's own record-keeping has grown careless in the months since his wife's death" },
            { label: "D", text: "the word describes the town more accurately than it describes any person in it" },
            { label: "E", text: "the boy will prove to be the most decisive figure in the story" },
          ],
          answer: "B",
          solution:
            "Counting the coins twice really is slow, so the entry is not factually false - it is ironically small. The same stretch of time in which the boy's hands move slowly is the stretch in which he tidies the sawdust and remembers a widower's loss, and none of that fits in the ledger's one word. The irony lies in the mismatch between an accurate label and an inadequate one.",
          note:
            "A denies the literal truth of the entry, but irony here does not require the word to be wrong. C is tempting because the unwashed window does suggest neglect, yet the ledger is precise; it is precise about the wrong things. D and E import claims the passage never makes.",
        },
        {
          id: "lit-u1-q4",
          kind: "multiple-choice",
          label: "MCQ 4",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nMr. Pell had kept the hardware store for thirty-one years, and he liked to say that he could read a man's character off the nails he bought. The Ames boy came in on a Tuesday for a pound of two-inch finish nails and paid in coins counted twice, which Mr. Pell entered in the ledger as slow. He did not enter that the boy had swept the spilled sawdust back under the bin while he waited, or that he had asked after Mrs. Pell, who had been dead four months. The window behind the counter had not been washed since the funeral, and through it the street arrived grey and reduced, as though the town itself had thinned. When the boy had gone, Mr. Pell turned the ledger to the light and studied his own handwriting for a long while, the way a man studies a signature he is not certain is his.",
          prompt:
            "The closing comparison - studying his handwriting \"the way a man studies a signature he is not certain is his\" - most nearly suggests that Pell",
          choices: [
            { label: "A", text: "suspects that someone has forged an entry in his ledger" },
            { label: "B", text: "takes quiet pride in the steadiness of his penmanship" },
            { label: "C", text: "has begun to find his own habits of judgment strange to him" },
            { label: "D", text: "intends to sell the store and settle his outstanding accounts" },
            { label: "E", text: "cannot read well enough to verify what he has written" },
          ],
          answer: "C",
          solution:
            "The simile is about self-recognition: a signature is the mark of an identity, and Pell cannot quite claim this one. Placed immediately after a page that recorded the wrong thing about a generous boy, the doubt attaches to the judging self that filled the page. The story's opening boast has quietly come apart by the last clause.",
          note:
            "A literalizes the comparison into a plot event, the most frequent error with similes in the multiple-choice section. B reverses the tone of a man staring at a page \"for a long while.\" E mistakes a figure of estrangement for a statement about literacy.",
        },
        {
          id: "lit-u1-q5",
          kind: "free-response",
          label: "FRQ 1",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nMr. Pell had kept the hardware store for thirty-one years, and he liked to say that he could read a man's character off the nails he bought. The Ames boy came in on a Tuesday for a pound of two-inch finish nails and paid in coins counted twice, which Mr. Pell entered in the ledger as slow. He did not enter that the boy had swept the spilled sawdust back under the bin while he waited, or that he had asked after Mrs. Pell, who had been dead four months. The window behind the counter had not been washed since the funeral, and through it the street arrived grey and reduced, as though the town itself had thinned. When the boy had gone, Mr. Pell turned the ledger to the light and studied his own handwriting for a long while, the way a man studies a signature he is not certain is his.",
          prompt:
            "In one paragraph of roughly 150-200 words, make and support a single defensible claim about how the narrator's selection and omission of detail characterizes Mr. Pell. Budget 15 minutes: three to write, ten to draft, two to reread for summary you can cut.",
          parts: [
            { label: "(a)", text: "Open with an arguable claim that names an interpretation, not a topic." },
            { label: "(b)", text: "Embed at least two short quotations inside your own sentences." },
            { label: "(c)", text: "After each quotation, write at least one sentence of commentary on what the choice accomplishes." },
            { label: "(d)", text: "Close by connecting the ledger to the final simile without restating your first sentence." },
          ],
          solution:
            "Model paragraph: The narrator characterizes Mr. Pell by keeping a second ledger the man himself never sees. Pell believes he can \"read a man's character off the nails he bought,\" and the narration lets that boast stand just long enough to test it: the Ames boy's purchase becomes the single word \"slow,\" while the sweeping of the sawdust and the question about a wife \"dead four months\" go unentered. The omissions are the characterization. By reporting what does not make the page, the narrator shows that Pell's system of judgment is not dishonest but starved - it registers hands and coins and cannot register attention or kindness. The same narrowness governs what he can see of the town, since the street \"arrived grey and reduced\" only after passing through a window unwashed since the funeral. So when Pell finally turns the ledger to the light and cannot be certain the handwriting is his, the estrangement is earned: the record has stopped matching the man who keeps it, and he has begun to notice.\n\nNotice that the paragraph never narrates the scene. Every sentence is a claim, and the quotations are short enough to sit inside its grammar.",
          rubric: [
            { points: "1 pt", criterion: "Thesis / claim: states a defensible interpretation about Pell's characterization rather than announcing a subject or listing devices." },
            { points: "2 pts", criterion: "Evidence: at least two specific quotations or details, quoted briefly and embedded in the writer's own sentences." },
            { points: "2 pts", criterion: "Commentary: explains how the narrator's selection and omission produce the characterization, with more commentary than quotation." },
            { points: "1 pt", criterion: "Line of reasoning: the sentences build on one another and end somewhere the first sentence did not already say." },
            { points: "0 pts", criterion: "Deduct nothing for style, but if any sentence only retells what happens, cross it out and confirm the paragraph still stands." },
          ],
          note:
            "This is a deliberately narrow version of FRQ 2, the prose fiction analysis essay. On the exam you would write four or five such paragraphs in 40 minutes, so practice the compression: one claim, short evidence, real commentary, no runway.",
        },
      ],
    },
  },
];
