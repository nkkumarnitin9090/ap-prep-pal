import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/page-shell";
import { blockTypeLabels, blockTypeStyles } from "@/lib/content";
import { formatMinutes } from "@/lib/dates";
import { cn } from "@/lib/utils";
import type { DayPlan } from "@/data/types";

export function WeeklyRhythm({ days }: { days: DayPlan[] }) {
  if (days.length === 0) {
    return (
      <EmptyState
        title="The weekly block plan is being finalized"
        description="Monday-to-Sunday study blocks will appear here once the daily plan is written."
      />
    );
  }

  const weeklyMinutes = days.reduce((sum, day) => sum + day.totalMinutes, 0);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {days.map((day) => (
          <section
            key={day.day}
            className="flex flex-col rounded-xl border bg-card"
            aria-labelledby={`day-${day.shortDay}`}
          >
            <header className="flex items-baseline justify-between gap-2 border-b px-4 py-2.5">
              <h3 id={`day-${day.shortDay}`} className="font-heading text-sm font-semibold">
                {day.day}
              </h3>
              <span className="text-xs text-muted-foreground tabular-nums">
                {day.totalMinutes === 0 ? "Rest day" : formatMinutes(day.totalMinutes)}
              </span>
            </header>
            {day.blocks.length > 0 ? (
              <ol className="flex-1 divide-y">
                {day.blocks.map((block) => (
                  <li key={`${day.day}-${block.start}-${block.activity}`} className="space-y-1 px-4 py-2.5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {block.start} - {block.end}
                      </span>
                      <Badge className={cn("font-normal", blockTypeStyles[block.type])}>
                        {blockTypeLabels[block.type]}
                      </Badge>
                      <span className="ml-auto text-xs text-muted-foreground tabular-nums">
                        {block.minutes} min
                      </span>
                    </div>
                    <p className="text-sm font-medium">{block.activity}</p>
                    <p className="text-xs text-pretty text-muted-foreground">{block.detail}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="flex-1 px-4 py-6 text-center text-sm text-muted-foreground">
                Nothing scheduled. Sleep, sport, or catch-up.
              </p>
            )}
          </section>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Planned total:{" "}
        <span className="font-medium text-foreground">{formatMinutes(weeklyMinutes)}</span> across{" "}
        {days.length} {days.length === 1 ? "day" : "days"}.
      </p>
    </div>
  );
}
