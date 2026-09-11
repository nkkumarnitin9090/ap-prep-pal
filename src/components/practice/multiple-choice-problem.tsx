"use client";

import * as React from "react";
import { Check, Lightbulb, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SolutionReveal } from "@/components/practice/solution-reveal";
import { cn } from "@/lib/utils";
import type { MultipleChoiceProblem as MultipleChoiceProblemData } from "@/data/types";

export function MultipleChoiceProblem({
  problem,
  index,
}: {
  problem: MultipleChoiceProblemData;
  index: number;
}) {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [checked, setChecked] = React.useState(false);
  const groupName = `mcq-${problem.id}`;
  const isCorrect = checked && selected === problem.answer;

  return (
    <li className="space-y-3 border-t px-4 py-4 first:border-t-0">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm">
          <span className="mr-2 font-medium text-muted-foreground">
            {problem.label}
          </span>
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

      <fieldset className="space-y-1.5">
        <legend className="sr-only">Answer choices for {problem.label}</legend>
        {problem.choices.map((choice) => {
          const isThis = selected === choice.label;
          const revealCorrect = checked && choice.label === problem.answer;
          const revealWrong = checked && isThis && choice.label !== problem.answer;
          return (
            <label
              key={choice.label}
              className={cn(
                "flex cursor-pointer items-start gap-2.5 rounded-lg border p-2.5 text-sm transition-colors hover:bg-muted/60 has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50",
                isThis && !checked && "border-primary/40 bg-muted/60",
                revealCorrect &&
                  "border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/10",
                revealWrong && "border-destructive/50 bg-destructive/10 hover:bg-destructive/10",
              )}
            >
              <input
                type="radio"
                name={groupName}
                value={choice.label}
                checked={isThis}
                onChange={() => {
                  setSelected(choice.label);
                  setChecked(false);
                }}
                className="mt-0.5 size-4 shrink-0 accent-primary outline-none"
              />
              <span className="font-medium">{choice.label}.</span>
              <span className="text-pretty">{choice.text}</span>
              {revealCorrect ? (
                <Check className="ml-auto size-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
              ) : null}
              {revealWrong ? (
                <X className="ml-auto size-4 shrink-0 text-destructive" aria-hidden />
              ) : null}
            </label>
          );
        })}
      </fieldset>

      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" disabled={!selected} onClick={() => setChecked(true)}>
          Check answer
        </Button>
        {checked ? (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setChecked(false);
              setSelected(null);
            }}
          >
            Clear
          </Button>
        ) : null}
      </div>

      <div aria-live="polite">
        {checked ? (
          <p
            className={cn(
              "flex items-start gap-2 rounded-lg px-3 py-2 text-sm",
              isCorrect
                ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-200"
                : "bg-destructive/10 text-destructive",
            )}
          >
            {isCorrect ? (
              <Check className="mt-0.5 size-4 shrink-0" aria-hidden />
            ) : (
              <X className="mt-0.5 size-4 shrink-0" aria-hidden />
            )}
            <span>
              {isCorrect
                ? `Correct - ${problem.answer} is the answer.`
                : `Not quite. You chose ${selected}; the answer is ${problem.answer}.`}
            </span>
          </p>
        ) : null}
      </div>

      {checked && problem.note ? (
        <p className="flex items-start gap-2 text-xs text-muted-foreground">
          <Lightbulb className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          <span className="text-pretty">{problem.note}</span>
        </p>
      ) : null}

      <SolutionReveal solution={problem.solution} />
    </li>
  );
}
