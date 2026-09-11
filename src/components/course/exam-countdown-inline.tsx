"use client";

import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { daysUntil, describeDayGap } from "@/lib/dates";
import { useHydrated } from "@/hooks/use-hydrated";

/**
 * Course pages are prerendered, so the countdown is computed in the browser to
 * stay honest rather than freezing at build time.
 */
export function ExamCountdownInline({ examDate }: { examDate: string }) {
  const hydrated = useHydrated();
  if (!hydrated) return <Skeleton className="h-5 w-24" />;

  const days = daysUntil(examDate);
  return (
    <Badge variant="outline" className="font-normal">
      {days >= 0 ? `${days} days away` : `was ${describeDayGap(days)}`}
    </Badge>
  );
}
