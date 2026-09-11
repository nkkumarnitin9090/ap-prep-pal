import Link from "next/link";
import { ArrowUpRight, CalendarRange, Dumbbell, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/page-shell";
import { accent } from "@/lib/accents";
import { phaseStyles } from "@/lib/content";
import { resolvePractice } from "@/lib/schedule-links";
import { cn } from "@/lib/utils";
import { coursesBySlug } from "@/data/courses";
import { phaseLabels } from "@/data/schedule";
import type { ScheduleWeek } from "@/data/types";

export function WeekFocus({
  week,
  weekCount,
  status,
}: {
  week: ScheduleWeek | null;
  weekCount: number;
  /** Short line describing where today sits relative to the plan. */
  status: string;
}) {
  if (!week) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>This week&apos;s focus</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={<CalendarRange className="size-5" aria-hidden />}
            title="No week is active right now"
            description={status}
          >
            <Button asChild size="sm" variant="outline" className="mt-2">
              <Link href="/schedule">Open the full schedule</Link>
            </Button>
          </EmptyState>
        </CardContent>
      </Card>
    );
  }

  const practice = week.practice.map(resolvePractice);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-wrap items-center gap-2">
          <span>This week&apos;s focus</span>
          <Badge variant="outline" className="font-normal">
            Week {week.week}
            {weekCount > 0 ? ` of ${weekCount}` : ""}
          </Badge>
          <Badge className={cn("font-normal", phaseStyles[week.phase])}>
            {phaseLabels[week.phase]}
          </Badge>
          <Badge variant="ghost" className="font-normal text-muted-foreground">
            {week.dateRange}
          </Badge>
        </CardTitle>
        <p className="text-xs text-muted-foreground">{status}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="flex items-start gap-2 rounded-lg bg-muted/60 px-3 py-2 text-sm">
          <Target className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
          <span>
            <span className="font-medium">Goal: </span>
            {week.goal}
          </span>
        </p>

        {week.assignments.length > 0 ? (
          <ul className="grid gap-3 sm:grid-cols-2">
            {week.assignments.map((assignment) => {
              const course = coursesBySlug[assignment.course];
              const styles = accent(course?.accent ?? "indigo");
              return (
                <li
                  key={`${assignment.course}-${assignment.unit}`}
                  className={cn("rounded-lg border p-3", styles.border, styles.surface)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      href={`/courses/${assignment.course}`}
                      className={cn(
                        "rounded-sm text-sm font-medium hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                        styles.text,
                      )}
                    >
                      {course?.shortName ?? assignment.course}
                    </Link>
                    <ArrowUpRight className="size-3.5 text-muted-foreground" aria-hidden />
                  </div>
                  <p className="mt-1 text-xs font-medium">{assignment.unit}</p>
                  <p className="mt-1 text-xs text-pretty text-muted-foreground">
                    {assignment.focus}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="rounded-lg border border-dashed px-3 py-2 text-sm text-muted-foreground">
            No per-course assignments are listed for this week.
          </p>
        )}

        {practice.length > 0 ? (
          <div className="space-y-2">
            <p className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <Dumbbell className="size-3.5" aria-hidden />
              Practice this week
            </p>
            <ul className="flex flex-wrap gap-2">
              {practice.map((item) => (
                <li key={item.key}>
                  {item.href ? (
                    <Button asChild size="xs" variant="outline">
                      <Link href={item.href}>
                        <span className="text-muted-foreground">{item.courseShortName}</span>
                        {item.label}
                      </Link>
                    </Button>
                  ) : (
                    <Badge variant="outline" className="font-normal">
                      {item.courseShortName}: {item.label}
                    </Badge>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {week.note ? (
          <p className="border-l-2 pl-3 text-sm text-muted-foreground italic">{week.note}</p>
        ) : null}

        <Button asChild size="sm" variant="ghost" className="text-muted-foreground">
          <Link href={`/schedule#week-${week.week}`}>
            See this week in the full plan
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
