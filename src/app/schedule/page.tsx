import type { Metadata } from "next";
import Link from "next/link";
import { CalendarRange, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState, PageHeader, PageShell, SectionHeading } from "@/components/page-shell";
import { WeekRow } from "@/components/schedule/week-row";
import { WeeklyRhythm } from "@/components/schedule/weekly-rhythm";
import { phaseStyles } from "@/lib/content";
import { cn } from "@/lib/utils";
import { getCurrentWeekIndex, phaseLabels, scheduleWeeks, weeklyPlan } from "@/data/schedule";
import type { SchedulePhase, ScheduleWeek } from "@/data/types";

/** The current-week highlight depends on today's date. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "The full 2026-27 study calendar: week-by-week goals and assignments for all four AP courses, plus the Monday-to-Sunday block plan.",
};

interface PhaseGroup {
  phase: SchedulePhase;
  weeks: ScheduleWeek[];
}

function groupByPhase(weeks: ScheduleWeek[]): PhaseGroup[] {
  const groups: PhaseGroup[] = [];
  for (const week of weeks) {
    const last = groups[groups.length - 1];
    if (last && last.phase === week.phase) last.weeks.push(week);
    else groups.push({ phase: week.phase, weeks: [week] });
  }
  return groups;
}

export default function SchedulePage() {
  const currentIndex = getCurrentWeekIndex(new Date());
  const currentWeek = currentIndex >= 0 ? scheduleWeeks[currentIndex] : undefined;
  const groups = groupByPhase(scheduleWeeks);

  return (
    <PageShell className="space-y-8">
      <PageHeader
        eyebrow="2026-27 school year"
        title="The year, week by week"
        description="Each week names one goal, one unit per course, and the practice that proves you learned it. Below the year plan is the weekly rhythm: the actual blocks of time this schedule assumes you have."
        actions={
          currentWeek ? (
            <Button asChild size="sm">
              <Link href={`#week-${currentWeek.week}`}>
                <CalendarRange className="size-3.5" aria-hidden />
                Jump to this week
              </Link>
            </Button>
          ) : undefined
        }
      />

      <div className="flex flex-wrap items-center gap-2">
        <Button asChild size="xs" variant="outline">
          <Link href="#year-plan">Year plan</Link>
        </Button>
        <Button asChild size="xs" variant="outline">
          <Link href="#weekly-rhythm">
            <Clock className="size-3" aria-hidden />
            Weekly rhythm
          </Link>
        </Button>
        {groups.map((group) => (
          <Button asChild key={group.phase} size="xs" variant="ghost">
            <Link href={`#phase-${group.phase}`}>
              <span className={cn("rounded-full px-1.5", phaseStyles[group.phase])}>
                {phaseLabels[group.phase]}
              </span>
              <span className="text-muted-foreground">{group.weeks.length}</span>
            </Link>
          </Button>
        ))}
      </div>

      <section className="space-y-4">
        <SectionHeading
          id="year-plan"
          title="Year plan"
          description={
            scheduleWeeks.length > 0
              ? `${scheduleWeeks.length} planned weeks from September to the May 2027 exams.`
              : "The week-by-week plan is being written."
          }
        />

        {scheduleWeeks.length === 0 ? (
          <EmptyState
            icon={<CalendarRange className="size-5" aria-hidden />}
            title="The year plan is being finalized"
            description="Weekly goals, per-course assignments, and practice links will appear here as soon as the calendar is written."
          />
        ) : (
          <div className="space-y-6">
            {groups.map((group) => (
              <div key={group.phase} id={`phase-${group.phase}`} className="scroll-mt-20 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-heading text-base font-semibold">
                    {phaseLabels[group.phase]}
                  </h3>
                  <Badge className={cn("font-normal", phaseStyles[group.phase])}>
                    {group.weeks.length} {group.weeks.length === 1 ? "week" : "weeks"}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {group.weeks.length === 1
                      ? group.weeks[0].dateRange
                      : `${group.weeks[0].dateRange} to ${group.weeks[group.weeks.length - 1].dateRange}`}
                  </span>
                </div>
                <ul className="space-y-3">
                  {group.weeks.map((week) => {
                    const index = scheduleWeeks.indexOf(week);
                    return (
                      <WeekRow
                        key={week.week}
                        week={week}
                        isCurrent={index === currentIndex}
                        isPast={currentIndex >= 0 && index < currentIndex}
                      />
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <SectionHeading
          id="weekly-rhythm"
          title="Weekly rhythm"
          description="The repeating Monday-to-Sunday shape of a study week. Shift blocks around your own practices and shifts, but keep the totals."
        />
        <WeeklyRhythm days={weeklyPlan} />
      </section>
    </PageShell>
  );
}
