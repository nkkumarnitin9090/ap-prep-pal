import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { courses } from "@/data/courses";

export default function NotFound() {
  return (
    <PageShell className="max-w-2xl space-y-4 py-20 text-center">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        404
      </p>
      <h1 className="font-heading text-2xl font-semibold tracking-tight">
        That page is not part of the plan
      </h1>
      <p className="text-sm text-muted-foreground">
        The link may be stale, or the course slug may be misspelled. Everything lives
        under the dashboard, the schedule, and the four course pages.
      </p>
      <div className="flex flex-wrap justify-center gap-2 pt-2">
        <Button asChild size="sm">
          <Link href="/">Dashboard</Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href="/schedule">Schedule</Link>
        </Button>
        {courses.map((course) => (
          <Button asChild key={course.slug} size="sm" variant="ghost">
            <Link href={`/courses/${course.slug}`}>{course.shortName}</Link>
          </Button>
        ))}
      </div>
    </PageShell>
  );
}
