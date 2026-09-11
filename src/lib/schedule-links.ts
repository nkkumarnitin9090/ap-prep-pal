import { getCourse } from "@/data/courses";
import { findUnitByPracticeSetId, practiceSetAnchor } from "@/lib/content";
import type { CourseSlug, SchedulePractice } from "@/data/types";

export interface ResolvedPractice {
  key: string;
  label: string;
  courseSlug: CourseSlug;
  courseShortName: string;
  /** Null when the schedule references a set the course data does not define yet. */
  href: string | null;
  unitLabel: string | null;
}

export function resolvePractice(
  entry: SchedulePractice,
  index: number,
): ResolvedPractice {
  const course = getCourse(entry.course);
  const unit =
    course && entry.practiceSetId
      ? findUnitByPracticeSetId(course, entry.practiceSetId)
      : undefined;

  return {
    key: `${entry.course}-${entry.practiceSetId ?? "none"}-${index}`,
    label: entry.label,
    courseSlug: entry.course,
    courseShortName: course?.shortName ?? entry.course,
    href: unit
      ? `/courses/${entry.course}#${practiceSetAnchor(unit.practiceSet.id)}`
      : course
        ? `/courses/${entry.course}`
        : null,
    unitLabel: unit ? `Unit ${unit.number}` : null,
  };
}
