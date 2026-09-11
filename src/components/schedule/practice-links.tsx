import Link from "next/link";
import { ArrowUpRight, Dumbbell } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { accent } from "@/lib/accents";
import { cn } from "@/lib/utils";
import type { ResolvedPractice } from "@/lib/schedule-links";
import { coursesBySlug } from "@/data/courses";

/**
 * Practice labels in the schedule are full sentences, so they wrap in a list
 * rather than sitting on one line of pill buttons.
 */
export function PracticeLinks({
  practice,
  heading = "Practice this week",
  className,
}: {
  practice: ResolvedPractice[];
  heading?: string;
  className?: string;
}) {
  if (practice.length === 0) return null;

  return (
    <div className={cn("space-y-2", className)}>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        <Dumbbell className="size-3.5" aria-hidden />
        {heading}
      </p>
      <ul className="space-y-1.5">
        {practice.map((item) => {
          const styles = accent(coursesBySlug[item.courseSlug]?.accent ?? "indigo");
          const body = (
            <>
              <Badge className={cn("mt-0.5 shrink-0 font-normal", styles.chip)}>
                {item.courseShortName}
              </Badge>
              <span className="min-w-0 flex-1 text-pretty">{item.label}</span>
              {item.unitLabel ? (
                <span className="mt-0.5 shrink-0 text-xs whitespace-nowrap text-muted-foreground">
                  {item.unitLabel}
                </span>
              ) : null}
            </>
          );

          return (
            <li key={item.key}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex flex-wrap items-start gap-2 rounded-lg border px-2.5 py-2 text-sm outline-none hover:bg-muted/60 focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {body}
                  <ArrowUpRight
                    className="mt-0.5 size-3.5 shrink-0 text-muted-foreground"
                    aria-hidden
                  />
                </Link>
              ) : (
                <div className="flex flex-wrap items-start gap-2 rounded-lg border border-dashed px-2.5 py-2 text-sm">
                  {body}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
