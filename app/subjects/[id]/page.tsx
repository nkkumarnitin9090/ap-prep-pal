import { notFound } from "next/navigation";
import Link from "next/link";
import { subjectMap, subjectIds } from "@/lib/data";
import SubjectClient from "./SubjectClient";

export function generateStaticParams() {
  return subjectIds.map((id) => ({ id }));
}

export default async function SubjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const subject = (subjectMap as Record<string, (typeof subjectMap)["physics2"]>)[id];
  if (!subject) notFound();

  const others = Object.values(subjectMap).filter((s) => s.id !== id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link href="/" className="text-sm font-bold text-indigo-600 hover:text-indigo-800">
        ← Dashboard
      </Link>
      <div className="mt-3 rounded-3xl p-6 text-white shadow-lg sm:p-8" style={{ background: `linear-gradient(135deg, ${subject.color}, #1e1b4b)` }}>
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">{subject.exam.format}</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">{subject.name}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-white/85">{subject.tagline}</p>
        <div className="mt-4 grid gap-3 text-[13px] leading-relaxed sm:grid-cols-2">
          <div className="rounded-xl bg-white/10 p-3">
            <strong className="block text-white">Multiple choice</strong>
            <span className="text-white/85">{subject.exam.mcq}</span>
          </div>
          <div className="rounded-xl bg-white/10 p-3">
            <strong className="block text-white">Free response</strong>
            <span className="text-white/85">{subject.exam.frq}</span>
          </div>
        </div>
      </div>

      <SubjectClient subjectId={subject.id} />

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">Exam tips · {subject.short}</h2>
        <ul className="mt-2 space-y-2">
          {subject.tips.map((t) => (
            <li key={t} className="flex gap-2 text-sm leading-relaxed text-slate-700">
              <span className="mt-0.5 font-black" style={{ color: subject.color }}>★</span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="w-full text-xs font-extrabold uppercase tracking-wider text-slate-400">Keep going</span>
        {others.map((o) => (
          <Link
            key={o.id}
            href={`/subjects/${o.id}`}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-700"
          >
            {o.name} →
          </Link>
        ))}
      </div>
    </div>
  );
}
