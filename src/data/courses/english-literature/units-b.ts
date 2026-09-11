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
              text: "It delays naming the approaching feeling, so the reader experiences Louise's recognition as it arrives rather than receiving a labeled emotion in advance.",
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
            "The narration is close enough to report the question 'What was it?' as Louise's own, but it declines to supply the answer, and the passive, elemental imagery ('creeping out of the sky') keeps the feeling exterior to her for one more beat. Louise 'did not know' either: the delay is shared, not a gap the reader can see past. That controlled lag is what makes her later whispered 'free, free, free!' land as an admission rather than a statement, and it implicates the reader in the recognition.",
          note:
            "A converts narrative technique into diagnosis; her heart trouble is physical and the story never suggests delusion. C reverses who knows what - Louise does not yet possess the name either, so this is not dramatic irony at her expense. D is contradicted by the interior access on display ('she did not know,' 'striving to beat it back with her will'); the narration is close, just deliberately unhurried.",
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
  /* ------------------------------------------------------------------ */
  {
    id: "lit-u8",
    number: "8",
    title: "Poetry III",
    examWeight: "10-13%",
    examWeightMidpoint: 11.5,
    classPeriods: "~17 class periods",
    summary:
      "The last poetry unit, and the one that stops letting you treat a figure as local decoration: a conceit has to be tracked across the whole poem, a paradox has to reveal something a plain contradiction would not, and a defensible reading has to survive the line that seems to refute it. The exam's hardest poetry questions are written at this level because they ask which interpretation the poem can actually bear, not which device you can name.",
    topics: [
      {
        id: "lit-u8-t1",
        title: "Conceit as a sustained extended metaphor",
        detail:
          "A conceit is not a long metaphor you mention once. Mastery is tracing how each new image the comparison generates - winding, hands, stopping - revises the tenor, and saying what the last image does that the first one could not.",
      },
      {
        id: "lit-u8-t2",
        title: "Form and meter as makers of meaning",
        detail:
          "Scan for the poem's governing pattern (pentameter, couplets, a regular stanza), then locate the first substitution, shortened line, or stalled caesura. The claim usually lives in the disruption, not in the regularity you labeled.",
      },
      {
        id: "lit-u8-t3",
        title: "Paradox: contradiction that discloses a hidden idea",
        detail:
          "Paradox is not a stylish way of saying two opposite things. Name the expectation the line violates and the idea that becomes visible only because the contradiction is left standing.",
      },
      {
        id: "lit-u8-t4",
        title: "Ambiguity and competing defensible readings",
        detail:
          "When a pronoun, a turn, or a figure will bear two readings, write the sentence that says what the poem gains by not deciding. Mastery is arguing from the coexistence, not picking a side and ignoring the evidence for the other.",
      },
      {
        id: "lit-u8-t5",
        title: "Juxtaposition, antithesis, and structural contrast",
        detail:
          "Pair the two clauses, images, or stanzas the poem sets side by side and explain what the pairing itself argues. If your claim would survive if the order were reversed, you have described the parts, not the contrast.",
      },
      {
        id: "lit-u8-t6",
        title: "Irony from unrealized expectations",
        detail:
          "Situational irony is an outcome the poem taught us not to expect; verbal irony is a statement whose context unsays it. Name which kind operates, who is its target, and whether the speaker is in on it.",
      },
      {
        id: "lit-u8-t7",
        title: "Punctuation, pattern, and the interruption that emphasizes",
        detail:
          "A full stop in a poem of commas, a fragment after long sentences, a repeated word where the form had been varying - these are structural choices. Point to the mark or the break and say what it isolates.",
      },
      {
        id: "lit-u8-t8",
        title: "Parts-to-whole argument that revises for nuance",
        detail:
          "An interpretation of a stanza is only finished when it is tested against the rest of the poem. If a later line complicates the claim, revise the claim; acknowledging a rival reading in a subordinate clause is not the same as letting evidence change your mind.",
      },
    ],
    keySkills: [
      "Unpack a conceit in three columns: literal vehicle, imported association, effect on the tenor at that moment",
      "Paraphrase the poem in plain prose first, then go back and mark where the paraphrase had to cheat - those are the figures",
      "Scan the governing meter or syntax, then circle the first place the pattern breaks; build the thesis around the break",
      "For any paradox, write: expectation was ___; the line asserts ___; the hidden idea is ___.",
      "When two readings both have evidence, write one sentence that says what the poem gains by holding both",
      "Read the last line, then reread the first, and ask whether the opening has been ironic all along",
    ],
    commonMistakes: [
      "Calling any extended comparison a conceit without showing the surprising or paradoxical pressure that makes it more than a long metaphor.",
      "Labeling the meter ('iambic pentameter') and never saying what a substitution, a shortened line, or a caesura does.",
      "Treating paradox as a witty contradiction and stopping before the hidden idea.",
      "Choosing one reading of an ambiguous poem and silently dropping the evidence that supports the other.",
      "Naming irony without naming its kind, its target, or whether the speaker shares it.",
      "Writing a poetry essay that walks through the poem in order and calls the walkthrough a line of reasoning.",
    ],
    practiceSet: {
      id: "lit-u8-set",
      title: "Unit 8 Practice: Conceit, Paradox, and Competing Readings",
      focus:
        "Tracking a sustained conceit, a structural interruption, and a closing paradox in an original lyric, then writing a timed poetry analysis that has to hold two readings at once.",
      estimatedMinutes: 55,
      calculator: "n/a",
      problems: [
        {
          id: "lit-u8-q1",
          kind: "multiple-choice",
          label: "MCQ 1",
          prompt:
            "Which choice best describes the function of the poem's comparison of the addressee to a timepiece?",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I wound you every Sunday, as a priest\n 2  winds prayer around a week, and you kept time\n 3  the way a vow keeps house: quietly, in the hall,\n 4  where guests could hear you mean what we had promised.\n 5  Now you are honest.\n 6  Your hands have found the hour of your leaving\n 7  and will not, for all my turning, take another.\n 8  They call this broken. I call it keeping\n 9  the only hour that still belongs to us:\n10  you stopped, and so the rest of time is late.",
          choices: [
            {
              label: "A",
              text: "It satirizes religious ritual by reducing prayer to a mechanical weekly chore the speaker resents.",
            },
            {
              label: "B",
              text: "It sustains a conceit in which winding, hands, and stopping let a household clock carry the history of a vow, so that the object's stillness becomes the poem's figure for loss.",
            },
            {
              label: "C",
              text: "It uses a single simile in line 1 and then abandons figurative language for a literal description of a broken clock.",
            },
            {
              label: "D",
              text: "It personifies Time as a guest in the hall who overhears a private promise and later breaks it.",
            },
          ],
          answer: "B",
          solution:
            "The comparison is not local. Line 1's winding, line 2's 'kept time,' line 6's 'hands,' line 7's 'turning,' and line 10's 'stopped' are one vehicle developing across the poem, which is the definition of conceit rather than of a single metaphor. Because the clock also 'kept house' and could 'mean what we had promised,' the mechanical images import fidelity, and the stopping can stand for a death or a departure without the poem having to name either. The last image (stillness) does work the first (winding) could not: it converts maintenance into grief.",
          note:
            "A seizes the priest simile and ignores that prayer is the vehicle for devotion, not the target of satire. C is the student who stops at 'as a priest' and treats everything after as literal - but 'hands,' 'turning,' and 'keeping' continue the figure. D upgrades a background detail ('guests,' 'hall') into an allegory the poem never builds; guests hear the clock, they do not become Time.",
        },
        {
          id: "lit-u8-q2",
          kind: "multiple-choice",
          label: "MCQ 2",
          prompt:
            "The poem's sentences run across line breaks until the isolated statement in line 5. That interruption functions chiefly to",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I wound you every Sunday, as a priest\n 2  winds prayer around a week, and you kept time\n 3  the way a vow keeps house: quietly, in the hall,\n 4  where guests could hear you mean what we had promised.\n 5  Now you are honest.\n 6  Your hands have found the hour of your leaving\n 7  and will not, for all my turning, take another.\n 8  They call this broken. I call it keeping\n 9  the only hour that still belongs to us:\n10  you stopped, and so the rest of time is late.",
          choices: [
            {
              label: "A",
              text: "signal that a second speaker has taken over the poem and will judge the first speaker's devotion.",
            },
            {
              label: "B",
              text: "complete the priest simile by imitating a moment of silent prayer in the middle of the week.",
            },
            {
              label: "C",
              text: "mark the volta: the flowing syntax of the living vow stops as abruptly as the clock, so the rest of the poem has to reason from that stillness.",
            },
            {
              label: "D",
              text: "indicate that the speaker is now quoting the guests from line 4, whose view of honesty the poem endorses.",
            },
          ],
          answer: "C",
          solution:
            "Lines 1-4 are one long, enjambed sentence in loosely iambic pentameter; line 5 is a two-beat fragment closed by a full stop. Form does the same work the conceit is doing: a running mechanism is cut. After that cut the verbs belong to the hands, not to the speaker's winding, which is how you know the line is a turn rather than a pause for breath. Meter and punctuation here are not decoration; they are the poem's argument arriving as a stop.",
          note:
            "A is the reflex 'new speaker' distractor for any tonal shift; nothing in the grammar changes person or diction enough to split the voice. B over-reads the priest simile into a liturgical structure the poem does not have - there is no week, no office, no second ritual, only a stopped sentence. D smuggles the guests into a line that has no quotation marks and no 'they'; 'They call this broken' is line 8, and even there the speaker refuses their verdict.",
        },
        {
          id: "lit-u8-q3",
          kind: "multiple-choice",
          label: "MCQ 3",
          prompt: "The final line is paradoxical because it",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I wound you every Sunday, as a priest\n 2  winds prayer around a week, and you kept time\n 3  the way a vow keeps house: quietly, in the hall,\n 4  where guests could hear you mean what we had promised.\n 5  Now you are honest.\n 6  Your hands have found the hour of your leaving\n 7  and will not, for all my turning, take another.\n 8  They call this broken. I call it keeping\n 9  the only hour that still belongs to us:\n10  you stopped, and so the rest of time is late.",
          choices: [
            {
              label: "A",
              text: "claims that a stopped clock, which ought to have fallen behind, has instead made all subsequent time tardy, so loss reorders the world rather than dropping out of it.",
            },
            {
              label: "B",
              text: "admits that the speaker can no longer read the clock face and therefore cannot tell what hour it shows.",
            },
            {
              label: "C",
              text: "contradicts lines 1-4 by revealing that the clock never kept accurate time and the vow was already false.",
            },
            {
              label: "D",
              text: "uses 'late' only in its social sense, scolding the addressee for dying or leaving inconsiderately.",
            },
          ],
          answer: "A",
          solution:
            "A stopped clock is the thing that is late; the line inverts that expectation and makes the world late relative to the stopped hour. That inversion is the hidden idea paradox is supposed to deliver: grief does not fall behind ordinary time, it accuses ordinary time of having gone on. Line 8's 'broken' / 'keeping' prepares the same logic - what looks like failure is fidelity - and line 10 is that logic taken all the way to cosmology.",
          note:
            "B invents a failure of perception the poem never states; 'the hour of your leaving' is known, not lost. C treats paradox as a retcon, as if a witty last line canceled the opening, but the opening's 'kept time' is what makes the stopping mean anything. D is the tone-deaf reading that hears a social rebuke in 'late' and misses that the grammar blames 'the rest of time,' not the addressee.",
        },
        {
          id: "lit-u8-q4",
          kind: "multiple-choice",
          label: "MCQ 4",
          prompt:
            "Two readings of the poem are often advanced: that the speaker addresses a stopped clock, and that the speaker addresses a person who has died or left. Which statement is most defensible?",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I wound you every Sunday, as a priest\n 2  winds prayer around a week, and you kept time\n 3  the way a vow keeps house: quietly, in the hall,\n 4  where guests could hear you mean what we had promised.\n 5  Now you are honest.\n 6  Your hands have found the hour of your leaving\n 7  and will not, for all my turning, take another.\n 8  They call this broken. I call it keeping\n 9  the only hour that still belongs to us:\n10  you stopped, and so the rest of time is late.",
          choices: [
            {
              label: "A",
              text: "Only the clock reading works, because 'wound,' 'hands,' and 'hall' cannot describe a person without becoming nonsense.",
            },
            {
              label: "B",
              text: "Only the person reading works, because a clock cannot 'mean what we had promised' or have an hour of 'leaving.'",
            },
            {
              label: "C",
              text: "The two readings are mutually exclusive, so a defensible essay must choose one and dismiss the other as over-reading.",
            },
            {
              label: "D",
              text: "The conceit is built so that both readings remain available: the addressee is addressable as clock and as person at once, and grief in the poem consists of being unable to separate the two.",
            },
          ],
          answer: "D",
          solution:
            "A conceit yokes unlike things and then refuses to let go of either. 'Wound,' 'hands,' and 'stopped' are clock language; 'vow,' 'promised,' and 'leaving' are human language; and the poem assigns both vocabularies to the same 'you' from the first line. The point of not deciding is not indecision. It is the claim that the speaker's loss has fused the household object with the person who shared the house, so that winding a clock and keeping a person alive were already the same Sunday ritual. An essay that picks one reading and drops the other has analyzed half the vehicle.",
          note:
            "A and B each take one half of the conceit as a disqualifier for the other half, which is exactly how not to read a conceit: the surprising pressure is the whole device. C is the sophistication-point failure mode in stem form - treating ambiguity as a problem to eliminate rather than as evidence. If a question offers you 'the poem holds both,' and both have textual support, that is almost always the answer written for Row C thinking.",
        },
        {
          id: "lit-u8-q5",
          kind: "free-response",
          label: "FRQ 1",
          prompt:
            "Read the poem below carefully. Then, in a well-written essay, analyze how the poet uses conceit, structure, and paradox to convey the speaker's complex attitude toward loss. Write for 40 minutes.",
          stimulus:
            "PRACTICE POEM (original, written for this exercise - not an excerpt from any published work)\n\n 1  I wound you every Sunday, as a priest\n 2  winds prayer around a week, and you kept time\n 3  the way a vow keeps house: quietly, in the hall,\n 4  where guests could hear you mean what we had promised.\n 5  Now you are honest.\n 6  Your hands have found the hour of your leaving\n 7  and will not, for all my turning, take another.\n 8  They call this broken. I call it keeping\n 9  the only hour that still belongs to us:\n10  you stopped, and so the rest of time is late.",
          parts: [
            {
              label: "(a)",
              text: "Write a thesis that names the complexity - not 'the speaker feels sad about a clock' - and that could be disagreed with.",
            },
            {
              label: "(b)",
              text: "In the essay, let the structural stop at line 5 do work; do not only discuss images.",
            },
            {
              label: "(c)",
              text: "Account for the competing clock/person readings in a way that revises the claim rather than tacking on 'this could also mean many things.'",
            },
          ],
          solution:
            "A strong response argues something like: The speaker's weekly winding was already a rite of keeping someone alive, and the poem's conceit, its broken syntax, and its closing paradox convert a stopped clock into the only honest record of a vow - not a consolation, but a refusal to let ordinary time resume as if the leaving were merely late.\n\n(a) That thesis is defensible because it takes a position (the stillness is fidelity, not failure) and predicts a movement (rite to stop to paradox) an essay can actually follow. 'The poet uses conceit and paradox to show grief' would earn 0 on Row A.\n\n(b) Structure: lines 1-4 run on in pentameter sentences whose grammatical subject is 'I'; line 5 isolates 'Now you are honest' as a fragment, so the living syntax stops with the clock. After that, agency shifts to 'Your hands,' and the speaker's 'turning' in line 7 is already futile. Form is not a separate paragraph of device-labeling; it is the volta the imagery needs.\n\n(c) The clock reading and the person reading should not be staged as a debate the writer then 'picks.' The conceit fuses them: to wind a clock every Sunday and to keep a promise are the same verb in this poem, which is why 'They call this broken. I call it keeping' can answer both a repairman and a mourner. Line 10 then scales the fusion up - if the addressee has stopped, 'the rest of time is late' - so the essay's last move is cosmological rather than domestic. That is the tension Row C is for: the poem's intimacy (a hall, a Sunday, guests) and its metaphysical claim (time itself is now wrong) have to be held together.\n\nNote the other figures you can use without listing them: 'as a priest / winds prayer' imports ritual without making the poem about church; 'for all my turning' lets turning mean winding and trying to turn time back; the caesura in line 8 ('broken. I call it keeping') is antithesis you can hear.",
          rubric: [
            {
              points: "1 pt (Row A)",
              criterion:
                "Thesis presents a defensible interpretation of the speaker's complex attitude toward loss; a restatement of the prompt or a list of devices earns 0.",
            },
            {
              points: "4 pts (Row B)",
              criterion:
                "Specific quoted evidence with commentary explaining how it works; the fourth point requires showing how at least two of conceit, structure, and paradox combine, not three isolated device paragraphs.",
            },
            {
              points: "1 pt (Row C)",
              criterion:
                "Sustained attention to the poem's central tension - stillness as honesty, or the clock/person fusion - or a genuine alternative reading folded into the claim rather than mentioned and dropped.",
            },
            {
              points: "Self-check",
              criterion:
                "If your essay could be rearranged stanza by stanza without loss, you wrote a tour, not a line of reasoning. If you never quoted line 5 or line 10, you skipped the poem's actual argument.",
            },
          ],
          note:
            "This is FRQ 1 at the Unit 8 level: readers have seen a thousand grief-and-clock essays that never leave paraphrase. The score is decided by whether line 5's stop and line 10's paradox are treated as claims the poem makes, not as tone. Budget the first 10 minutes to find the volta and to decide whether your thesis can survive both readings of 'you.'",
        },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  {
    id: "lit-u9",
    number: "9",
    title: "Longer Fiction or Drama III",
    examWeight: "9-12%",
    examWeightMidpoint: 10.5,
    classPeriods: "~17 class periods",
    summary:
      "The last long-work unit, which assumes you can already name a foil and a motif and now asks you to hold an entire novel or play together as an argument. Symbol and motif have to be tracked from first appearance to last; a narrator's limits have to be treated as a design that shapes what the work can mean; and the essay you write from memory has to be a line of reasoning about the whole, not a tour of scenes you happen to remember.",
    topics: [
      {
        id: "lit-u9-t1",
        title: "Symbol versus motif across a whole work",
        detail:
          "A first appearance can only propose a meaning; a later one has to add something the first could not - duration, irony, a reversed owner. Mastery is arguing from that addition, and saying whether you are reading a symbol, a motif, or both.",
      },
      {
        id: "lit-u9-t2",
        title: "Structural juxtaposition and contrast at scale",
        detail:
          "Pair two widely separated scenes - an opening ritual and a closing refusal, a promise and its performance - and write a claim that depends on their order. If swapping them would not change your thesis, you have summarized two episodes, not read a structure.",
      },
      {
        id: "lit-u9-t3",
        title: "How a narrator's limits shape interpretation",
        detail:
          "Name precisely what the narrator or focal character cannot know, will not say, or needs the story to confirm about themselves. The interpretive move is to treat that limit as a design: the work means what it means partly because of who is not in a position to tell it.",
      },
      {
        id: "lit-u9-t4",
        title: "Character change, and the refusal to change, as evidence",
        detail:
          "Unchanged major characters are doing as much work as transformed ones. Locate the habit that survives the plot's crisis and explain what the survival argues - about the person, about the institution that trained the habit, or about both.",
      },
      {
        id: "lit-u9-t5",
        title: "Inconsistencies at the resolution",
        detail:
          "A character's last speech or last action is allowed to contradict what the work led us to expect of them. Mastery is not diagnosing hypocrisy but asking what the inconsistency does to the conflicts, the narrator, and the values the plot had been testing.",
      },
      {
        id: "lit-u9-t6",
        title: "Significant events as colliding value systems",
        detail:
          "Read a turning scene as a collision of values, not as a plot beat. Name the two goods that cannot both be kept, and explain why the work stages that collision here rather than earlier or later.",
      },
      {
        id: "lit-u9-t7",
        title: "Unresolved endings and what they withhold",
        detail:
          "Some plots refuse catharsis. If a central conflict is left standing, the refusal is part of the meaning: say what a neater ending would have endorsed, and why the work declines that endorsement.",
      },
      {
        id: "lit-u9-t8",
        title: "Building an interpretive argument about a full-length work",
        detail:
          "From memory, select the two or three moments the thesis actually needs, in an order that could not be shuffled, and let commentary do more work than summary. This is the Q3 skill the whole course has been banking works for.",
      },
    ],
    keySkills: [
      "For any recurring detail, make a three-row log: first appearance, later appearance, what the later one adds",
      "State a juxtaposition as one sentence: 'Scene A set against scene B argues ___, which neither scene argues alone.'",
      "Write the information gap explicitly: narrator/character believes ___; the work shows ___.",
      "At a resolution, ask whether the character's last act matches their established pattern; if not, that mismatch is evidence",
      "Bank two or three works at the level of named scenes, objects, and remembered phrasing, not themes",
      "Test a Q3 thesis by asking whether it would still be true of a different book; if so, it is not yet about this work",
    ],
    commonMistakes: [
      "Calling every repeated image a symbol without saying what it stands for, or a motif without saying what repetition adds.",
      "Writing the plot of a long work because the reader 'needs context' - Q3 readers know the books, and summary earns nothing in Row B.",
      "Treating a limited narrator as a defective one, or an unchanged character as a failed one, instead of asking what the limit or the stasis is for.",
      "Choosing evidence from only the beginning or only the ending, so the essay never actually uses the length of the work.",
      "Announcing a juxtaposition ('the author contrasts two scenes') and then summarizing each scene separately.",
      "Ending with a sentence about society, human nature, or 'the human condition' that could be clipped onto any essay.",
    ],
    practiceSet: {
      id: "lit-u9-set",
      title: "Unit 9 Practice: Motif, Juxtaposition, and the Whole Work",
      focus:
        "Distinguishing symbol from motif, reading past a focal character's self-justification, and converting structural contrast across a long work into a timed literary argument.",
      estimatedMinutes: 55,
      calculator: "n/a",
      problems: [
        {
          id: "lit-u9-q1",
          kind: "multiple-choice",
          label: "MCQ 1",
          prompt:
            "Considering both the present morning and the September memory, which analysis of the piano is most defensible?",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nThe drawing-room blinds were still down, though it was past eleven. Margaret told herself this was for the furniture, which the sun would fade; she had always been careful of the furniture. On the piano - her mother's, then hers - the fallboard was shut, as it had been every day since the funeral, and a seam of dust had formed along the ivory where the lid did not quite meet. She did not open it. She would play again when the house felt like hers, which was a reasonable thing to wait for. From the kitchen, where the girl had left the breakfast things, a tap dripped with a patience she chose not to hear. She had stood in this room in September, after the solicitor had gone, the blinds down then too, the piano already shut. It had seemed, that afternoon, a small and private quiet. It did not seem so now.",
          choices: [
            {
              label: "A",
              text: "The piano is a motif here and becomes a symbol only if a later chapter shows someone playing it.",
            },
            {
              label: "B",
              text: "The piano is simple realism, since a house would in fact contain an inherited instrument that might gather dust.",
            },
            {
              label: "C",
              text: "The piano functions as both symbol and motif: this scene makes the shut fallboard stand for a voice Margaret will not restart, and the September return lets that meaning accumulate through repetition rather than arrive all at once.",
            },
            {
              label: "D",
              text: "The piano is an allegory of the legal transfer of property, with the dust representing unpaid debts from the solicitor's visit.",
            },
          ],
          answer: "C",
          solution:
            "A symbol is a particular thing standing for something beyond itself; a motif is a recurring element that accrues meaning by repetition. The shut piano does symbolic work here - it is her mother's, then hers, and she will not lift the lid, so the instrument stands for a inherited life she will not play - and because the passage returns to it from September, when it was 'already shut,' the later appearance adds what the first could not: duration made visible as dust. Naming both, and explaining the addition, is the whole analytic move at this level.",
          note:
            "A inverts the terms: a symbol does not require a future scene to become one, and one present-tense appearance plus a memory already is recurrence. B is the literalist trap - 'a seam of dust' along ivory the lid 'did not quite meet' is not an inventory of the furniture. D upgrades symbol to allegory, which needs a systematic one-to-one code the passage never sets up; the solicitor is how we date the first shutting, not a creditor.",
        },
        {
          id: "lit-u9-q2",
          kind: "multiple-choice",
          label: "MCQ 2",
          prompt:
            "Which choice best describes how the narration's closeness to Margaret shapes interpretation?",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nThe drawing-room blinds were still down, though it was past eleven. Margaret told herself this was for the furniture, which the sun would fade; she had always been careful of the furniture. On the piano - her mother's, then hers - the fallboard was shut, as it had been every day since the funeral, and a seam of dust had formed along the ivory where the lid did not quite meet. She did not open it. She would play again when the house felt like hers, which was a reasonable thing to wait for. From the kitchen, where the girl had left the breakfast things, a tap dripped with a patience she chose not to hear. She had stood in this room in September, after the solicitor had gone, the blinds down then too, the piano already shut. It had seemed, that afternoon, a small and private quiet. It did not seem so now.",
          choices: [
            {
              label: "A",
              text: "A first-person retrospective narrator confesses that she has been lying about the furniture all along.",
            },
            {
              label: "B",
              text: "The narration stays close enough to report Margaret's own explanations - 'told herself,' 'a reasonable thing to wait for' - while arranging the hour, the dust, and the ignored tap so that the reader can judge those explanations as inadequate.",
            },
            {
              label: "C",
              text: "An omniscient narrator denounces Margaret's grief as selfish, so the reader's job is simply to agree.",
            },
            {
              label: "D",
              text: "The narrator is unreliable because the facts of the room cannot be trusted: there may be no piano and no tap.",
            },
          ],
          answer: "B",
          solution:
            "The grammatical person is third, but the diction of justification is Margaret's: 'told herself this was for the furniture,' 'a reasonable thing to wait for,' 'chose not to hear.' The narration does not correct her in its own voice. It does not need to. Blinds down past eleven, a seam of dust, a tap she will not hear, and the admission that the quiet 'did not seem so now' are placed where a reader can see past the reasonableness she claims. That is a designed limit, not a defective narrator: interpretation of the passage is the gap between her account and the room.",
          note:
            "A misreads 'told herself' as a confession in the first person; there is no 'I.' C invents a denunciation; the passage never editorializes, which is why the reader has to do the judging. D applies 'unreliable' to a narrator who has told us nothing false about the furniture - unreliability requires evidence that the report itself cannot be trusted, not merely that the character's reasons are self-serving.",
        },
        {
          id: "lit-u9-q3",
          kind: "multiple-choice",
          label: "MCQ 3",
          prompt:
            "The passage sets the shut piano against the dripping tap. That juxtaposition functions chiefly to",
          stimulus:
            "PRACTICE PASSAGE (original, written for this exercise - not an excerpt from any published work)\n\nThe drawing-room blinds were still down, though it was past eleven. Margaret told herself this was for the furniture, which the sun would fade; she had always been careful of the furniture. On the piano - her mother's, then hers - the fallboard was shut, as it had been every day since the funeral, and a seam of dust had formed along the ivory where the lid did not quite meet. She did not open it. She would play again when the house felt like hers, which was a reasonable thing to wait for. From the kitchen, where the girl had left the breakfast things, a tap dripped with a patience she chose not to hear. She had stood in this room in September, after the solicitor had gone, the blinds down then too, the piano already shut. It had seemed, that afternoon, a small and private quiet. It did not seem so now.",
          choices: [
            {
              label: "A",
              text: "establish that the kitchen is poorly staffed, so the real subject of the passage is the girl's negligence.",
            },
            {
              label: "B",
              text: "place a sound Margaret will not restart beside a sound she will not stop, so the house is shown keeping two incompatible orders of attention, and her 'private quiet' is already a choice.",
            },
            {
              label: "C",
              text: "predict that Margaret will soon sell the piano in order to repair the plumbing.",
            },
            {
              label: "D",
              text: "provide comic relief after the funeral by reducing grief to a household nuisance.",
            },
          ],
          answer: "B",
          solution:
            "The piano is silence she maintains; the tap is sound she refuses to acknowledge. Neither detail would mean as much alone: a shut piano could be mourning, a dripping tap could be a servant's oversight. Set against each other they argue that Margaret is not the passive occupant of a quiet house but the person deciding which noises count. 'Patience she chose not to hear' makes the contrast a matter of will, and the September memory then shows that the choice has had time to harden. The claim depends on the pairing.",
          note:
            "A takes the kitchen's 'girl' as the protagonist of a staffing plot the passage is not writing; the girl is there to leave a sound Margaret can ignore. C invents a future bargain the text does not hint at. D hears 'drip' and reaches for tone; nothing in the diction of dust, funeral, and 'did not seem so now' licenses comedy.",
        },
        {
          id: "lit-u9-q4",
          kind: "multiple-choice",
          label: "MCQ 4",
          prompt:
            "Newland has spent the novel believing that Old New York is what prevents him from joining Ellen. Which analysis of this last refusal is most defensible?",
          stimulus:
            "Edith Wharton, The Age of Innocence - the novel's last scene, described rather than quoted. Years after May's death, Newland Archer is in Paris with his son. Ellen Olenska is in an apartment above them. The son goes up to meet her. Newland sits on a bench in the courtyard, watches a servant close the shutters of Ellen's window, and walks away without going in.",
          choices: [
            {
              label: "A",
              text: "The ending is a plot convenience: Wharton needed Newland unmarried so the book could close on a romantic reunion, and then changed her mind.",
            },
            {
              label: "B",
              text: "Newland stays outside because he has finally understood Ellen and is protecting her from a meeting that would embarrass her.",
            },
            {
              label: "C",
              text: "The character who believed himself constrained by other people now completes the constraint as habit; the work's meaning is located in that unchanged posture - remaining below the window - rather than in a last-minute rebellion.",
            },
            {
              label: "D",
              text: "The closed shutters prove that Ellen has rejected him, so the scene is simply the plot delivering news Newland could not have known.",
            },
          ],
          answer: "C",
          solution:
            "The scene is a resolution that refuses reversal. Newland's governing trait - watching a woman's life from a designated place outside it - survives May's death, the son's encouragement, and the literal open invitation of a staircase. Because nothing external stops him now, the limit the novel has been studying is shown to have been his own. That is character remaining unchanged used as interpretation of the work as a whole: Old New York no longer needs to forbid the meeting. He forbids it. The shutters close after he has already chosen the bench.",
          note:
            "A treats an ending as an authorial shrug; Q3 readers will not reward speculation about what Wharton 'changed her mind' about. B invents a chivalry the scene does not stage - we are with Newland's refusal, not Ellen's needs. D hands the agency to a servant's gesture and misses the order: he is already on the bench, and the shutters confirm a decision rather than cause one. When a late scene looks like news, check whether the character has already acted.",
        },
        {
          id: "lit-u9-q5",
          kind: "free-response",
          label: "FRQ 1",
          prompt:
            "In many novels and plays, a narrator or central consciousness understands less of the situation than the reader is invited to see, and a detail that first appears ordinary accumulates meaning until it organizes the work. Choose a full-length work of literary merit you have studied in which both a limited vantage and a recurring detail operate, and analyze how the author uses them to develop the meaning of the work as a whole. Do not merely summarize the plot. Write for 40 minutes.",
          parts: [
            {
              label: "(a)",
              text: "Before drafting, write one sentence in the form: 'X believes ___; the work shows ___; the recurring detail of ___ is how we are taught to see the gap.'",
            },
            {
              label: "(b)",
              text: "Choose two appearances of that detail, widely separated in the work, and note what the later one adds that the first could not.",
            },
            {
              label: "(c)",
              text: "Draft the essay, making the arrangement of those two appearances part of the argument rather than two examples of the same point.",
            },
          ],
          solution:
            "A strong response on Mary Shelley's Frankenstein might argue: Shelley nested Walton, Victor, and the creature so that each teller needs the story to confirm a theory of himself, and she uses fire and light as the recurring detail that measures what those theories cost.\n\n(a) Victor believes he is the novel's tragic seeker of knowledge; the work shows a man who cannot hear anyone else's origin; fire and light are how we are taught to see the gap.\n\n(b) First appearance: Walton's opening letters, in which polar ice and the 'fire' of ambition are still romance - he wants a flame large enough to justify leaving home. Later appearance: the creature's first experience of fire, which warms and then burns, followed by the destruction of the De Lacey cottage and the final ice on which Walton agrees to turn back. The later cluster adds what the first could not: the same element that looked like enlightenment is now indistinguishable from harm, and the frame narrator is in a position to refuse it.\n\n(c) The essay's line of reasoning should not be 'fire appears several times.' It should be that each narrator seizes light as self-explanation - Walton's voyage, Victor's workshop, the creature's stolen spark - and that Shelley arranges the nest so we hear each claim after we have already watched the previous one fail. Because Walton writes last, his decision to turn the ship is the one place the pattern breaks: a narrator limited by ambition is shown a predecessor's corpse and, uniquely, revises. Victor never does; the creature's last speech over the body still recasts murder as the education Victor withheld. The juxtaposition that matters is not workshop against Arctic in general, but Walton's letters at the start against Walton's choice at the end, with Victor's unreliability in between as the evidence Walton finally uses. The novel's meaning is not that knowledge is dangerous; it is that a limited narrator will call harm a pursuit until someone else's vantage is allowed to interrupt him.\n\nNote how the essay earns the rows. Row A comes from the arguable claim that the nested limits, not the monster, are the work's subject. Row B comes from specific remembered scenes - the letters, the hut, the cottage, the ice - each followed by commentary on what the sequence does. Row C comes from taking seriously the reading the essay rejects, that the book is a warning against science, and showing that Walton's turn is a narrative event, not a moral posted on the last page.",
          rubric: [
            {
              points: "1 pt (Row A)",
              criterion:
                "Thesis presents a defensible interpretation of the work in which limited vantage and a recurring detail do interpretive work; naming a symbol without a claim, or restating that the narrator is 'biased,' earns 0.",
            },
            {
              points: "4 pts (Row B)",
              criterion:
                "Specific evidence from at least two separated moments; commentary explains how each supports a line of reasoning; the fourth point requires explaining how multiple elements (narration plus motif or structure) contribute to meaning.",
            },
            {
              points: "1 pt (Row C)",
              criterion:
                "Sustained attention to a tension the limit creates - a narrator who is persuasive and wrong, a motif that changes owners - or a plausible alternative reading genuinely engaged rather than dismissed.",
            },
            {
              points: "Self-check",
              criterion:
                "Underline every sentence that is plot summary. If more than two survive, cut them and replace with commentary before scoring yourself. If both of your examples could be swapped without changing the paragraph, you have not yet used structure.",
            },
          ],
          note:
            "This is Q3 at the end of the course: you write from memory, so specificity is the whole differentiator. Named objects and remembered turns of phrase read as evidence; 'later in the novel' reads as a general reference. Budget 5 minutes for parts (a) and (b). An essay that discusses only the beginning or only the ending has not used the length of the work, which is what this unit exists to test.",
        },
      ],
    },
  },
];

