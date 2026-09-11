import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { accent } from "@/lib/accents";
import { phaseStyles } from "@/lib/content";
import { resolvePractice } from "@/lib/schedule-links";
import { cn } from "@/lib/utils";
import { coursesBySlug } from "@/data/courses";
import { phaseLabels } from "@/data/schedule";
import type { ScheduleWeek } from "@/data/types";

export function WeekRow({
  week,
  isCurrent,
  isPast,
}: {
  week: ScheduleWeek;
  isCurrent: boolean;
  isPast: boolean;
}) {
  const practice = week.practice.map(resolvePractice);

  return (
    <li
      id={`week-${week.week}`}
      className={cn(
        "scroll-mt-20 rounded-xl border bg-card p-4",
        isCurrent && "border-primary/40 ring-2 ring-primary/20",
        isPast && !isCurrent && "opacity-70",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-heading text-sm font-semibold">Week {week.week}</span>
        <span className="text-sm text-muted-foreground">{week.dateRange}</span>
        <Badge className={cn("font-normal", phaseStyles[week.phase])}>
          {phaseLabels[week.phase]}
        </Badge>
        {isCurrent ? <Badge className="font-normal">This week</Badge> : null}
        {isPast && !isCurrent ? (
          <Badge variant="outline" className="font-normal text-muted-foreground">
            Done
          </Badge>
        ) : null}
      </div>

      <p className="mt-2 text-sm text-pretty">{week.goal}</p>

      {week.assignments.length > 0 ? (
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {week.assignments.map((assignment) => {
            const course = coursesBySlug[assignment.course];
            const styles = accent(course?.accent ?? "indigo");
            return (
              <li
                key={`${week.week}-${assignment.course}`}
                className={cn("rounded-lg border p-2.5", styles.border, styles.surface)}
              >
                <Link
                  href={`/courses/${assignment.course}`}
                  className={cn(
                    "rounded-sm text-xs font-semibold hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                    styles.text,
                  )}
                >
                  {course?.shortName ?? assignment.course}
                </Link>
                <p className="mt-0.5 text-xs font-medium">{assignment.unit}</p>
                <p className="mt-0.5 text-xs text-pretty text-muted-foreground">
                  {assignment.focus}
                </p>
              </li>
            );
          })}
        </ul>
      ) : null}

      {practice.length > 0 ? (
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Practice
          </span>
          {practice.map((item) =>
            item.href ? (
              <Button asChild key={item.key} size="xs" variant="outline">
                <Link href={item.href}>
                  <span className="text-muted-foreground">{item.courseShortName}</span>
                  {item.label}
                </Link>
              </Button>
            ) : (
              <Badge key={item.key} variant="outline" className="font-normal">
                {item.courseShortName}: {item.label}
              </Badge>
            ),
          )}
        </div>
      ) : null}

      {week.note ? (
        <p className="mt-3 border-l-2 pl-3 text-sm text-muted-foreground italic">
          {week.note}
        </p>
      ) : null}
    </li>
  );
}
