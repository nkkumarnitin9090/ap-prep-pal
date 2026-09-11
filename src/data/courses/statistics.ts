import type { Course } from "../types";

/**
 * AP Statistics.
 *
 * College Board revised AP Statistics effective Fall 2026, consolidating the
 * old nine units into five and removing several topics. This module follows
 * the five-unit Course and Exam Description that governs the May 2027 exam.
 * Many textbooks and classrooms still use the old nine-unit numbering; match
 * by topic name, not by unit number.
 *
 * Every probability, interval, and test statistic below was computed with
 * SciPy before being written down.
 */
export const statistics: Course = {
  slug: "ap-statistics",
  name: "AP Statistics",
  shortName: "Stats",
  accent: "emerald",
  tagline: "The course where a correct number with a bad sentence earns zero.",
  description:
    "AP Statistics rewards communication more than computation. Your calculator will produce the interval and the p-value; the points come from naming the procedure, verifying conditions with numbers, and writing a conclusion in context that links back to the p-value. The four-step template (state, plan, do, conclude) is the single most valuable thing to over-learn.",
  examDate: "2027-05-11",
  examSession: "Session 2 - typically 12 p.m. local time",
  examSections: [
    {
      name: "Section I: Multiple Choice",
      detail: "42 questions, including two 3-question sets sharing a stimulus",
      weight: "50% of exam score",
      time: "1 hour 30 minutes",
      calculator: "allowed",
    },
    {
      name: "Section II: Free Response",
      detail:
        "4 questions worth 10 points each: Practices 1 and 2, Practices 3 and 4, an inference question, and a multi-content question",
      weight: "50% of exam score",
      time: "1 hour 30 minutes",
      calculator: "allowed",
    },
  ],
  courseNotes: [
    {
      tone: "warning",
      text: "AP Statistics was revised for the 2026-27 school year. The exam is now fully digital in Bluebook (no paper free-response booklet), the multiple-choice section has 42 questions with 4 answer choices instead of 40 with 5, and the free-response section has 4 ten-point questions instead of 6 four-point questions. There is no longer a separate Investigative Task.",
    },
    {
      tone: "warning",
      text: "Topics removed from the revised course: analyzing departures from linearity, combining random variables, the geometric distribution, the chi-square goodness-of-fit test, and all of the old Unit 9 (inference for slopes). Do not spend May review time on material that is no longer assessed.",
    },
    {
      tone: "info",
      text: "The revised CED is five units: (1) Exploring One-Variable Data and Collecting Data, 20-30%; (2) Probability, Random Variables, and Probability Distributions, 15-25%; (3) Inference for Categorical Data: Proportions, 15-25%; (4) Inference for Quantitative Data: Means, 10-20%; (5) Regression Analysis, 10-20%. Many textbooks and teachers still number these as nine units; match by topic name, not by unit number.",
    },
  ],
  resources: [
    {
      label: "The formula sheet and tables you get on exam day",
      detail:
        "You are given the formulas and the z, t, and chi-square tables. Practice with them so you know where everything is - especially that the t-table rows are degrees of freedom, not sample size.",
    },
    {
      label: "Released free-response questions and scoring guidelines",
      detail:
        "The scoring guidelines show the exact sentences that earn credit. Read three sets of guidelines for every one FRQ you write and your scores move faster than by doing more problems.",
    },
    {
      label: "Your calculator's STAT menu",
      detail:
        "Know 1-Var Stats, LinReg, normalcdf/invNorm, tcdf, binompdf/binomcdf, and the four inference tests cold. Also practice typing statistical notation in a plain text box, since responses are typed in Bluebook now.",
    },
  ],
  units: [
    {
      id: "stat-u1",
      number: "1",
      title: "Exploring One-Variable Data and Collecting Data",
      examWeight: "20-30%",
      examWeightMidpoint: 25,
      classPeriods: "~26 class periods",
      summary:
        "Vocabulary, graphs, and the discipline of describing a distribution completely, then the designs that decide whether later conclusions may generalize (random selection) or claim causation (random assignment). On the exam 'describe the distribution' always means shape, center, variability, and unusual features - in context, with units.",
      cedNote: {
        tone: "info",
        text: "This is Unit 1 of the 2026-27 CED (20-30% of the multiple-choice section). Textbooks and many teachers still split it into old Unit 1 (one-variable data) and old Unit 3 (collecting data). The normal-model calculations that used to sit here now live in Unit 2.",
      },
      topics: [
        {
          id: "stat-u1-t1",
          title: "Variables: categorical versus quantitative",
          detail:
            "Classify variables before choosing a graph. Zip code is categorical even though it looks numeric.",
        },
        {
          id: "stat-u1-t2",
          title: "Representations for one categorical variable",
          detail:
            "Frequency and relative frequency tables, bar charts, and pie charts. Bar charts have gaps; histograms do not.",
        },
        {
          id: "stat-u1-t3",
          title: "Representations for one quantitative variable",
          detail:
            "Dotplots, stemplots, histograms, and cumulative relative frequency plots. Know how to read a percentile off a cumulative plot.",
        },
        {
          id: "stat-u1-t4",
          title: "Describing a distribution: shape, center, variability, unusual features",
          detail:
            "Shape includes skew and modality. Unusual features include outliers, gaps, and clusters. Always answer in context.",
        },
        {
          id: "stat-u1-t5",
          title: "Summary statistics: mean, median, standard deviation, IQR",
          detail:
            "The mean and standard deviation are non-resistant; the median and IQR are resistant. Choose the pair that matches the shape.",
        },
        {
          id: "stat-u1-t6",
          title: "Five-number summary, boxplots, and the 1.5 x IQR outlier rule",
          detail:
            "An observation is an outlier if it is below Q1 - 1.5(IQR) or above Q3 + 1.5(IQR). Show the fence arithmetic.",
        },
        {
          id: "stat-u1-t7",
          title: "Comparing two distributions",
          detail:
            "Use explicit comparative language ('greater than', 'more variable than'). Listing statistics side by side without comparing earns nothing.",
        },
        {
          id: "stat-u1-t10",
          title: "Effects of linear transformations on summary statistics",
          detail:
            "Adding a constant shifts center but not spread. Multiplying by a constant scales both center and spread.",
        },
        {
          id: "stat-u3-t1",
          title: "Populations, samples, parameters, and statistics",
          detail:
            "A parameter describes a population and is usually unknown; a statistic describes a sample and is computed from data.",
        },
        {
          id: "stat-u3-t2",
          title: "Simple random samples and how to select one",
          detail:
            "Describe a usable procedure: label every unit, use a random number generator, ignore repeats, stop at the required sample size.",
        },
        {
          id: "stat-u3-t3",
          title: "Stratified, cluster, and systematic sampling",
          detail:
            "Stratified samples from every stratum; cluster samples whole groups. Stratifying on a variable related to the response reduces variability.",
        },
        {
          id: "stat-u3-t4",
          title: "Bias: undercoverage, nonresponse, response bias, voluntary response",
          detail:
            "Name the specific type and state the likely direction of the bias - too high or too low.",
        },
        {
          id: "stat-u3-t5",
          title: "Experiments: treatments, experimental units, control, placebo, blinding",
          detail:
            "A control group provides a baseline for comparison. Double-blind means neither subject nor evaluator knows the treatment.",
        },
        {
          id: "stat-u3-t6",
          title: "Random assignment and the completely randomized design",
          detail:
            "Random assignment balances confounding variables across treatment groups on average, which is what licenses a causal claim.",
        },
        {
          id: "stat-u3-t7",
          title: "Blocking and matched-pairs designs",
          detail:
            "Block on a variable expected to affect the response, then randomize within blocks to remove that variable's effect from the comparison.",
        },
        {
          id: "stat-u3-t8",
          title: "Confounding and the limits of observational studies",
          detail:
            "A confounding variable is associated with both the explanatory variable and the response, so its effect cannot be separated.",
        },
        {
          id: "stat-u3-t9",
          title: "Scope of inference: generalization versus causation",
          detail:
            "Random selection permits generalizing to the population. Random assignment permits a cause-and-effect conclusion. You need both for both.",
        }
      ],
      keySkills: [
          "Describe a distribution with shape, center, variability, and unusual features - in context",
          "Outlier fences: Q1 - 1.5(IQR) and Q3 + 1.5(IQR)",
          "Mean > median suggests right skew; mean < median suggests left skew",
          "Random selection buys generalizability; random assignment buys causation",
          "Describe an SRS: label, generate random numbers, skip repeats, stop at n",
          "Stratify on a variable related to the response; block for the same reason in an experiment",
          "Name bias types precisely: undercoverage, nonresponse, response bias, voluntary response",
          "A confounding variable is linked to both the explanatory variable and the response",
        ],
      commonMistakes: [
          "Describing center and spread but forgetting shape and outliers, which loses half the credit on a 'describe' prompt.",
          "Saying 'the data is skewed' with no direction and no context.",
          "Comparing two groups by listing statistics for each without a single comparative word.",
          "Confusing random selection with random assignment. They buy different conclusions.",
          "Writing 'the sample was biased' without naming the type of bias or the direction.",
          "Describing blocking as a way to compare blocks, rather than as a way to remove block-to-block variation.",
          "Claiming causation from an observational study, no matter how large the sample.",
        ],
      practiceSet: {
        id: "stat-u1-ps",
        title: "Unit 1 Practice: One-Variable Data and Collecting Data",
        focus:
          "Summary statistics, outlier rules, comparing distributions, identifying designs and bias, and writing complete sampling and experiment descriptions.",
        estimatedMinutes: 50,
        calculator: "allowed",
        problems: [
          {
            id: "stat-u1-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "Consider the data set 4, 7, 7, 9, 13. What are the mean and median?",
            choices: [
              { label: "A", text: "mean 7, median 7" },
              { label: "B", text: "mean 8, median 7" },
              { label: "C", text: "mean 8, median 8" },
              { label: "D", text: "mean 7, median 8" },
            ],
            answer: "B",
            solution:
              "The sum is 4 + 7 + 7 + 9 + 13 = 40, so the mean is 40/5 = 8. With five ordered values the median is the third one, which is 7. (For reference, the sample standard deviation is about 3.32.)",
            note: "Because the mean exceeds the median, this small data set is right-skewed - the 13 pulls the mean up. That relationship is tested constantly.",
          },
          {
            id: "stat-u1-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "A distribution has Q1 = 24 and Q3 = 40. According to the 1.5 x IQR rule, which of the following values would be classified as an outlier?",
            choices: [
              { label: "A", text: "8" },
              { label: "B", text: "56" },
              { label: "C", text: "64" },
              { label: "D", text: "66" },
            ],
            answer: "D",
            solution:
              "IQR = 40 - 24 = 16, so 1.5(IQR) = 24. The fences are 24 - 24 = 0 and 40 + 24 = 64. An outlier must be strictly below 0 or strictly above 64. Only 66 qualifies.",
            note: "Choice C sits exactly on the fence, which the rule does not call an outlier. Choice A is above the lower fence of 0. Compute both fences every time.",
          },
          {
            id: "stat-u1-p4",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "Every value in a data set is increased by 5 points. Which statement is true?",
            choices: [
              { label: "A", text: "The mean and standard deviation both increase by 5." },
              { label: "B", text: "The mean increases by 5 and the standard deviation is unchanged." },
              { label: "C", text: "The mean is unchanged and the standard deviation increases by 5." },
              { label: "D", text: "The median is unchanged and the IQR increases by 5." },
            ],
            answer: "B",
            solution:
              "Adding a constant shifts the entire distribution without changing how spread out it is. Measures of center (mean, median, quartiles) all increase by 5; measures of spread (standard deviation, IQR, range) are unchanged.",
            note: "Contrast with multiplying every value by 5, which multiplies both the center and the spread by 5.",
          },
          {
            id: "stat-u3-p1",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "A school has 1,200 students divided into four grade levels. A researcher randomly selects 25 students from each grade level. What sampling method is this?",
            choices: [
              { label: "A", text: "Simple random sample" },
              { label: "B", text: "Stratified random sample" },
              { label: "C", text: "Cluster sample" },
              { label: "D", text: "Systematic sample" },
            ],
            answer: "B",
            solution:
              "The population was divided into groups (grade levels) that are homogeneous with respect to something relevant, and a random sample was taken from within every group. That is a stratified random sample. A cluster sample would have randomly selected entire grade levels and surveyed everyone in them.",
            note: "The tell for stratified is 'from each group'. The tell for cluster is 'all members of the selected groups'.",
          },
          {
            id: "stat-u3-p2",
            kind: "multiple-choice",
            label: "MCQ 5",
            prompt:
              "A study finds that students who eat breakfast have higher GPAs. Which conclusion is appropriate?",
            choices: [
              { label: "A", text: "Eating breakfast causes higher GPAs." },
              { label: "B", text: "There is an association between eating breakfast and GPA, but confounding variables such as household income or sleep may explain it." },
              { label: "C", text: "Higher GPAs cause students to eat breakfast." },
              { label: "D", text: "No conclusion is possible from a sample." },
            ],
            answer: "B",
            solution:
              "This is an observational study with no random assignment, so no causal conclusion is justified. Variables such as family income, sleep schedule, and general health habits are plausibly associated with both breakfast consumption and GPA, which is exactly what confounding means.",
            note: "Choice D overcorrects. Samples do support conclusions about association, and with random selection they generalize; they just cannot establish causation without random assignment.",
          },
          {
            id: "stat-u3-p3",
            kind: "multiple-choice",
            label: "MCQ 6",
            prompt:
              "A radio station asks listeners to call in and vote on a proposed city ordinance. Of the 480 callers, 71% oppose it. The main problem with this study is",
            choices: [
              { label: "A", text: "the sample size is too small." },
              { label: "B", text: "voluntary response bias, because people with strong opinions are far more likely to call." },
              { label: "C", text: "nonresponse bias, because some listeners could not get through." },
              { label: "D", text: "there is no problem, because 480 is a large sample." },
            ],
            answer: "B",
            solution:
              "The sample consists entirely of people who chose to participate. Such self-selected samples systematically overrepresent people with strong, usually negative, opinions. No sample size fixes this - a voluntary response sample of 48,000 would be just as biased.",
            note: "Choice A is the reflex answer and is almost always wrong on this exam. Bias is about who gets into the sample, not how many.",
          },
          {
            id: "stat-u3-p4",
            kind: "multiple-choice",
            label: "MCQ 7",
            prompt:
              "In an experiment testing a new fertilizer on tomato plants, plots are grouped by soil quality before treatments are randomly assigned within each group. The purpose of grouping by soil quality is to",
            choices: [
              { label: "A", text: "increase the sample size." },
              { label: "B", text: "eliminate the need for random assignment." },
              { label: "C", text: "reduce the variability in the response caused by differences in soil quality." },
              { label: "D", text: "allow the researcher to compare soil qualities." },
            ],
            answer: "C",
            solution:
              "This is blocking. Soil quality is expected to affect tomato yield, so by comparing treatments within blocks of similar soil, the soil-to-soil variation is removed from the treatment comparison, making a real fertilizer effect easier to detect.",
            note: "Blocking does not replace random assignment - you still randomize within each block. Choice D describes a side effect, not the purpose.",
          },
          {
            id: "stat-u1-p5",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "Two sections of the same course each have 20 students. Summary statistics for their final exam scores are below.\n\nClass A: mean 78, median 80, sd 9, min 55, Q1 72, Q3 85, max 92\nClass B: mean 78, median 74, sd 12, min 60, Q1 68, Q3 88, max 99",
            parts: [
              { label: "(a)", text: "Compare the centers of the two distributions." },
              { label: "(b)", text: "Compare the variability of the two distributions, citing two different measures." },
              { label: "(c)", text: "What does each mean-median relationship suggest about shape?" },
              { label: "(d)", text: "Use the 1.5 x IQR rule to determine whether Class B's maximum of 99 is an outlier. Show your work." },
            ],
            solution:
              "(a) The two classes have identical mean scores of 78 points, but Class A's median of 80 is greater than Class B's median of 74. Since the median is the resistant measure of center, the typical Class A student scored about 6 points higher than the typical Class B student.\n\n(b) Class B is more variable on both measures. Its standard deviation of 12 points exceeds Class A's 9 points, and its IQR of 88 - 68 = 20 points exceeds Class A's IQR of 85 - 72 = 13 points. Class B's range (99 - 60 = 39) is also larger than Class A's (92 - 55 = 37).\n\n(c) In Class A the mean (78) is less than the median (80), which suggests a distribution skewed to the left - a few low scores pulling the mean down. In Class B the mean (78) is greater than the median (74), which suggests a distribution skewed to the right.\n\n(d) For Class B, IQR = 88 - 68 = 20, so 1.5(IQR) = 30. The upper fence is Q3 + 30 = 88 + 30 = 118 and the lower fence is Q1 - 30 = 68 - 30 = 38. The maximum of 99 is below 118, and the minimum of 60 is above 38, so by this rule Class B has no outliers - 99 is a high score but not an outlier.",
            rubric: [
              { points: "2 pts", criterion: "Compares centers using comparative language and notes the identical means but different medians." },
              { points: "2 pts", criterion: "Compares variability with two named measures and correct values." },
              { points: "2 pts", criterion: "Correct skew direction for both classes, tied to the mean-median relationship." },
              { points: "2 pts", criterion: "Shows fence arithmetic and concludes 99 is not an outlier." },
              { points: "2 pts", criterion: "All answers are stated in context (exam scores, points, the two classes)." },
            ],
            note: "The word 'compare' requires a comparative: greater than, more variable than, higher than. A paragraph of parallel facts with no comparison is the most common way students lose these points.",
          },
          {
            id: "stat-u3-p5",
            kind: "free-response",
            label: "FRQ 2",
            prompt:
              "A researcher wants to know whether a 20-minute mindfulness exercise before a test reduces test anxiety. Sixty volunteer students are available, 36 of whom report high baseline anxiety and 24 of whom report low baseline anxiety.",
            parts: [
              { label: "(a)", text: "Describe a completely randomized design for this experiment, including how you would carry out the randomization." },
              { label: "(b)", text: "Describe a randomized block design using baseline anxiety as the blocking variable, and explain why blocking is preferable here." },
              { label: "(c)", text: "Explain why a control group is necessary and what the control group should do." },
              { label: "(d)", text: "To what population can the results be generalized? Explain." },
            ],
            solution:
              "(a) Label the 60 students 01 through 60. Use a random number generator to select 30 distinct labels, ignoring repeats; those 30 students receive the 20-minute mindfulness exercise before the test. The remaining 30 form the control group. After the test, measure test anxiety with the same instrument for all 60 students and compare the mean anxiety scores of the two groups.\n\n(b) Form two blocks: the 36 high-baseline-anxiety students and the 24 low-baseline-anxiety students. Within the high-anxiety block, randomly assign 18 to mindfulness and 18 to control; within the low-anxiety block, randomly assign 12 to mindfulness and 12 to control. Compare treatment and control within each block, then combine. Blocking is preferable because baseline anxiety is almost certainly related to post-test anxiety, so it is a major source of variability. Removing it from the comparison makes any real mindfulness effect easier to detect.\n\n(c) Without a control group there is no baseline for comparison - anxiety might drop simply because time passed, because students sat quietly, or because of a placebo effect. The control group should spend the same 20 minutes in a neutral activity (for example quiet reading) so that the only systematic difference between groups is the mindfulness exercise itself.\n\n(d) Strictly speaking, results generalize only to these 60 students, because they are volunteers rather than a random sample from a larger population. Random assignment does support a causal conclusion about the mindfulness exercise within this group, but generalizing to all high school students would require random selection from that population.",
            rubric: [
              { points: "2 pts", criterion: "Complete randomization description: labeling, random number generation, ignoring repeats, group sizes." },
              { points: "2 pts", criterion: "Correct block structure with randomization within each block." },
              { points: "2 pts", criterion: "Explains blocking as reducing variability from a variable related to the response." },
              { points: "2 pts", criterion: "Justifies the control group and specifies a comparable neutral activity." },
              { points: "2 pts", criterion: "Correctly limits generalization because subjects are volunteers, while allowing a causal claim from random assignment." },
            ],
            note: "Part (d) is the scope-of-inference question and it appears constantly. Random assignment plus volunteers equals causation but no generalization.",
          },
          {
            id: "stat-u3-p6",
            kind: "free-response",
            label: "FRQ 3",
            prompt:
              "A city mails a survey about a proposed transit tax to 4,000 randomly selected registered voters. 620 surveys are returned, and 68% of those returned favor the tax.",
            parts: [
              { label: "(a)", text: "Identify the population, the sample, the parameter of interest, and the statistic." },
              { label: "(b)", text: "Name the most serious source of bias here and explain the likely direction of its effect." },
              { label: "(c)", text: "Describe a stratified sampling plan that would be an improvement, and name a sensible stratifying variable." },
              { label: "(d)", text: "Explain why increasing the mailing to 40,000 voters would not fix the problem you identified in part (b)." },
            ],
            solution:
              "(a) The population is all registered voters in the city. The sample is the 620 voters who returned a survey. The parameter of interest is p, the true proportion of all registered voters in the city who favor the transit tax. The statistic is p-hat = 0.68, the proportion in the sample who favor it.\n\n(b) The most serious problem is nonresponse bias: only 620 of 4,000 surveys came back, a response rate of about 15.5%. The people who bother to return a mailed survey about a transit tax are likely to be those who care most about the issue - plausibly frequent transit users, who would favor the tax. The reported 68% is therefore likely an overestimate of support among all registered voters.\n\n(c) Divide the registered voters into strata by city district (or by distance from the nearest transit line), then take a simple random sample of voters within each stratum and follow up by phone or in person to secure responses. District is a sensible stratifying variable because transit access - and therefore opinion about a transit tax - likely varies substantially from one part of the city to another, so stratifying on it reduces the variability of the estimate.\n\n(d) Nonresponse bias is a systematic problem with who responds, not with how many. If the same kinds of people continue to respond at the same low rate, a mailing of 40,000 would produce roughly 6,200 responses that are biased in exactly the same direction. A larger sample shrinks the margin of error around a wrong center, which makes the estimate more precisely wrong.",
            rubric: [
              { points: "2 pts", criterion: "Correctly identifies population, sample, parameter, and statistic." },
              { points: "3 pts", criterion: "Names nonresponse bias and gives a plausible direction with reasoning." },
              { points: "3 pts", criterion: "Describes a workable stratified plan with a justified stratifying variable." },
              { points: "2 pts", criterion: "Explains that sample size does not correct bias, only variability." },
            ],
            note: "The sentence 'a larger sample makes the estimate more precisely wrong' is worth memorizing. It earns the point in (d) every time.",
          }
        ],
      },
    },
    {
      id: "stat-u2",
      number: "2",
      title: "Probability, Random Variables, and Probability Distributions",
      examWeight: "15-25%",
      examWeightMidpoint: 20,
      classPeriods: "~24 class periods",
      summary:
        "Two-way tables for categorical association, then the most mathematical stretch of the course: probability rules, discrete random variables, the binomial and normal models, and the Central Limit Theorem. Everything later depends on being able to compute a mean, a standard deviation, and a tail probability.",
      cedNote: {
        tone: "warning",
        text: "This is Unit 2 of the 2026-27 CED (15-25%). It now opens with two-way tables (old Unit 2) and closes with sampling distributions and the Central Limit Theorem (old Unit 5). Combining random variables and the geometric distribution were removed - skip them even if your textbook still has those sections.",
      },
      topics: [
        {
          id: "stat-u2-t1",
          title: "Two-way tables: joint, marginal, and conditional relative frequencies",
          detail:
            "Marginal uses the grand total; conditional uses a single row or column total. Say which denominator you used.",
        },
        {
          id: "stat-u2-t2",
          title: "Segmented bar charts and association between categorical variables",
          detail:
            "Association exists when the conditional distributions differ across groups. Compare percentages, never raw counts.",
        },
        {
          id: "stat-u4-t1",
          title: "Estimating probabilities with simulation",
          detail:
            "Describe one trial completely: what the random digits represent, what counts as a success, and when a trial ends.",
        },
        {
          id: "stat-u4-t2",
          title: "Basic probability rules and the complement",
          detail:
            "P(not A) = 1 - P(A). Probabilities are between 0 and 1 and sum to 1 over a complete set of outcomes.",
        },
        {
          id: "stat-u4-t3",
          title: "Mutually exclusive events and the addition rule",
          detail:
            "P(A or B) = P(A) + P(B) - P(A and B). Mutually exclusive means P(A and B) = 0, which is not the same as independent.",
        },
        {
          id: "stat-u4-t4",
          title: "Conditional probability",
          detail:
            "P(A | B) = P(A and B)/P(B). In a two-way table this is a single row or column used as the denominator.",
        },
        {
          id: "stat-u4-t5",
          title: "Independence and the multiplication rule",
          detail:
            "A and B are independent when P(A | B) = P(A). Show the check numerically rather than asserting it.",
        },
        {
          id: "stat-u4-t6",
          title: "Discrete random variables and probability distributions",
          detail:
            "A valid distribution has probabilities between 0 and 1 summing to exactly 1.",
        },
        {
          id: "stat-u4-t7",
          title: "Mean and standard deviation of a discrete random variable",
          detail:
            "Mean = sum of x times P(x). Variance = sum of (x - mean)squared times P(x), or E(X squared) minus mean squared.",
        },
        {
          id: "stat-u4-t8",
          title: "The binomial distribution",
          detail:
            "Requires a fixed number of independent trials with a constant success probability. Mean = np, standard deviation = sqrt(np(1-p)).",
        },
        {
          id: "stat-u4-t9",
          title: "The normal distribution as a model",
          detail:
            "Use normalcdf for proportions and invNorm for boundaries, and state the model you assumed.",
        },
        {
          id: "stat-u1-t8",
          title: "The normal distribution, z-scores, and the empirical rule",
          detail:
            "z = (x - mean)/sd. The 68-95-99.7 rule applies only to roughly normal distributions.",
        },
        {
          id: "stat-u1-t9",
          title: "Normal percentile calculations in both directions",
          detail:
            "Given a value, find a proportion; given a proportion, find the value. Always sketch the curve and shade.",
        },
        {
          id: "stat-u5-t1",
          title: "Variation in statistics from sample to sample",
          detail:
            "Different random samples give different statistics. That variability is what a sampling distribution describes.",
        },
        {
          id: "stat-u5-t5",
          title: "Sampling distribution of a sample mean and the Central Limit Theorem",
          detail:
            "Center mu, standard deviation sigma/sqrt(n). The shape is approximately normal for large n regardless of the population shape.",
        },
        {
          id: "stat-u5-t7",
          title: "The 10% condition and independence",
          detail:
            "When sampling without replacement, the sample should be less than 10% of the population for the standard formulas to hold.",
        },
        {
          id: "stat-u5-t8",
          title: "Using a sampling distribution to judge whether a result is surprising",
          detail:
            "Convert the observed statistic to a z-score within its sampling distribution and find the tail probability.",
        }
      ],
      keySkills: [
          "P(A or B) = P(A) + P(B) - P(A and B)",
          "P(A | B) = P(A and B)/P(B)",
          "Discrete RV: mean = sum x·P(x); variance = E(X²) - mean²",
          "Binomial: P(X = k) = C(n, k)p^k(1-p)^(n-k), mean np, sd sqrt(np(1-p))",
          "Independence check: compare P(A | B) with P(A) using actual numbers",
          "z = (x - mean)/standard deviation",
          "Empirical rule: about 68%, 95%, and 99.7% within 1, 2, and 3 standard deviations",
          "SD of x-bar = sigma/sqrt(n); CLT gives approximate normality for large n",
          "10% condition: n ≤ 0.10N when sampling without replacement",
          "Larger n means a smaller standard deviation for the statistic, not for the population",
        ],
      commonMistakes: [
          "Treating mutually exclusive and independent as synonyms. Mutually exclusive events are in fact strongly dependent.",
          "Using np(1-p) as the standard deviation instead of its square root.",
          "Computing P(X = k) when the question asks for P(X at least k), which needs a sum or a cumulative function.",
          "Describing a simulation without saying what a single trial is or when it ends.",
          "Using the empirical rule on a clearly skewed distribution.",
          "Saying 'the distribution is normal because n is large' without checking np ≥ 10 for a proportion.",
          "Confusing the standard deviation of the population with the standard deviation of the sampling distribution.",
          "Writing 'larger samples have less variability' without specifying variability of what.",
          "Comparing raw counts instead of conditional percentages when checking for association in a two-way table.",
        ],
      practiceSet: {
        id: "stat-u2-ps",
        title: "Unit 2 Practice: Probability, Random Variables, and Sampling Distributions",
        focus:
          "Probability rules, expected value, binomial analysis, normal calculations, and the Central Limit Theorem.",
        estimatedMinutes: 55,
        calculator: "allowed",
        problems: [
          {
            id: "stat-u4-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "Events A and B are independent with P(A) = 0.4 and P(B) = 0.5. What is P(A or B)?",
            choices: [
              { label: "A", text: "0.20" },
              { label: "B", text: "0.70" },
              { label: "C", text: "0.90" },
              { label: "D", text: "1.00" },
            ],
            answer: "B",
            solution:
              "Because A and B are independent, P(A and B) = P(A)P(B) = 0.4(0.5) = 0.20. Then P(A or B) = P(A) + P(B) - P(A and B) = 0.4 + 0.5 - 0.2 = 0.70.",
            note: "Choice C is what you get by treating the events as mutually exclusive and skipping the subtraction. Independent events with nonzero probabilities are never mutually exclusive.",
          },
          {
            id: "stat-u4-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "A discrete random variable X has P(X = 0) = 0.2, P(X = 1) = 0.5, and P(X = 2) = 0.3. What are the mean and standard deviation of X?",
            choices: [
              { label: "A", text: "mean 1.0, sd 0.49" },
              { label: "B", text: "mean 1.1, sd 0.49" },
              { label: "C", text: "mean 1.1, sd 0.70" },
              { label: "D", text: "mean 1.5, sd 0.70" },
            ],
            answer: "C",
            solution:
              "Mean = 0(0.2) + 1(0.5) + 2(0.3) = 0 + 0.5 + 0.6 = 1.1. For the variance, E(X²) = 0²(0.2) + 1²(0.5) + 2²(0.3) = 0.5 + 1.2 = 1.7, so the variance is 1.7 - 1.1² = 1.7 - 1.21 = 0.49 and the standard deviation is sqrt(0.49) = 0.70.",
            note: "Choice B reports the variance as the standard deviation - an easy and expensive slip. Take the square root.",
          },
          {
            id: "stat-u4-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "In a binomial setting with n = 10 and p = 0.3, what is P(X = 3), to three decimal places?",
            choices: [
              { label: "A", text: "0.027" },
              { label: "B", text: "0.200" },
              { label: "C", text: "0.267" },
              { label: "D", text: "0.300" },
            ],
            answer: "C",
            solution:
              "P(X = 3) = C(10, 3)(0.3)³(0.7)⁷ = 120(0.027)(0.0823543) = 0.2668, which rounds to 0.267.",
            note: "Choice A is (0.3)³ alone, which is the probability of one specific arrangement without the 120 ways it can happen.",
          },
          {
            id: "stat-u4-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "Which pair of statements describes a situation where the binomial model does NOT apply?",
            choices: [
              { label: "A", text: "Flipping a fair coin 20 times and counting heads." },
              { label: "B", text: "Drawing 5 cards without replacement from a standard deck and counting hearts." },
              { label: "C", text: "Asking 50 randomly chosen voters from a city of 400,000 whether they will vote, and counting yeses." },
              { label: "D", text: "Rolling a die 12 times and counting sixes." },
            ],
            answer: "B",
            solution:
              "The binomial model requires independent trials with a constant probability of success. Drawing without replacement from a 52-card deck changes the probability of a heart on each draw, so trials are not independent. Choice C is technically sampling without replacement too, but the population is so large relative to the sample (50 out of 400,000, well under 10%) that the binomial model is an excellent approximation.",
            note: "The 10% condition is what rescues choice C. Sampling less than 10% of a population makes the dependence negligible.",
          },
          {
            id: "stat-u1-p3",
            kind: "multiple-choice",
            label: "MCQ 5",
            prompt:
              "Scores on a test are approximately normal with mean 500 and standard deviation 100. Approximately what percent of scores exceed 700?",
            choices: [
              { label: "A", text: "0.15%" },
              { label: "B", text: "2.5%" },
              { label: "C", text: "5%" },
              { label: "D", text: "16%" },
            ],
            answer: "B",
            solution:
              "The z-score is (700 - 500)/100 = 2. By the empirical rule, about 95% of values lie within 2 standard deviations, leaving about 5% in the two tails combined and about 2.5% in the upper tail. The exact normal calculation gives 0.0228, or 2.28%.",
            note: "Choice C is the combined area in both tails. Sketch and shade only the side you want.",
          },
          {
            id: "stat-u5-p2",
            kind: "multiple-choice",
            label: "MCQ 6",
            prompt:
              "A population is strongly right-skewed with mean 40 and standard deviation 12. For random samples of size 50, the sampling distribution of the sample mean is",
            choices: [
              { label: "A", text: "strongly right-skewed with mean 40 and standard deviation 12." },
              { label: "B", text: "strongly right-skewed with mean 40 and standard deviation 1.70." },
              { label: "C", text: "approximately normal with mean 40 and standard deviation 1.70." },
              { label: "D", text: "approximately normal with mean 40 and standard deviation 12." },
            ],
            answer: "C",
            solution:
              "The Central Limit Theorem says that for a sufficiently large sample size (n = 50 is generally large enough), the sampling distribution of x-bar is approximately normal regardless of the population's shape. Its mean is the population mean 40 and its standard deviation is sigma/sqrt(n) = 12/sqrt(50) = 1.697, about 1.70.",
            note: "Choice D keeps the population standard deviation, which is the most common error. Dividing by sqrt(n) is the whole point.",
          },
          {
            id: "stat-u4-p5",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "A high school surveyed 500 students about whether they play a school sport.\n\n                Plays sport   No sport   Total\nFreshmen            120           80       200\nSeniors             150          150       300\nTotal               270          230       500\n\nOne student is selected at random from the 500.",
            parts: [
              { label: "(a)", text: "Find the probability that the student plays a sport." },
              { label: "(b)", text: "Find the probability that the student is a senior and does not play a sport." },
              { label: "(c)", text: "Find the probability that the student plays a sport, given that the student is a freshman." },
              { label: "(d)", text: "Are 'plays a sport' and 'is a freshman' independent events? Justify with a numerical comparison." },
            ],
            solution:
              "(a) P(plays sport) = 270/500 = 0.54.\n\n(b) P(senior and no sport) = 150/500 = 0.30.\n\n(c) Restrict to the 200 freshmen: P(plays sport | freshman) = 120/200 = 0.60.\n\n(d) They are not independent. P(plays sport) = 0.54 but P(plays sport | freshman) = 0.60. Since 0.60 is not equal to 0.54, knowing a student is a freshman changes the probability that the student plays a sport, so the events are dependent. (Equivalent check: P(freshman and sport) = 120/500 = 0.24, while P(freshman)P(sport) = 0.40(0.54) = 0.216, and 0.24 is not 0.216.)",
            rubric: [
              { points: "2 pts", criterion: "0.54 with the grand total as denominator." },
              { points: "2 pts", criterion: "0.30 as a joint probability." },
              { points: "3 pts", criterion: "0.60 using the freshman row total as denominator." },
              { points: "3 pts", criterion: "States not independent and compares two specific numbers." },
            ],
            note: "In part (d), 'they are not independent because more freshmen play sports' earns nothing. The two numbers being compared must appear.",
          },
          {
            id: "stat-u4-p6",
            kind: "free-response",
            label: "FRQ 2",
            prompt:
              "A quiz has 8 multiple-choice questions, each with 4 answer choices and exactly one correct answer. A student who has not studied guesses randomly and independently on every question. Let X be the number of questions answered correctly.",
            parts: [
              { label: "(a)", text: "Explain why X can be modeled with a binomial distribution and state its parameters." },
              { label: "(b)", text: "Find the mean and standard deviation of X." },
              { label: "(c)", text: "Find P(X = 3)." },
              { label: "(d)", text: "The passing score is 5 correct. Find the probability the guessing student passes, and comment on whether guessing is a reasonable strategy." },
            ],
            solution:
              "(a) There is a fixed number of trials (n = 8 questions), each trial has two outcomes (correct or not), the trials are independent because the student guesses independently, and the probability of success is constant at p = 1/4 = 0.25 since each question has 4 equally likely choices. So X follows a binomial distribution with n = 8 and p = 0.25.\n\n(b) Mean = np = 8(0.25) = 2 questions. Standard deviation = sqrt(np(1 - p)) = sqrt(8(0.25)(0.75)) = sqrt(1.5) = 1.2247 questions.\n\n(c) P(X = 3) = C(8, 3)(0.25)³(0.75)⁵ = 56(0.015625)(0.2373047) = 0.2076.\n\n(d) P(X ≥ 5) = 1 - P(X ≤ 4) = 0.0273. A guessing student has only about a 2.7% chance of passing. Since guessing yields an expected score of just 2 out of 8 and passes fewer than 3 times in 100 attempts, it is not a reasonable strategy - the passing score of 5 is more than two standard deviations above the guessing mean of 2.",
            rubric: [
              { points: "3 pts", criterion: "Verifies all four binomial conditions and states n = 8, p = 0.25." },
              { points: "2 pts", criterion: "Mean 2 and standard deviation 1.2247, with units." },
              { points: "2 pts", criterion: "P(X = 3) = 0.2076 with the formula or calculator command shown." },
              { points: "3 pts", criterion: "P(X ≥ 5) = 0.0273 and a justified comment in context." },
            ],
            note: "Part (d) needs a cumulative calculation, not a single pmf value. Writing P(X ≥ 5) = 1 - P(X ≤ 4) explicitly protects you from the off-by-one.",
          },
          {
            id: "stat-u1-p6",
            kind: "free-response",
            label: "FRQ 3",
            prompt:
              "The heights of adult women in a large population are approximately normally distributed with mean 64 inches and standard deviation 2.5 inches.",
            parts: [
              { label: "(a)", text: "What proportion of women are taller than 68 inches? Show the z-score." },
              { label: "(b)", text: "What proportion of women are between 61 and 67 inches tall?" },
              { label: "(c)", text: "How tall must a woman be to be in the tallest 10% of this population?" },
              { label: "(d)", text: "A women's clothing line will be designed for the middle 95% of heights. What interval of heights is that, using the empirical rule?" },
            ],
            solution:
              "(a) z = (68 - 64)/2.5 = 1.6. From the normal table, the area to the left of z = 1.6 is 0.9452, so the area above is 1 - 0.9452 = 0.0548. About 5.5% of women are taller than 68 inches.\n\n(b) The two z-scores are (61 - 64)/2.5 = -1.2 and (67 - 64)/2.5 = 1.2. The area between them is 0.8849 - 0.1151 = 0.7699. About 77.0% of women are between 61 and 67 inches tall.\n\n(c) The tallest 10% lies above the 90th percentile. The z-score with 0.90 area to its left is z = 1.2816. Converting back, x = 64 + 1.2816(2.5) = 64 + 3.204 = 67.204 inches. A woman must be about 67.2 inches tall.\n\n(d) By the empirical rule the middle 95% lies within 2 standard deviations of the mean, that is 64 ± 2(2.5) = 64 ± 5, giving heights from 59 to 69 inches. (Using the exact 1.96 multiplier gives 59.1 to 68.9 inches, essentially the same.)",
            rubric: [
              { points: "2 pts", criterion: "Correct z = 1.6 and proportion 0.0548." },
              { points: "2 pts", criterion: "Both z-scores and the proportion 0.7699." },
              { points: "3 pts", criterion: "Identifies the 90th percentile, uses z = 1.28, and converts to 67.2 inches." },
              { points: "2 pts", criterion: "Interval 59 to 69 inches via the empirical rule." },
              { points: "1 pt", criterion: "All answers labeled with units and stated as proportions of women." },
            ],
            note: "Part (c) runs the calculation backwards, which is where students stall. The tell is that the question gives you a percent and asks for a value.",
          }
        ],
      },
    },
    {
      id: "stat-u3",
      number: "3",
      title: "Inference for Categorical Data: Proportions",
      examWeight: "15-25%",
      examWeightMidpoint: 20,
      classPeriods: "~30 class periods",
      summary:
        "The first full inference unit and the template for everything that follows: state hypotheses and parameters, plan by naming the procedure and checking conditions, do the computation, and conclude in context with linkage to the p-value. Sampling distributions of proportions and the surviving chi-square tests live here too.",
      cedNote: {
        tone: "warning",
        text: "This is Unit 3 of the 2026-27 CED (15-25%), the heaviest unit in class-period count. It now includes sampling distributions for proportions and the chi-square tests for homogeneity and independence (old Unit 8). The chi-square goodness-of-fit test was removed - do not review it. Teachers still using nine units will call the proportion work Unit 6 and the chi-square work Unit 8.",
      },
      topics: [
        {
          id: "stat-u5-t2",
          title: "Biased versus unbiased estimators",
          detail:
            "An estimator is unbiased when the mean of its sampling distribution equals the parameter. The sample mean and sample proportion are unbiased.",
        },
        {
          id: "stat-u5-t3",
          title: "Sampling distribution of a sample proportion",
          detail:
            "Center p, standard deviation sqrt(p(1-p)/n), approximately normal when np and n(1-p) are both at least 10.",
        },
        {
          id: "stat-u5-t4",
          title: "Sampling distribution of a difference between two proportions",
          detail:
            "Center p1 - p2, standard deviation the square root of the sum of the two individual variances.",
        },
        {
          id: "stat-u6-t1",
          title: "Constructing a confidence interval for a population proportion",
          detail:
            "p-hat plus or minus z* times sqrt(p-hat(1 - p-hat)/n). Conditions use p-hat, not p, since p is unknown.",
        },
        {
          id: "stat-u6-t2",
          title: "Interpreting a confidence interval and a confidence level",
          detail:
            "The interval statement is about the parameter; the level statement is about the method over many samples. They are different sentences.",
        },
        {
          id: "stat-u6-t3",
          title: "Margin of error and choosing a sample size",
          detail:
            "Solve z* sqrt(p(1-p)/n) ≤ ME for n, using p = 0.5 when no estimate is available, then round up.",
        },
        {
          id: "stat-u6-t4",
          title: "Setting up a significance test for a proportion",
          detail:
            "State H0: p = p0 and Ha with a direction, define p in context, and state alpha.",
        },
        {
          id: "stat-u6-t5",
          title: "Carrying out a one-proportion z-test",
          detail:
            "The standard error uses the null value p0, not p-hat. This differs from the confidence interval formula.",
        },
        {
          id: "stat-u6-t6",
          title: "Type I and Type II errors and power",
          detail:
            "Type I is rejecting a true null; Type II is failing to reject a false null. Power increases with larger n, larger effect, or larger alpha.",
        },
        {
          id: "stat-u6-t7",
          title: "Inference for a difference between two proportions",
          detail:
            "Confidence intervals use the separate sample proportions; the significance test uses a pooled (combined) proportion in the standard error.",
        },
        {
          id: "stat-u6-t8",
          title: "Selecting an appropriate procedure",
          detail:
            "Decide one-sample versus two-sample and interval versus test from the question's wording, then name the procedure explicitly.",
        },
        {
          id: "stat-u8-t1",
          title: "The chi-square statistic and chi-square distributions",
          detail:
            "Chi-square measures the total squared distance between observed and expected counts, scaled by the expected counts. The distribution is right-skewed with only positive values.",
        },
        {
          id: "stat-u8-t2",
          title: "Expected counts in a two-way table",
          detail:
            "Expected count = (row total x column total)/grand total. Show at least one of these computations on free response.",
        },
        {
          id: "stat-u8-t3",
          title: "The chi-square test for homogeneity",
          detail:
            "Use it to compare the distribution of one categorical variable across two or more populations or treatment groups.",
        },
        {
          id: "stat-u8-t4",
          title: "The chi-square test for independence",
          detail:
            "Use it when one sample is classified by two categorical variables and you are asking whether they are associated.",
        },
        {
          id: "stat-u8-t5",
          title: "Degrees of freedom for a two-way table",
          detail:
            "df = (number of rows - 1)(number of columns - 1), counting only the category rows and columns, not the totals.",
        },
        {
          id: "stat-u8-t6",
          title: "Conditions for chi-square procedures",
          detail:
            "Random sampling or assignment, the 10% condition where relevant, and all expected counts at least 5 - expected, not observed.",
        },
        {
          id: "stat-u8-t7",
          title: "Interpreting components of the chi-square statistic",
          detail:
            "The largest individual term identifies which cell contributed most to the result, which is what 'describe the nature of the association' is asking for.",
        },
        {
          id: "stat-u8-t8",
          title: "Selecting among chi-square, two-proportion, and other procedures",
          detail:
            "A 2x2 table with two groups can be handled by either a two-proportion z-test or chi-square; more than two categories requires chi-square.",
        }
      ],
      keySkills: [
          "SD of p-hat = sqrt(p(1-p)/n); normality when np ≥ 10 and n(1-p) ≥ 10",
          "One-proportion CI: p-hat ± z*sqrt(p-hat(1 - p-hat)/n)",
          "One-proportion test statistic: z = (p-hat - p0)/sqrt(p0(1 - p0)/n)",
          "Sample size: n ≥ (z*/ME)²p(1 - p), rounded up, using p = 0.5 as the conservative choice",
          "Two-proportion test uses the pooled proportion; the interval does not",
          "z* values: 1.645 for 90%, 1.96 for 95%, 2.576 for 99%",
          "Chi-square statistic = sum over cells of (observed - expected)²/expected",
          "Expected count = (row total)(column total)/(grand total)",
          "df = (rows - 1)(columns - 1)",
          "Condition: all expected counts at least 5",
          "Homogeneity compares groups; independence examines two variables in one sample",
        ],
      commonMistakes: [
          "Interpreting a 95% interval as '95% of the data' or '95% probability that p is in this interval'.",
          "Using p-hat in the test standard error instead of the null value p0.",
          "Rounding a sample size down. Always round up, even from 1067.1 to 1068.",
          "Writing a conclusion that rejects H0 without linking to the p-value and alpha.",
          "Checking that observed counts are at least 5 instead of expected counts.",
          "Using the table's total row and column when counting rows and columns for df.",
          "Concluding 'the variables are independent' after failing to reject. The correct wording is that there is not convincing evidence of an association.",
          "Reporting chi-square as negative, which is impossible - every term is a square divided by a positive number.",
        ],
      practiceSet: {
        id: "stat-u3-ps",
        title: "Unit 3 Practice: Inference for Proportions and Chi-Square",
        focus:
          "Sampling distributions of p-hat, one- and two-proportion inference, and a complete chi-square test for homogeneity or independence.",
        estimatedMinutes: 60,
        calculator: "allowed",
        problems: [
          {
            id: "stat-u5-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "A population proportion is p = 0.4. For random samples of size n = 100, what is the standard deviation of the sampling distribution of p-hat?",
            choices: [
              { label: "A", text: "0.0024" },
              { label: "B", text: "0.0490" },
              { label: "C", text: "0.2400" },
              { label: "D", text: "0.4899" },
            ],
            answer: "B",
            solution:
              "SD(p-hat) = sqrt(p(1 - p)/n) = sqrt(0.4(0.6)/100) = sqrt(0.0024) = 0.0490.",
            note: "Choice A is the variance, and choice C is p(1-p) without dividing by n. Always finish with the square root.",
          },
          {
            id: "stat-u5-p4",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "Which statement correctly describes what it means for the sample proportion p-hat to be an unbiased estimator of p?",
            choices: [
              { label: "A", text: "Every sample gives a p-hat equal to p." },
              { label: "B", text: "The mean of the sampling distribution of p-hat equals p." },
              { label: "C", text: "The standard deviation of p-hat equals 0." },
              { label: "D", text: "p-hat gets closer to p as the population grows." },
            ],
            answer: "B",
            solution:
              "Unbiasedness is a statement about the center of the sampling distribution: on average, over all possible samples of that size, p-hat equals p. Individual samples still vary, which is exactly what the standard deviation measures.",
            note: "Unbiased says nothing about precision. An estimator can be unbiased and still highly variable, which is why sample size matters separately.",
          },
          {
            id: "stat-u6-p1",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "In a random sample of 400 adults, 240 say they exercise weekly. What is the 95% confidence interval for the population proportion?",
            choices: [
              { label: "A", text: "(0.576, 0.624)" },
              { label: "B", text: "(0.552, 0.648)" },
              { label: "C", text: "(0.540, 0.660)" },
              { label: "D", text: "(0.502, 0.698)" },
            ],
            answer: "B",
            solution:
              "p-hat = 240/400 = 0.60. The standard error is sqrt(0.6(0.4)/400) = sqrt(0.0006) = 0.024495. With z* = 1.96, the margin of error is 1.96(0.024495) = 0.048. The interval is 0.60 ± 0.048 = (0.552, 0.648).",
            note: "Choice A uses z* = 1 and choice C uses z* = 2.576 (a 99% level). Match the z* to the stated confidence level.",
          },
          {
            id: "stat-u6-p2",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "A pollster wants a 95% confidence interval for a population proportion with margin of error at most 0.03, and has no prior estimate of p. What is the smallest sample size that will do?",
            choices: [
              { label: "A", text: "1,036" },
              { label: "B", text: "1,067" },
              { label: "C", text: "1,068" },
              { label: "D", text: "4,269" },
            ],
            answer: "C",
            solution:
              "With no prior estimate, use the conservative p = 0.5, which maximizes p(1 - p) at 0.25. Solving 1.96 sqrt(0.25/n) ≤ 0.03 gives n ≥ (1.96/0.03)²(0.25) = (65.333)²(0.25) = 4268.44(0.25) = 1067.11. Sample size must be a whole number and the inequality must hold, so round up to 1,068.",
            note: "Choice B is the unrounded value truncated. Always round a sample size up, never to the nearest integer.",
          },
          {
            id: "stat-u6-p3",
            kind: "multiple-choice",
            label: "MCQ 5",
            prompt:
              "Which is a correct interpretation of a 95% confidence interval of (0.552, 0.648) for the proportion of adults who exercise weekly?",
            choices: [
              { label: "A", text: "95% of adults exercise between 55.2% and 64.8% of the time." },
              { label: "B", text: "There is a 95% probability that p is between 0.552 and 0.648." },
              { label: "C", text: "We are 95% confident that the interval from 0.552 to 0.648 captures the true proportion of all adults who exercise weekly." },
              { label: "D", text: "95% of samples of this size will have p-hat between 0.552 and 0.648." },
            ],
            answer: "C",
            solution:
              "The required sentence is about confidence in the method capturing the parameter, and it must name the parameter in context. Choice B misstates confidence as a probability about a fixed (if unknown) parameter. Choice A describes individuals rather than a proportion. Choice D describes the sampling distribution of p-hat, not the interval's meaning.",
            note: "Learn the template: 'We are C% confident that the interval from __ to __ captures the true [parameter in context].' Reproduce it exactly.",
          },
          {
            id: "stat-u6-p4",
            kind: "multiple-choice",
            label: "MCQ 6",
            prompt:
              "A company tests H0: p = 0.5 against Ha: p is not 0.5, where p is the proportion of customers preferring a new package design. In a random sample of 100 customers, 58 prefer the new design. What is the test statistic and two-sided p-value?",
            choices: [
              { label: "A", text: "z = 1.60, p-value = 0.0548" },
              { label: "B", text: "z = 1.60, p-value = 0.1096" },
              { label: "C", text: "z = 1.62, p-value = 0.1052" },
              { label: "D", text: "z = 0.08, p-value = 0.9362" },
            ],
            answer: "B",
            solution:
              "The standard error under the null is sqrt(0.5(0.5)/100) = sqrt(0.0025) = 0.05. Then z = (0.58 - 0.50)/0.05 = 1.60. For a two-sided alternative, the p-value is 2(1 - 0.9452) = 0.1096.",
            note: "Choice A is the one-sided p-value. When Ha uses 'is not equal to', double the tail area.",
          },
          {
            id: "stat-u8-p3",
            kind: "multiple-choice",
            label: "MCQ 7",
            prompt:
              "A researcher takes one random sample of 400 adults and records both their education level (4 categories) and their preferred news source (3 categories). Which test is appropriate?",
            choices: [
              { label: "A", text: "Chi-square test for goodness of fit" },
              { label: "B", text: "Chi-square test for homogeneity" },
              { label: "C", text: "Chi-square test for independence" },
              { label: "D", text: "Two-sample t-test" },
            ],
            answer: "C",
            solution:
              "A single sample classified by two categorical variables calls for the chi-square test for independence, which asks whether the two variables are associated in the population. Homogeneity would apply if the researcher had drawn separate samples from four education-level populations.",
            note: "One sample, two variables means independence. Several samples or treatment groups, one variable means homogeneity. That is the entire distinction.",
          },
          {
            id: "stat-u6-p5",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "A delivery company advertises that 90% of its packages arrive on time. A consumer group takes a random sample of 150 recent deliveries and finds that 127 arrived on time. Test, at the 0.05 significance level, whether the true on-time rate is less than 90%.",
            parts: [
              { label: "(a)", text: "State the hypotheses, defining the parameter in context." },
              { label: "(b)", text: "Name the procedure and verify the conditions." },
              { label: "(c)", text: "Compute the test statistic and the p-value." },
              { label: "(d)", text: "State a complete conclusion in context, with linkage to the p-value." },
            ],
            solution:
              "(a) Let p be the true proportion of all of this company's packages that arrive on time. H0: p = 0.90 and Ha: p < 0.90.\n\n(b) Procedure: a one-sample z-test for a population proportion. Conditions: the 150 deliveries are a random sample, as stated. The 10% condition is reasonable since the company ships far more than 1,500 packages. Large counts using the null value: np0 = 150(0.90) = 135 ≥ 10 and n(1 - p0) = 150(0.10) = 15 ≥ 10. All conditions are met, so the sampling distribution of p-hat is approximately normal under H0.\n\n(c) p-hat = 127/150 = 0.84667. The standard error under the null is sqrt(0.90(0.10)/150) = sqrt(0.0006) = 0.024495. The test statistic is z = (0.84667 - 0.90)/0.024495 = -0.05333/0.024495 = -2.177. For the left-tailed alternative, the p-value is P(Z < -2.177) = 0.0147.\n\n(d) Because the p-value of 0.0147 is less than alpha = 0.05, we reject H0. There is convincing statistical evidence that the true proportion of this company's packages arriving on time is less than the advertised 90%.",
            rubric: [
              { points: "2 pts", criterion: "Correct hypotheses with p defined in context." },
              { points: "2 pts", criterion: "Names the one-sample z-test for a proportion." },
              { points: "2 pts", criterion: "Verifies randomness, 10%, and large counts using p0 with numbers." },
              { points: "2 pts", criterion: "z = -2.18 and p-value = 0.0147." },
              { points: "2 pts", criterion: "Rejects H0 with explicit comparison of p-value to alpha and a conclusion in context." },
            ],
            note: "The large-counts check for a test uses p0 = 0.90, not p-hat = 0.847. For a confidence interval it would use p-hat. Mixing these up is the most common condition error in the unit.",
          },
          {
            id: "stat-u6-p6",
            kind: "free-response",
            label: "FRQ 2",
            prompt:
              "In a randomized experiment, 120 patients received a new treatment and 45 improved. Of 130 patients in the control group, 30 improved.",
            parts: [
              { label: "(a)", text: "Construct a 95% confidence interval for the difference in the proportions who improve (treatment minus control)." },
              { label: "(b)", text: "Interpret the interval in context." },
              { label: "(c)", text: "Does the interval provide evidence that the treatment is effective? Explain." },
              { label: "(d)", text: "Can a cause-and-effect conclusion be drawn? Why or why not?" },
            ],
            solution:
              "(a) p-hat-1 = 45/120 = 0.375 and p-hat-2 = 30/130 = 0.2308. The difference is 0.375 - 0.2308 = 0.1442. The standard error for a two-proportion interval uses the separate proportions: sqrt(0.375(0.625)/120 + 0.2308(0.7692)/130) = sqrt(0.0019531 + 0.0013655) = sqrt(0.0033186) = 0.05761. With z* = 1.96 the margin of error is 1.96(0.05761) = 0.1129. The interval is 0.1442 ± 0.1129 = (0.0313, 0.2571). Conditions: random assignment was used; each group has at least 10 successes and 10 failures (45 and 75; 30 and 100).\n\n(b) We are 95% confident that the interval from 0.0313 to 0.2571 captures the true difference in the proportion of patients who improve, treatment minus control. That is, the treatment's improvement rate is plausibly between about 3.1 and 25.7 percentage points higher than the control rate.\n\n(c) Yes. The entire interval lies above 0, so 0 is not a plausible value for the difference. Since a difference of zero would mean the two improvement rates are equal, the interval provides convincing evidence that the treatment improves outcomes more often than the control.\n\n(d) Yes, a causal conclusion is appropriate here because this was a randomized experiment. Random assignment balances other patient characteristics across the two groups on average, so the difference in improvement rates can be attributed to the treatment. Generalization beyond these 250 patients would require knowing that they were randomly selected from a larger population.",
            rubric: [
              { points: "3 pts", criterion: "Correct unpooled standard error and interval (0.031, 0.257)." },
              { points: "1 pt", criterion: "Checks conditions including at least 10 successes and failures per group." },
              { points: "2 pts", criterion: "Interprets the interval as capturing the true difference, in context." },
              { points: "2 pts", criterion: "Notes the interval excludes 0 and draws the right conclusion." },
              { points: "2 pts", criterion: "Justifies causation by random assignment and limits generalization." },
            ],
            note: "Note the asymmetry: two-proportion confidence intervals use separate standard errors, while two-proportion significance tests pool. The formula sheet has both - read the header carefully.",
          },
          {
            id: "stat-u8-p5",
            kind: "free-response",
            label: "FRQ 3",
            prompt:
              "A school surveyed a random sample of 100 underclassmen and an independent random sample of 100 upperclassmen about their preference among two schedule proposals.\n\n                 Prefer A   Prefer B   No preference   Total\nUnderclassmen       40         30           30          100\nUpperclassmen       30         50           20          100\nTotal               70         80           50          200\n\nTest at alpha = 0.05 whether the distribution of schedule preference is the same for the two groups.",
            parts: [
              { label: "(a)", text: "State the hypotheses and name the appropriate test." },
              { label: "(b)", text: "Compute all expected counts and verify the conditions." },
              { label: "(c)", text: "Compute the chi-square statistic, the degrees of freedom, and the p-value." },
              { label: "(d)", text: "State your conclusion in context and identify which cell contributed most to the statistic." },
            ],
            solution:
              "(a) Because two separate samples were drawn from two populations and one categorical variable (preference) was recorded, this is a chi-square test for homogeneity. H0: the distribution of schedule preference is the same for underclassmen and upperclassmen. Ha: the distributions of schedule preference are not the same for the two groups.\n\n(b) Expected count = (row total)(column total)/200. Each row total is 100, so each row's expected counts are 100(70)/200 = 35 for Prefer A, 100(80)/200 = 40 for Prefer B, and 100(50)/200 = 25 for No preference. Both rows have the same expected counts: 35, 40, 25. Conditions: two independent random samples were taken; all six expected counts (35, 40, 25, 35, 40, 25) are at least 5; each sample is clearly less than 10% of its population.\n\n(c) Chi-square = (40-35)²/35 + (30-40)²/40 + (30-25)²/25 + (30-35)²/35 + (50-40)²/40 + (20-25)²/25 = 0.7143 + 2.5 + 1 + 0.7143 + 2.5 + 1 = 8.429. df = (2 - 1)(3 - 1) = 2. The p-value is P(chi-square with 2 df > 8.429) = 0.0148.\n\n(d) Since the p-value of 0.0148 is less than alpha = 0.05, we reject H0. There is convincing statistical evidence that underclassmen and upperclassmen do not have the same distribution of schedule preferences. The largest contributions to the statistic (2.5 each) come from the 'Prefer B' column: upperclassmen preferred proposal B much more often than expected (50 observed versus 40 expected) while underclassmen preferred it less often than expected (30 versus 40). Upperclassmen lean toward proposal B and underclassmen toward proposal A.",
            rubric: [
              { points: "2 pts", criterion: "Names homogeneity and states hypotheses about distributions across groups." },
              { points: "2 pts", criterion: "All six expected counts correct." },
              { points: "1 pt", criterion: "Verifies expected counts at least 5 and randomness." },
              { points: "2 pts", criterion: "Chi-square = 8.43 with the sum shown." },
              { points: "1 pt", criterion: "df = 2 and p-value = 0.015." },
              { points: "2 pts", criterion: "Rejects with linkage, concludes in context, and identifies the largest contributing cells." },
            ],
            note: "Because both row totals are 100 here, the expected counts are identical in both rows - a useful arithmetic check. Part (d)'s cell analysis is the part most students skip and it is worth real points.",
          }
        ],
      },
    },
    {
      id: "stat-u4",
      number: "4",
      title: "Inference for Quantitative Data: Means",
      examWeight: "10-20%",
      examWeightMidpoint: 15,
      classPeriods: "~18 class periods",
      summary:
        "The same four-step template as proportions, but with the t-distribution and a new decision to make: one sample, matched pairs, or two independent samples. Misidentifying the design is the fastest way to lose an entire free-response question.",
      cedNote: {
        tone: "info",
        text: "This is Unit 4 of the 2026-27 CED (10-20%). Teachers still using nine units will call it Unit 7. Sampling distributions of means (old Unit 5) now open this unit; the inference procedures themselves did not change.",
      },
      topics: [
        {
          id: "stat-u5-t6",
          title: "Sampling distribution of a difference between two means",
          detail:
            "Center mu1 - mu2, standard deviation sqrt(sigma1²/n1 + sigma2²/n2). Variances add; standard deviations do not.",
        },
        {
          id: "stat-u7-t1",
          title: "The t-distribution and degrees of freedom",
          detail:
            "Use t whenever the population standard deviation is unknown. t has heavier tails than z, and approaches z as df grows.",
        },
        {
          id: "stat-u7-t2",
          title: "One-sample t confidence interval for a mean",
          detail:
            "x-bar plus or minus t* times s/sqrt(n), with df = n - 1. Check normality of the population or a large enough sample.",
        },
        {
          id: "stat-u7-t3",
          title: "One-sample t-test for a mean",
          detail:
            "t = (x-bar - mu0)/(s/sqrt(n)), df = n - 1. State H0 and Ha about mu, never about x-bar.",
        },
        {
          id: "stat-u7-t4",
          title: "Recognizing a matched-pairs design",
          detail:
            "Look for two measurements on the same subject or on naturally paired subjects. Analyze the single list of differences.",
        },
        {
          id: "stat-u7-t5",
          title: "Matched-pairs t procedures",
          detail:
            "Compute the differences first, then run a one-sample t procedure on them with df = number of pairs minus 1.",
        },
        {
          id: "stat-u7-t6",
          title: "Two-sample t confidence interval for a difference of means",
          detail:
            "Difference of sample means plus or minus t* times sqrt(s1²/n1 + s2²/n2). Use the calculator's df or the conservative min(n1 - 1, n2 - 1).",
        },
        {
          id: "stat-u7-t7",
          title: "Two-sample t-test for a difference of means",
          detail:
            "Same standard error as the interval. Do not pool variances unless explicitly instructed.",
        },
        {
          id: "stat-u7-t8",
          title: "Checking conditions for t procedures",
          detail:
            "Random sampling or assignment, the 10% condition, and either a stated normal population, n ≥ 30, or a graph of the data with no strong skew or outliers.",
        },
        {
          id: "stat-u7-t9",
          title: "Selecting an appropriate inference procedure",
          detail:
            "Read for one versus two groups, paired versus independent, and whether the question asks to estimate (interval) or to test a claim.",
        }
      ],
      keySkills: [
          "For differences, add the variances and then take the square root",
          "One-sample t: t = (x-bar - mu0)/(s/sqrt(n)), df = n - 1",
          "Matched pairs: run one-sample t on the differences, df = pairs - 1",
          "Two-sample SE: sqrt(s1²/n1 + s2²/n2); conservative df = min(n1 - 1, n2 - 1)",
          "Normality condition: stated normal, n ≥ 30, or a graph with no strong skew or outliers",
          "Interval when the question says 'estimate'; test when it says 'is there convincing evidence'",
        ],
      commonMistakes: [
          "Adding standard deviations instead of variances when working with a difference.",
          "Running a two-sample test on matched-pairs data, which uses the wrong standard error and the wrong df.",
          "Writing hypotheses about x-bar instead of mu.",
          "Using z* instead of t* because the sample size is large. If sigma is unknown, use t.",
          "Saying 'the data is normal' as a condition check. The condition is about the population; you check it with a graph of the sample.",
        ],
      practiceSet: {
        id: "stat-u4-ps",
        title: "Unit 4 Practice: Inference for Means",
        focus:
          "Sampling distributions of means, one-sample t intervals and tests, a full matched-pairs analysis, and a two-sample t-test with correct df.",
        estimatedMinutes: 55,
        calculator: "allowed",
        problems: [
          {
            id: "stat-u7-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "A random sample of 25 items has x-bar = 48.2 and s = 6.4. What is the 95% confidence interval for the population mean?",
            choices: [
              { label: "A", text: "(45.69, 50.71)" },
              { label: "B", text: "(45.56, 50.84)" },
              { label: "C", text: "(46.92, 49.48)" },
              { label: "D", text: "(35.66, 60.74)" },
            ],
            answer: "B",
            solution:
              "Because sigma is unknown, use t with df = 25 - 1 = 24, giving t* = 2.0639. The standard error is s/sqrt(n) = 6.4/5 = 1.28. The margin of error is 2.0639(1.28) = 2.642, so the interval is 48.2 ± 2.642 = (45.56, 50.84).",
            note: "Choice A uses z* = 1.96, which is the classic 'my sample is big enough' error. With sigma unknown, t is always correct.",
          },
          {
            id: "stat-u7-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "Using the same sample (n = 25, x-bar = 48.2, s = 6.4), a researcher tests H0: mu = 50 against Ha: mu is not 50. What are the test statistic and p-value?",
            choices: [
              { label: "A", text: "t = -1.41, p-value = 0.086" },
              { label: "B", text: "t = -1.41, p-value = 0.172" },
              { label: "C", text: "t = -7.03, p-value < 0.001" },
              { label: "D", text: "t = 1.41, p-value = 0.828" },
            ],
            answer: "B",
            solution:
              "t = (48.2 - 50)/(6.4/sqrt(25)) = -1.8/1.28 = -1.406. With df = 24 and a two-sided alternative, the p-value is 2(0.0862) = 0.172. Since 0.172 > 0.05, we would not reject H0.",
            note: "Choice A gives only one tail. Choice C divides by s without dividing by sqrt(n) - the standard error, not s, goes in the denominator.",
          },
          {
            id: "stat-u7-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "Which scenario calls for a matched-pairs t procedure?",
            choices: [
              { label: "A", text: "Comparing mean SAT scores of 40 students at School A and 45 students at School B." },
              { label: "B", text: "Measuring reaction time for 20 subjects before and after caffeine consumption." },
              { label: "C", text: "Comparing the mean height of a random sample of 50 men to 68 inches." },
              { label: "D", text: "Comparing the proportion of defective parts from two machines." },
            ],
            answer: "B",
            solution:
              "Matched pairs applies when two measurements come from the same subject (or from naturally paired subjects). Choice B measures each of 20 people twice, so the correct analysis is a one-sample t procedure on the 20 differences. Choice A is two independent samples, choice C is one sample, and choice D is about proportions.",
            note: "The giveaway phrases are 'before and after', 'each subject', 'twins', and 'left and right'. Circle them.",
          },
          {
            id: "stat-u7-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "For a two-sample t procedure with n1 = 12 and n2 = 18, what is the conservative number of degrees of freedom?",
            choices: [
              { label: "A", text: "11" },
              { label: "B", text: "17" },
              { label: "C", text: "28" },
              { label: "D", text: "29" },
            ],
            answer: "A",
            solution:
              "The conservative choice is min(n1 - 1, n2 - 1) = min(11, 17) = 11. This yields a wider interval and a larger p-value than the calculator's Welch approximation, so it never overstates your evidence.",
            note: "Choice C is n1 + n2 - 2, the pooled df, which only applies if you assume equal population variances - something AP Statistics does not ask you to do.",
          },
          {
            id: "stat-u5-p3",
            kind: "multiple-choice",
            label: "MCQ 5",
            prompt:
              "A population has mean 70 and standard deviation 15. For random samples of size 25, what is the approximate probability that the sample mean exceeds 74?",
            choices: [
              { label: "A", text: "0.0912" },
              { label: "B", text: "0.3944" },
              { label: "C", text: "0.6056" },
              { label: "D", text: "0.9088" },
            ],
            answer: "A",
            solution:
              "The standard deviation of x-bar is 15/sqrt(25) = 15/5 = 3. The z-score is (74 - 70)/3 = 1.333. The area above z = 1.333 is 1 - 0.9088 = 0.0912.",
            note: "Choice B uses the population standard deviation 15, giving z = 0.267 - always divide by sqrt(n) first.",
          },
          {
            id: "stat-u7-p5",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "Eight volunteers had their systolic blood pressure measured before and after an eight-week exercise program.\n\nSubject:  1    2    3    4    5    6    7    8\nBefore:  152  148  160  155  143  170  158  149\nAfter:   146  145  150  152  141  159  151  147\n\nTest whether the program reduces systolic blood pressure, using alpha = 0.05.",
            parts: [
              { label: "(a)", text: "Explain why a matched-pairs procedure is appropriate and compute the differences." },
              { label: "(b)", text: "State the hypotheses, defining the parameter." },
              { label: "(c)", text: "Verify conditions, compute the test statistic and p-value." },
              { label: "(d)", text: "State a conclusion in context." },
            ],
            solution:
              "(a) Each subject was measured twice, so the two lists are not independent - a person with high blood pressure before tends to have high blood pressure after. The correct analysis treats each subject as one observation of the change. Differences (before minus after): 6, 3, 10, 3, 2, 11, 7, 2.\n\n(b) Let mu-d be the true mean reduction in systolic blood pressure (before minus after) for people who complete this program. H0: mu-d = 0 and Ha: mu-d > 0.\n\n(c) Conditions: the subjects are volunteers, which limits generalization, but we proceed treating them as representative; more importantly a dotplot of the eight differences shows all positive values with no outliers and no strong skew, so the t procedure is reasonable for n = 8. Computing from the differences: mean d-bar = 44/8 = 5.5 mm Hg and s-d = 3.586 mm Hg. The standard error is 3.586/sqrt(8) = 1.268. The test statistic is t = 5.5/1.268 = 4.338 with df = 8 - 1 = 7. The one-sided p-value is P(t7 > 4.338) = 0.0017.\n\n(d) Since the p-value of 0.0017 is much less than alpha = 0.05, we reject H0. There is convincing statistical evidence that the eight-week exercise program reduces mean systolic blood pressure. Because subjects were volunteers rather than randomly selected, and because there was no control group, we should be cautious about both generalizing this result and attributing it entirely to the exercise program rather than to the passage of time or other changes.",
            rubric: [
              { points: "2 pts", criterion: "Justifies pairing and lists the eight differences correctly." },
              { points: "2 pts", criterion: "Hypotheses about mu-d with the parameter defined in context." },
              { points: "1 pt", criterion: "Conditions addressed, including a graph-based normality comment." },
              { points: "2 pts", criterion: "d-bar = 5.5, s-d = 3.586, t = 4.34, df = 7." },
              { points: "1 pt", criterion: "p-value = 0.0017." },
              { points: "2 pts", criterion: "Rejects H0 with linkage, concludes in context, and notes design limitations." },
            ],
            note: "Running a two-sample test on these same numbers gives t ≈ 1.56 and a one-sided p-value around 0.07 - not significant at all. Pairing removes the huge person-to-person variation in baseline blood pressure, which is exactly why the paired test is so decisive here.",
          },
          {
            id: "stat-u7-p6",
            kind: "free-response",
            label: "FRQ 2",
            prompt:
              "Two independent random samples of students took the same exam. Group A (n = 30) had a mean of 82.4 with standard deviation 7.1. Group B (n = 28) had a mean of 77.9 with standard deviation 8.3.",
            parts: [
              { label: "(a)", text: "Name the appropriate procedure and verify conditions." },
              { label: "(b)", text: "Test whether the two population means differ, using alpha = 0.05. Report the test statistic, df, and p-value." },
              { label: "(c)", text: "Construct a 95% confidence interval for the difference in means (A minus B) and explain how it relates to your test decision." },
            ],
            solution:
              "(a) A two-sample t-test for a difference of means. Conditions: both samples are stated to be independent random samples; both sample sizes are at least 30 or close to it (30 and 28), so by the Central Limit Theorem the sampling distributions of the sample means are approximately normal; the samples are surely less than 10% of their populations of students.\n\n(b) H0: mu-A = mu-B and Ha: mu-A is not equal to mu-B, where mu-A and mu-B are the true mean exam scores in the two populations. The standard error is sqrt(7.1²/30 + 8.3²/28) = sqrt(1.6803 + 2.4604) = sqrt(4.1407) = 2.0349. The test statistic is t = (82.4 - 77.9)/2.0349 = 4.5/2.0349 = 2.211. Using the calculator's Welch degrees of freedom, df = 53.3, the two-sided p-value is 0.0313. With the conservative df = min(29, 27) = 27, the p-value is 0.0357. Either way the p-value is below 0.05, so we reject H0. There is convincing evidence that the two population mean exam scores differ.\n\n(c) With df = 53.3 the critical value is t* = 2.005, so the margin of error is 2.005(2.0349) = 4.08 and the interval is 4.5 ± 4.08 = (0.42, 8.58). (Using the conservative df = 27, t* = 2.052 gives (0.32, 8.68).) The interval lies entirely above 0, which is consistent with rejecting the null hypothesis of no difference at the 5% level: zero is not a plausible value for the difference in means. The interval adds information the test alone does not - the advantage for Group A is plausibly anywhere from under half a point to nearly nine points, so 'statistically significant' here does not mean 'large'.",
            rubric: [
              { points: "2 pts", criterion: "Names the two-sample t-test and checks randomness, normality, and independence." },
              { points: "2 pts", criterion: "Correct hypotheses about mu-A and mu-B." },
              { points: "2 pts", criterion: "SE = 2.035 and t = 2.21." },
              { points: "1 pt", criterion: "Reports a defensible df and p-value near 0.03." },
              { points: "1 pt", criterion: "Rejects H0 with linkage and a contextual conclusion." },
              { points: "2 pts", criterion: "Correct interval and an explanation connecting it to the test decision." },
            ],
            note: "A two-sided test at alpha and a confidence interval at level 1 - alpha always agree. If your interval contains 0 but you rejected H0, you have an arithmetic error somewhere.",
          },
          {
            id: "stat-u5-p6",
            kind: "free-response",
            label: "FRQ 3",
            prompt:
              "Two independent random samples are taken. Sample 1 has n1 = 40 drawn from a population with mean 52 and standard deviation 8. Sample 2 has n2 = 60 drawn from a population with mean 48 and standard deviation 10.",
            parts: [
              { label: "(a)", text: "Find the mean of the sampling distribution of x-bar-1 minus x-bar-2." },
              { label: "(b)", text: "Find the standard deviation of that sampling distribution, showing the formula." },
              { label: "(c)", text: "Explain why you may treat the shape as approximately normal." },
              { label: "(d)", text: "Find the probability that x-bar-1 minus x-bar-2 is less than 0, and interpret that value." },
            ],
            solution:
              "(a) The mean of the difference is the difference of the means: 52 - 48 = 4.\n\n(b) Variances add: SD = sqrt(sigma1²/n1 + sigma2²/n2) = sqrt(64/40 + 100/60) = sqrt(1.6 + 1.6667) = sqrt(3.2667) = 1.8074.\n\n(c) Both sample sizes are large (40 and 60, each at least 30), so by the Central Limit Theorem each sample mean is approximately normal. A difference of two independent approximately normal variables is itself approximately normal.\n\n(d) z = (0 - 4)/1.8074 = -2.213, and the area below that is about 0.0134. So there is roughly a 1.3% chance that the first sample mean comes out below the second sample mean, even though population 1 really does have the larger mean. This is a reminder that sampling variability can reverse the apparent direction of a difference, especially with moderate sample sizes.",
            rubric: [
              { points: "2 pts", criterion: "Mean of the difference is 4." },
              { points: "3 pts", criterion: "Correct variance-adding formula and SD 1.807." },
              { points: "2 pts", criterion: "Invokes the CLT for both samples." },
              { points: "3 pts", criterion: "z = -2.21, probability about 0.013, and an interpretation in context." },
            ],
            note: "If you ever find yourself writing sqrt(8²/40) + sqrt(10²/60), stop. Add the variances, then take one square root at the end.",
          }
        ],
      },
    },
    {
      id: "stat-u5",
      number: "5",
      title: "Regression Analysis",
      examWeight: "10-20%",
      examWeightMidpoint: 15,
      classPeriods: "~9 class periods",
      summary:
        "Scatterplots, correlation, and least-squares regression. Interpreting slope and r-squared in context is tested somewhere on essentially every exam. Inference for the slope was removed from the course.",
      cedNote: {
        tone: "warning",
        text: "This is Unit 5 of the 2026-27 CED (10-20%). Teachers still using nine units will call the descriptive regression work Unit 2. Inference for slopes (old Unit 9) and analyzing departures from linearity were removed - do not spend May review time on slope tests or slope intervals. Two-way tables now open Unit 2, not this unit.",
      },
      topics: [
        {
          id: "stat-u2-t3",
          title: "Describing a scatterplot: direction, unusual features, form, strength",
          detail:
            "All four elements, in context. 'Strong positive linear' without naming the variables is incomplete.",
        },
        {
          id: "stat-u2-t4",
          title: "Correlation r and its properties",
          detail:
            "r is between -1 and 1, unitless, measures only linear strength, and is not resistant to outliers. Correlation is not causation.",
        },
        {
          id: "stat-u2-t5",
          title: "The least-squares regression line",
          detail:
            "Slope b = r(sy/sx), and the line always passes through (x-bar, y-bar). Interpret slope as a predicted change.",
        },
        {
          id: "stat-u2-t6",
          title: "Residuals and residual plots",
          detail:
            "Residual = observed minus predicted. A curved or fan-shaped residual plot means a line is the wrong model.",
        },
        {
          id: "stat-u2-t7",
          title: "Coefficient of determination r-squared",
          detail:
            "The percent of variation in the response variable that is explained by the linear model with the explanatory variable.",
        },
        {
          id: "stat-u2-t8",
          title: "Outliers, high-leverage points, and influential points",
          detail:
            "High leverage means an extreme x-value. Influential means removing it substantially changes the line.",
        },
        {
          id: "stat-u2-t9",
          title: "Reading regression computer output",
          detail:
            "Locate the intercept and slope estimates, the standard error of the slope, S, and R-Sq in a printout.",
        }
      ],
      keySkills: [
          "Slope from summary statistics: b = r(sy/sx); intercept a = y-bar - b(x-bar)",
          "The LSRL always passes through (x-bar, y-bar)",
          "Residual = observed - predicted; positive residual means the model underpredicted",
          "r = sqrt(r-squared), with the sign taken from the slope",
          "Slope interpretation template: 'For each additional [x unit], the predicted [y] increases by b [y units].'",
        ],
      commonMistakes: [
          "Interpreting slope deterministically ('y increases by b') instead of as a predicted change.",
          "Saying r-squared is 'the percent of data points on the line' rather than the percent of variation explained.",
          "Reporting r as positive when the slope is negative.",
        ],
      practiceSet: {
        id: "stat-u5-ps",
        title: "Unit 5 Practice: Regression Analysis",
        focus:
          "Building a regression line from summary statistics, residuals, r-squared interpretation, reading computer output, and scope of inference for observational association.",
        estimatedMinutes: 45,
        calculator: "allowed",
        problems: [
          {
            id: "stat-u2-p1",
            kind: "multiple-choice",
            label: "MCQ 1",
            prompt:
              "For a set of paired data, x-bar = 30, y-bar = 80, sx = 5, sy = 12, and r = 0.75. What is the least-squares regression equation?",
            choices: [
              { label: "A", text: "predicted y = 26 + 1.8x" },
              { label: "B", text: "predicted y = 80 + 0.75x" },
              { label: "C", text: "predicted y = 70.6 + 0.3125x" },
              { label: "D", text: "predicted y = 26 + 0.75x" },
            ],
            answer: "A",
            solution:
              "The slope is b = r(sy/sx) = 0.75(12/5) = 0.75(2.4) = 1.8. The line passes through (x-bar, y-bar), so 80 = a + 1.8(30) = a + 54, giving a = 26. The equation is predicted y = 26 + 1.8x.",
            note: "Choice C uses r(sx/sy), the reciprocal ratio. Remember: the standard deviation of the response goes on top.",
          },
          {
            id: "stat-u2-p2",
            kind: "multiple-choice",
            label: "MCQ 2",
            prompt:
              "A regression of exam score on hours studied has r-squared = 0.684. Which interpretation is correct?",
            choices: [
              { label: "A", text: "68.4% of exam scores can be predicted exactly from hours studied." },
              { label: "B", text: "68.4% of the variation in exam scores is explained by the linear relationship with hours studied." },
              { label: "C", text: "68.4% of the data points lie on the regression line." },
              { label: "D", text: "For each additional hour studied, exam scores rise 68.4%." },
            ],
            answer: "B",
            solution:
              "r-squared is the proportion of the variation in the response variable that the linear model accounts for. The correct sentence names the response variable, the explanatory variable, and the word 'variation'.",
            note: "Memorize this sentence frame: '[r-squared]% of the variation in [response, in context] is explained by the linear relationship with [explanatory, in context].'",
          },
          {
            id: "stat-u2-p3",
            kind: "multiple-choice",
            label: "MCQ 3",
            prompt:
              "Using the line predicted y = 26 + 1.8x, a case with x = 25 has an observed y of 72. What is the residual?",
            choices: [
              { label: "A", text: "-3.4" },
              { label: "B", text: "-1.0" },
              { label: "C", text: "1.0" },
              { label: "D", text: "3.4" },
            ],
            answer: "C",
            solution:
              "The predicted value is 26 + 1.8(25) = 26 + 45 = 71. The residual is observed minus predicted = 72 - 71 = 1.0. The residual is positive, so the model underpredicted this case and the point lies above the line.",
            note: "Residual = observed - predicted, always in that order. Choice B reverses the subtraction, which is the most common error here.",
          },
          {
            id: "stat-u2-p4",
            kind: "multiple-choice",
            label: "MCQ 4",
            prompt:
              "Which statement about correlation r is FALSE?",
            choices: [
              { label: "A", text: "r has no units, so changing from inches to centimeters does not change it." },
              { label: "B", text: "r measures the strength of a linear relationship only." },
              { label: "C", text: "r is resistant to outliers." },
              { label: "D", text: "Swapping the explanatory and response variables leaves r unchanged." },
            ],
            answer: "C",
            solution:
              "Correlation is computed from means and standard deviations, both of which are non-resistant, so a single extreme point can move r dramatically. The other three statements are all true properties of r.",
            note: "A classic exam figure shows a tight cluster plus one far-off point; adding that point can push r from near 0 to near 0.9.",
          },
          {
            id: "stat-u2-p5",
            kind: "free-response",
            label: "FRQ 1",
            prompt:
              "A statistics teacher regressed final exam score on hours of weekly study for her 20 students. The computer output is below.\n\nPredictor      Coef     SE Coef\nConstant       12.40     3.10\nHours           4.60     0.82\n\nS = 5.2      R-Sq = 68.4%      n = 20",
            parts: [
              { label: "(a)", text: "Write the equation of the least-squares regression line, defining your variables." },
              { label: "(b)", text: "Interpret the slope in context." },
              { label: "(c)", text: "Find the value of the correlation r and explain how you determined its sign." },
              { label: "(d)", text: "Predict the score for a student who studies 6 hours per week. If that student actually scored 35, find and interpret the residual." },
            ],
            solution:
              "(a) Let x be hours of weekly study and let y-hat be the predicted final exam score. Then y-hat = 12.40 + 4.60x.\n\n(b) For each additional hour of weekly study, the predicted final exam score increases by 4.60 points. (Note 'predicted' - the model describes an association, not a guaranteed individual outcome.)\n\n(c) r = sqrt(0.684) = 0.827. The sign is positive because the slope, 4.60, is positive; r and the slope always share a sign.\n\n(d) y-hat = 12.40 + 4.60(6) = 12.40 + 27.60 = 40.0 points. The residual is observed minus predicted = 35 - 40 = -5.0 points. The model overpredicted this student's score by 5 points; the student scored 5 points lower than the line predicts for 6 hours of study.",
            rubric: [
              { points: "2 pts", criterion: "Correct equation with variables defined and y-hat notation." },
              { points: "2 pts", criterion: "Slope interpreted as a predicted change, with units and context." },
              { points: "2 pts", criterion: "r = 0.827 with the sign justified by the slope." },
              { points: "2 pts", criterion: "Prediction of 40.0 points." },
              { points: "2 pts", criterion: "Residual -5.0 with a correct interpretation of the direction." },
            ],
            note: "Writing y instead of y-hat is a real deduction. The hat is what marks the value as a prediction rather than an observation.",
          },
          {
            id: "stat-u9-p4",
            kind: "free-response",
            label: "FRQ 2",
            prompt:
              "A researcher regresses exam score on hours of weekly study for 20 randomly selected students.\n\nPredictor     Coef     SE Coef\nConstant      12.40     3.10\nHours          4.60     0.82\n\nS = 5.2     R-Sq = 68.4%     n = 20",
            parts: [
              { label: "(a)", text: "Can the researcher conclude that studying more causes higher exam scores? Explain." },
            ],
            solution:
              "No. These data are observational: the researcher recorded how much students happened to study rather than assigning study hours at random. Variables such as prior preparation, motivation, and course difficulty are plausibly related both to study time and to exam score, so they confound the relationship. A causal conclusion would require randomly assigning students to different amounts of study time.",
            rubric: [
              { points: "3 pts", criterion: "Denies causation and names confounding in an observational study." },
            ],
            note: "Slope inference was removed from the 2026-27 course, but this scope-of-inference question is still assessed - observational data never licenses causation.",
          }
        ],
      },
    }
  ],
};
