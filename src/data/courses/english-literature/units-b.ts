import type { Unit } from "@/data/types";

/** CED units 6-9: Longer Fiction or Drama II, Short Fiction III, Poetry III, Longer Fiction or Drama III. */
export const unitsB: Unit[] = [
  /* ------------------------------------------------------------------ */
  {
    id: "lit-u6",
    number: "6",
    title: "Longer Fiction or Drama II",
    examWeight: "12-15%",
    examWeightMidpoint: 13.5,
    classPeriods: "~19-22 class periods",
    summary:
      "Your second full-length novel or play, read with the assumption that character is built out of contrast and that the reader often knows more than the characters do. The unit's real difficulty is scale: an interpretation of four hundred pages has to be held together by a line of reasoning, not by a list of things you noticed.",
    topics: [
      {
        id: "lit-u6-t1",
        title: "Character interaction as the source of conflict",
        detail:
          "Mastery looks like analyzing one exchange - who concedes, who changes the subject, who is permitted to finish a sentence - and explaining the conflict it produces, instead of describing the two personalities separately.",
      },
      {
        id: "lit-u6-t2",
        title: "Foil characters and the function of contrast",
        detail:
          "Name the single axis on which two characters differ (decisiveness, faith, class mobility) and explain what the contrast makes visible in the protagonist that could not be seen alone. A foil is a lens, not a rival.",
      },
      {
        id: "lit-u6-t3",
        title: "Dramatic irony and the reader's superior knowledge",
        detail:
          "Identify precisely what the audience knows that the character does not, then explain the effect that gap produces - dread, judgment, or pity - and why the author withheld it from the character rather than from us.",
      },
      {
        id: "lit-u6-t4",
        title: "Narrative distance and the narrator's tone",
        detail:
          "Distinguish the narrator's evaluation of an event from the character's, and notice the sentences where the distance closes or widens. Mastery is being able to point to the word that belongs to the narrator rather than the character.",
      },
      {
        id: "lit-u6-t5",
        title: "Symbol versus motif",
        detail:
          "A symbol is a particular thing standing for something beyond itself; a motif is a recurring element that accumulates meaning through repetition. Mastery is arguing which one a given detail is, and what the repetition adds that a single appearance could not.",
      },
      {
        id: "lit-u6-t6",
        title: "Structural juxtaposition across a long work",
        detail:
          "Pair two widely separated scenes - a first meeting and a last one, a promise and its breach - and explain what the arrangement itself argues. The claim should depend on the order of the scenes, not merely on their content.",
      },
      {
        id: "lit-u6-t7",
        title: "Pivotal moments, epiphany, and reversal",
        detail:
          "Locate where a character's understanding changes, then decide whether the text endorses the new understanding. The most interesting long works grant an epiphany the narration quietly declines to confirm.",
      },
      {
        id: "lit-u6-t8",
        title: "Building a thesis with a line of reasoning",
        detail:
          "Each body paragraph should be a step the argument needs, in an order that could not be shuffled. If your paragraphs could be rearranged without loss, you have written an inventory of devices, not a line of reasoning.",
      },
    ],
    keySkills: [
      "State a foil relationship as one sentence: 'X differs from Y in ___, which reveals ___ about Y.'",
      "For any moment of dramatic irony, write the information gap explicitly: audience knows ___; character believes ___.",
      "Distinguish narrator's judgment from character's judgment by circling evaluative words and asking who owns them",
      "Test symbol versus motif by counting appearances and asking what the later ones add",
      "Track two or three recurring elements with page numbers while you read, so essay evidence is already collected",
      "Write a working thesis at the halfway point of the book and revise it at the end rather than waiting",
    ],
    commonMistakes: [
      "Treating characters as real people with psychologies to diagnose instead of as constructions with functions.",
      "Calling any repeated image a symbol without saying what it stands for or why the repetition matters.",
      "Summarizing the plot of a long work in the essay because the reader 'needs context' - readers know the book, and summary earns nothing in Row B.",
      "Naming a foil ('Fortinbras is a foil to Hamlet') and never stating the axis of contrast or what it reveals.",
      "Confusing dramatic irony with verbal irony or with mere foreshadowing.",
      "Attributing the narrator's opinions to the author, or a character's opinions to the narrator.",
    ],
    practiceSet: {
      id: "lit-u6-set",
      title: "Unit 6 Practice: Irony, Foils, and Narrative Distance",
      focus:
        "Close reading of dramatic irony and foil relationships in Shakespeare, narrative distance in Wharton, and a timed literary argument built on structural contrast.",
      estimatedMinutes: 55,
      calculator: "n/a",
      problems: [
        {
          id: "lit-u6-q1",
          kind: "multiple-choice",
          label: "MCQ 1",
          prompt:
            "The audience has just watched Macbeth and Lady Macbeth resolve to kill Duncan. Which choice best explains the function of Duncan's and Banquo's speeches here?",
          stimulus:
            "William Shakespeare, Macbeth, Act 1, Scene 6 (before Macbeth's castle at Inverness)\n\nDUNCAN. This castle hath a pleasant seat; the air\nNimbly and sweetly recommends itself\nUnto our gentle senses.\nBANQUO.                    This guest of summer,\nThe temple-haunting martlet, does approve\nBy his loved mansionry that the heaven's breath\nSmells wooingly here: no jutty, frieze,\nButtress, nor coign of vantage, but this bird\nHath made his pendent bed and procreant cradle:\nWhere they most breed and haunt, I have observed\nThe air is delicate.",
          choices: [
            {
              label: "A",
              text: "Banquo's detailed praise of the martlet's nest signals that he privately suspects the Macbeths and is testing Duncan's judgment.",
            },
            {
              label: "B",
              text: "The pleasantness the two men describe is contradicted by what the audience already knows about the castle, so their comfort measures the extent of their danger.",
            },
            {
              label: "C",
              text: "Duncan's remarks are ironic in the sense that he intends them sarcastically, revealing that he distrusts his hosts.",
            },
            {
              label: "D",
              text: "The images of nesting and breeding predict that Macbeth's line will flourish, which the rest of the play confirms.",
            },
          ],
          answer: "B",
          solution:
            "This is textbook dramatic irony: the information gap is between the audience, who has heard the murder planned, and Duncan, who finds the air 'delicate.' Shakespeare loads the speeches with images of shelter and nurture - 'pendent bed and procreant cradle' - precisely so that the audience's knowledge converts hospitality into menace. The right answer states the gap and its effect, which is dread rather than suspicion.",
          note:
            "A is tempting because Banquo elsewhere does voice suspicion, but nothing in these lines is guarded; he is genuinely admiring the birds. C confuses dramatic irony with verbal irony - the speaker being ironic on purpose. D reverses the play's actual prophecy, which promises the succession to Banquo's line, not Macbeth's, and 'the rest of the play confirms' should always make you check.",
        },
        {
          id: "lit-u6-q2",
          kind: "multiple-choice",
          label: "MCQ 2",
          prompt: "Which statement best describes how Hamlet uses Fortinbras's army in this soliloquy?",
          stimulus:
            "William Shakespeare, Hamlet, Act 4, Scene 4\n\nHow all occasions do inform against me,\nAnd spur my dull revenge! What is a man,\nIf his chief good and market of his time\nBe but to sleep and feed? A beast, no more...\nExamples gross as earth exhort me:\nWitness this army of such mass and charge\nLed by a delicate and tender prince,\nWhose spirit with divine ambition puff'd\nMakes mouths at the invisible event,\nExposing what is mortal and unsure\nTo all that fortune, death and danger dare,\nEven for an egg-shell.",
          choices: [
            {
              label: "A",
              text: "He condemns the expedition as a waste of life, which allows him to present his own delay as the wiser course.",
            },
            {
              label: "B",
              text: "He holds the young prince up as an example that shames his own inaction, even as his own language reduces the prize to something worthless.",
            },
            {
              label: "C",
              text: "He concludes that reason is worthless and that a man should live only to 'sleep and feed.'",
            },
            {
              label: "D",
              text: "He blames fortune and death for making decisive action impossible for anyone.",
            },
          ],
          answer: "B",
          solution:
            "Hamlet explicitly frames the army as exhortation - 'Examples gross as earth exhort me' - so Fortinbras functions as a foil whose readiness to stake thousands of lives measures Hamlet's own dullness. But Hamlet chooses the words: the ambition is 'puff'd,' the cause is 'an egg-shell.' The soliloquy therefore does two things at once, praising the action while devaluing its object, and the defensible answer is the one that keeps both.",
          note:
            "A grabs the 'egg-shell' and drops 'exhort me,' which is exactly backwards; the negative diction is aimed at the cause, not at the choice to act. C misreads the rhetorical question, since Hamlet's point is that a man who only sleeps and feeds is 'a beast, no more.' D borrows real words from the passage ('fortune, death and danger') to build a claim the passage never makes - a common distractor design worth learning to spot.",
        },
        {
          id: "lit-u6-q3",
          kind: "multiple-choice",
          label: "MCQ 3",
          prompt:
            "Blood appears throughout Macbeth: on the daggers, on Lady Macbeth's imagined hands, on the Ghost of Banquo. Considering that pattern and the lines below, which analysis is most defensible?",
          stimulus:
            "William Shakespeare, Macbeth, Act 2, Scene 2 (immediately after the murder of Duncan)\n\nMACBETH. Will all great Neptune's ocean wash this blood\nClean from my hand? No, this my hand will rather\nThe multitudinous seas incarnadine,\nMaking the green one red.",
          choices: [
            {
              label: "A",
              text: "Blood is a symbol here and a motif in the play as a whole: this passage makes it stand for guilt that cannot be washed away, and its recurrence lets that meaning harden into the play's measure of conscience.",
            },
            {
              label: "B",
              text: "Blood is a motif in this passage and becomes a symbol only in Act 5, when Lady Macbeth sleepwalks.",
            },
            {
              label: "C",
              text: "Blood is neither symbol nor motif but simple realism, since a murder would in fact leave blood on a killer's hands.",
            },
            {
              label: "D",
              text: "Blood is an allegory for the Scottish civil war, with each stain representing a specific historical battle.",
            },
          ],
          answer: "A",
          solution:
            "A motif is a recurring element that accrues meaning by repetition; a symbol is a particular thing standing for something beyond itself. Here the single image does symbolic work - Macbeth's hand will redden an ocean rather than be cleansed by it, so the blood is guilt in its indelible form - and because the image returns across the play, blood is also the play's governing motif. Naming both, and explaining what the repetition adds, is the whole analytic move.",
          note:
            "B inverts the terms: one appearance cannot be a motif, and a symbol does not require a later scene to become one. C is the literalist trap - the hyperbole of 'multitudinous seas incarnadine' is not describing a cleanup problem. D upgrades symbol to allegory, which requires a systematic one-to-one correspondence the play never sets up.",
        },
        {
          id: "lit-u6-q4",
          kind: "multiple-choice",
          label: "MCQ 4",
          prompt: "The narration in this opening is best described as which of the following?",
          stimulus:
            "Edith Wharton, The Age of Innocence (1920), Chapter 1\n\nOn a January evening of the early seventies, Christine Nilsson was singing in Faust at the Academy of Music in New York.\n\nThough there was already talk of the erection, in remote metropolitan distances 'above the Forties,' of a new Opera House which should compete in costliness and splendour with those of the great European capitals, the world of fashion was still content to reassemble every winter in the shabby red and gold boxes of the sociable old Academy. Conservatives cherished it for being small and inconvenient, and thus keeping out the 'new people' whom New York was beginning to dread and yet be drawn to.",
          choices: [
            {
              label: "A",
              text: "First-person retrospective narration by a member of the society being described.",
            },
            {
              label: "B",
              text: "Third-person narration limited to Newland Archer's consciousness, which supplies the passage's irony.",
            },
            {
              label: "C",
              text: "A detached third-person narrator who reports the group's reasoning in the group's own terms, so that the values of 'Conservatives' are exposed without being denounced.",
            },
            {
              label: "D",
              text: "An unreliable narrator whose factual errors about New York undercut the account of the Academy.",
            },
          ],
          answer: "C",
          solution:
            "The narrator stands well outside the scene, dating it loosely ('the early seventies') and speaking of 'the world of fashion' as a collective. The irony comes from adopting that world's own justifications - cherishing a hall for being 'small and inconvenient' because inconvenience excludes the wrong people - and letting the absurdity show. Wharton also quotes the group's phrases, 'above the Forties' and 'new people,' rather than her own, which is how the distance is measured.",
          note:
            "A misreads the confident social overview as personal memoir; there is no 'I.' B is the most attractive wrong answer because Archer dominates the novel, but he has not appeared yet and the survey of the Academy is not filtered through anyone's mind. D applies 'unreliable' to a narrator who has told us nothing false - unreliability requires evidence that the narration itself cannot be trusted, not merely that it is ironic.",
        },
        {
          id: "lit-u6-q5",
          kind: "free-response",
          label: "FRQ 1",
          prompt:
            "In many novels and plays, the author places two characters in sustained contrast so that the reader understands one of them differently. Choose a full-length work of literary merit you have studied in which such a contrast operates, and analyze how the author uses it to develop the meaning of the work as a whole. Do not merely summarize the plot. Write for 40 minutes.",
          parts: [
            {
              label: "(a)",
              text: "Before drafting, write the contrast as a single sentence in the form: 'X differs from Y in ___, which reveals ___.'",
            },
            {
              label: "(b)",
              text: "Choose two scenes, widely separated in the work, in which the contrast operates differently, and note the order in which they appear.",
            },
            {
              label: "(c)",
              text: "Draft the essay, making the arrangement of those two scenes part of the argument.",
            },
          ],
          solution:
            "A strong response on Hamlet might argue: Shakespeare uses Laertes not to show that Hamlet is slow but to show that speed is unthinking. In Act 1 the two young men are interchangeable - both sons under a father's instruction, both leaving Denmark - so that Laertes' return in Act 4, storming the castle within a hundred lines of learning of Polonius' death, is felt as the path Hamlet declined. The play then gives Laertes the poisoned foil, which converts his decisiveness into a tool for Claudius; by Act 5 the man who acted immediately dies asking forgiveness of the man who did not. The arrangement matters: because the audience meets Laertes as Hamlet's equal and leaves him as Claudius' instrument, the play's meaning is not that revenge should be prompt but that promptness can be borrowed by whoever is willing to aim it.\n\nNote how the essay earns the rows. Row A comes from the arguable claim that Laertes' function is to indict speed rather than to shame delay. Row B comes from specific evidence - the parallel departures, the interval between news and action, the poisoned foil, the dying apology - each followed by commentary on what the parallel does rather than on what happens. Row C comes from taking seriously the reading the essay rejects, that Laertes is simply the better avenger, and showing where the play withdraws that endorsement.",
          rubric: [
            {
              points: "1 pt (Row A)",
              criterion:
                "Thesis presents a defensible interpretation of the work in which the character contrast does interpretive work; naming a foil without a claim earns 0.",
            },
            {
              points: "4 pts (Row B)",
              criterion:
                "Specific evidence from at least two separated moments; commentary explains how each supports a line of reasoning; the fourth point requires explaining how multiple elements (characterization plus structure) contribute to meaning.",
            },
            {
              points: "1 pt (Row C)",
              criterion:
                "Sustained attention to a tension the contrast creates, or a plausible alternative reading genuinely engaged rather than dismissed.",
            },
            {
              points: "Self-check",
              criterion:
                "Underline every sentence that is plot summary. If more than two survive, cut them and replace with commentary before scoring yourself.",
            },
          ],
          note:
            "Because Q3 is written from memory, the difference between a 3 and a 4 in Row B is almost always specificity: named characters and remembered phrasing read as evidence, while 'later in the play' reads as a general reference. Budget 5 minutes for parts (a) and (b); a foil essay with no stated axis of contrast rarely rises above 2 on Row B.",
        },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  {
    id: "lit-u7",
    number: "7",
    title: "Short Fiction III",
    examWeight: "7-10%",
    examWeightMidpoint: 8.5,
    classPeriods: "~10-12 class periods",
    summary:
      "The narration unit. Short fiction is where the exam tests whether you can tell the difference between what a story says and what its narrator is willing to say - unreliable narrators, retrospective narrators embarrassed by their younger selves, and free indirect style that fuses a character's idiom with the narrator's sentence.",
    topics: [
      {
        id: "lit-u7-t1",
        title: "Sources of narrator unreliability",
        detail:
          "Unreliability has causes: youth, self-interest, limited access, moral evasion, or secondhand information. Mastery is naming the cause and pointing to the sentence where the narration betrays itself, not merely asserting that a narrator 'cannot be trusted.'",
      },
      {
        id: "lit-u7-t2",
        title: "Narrative distance and free indirect discourse",
        detail:
          "In free indirect style a third-person narrator borrows a character's vocabulary and syntax without quotation marks. Mastery is identifying the words that could only be the character's and explaining what the fusion prevents the reader from doing - usually judging from outside.",
      },
      {
        id: "lit-u7-t3",
        title: "The retrospective narrator and the gap between selves",
        detail:
          "When an older narrator tells a younger self's story, two evaluations run at once. Mastery is separating the boy's belief from the man's verdict and explaining what the story gains by withholding the verdict until the end.",
      },
      {
        id: "lit-u7-t4",
        title: "Interior representation: reported thought, monologue, stream of consciousness",
        detail:
          "Distinguish a narrator summarizing a character's thought from the thought arriving in its own disordered order. Mastery is explaining what a shift into interiority does to the reader's sympathy at that exact point in the story.",
      },
      {
        id: "lit-u7-t5",
        title: "Frame narrators and secondhand testimony",
        detail:
          "A frame narrator who admits to assembling a story from other people's versions makes the act of interpretation part of the story. Mastery is treating that admission as evidence rather than as background.",
      },
      {
        id: "lit-u7-t6",
        title: "Verbal, situational, and dramatic irony in compressed forms",
        detail:
          "In a story of two thousand words a single misapplied word can carry the irony. Mastery is naming which kind of irony operates, who is its target, and whether the narrator is in on it.",
      },
      {
        id: "lit-u7-t7",
        title: "Epiphany and the weight of the final sentence",
        detail:
          "Short fiction often ends on a recognition. Mastery is asking whether the story confirms the recognition, and noticing when the last sentence is the narrator's judgment rather than the character's discovery.",
      },
      {
        id: "lit-u7-t8",
        title: "Commentary that explains rather than restates",
        detail:
          "For every quotation, the next sentence should say what the language does that a paraphrase would lose. If your commentary would survive with the quotation deleted, it is restatement and Row B will cap at 2.",
      },
    ],
    keySkills: [
      "Ask of every narrator: how do they know this, and what would they prefer not to say?",
      "Mark words in third-person narration that belong to the character's idiom - the tell for free indirect discourse",
      "Separate the narrating self from the narrated self in any retrospective story",
      "Name the irony precisely: verbal (speaker means the opposite), situational (outcome inverts expectation), dramatic (reader knows more)",
      "Read the last sentence first when a passage set is short, then read forward to see how it was earned",
      "Quote in fragments of three to eight words embedded in your own sentence, never in block form",
    ],
    commonMistakes: [
      "Calling any narrator with an opinion 'unreliable,' which drains the term of meaning.",
      "Confusing the narrator with the author, so that an ironic narrator becomes 'Chopin's cruelty' or 'Joyce's bitterness.'",
      "Treating third-person limited as though it guaranteed accuracy about the character's own feelings.",
      "Missing free indirect discourse and therefore attributing a character's self-justification to the narrator as fact.",
      "Writing about a story's theme in general terms when the prompt asks about a particular passage.",
      "Ending an essay by declaring the story timeless or universal, which readers treat as filler rather than sophistication.",
    ],
    practiceSet: {
      id: "lit-u7-set",
      title: "Unit 7 Practice: Unreliable and Distant Narration",
      focus:
        "Identifying narrative distance, retrospective judgment, and secondhand testimony in Chopin, Joyce, and Wharton, then writing a passage-based prose analysis.",
      estimatedMinutes: 55,
      calculator: "n/a",
      problems: [
        {
          id: "lit-u7-q1",
          kind: "multiple-choice",
          label: "MCQ 1",
          prompt:
            "Which choice best explains the effect of the narration's refusal to name what is approaching Louise Mallard?",
          stimulus:
            "Kate Chopin, \"The Story of an Hour\" (1894)\n\nThere was something coming to her and she was waiting for it, fearfully. What was it? She did not know; it was too subtle and elusive to name. But she felt it, creeping out of the sky, reaching toward her through the sounds, the scents, the color that filled the air.\n\nNow her bosom rose and fell tumultuously. She was beginning to recognize this thing that was approaching to possess her, and she was striving to beat it back with her will - as powerless as her two white slender hands would have been.",
          choices: [
            {
              label: "A",
              text: "It signals that Louise is mentally unwell, so the reader should distrust everything she perceives afterward.",
            },
            {
              label: "B",
              text: "It keeps the narration a step behind Louise's own understanding, so that the reader watches recognition arrive before either narrator or character will name it.",
            },
            {
              label: "C",
              text: "It withholds information from the reader that Louise already possesses, creating dramatic irony at her expense.",
            },
            {
              label: "D",
              text: "It proves the narrator has no access to Louise's mind and is reporting only her outward gestures.",
            },
          ],
          answer: "B",
          solution:
            "The narration is close enough to report the question 'What was it?' as Louise's own, but it declines to supply the answer, and the passive, elemental imagery ('creeping out of the sky') keeps the feeling exterior to her for one more beat. That controlled lag is what makes her later whispered 'free, free, free!' land as an admission rather than a statement, and it implicates the reader in the recognition.",
          note:
            "A converts narrative technique into diagnosis; her heart trouble is physical and the story never suggests delusion. C reverses the gap - the reader is ahead of Louise here, not behind her. D is contradicted by the interior access on display ('she did not know,' 'striving to beat it back with her will'); the narration is close, just deliberately unhurried.",
        },
        {
          id: "lit-u7-q2",
          kind: "multiple-choice",
          label: "MCQ 2",
          prompt: "The final sentence is best understood as which of the following?",
          stimulus:
            "James Joyce, \"Araby,\" from Dubliners (1914) - the closing lines\n\nI lingered before her stall, though I knew my stay was useless, to make my interest in her wares seem the more real. Then I turned away slowly and walked down the middle of the bazaar. I allowed the two pennies to fall against the sixpence in my pocket. I heard a voice call from the end of the gallery that the light was out. The upper part of the hall was now completely dark.\n\nGazing up into the darkness I saw myself as a creature driven and derided by vanity; and my eyes burned with anguish and anger.",
          choices: [
            {
              label: "A",
              text: "The verdict of an adult narrator on his younger self, in a diction the boy at the bazaar could not have produced.",
            },
            {
              label: "B",
              text: "The boy's thought recorded at the moment it occurs, which is why it is phrased so formally.",
            },
            {
              label: "C",
              text: "An intrusion by an omniscient narrator who has otherwise stayed outside the boy's mind.",
            },
            {
              label: "D",
              text: "Evidence that the narrator is unreliable, since his self-condemnation is clearly excessive.",
            },
          ],
          answer: "A",
          solution:
            "'Araby' is retrospective first person: the man tells the boy's story. The closing sentence is where the two selves are furthest apart, because 'a creature driven and derided by vanity' is a moral judgment in an adult's formal register, while the preceding sentences stay in the boy's plain sensory world - pennies, a voice, the dark. The story's structure depends on withholding that verdict until the light goes out.",
          note:
            "B is the trap for students who forget that first-person narration has a tense: the boy feels humiliation, but this phrasing is the man's. C is wrong because the narrator is never omniscient - he is the same character, older. D reaches for 'unreliable' because the judgment is harsh, but harshness is not unreliability; nothing in the story suggests the narrator has misrepresented events.",
        },
        {
          id: "lit-u7-q3",
          kind: "multiple-choice",
          label: "MCQ 3",
          prompt:
            "How does this opening shape the reader's relationship to the story that follows?",
          stimulus:
            "Edith Wharton, Ethan Frome (1911), from the prologue\n\nI had the story, bit by bit, from various people, and, as generally happens in such cases, each time it was a different story.\n\n... I simply felt that he lived in a depth of moral isolation too remote for casual access, and I had the sense that his loneliness was not merely the result of his personal plight, tragic as I guessed that to be, but had in it, as Harmon Gow had hinted, the profound accumulated cold of many Starkfield winters.",
          choices: [
            {
              label: "A",
              text: "It establishes an omniscient narrator whose knowledge of Ethan is complete, so later gaps must be read as Ethan's own repression.",
            },
            {
              label: "B",
              text: "It announces that the account is assembled from conflicting testimony and from the narrator's inference, making the act of interpretation part of what the reader is asked to judge.",
            },
            {
              label: "C",
              text: "It discredits the narrator so thoroughly that nothing he reports can be taken as true.",
            },
            {
              label: "D",
              text: "It shows that the narrator is one of the villagers whose gossip he transcribes without comment.",
            },
          ],
          answer: "B",
          solution:
            "Wharton opens by conceding that the versions did not agree, and the second passage is explicitly inference - 'I simply felt,' 'I had the sense,' 'as Harmon Gow had hinted.' The frame therefore does not give us Ethan; it gives us an outsider reconstructing Ethan, and the reader's job includes weighing that reconstruction. Note too that setting is doing character work here, since the isolation is attributed to 'the accumulated cold of many Starkfield winters.'",
          note:
            "A is the reflex answer for third-person novels, but this narrator says 'I' in the first sentence. C overcorrects: admitting uncertainty is a bid for credibility, not a forfeit of it, and the distinction between a limited narrator and an untrustworthy one is tested constantly. D is contradicted by 'too remote for casual access' - the narrator is a newcomer, and the whole passage is commentary rather than transcription.",
        },
        {
          id: "lit-u7-q4",
          kind: "multiple-choice",
          label: "MCQ 4",
          prompt:
            "Louise Mallard has spent the story privately welcoming her widowhood; her husband then walks in unharmed and she dies. Which analysis of the final sentence is most defensible?",
          stimulus:
            "Kate Chopin, \"The Story of an Hour\" (1894) - the last sentence\n\nWhen the doctors came they said she had died of heart disease - of joy that kills.",
          choices: [
            {
              label: "A",
              text: "The narrator states the cause of death directly, confirming that Louise loved her husband after all.",
            },
            {
              label: "B",
              text: "The sentence is verbal irony on the narrator's part, since the narrator means the exact opposite of every word in it.",
            },
            {
              label: "C",
              text: "The diagnosis is attributed to the doctors, and because the reader knows what the doctors cannot, the phrase 'joy that kills' indicts a whole way of reading women's lives.",
            },
            {
              label: "D",
              text: "The ending is situational irony only, since the reversal of Brently's death is unexpected.",
            },
          ],
          answer: "C",
          solution:
            "Chopin is careful about attribution: 'they said.' The story's final judgment is quoted from men who assume a wife's joy could only be at her husband's return, and the reader's superior knowledge turns their tidy phrase into the sharpest line in the story. That is dramatic irony operating through a narrator who declines to correct the record.",
          note:
            "A ignores 'they said' and hands the doctors' words to the narrator - the single most common misreading of this ending. B misnames the device: the narrator is not speaking ironically, the quoted diagnosis is ironic in context. D is true but incomplete, and 'only' makes it wrong; the reversal is situational, yet the force of the last line comes from the gap between what the doctors and the reader know.",
        },
        {
          id: "lit-u7-q5",
          kind: "free-response",
          label: "FRQ 1",
          prompt:
            "Read the passage below carefully. Then, in a well-written essay, analyze how Joyce uses narration, setting, and selection of detail to develop Eveline's relationship to her home. Write for 40 minutes.",
          stimulus:
            "James Joyce, \"Eveline,\" from Dubliners (1914) - the opening\n\nShe sat at the window watching the evening invade the avenue. Her head was leaned against the window curtains and in her nostrils was the odour of dusty cretonne. She was tired.\n\nFew people passed. The man out of the last house passed on his way home; she heard his footsteps clacking along the concrete pavement and afterwards crunching on the cinder path before the new red houses. One time there used to be a field there in which they used to play every evening with other people's children.\n\nHome! She looked round the room, reviewing all the familiar objects which she had dusted once a week for so many years, wondering where on earth all the dust came from.",
          parts: [
            { label: "(a)", text: "Identify two words or phrases that belong to Eveline's own idiom rather than a narrator's, and say how you can tell." },
            { label: "(b)", text: "Explain what the sequence of sounds in the second paragraph does that a summary of it would lose." },
            { label: "(c)", text: "Write the essay, building the argument on the narration's closeness to Eveline rather than on a list of devices." },
          ],
          solution:
            "A strong response argues something like: Joyce writes the passage in free indirect style so that Eveline's exhaustion and her attachment are indistinguishable, and the effect is to strip her of the distance she would need in order to choose.\n\n(a) 'Home!' is the clearest case - a one-word exclamation with no attributive tag, punctuated as speech but printed as narration, so the word arrives with her feeling already attached. 'One time there used to be a field there' is the second: the loose, repetitive phrasing ('used to be... used to play') is a speaker's memory, not a narrator's description, and the vague 'one time' is how she dates things, not how a narrator would.\n\n(b) The footsteps move from 'clacking along the concrete pavement' to 'crunching on the cinder path before the new red houses,' and the sequence tracks a man going home past the place where the field used to be. A summary would report that the neighborhood has been built up; the sentence instead makes the loss audible, and it arrives through Eveline's ear rather than through commentary. The verbs also do social work, since concrete and 'new red houses' mark the field's replacement by respectable development.\n\n(c) The essay should then use the third paragraph to show the trap closing: her survey of the room is an inventory of her own labor, 'dusted once a week for so many years,' and the wry question about where the dust comes from is the closest she comes to protest. Setting is not backdrop here - the dust returns no matter what she does, which is the shape her life has. Because the opening verb is 'invade' and the closing gesture is 'looked round the room,' the passage moves inward, not outward, and any reading of her later paralysis has to begin here.",
          rubric: [
            {
              points: "1 pt (Row A)",
              criterion:
                "Thesis makes a defensible claim about how the passage develops Eveline's relationship to home; a claim that she feels 'torn' or 'conflicted' with no technique attached earns 0.",
            },
            {
              points: "4 pts (Row B)",
              criterion:
                "Specific quoted evidence with commentary explaining how it works; the fourth point requires showing how at least two of narration, setting, and detail selection combine.",
            },
            {
              points: "1 pt (Row C)",
              criterion:
                "Sustained engagement with the passage's central tension - that the voice describing the confinement is the confined person's own - or an alternative reading taken seriously.",
            },
            {
              points: "Self-check",
              criterion:
                "Count your quotations. Fewer than four in a 40-minute essay usually means the response drifted into paraphrase; more than eight usually means the commentary is thin.",
            },
          ],
          note:
            "The tempting essay here is a sympathy essay about a sad young woman with a hard life. It will not clear 2 on Row B, because the prompt asks how the passage develops the relationship, which is a question about technique. Anchor every paragraph to a phrase you can point to.",
        },
      ],
    },
  },
];
