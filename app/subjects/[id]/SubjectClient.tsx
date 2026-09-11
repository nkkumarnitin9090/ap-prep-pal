"use client";

import { subjectMap } from "@/lib/data";
import { useProgress } from "@/lib/progress";
import { UnitCard } from "@/components/study";
import { ProgressBar } from "@/components/ui";

export default function SubjectClient({ subjectId }: { subjectId: keyof typeof subjectMap }) {
  const subject = subjectMap[subjectId];
  const { ready, isDone, toggle } = useProgress();

  const ids = subject.units.flatMap((u) => u.practice.map((q) => `q:${q.id}`));
  const done = ids.filter((id) => isDone(id)).length;
  const pct = Math.round((done / ids.length) * 100);

  if (!ready) {
    return (
      <div className="mt-6 space-y-3" aria-label="Loading progress">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-24 animate-pulse rounded-2xl bg-slate-200/70" />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="mb-4 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex-1">
          <div className="mb-1.5 flex justify-between text-xs font-bold text-slate-500">
            <span>
              {done} of {ids.length} practice questions complete
            </span>
            <span>{pct}%</span>
          </div>
          <ProgressBar pct={pct} color={subject.color} />
        </div>
      </div>
      <div className="space-y-3">
        {subject.units.map((u, i) => (
          <UnitCard
            key={u.id}
            subjectId={subject.id}
            subjectColor={subject.color}
            unit={u}
            index={i}
            isDone={isDone}
            onToggle={toggle}
          />
        ))}
      </div>
    </div>
  );
}
