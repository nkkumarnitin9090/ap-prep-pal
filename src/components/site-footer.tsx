import Link from "next/link";

import { courses } from "@/data/courses";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 text-sm sm:flex-row sm:justify-between">
        <div className="max-w-xl space-y-2">
          <p className="font-heading text-sm font-medium">Senior Year AP Plan</p>
          <p className="text-muted-foreground">
            A self-study plan for the 2026-27 school year covering AP Calculus BC, AP
            Statistics, AP Physics 2, and AP English Literature and Composition.
          </p>
          <p className="text-xs text-muted-foreground">
            Unit weightings, exam dates, and exam formats change. Confirm every weighting
            and date against the current official College Board Course and Exam
            Description for your year, and confirm your exam times and location with your
            school&apos;s AP coordinator before you rely on them.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-1.5">
          <Link
            href="/"
            className="rounded-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Dashboard
          </Link>
          <Link
            href="/schedule"
            className="rounded-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Schedule
          </Link>
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="rounded-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {course.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
