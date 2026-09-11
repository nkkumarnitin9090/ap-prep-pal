import type { Course, CourseAccent, CourseSlug } from "@/data/types";
import { courseTopicIds, unitTopicIds } from "@/lib/content";

/**
 * Slim, serialisable views of the course data. Client components take these
 * instead of whole `Course` objects so the RSC payload does not carry every
 * practice problem to the browser twice.
 */

export interface UnitSummary {
  id: string;
  number: string;
  title: string;
  topicIds: string[];
  practiceSetId: string;
  practiceTitle: string;
  problemCount: number;
}

export interface CourseSummary {
  slug: CourseSlug;
  name: string;
  shortName: string;
  accent: CourseAccent;
  tagline: string;
  examDate: string;
  examSession: string;
  topicIds: string[];
  unitCount: number;
  problemCount: number;
  units: UnitSummary[];
}

export function summarizeUnit(course: Course, unitIndex: number): UnitSummary {
  const unit = course.units[unitIndex];
  return {
    id: unit.id,
    number: unit.number,
    title: unit.title,
    topicIds: unitTopicIds(unit),
    practiceSetId: unit.practiceSet.id,
    practiceTitle: unit.practiceSet.title,
    problemCount: unit.practiceSet.problems.length,
  };
}

export function summarizeCourse(course: Course): CourseSummary {
  const units = course.units.map((_, index) => summarizeUnit(course, index));
  return {
    slug: course.slug,
    name: course.name,
    shortName: course.shortName,
    accent: course.accent,
    tagline: course.tagline,
    examDate: course.examDate,
    examSession: course.examSession,
    topicIds: courseTopicIds(course),
    unitCount: course.units.length,
    problemCount: units.reduce((sum, unit) => sum + unit.problemCount, 0),
    units,
  };
}
