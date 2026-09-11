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
];
