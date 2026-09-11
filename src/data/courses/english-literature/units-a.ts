import type { Unit } from "@/data/types";

/**
 * CED units 1-5: Short Fiction I, Poetry I, Longer Fiction or Drama I, Short
 * Fiction II, Poetry II.
 *
 * Every practice passage in this file is original, written for this study
 * guide so that the devices the questions ask about are actually present in
 * the text. Where a canonical work is useful, it is named and described rather
 * than reproduced. Exam weightings follow the CED's Section I (multiple-choice)
 * genre groups - short fiction 42-49%, poetry 36-45%, longer fiction or drama
 * 15-18% - with a one-third midpoint so unit bars stay comparable. The three
 * free-response essays are scored on the same six-point analytic rubric no
 * matter which unit the passage comes from.
 */

/** CED units 1-5: Short Fiction I, Poetry I, Longer Fiction or Drama I, Short Fiction II, Poetry II. */
export const unitsA: Unit[] = [
  /* ------------------------------------------------------------------ */
  {
    id: "lit-u1",
    number: "1",
    title: "Short Fiction I",
    examWeight: "42-49% of MCQ (U1, 4, 7)",
    examWeightMidpoint: 15,
    classPeriods: "~10 class periods",
    summary:
      "The foundation unit: reading a short story closely enough that character, setting, plot order, and narration stop looking like background information and start looking like choices a writer made. The habit to build here is asking what a detail does rather than what it says.",
    cedNote: {
      tone: "info",
      text: "The CED publishes Section I weightings by genre, not by unit: short fiction (Units 1, 4, 7) is 42-49% of the multiple-choice section. Each short-fiction card shows that group range and a one-third midpoint so the bars stay comparable across the nine units. Section II is three essays on one six-point rubric (thesis 0-1, evidence and commentary 0-4, sophistication 0-1), so these skills are worth far more than the bar suggests.",
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
            { points: "Row A: 0-1 pt", criterion: "Thesis - responds to the prompt with a defensible interpretation of how the narrator's selection and omission characterize Pell. A restatement of the prompt, a summary of the visit, or a list of devices earns 0." },
            { points: "Row B: 0-4 pts", criterion: "Evidence and Commentary - selects specific textual evidence and explains how it supports a line of reasoning. Brief embedded quotations; commentary longer than quotation; the sentences should end somewhere the first sentence did not already say. 4 points requires consistent explanation of the how, not the what." },
            { points: "Row C: 0-1 pt", criterion: "Sophistication - earned by accounting for a tension in the passage (the ledger's precision about the wrong things, or the final simile of unrecognized handwriting) rather than by elevated vocabulary." },
            { points: "Self-check", criterion: "If any sentence only retells what happens, cross it out and confirm the paragraph still stands. If a sentence could be deleted without losing an argument, it was paraphrase." },
          ],
          note:
            "This is a deliberately narrow version of FRQ 2, the prose fiction analysis essay. On the exam you would write four or five such paragraphs in 40 minutes, so practice the compression: one claim, short evidence, real commentary, no runway.",
        },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  {
    id: "lit-u2",
    number: "2",
    title: "Poetry I",
    examWeight: "36-45% of MCQ (U2, 5, 8)",
    examWeightMidpoint: 13.5,
    classPeriods: "~10 class periods",
    summary:
      "Poetry read as a made object: a constructed speaker, lines that end where the poet decided they should end, and comparisons that do argumentative work. The unit also introduces the defensible thesis, which is the one point on the essay rubric you can win in a single sentence.",
    topics: [
      {
        id: "lit-u2-t1",
        title: "The speaker is not the poet",
        detail:
          "Treat the voice as a character whose attitude you infer from diction and detail. Writing 'the poet feels' throws away the gap between a constructed speaker and a biography you do not have.",
      },
      {
        id: "lit-u2-t2",
        title: "Lineation and enjambment",
        detail:
          "A line break suspends a phrase mid-thought and puts weight on the last word before the drop; an end-stopped line closes a unit of sense. Mastery is naming the word the break isolates and what that isolation does.",
      },
      {
        id: "lit-u2-t3",
        title: "Stanza units, structure, and the turn",
        detail:
          "Stanzas work like paragraphs of an argument. Find the place where the poem's stance, tense, or agency changes, and treat that hinge as the poem's thesis about itself.",
      },
      {
        id: "lit-u2-t4",
        title: "Diction and connotation",
        detail:
          "Ask what a word drags in behind it. A choice is analyzable only against the near-synonym the poet rejected - 'shut' instead of 'closed,' 'stubborn' instead of 'persistent.'",
      },
      {
        id: "lit-u2-t5",
        title: "Imagery and concrete detail",
        detail:
          "Images are sensory, specific, and interpretable; 'imagery of sadness' is not an image. Point to the thing the poem makes you see, then say what seeing it costs or reveals.",
      },
      {
        id: "lit-u2-t6",
        title: "Simile and metaphor as compressed argument",
        detail:
          "Every comparison has a subject and a vehicle, and the vehicle imports associations. Explain what the comparison claims that plain statement could not, rather than labeling it decorative.",
      },
      {
        id: "lit-u2-t7",
        title: "Personification and the redistribution of agency",
        detail:
          "When a poem gives will to weather, plants, or objects, someone in the poem is losing control. Track who acts and who is acted upon.",
      },
      {
        id: "lit-u2-t8",
        title: "Syntax in verse: inversion, suspension, and where the subject arrives",
        detail:
          "Sentences in poems often stretch across several lines. Find the main verb, notice what is delayed, and explain why the delay matters.",
      },
      {
        id: "lit-u2-t9",
        title: "Writing a defensible thesis about a poem",
        detail:
          "A thesis states an interpretation someone could argue with and previews a line of reasoning. 'The poet uses imagery and metaphor' is a list, not a claim.",
      },
    ],
    keySkills: [
      "Paraphrase the poem literally first, in plain prose, before making any claim about its meaning",
      "Name the exact word a line break isolates, then explain the emphasis the break creates",
      "Unpack a comparison in two steps: what is being compared, and what the vehicle imports that a literal statement would not",
      "Locate the poem's turn and build the thesis around the change rather than around the topic",
      "Attribute attitude to the speaker, using speaker-specific language ('the speaker admits,' not 'the poet feels')",
      "Write a thesis that could be disagreed with, then make each body paragraph prove one part of it",
    ],
    commonMistakes: [
      "Paraphrasing the poem line by line and calling it analysis; a walkthrough earns evidence credit but almost no commentary credit.",
      "Naming devices in a list - 'the poem uses enjambment, metaphor, and personification' - without saying what any of them accomplishes.",
      "Collapsing speaker into poet and then arguing about the poet's biography instead of the text.",
      "Claiming a device the poem does not contain (finding 'rhyme scheme' in free verse) because it is the device you know how to discuss.",
      "Writing a thesis nobody could disagree with, such as 'the poem shows the speaker's complicated emotions about family.'",
      "Quoting a whole stanza as a block and then commenting on only its last word.",
    ],
    practiceSet: {
      id: "lit-u2-set",
      title: "Unit 2 Practice: Line, Figure, and Speaker",
      focus:
        "Reading line breaks, a simile, and a personified turn as deliberate choices, then converting those observations into a defensible thesis.",
      estimatedMinutes: 45,
      calculator: "n/a",
      problems: [
        {
          id: "lit-u2-q1",
          kind: "multiple-choice",
          label: "MCQ 1",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  All winter I kept the storm window\n 2  shut against my mother's garden, the beds\n 3  she edged in brick the summer she could still\n 4  kneel. I told the neighbors I had no\n 5  time for it. The truth is smaller: I could not\n 6  look at the ground and not see her hands\n 7  in it. Then April came up anyway,\n 8  stubborn as a rumor, and the tulips\n 9  she planted eight Octobers ago\n10  pushed their red mouths through my excuses\n11  and spoke for her.",
          prompt:
            "The line break between \"I had no\" (line 4) and \"time for it\" (line 5) functions chiefly to",
          choices: [
            { label: "A", text: "stress how demanding the speaker's winter schedule has become" },
            { label: "B", text: "let the refusal stand as absolute for an instant before the next line shrinks it to an excuse about scheduling" },
            { label: "C", text: "establish the poem's rhyme scheme at the midpoint of the sentence" },
            { label: "D", text: "signal that a second speaker has taken over the poem" },
            { label: "E", text: "separate the speaker's words to the neighbors from her words to her mother" },
          ],
          answer: "B",
          solution:
            "The break hangs the poem on \"no.\" For the length of the line ending, the speaker has simply refused - no object, no excuse - and then the enjambment delivers \"time for it,\" the socially acceptable version she offers the neighbors. The gap between the two is the poem's first admission that the refusal was never about time, which the next sentence confirms: \"The truth is smaller.\"",
          note:
            "A takes the excuse at face value, which is precisely what the line break undercuts. C names a feature the poem does not have; free verse invites device-hunting, and inventing a rhyme scheme is the most common version. D and E misread a shift in candor as a shift in who is talking.",
        },
        {
          id: "lit-u2-q2",
          kind: "multiple-choice",
          label: "MCQ 2",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  All winter I kept the storm window\n 2  shut against my mother's garden, the beds\n 3  she edged in brick the summer she could still\n 4  kneel. I told the neighbors I had no\n 5  time for it. The truth is smaller: I could not\n 6  look at the ground and not see her hands\n 7  in it. Then April came up anyway,\n 8  stubborn as a rumor, and the tulips\n 9  she planted eight Octobers ago\n10  pushed their red mouths through my excuses\n11  and spoke for her.",
          prompt:
            "The simile \"stubborn as a rumor\" (line 8) characterizes the arriving spring primarily as something that",
          choices: [
            { label: "A", text: "spreads and takes hold regardless of whether the speaker permits it" },
            { label: "B", text: "is probably false and will disappoint the speaker" },
            { label: "C", text: "the speaker's neighbors have been discussing behind her back" },
            { label: "D", text: "arrives too delicately for the speaker to notice at first" },
            { label: "E", text: "repeats itself every year in exactly the same form" },
          ],
          answer: "A",
          solution:
            "The comparison is built on the one property the poem needs: rumors circulate without consent and cannot be recalled. April is not being called untrue; it is being called unstoppable, which sets up the tulips overriding the speaker in the closing lines.",
          note:
            "B seizes the association a rumor carries in ordinary speech - unreliability - instead of the property the sentence activates through \"stubborn\" and \"anyway.\" C smuggles the neighbors from line 4 into a simile that has nothing to do with them. Every simile question is a question about which association the poem is actually using.",
        },
        {
          id: "lit-u2-q3",
          kind: "multiple-choice",
          label: "MCQ 3",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  All winter I kept the storm window\n 2  shut against my mother's garden, the beds\n 3  she edged in brick the summer she could still\n 4  kneel. I told the neighbors I had no\n 5  time for it. The truth is smaller: I could not\n 6  look at the ground and not see her hands\n 7  in it. Then April came up anyway,\n 8  stubborn as a rumor, and the tulips\n 9  she planted eight Octobers ago\n10  pushed their red mouths through my excuses\n11  and spoke for her.",
          prompt:
            "The poem's decisive shift in agency - the point at which the poem stops being governed by what the speaker chooses to do - occurs at",
          choices: [
            { label: "A", text: "line 1, with \"All winter I kept\"" },
            { label: "B", text: "line 4, with \"I told the neighbors\"" },
            { label: "C", text: "line 5, with \"The truth is smaller\"" },
            { label: "D", text: "line 7, with \"Then April came up anyway\"" },
            { label: "E", text: "line 11, with \"and spoke for her\"" },
          ],
          answer: "D",
          solution:
            "Through line 6 the speaker is the grammatical subject of every clause: she keeps the window shut, she tells the neighbors, she cannot look. At \"Then April came up anyway,\" the subject changes and so does the power in the poem - April acts, then the tulips act, and the speaker becomes the obstacle they push through. \"Anyway\" marks the reversal explicitly.",
          note:
            "C is the strong distractor, and it is a real shift - from the public excuse to the private confession - but the speaker is still the one narrating and still the one in charge. The question asks about agency, not candor. E names the consequence of the turn rather than the turn.",
        },
        {
          id: "lit-u2-q4",
          kind: "multiple-choice",
          label: "MCQ 4",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  All winter I kept the storm window\n 2  shut against my mother's garden, the beds\n 3  she edged in brick the summer she could still\n 4  kneel. I told the neighbors I had no\n 5  time for it. The truth is smaller: I could not\n 6  look at the ground and not see her hands\n 7  in it. Then April came up anyway,\n 8  stubborn as a rumor, and the tulips\n 9  she planted eight Octobers ago\n10  pushed their red mouths through my excuses\n11  and spoke for her.",
          prompt:
            "The phrase \"pushed their red mouths through my excuses\" (line 10) achieves its effect mainly by",
          choices: [
            { label: "A", text: "describing the color and shape of the tulip blossoms with unusual precision" },
            { label: "B", text: "treating the speaker's excuses as a physical barrier, so an evasion becomes something the flowers can visibly break through" },
            { label: "C", text: "implying that the speaker has been talking aloud to the garden all winter" },
            { label: "D", text: "comparing the mother's voice to the sound of wind in the tulip bed" },
            { label: "E", text: "shifting the poem from the past tense into the present" },
          ],
          answer: "B",
          solution:
            "\"Excuses\" is an abstraction, and the poem gives it enough substance to be broken. Once the evasion has a surface, the tulips' growth becomes an action against the speaker rather than a seasonal fact, and the personified \"mouths\" that follow can carry the mother's voice into a poem the speaker had tried to keep silent.",
          note:
            "A reads the line as description and stops one step short of its work - the mouths matter because they speak, not because they are red. C literalizes a figure into a habit. E is checkable against the text and false; the verbs stay in the past.",
        },
        {
          id: "lit-u2-q5",
          kind: "free-response",
          label: "FRQ 1",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  All winter I kept the storm window\n 2  shut against my mother's garden, the beds\n 3  she edged in brick the summer she could still\n 4  kneel. I told the neighbors I had no\n 5  time for it. The truth is smaller: I could not\n 6  look at the ground and not see her hands\n 7  in it. Then April came up anyway,\n 8  stubborn as a rumor, and the tulips\n 9  she planted eight Octobers ago\n10  pushed their red mouths through my excuses\n11  and spoke for her.",
          prompt:
            "Write a thesis statement and one body paragraph analyzing how the poem's line breaks and figurative language convey the speaker's complex attitude toward her mother's garden. Take 25 minutes, which is the pace FRQ 1 demands on exam day.",
          parts: [
            { label: "(a)", text: "Thesis: one sentence naming the speaker's complexity, not the poem's subject." },
            { label: "(b)", text: "Body paragraph: analyze at least one line break and one figure of speech, embedding brief quotations." },
            { label: "(c)", text: "Include one sentence that accounts for the poem's turn at line 7." },
            { label: "(d)", text: "Self-score with the rubric below, then rewrite only the thesis." },
          ],
          solution:
            "Model thesis: The speaker's shut storm window is an act of self-protection she cannot quite defend, and the poem's breaks and figures expose the grief hiding inside her excuse until the garden itself overrules her.\n\nModel body paragraph: The poem's line breaks catch the speaker in the act of editing herself. When she reports that she \"had no\" and then, after the drop, \"time for it,\" the enjambment lets a flat refusal stand alone before it is dressed as a scheduling problem, and the correction that follows - \"The truth is smaller\" - concedes what the break has already revealed. The same suspension works on her confession: \"I could not\" hangs at the end of line 5 as an absolute incapacity before \"look at the ground\" narrows it to a single unbearable sight, her mother's hands in the soil. Once the turn arrives at \"Then April came up anyway,\" the speaker loses the sentence: April is \"stubborn as a rumor,\" a comparison that grants the season the one quality the speaker cannot resist, spreading without her permission. By the final lines her evasions have hardened into something material enough to be broken, and the tulips \"pushed their red mouths through my excuses / and spoke for her\" - a personification that returns her mother's voice to a garden the speaker had closed a window against, so that the poem ends with the grief she avoided speaking on her behalf.\n\nWhy the thesis earns the point: it takes a position (the excuse is self-protection, and the poem dismantles it) and predicts the movement the essay will trace.",
          rubric: [
            { points: "Row A: 0-1 pt", criterion: "Thesis - responds to the prompt with a defensible interpretation of the speaker's complex attitude. A restatement of the prompt or a list of devices earns 0." },
            { points: "Row B: 0-4 pts", criterion: "Evidence and Commentary - selects specific textual evidence and explains how it supports a line of reasoning. Brief quotations woven into the writer's sentences; commentary that explains how each line break or figure creates the attitude. 4 points requires consistent explanation of the how, not the what." },
            { points: "Row C: 0-1 pt", criterion: "Sophistication - earned by accounting for tension or complexity across the whole poem - here, the reversal of agency at line 7 - rather than by elevated vocabulary." },
            { points: "Self-check", criterion: "If any sentence in your paragraph could be deleted without losing an argument, it was paraphrase." },
          ],
          note:
            "This is FRQ 1, poetry analysis, which the CED allots about 40 minutes. Practicing thesis plus one paragraph in 25 minutes builds the two habits that decide the score: commit to a claim fast, and never quote without commenting.",
        },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  {
    id: "lit-u3",
    number: "3",
    title: "Longer Fiction or Drama I",
    examWeight: "15-18% of MCQ (U3, 6, 9)",
    examWeightMidpoint: 5.5,
    classPeriods: "~17 class periods",
    summary:
      "Scaling close reading up to a whole book or play: how one scene serves the arc, how character relationships shift, and how a work's setting and structure constrain the people inside them. This unit also starts the long project of banking two or three works you know well enough to argue about from memory.",
    cedNote: {
      tone: "info",
      text: "FRQ 3, the literary argument, asks you to write about a full-length work of your own choosing with no text in front of you. Start a one-page inventory now for each work you study: central conflict, five or six scenes with page references, four short quotations, and two competing interpretations.",
    },
    topics: [
      {
        id: "lit-u3-t1",
        title: "Character relationships and their nuances",
        detail:
          "A relationship is evidence about both people. Track what each one can and cannot say to the other, and what the silences cost.",
      },
      {
        id: "lit-u3-t2",
        title: "Character and setting as a single system",
        detail:
          "In longer works setting supplies the limits a character strains against - a farm, a boarding house, a court. Explain what the place permits and forbids.",
      },
      {
        id: "lit-u3-t3",
        title: "The function of a significant event in the whole arc",
        detail:
          "For any scene, answer what the work would lose without it. That question turns plot recall into structural analysis.",
      },
      {
        id: "lit-u3-t4",
        title: "Conflict: external pressure and internal division",
        detail:
          "The strongest readings connect the two - the character fighting a landlord is usually also fighting a self-image.",
      },
      {
        id: "lit-u3-t5",
        title: "Narrative perspective controls emphasis",
        detail:
          "Notice what the narration lingers over and what it hurries past. Pacing is an argument about what matters.",
      },
      {
        id: "lit-u3-t6",
        title: "Dramatic form: dialogue, stage directions, and subtext",
        detail:
          "In a play, stage directions are the author's only narration. What a character does while speaking often contradicts what they say.",
      },
      {
        id: "lit-u3-t7",
        title: "Dramatic irony and unequal knowledge",
        detail:
          "When the audience knows more than a character, every ordinary line acquires a second meaning. Identify who lacks what, and what the gap makes the audience feel.",
      },
      {
        id: "lit-u3-t8",
        title: "Structure: acts, chapters, parallel scenes, and foils",
        detail:
          "Long works repeat with variation. A scene that echoes an earlier one is asking you to compare them.",
      },
      {
        id: "lit-u3-t9",
        title: "Commentary that ties evidence to a line of reasoning",
        detail:
          "Across several paragraphs, each piece of evidence must be shown to advance the same thesis. State the link explicitly rather than trusting the reader to see it.",
      },
      {
        id: "lit-u3-t10",
        title: "Building your FRQ 3 work inventory",
        detail:
          "Choose works with enough moral complication to sustain an argument, then memorize specific scenes and short quotations rather than themes.",
      },
    ],
    keySkills: [
      "Answer 'what would the work lose without this scene?' for every major episode you study",
      "Read stage directions as authorial commentary and quote them as evidence",
      "State who knows what at each moment of a scene, then explain what the audience does with the surplus",
      "Connect an external conflict to the internal one it exposes, in a single sentence",
      "Open each body paragraph with a claim that advances the thesis, not with a plot event",
      "Keep a one-page inventory per work: conflict, key scenes, four quotations, two rival interpretations",
    ],
    commonMistakes: [
      "Summarizing the plot of a long work for half the essay on the assumption the reader needs the story.",
      "Choosing a work for FRQ 3 that you cannot cite specifically, then writing in generalities about its 'message.'",
      "Treating stage directions as staging notes rather than as evidence about character.",
      "Asserting dramatic irony without stating what the character does not know.",
      "Body paragraphs that each prove something true but unrelated, so the essay has claims but no line of reasoning.",
      "Ending with a moral lesson about life instead of an interpretation of the work.",
    ],
    practiceSet: {
      id: "lit-u3-set",
      title: "Unit 3 Practice: Scene, Subtext, and the Whole Work",
      focus:
        "Mining a single dramatic scene for dramatic irony, contrast, and subtext, then planning a literary argument about a full-length work you know.",
      estimatedMinutes: 50,
      calculator: "n/a",
      problems: [
        {
          id: "lit-u3-q1",
          kind: "multiple-choice",
          label: "MCQ 1",
          stimulus:
            "PRACTICE SCENE (original, written for this exercise - not an excerpt from any published play)\n\nFrom an imagined two-act play. The kitchen of a rented farmhouse, late August. A bank\nenvelope lies unopened on the table, weighted down by a sugar bowl.\n\nHALLORAN  (not looking up from the boot he is oiling)  You went into town.\nEILEEN  I went as far as the post office. Nothing but the almanac.\n          (The envelope is plainly visible between them.)\nHALLORAN  Good. A man can live a long while on nothing.\nEILEEN  Then sit and eat. I made the pie you like.\nHALLORAN  (rising, wiping his hands)  I'll eat at six, the way I do.\n          He goes out. EILEEN lifts the sugar bowl, looks at the envelope, and sets\n          the bowl down on it again.\nEILEEN  (to the closed door)  At six, then.",
          prompt:
            "The stage direction \"(The envelope is plainly visible between them.)\" functions chiefly to",
          choices: [
            { label: "A", text: "establish the realistic clutter of a working farmhouse kitchen" },
            { label: "B", text: "create dramatic irony by letting the audience weigh Eileen's answer against what it can see" },
            { label: "C", text: "show that Halloran has hidden the envelope from Eileen" },
            { label: "D", text: "indicate that the envelope will be opened before the act ends" },
            { label: "E", text: "emphasize how little mail the household receives" },
          ],
          answer: "B",
          solution:
            "The direction exists for the audience, not the characters: it guarantees we see the thing Eileen has just denied receiving. From that moment her line about the almanac reads as a decision rather than a report, and every ordinary exchange in the scene carries a second layer we can hear and Halloran cannot.",
          note:
            "A treats a pointed direction as set dressing, the same reflex that turns setting into background. C reverses who is concealing what. D predicts a plot event the text does not promise - stage directions describe the stage, not the future.",
        },
        {
          id: "lit-u3-q2",
          kind: "multiple-choice",
          label: "MCQ 2",
          stimulus:
            "PRACTICE SCENE (original, written for this exercise - not an excerpt from any published play)\n\nFrom an imagined two-act play. The kitchen of a rented farmhouse, late August. A bank\nenvelope lies unopened on the table, weighted down by a sugar bowl.\n\nHALLORAN  (not looking up from the boot he is oiling)  You went into town.\nEILEEN  I went as far as the post office. Nothing but the almanac.\n          (The envelope is plainly visible between them.)\nHALLORAN  Good. A man can live a long while on nothing.\nEILEEN  Then sit and eat. I made the pie you like.\nHALLORAN  (rising, wiping his hands)  I'll eat at six, the way I do.\n          He goes out. EILEEN lifts the sugar bowl, looks at the envelope, and sets\n          the bowl down on it again.\nEILEEN  (to the closed door)  At six, then.",
          prompt: "Halloran's line \"A man can live a long while on nothing\" is ironic because",
          choices: [
            { label: "A", text: "he intends it as stoic pride, while the audience sees a bank notice that makes \"nothing\" a literal account of his finances" },
            { label: "B", text: "he is secretly wealthier than his wife believes" },
            { label: "C", text: "he is mocking the pie Eileen has just offered him" },
            { label: "D", text: "he has in fact received a great deal of mail that season" },
            { label: "E", text: "he speaks the line without looking up from his work" },
          ],
          answer: "A",
          solution:
            "Halloran means the sentence as a boast about endurance. The envelope converts his abstract \"nothing\" into an unread balance, so the audience hears a second meaning he does not intend - the definition of dramatic irony in a single line.",
          note:
            "B invents a hidden fortune the scene never suggests. C misreads the sequence; the pie is offered after his line. E notices a real detail - his refusal to look up - but that is characterization of his inattention, not the source of the irony.",
        },
        {
          id: "lit-u3-q3",
          kind: "multiple-choice",
          label: "MCQ 3",
          stimulus:
            "PRACTICE SCENE (original, written for this exercise - not an excerpt from any published play)\n\nFrom an imagined two-act play. The kitchen of a rented farmhouse, late August. A bank\nenvelope lies unopened on the table, weighted down by a sugar bowl.\n\nHALLORAN  (not looking up from the boot he is oiling)  You went into town.\nEILEEN  I went as far as the post office. Nothing but the almanac.\n          (The envelope is plainly visible between them.)\nHALLORAN  Good. A man can live a long while on nothing.\nEILEEN  Then sit and eat. I made the pie you like.\nHALLORAN  (rising, wiping his hands)  I'll eat at six, the way I do.\n          He goes out. EILEEN lifts the sugar bowl, looks at the envelope, and sets\n          the bowl down on it again.\nEILEEN  (to the closed door)  At six, then.",
          prompt:
            "Eileen's handling of the sugar bowl after Halloran leaves most nearly reveals that",
          choices: [
            { label: "A", text: "she is tidying the table out of long habit" },
            { label: "B", text: "she means to open the envelope as soon as supper is over" },
            { label: "C", text: "she wants Halloran to discover the envelope himself" },
            { label: "D", text: "her concealment is a choice she renews in private, not merely a lie told under pressure" },
            { label: "E", text: "she cannot read what the envelope says" },
          ],
          answer: "D",
          solution:
            "Nobody is watching. She uncovers the envelope, looks at it, and deliberately covers it again, which means the lie she told Halloran was not a flinch in the moment but a policy she reaffirms alone. The gesture is the scene's fullest piece of characterization and it happens without a word.",
          note:
            "A drains a deliberate three-part action of meaning. B and C assign intentions the blocking contradicts - she re-covers the envelope rather than setting it out or opening it. E is a literal reading of a woman who has clearly understood what she is hiding.",
        },
        {
          id: "lit-u3-q4",
          kind: "multiple-choice",
          label: "MCQ 4",
          stimulus:
            "PRACTICE SCENE (original, written for this exercise - not an excerpt from any published play)\n\nFrom an imagined two-act play. The kitchen of a rented farmhouse, late August. A bank\nenvelope lies unopened on the table, weighted down by a sugar bowl.\n\nHALLORAN  (not looking up from the boot he is oiling)  You went into town.\nEILEEN  I went as far as the post office. Nothing but the almanac.\n          (The envelope is plainly visible between them.)\nHALLORAN  Good. A man can live a long while on nothing.\nEILEEN  Then sit and eat. I made the pie you like.\nHALLORAN  (rising, wiping his hands)  I'll eat at six, the way I do.\n          He goes out. EILEEN lifts the sugar bowl, looks at the envelope, and sets\n          the bowl down on it again.\nEILEEN  (to the closed door)  At six, then.",
          prompt:
            "The exchange about supper - \"Then sit and eat\" answered by \"I'll eat at six, the way I do\" - chiefly establishes a contrast between",
          choices: [
            { label: "A", text: "a wife who improvises to manage the moment and a husband who retreats into fixed routine" },
            { label: "B", text: "a generous provider and an ungrateful dependent" },
            { label: "C", text: "a character who fears poverty and one who has never known it" },
            { label: "D", text: "a rural way of speaking and an urban one" },
            { label: "E", text: "an affectionate marriage and a hostile one" },
          ],
          answer: "A",
          solution:
            "Eileen's offer of the pie is an improvisation: she changes the subject with food the second the mail has been discussed. Halloran answers with the clock, refusing the offer by appealing to what he always does. The pairing defines each of them - her management, his rigidity - and explains why the envelope can sit between them undiscussed.",
          note:
            "B and E impose a judgment the scene withholds; nothing here is hostile, and no one is ungrateful. C inverts the situation, since Halloran is the one whose line about living on nothing suggests long acquaintance with scarcity.",
        },
        {
          id: "lit-u3-q5",
          kind: "multiple-choice",
          label: "MCQ 5",
          stimulus:
            "PRACTICE SCENE (original, written for this exercise - not an excerpt from any published play)\n\nFrom an imagined two-act play. The kitchen of a rented farmhouse, late August. A bank\nenvelope lies unopened on the table, weighted down by a sugar bowl.\n\nHALLORAN  (not looking up from the boot he is oiling)  You went into town.\nEILEEN  I went as far as the post office. Nothing but the almanac.\n          (The envelope is plainly visible between them.)\nHALLORAN  Good. A man can live a long while on nothing.\nEILEEN  Then sit and eat. I made the pie you like.\nHALLORAN  (rising, wiping his hands)  I'll eat at six, the way I do.\n          He goes out. EILEEN lifts the sugar bowl, looks at the envelope, and sets\n          the bowl down on it again.\nEILEEN  (to the closed door)  At six, then.",
          prompt:
            "Eileen's closing line, delivered \"to the closed door,\" functions primarily to",
          choices: [
            { label: "A", text: "reveal that she is too frightened of Halloran to address him directly" },
            { label: "B", text: "announce to the audience that she has decided to leave the farm" },
            { label: "C", text: "leave her performing the household's rituals for a listener who has already gone" },
            { label: "D", text: "break the scene's realism by addressing the audience as a confidante" },
            { label: "E", text: "suggest that Halloran is still listening on the other side of the door" },
          ],
          answer: "C",
          solution:
            "The agreement she confirms - supper at six - is the least of what passed between them, and she confirms it to wood. The line closes the scene on a marriage kept running by settled routine and unaddressed news, which is exactly the arrangement the hidden envelope depends on.",
          note:
            "A is the most tempting wrong answer, but she has already spoken to Halloran twice without hesitation, including the lie; her problem is not fear of speaking. B invents a resolution. D confuses speech to an absent listener with an aside delivered to the house.",
        },
        {
          id: "lit-u3-q6",
          kind: "free-response",
          label: "FRQ 1",
          prompt:
            "Literary argument practice, in the form of FRQ 3. Many novels and plays turn on a character who withholds important information from someone close to them. Choose a full-length work you have studied and write a thesis plus a three-paragraph outline explaining how the concealment and its consequences contribute to an interpretation of the work as a whole. Work from memory, as you must on exam day, and cite specific scenes rather than themes.",
          parts: [
            { label: "(a)", text: "Name the work and author, then state a thesis that makes a claim about meaning, not about plot." },
            { label: "(b)", text: "Outline three body paragraphs, each with its own claim and two specific pieces of remembered evidence." },
            { label: "(c)", text: "For one paragraph, write the commentary out in full and check that it explains how the evidence supports the claim." },
            { label: "(d)", text: "Add one sentence acknowledging a rival reading and explaining why yours accounts for more of the work." },
          ],
          solution:
            "Worked example using Henrik Ibsen's A Doll's House, described from memory rather than quoted.\n\nThesis: By keeping the loan that saved her husband's life a secret for years, Nora Helmer protects a marriage that can only survive on her silence, and the play uses the unraveling of that secret to argue that the Helmers' domestic happiness was always a performance staged for a man who could not be told the truth.\n\nParagraph 1 claim: The concealment begins as an act of competence, and the play makes sure we notice how much skill it required. Evidence: Nora's quiet management of household money and her private satisfaction at having handled the debt herself; her habit of presenting purchases and needs in the coaxing voice her husband rewards.\n\nParagraph 2 claim: What starts as protection hardens into a second life with its own rules. Evidence: the arrangements she must make with the man who holds the note as he pressures her; her misdirection of Torvald whenever the subject of money comes near the surface, which turns marital affection into stagecraft.\n\nParagraph 3 claim: The revelation matters less for what Torvald learns than for what Nora learns about being managed in return. Evidence: his reaction, which is concerned first with reputation rather than with the debt she carried for him; her decision at the end to leave a house she can no longer play a part in - the door closing as the play's final argument.\n\nRival reading, acknowledged: one could argue the play blames the law and the lender rather than the marriage, since Nora had no legal way to borrow in her own name. That reading explains her predicament but not Torvald's response to it, and it is his response that turns a financial crisis into the end of the marriage.\n\nNotice that every piece of evidence is a scene or a specific action, not a theme, and that the whole outline answers one question: what does the concealment mean?",
          rubric: [
            { points: "Row A: 0-1 pt", criterion: "Thesis - responds to the prompt with a defensible interpretation of the work as a whole. A summary of the concealment, or a claim about life rather than the work, earns 0." },
            { points: "Row B: 0-4 pts", criterion: "Evidence and Commentary - selects evidence from the chosen work and explains how it supports a line of reasoning. Specific, accurate references to scenes and actions; commentary explaining how each supports the interpretation. Generalized references to the work's 'message' cap this row at 2." },
            { points: "Row C: 0-1 pt", criterion: "Sophistication - earned by engaging a rival interpretation or a genuine tension in the work and resolving it, not by ornate phrasing." },
            { points: "Self-check", criterion: "Could a reader who knows the work tell from your outline which scenes you mean? If not, your evidence is not yet specific enough to score." },
          ],
          note:
            "For FRQ 3 you may write about any work of literary merit, so the whole game is preparation. Do this exercise once for each work in your inventory and you will walk into the exam with three arguments already half-written.",
        },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  {
    id: "lit-u4",
    number: "4",
    title: "Short Fiction II",
    examWeight: "42-49% of MCQ (U1, 4, 7)",
    examWeightMidpoint: 15,
    classPeriods: "~17 class periods",
    summary:
      "The second pass through short fiction, where narration, character, and structure have to do more than identify themselves. Track how far the telling sits from a mind, when the vantage point shifts, what a foil makes visible, and how the order of revelation manufactures irony the characters cannot hear.",
    cedNote: {
      tone: "info",
      text: "Unit 1 asked you to notice that a narrator can be limited. This unit asks you to argue from that limitation: treat distance, a shift in perspective, and a withheld fact as designs that produce irony, not as defects in the storytelling.",
    },
    topics: [
      {
        id: "lit-u4-t1",
        title: "Narrative distance: how close the telling sits to a mind",
        detail:
          "Mastery is measuring the gap between a character's feelings and the language that reports them. Close distance borrows the character's diction; far distance describes the same moment as if it belonged to someone else.",
      },
      {
        id: "lit-u4-t2",
        title: "Shifts in perspective and what they expose",
        detail:
          "When a story changes who can see, or when a first-person narrator suddenly regards a past self as a stranger, name the new vantage and the fact that only that vantage makes available.",
      },
      {
        id: "lit-u4-t3",
        title: "Unreliability as a design the reader can see past",
        detail:
          "Escalate past the label. Cite the detail that contradicts the narrator's account, then explain what the story gains by letting the narrator keep believing the version that does not hold.",
      },
      {
        id: "lit-u4-t4",
        title: "Character foils and the work of pairing",
        detail:
          "A foil is not an opposite for decoration. Explain the single quality the pairing isolates - a choice, a fear, a capacity - that neither character would display as clearly alone.",
      },
      {
        id: "lit-u4-t5",
        title: "Complexities in what characters can say to one another",
        detail:
          "Track what each person knows, what each will admit, and what the correspondence or conversation edits out. The relationship is the pattern of those omissions.",
      },
      {
        id: "lit-u4-t6",
        title: "Structure that creates irony: order, juxtaposition, withheld fact",
        detail:
          "Irony here is an effect of arrangement. Show how placing a public image beside a private document, or a boast beside its evidence, makes a second meaning the speaker did not intend.",
      },
      {
        id: "lit-u4-t7",
        title: "Setting as the pressure a second-pass story will not let you ignore",
        detail:
          "The house, the mill, the rented room should constrain a choice. Name what the place permits, what it forbids, and which character the constraint is actually describing.",
      },
      {
        id: "lit-u4-t8",
        title: "Commentary that accounts for irony instead of announcing it",
        detail:
          "Do not write 'this is ironic.' State the two meanings that occupy the same sentence, who can hear each one, and what the mismatch asks the reader to judge.",
      },
    ],
    keySkills: [
      "Name the distance of the narration in a single clause: whose diction, whose knowledge, whose judgment the sentence is using",
      "Mark the sentence where perspective shifts, then state the fact that only the new vantage can see",
      "Prove unreliability with a contradiction the text itself supplies, not with a suspicion you brought to it",
      "Reduce a foil pairing to one isolated quality and show that quality doing interpretive work",
      "Treat juxtaposition as an argument: explain what the two adjacent details make visible together",
      "Write irony as a double meaning with an audience, never as a synonym for 'surprising' or 'sad'",
    ],
    commonMistakes: [
      "Calling any first-person narrator unreliable because first person is on the vocabulary list, without a contradicting detail.",
      "Treating a foil as a villain-and-hero diagram instead of asking what one quality the pairing isolates.",
      "Spotting irony and stopping: 'the ending is ironic' earns no commentary unless you state the two meanings and who can hear them.",
      "Confusing a shift in time with a shift in perspective - a flashback is not automatically a new mind.",
      "Reading a public account (a speech, a photograph caption, a letter) as the story's last word rather than as a version the narration may undercut.",
      "Summarizing the plot of the second half of a story and calling the summary a discussion of structure.",
    ],
    practiceSet: {
      id: "lit-u4-set",
      title: "Unit 4 Practice: Distance, Foil, and Structural Irony",
      focus:
        "Reading a first-person account against the evidence it withholds, using a foil and a juxtaposition to name the irony the narrator cannot quite claim.",
      estimatedMinutes: 45,
      calculator: "n/a",
      problems: [
        {
          id: "lit-u4-q1",
          kind: "multiple-choice",
          label: "MCQ 1",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nI told the committee I had been the one to stay. That was accurate enough. After the mill closed, my sister packed a suitcase that would not zip and took the last bus toward a city she had never seen, while I kept the house, the mortgage, the three rooms that still smelled of our father's tobacco. The committee liked that story; they printed it under a photograph of me in the doorway, arms folded, looking as if I had chosen something. What the photograph does not show is the letter I never mailed, the one that asked her to wait until spring. I found it last week in the desk I inherited, still sealed, addressed in a hand I barely recognized as mine. She writes now from a rented room with a window onto a courtyard, and her letters are full of names I do not know. I answer promptly. I tell her the garden is coming along. I do not tell her that I planted nothing this year, or that I have begun to sleep in the front room so I will not have to walk past her empty bed.",
          prompt:
            "The narrator's qualifier \"That was accurate enough\" functions primarily to",
          choices: [
            { label: "A", text: "confess that the narrator lied outright to the committee about remaining in town" },
            { label: "B", text: "signal that the public account is technically true and privately incomplete" },
            { label: "C", text: "show that the narrator can no longer remember what was said to the committee" },
            { label: "D", text: "blame the committee for twisting a simple statement into a legend of sacrifice" },
            { label: "E", text: "establish that the sister, not the narrator, invented the story of who stayed" },
          ],
          answer: "B",
          solution:
            "\"Accurate enough\" grants the facts - the narrator did stay - and withholds the motive. The rest of the passage supplies what the qualifier has already flagged: a photograph that looks like a choice, a letter that asked her to wait, a garden reported but never planted. The phrase is the first crack between the story told and the story lived.",
          note:
            "A overstates the gap into a lie; the narrator did stay, which is why the unreliability is limitation rather than fraud. C invents amnesia the voice never claims. D and E move the editing work onto other people, but the hedging is the narrator's own.",
        },
        {
          id: "lit-u4-q2",
          kind: "multiple-choice",
          label: "MCQ 2",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nI told the committee I had been the one to stay. That was accurate enough. After the mill closed, my sister packed a suitcase that would not zip and took the last bus toward a city she had never seen, while I kept the house, the mortgage, the three rooms that still smelled of our father's tobacco. The committee liked that story; they printed it under a photograph of me in the doorway, arms folded, looking as if I had chosen something. What the photograph does not show is the letter I never mailed, the one that asked her to wait until spring. I found it last week in the desk I inherited, still sealed, addressed in a hand I barely recognized as mine. She writes now from a rented room with a window onto a courtyard, and her letters are full of names I do not know. I answer promptly. I tell her the garden is coming along. I do not tell her that I planted nothing this year, or that I have begun to sleep in the front room so I will not have to walk past her empty bed.",
          prompt:
            "The sister functions as a foil chiefly because her departure and new correspondence make visible",
          choices: [
            { label: "A", text: "that she is selfish where the narrator is loyal, so the story can judge her for leaving" },
            { label: "B", text: "that city life is morally superior to life in a mill town" },
            { label: "C", text: "the difference between a life that has acquired names and a staying that has emptied the house" },
            { label: "D", text: "that the narrator was legally required to keep the mortgage after the mill closed" },
            { label: "E", text: "that the two siblings were never close enough for her leaving to matter" },
          ],
          answer: "C",
          solution:
            "The pairing isolates one quality: motion versus stasis, and what each produces. Her suitcase will not zip; her letters are \"full of names I do not know\"; she has a courtyard window. Against that fullness the narrator's staying becomes three rooms that still smell of a dead father, a garden not planted, a bed he will not walk past. The foil does not villainize her; it measures what his remaining has cost.",
          note:
            "A is the foil-as-moral-diagram trap this unit is built to break; the passage never asks you to condemn the sister. B imports a town-versus-city thesis the text does not argue. E contradicts the empty bed and the unsent letter, both of which prove the leaving still governs the house.",
        },
        {
          id: "lit-u4-q3",
          kind: "multiple-choice",
          label: "MCQ 3",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nI told the committee I had been the one to stay. That was accurate enough. After the mill closed, my sister packed a suitcase that would not zip and took the last bus toward a city she had never seen, while I kept the house, the mortgage, the three rooms that still smelled of our father's tobacco. The committee liked that story; they printed it under a photograph of me in the doorway, arms folded, looking as if I had chosen something. What the photograph does not show is the letter I never mailed, the one that asked her to wait until spring. I found it last week in the desk I inherited, still sealed, addressed in a hand I barely recognized as mine. She writes now from a rented room with a window onto a courtyard, and her letters are full of names I do not know. I answer promptly. I tell her the garden is coming along. I do not tell her that I planted nothing this year, or that I have begun to sleep in the front room so I will not have to walk past her empty bed.",
          prompt:
            "Placing the committee's photograph beside the unsent letter is a structural choice that chiefly",
          choices: [
            { label: "A", text: "proves the photograph was staged by the committee without the narrator's knowledge" },
            { label: "B", text: "ironizes the public image of chosen steadfastness against private evidence of a plea the narrator never sent" },
            { label: "C", text: "establishes a chronology so the reader can date the mill's closing" },
            { label: "D", text: "suggests that the narrator intends to mail the letter now that it has been found" },
            { label: "E", text: "identifies the sister, not the narrator, as the true subject of the photograph" },
          ],
          answer: "B",
          solution:
            "The photograph captions staying as a choice - \"looking as if I had chosen something.\" The next sentence produces the document that contradicts the caption: a sealed request that she wait. Structure does the ironic work. The two images occupy the same life, and only the reader is positioned to hold them at once.",
          note:
            "A turns juxtaposition into a conspiracy about how the picture was taken. D predicts an action the passage never takes; finding the letter is the point, not mailing it. C treats arrangement as timeline, which is the plot-summary version of a structure question.",
        },
        {
          id: "lit-u4-q4",
          kind: "multiple-choice",
          label: "MCQ 4",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nI told the committee I had been the one to stay. That was accurate enough. After the mill closed, my sister packed a suitcase that would not zip and took the last bus toward a city she had never seen, while I kept the house, the mortgage, the three rooms that still smelled of our father's tobacco. The committee liked that story; they printed it under a photograph of me in the doorway, arms folded, looking as if I had chosen something. What the photograph does not show is the letter I never mailed, the one that asked her to wait until spring. I found it last week in the desk I inherited, still sealed, addressed in a hand I barely recognized as mine. She writes now from a rented room with a window onto a courtyard, and her letters are full of names I do not know. I answer promptly. I tell her the garden is coming along. I do not tell her that I planted nothing this year, or that I have begun to sleep in the front room so I will not have to walk past her empty bed.",
          prompt:
            "The phrase \"a hand I barely recognized as mine\" most nearly suggests that the narrator",
          choices: [
            { label: "A", text: "suspects someone else wrote the letter and left it in the desk" },
            { label: "B", text: "has grown proud of how his handwriting has improved since the mill closed" },
            { label: "C", text: "cannot read the address because the ink has faded" },
            { label: "D", text: "now stands at enough distance from his past self that even his own writing looks like another person's" },
            { label: "E", text: "intends to deny authorship if the sister ever learns of the letter" },
          ],
          answer: "D",
          solution:
            "The letter is \"addressed in a hand I barely recognized as mine\": the narrator claims the writing and simultaneously cannot own it. That is narrative distance inside a first-person voice - a present self looking at a past act as if it belonged to a stranger, which is exactly the vantage the rest of the passage needs in order to re-see the story of staying.",
          note:
            "A literalizes distance into a forgery plot, the same error Unit 1's signature simile invited. C invents a physical obstacle. E assigns a future tactic the voice never contemplates; the estrangement is inward, not strategic.",
        },
        {
          id: "lit-u4-q5",
          kind: "multiple-choice",
          label: "MCQ 5",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nI told the committee I had been the one to stay. That was accurate enough. After the mill closed, my sister packed a suitcase that would not zip and took the last bus toward a city she had never seen, while I kept the house, the mortgage, the three rooms that still smelled of our father's tobacco. The committee liked that story; they printed it under a photograph of me in the doorway, arms folded, looking as if I had chosen something. What the photograph does not show is the letter I never mailed, the one that asked her to wait until spring. I found it last week in the desk I inherited, still sealed, addressed in a hand I barely recognized as mine. She writes now from a rented room with a window onto a courtyard, and her letters are full of names I do not know. I answer promptly. I tell her the garden is coming along. I do not tell her that I planted nothing this year, or that I have begun to sleep in the front room so I will not have to walk past her empty bed.",
          prompt:
            "The narrator's report that he tells his sister \"the garden is coming along\" works together with what he \"do[es] not tell her\" chiefly to",
          choices: [
            { label: "A", text: "prove that he remains a dedicated gardener despite the mill's closing" },
            { label: "B", text: "show that the correspondence continues the same edited self he offered the committee" },
            { label: "C", text: "hint that he wants her to return in time to help plant next year's beds" },
            { label: "D", text: "establish that the climate this year has made gardening impossible" },
            { label: "E", text: "reveal that he writes poorly and so prefers a conventional remark" },
          ],
          answer: "B",
          solution:
            "\"I answer promptly. I tell her the garden is coming along. I do not tell her that I planted nothing this year\" restages the committee speech in private. The garden is the new photograph: a picture of tending that conceals an empty plot and an empty bed. The omission is not a new vice; it is the same design, now aimed at the one person whose leaving made the design necessary.",
          note:
            "A takes the garden at the value the narrator assigns it in the letter, which is the reliability trap. C and D invent motives and weather the passage never supplies. The question is about what the double report - told / not told - does, not about horticulture.",
        },
        {
          id: "lit-u4-q6",
          kind: "free-response",
          label: "FRQ 1",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nI told the committee I had been the one to stay. That was accurate enough. After the mill closed, my sister packed a suitcase that would not zip and took the last bus toward a city she had never seen, while I kept the house, the mortgage, the three rooms that still smelled of our father's tobacco. The committee liked that story; they printed it under a photograph of me in the doorway, arms folded, looking as if I had chosen something. What the photograph does not show is the letter I never mailed, the one that asked her to wait until spring. I found it last week in the desk I inherited, still sealed, addressed in a hand I barely recognized as mine. She writes now from a rented room with a window onto a courtyard, and her letters are full of names I do not know. I answer promptly. I tell her the garden is coming along. I do not tell her that I planted nothing this year, or that I have begun to sleep in the front room so I will not have to walk past her empty bed.",
          prompt:
            "In one paragraph of roughly 180-220 words, make and support a single defensible claim about how narrative perspective and structural juxtaposition characterize the narrator's relationship to the story of staying. Budget 18 minutes: three to claim, twelve to draft, three to cut summary.",
          parts: [
            { label: "(a)", text: "Open with an arguable claim that names an interpretation of the telling, not a topic such as 'unreliability' or 'family.'" },
            { label: "(b)", text: "Embed at least two short quotations inside your own sentences." },
            { label: "(c)", text: "Account for one juxtaposition (photograph and letter, or told garden and untold bed) as a structural choice that produces irony." },
            { label: "(d)", text: "Close by connecting the foil of the sister's letters to the narrator's present distance from his own handwriting, without restating the first sentence." },
          ],
          solution:
            "Model paragraph: The narrator's staying is a story he can recite and can no longer quite inhabit, and the passage characterizes him by letting that gap do the work. He opens with a public sentence - \"I had been the one to stay\" - then immediately qualifies it as \"accurate enough,\" a hedge that admits completeness was never the point. The committee's photograph freezes the hedge into a pose, \"looking as if I had chosen something,\" and the narration undercuts the pose in the next breath by producing the sealed letter that asked his sister to wait. The juxtaposition is the irony: the image of choice sits beside the evidence of a plea he could not send, and only the reader holds both at once. Finding that letter \"in a hand I barely recognized as mine\" is a shift in narrative distance, the present voice regarding a past act as another person's writing. Against that estrangement the sister's foil is almost cruelly specific. Her letters are \"full of names I do not know,\" while his replies continue the committee version in miniature - a garden \"coming along\" that he never planted, an empty bed he will not walk past. What he will not tell her is the same thing the photograph would not show: that remaining was not a virtue he chose so much as a room he has not left.\n\nThe paragraph never retells the mill closing. Every sentence is a claim about how the telling is built.",
          rubric: [
            { points: "Row A: 0-1 pt", criterion: "Thesis - responds to the prompt with a defensible interpretation of how perspective and structure characterize the narrator. A list of devices or a plot summary earns 0." },
            { points: "Row B: 0-4 pts", criterion: "Evidence and Commentary - selects specific textual evidence and explains how it supports a line of reasoning. At least two brief, embedded quotations (photograph/letter, hedge, handwriting, garden/bed, sister's names); commentary that states irony as two meanings, not as a label, and lets the foil or the final omissions advance the same claim. 4 points requires consistent explanation of the how." },
            { points: "Row C: 0-1 pt", criterion: "Sophistication - earned by holding the public story of staying against the private omissions without collapsing them into a single moral, rather than by elevated vocabulary." },
            { points: "Self-check", criterion: "If any sentence only retells who stayed and who left, cross it out and confirm the paragraph still stands. If the paragraph could be written without the photograph sitting next to the letter, you have not yet analyzed structure." },
          ],
          note:
            "This is FRQ 2 compression with Unit 4's extra demand: you have to talk about how the story is arranged, not only about what the narrator feels. If your paragraph could be written without the photograph sitting next to the letter, you have not yet analyzed structure.",
        },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  {
    id: "lit-u5",
    number: "5",
    title: "Poetry II",
    examWeight: "36-45% of MCQ (U2, 5, 8)",
    examWeightMidpoint: 13.5,
    classPeriods: "~17 class periods",
    summary:
      "The second pass through poetry, where a comparison has to live long enough to become an argument, and where form is no longer decoration. Follow an extended metaphor through a turn; hear how meter keeps or breaks a promise; and treat a tonal shift or a genuine ambiguity as the poem's most defensible claim about itself.",
    cedNote: {
      tone: "info",
      text: "A conceit is not a fancier word for metaphor. It is a comparison the poem commits to long enough that its logic must be followed through - including the moment the comparison breaks or turns against the speaker. That follow-through is often where Row C sophistication is earned on FRQ 1.",
    },
    topics: [
      {
        id: "lit-u5-t1",
        title: "Extended metaphor and conceit",
        detail:
          "Mastery is tracing one comparison across multiple lines and stating what each new vehicle-detail claims. If you cannot say what 'the spring' or 'the winding' adds, you have labeled a conceit without reading it.",
      },
      {
        id: "lit-u5-t2",
        title: "When the conceit's logic turns against the speaker",
        detail:
          "A sustained comparison will eventually produce a consequence the speaker did not bargain for. Name the line where the vehicle stops flattering the tenor and starts judging it.",
      },
      {
        id: "lit-u5-t3",
        title: "Form as architecture: stanza, closed form, and open verse",
        detail:
          "Stanzas are units of argument. A two-stanza poem is almost always a claim and a revision; a sonnet's turn is a thesis the octave did not yet know. Describe what the form permits the poem to change.",
      },
      {
        id: "lit-u5-t4",
        title: "Meter interacting with meaning, not just named",
        detail:
          "Regular iambic tetrameter is a promise of evenness; a caesura, a trochaic substitution, or an extra unstressed syllable is the promise being broken. Say what the break enacts in the same sentence you name it.",
      },
      {
        id: "lit-u5-t5",
        title: "Tonal shifts across stanzas",
        detail:
          "Tone is attitude, and a shift is a change in attitude you can point to: a new tense, a new agent, a concession, a 'though.' Build the thesis around the change rather than around the topic the two stanzas share.",
      },
      {
        id: "lit-u5-t6",
        title: "Productive ambiguity versus vagueness",
        detail:
          "Ambiguity is two meanings the syntax actually supports, both of which the poem needs. Vagueness is a claim you cannot tether to a word. Quote the fork in the sentence and argue why the poem refuses to choose.",
      },
      {
        id: "lit-u5-t7",
        title: "Irony and paradox inside a figure",
        detail:
          "When a speaker praises the 'even pace' of a clock that has been covering a refusal to wind, the figure is already ironic. State the two meanings that occupy the same image.",
      },
      {
        id: "lit-u5-t8",
        title: "Allusion: what the borrowed context imports",
        detail:
          "An allusion is not a trivia citation. Explain the one association the borrowed story or phrase drags into this poem, and what would be lost if the line were purely original.",
      },
      {
        id: "lit-u5-t9",
        title: "A thesis that accounts for the whole poem's architecture",
        detail:
          "Unit 2 asked for a defensible sentence. This unit asks that the sentence predict the turn: what the first stanza maintains, what the second stanza costs, and why the cost is the point.",
      },
    ],
    keySkills: [
      "Unpack a conceit in stages: tenor, vehicle, then each detail the vehicle donates that a literal statement would not",
      "Locate the line where the comparison stops serving the speaker and start the body paragraph there if that is where the attitude complexifies",
      "Scan a few lines well enough to notice a break in the pattern, then convert the break into an effect rather than a label",
      "Name a tonal shift with evidence of attitude (diction, agency, concession), not with a mood adjective parked on a stanza",
      "Quote the exact phrase that forks into two meanings and keep both meanings in play through the commentary",
      "Write a thesis that could not be written about stanza 1 alone - if it could, you have not yet read the poem",
    ],
    commonMistakes: [
      "Calling any metaphor a conceit because the word sounds like AP vocabulary; a conceit has to be sustained and logically followed.",
      "Naming the meter correctly and never saying what the regularity or the break does - 'the poem is in iambic tetrameter' is identification, not analysis.",
      "Treating a stanza break as a decorative pause instead of asking what the second stanza revises.",
      "Writing 'the tone is ambiguous' when you mean you have not decided; ambiguity requires two defensible readings of the same words.",
      "Collapsing speaker into poet and then arguing about a biographical relationship the poem never specifies.",
      "Quoting the entire conceit as a block and commenting only on its first term, so the follow-through that makes it a conceit goes unanalyzed.",
    ],
    practiceSet: {
      id: "lit-u5-set",
      title: "Unit 5 Practice: Conceit, Meter, and the Turn",
      focus:
        "Following a clock conceit through a tonal shift, reading a metrical overrun as meaning, and arguing from an ambiguity the last lines refuse to resolve.",
      estimatedMinutes: 45,
      calculator: "n/a",
      problems: [
        {
          id: "lit-u5-q1",
          kind: "multiple-choice",
          label: "MCQ 1",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I keep you as a clock keeps time,\n 2  each morning wound and set and true.\n 3  Your face is what I turn to when\n 4  the afternoon has slipped from view,\n 5  and if the striking hour goes mute\n 6  I blame the spring, the oil, the pin -\n 7  never the room that would not hear,\n 8  never the hand that would not wind.\n\n 9  One evening, though, the clock ran down.\n10  I, who had praised its even pace,\n11  sat in a house without an hour.\n12  The quiet was not rest. It was\n13  the sound of being kept, and keeping,\n14  and I could not tell them apart\n15  until the dark itself stood still\n16  and would not, for my asking, move.",
          prompt:
            "The conceit of the addressee as a clock, developed through lines 1-8, primarily characterizes the relationship as one the speaker",
          choices: [
            { label: "A", text: "experiences as a race against limited time" },
            { label: "B", text: "maintains by routine, and whose silences the speaker would rather treat as mechanical faults than as failures of attention" },
            { label: "C", text: "regards as cold and impersonal, since clocks cannot feel" },
            { label: "D", text: "hopes to end, because a clock that must be wound is a burden" },
            { label: "E", text: "understands as public display, since clocks belong on a visible wall" },
          ],
          answer: "B",
          solution:
            "The vehicle donates maintenance, not urgency: \"each morning wound and set and true\" is a ritual of keeping. When the hour \"goes mute,\" the speaker blames \"the spring, the oil, the pin\" and, by the doubled \"never,\" refuses to blame the room or the hand - the two agents that would make the silence a human choice. The conceit is already a system of excuses.",
          note:
            "A seizes the most available association of clocks - running out of time - instead of the association this poem activates through winding and blame. C treats the vehicle as a verdict on warmth, which the poem never argues. D inverts the first stanza's protective pride in the clock's evenness.",
        },
        {
          id: "lit-u5-q2",
          kind: "multiple-choice",
          label: "MCQ 2",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I keep you as a clock keeps time,\n 2  each morning wound and set and true.\n 3  Your face is what I turn to when\n 4  the afternoon has slipped from view,\n 5  and if the striking hour goes mute\n 6  I blame the spring, the oil, the pin -\n 7  never the room that would not hear,\n 8  never the hand that would not wind.\n\n 9  One evening, though, the clock ran down.\n10  I, who had praised its even pace,\n11  sat in a house without an hour.\n12  The quiet was not rest. It was\n13  the sound of being kept, and keeping,\n14  and I could not tell them apart\n15  until the dark itself stood still\n16  and would not, for my asking, move.",
          prompt:
            "The parallel refusals in lines 7-8 (\"never the room... never the hand\") function chiefly to",
          choices: [
            { label: "A", text: "establish a rhyme scheme the second stanza will complete" },
            { label: "B", text: "introduce a second speaker who contradicts the first" },
            { label: "C", text: "let the speaker's denial name the two agents - setting and the speaker's own hand - that the conceit had been designed to excuse" },
            { label: "D", text: "indicate that the clock is broken in two separate places and needs repair" },
            { label: "E", text: "shift the poem from addressing \"you\" to addressing the reader" },
          ],
          answer: "C",
          solution:
            "Anaphora plus negation is a confession that will not call itself one. \"Never the room that would not hear\" and \"never the hand that would not wind\" specify the very causes the speaker has just refused: a setting that ignores the hour, and a hand - grammatically the speaker's - that will not do the winding. The conceit's machinery is named at the moment it is disowned.",
          note:
            "A hunts for a form the poem does not claim; these lines do not rhyme, and stanza 2 does not complete a scheme. B and E misread a shift in candor as a shift in who is speaking. D literalizes the vehicle into a repair plot.",
        },
        {
          id: "lit-u5-q3",
          kind: "multiple-choice",
          label: "MCQ 3",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I keep you as a clock keeps time,\n 2  each morning wound and set and true.\n 3  Your face is what I turn to when\n 4  the afternoon has slipped from view,\n 5  and if the striking hour goes mute\n 6  I blame the spring, the oil, the pin -\n 7  never the room that would not hear,\n 8  never the hand that would not wind.\n\n 9  One evening, though, the clock ran down.\n10  I, who had praised its even pace,\n11  sat in a house without an hour.\n12  The quiet was not rest. It was\n13  the sound of being kept, and keeping,\n14  and I could not tell them apart\n15  until the dark itself stood still\n16  and would not, for my asking, move.",
          prompt:
            "The poem's decisive tonal shift - the point at which the conceit stops flattering the relationship and begins to judge it - occurs at",
          choices: [
            { label: "A", text: "line 1, with the opening comparison to a clock" },
            { label: "B", text: "line 5, with \"and if the striking hour goes mute\"" },
            { label: "C", text: "line 9, with \"One evening, though, the clock ran down\"" },
            { label: "D", text: "line 12, with \"The quiet was not rest\"" },
            { label: "E", text: "line 16, with \"and would not, for my asking, move\"" },
          ],
          answer: "C",
          solution:
            "\"Though\" is the hinge. Stanza 1 maintains the clock by ritual and by blame assigned to parts; stanza 2 begins when that maintenance fails as an event - \"the clock ran down\" - and the speaker who \"had praised its even pace\" is left in a house \"without an hour.\" Agency leaves the speaker's morning winding and passes to the clock's stopping, which is the tonal drop from protective pride to aftermath.",
          note:
            "B is a hypothetical mute hour still managed by the speaker's system of blame; the attitude has not yet changed. D and E are consequences of the turn, not the turn. A names the conceit's start, which is the first stanza's project, not its revision.",
        },
        {
          id: "lit-u5-q4",
          kind: "multiple-choice",
          label: "MCQ 4",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I keep you as a clock keeps time,\n 2  each morning wound and set and true.\n 3  Your face is what I turn to when\n 4  the afternoon has slipped from view,\n 5  and if the striking hour goes mute\n 6  I blame the spring, the oil, the pin -\n 7  never the room that would not hear,\n 8  never the hand that would not wind.\n\n 9  One evening, though, the clock ran down.\n10  I, who had praised its even pace,\n11  sat in a house without an hour.\n12  The quiet was not rest. It was\n13  the sound of being kept, and keeping,\n14  and I could not tell them apart\n15  until the dark itself stood still\n16  and would not, for my asking, move.",
          prompt:
            "The extra unstressed syllable at the end of line 13 (\"keeping\") works together with the caesura in line 12 chiefly to",
          choices: [
            { label: "A", text: "complete a heroic couplet that has been building since line 11" },
            { label: "B", text: "imitate the ticking of a clock by adding a beat the first stanza never used" },
            { label: "C", text: "let the even tetrameter the speaker had praised overrun and stall, so the conceit's 'even pace' fails in the line that names captivity" },
            { label: "D", text: "signal that a new speaker has taken over the second stanza" },
            { label: "E", text: "create a rhyme with \"apart\" in line 14" },
          ],
          answer: "C",
          solution:
            "Lines 1-6 move in even iambic tetrameter, the metrical version of the \"even pace\" line 10 will admit to having praised. Line 12 stops mid-thought at \"rest.\" Line 13 then overruns the eight-syllable pattern on the feminine ending \"keeping.\" Form enacts content: the regular winding will not resolve on a stress at the exact moment the speaker hears care and captivity as one sound.",
          note:
            "B reverses the effect - an extra unstressed ending is a stumble, not a tick. A invents a couplet (and heroic couplets are iambic pentameter). E is checkable and false: \"keeping\" and \"apart\" do not rhyme. Meter questions on this exam punish the student who names a form the poem does not have.",
        },
        {
          id: "lit-u5-q5",
          kind: "multiple-choice",
          label: "MCQ 5",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I keep you as a clock keeps time,\n 2  each morning wound and set and true.\n 3  Your face is what I turn to when\n 4  the afternoon has slipped from view,\n 5  and if the striking hour goes mute\n 6  I blame the spring, the oil, the pin -\n 7  never the room that would not hear,\n 8  never the hand that would not wind.\n\n 9  One evening, though, the clock ran down.\n10  I, who had praised its even pace,\n11  sat in a house without an hour.\n12  The quiet was not rest. It was\n13  the sound of being kept, and keeping,\n14  and I could not tell them apart\n15  until the dark itself stood still\n16  and would not, for my asking, move.",
          prompt:
            "The ambiguity of \"being kept, and keeping\" (line 13) is productive chiefly because it",
          choices: [
            { label: "A", text: "leaves open whether the speaker owns one clock or several" },
            { label: "B", text: "collapses the distinction between the speaker as winder and the speaker as the thing wound, so care and captivity occupy the same sound" },
            { label: "C", text: "hints that the addressee has already left the house for good" },
            { label: "D", text: "suggests the speaker cannot remember how clocks work" },
            { label: "E", text: "creates uncertainty about whether the poem is set at dawn or at night" },
          ],
          answer: "B",
          solution:
            "\"Kept\" and \"keeping\" are the two roles the conceit assigned to different parties: the clock is kept (wound, set), and the speaker does the keeping. The line makes those roles a single \"sound\" the speaker \"could not tell... apart.\" Both meanings are grammatically live, and the poem needs both: the relationship was maintenance and it was confinement, and the second stanza's quiet is the noise of not being able to separate them.",
          note:
            "A and D treat ambiguity as confusion about objects or facts. C infers a plot event the syntax does not force. E grabs \"evening\" and \"dark\" from later lines and pretends the phrase is about the time of day. If you cannot state two meanings of the same words, you do not yet have ambiguity - you have a guess.",
        },
        {
          id: "lit-u5-q6",
          kind: "free-response",
          label: "FRQ 1",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I keep you as a clock keeps time,\n 2  each morning wound and set and true.\n 3  Your face is what I turn to when\n 4  the afternoon has slipped from view,\n 5  and if the striking hour goes mute\n 6  I blame the spring, the oil, the pin -\n 7  never the room that would not hear,\n 8  never the hand that would not wind.\n\n 9  One evening, though, the clock ran down.\n10  I, who had praised its even pace,\n11  sat in a house without an hour.\n12  The quiet was not rest. It was\n13  the sound of being kept, and keeping,\n14  and I could not tell them apart\n15  until the dark itself stood still\n16  and would not, for my asking, move.",
          prompt:
            "Write a thesis statement and one body paragraph analyzing how the poem's extended metaphor and its shift between stanzas convey the speaker's complex attitude toward the relationship. Take 25 minutes, which is the pace FRQ 1 demands on exam day.",
          parts: [
            { label: "(a)", text: "Thesis: one sentence that could not be written about stanza 1 alone - name the complexity the turn produces." },
            { label: "(b)", text: "Body paragraph: follow the conceit through at least one detail in each stanza, embedding brief quotations." },
            { label: "(c)", text: "Include one sentence that treats either the metrical overrun at \"keeping\" or the ambiguity of kept/keeping as evidence, not as decoration." },
            { label: "(d)", text: "Self-score with the rubric below, then rewrite only the thesis." },
          ],
          solution:
            "Model thesis: The speaker's clock conceit begins as a ritual of care that quietly refuses responsibility, and the second stanza lets that same comparison run down until keeping and being kept are indistinguishable - an aftermath the speaker can describe but can no longer wind back into evenness.\n\nModel body paragraph: In the first stanza the conceit looks like devotion because it is built of maintenance. \"I keep you as a clock keeps time\" and \"each morning wound and set and true\" import regularity and attention, yet the vehicle also imports a loophole: when the hour \"goes mute,\" the speaker blames \"the spring, the oil, the pin\" and will \"never\" blame \"the room that would not hear\" or \"the hand that would not wind.\" The doubled refusal names the human causes - a setting that ignores the hour, a hand that will not do the work - at the exact moment it disowns them, so the even tetrameter of those opening lines is already the sound of a system that will not examine itself. The stanza break revises the bargain. \"One evening, though, the clock ran down,\" and the speaker who \"had praised its even pace\" is left \"in a house without an hour.\" The conceit now judges the keeper: \"The quiet was not rest. It was / the sound of being kept, and keeping,\" a line that overruns the eight-syllable pattern on the extra unstressed syllable of \"keeping\" and, in the same overrun, collapses winder and wound into one sound the speaker \"could not tell... apart.\" By the close, even darkness - which should pass as time passes - \"would not, for my asking, move,\" so the hand that would not wind in stanza 1 is answered by a world that will not be wound in stanza 2. Care was captivity all along; the poem simply required the clock to stop before the speaker could hear it.\n\nWhy the thesis earns the point: it takes a position (the conceit is a refusal that the turn exposes) and predicts the movement from maintenance to indistinguishability.",
          rubric: [
            { points: "Row A: 0-1 pt", criterion: "Thesis - responds to the prompt with a defensible interpretation of the speaker's complex attitude that accounts for the poem's turn. A list of devices, or a claim true of stanza 1 only, earns 0." },
            { points: "Row B: 0-4 pts", criterion: "Evidence and Commentary - selects specific textual evidence and explains how it supports a line of reasoning. Brief quotations from both stanzas; commentary that follows the conceit's logic and explains how the shift in attitude is made. 4 points requires consistent explanation of the how, including at least one formal choice (meter, stanza break, or ambiguity)." },
            { points: "Row C: 0-1 pt", criterion: "Sophistication - earned by sustaining the conceit through its reversal, or by keeping both meanings of kept/keeping in play, not by elevated vocabulary." },
            { points: "Self-check", criterion: "If your paragraph could be pasted onto a different clock poem without changing a sentence, you have described clocks instead of reading this one." },
          ],
          note:
            "This is FRQ 1 with Unit 5's extra demand: the comparison has to be followed until it turns. If you stop after calling the beloved a clock, you have written the Unit 2 version of the essay and left the sophistication point on the table.",
        },
      ],
    },
  },
];

