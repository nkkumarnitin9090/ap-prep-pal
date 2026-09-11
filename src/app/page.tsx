import Link from "next/link";
import { CalendarDays, ListChecks } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader, PageShell, SectionHeading } from "@/components/page-shell";
import { CourseCard } from "@/components/dashboard/course-card";
import { ExamCountdown, type CountdownEntry } from "@/components/dashboard/exam-countdown";
import { OverallProgress } from "@/components/dashboard/overall-progress";
import { WeekFocus } from "@/components/dashboard/week-focus";
import { summarizeCourse } from "@/lib/summaries";
import { daysUntil, formatLongDate } from "@/lib/dates";
import { courses, totalTopicCount } from "@/data/courses";
import { getCurrentWeekIndex, scheduleWeeks, weeklyPlan } from "@/data/schedule";

/** The dashboard is date-driven, so it is rendered per request rather than at build time. */
export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const today = new Date();
  const summaries = courses.map(summarizeCourse);

  const countdowns: CountdownEntry[] = courses
    .map((course) => ({
      course: {
        slug: course.slug,
        name: course.name,
        shortName: course.shortName,
        accent: course.accent,
        examDate: course.examDate,
        examSession: course.examSession,
      },
      daysLeft: daysUntil(course.examDate, today),
    }))
    .sort((a, b) => a.daysLeft - b.daysLeft);

  const daysBySlug = new Map(countdowns.map((entry) => [entry.course.slug, entry.daysLeft]));

  const weekIndex = getCurrentWeekIndex(today);
  const allExamsPast = countdowns.every((entry) => entry.daysLeft < 0);
  const currentWeek =
    weekIndex >= 0 && !allExamsPast ? (scheduleWeeks[weekIndex] ?? null) : null;
  const firstWeek = scheduleWeeks[0] ?? null;

  let weekStatus: string;
  if (allExamsPast) {
    weekStatus = "Every exam date has passed. Keep the checklists as a record of what you covered.";
  } else if (weekIndex < 0) {
    weekStatus = firstWeek
      ? `The plan starts the week of ${firstWeek.dateRange}, in ${daysUntil(firstWeek.startDate, today)} days.`
      : "The week-by-week schedule is being finalized.";
  } else {
    weekStatus = currentWeek
      ? `Today is ${formatLongDate(today.toISOString().slice(0, 10))}.`
      : "The week-by-week schedule is being finalized.";
  }

  const weeklyMinutes = weeklyPlan.reduce((sum, day) => sum + day.totalMinutes, 0);

  return (
    <PageShell className="space-y-8">
      <PageHeader
        eyebrow="2026-27 senior year"
        title="Four AP exams, one plan"
        description="AP Calculus BC, AP Statistics, AP Physics 2, and AP English Literature and Composition, all pointed at the May 2027 exams. Check topics off as you learn them, work the practice set at the end of every unit, and let the weekly plan decide what you touch each night."
        actions={
          <>
            <Button asChild size="sm" variant="outline">
              <Link href="/schedule">
                <CalendarDays className="size-3.5" aria-hidden />
                Full schedule
              </Link>
            </Button>
          </>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeekFocus week={currentWeek} weekCount={scheduleWeeks.length} status={weekStatus} />
        </div>
        <div className="grid gap-4">
          <OverallProgress summaries={summaries} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading
            title="Your courses"
            description={`${courses.length} courses, ${totalTopicCount()} checkable topics, and a practice set at the end of every unit.`}
          />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {summaries.map((summary) => (
              <CourseCard
                key={summary.slug}
                summary={summary}
                daysLeft={daysBySlug.get(summary.slug) ?? 0}
              />
            ))}
          </div>
        </div>

        <div className="grid content-start gap-4">
          <ExamCountdown entries={countdowns} />

          <Card>
            <CardHeader>
              <CardTitle>Weekly rhythm</CardTitle>
              <p className="text-sm text-muted-foreground">
                {weeklyPlan.length > 0
                  ? `${weeklyPlan.length} planned days, about ${Math.round(weeklyMinutes / 60)} hours of study a week.`
                  : "The Monday-to-Sunday block plan is being finalized."}
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {weeklyPlan.length > 0 ? (
                <ul className="space-y-1.5 text-sm">
                  {weeklyPlan.map((day) => (
                    <li key={day.day} className="flex items-center justify-between gap-3">
                      <span className="text-muted-foreground">{day.day}</span>
                      <span className="tabular-nums">
                        {day.totalMinutes === 0 ? "rest" : `${day.totalMinutes} min`}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <Button asChild size="sm" variant="outline">
                <Link href="/schedule#weekly-rhythm">
                  <ListChecks className="size-3.5" aria-hidden />
                  See the day-by-day blocks
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
