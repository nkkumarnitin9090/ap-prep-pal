import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { accent } from "@/lib/accents";
import { formatMediumDate } from "@/lib/dates";
import { cn } from "@/lib/utils";
import type { Course } from "@/data/types";

export interface CountdownEntry {
  course: Pick<Course, "slug" | "shortName" | "name" | "accent" | "examSession" | "examDate">;
  daysLeft: number;
}

export function ExamCountdown({ entries }: { entries: CountdownEntry[] }) {
  const upcoming = entries.filter((entry) => entry.daysLeft >= 0);
  const nearest = upcoming[0];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Exam countdown</CardTitle>
        <p className="text-sm text-muted-foreground">
          {nearest
            ? `${nearest.course.shortName} is first, ${nearest.daysLeft} days out.`
            : "All four exams are behind you."}
        </p>
      </CardHeader>
      <CardContent>
        <ol className="space-y-2.5">
          {entries.map((entry) => {
            const styles = accent(entry.course.accent);
            const past = entry.daysLeft < 0;
            return (
              <li
                key={entry.course.slug}
                className="flex items-center justify-between gap-3 border-b pb-2.5 last:border-0 last:pb-0"
              >
                <div className="min-w-0">
                  <Link
                    href={`/courses/${entry.course.slug}`}
                    className={cn(
                      "flex items-center gap-1.5 rounded-sm text-sm font-medium hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                      past && "text-muted-foreground",
                    )}
                  >
                    <span className={cn("size-1.5 shrink-0 rounded-full", styles.dot)} aria-hidden />
                    <span className="truncate">{entry.course.shortName}</span>
                  </Link>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {formatMediumDate(entry.course.examDate)} &middot; {entry.course.examSession}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p
                    className={cn(
                      "font-heading text-lg leading-none font-semibold tabular-nums",
                      past ? "text-muted-foreground" : styles.text,
                    )}
                  >
                    {past ? "done" : entry.daysLeft}
                  </p>
                  {!past ? (
                    <p className="text-[0.7rem] text-muted-foreground">
                      {entry.daysLeft === 1 ? "day" : "days"}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}
