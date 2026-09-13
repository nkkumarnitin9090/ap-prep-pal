# Senior Year AP Plan

A study planner for one US high school senior taking four AP exams in May 2027:
**AP Calculus BC**, **AP Statistics**, **AP Physics 2**, and **AP English Literature and
Composition**.

It answers three questions the student actually asked:

- **When do I study what?** A week-by-week plan for the 2026-27 school year, grouped into
  phases, plus the repeating Monday-to-Sunday block schedule the plan assumes.
- **What do I need to learn?** Every course broken into units, every unit into checkable
  topics, with the official exam weighting, the skills worth memorising, and the mistakes
  that reliably cost points.
- **How do I know it stuck?** A practice set at the end of every unit: multiple-choice
  questions you answer and check, free-response questions you self-score against the
  rubric, and fully worked solutions that stay hidden until you ask for them.

Progress is stored in the browser's `localStorage`, so there is no account and no server
to run beyond Next.js itself.

## In this Cursor project

A dev server is already running in this Cloud Agent environment. **Do not run
`npm run dev` a second time.** Click **Preview**, or open
[http://127.0.0.1:43127](http://127.0.0.1:43127). A browser tab will not pop
open on its own.

If you do run `npm run dev` while that server is up, it prints this reminder
and exits 0 instead of crashing with `EADDRINUSE`.

## mirror from cursor repo to github
- Log into that GitHub account and create a new empty repo (no README, no license).
- Create a token for that account: https://github.com/settings/personal-access-tokens
- Fine-grained → that account as owner → only that new repo → Contents: Read and write.

In the project folder:
- git remote remove origin
- git remote add origin https://github.com/YOUR_GITHUB_USER/YOUR_REPO.git
- git branch -M main
- git push -u origin main
When asked:
- Username: YOUR_GITHUB_USER
- Password: the token that created above


## Getting started

On a fresh clone on your laptop:

```bash
npm install
npm run dev
```

Then open [http://127.0.0.1:43127](http://127.0.0.1:43127). `npm run dev` and
`npm start` listen on port 43127 (`0.0.0.0`, reachable as 127.0.0.1).

Other scripts:

```bash
npm run build   # production build; also runs TypeScript and ESLint
npm run start   # serve the production build on 127.0.0.1:43127
npm run lint    # ESLint only
npx tsc --noEmit
```
Later updates on that laptop

- cd ap-prep-pal
- git add -A
- git commit -m "Describe the change"
- git push

## Routes

| Route              | What it shows                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| `/`                | Dashboard: overall and per-course progress, exam countdowns, and this week's focus         |
| `/schedule`        | The full year plan grouped by phase, plus the weekly time-block view                       |
| `/courses/[slug]`  | One course: exam format, units, topic checklists, practice sets, rubrics, and resources    |

Course slugs are `ap-calculus-bc`, `ap-statistics`, `ap-physics-2`, and
`ap-english-literature`.

## Project structure

```
src/
  app/                  App Router routes (dashboard, schedule, course pages, 404)
  components/
    course/             Course page sections: unit list, topic checklist, rubrics
    dashboard/          Course cards, exam countdown, weekly focus panel
    practice/           Practice sets, MCQ checking, self-scored FRQs, solution reveal
    schedule/           Year-plan week rows, practice links, and the weekly block view
    ui/                 shadcn/ui primitives (do not hand-roll replacements for these)
  data/                 All course and schedule content (see below)
  hooks/                localStorage progress store, hydration and hash helpers
  lib/                  Accent tokens, date formatting, content helpers
```

The UI never hardcodes a course, a unit, or a week. Everything is derived from the data
modules, so content can grow or shrink without touching a component.

## Editing course content

All content lives under `src/data/` and is typed by `src/data/types.ts`, which is the
place to look first: it documents every field the UI renders.

- `src/data/courses/<course>.ts` exports one `Course`: exam date and sections, optional
  course-level CED notes, units (weighting, class periods, summary, topics, key skills,
  common mistakes, and a practice set), and optional big ideas, skill categories,
  free-response question types, and resources.
- `src/data/courses/index.ts` is the registry the app consumes: `courses` (display order),
  `coursesBySlug`, `getCourse(slug)`, and `totalTopicCount()`.
- `src/data/schedule.ts` exports `scheduleWeeks` (the year plan), `weeklyPlan` (the
  Monday-to-Sunday blocks), `phaseLabels`, and `getCurrentWeekIndex(date?)`.

Two rules keep edits safe:

1. **Topic ids must be globally unique and stable.** Checkbox progress is keyed by topic
   id, so renaming an id silently resets that topic for the student.
2. **Optional fields are genuinely optional.** Empty arrays render real empty states
   rather than blank pages, so partially written content is fine to commit.

## Accuracy disclaimer

Unit weightings, exam dates, exam formats, and rubric language change from year to year,
and some of the courses here were recently revised. Confirm every weighting and date
against the current official College Board Course and Exam Description for your year, and
confirm exam dates, times, and locations with your school's AP coordinator before relying
on them.
