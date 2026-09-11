"use client";

import * as React from "react";
import { Lightbulb } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SolutionReveal } from "@/components/practice/solution-reveal";
import { cn } from "@/lib/utils";
import type { FreeResponseProblem as FreeResponseProblemData } from "@/data/types";

export function FreeResponseProblem({
  problem,
  index,
}: {
  problem: FreeResponseProblemData;
  index: number;
}) {
  const rubric = problem.rubric ?? [];
  const [scored, setScored] = React.useState<Record<number, boolean>>({});
  const earned = rubric.reduce((sum, _row, i) => (scored[i] ? sum + 1 : sum), 0);

  return (
    <li className="space-y-3 border-t px-4 py-4 first:border-t-0">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm">
          <span className="mr-2 font-medium text-muted-foreground">{problem.label}</span>
          <span className="text-pretty">{problem.prompt}</span>
        </p>
        <Badge variant="outline" className="shrink-0 font-normal text-muted-foreground">
          {index + 1}
        </Badge>
      </div>

      {problem.stimulus ? (
        <pre className="overflow-x-auto rounded-lg border bg-muted/40 p-3 font-mono text-xs leading-relaxed whitespace-pre-wrap">
          {problem.stimulus}
        </pre>
      ) : null}

      {problem.parts && problem.parts.length > 0 ? (
        <ol className="space-y-2">
          {problem.parts.map((part) => (
            <li key={part.label} className="flex gap-2.5 text-sm">
              <span className="w-6 shrink-0 font-medium text-muted-foreground">
                {part.label}
              </span>
              <span className="text-pretty">{part.text}</span>
            </li>
          ))}
        </ol>
      ) : null}

      {rubric.length > 0 ? (
        <div className="rounded-lg border">
          <div className="flex items-center justify-between gap-3 border-b px-3 py-2">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Self-score against the rubric
            </p>
            <span className="text-xs tabular-nums">
              <span className="font-medium">{earned}</span> / {rubric.length} points
            </span>
          </div>
          <ul>
            {rubric.map((row, rowIndex) => {
              const id = `${problem.id}-rubric-${rowIndex}`;
              const isScored = Boolean(scored[rowIndex]);
              return (
                <li
                  key={id}
                  className={cn(
                    "flex items-start gap-2.5 border-b px-3 py-2 text-sm last:border-0",
                    isScored && "bg-emerald-500/5",
                  )}
                >
                  <Checkbox
                    id={id}
                    checked={isScored}
                    onCheckedChange={(value) =>
                      setScored((current) => ({ ...current, [rowIndex]: value === true }))
                    }
                    className="mt-0.5"
                  />
                  <label htmlFor={id} className="cursor-pointer text-pretty">
                    <span className="mr-1.5 font-medium">{row.points}</span>
                    <span className="text-muted-foreground">{row.criterion}</span>
                  </label>
                </li>
              );
            })}
          </ul>
          {earned > 0 ? (
            <div className="px-3 py-2">
              <Button size="xs" variant="ghost" onClick={() => setScored({})}>
                Clear self-score
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}

      <SolutionReveal solution={problem.solution} label="model response" />

      {problem.note ? (
        <p className="flex items-start gap-2 text-xs text-muted-foreground">
          <Lightbulb className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          <span className="text-pretty">{problem.note}</span>
        </p>
      ) : null}
    </li>
  );
}
