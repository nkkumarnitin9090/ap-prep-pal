"use client";

import * as React from "react";
import { Calculator, ClipboardList, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { FreeResponseProblem } from "@/components/practice/free-response-problem";
import { MultipleChoiceProblem } from "@/components/practice/multiple-choice-problem";
import { accent } from "@/lib/accents";
import { calculatorShortLabels, practiceSetAnchor } from "@/lib/content";
import { formatMinutes } from "@/lib/dates";
import { cn } from "@/lib/utils";
import type { CourseAccent, PracticeSet as PracticeSetData } from "@/data/types";

export function PracticeSet({
  set,
  accentToken,
  defaultOpen = false,
}: {
  set: PracticeSetData;
  accentToken: CourseAccent;
  defaultOpen?: boolean;
}) {
  const styles = accent(accentToken);
  // Until the student touches the toggle, a deep link decides whether the set
  // is open; after that their choice wins.
  const [manual, setManual] = React.useState<boolean | null>(null);
  const open = manual ?? defaultOpen;
  const setOpen = (next: boolean) => setManual(next);

  const mcqCount = set.problems.filter((p) => p.kind === "multiple-choice").length;
  const frqCount = set.problems.length - mcqCount;

  return (
    <section
      id={practiceSetAnchor(set.id)}
      className={cn("scroll-mt-20 rounded-xl border", styles.border, styles.surface)}
    >
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5">
            <p className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <ClipboardList className="size-3.5" aria-hidden />
              Practice set
            </p>
            <h4 className={cn("font-heading text-sm font-semibold", styles.text)}>
              {set.title}
            </h4>
            <p className="max-w-2xl text-sm text-pretty text-muted-foreground">{set.focus}</p>
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <Badge variant="outline" className="gap-1 font-normal">
                <Clock className="size-3" aria-hidden />
                {formatMinutes(set.estimatedMinutes)}
              </Badge>
              <Badge variant="outline" className="gap-1 font-normal">
                <Calculator className="size-3" aria-hidden />
                {calculatorShortLabels[set.calculator]}
              </Badge>
              <Badge variant="outline" className="font-normal">
                {mcqCount > 0 ? `${mcqCount} multiple choice` : null}
                {mcqCount > 0 && frqCount > 0 ? " + " : null}
                {frqCount > 0 ? `${frqCount} free response` : null}
                {set.problems.length === 0 ? "No problems yet" : null}
              </Badge>
            </div>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm" className="shrink-0">
              {open ? "Hide problems" : "Start practice"}
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent>
          {set.problems.length > 0 ? (
            <ol className="border-t bg-background/60">
              {set.problems.map((problem, index) =>
                problem.kind === "multiple-choice" ? (
                  <MultipleChoiceProblem key={problem.id} problem={problem} index={index} />
                ) : (
                  <FreeResponseProblem key={problem.id} problem={problem} index={index} />
                ),
              )}
            </ol>
          ) : (
            <p className="border-t bg-background/60 px-4 py-6 text-center text-sm text-muted-foreground">
              Problems for this set are being written.
            </p>
          )}
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
}
