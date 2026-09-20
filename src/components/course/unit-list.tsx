"use client";

import * as React from "react";
import { ChevronDown, CircleAlert, Clock3, KeyRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Skeleton } from "@/components/ui/skeleton";
import { CedNote } from "@/components/ced-note";
import { WeightBar } from "@/components/weight-bar";
import { TopicChecklist } from "@/components/course/topic-checklist";
import { UnitBigPicture } from "@/components/course/unit-big-picture";
import { PracticeSet } from "@/components/practice/practice-set";
import { accent } from "@/lib/accents";
import { practiceSetAnchor, unitAnchor, unitTopicIds } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useHash } from "@/hooks/use-hash";
import { useProgress } from "@/hooks/use-progress";
import type { CourseAccent, Unit } from "@/data/types";

export function UnitList({
  units,
  accentToken,
}: {
  units: Unit[];
  accentToken: CourseAccent;
}) {
  // Deep links from the dashboard and the schedule point at a unit or at a
  // practice set inside a collapsed unit, so the linked unit opens itself.
  const hash = useHash();
  const hashUnit = units.find(
    (unit) =>
      unitAnchor(unit.id) === hash || practiceSetAnchor(unit.practiceSet.id) === hash,
  );
  const hashPracticeId =
    hashUnit && practiceSetAnchor(hashUnit.practiceSet.id) === hash
      ? hashUnit.practiceSet.id
      : null;

  // Null means "not touched yet", so the deep link stays in charge until the
  // student opens or closes something themselves.
  const [manual, setManual] = React.useState<Record<string, boolean>>({});
  const isOpen = (unitId: string) => manual[unitId] ?? unitId === hashUnit?.id;

  React.useEffect(() => {
    if (!hash) return;
    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [hash]);

  const allOpen = units.length > 0 && units.every((unit) => isOpen(unit.id));

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <Button
          size="xs"
          variant="ghost"
          className="text-muted-foreground"
          onClick={() =>
            setManual(
              Object.fromEntries(units.map((unit) => [unit.id, !allOpen])),
            )
          }
        >
          {allOpen ? "Collapse all units" : "Expand all units"}
        </Button>
      </div>

      <ul className="space-y-3">
        {units.map((unit) => (
          <UnitItem
            key={unit.id}
            unit={unit}
            accentToken={accentToken}
            open={isOpen(unit.id)}
            onOpenChange={(next) =>
              setManual((current) => ({ ...current, [unit.id]: next }))
            }
            practiceOpen={hashPracticeId === unit.practiceSet.id}
          />
        ))}
      </ul>
    </div>
  );
}

function UnitItem({
  unit,
  accentToken,
  open,
  onOpenChange,
  practiceOpen,
}: {
  unit: Unit;
  accentToken: CourseAccent;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  practiceOpen: boolean;
}) {
  const styles = accent(accentToken);
  const { hydrated, countComplete } = useProgress();
  const topicIds = unitTopicIds(unit);
  const done = hydrated ? countComplete(topicIds) : 0;
  const complete = hydrated && topicIds.length > 0 && done === topicIds.length;

  return (
    <li id={unitAnchor(unit.id)} className="scroll-mt-20">
      <Collapsible
        open={open}
        onOpenChange={onOpenChange}
        className={cn(
          "overflow-hidden rounded-xl border bg-card",
          complete && styles.border,
        )}
      >
        <CollapsibleTrigger className="group flex w-full items-start gap-3 p-4 text-left outline-none hover:bg-muted/40 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-inset">
          <span
            className={cn(
              "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
              styles.chip,
            )}
            aria-hidden
          >
            {unit.number}
          </span>
          <span className="min-w-0 flex-1 space-y-1">
            <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-heading text-sm font-semibold">
                <span className="sr-only">Unit {unit.number}: </span>
                {unit.title}
              </span>
              {complete ? (
                <Badge className={cn("font-normal", styles.chip)}>Complete</Badge>
              ) : null}
              {unit.cedNote ? (
                <Badge variant="outline" className="font-normal text-muted-foreground">
                  CED note
                </Badge>
              ) : null}
            </span>
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <WeightBar
                midpoint={unit.examWeightMidpoint}
                label={unit.examWeight}
                accentToken={accentToken}
              />
              {unit.classPeriods ? (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock3 className="size-3" aria-hidden />
                  {unit.classPeriods}
                </span>
              ) : null}
              {hydrated ? (
                <span className="text-xs text-muted-foreground tabular-nums">
                  {done}/{topicIds.length} topics
                </span>
              ) : (
                <Skeleton className="h-4 w-16" />
              )}
            </span>
          </span>
          <ChevronDown
            className={cn(
              "mt-1 size-4 shrink-0 text-muted-foreground transition-transform",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="space-y-4 border-t p-4">
            <p className="max-w-3xl text-sm text-pretty text-muted-foreground">
              {unit.summary}
            </p>

            {unit.bigPicture ? (
              <UnitBigPicture picture={unit.bigPicture} accentToken={accentToken} />
            ) : null}

            {unit.cedNote ? <CedNote note={unit.cedNote} /> : null}

            <TopicChecklist topics={unit.topics} />

            <div className="grid gap-4 md:grid-cols-2">
              {unit.keySkills.length > 0 ? (
                <div className="space-y-2">
                  <h5 className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    <KeyRound className="size-3.5" aria-hidden />
                    Know cold
                  </h5>
                  <ul className="space-y-1.5">
                    {unit.keySkills.map((skill) => (
                      <li key={skill} className="flex gap-2 text-sm">
                        <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", styles.dot)} aria-hidden />
                        <span className="text-pretty">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {unit.commonMistakes.length > 0 ? (
                <div className="space-y-2">
                  <h5 className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    <CircleAlert className="size-3.5" aria-hidden />
                    Where points get lost
                  </h5>
                  <ul className="space-y-1.5">
                    {unit.commonMistakes.map((mistake) => (
                      <li key={mistake} className="flex gap-2 text-sm">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-destructive/60" aria-hidden />
                        <span className="text-pretty">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <PracticeSet
              set={unit.practiceSet}
              accentToken={accentToken}
              defaultOpen={practiceOpen}
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
}
