"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { allQuestions, drills, subjectMap, subjects } from "@/lib/data";
import type { Drill } from "@/lib/types";
import { useProgress } from "@/lib/progress";
import { CheckCircle, ProgressBar } from "@/components/ui";
import { QuestionCard } from "@/components/study";

function DrillRunner({ drill, onDone, done }: { drill: Drill; onDone: () => void; done: boolean }) {
  const { isDone, toggle } = useProgress();
  const [started, setStarted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(drill.minutes * 60);
  const [finished, setFinished] = useState(false);
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval> | null>(null);

  const questions = useMemo(() => {
    const pool =
      drill.subjectId === "mixed"
        ? subjects.flatMap((s) => allQuestions(s.id).map((q) => ({ ...q, color: subjectMap[s.id].color, subjectName: s.short })))
        : allQuestions(drill.subjectId).map((q) => ({
            ...q,
            color: subjectMap[drill.subjectId as keyof typeof subjectMap].color,
            subjectName: subjectMap[drill.subjectId as keyof typeof subjectMap].short,
          }));
    // Deterministic sample per drill so a refresh keeps the same set
    let seed = drill.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const arr = [...pool];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, drill.count);
  }, [drill]);

  const start = () => {
    setStarted(true);
    setFinished(false);
    setSecondsLeft(drill.minutes * 60);
    if (timerId) clearInterval(timerId);
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          setFinished(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    setTimerId(id);
  };

  const stop = () => {
    if (timerId) clearInterval(timerId);
    setFinished(true);
  };

  const mm = Math.floor(secondsLeft / 60);
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="mt-3 rounded-xl bg-slate-50 p-4">
      {!started ? (
        <button
          onClick={start}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-700"
        >
          Start {drill.minutes}-minute timer
        </button>
      ) : (
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className={`rounded-xl px-4 py-2 font-mono text-xl font-black ${secondsLeft < 60 ? "bg-red-100 text-red-700" : "bg-slate-900 text-white"}`}>
              {mm}:{ss}
            </span>
            {!finished ? (
              <button onClick={stop} className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-bold text-slate-600 hover:bg-slate-100">
                Finish early
              </button>
            ) : (
              <button onClick={start} className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-bold text-slate-600 hover:bg-slate-100">
                Restart
              </button>
            )}
            {finished && (
              <span className="text-sm font-bold text-emerald-700">
                Time! Check your answers against the solutions below.
              </span>
            )}
          </div>
          <div className="mt-3 space-y-3">
            {questions.map((q, i) => (
              <div key={q.id}>
                <p className="mb-1 text-xs font-bold text-slate-500">
                  Drill Q{i + 1} · {q.subjectName} · {q.unitTitle}
                </p>
                <QuestionCard q={q} num={i + 1} checked={isDone(`q:${q.id}`)} onToggle={() => toggle(`q:${q.id}`)} accent={q.color} />
              </div>
            ))}
          </div>
          <label className="mt-3 flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
            <CheckCircle checked={done} onToggle={onDone} label={`Mark drill ${drill.title} complete`} />
            <span className="text-sm font-bold text-emerald-900">I completed this drill under time</span>
          </label>
        </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  const { ready, isDone, toggle } = useProgress();
  const [filter, setFilter] = useState<string>("all");
  const [open, setOpen] = useState<string | null>(null);

  const visible = drills.filter((d) => filter === "all" || d.subjectId === filter);
  const doneCount = drills.filter((d) => isDone(`drill:${d.id}`)).length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link href="/" className="text-sm font-bold text-indigo-600 hover:text-indigo-800">
        ← Dashboard
      </Link>
      <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Practice hub</h1>
      <p className="mt-1 max-w-3xl text-[15px] text-slate-600">
        Timed drills drawn from the real practice sets. Start the timer, work without notes, then
        grade yourself with the toggled solutions.
      </p>

      {!ready ? (
        <div className="mt-6 h-48 animate-pulse rounded-2xl bg-slate-200/70" aria-label="Loading drills" />
      ) : (
        <>
          <div className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex-1">
              <div className="mb-1.5 flex justify-between text-xs font-bold text-slate-500">
                <span>{doneCount} of {drills.length} drills completed</span>
                <span>{Math.round((doneCount / drills.length) * 100)}%</span>
              </div>
              <ProgressBar pct={(doneCount / drills.length) * 100} color="#4f46e5" />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[{ id: "all", label: "All" }, ...subjects.map((s) => ({ id: s.id, label: s.short })), { id: "mixed", label: "Mixed" }].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition ${
                  filter === f.id ? "bg-slate-900 text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            {visible.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
                <p className="font-bold text-slate-700">No drills match this filter.</p>
                <p className="mt-1 text-sm text-slate-500">Try a different subject.</p>
              </div>
            )}
            {visible.map((d) => {
              const color = d.subjectId === "mixed" ? "#4f46e5" : subjectMap[d.subjectId as keyof typeof subjectMap].color;
              const expanded = open === d.id;
              return (
                <div key={d.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <button onClick={() => setOpen(expanded ? null : d.id)} className="flex w-full items-center gap-3 p-4 text-left hover:bg-slate-50 sm:p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white" style={{ background: color }}>
                      ⏱
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-extrabold text-slate-900">
                        {d.title} {isDone(`drill:${d.id}`) && <span className="text-emerald-600">✓</span>}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-slate-500">
                        {d.minutes} min · {d.count} questions · {d.strategy.split(".")[0]}.
                      </span>
                    </span>
                    <svg className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expanded && (
                    <div className="border-t border-slate-100 p-4 sm:p-5">
                      <p className="rounded-xl bg-amber-50 px-3 py-2 text-[13px] font-medium leading-relaxed text-amber-900">
                        <strong>Strategy:</strong> {d.strategy}
                      </p>
                      <DrillRunner drill={d} done={isDone(`drill:${d.id}`)} onDone={() => toggle(`drill:${d.id}`)} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-slate-200 sm:p-6">
            <h2 className="text-base font-extrabold text-white">Universal exam-week tips</h2>
            <ul className="mt-2 grid gap-2 text-sm leading-relaxed sm:grid-cols-2">
              <li>→ Sleep 8 hours the whole exam week — all-nighters cost more points than they buy.</li>
              <li>→ Pack pencils, pens, calculator + batteries, ID, and snack the night before.</li>
              <li>→ First pass: answer everything easy; mark and return — never leave MCQ blank.</li>
              <li>→ FRQs: write something set-up-shaped for every part; partial credit is generous.</li>
              <li>→ If stuck 90 seconds on MCQ, eliminate one, guess, move on, circle back.</li>
              <li>→ After each exam, dump it — ruminating poisons the next day's test.</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
