"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  CircleAlert,
  Clock3,
  RotateCcw,
  Sparkles,
  Target,
} from "lucide-react";
import {
  phases,
  reviewTasks,
  subjects,
  weeklyRhythm,
  type PhaseId,
  type SubjectId,
} from "@/lib/study-data";

const PLAN_START = new Date("2026-09-14T00:00:00");
const EXAM_END = new Date("2027-05-14T23:59:59");
const STORAGE_KEY = "ap-compass-progress-v1";

function taskId(subject: SubjectId, unitIndex: number, taskIndex: number) {
  return `${subject}-${unitIndex}-${taskIndex}`;
}

function getPlanPosition() {
  const now = new Date();
  const days = Math.floor((now.getTime() - PLAN_START.getTime()) / 86400000);
  const week = Math.max(1, Math.min(35, Math.floor(days / 7) + 1));
  const phase: PhaseId =
    week <= 10 ? "foundation" : week <= 21 ? "build" : week <= 28 ? "integrate" : week <= 33 ? "review" : "exam";
  return { week, phase, before: now < PLAN_START, after: now > EXAM_END };
}

export default function Home() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [subjectFilter, setSubjectFilter] = useState<SubjectId | "all">("all");
  const [phaseFilter, setPhaseFilter] = useState<PhaseId | "all">("all");
  const [currentOnly, setCurrentOnly] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const position = useMemo(() => getPlanPosition(), []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        queueMicrotask(() => setCompleted(parsed));
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    queueMicrotask(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }, [completed, loaded]);

  const allTaskIds = subjects.flatMap((subject) =>
    subject.units.flatMap((unit, unitIndex) =>
      unit.practice.map((_, taskIndex) => taskId(subject.id, unitIndex, taskIndex)),
    ),
  );
  const doneCount = allTaskIds.filter((id) => completed[id]).length;
  const overall = Math.round((doneCount / allTaskIds.length) * 100);
  const activePhase = phases.find((phase) => phase.id === position.phase)!;

  const visibleSubjects = subjects
    .filter((subject) => subjectFilter === "all" || subject.id === subjectFilter)
    .map((subject) => ({
      ...subject,
      units: subject.units
        .map((unit, unitIndex) => ({ ...unit, unitIndex }))
        .filter((unit) => {
          const wantedPhase = currentOnly ? position.phase : phaseFilter;
          if (wantedPhase === "all") return true;
          if (wantedPhase === "review" || wantedPhase === "exam") return true;
          return unit.phase === wantedPhase;
        }),
    }))
    .filter((subject) => subject.units.length > 0);

  function toggle(id: string) {
    setCompleted((previous) => ({ ...previous, [id]: !previous[id] }));
  }

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="border-b border-black/10 bg-[var(--paper)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-3" aria-label="AP Compass home">
            <span className="grid size-9 place-items-center rounded-full bg-[var(--ink)] text-sm font-bold text-white">A</span>
            <span>
              <span className="block text-sm font-bold tracking-[-0.02em]">AP COMPASS</span>
              <span className="block text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)]">CLASS OF 2027</span>
            </span>
          </a>
          <div className="hidden items-center gap-2 text-xs font-semibold text-[var(--muted)] sm:flex">
            <CalendarDays className="size-4" />
            Sep 14, 2026 — May 14, 2027
          </div>
          <a href="#plan" className="rounded-full bg-[var(--ink)] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-black/75">
            Open plan
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-black/10">
          <div className="grain pointer-events-none absolute inset-0 opacity-40" />
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 lg:grid-cols-[1.45fr_.7fr] lg:px-10 lg:py-20">
            <div className="relative">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em]">
                <Sparkles className="size-3.5 text-[var(--orange)]" />
                A sustainable 35-week plan
              </div>
              <h1 className="max-w-4xl font-serif text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.86] tracking-[-0.055em]">
                Four exams.<br />
                <span className="italic text-[var(--orange)]">One calm plan.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                A College Board–aligned roadmap for learning every major topic, practicing deliberately, and arriving in May with energy left.
              </p>
            </div>

            <aside className="relative self-end rounded-[1.75rem] border border-black/10 bg-[var(--ink)] p-6 text-white shadow-[0_24px_70px_rgba(26,35,33,.18)] sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">Your position</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <p className="font-serif text-4xl tracking-tight">{position.before ? "Plan preview" : position.after ? "Plan complete" : `Week ${position.week}`}</p>
                  <p className="mt-1 text-sm text-white/60">{activePhase.title} · {activePhase.dates}</p>
                </div>
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/20 text-sm font-bold">
                  {overall}%
                </span>
              </div>
              <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-white/15">
                <div className="h-full rounded-full bg-[var(--orange)] transition-all" style={{ width: `${overall}%` }} />
              </div>
              <p className="mt-3 text-xs text-white/55">{doneCount} of {allTaskIds.length} practice sets completed</p>
            </aside>
          </div>
        </section>

        <section className="border-b border-black/10 bg-white/45">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-y divide-black/10 border-x border-black/10 lg:grid-cols-4 lg:divide-y-0">
            {subjects.map((subject) => {
              const ids = subject.units.flatMap((unit, unitIndex) => unit.practice.map((_, i) => taskId(subject.id, unitIndex, i)));
              const done = ids.filter((id) => completed[id]).length;
              return (
                <button
                  key={subject.id}
                  onClick={() => {
                    setSubjectFilter(subject.id);
                    document.querySelector("#plan")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group p-5 text-left transition hover:bg-white sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-bold tracking-[0.12em] text-[var(--muted)]">{subject.short}</span>
                    <span className="text-[11px] font-semibold text-[var(--muted)]">{subject.weeklyHours}/wk</span>
                  </div>
                  <p className="mt-5 font-serif text-xl leading-tight sm:text-2xl">{subject.name.replace("AP ", "")}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-black/10">
                      <div className="h-full" style={{ width: `${(done / ids.length) * 100}%`, backgroundColor: subject.color }} />
                    </div>
                    <span className="text-[11px] font-bold">{done}/{ids.length}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">The year at a glance</p>
              <h2 className="section-title">Five phases, <span>steady momentum.</span></h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">School classes set the daily pace. This roadmap gives you a review spine—move a unit by a week or two when your teacher’s sequence differs.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 lg:grid-cols-5">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => {
                  setCurrentOnly(false);
                  setPhaseFilter(phase.id);
                  document.querySelector("#plan")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`min-h-64 bg-[var(--paper)] p-6 text-left transition hover:bg-white ${phase.id === position.phase ? "shadow-[inset_0_4px_var(--orange)]" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-black/25">{phase.number}</span>
                  {phase.id === position.phase && <span className="rounded-full bg-[var(--orange)] px-2 py-1 text-[9px] font-bold tracking-wider text-white">NOW</span>}
                </div>
                <h3 className="mt-8 font-serif text-2xl">{phase.title}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--orange)]">{phase.dates}</p>
                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{phase.note}</p>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-black/40">{phase.weeks}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="border-y border-black/10 bg-[var(--ink)] text-white">
          <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-20">
            <div className="mb-10 grid gap-5 lg:grid-cols-2">
              <div>
                <p className="eyebrow !text-[var(--orange)]">A repeatable week</p>
                <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">About 12 focused hours.<br /><span className="italic text-white/55">Not every waking hour.</span></h2>
              </div>
              <p className="max-w-lg self-end text-sm leading-6 text-white/55">Keep weeknights compact and protect sleep. When school gets intense, complete Monday–Friday’s shortest blocks and one Saturday session—the plan is designed to bend.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-7">
              {weeklyRhythm.map((item, index) => (
                <article key={item.day} className={`min-h-48 p-5 ${index > 4 ? "bg-[#263b37]" : "bg-[var(--ink)]"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[.16em] text-white/45">{item.day}</span>
                    <Clock3 className="size-3.5 text-white/35" />
                  </div>
                  <h3 className="mt-8 font-serif text-xl">{item.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-[var(--orange)]">{item.time}</p>
                  <p className="mt-4 text-xs leading-5 text-white/50">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="plan" className="scroll-mt-4 mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="mb-8">
            <p className="eyebrow">Your study library</p>
            <h2 className="section-title">Learn it. <span>Practice it.</span> Check it off.</h2>
          </div>

          <div className="sticky top-3 z-20 mb-8 flex flex-wrap items-center gap-2 rounded-2xl border border-black/10 bg-[var(--paper)]/90 p-2.5 shadow-lg shadow-black/5 backdrop-blur-xl">
            <button
              onClick={() => setCurrentOnly(!currentOnly)}
              className={`filter-button ${currentOnly ? "filter-active" : ""}`}
            >
              <Target className="size-4" />
              Current phase
            </button>
            <label className="relative">
              <span className="sr-only">Filter by subject</span>
              <select value={subjectFilter} onChange={(event) => setSubjectFilter(event.target.value as SubjectId | "all")} className="filter-select">
                <option value="all">All subjects</option>
                {subjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.name}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2" />
            </label>
            <label className="relative">
              <span className="sr-only">Filter by phase</span>
              <select
                value={phaseFilter}
                disabled={currentOnly}
                onChange={(event) => setPhaseFilter(event.target.value as PhaseId | "all")}
                className="filter-select disabled:opacity-40"
              >
                <option value="all">All phases</option>
                {phases.map((phase) => <option key={phase.id} value={phase.id}>{phase.title}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2" />
            </label>
            {(subjectFilter !== "all" || phaseFilter !== "all" || currentOnly) && (
              <button onClick={() => { setSubjectFilter("all"); setPhaseFilter("all"); setCurrentOnly(false); }} className="ml-auto px-3 text-xs font-bold text-[var(--muted)] hover:text-[var(--ink)]">
                Clear filters
              </button>
            )}
          </div>

          {visibleSubjects.length ? (
            <div className="space-y-12">
              {visibleSubjects.map((subject) => {
                const subjectIds = subject.units.flatMap((unit) => unit.practice.map((_, i) => taskId(subject.id, unit.unitIndex, i)));
                const subjectDone = subjectIds.filter((id) => completed[id]).length;
                return (
                  <div key={subject.id}>
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-xl text-xs font-black" style={{ backgroundColor: subject.soft, color: subject.color }}>{subject.short}</span>
                        <div>
                          <h3 className="font-serif text-2xl">{subject.name}</h3>
                          <p className="text-xs text-[var(--muted)]">{subject.units.length} units shown · {subject.weeklyHours} weekly</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold">{subjectDone}/{subjectIds.length} done</span>
                    </div>
                    <div className="grid gap-3 lg:grid-cols-2">
                      {subject.units.map((unit) => {
                        const ids = unit.practice.map((_, index) => taskId(subject.id, unit.unitIndex, index));
                        const unitDone = ids.filter((id) => completed[id]).length;
                        return (
                          <details key={`${subject.id}-${unit.unitIndex}`} className="unit-card group" open={currentOnly}>
                            <summary className="flex cursor-pointer list-none items-start gap-4 p-5 sm:p-6">
                              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border text-[10px] font-bold" style={{ borderColor: `${subject.color}55`, color: subject.color }}>
                                {String(unit.unitIndex + 1).padStart(2, "0")}
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-start justify-between gap-3">
                                  <h4 className="font-serif text-xl leading-tight">{unit.title}</h4>
                                  <span className="whitespace-nowrap text-[10px] font-bold text-[var(--muted)]">{unitDone}/{ids.length}</span>
                                </div>
                                <div className="mt-3 h-1 overflow-hidden rounded-full bg-black/8">
                                  <div className="h-full transition-all" style={{ width: `${(unitDone / ids.length) * 100}%`, backgroundColor: subject.color }} />
                                </div>
                              </div>
                              <ChevronDown className="mt-1 size-4 shrink-0 text-black/35 transition group-open:rotate-180" />
                            </summary>
                            <div className="grid gap-6 border-t border-black/8 px-5 py-6 sm:grid-cols-2 sm:px-6">
                              <div>
                                <p className="micro-title"><BookOpen className="size-3.5" /> Topics to learn</p>
                                <ul className="mt-3 space-y-2">
                                  {unit.topics.map((topic) => <li key={topic} className="flex gap-2 text-sm leading-5 text-[var(--muted)]"><span className="mt-2 size-1 shrink-0 rounded-full bg-black/30" />{topic}</li>)}
                                </ul>
                              </div>
                              <div>
                                <p className="micro-title"><Target className="size-3.5" /> Practice set</p>
                                <div className="mt-3 space-y-2">
                                  {unit.practice.map((practice, practiceIndex) => {
                                    const id = taskId(subject.id, unit.unitIndex, practiceIndex);
                                    return (
                                      <label key={id} className={`task-row ${completed[id] ? "task-done" : ""}`}>
                                        <input type="checkbox" className="sr-only" checked={Boolean(completed[id])} onChange={() => toggle(id)} />
                                        <span className="check-box" style={completed[id] ? { backgroundColor: subject.color, borderColor: subject.color } : {}}>
                                          {completed[id] && <Check className="size-3 text-white" strokeWidth={3} />}
                                        </span>
                                        <span>{practice}</span>
                                      </label>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </details>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-black/20 px-6 py-16 text-center">
              <CircleAlert className="mx-auto size-6 text-[var(--muted)]" />
              <h3 className="mt-3 font-serif text-xl">No units in this view</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Choose another phase or clear your filters.</p>
            </div>
          )}
        </section>

        <section className="border-t border-black/10 bg-white/45">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-20">
            <div>
              <p className="eyebrow">Final five weeks</p>
              <h2 className="section-title">Practice like<br /><span>it’s exam day.</span></h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted)]">Rotate these four tasks across subjects. Simulate only one full exam per weekend; review it more slowly than you took it.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {reviewTasks.map((task, index) => (
                <div key={task} className="rounded-2xl border border-black/10 bg-[var(--paper)] p-5">
                  <span className="font-serif text-3xl text-[var(--orange)]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-5 text-sm font-semibold leading-6">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-amber-900/10 bg-[#f8e8cc]">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center lg:px-10">
            <CircleAlert className="size-5 shrink-0 text-amber-900/60" />
            <p className="text-sm leading-6 text-amber-950/70"><strong className="text-amber-950">Date note:</strong> This roadmap targets the typical early-to-mid May AP window. College Board has not necessarily finalized the 2027 subject-by-subject exam calendar; confirm exact dates at collegeboard.org and with your school when published.</p>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--ink)] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center lg:px-10">
          <p className="font-serif text-xl">AP Compass <span className="italic text-white/45">— progress over panic.</span></p>
          <button
            onClick={() => {
              if (window.confirm("Reset all checked practice sets?")) setCompleted({});
            }}
            className="flex items-center gap-2 self-start text-xs font-bold text-white/45 transition hover:text-white"
          >
            <RotateCcw className="size-3.5" /> Reset progress
          </button>
        </div>
      </footer>
    </div>
  );
}
