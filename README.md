# AP Compass

A responsive, locally persisted 35-week study roadmap for a high-school senior preparing for AP Physics 2, AP Statistics, AP English Literature and Composition, and AP Calculus BC.

The plan runs from September 14, 2026 through the expected spring 2027 AP exam window. It includes major course units, concrete original practice tasks, a sustainable weekly rhythm, phase and subject filters, and per-task progress tracking in the browser.

## Run locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run build
```

## Notes

- Progress is stored only in the current browser through `localStorage`; there is no account or database.
- Exact 2027 AP exam dates should be confirmed with College Board and the student’s school when the final calendar is available.
- Course sequencing is a planning guide and can be shifted to match a teacher’s syllabus.
