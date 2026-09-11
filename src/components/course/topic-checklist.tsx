"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/use-progress";
import type { Topic } from "@/data/types";

export function TopicChecklist({ topics }: { topics: Topic[] }) {
  const { hydrated, isComplete, setComplete, setMany, countComplete } = useProgress();

  if (topics.length === 0) {
    return (
      <p className="rounded-lg border border-dashed px-3 py-2 text-sm text-muted-foreground">
        Topics for this unit are being finalized.
      </p>
    );
  }

  const ids = topics.map((topic) => topic.id);
  const done = hydrated ? countComplete(ids) : 0;
  const allDone = hydrated && done === ids.length;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <h5 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Topics
        </h5>
        {hydrated ? (
          <Button
            size="xs"
            variant="ghost"
            className="text-muted-foreground"
            onClick={() => setMany(ids, !allDone)}
          >
            {allDone ? "Clear unit" : "Mark unit complete"}
          </Button>
        ) : (
          <Skeleton className="h-6 w-28" />
        )}
      </div>
      <ul className="space-y-1">
        {topics.map((topic) => {
          const checked = hydrated && isComplete(topic.id);
          return (
            <li key={topic.id}>
              <label
                htmlFor={topic.id}
                className={cn(
                  "flex cursor-pointer items-start gap-2.5 rounded-lg px-2.5 py-2 transition-colors hover:bg-muted/60 has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50",
                  checked && "bg-muted/40",
                )}
              >
                <Checkbox
                  id={topic.id}
                  checked={checked}
                  onCheckedChange={(value) => setComplete(topic.id, value === true)}
                  className="mt-0.5"
                />
                <span className="space-y-0.5">
                  <span
                    className={cn(
                      "block text-sm font-medium",
                      checked && "text-muted-foreground line-through",
                    )}
                  >
                    {topic.title}
                  </span>
                  <span className="block text-xs text-pretty text-muted-foreground">
                    {topic.detail}
                  </span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
