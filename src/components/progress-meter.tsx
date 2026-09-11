"use client";

import { cn } from "@/lib/utils";
import { accent } from "@/lib/accents";
import { percent } from "@/lib/content";
import { Skeleton } from "@/components/ui/skeleton";
import { useProgress } from "@/hooks/use-progress";
import type { CourseAccent } from "@/data/types";

export function ProgressMeter({
  topicIds,
  accentToken,
  label = "topics",
  className,
  showCount = true,
}: {
  topicIds: string[];
  accentToken?: CourseAccent;
  label?: string;
  className?: string;
  showCount?: boolean;
}) {
  const { hydrated, countComplete } = useProgress();
  const total = topicIds.length;
  const done = hydrated ? countComplete(topicIds) : 0;
  const value = percent(done, total);
  const styles = accentToken ? accent(accentToken) : null;

  return (
    <div className={cn("space-y-1.5", className)}>
      <div
        className={cn(
          "h-1.5 w-full overflow-hidden rounded-full",
          styles ? styles.track : "bg-muted",
        )}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={`${label} complete`}
      >
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-300",
            styles ? styles.fill : "bg-primary",
          )}
          style={{ width: `${value}%` }}
        />
      </div>
      {showCount ? (
        hydrated ? (
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{done}</span> of {total}{" "}
            {label} &middot; {value}%
          </p>
        ) : (
          <Skeleton className="h-4 w-32" />
        )
      ) : null}
    </div>
  );
}
