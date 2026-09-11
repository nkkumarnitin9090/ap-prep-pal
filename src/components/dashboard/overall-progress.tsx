"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { accent } from "@/lib/accents";
import { percent } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/use-progress";
import type { CourseSummary } from "@/lib/summaries";

export function OverallProgress({ summaries }: { summaries: CourseSummary[] }) {
  const { hydrated, countComplete } = useProgress();

  const allTopicIds = summaries.flatMap((summary) => summary.topicIds);
  const done = hydrated ? countComplete(allTopicIds) : 0;
  const total = allTopicIds.length;
  const value = percent(done, total);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Overall progress</CardTitle>
        <p className="text-sm text-muted-foreground">
          Every checkable topic across all four courses, stored in this browser.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-end gap-3">
          {hydrated ? (
            <span className="font-heading text-4xl leading-none font-semibold tabular-nums">
              {value}%
            </span>
          ) : (
            <Skeleton className="h-9 w-20" />
          )}
          <span className="pb-1 text-sm text-muted-foreground">
            {hydrated ? `${done} of ${total} topics` : `${total} topics total`}
          </span>
        </div>

        <ul className="space-y-2.5">
          {summaries.map((summary) => {
            const styles = accent(summary.accent);
            const courseDone = hydrated ? countComplete(summary.topicIds) : 0;
            const coursePercent = percent(courseDone, summary.topicIds.length);
            return (
              <li key={summary.slug} className="space-y-1">
                <div className="flex items-baseline justify-between gap-2 text-xs">
                  <Link
                    href={`/courses/${summary.slug}`}
                    className="rounded-sm font-medium hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    {summary.shortName}
                  </Link>
                  <span className="text-muted-foreground tabular-nums">
                    {summary.topicIds.length === 0
                      ? "content coming"
                      : `${courseDone}/${summary.topicIds.length}`}
                  </span>
                </div>
                <div className={cn("h-1.5 overflow-hidden rounded-full", styles.track)}>
                  <div
                    className={cn("h-full rounded-full transition-[width] duration-300", styles.fill)}
                    style={{ width: `${coursePercent}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
