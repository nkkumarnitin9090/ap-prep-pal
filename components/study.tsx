"use client";

import { useState } from "react";
import type { PracticeQuestion, Unit } from "@/lib/types";
import { CheckCircle } from "./ui";

export function UnitCard({
  subjectId,
  subjectColor,
  unit,
  index,
  isDone,
  onToggle,
}: {
  subjectId: string;
  subjectColor: string;
  unit: Unit;
  index: number;
  isDone: (qid: string) => boolean;
  onToggle: (qid: string) => void;
}) {
  const [open, setOpen] = useState(index === 0);
  const done = unit.practice.filter((q) => isDone(`q:${q.id}`)).length;
  const pct = Math.round((done / unit.practice.length) * 100);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-slate-50 sm:p-5"
      >
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white"
          style={{ background: subjectColor }}
        >
          {index + 1}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[15px] font-bold text-slate-900">{unit.title}</span>
          <span className="mt-1 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
            <span className="rounded-full bg-slate-100 px-2 py-0.5">Exam weight {unit.weight}</span>
            <span>
              {done}/{unit.practice.length} practiced
            </span>
          </span>
          <span className="mt-2 block h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-slate-200">
            <span
              className="block h-full rounded-full transition-all"
              style={{ width: `${pct}%`, background: subjectColor }}
            />
          </span>
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-slate-100 p-4 sm:p-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <h4 className="mb-2 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                What to learn
              </h4>
              <ul className="space-y-1.5">
                {unit.concepts.map((c) => (
                  <li key={c} className="flex gap-2 text-sm leading-snug text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: subjectColor }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-slate-900 p-4">
              <h4 className="mb-2 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Key formulas & terms
              </h4>
              <ul className="space-y-1.5">
                {unit.formulas.map((f) => (
                  <li key={f} className="font-mono text-[13px] leading-snug text-emerald-300">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h4 className="mb-2 mt-5 text-xs font-extrabold uppercase tracking-wider text-slate-500">
            Practice set · check off each one you complete
          </h4>
          <div className="space-y-3">
            {unit.practice.map((q, qi) => (
              <QuestionCard
                key={q.id}
                q={q}
                num={qi + 1}
                checked={isDone(`q:${q.id}`)}
                onToggle={() => onToggle(`q:${q.id}`)}
                accent={subjectColor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function QuestionCard({
  q,
  num,
  checked,
  onToggle,
  accent,
  showUnit,
}: {
  q: PracticeQuestion;
  num: number;
  checked: boolean;
  onToggle: () => void;
  accent: string;
  showUnit?: string;
}) {
  const [reveal, setReveal] = useState<"none" | "hint" | "solution">("none");
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <div className={`rounded-xl border p-4 transition ${checked ? "border-emerald-200 bg-emerald-50/60" : "border-slate-200 bg-white"}`}>
      <div className="flex items-start gap-3">
        <CheckCircle checked={checked} onToggle={onToggle} label={`Mark question ${num} complete`} />
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className="text-xs font-black text-slate-400">Q{num}</span>
            <span
              className="rounded px-1.5 py-0.5 text-[11px] font-bold text-white"
              style={{ background: q.kind === "MC" ? accent : "#0f766e" }}
            >
              {q.kind === "MC" ? "Multiple choice" : "Free response"}
            </span>
            {showUnit && (
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-600">
                {showUnit}
              </span>
            )}
          </div>
          <p className="text-sm font-medium leading-relaxed text-slate-800">{q.prompt}</p>

          {q.choices && (
            <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {q.choices.map((c) => {
                const letter = c.trim().charAt(0);
                const isAnswer = q.answer.trim().charAt(0) === letter;
                const selected = picked === letter;
                return (
                  <button
                    key={c}
                    onClick={() => setPicked(selected ? null : letter)}
                    className={`rounded-lg border px-3 py-2 text-left text-[13px] font-medium transition ${
                      reveal === "solution" && isAnswer
                        ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                        : selected
                          ? "border-indigo-400 bg-indigo-50 text-indigo-900"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          )}

          <div className="mt-2.5 flex flex-wrap gap-2">
            <button
              onClick={() => setReveal(reveal === "hint" ? "none" : "hint")}
              className="rounded-lg bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800 transition hover:bg-amber-200"
            >
              {reveal === "hint" ? "Hide hint" : "Hint"}
            </button>
            <button
              onClick={() => setReveal(reveal === "solution" ? "none" : "solution")}
              className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold text-white transition hover:bg-slate-700"
            >
              {reveal === "solution" ? "Hide solution" : q.kind === "MC" ? "Answer + solution" : "Sample answer"}
            </button>
            {picked && q.kind === "MC" && reveal !== "solution" && (
              <span className="px-1 py-1 text-xs font-semibold text-slate-500">
                {picked === q.answer.trim().charAt(0) ? "Correct — nice." : "Not quite — open the solution."}
              </span>
            )}
          </div>

          {reveal === "hint" && (
            <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-[13px] leading-relaxed text-amber-900">
              <strong>Hint:</strong> {q.hint}
            </p>
          )}
          {reveal === "solution" && (
            <div className="mt-2 rounded-lg bg-slate-900 px-3 py-2.5 text-[13px] leading-relaxed">
              <p className="font-bold text-emerald-300">Answer: {q.answer}</p>
              <p className="mt-1 text-slate-200">{q.solution}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
