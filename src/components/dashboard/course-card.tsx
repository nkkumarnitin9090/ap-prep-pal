"use client";

import Link from "next/link";
import { ArrowRight, CalendarClock, Dumbbell } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressMeter } from "@/components/progress-meter";
import { accent } from "@/lib/accents";
import { practiceSetAnchor } from "@/lib/content";
import { describeDayGap, formatMediumDate } from "@/lib/dates";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/use-progress";
import type { CourseSummary } from "@/lib/summaries";

export function CourseCard({
  summary,
  daysLeft,
}: {
  summary: CourseSummary;
  daysLeft: number;
}) {
  const styles = accent(summary.accent);
  const { hydrated, countComplete } = useProgress();

  const nextUnit =
    summary.units.find(
      (unit) => unit.topicIds.length > 0 && countComplete(unit.topicIds) < unit.topicIds.length,
    ) ?? summary.units[0];

  const href = `/courses/${summary.slug}`;

  return (
    <Card className={cn("h-full gap-3 ring-1", styles.ring)}>
      <div className={cn("-mt-(--card-spacing) h-1", styles.fill)} aria-hidden />
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-3">
          <Link
            href={href}
            className={cn(
              "rounded-sm outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50",
              styles.text,
            )}
          >
            {summary.name}
          </Link>
          <Badge className={cn("shrink-0", styles.chip)}>{summary.shortName}</Badge>
        </CardTitle>
        <p className="text-sm text-pretty text-muted-foreground">{summary.tagline}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <ProgressMeter topicIds={summary.topicIds} accentToken={summary.accent} />

        <dl className="grid grid-cols-3 gap-2 text-xs">
          <div className="space-y-0.5">
            <dt className="text-muted-foreground">Units</dt>
            <dd className="font-medium">{summary.unitCount}</dd>
          </div>
          <div className="space-y-0.5">
            <dt className="text-muted-foreground">Topics</dt>
            <dd className="font-medium">{summary.topicIds.length}</dd>
          </div>
          <div className="space-y-0.5">
            <dt className="text-muted-foreground">Problems</dt>
            <dd className="font-medium">{summary.problemCount}</dd>
          </div>
        </dl>

        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarClock className="size-3.5" aria-hidden />
          Exam {formatMediumDate(summary.examDate)}
          <span aria-hidden>&middot;</span>
          <span className="font-medium text-foreground">
            {daysLeft >= 0 ? `${daysLeft} days away` : describeDayGap(daysLeft)}
          </span>
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <Button asChild size="sm" variant="outline">
            <Link href={href}>
              Open course
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </Button>
          {nextUnit ? (
            <Button asChild size="sm" variant="ghost" className="text-muted-foreground">
              <Link href={`${href}#${practiceSetAnchor(nextUnit.practiceSetId)}`}>
                <Dumbbell className="size-3.5" aria-hidden />
                {hydrated ? "Next practice" : "Practice"}: Unit {nextUnit.number}
              </Link>
            </Button>
          ) : null}
        </div>

        {summary.unitCount === 0 ? (
          <p className="rounded-lg border border-dashed px-3 py-2 text-xs text-muted-foreground">
            Unit content for {summary.name} is being finalized. The exam date on this card is already confirmed.
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
