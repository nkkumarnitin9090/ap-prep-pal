"use client";

import Link from "next/link";
import { schedule, subjects, totalQuestions, totalUnits, weeklyRhythm } from "@/lib/data";
import { countDone, useProgress } from "@/lib/progress";
import { ProgressBar } from "@/components/ui";

export default function Dashboard() {
  const { map, ready, reset } = useProgress();

  const perSubject = subjects.map((s) => {
    const ids = s.units.flatMap((u) => u.practice.map((q) => `q:${q.id}`));
    return { subject: s, ...countDone(map, ids) };
  });
  const overall = countDone(
    map,
    subjects.flatMap((s) => s.units.flatMap((u) => u.practice.map((q) => `q:${q.id}`)))
  );
  const weekTasks = schedule.flatMap((w) => w.tasks.map((_, i) => `task:${w.week}:${i}`));
  const weekDone = countDone(map, weekTasks);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Hero */}
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 p-6 text-white shadow-lg sm:p-10">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-indigo-200">
          AP Physics 2 · Calc BC · Stats · Lit
        </p>
        <h1 className="mt-2 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
          Senior year, four exams, one plan.
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-indigo-100">
          A 16-week fall semester (Sept 14 – Jan 3) at ~1.5–2 hours a day, rolling straight into a
          spring exam-prep phase through early May. Work the units, check off practice as you go —
          everything saves in your browser.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/schedule"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-indigo-700 shadow transition hover:bg-indigo-50"
          >
            Open the 16-week schedule
          </Link>
          <Link
            href="/practice"
            className="rounded-xl border border-white/40 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Timed drills
          </Link>
        </div>
        <div className="mt-6 max-w-xl">
          <div className="mb-1.5 flex justify-between text-xs font-bold text-indigo-100">
            <span>Overall practice completion</span>
            <span>
              {overall.done}/{overall.total} · {overall.pct}%
            </span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/25">
            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{ width: `${overall.pct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Subject cards */}
      <div className="mt-8 flex items-end justify-between">
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Your subjects</h2>
        <span className="text-sm font-medium text-slate-500">
          {totalUnits()} units · {totalQuestions()} practice questions
        </span>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {perSubject.map(({ subject: s, done, total, pct }) => (
          <Link
            key={s.id}
            href={`/subjects/${s.id}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-black text-white"
                style={{ background: s.color }}
              >
                {s.short.charAt(0)}
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-[15px] font-extrabold text-slate-900 group-hover:text-indigo-700">
                  {s.name}
                </h3>
                <p className="truncate text-[13px] text-slate-500">{s.tagline}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-1.5 flex justify-between text-xs font-bold text-slate-500">
                <span>
                  {done}/{total} practiced
                </span>
                <span>{pct}%</span>
              </div>
              <ProgressBar pct={pct} color={s.color} />
            </div>
            <p className="mt-3 text-[13px] font-semibold text-slate-500 group-hover:text-indigo-600">
              {s.units.length} units · {s.exam.format} →
            </p>
          </Link>
        ))}
      </div>

      {/* Weekly rhythm + schedule progress */}
      <div className="mt-8 grid gap-4 lg:grid-cols-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold text-slate-900">Weekly rhythm · ~90–120 min/day</h2>
            <Link href="/schedule" className="text-sm font-bold text-indigo-600 hover:text-indigo-800">
              Full plan →
            </Link>
          </div>
          <div className="mt-3 divide-y divide-slate-100">
            {weeklyRhythm.map((d) => (
              <div key={d.day} className="flex items-center gap-3 py-2.5">
                <span className="w-24 shrink-0 text-[13px] font-extrabold text-slate-700">{d.day}</span>
                <span className="min-w-0 flex-1 truncate text-[13px] text-slate-600">
                  <strong className="text-slate-800">{d.focus}</strong> · {d.detail}
                </span>
                <span className="hidden shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600 sm:block">
                  {d.minutes}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-extrabold text-slate-900">Schedule checklist</h2>
            <p className="mt-1 text-sm text-slate-500">
              {weekDone.done} of {weekDone.total} weekly tasks checked off across all 16 weeks.
            </p>
            <div className="mt-3">
              <ProgressBar pct={weekDone.pct} color="#4f46e5" />
            </div>
            <Link
              href="/schedule"
              className="mt-4 block rounded-xl bg-indigo-600 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-indigo-700"
            >
              Continue week by week
            </Link>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="text-base font-extrabold text-amber-900">Exam-season rule of three</h2>
            <ul className="mt-2 space-y-1.5 text-sm leading-snug text-amber-900">
              <li>1 · Never miss twice — a skipped day is fine, a skipped streak is fatal.</li>
              <li>2 · Every wrong answer gets a one-line why in your error log.</li>
              <li>3 · Timed reps every Saturday — exams reward pace, not just knowledge.</li>
            </ul>
            {ready && (overall.done > 0 || weekDone.done > 0) && (
              <button
                onClick={() => {
                  if (confirm("Reset all progress? This clears every checkbox.")) reset();
                }}
                className="mt-3 text-xs font-bold text-amber-700 underline hover:text-amber-900"
              >
                Reset all progress
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
