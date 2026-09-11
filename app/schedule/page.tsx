"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { schedule, springPhases, subjectMap, weeklyRhythm } from "@/lib/data";
import { countDone, useProgress } from "@/lib/progress";
import { CheckCircle, ProgressBar } from "@/components/ui";

export default function SchedulePage() {
  const { ready, isDone, toggle } = useProgress();
  const [week, setWeek] = useState(1);
  const current = schedule.find((w) => w.week === week)!;

  const allTaskIds = useMemo(
    () => schedule.flatMap((w) => w.tasks.map((_, i) => `task:${w.week}:${i}`)),
    []
  );
  const doneCount = allTaskIds.filter((id) => isDone(id)).length;
  const overallPct = Math.round((doneCount / allTaskIds.length) * 100);

  const dayIds = weeklyRhythm.map((d) => `day:${week}:${d.day}`);
  const daysDone = dayIds.filter((id) => isDone(id)).length;

  if (!ready) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6" aria-label="Loading schedule">
        <div className="h-40 animate-pulse rounded-3xl bg-slate-200/70" />
        <div className="mt-4 h-64 animate-pulse rounded-2xl bg-slate-200/70" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link href="/" className="text-sm font-bold text-indigo-600 hover:text-indigo-800">
        ← Dashboard
      </Link>
      <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">16-week semester plan</h1>
      <p className="mt-1 max-w-3xl text-[15px] text-slate-600">
        Sept 14 – Jan 3, then the spring exam-prep phase through early May. Pick a week, check off
        daily work and tasks — progress saves automatically.
      </p>

      <div className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex-1">
          <div className="mb-1.5 flex justify-between text-xs font-bold text-slate-500">
            <span>
              {doneCount} of {allTaskIds.length} weekly tasks complete
            </span>
            <span>{overallPct}%</span>
          </div>
          <ProgressBar pct={overallPct} color="#4f46e5" />
        </div>
      </div>

      {/* Week selector */}
      <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-8">
        {schedule.map((w) => {
          const ids = w.tasks.map((_, i) => `task:${w.week}:${i}`);
          const { pct } = countDone(
            Object.fromEntries(ids.filter((id) => isDone(id)).map((id) => [id, true])),
            ids
          );
          const complete = pct === 100;
          return (
            <button
              key={w.week}
              onClick={() => setWeek(w.week)}
              className={`relative rounded-xl border-2 px-2 py-2.5 text-center transition ${
                week === w.week
                  ? "border-indigo-600 bg-indigo-50 shadow"
                  : complete
                    ? "border-emerald-300 bg-emerald-50 hover:border-emerald-400"
                    : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <span className="block text-sm font-black text-slate-800">W{w.week}</span>
              <span className="block truncate text-[10px] font-semibold text-slate-500">{w.title}</span>
              {w.mockWeek && <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-1.5 text-[9px] font-black text-amber-950">MOCK</span>}
              {complete && <span className="absolute -right-1 -top-1 text-sm">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Week detail */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-indigo-700 to-violet-600 p-5 text-white sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold">
              Week {current.week} · {current.dates}
            </span>
            {current.mockWeek && (
              <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-amber-950">
                MOCK EXAM WEEK
              </span>
            )}
          </div>
          <h2 className="mt-2 text-2xl font-black">{current.title}</h2>
          {current.milestone && <p className="mt-1 text-sm font-semibold text-indigo-100">◆ Milestone: {current.milestone}</p>}
          <div className="mt-3 flex gap-2">
            <button
              disabled={week === 1}
              onClick={() => setWeek(week - 1)}
              className="rounded-lg bg-white/15 px-3 py-1.5 text-sm font-bold transition hover:bg-white/25 disabled:opacity-40"
            >
              ← Prev
            </button>
            <button
              disabled={week === 16}
              onClick={() => setWeek(week + 1)}
              className="rounded-lg bg-white/15 px-3 py-1.5 text-sm font-bold transition hover:bg-white/25 disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500">
              This week's focus by subject
            </h3>
            <div className="mt-2 space-y-2">
              {current.focus.map((f) => {
                const s = subjectMap[f.subjectId];
                return (
                  <Link
                    key={f.subjectId}
                    href={`/subjects/${f.subjectId}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-indigo-300 hover:bg-indigo-50/50"
                  >
                    <span
                      className="h-8 w-2 shrink-0 rounded-full"
                      style={{ background: s.color }}
                    />
                    <span>
                      <strong className="block text-sm text-slate-900">{s.name}</strong>
                      <span className="block text-[13px] text-slate-600">{f.text}</span>
                    </span>
                  </Link>
                );
              })}
            </div>

            <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wider text-slate-500">
              Week tasks · {current.tasks.filter((_, i) => isDone(`task:${week}:${i}`)).length}/{current.tasks.length}
            </h3>
            <div className="mt-2 space-y-2">
              {current.tasks.map((t, i) => {
                const id = `task:${week}:${i}`;
                const checked = isDone(id);
                return (
                  <div
                    key={id}
                    className={`flex items-start gap-3 rounded-xl border p-3 ${checked ? "border-emerald-200 bg-emerald-50/60" : "border-slate-200"}`}
                  >
                    <CheckCircle checked={checked} onToggle={() => toggle(id)} label={t} />
                    <span className={`text-sm leading-snug ${checked ? "text-slate-400 line-through" : "text-slate-700"}`}>
                      {t}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500">
              Daily log · {daysDone}/7 days
            </h3>
            <div className="mt-2 space-y-2">
              {weeklyRhythm.map((d) => {
                const id = `day:${week}:${d.day}`;
                const checked = isDone(id);
                return (
                  <div
                    key={d.day}
                    className={`flex items-start gap-3 rounded-xl border p-3 ${checked ? "border-emerald-200 bg-emerald-50/60" : "border-slate-200"}`}
                  >
                    <CheckCircle checked={checked} onToggle={() => toggle(id)} label={`${d.day} study done`} />
                    <span className="min-w-0">
                      <span className={`block text-sm font-bold ${checked ? "text-slate-400 line-through" : "text-slate-800"}`}>
                        {d.day} · {d.focus} <span className="font-semibold text-slate-400">({d.minutes})</span>
                      </span>
                      <span className="block truncate text-[13px] text-slate-500">{d.detail}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Spring phases */}
      <h2 className="mt-8 text-xl font-extrabold tracking-tight text-slate-900">
        Spring exam-prep roadmap · January → early May
      </h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {springPhases.map((p, i) => (
          <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-black text-violet-700">
              Phase {i + 1}
            </span>
            <h3 className="mt-2 text-[15px] font-extrabold text-slate-900">{p.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{p.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
