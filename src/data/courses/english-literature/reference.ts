import type { BigIdea, FrqType, SkillCategory } from "@/data/types";

/** The CED big ideas that organize every AP Lit unit. */
export const bigIdeas: BigIdea[] = [
  {
    id: "lit-bi-character",
    title: "Character",
    abbreviation: "CHR",
    description:
      "Characters are constructed, not real people, so the question is never 'what is this person like?' but 'what is this description doing?' Track how a character's speech, actions, and the details chosen to describe them reveal values, generate conflict, and change - or conspicuously fail to change - across a text. Perspective and bias belong here too: a character's limited view of events is itself characterization.",
  },
  {
    id: "lit-bi-setting",
    title: "Setting",
    abbreviation: "SET",
    description:
      "Setting is time, place, and social situation, and it earns its keep by producing mood, constraining what characters can plausibly do, and standing in symbolic relation to them. Strong analysis names the specific detail (a shuttered parlor, a frozen field, a colonial garrison) and explains the pressure it exerts, rather than reporting that the story 'takes place in the 1800s.'",
  },
  {
    id: "lit-bi-structure",
    title: "Structure",
    abbreviation: "STR",
    description:
      "The arrangement of a text is an argument about what matters. Attend to where the text begins, what it withholds, where contrasts and parallels fall, how time is manipulated through flashback or foreshadowing, and where a shift in tone or claim occurs. In poetry this includes stanza and line breaks, volta, and the sentence running against the line.",
  },
  {
    id: "lit-bi-narration",
    title: "Narration",
    abbreviation: "NAR",
    description:
      "Someone is always mediating the text. Identify the narrator or speaker, the point of view, the distance between narrator and character, and the reliability of what we are told - then explain how those choices control sympathy and information. This is the most heavily tested big idea on the multiple-choice section, and the one students most often reduce to naming 'third person limited' and stopping.",
  },
  {
    id: "lit-bi-figurative-language",
    title: "Figurative Language",
    abbreviation: "FIG",
    description:
      "Word choice, imagery, simile, metaphor, personification, allusion, symbol, motif, hyperbole, understatement, and irony. The analytic move is always comparison: a figure yokes two unlike things, and the meaning lives in what carries over and what does not. Identifying a device is worth nothing; explaining the effect of the comparison is the whole point.",
  },
  {
    id: "lit-bi-literary-argumentation",
    title: "Literary Argumentation",
    abbreviation: "LAN",
    description:
      "Writing a defensible interpretive claim and sustaining it with selected, specific textual evidence and commentary that explains how the evidence supports the line of reasoning. This is the big idea the three essays actually score. A thesis that merely restates the prompt, or evidence that is summarized rather than interpreted, fails here no matter how much you know about the book.",
  },
];

/** Numbered skill categories with their multiple-choice exam weightings. */
export const skillCategories: SkillCategory[] = [
  {
    id: "lit-skill-1",
    number: 1,
    title: "Explain the function of character",
    examWeight: "16-20% of multiple-choice questions",
    examWeightMidpoint: 18,
    description:
      "Identify and describe what characters say and do, explain the function of contrasting characters, describe how a character's own perspective affects a text, and explain how character development contributes to interpretation. Exam questions here often hinge on a single revealing verb or adjective in a description.",
  },
  {
    id: "lit-skill-2",
    number: 2,
    title: "Explain the function of setting",
    examWeight: "3-6% of multiple-choice questions",
    examWeightMidpoint: 4.5,
    description:
      "Identify and describe specific textual details that convey time, place, and social milieu, and explain the function of setting in relation to mood, character, and meaning. The lightest weighting on the exam, but setting questions are usually gettable points because the evidence is concentrated in a few lines.",
  },
  {
    id: "lit-skill-3",
    number: 3,
    title: "Explain the function of plot and structure",
    examWeight: "16-20% of multiple-choice questions",
    examWeightMidpoint: 18,
    description:
      "Identify and describe how plot orders events, explain the function of a particular sequence, contrast, or juxtaposition, and explain how a structural choice - including where a text stops - contributes to interpretation. In poetry this covers stanza organization, the turn, and the relationship between syntax and line.",
  },
  {
    id: "lit-skill-4",
    number: 4,
    title: "Explain the function of the narrator or speaker",
    examWeight: "21-26% of multiple-choice questions",
    examWeightMidpoint: 23.5,
    description:
      "Identify and describe the narrator or speaker, explain how point of view and narrative distance control what a reader knows, and explain how a narrator's reliability or bias affects interpretation. This is the single heaviest skill category on the multiple-choice section, so time spent on free indirect discourse and unreliability pays off directly.",
  },
  {
    id: "lit-skill-5",
    number: 5,
    title: "Explain the function of word choice, imagery, and symbols",
    examWeight: "10-13% of multiple-choice questions",
    examWeightMidpoint: 11.5,
    description:
      "Distinguish denotation from connotation, explain the function of specific words and images, identify and explain the function of a symbol, and distinguish a symbol from a motif. Questions frequently ask which alternative word would least change the meaning of a line - a connotation test in disguise.",
  },
  {
    id: "lit-skill-6",
    number: 6,
    title: "Explain the function of comparison",
    examWeight: "10-13% of multiple-choice questions",
    examWeightMidpoint: 11.5,
    description:
      "Identify and explain the function of simile, metaphor, personification, allusion, hyperbole, understatement, irony, and paradox. Credit comes from articulating the two terms of the comparison and what the comparison implies, including where the comparison strains or breaks down.",
  },
  {
    id: "lit-skill-7",
    number: 7,
    title: "Develop textually substantiated arguments about interpretations of part or all of a text",
    examWeight: "10-13% of multiple-choice questions",
    examWeightMidpoint: 11.5,
    description:
      "Develop a paragraph or essay that makes a defensible claim, selects and embeds relevant evidence, explains how the evidence supports the claim, uses appropriate grammar and punctuation, and situates the interpretation within a broader context. On the multiple-choice section this surfaces as 'which claim is best supported by the passage' items; on the free-response section it is the entire scoring rubric.",
  },
];

/** Q1 poetry analysis, Q2 prose fiction analysis, Q3 literary argument. */
export const frqTypes: FrqType[] = [
  {
    id: "lit-frq-1",
    number: 1,
    title: "Poetry Analysis",
    suggestedMinutes: 40,
    description:
      "You are given one poem (usually 12-40 lines, from any period) and a prompt naming a subject to analyze - a speaker's complex attitude, a shifting relationship, a tension between two ideas - and asked to analyze how the poet uses literary elements and techniques to convey it. Read the poem twice before writing: once for the literal situation (who speaks, to whom, about what, when), once for the turn. Almost every scoreable poem has a pivot, and locating it is the fastest route to a defensible thesis. Spend roughly 10 minutes reading and annotating and 30 minutes writing.",
    rubric: [
      {
        points: "Row A: 0-1 pt",
        criterion: "Thesis - responds to the prompt with a defensible interpretation of the poem.",
        guidance:
          "Earn the point by making an interpretive claim that could be argued against and that answers the specific prompt. Readers refuse to reward a restatement of the prompt, a summary of what the poem says, a description of features with no claim ('the poet uses imagery and diction to create meaning'), or a bare statement of the obvious subject. The thesis may appear anywhere in the response and may be more than one sentence, but if the only claim is that the poem is about loss, there is nothing to defend and Row A is 0 - which also caps Row B at 3 and makes Row C nearly unreachable.",
      },
      {
        points: "Row B: 0-4 pts",
        criterion:
          "Evidence and Commentary - selects specific textual evidence and explains how it supports a line of reasoning.",
        guidance:
          "1 point: evidence is mostly general, or the response mentions elements without any explanation. 2 points: some specific evidence, but commentary restates the evidence or explains only what the poem says rather than how it works. 3 points: specific evidence supports all claims in a line of reasoning, and commentary explains how at least one piece of evidence supports the claim. 4 points: consistent, well-chosen evidence with commentary that consistently explains how the evidence supports a line of reasoning and explains how multiple literary elements or techniques contribute to meaning. The refusals to know: quoting without analyzing, listing devices, paraphrasing line by line, and analyzing devices in isolation from the argument. A response that never names the poem's actual language cannot rise above 2.",
      },
      {
        points: "Row C: 0-1 pt",
        criterion: "Sophistication - demonstrates sophistication of thought or a complex literary argument.",
        guidance:
          "Earn the point by doing one of these consistently, not in a single flourish: identifying and exploring tensions, ambiguities, or contradictions within the poem; illuminating the interpretation by situating it in a broader context; accounting for alternative interpretations; or writing with a vivid and persuasive style throughout. Readers refuse to reward hedged gestures at complexity ('this could also mean many things'), sweeping generalizations about society or human nature, a single perceptive sentence in an otherwise thin essay, or ornamental vocabulary. This point is rare by design; the reliable path is to take the poem's strongest counter-detail seriously and fold it into the claim.",
      },
    ],
    sampleTheses: [
      {
        context:
          "Emily Dickinson, \"Because I could not stop for Death\" - analyze how the poet conveys the speaker's complex attitude toward death.",
        thesis:
          "By casting Death as a courteous suitor whose carriage moves with 'no haste,' Dickinson lets the speaker narrate her own annihilation as a leisurely social call; the poem's civility is not consolation but the very thing that makes the final recognition of 'Eternity' feel like a trap the speaker entered politely and cannot leave.",
        why:
          "It names the governing figure (Death as suitor), it is defensible rather than obvious, and it builds in the tension the poem actually generates - courtesy against horror - which gives the essay somewhere to go in Row B and a genuine shot at Row C.",
      },
      {
        context:
          "Robert Browning, \"My Last Duchess\" - analyze how the poet uses the speaker's own words to reveal more than the speaker intends.",
        thesis:
          "The Duke's fluent, enjambed monologue is designed to control a listener, but Browning arranges the couplets so that every attempt at self-justification - 'I gave commands; / Then all smiles stopped together' - discloses the possessiveness the Duke believes he is concealing, making the poem's real subject the gap between his rhetoric and our judgment.",
        why:
          "The claim is about function, not content: it explains what the form does to the speaker. It also sets up the essay to analyze at least two elements - dramatic monologue and enjambment against rhyme - which Row B's fourth point requires.",
      },
      {
        context:
          "Thomas Hardy, \"The Darkling Thrush\" - analyze how the poem conveys a shifting response to the landscape.",
        thesis:
          "Hardy spends two stanzas making the century's end into a corpse - 'The land's sharp features seemed to be / The Century's corpse outleant' - so that when the 'aged thrush' flings its song into the gloom, the speaker can register hope only as something he cannot account for, and the poem ends by conceding knowledge to a bird rather than to himself.",
        why:
          "It locates the structural turn (stanza three), quotes precisely, and characterizes the shift as a limitation of the speaker rather than as simple optimism - a reading the last line supports and a weaker essay would miss.",
      },
    ],
  },
  {
    id: "lit-frq-2",
    number: 2,
    title: "Prose Fiction Analysis",
    suggestedMinutes: 40,
    description:
      "You are given an excerpt of prose fiction (usually 500-900 words, novel or short story) and asked to analyze how the author uses literary techniques to develop a character, a relationship, or a complex tension. The excerpt is chosen to reward attention to narration: who is telling this, how close are they to the character's mind, and what does the narrator let us know that the character does not? Annotate for shifts - in narrative distance, in the character's stated versus implied feeling, in sentence length - and build the thesis on one. Roughly 10 minutes reading, 30 writing.",
    rubric: [
      {
        points: "Row A: 0-1 pt",
        criterion: "Thesis - responds to the prompt with a defensible interpretation of the passage.",
        guidance:
          "The claim must be about the passage in front of you, not the novel it came from, and it must be arguable. Readers refuse to reward plot summary, a list of techniques the author 'uses,' a restatement of the prompt with synonyms, or a claim about a character's feeling so uncontroversial that no evidence is needed ('the character feels conflicted'). A useful test: could a careful reader disagree with this sentence? If not, sharpen it by naming the specific technique that produces the effect.",
      },
      {
        points: "Row B: 0-4 pts",
        criterion:
          "Evidence and Commentary - selects specific textual evidence and explains how it supports a line of reasoning.",
        guidance:
          "1 point: general references to the passage with no real explanation. 2 points: some specific evidence but commentary that summarizes the plot or explains what happens rather than how the writing works. 3 points: specific evidence for all claims plus commentary that explains how at least one piece of evidence supports the claim. 4 points: consistently well-chosen evidence, commentary that consistently explains how the evidence supports a line of reasoning, and explanation of how multiple literary techniques contribute to meaning. Readers refuse to reward long block quotations left unexplained, retelling of the excerpt in order, biographical speculation about the author, and any claim about the rest of the novel that the excerpt cannot support.",
      },
      {
        points: "Row C: 0-1 pt",
        criterion: "Sophistication - demonstrates sophistication of thought or a complex literary argument.",
        guidance:
          "Award the point for consistently exploring the passage's tensions and ambiguities, situating the interpretation in a broader context that genuinely illuminates it, accounting for a plausible alternative reading, or sustaining a vivid and persuasive style. On prose passages the most reliable route is narrative distance: showing that the narrator's sympathy and the character's self-understanding diverge, and reading the passage from that gap. Readers refuse to reward universalizing conclusions ('this shows the human condition'), a tacked-on final paragraph about society, and complexity asserted rather than demonstrated.",
      },
    ],
    sampleTheses: [
      {
        context:
          "Kate Chopin, \"The Story of an Hour\" - analyze how Chopin develops Louise Mallard's response to the news of her husband's death.",
        thesis:
          "Chopin keeps the narration a half-step outside Louise's mind - the feeling approaching her is 'too subtle and elusive to name' - so that the reader watches her recognize her own freedom before she will say the word 'free,' and the story's shock is less that a widow is glad than that language itself has to be dragged into admitting it.",
        why:
          "It is a claim about technique (narrative distance and delayed naming) rather than about how Louise feels, it quotes exactly, and it explains the effect on the reader, which is what Row B commentary has to keep doing.",
      },
      {
        context:
          "James Joyce, \"Eveline\" from Dubliners - analyze how Joyce presents Eveline's relationship to home.",
        thesis:
          "Joyce filters the room's 'odour of dusty cretonne' through Eveline's own idiom rather than a narrator's, and the free indirect style makes her inventory of duties indistinguishable from her longing to escape them, so that her final paralysis at the quay reads not as a decision but as the only motion the prose ever allowed her.",
        why:
          "It names the specific technique (free indirect discourse), ties a concrete detail to it, and produces a defensible reading of the ending that a summary-based essay could not reach - exactly the move Row C rewards.",
      },
    ],
  },
  {
    id: "lit-frq-3",
    number: 3,
    title: "Literary Argument",
    suggestedMinutes: 40,
    description:
      "You are given a general prompt about a literary concept - a character who deceives themselves, a place that shapes identity, a decision with unintended consequences - and a list of suggested works, though any work of comparable literary merit is acceptable. You write from memory, so the preparation is choosing three or four works you know at the level of specific scenes, names, and phrasing, not themes. Do not summarize the plot; select the two or three moments that bear on the prompt and reason about them. Roughly 5 minutes planning, 35 writing.",
    rubric: [
      {
        points: "Row A: 0-1 pt",
        criterion: "Thesis - responds to the prompt with a defensible interpretation of a chosen work.",
        guidance:
          "The claim must interpret the work in light of the prompt's concept, not merely announce that the work contains the concept. 'In Hamlet, delay is important' earns nothing; a claim about what Hamlet's delay reveals about the play's view of certainty is arguable. Readers refuse to reward a thesis about the prompt's topic in general with no reference to a text, a five-paragraph roadmap that lists devices, and a claim that the essay then abandons.",
      },
      {
        points: "Row B: 0-4 pts",
        criterion:
          "Evidence and Commentary - selects evidence from a chosen work and explains how it supports a line of reasoning.",
        guidance:
          "1 point: general references to the work. 2 points: specific evidence but commentary that summarizes rather than interprets. 3 points: specific evidence supporting all claims in a line of reasoning, with commentary explaining how at least one piece of evidence supports the claim. 4 points: consistent specific evidence, commentary that consistently explains the connection to a line of reasoning, and explanation of how multiple literary elements or techniques contribute to the work's meaning. Because you write from memory, precision is the differentiator: named characters, particular scenes, and remembered phrasing read as evidence, while 'at the end of the book' reads as general. Misremembered plot facts do cost credibility and can cost points when the commentary depends on them.",
      },
      {
        points: "Row C: 0-1 pt",
        criterion: "Sophistication - demonstrates sophistication of thought or a complex literary argument.",
        guidance:
          "Award the point for consistently exploring complexities or tensions across the whole work, situating the interpretation in a broader literary or historical context that illuminates rather than decorates, accounting for alternative interpretations, or sustaining a persuasive style. Readers refuse to reward the essay that ends by generalizing about all of humanity, the essay that name-drops a movement it does not use, and the essay that mentions a counterargument only to dismiss it in a clause. Choosing a work whose evidence genuinely cuts both ways is the most dependable preparation for this point.",
      },
    ],
    sampleTheses: [
      {
        context:
          "Prompt: choose a work in which a character's pursuit of an ideal proves destructive, and analyze how that pursuit contributes to the meaning of the work. Text: Henrik Ibsen, A Doll's House.",
        thesis:
          "Ibsen makes Torvald's ideal of the untainted home, not Nora's forgery, the play's real engine of ruin: because he can imagine reputation only as something a wife might damage, his 'miracle' never arrives, and Nora's exit converts the domestic ideal from a shelter into the thing she must break to exist.",
        why:
          "It reassigns the prompt's 'destructive pursuit' to the character readers usually treat as background, which makes the claim defensible rather than obvious, and it commits the essay to the play's ending as evidence.",
      },
      {
        context:
          "Prompt: choose a work in which a character deceives themselves, and analyze how that self-deception illuminates the work as a whole. Text: Thomas Hardy, Tess of the d'Urbervilles.",
        thesis:
          "Angel Clare's insistence that he loves 'a woman' rather than the woman in front of him is the novel's central self-deception, and Hardy structures Tess's confessions and Angel's flight to Brazil as a repeated test that his ideal keeps failing, so that the tragedy indicts a moral vocabulary rather than a fallen heroine.",
        why:
          "It identifies a specific, arguable self-deception with textual grounding, and by naming structure (paired confessions, the Brazil interval) it opens the multi-element analysis Row B's fourth point requires.",
      },
      {
        context:
          "Prompt: choose a work in which a social setting constrains a character's choices, and analyze how the author uses that constraint to develop meaning. Text: Edith Wharton, The Age of Innocence.",
        thesis:
          "Wharton gives Old New York the authority of a ritual rather than a rule, so that Newland Archer is never forbidden anything and therefore never rebels; the novel's final scene, in which he chooses a bench outside Ellen's window over the door, shows constraint completed as habit - the character enforcing on himself what society no longer needs to.",
        why:
          "It defines the constraint precisely (custom, not prohibition), uses a single decisive scene instead of plot summary, and builds in the tension between freedom and self-limitation that Row C rewards when sustained.",
      },
    ],
  },
];

export const resources: { label: string; detail: string }[] = [
  {
    label: "AP Classroom (College Board)",
    detail:
      "Your teacher's AP Classroom account has the official Personal Progress Checks for all nine units and a bank of released multiple-choice sets and free-response questions. These items are written by the same people who write the exam, so a passage set from AP Classroom is worth three from a commercial prep book. Do the Progress Check for each unit the week you finish it, not in May.",
  },
  {
    label: "Released free-response questions and scoring guidelines (AP Central)",
    detail:
      "Every Q1, Q2, and Q3 from past exams is posted free with its scoring guidelines, sample student responses at each score level, and the chief reader's report. Read the guidelines and the annotated samples before you write your own version of that prompt: seeing exactly why a real essay got a 4 instead of a 5 on Row B teaches more than another timed essay.",
  },
  {
    label: "Project Gutenberg",
    detail:
      "Free, complete, public-domain texts of nearly every pre-1929 author the exam draws on - Shakespeare, Ibsen, Hardy, Henry James, Chopin, Joyce's Dubliners, Wharton, Austen, the Brontes. Use it to build your own timed prose practice: open a novel you have not read, take any 700-word stretch, and analyze it cold in 40 minutes.",
  },
  {
    label: "Poetry Foundation",
    detail:
      "A large searchable archive of poems with reliable texts, plus audio readings and short glossary entries on form and terminology. Search by form or by poet to drill Q1 under time: pick an unfamiliar poem of 15-30 lines, give yourself 10 minutes to find the turn, and write the thesis only.",
  },
];
