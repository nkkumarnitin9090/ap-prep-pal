import { cn } from "@/lib/utils";
import { accent } from "@/lib/accents";
import type { CourseAccent } from "@/data/types";

/**
 * Exam weighting bar. Weightings top out around 25%, so the bar is scaled
 * against a 30% ceiling to keep small differences visible.
 */
export function WeightBar({
  midpoint,
  label,
  accentToken,
  className,
  ceiling = 30,
}: {
  midpoint: number;
  label: string;
  accentToken: CourseAccent;
  className?: string;
  ceiling?: number;
}) {
  const styles = accent(accentToken);
  const width = Math.max(2, Math.min(100, (midpoint / ceiling) * 100));

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn("h-1.5 w-20 overflow-hidden rounded-full", styles.track)}
        role="img"
        aria-label={`Exam weighting ${label}`}
      >
        <div className={cn("h-full rounded-full", styles.fill)} style={{ width: `${width}%` }} />
      </div>
      <span className="text-xs whitespace-nowrap text-muted-foreground">{label}</span>
    </div>
  );
}
