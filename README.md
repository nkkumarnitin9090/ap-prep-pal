# AP Study Hub

A study planner and practice app for a high school senior taking **AP Physics 2**,
**AP Calculus BC**, **AP Statistics**, and **AP English Literature & Composition**.

## What's inside

- **Dashboard** (`/`) — overview of all 4 subjects, the weekly study rhythm
  (~1.5–2 hrs/day), overall progress bars, and the rule-of-three exam tips.
- **Subject pages** (`/subjects/[id]`) — College Board-aligned units with
  expandable topic cards: "what to learn" concepts, key formulas/terms, and
  6-question practice sets (multiple choice + free response) with hints and
  toggleable solutions. Checkbox progress persists in `localStorage`.
- **Schedule** (`/schedule`) — interactive 16-week fall semester plan
  (Sept 14 – Jan 3) with week selector, per-subject focus, task + daily
  checkboxes, mock-exam weeks (8 & 14), and a spring exam-prep roadmap
  (Jan → early May).
- **Practice Hub** (`/practice`) — 9 timed drills (per-subject + mixed) with
  countdown timers, sampling real questions from the units, plus exam-week tips.

**Content totals:** 28 units, 168 practice questions, 16 weekly plans, 9 drills —
all hardcoded in `lib/` (`data-physics2.ts`, `data-calcbc.ts`, `data-stats.ts`,
`data-lit.ts`, `data.ts`).

## Run locally

Requires Node 18+.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Tech

Next.js (App Router, TypeScript) + Tailwind CSS. No auth, no database —
progress is stored in the browser via `localStorage` (see `lib/progress.tsx`).

## Study schedule summary

**Weekly rhythm:** Mon Physics 2 (100′) · Tue Calc BC (100′) · Wed Stats (90′) ·
Thu Lit (90′) · Fri weakest subject (60′) · Sat timed drill + review (120′) ·
Sun light flashcards (30′).

**Arc:** Weeks 1–4 foundations + first mini-mocks · 5–7 E&M/circuits/magnetism,
integrals, inference · **Week 8 mock #1** · 9–10 optics, modern, volumes,
chi-square · 11–13 parametric/polar, series, timed sections · **Week 14 mock #2** ·
15 winter repair · 16 spring launch → Jan–Feb depth, Mar mock #3, Apr polish,
early-May exams.

## Also in this repo

`src/` contains the **AP Senior Year Mastery Suite** (shadcn-based UI, quiz/FRQ
views, schedule views) from parallel work on this branch. The root `app/`
directory currently takes routing precedence in dev; see that suite's own docs
in git history for details.
