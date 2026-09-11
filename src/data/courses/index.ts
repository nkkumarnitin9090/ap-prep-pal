import type { Course, CourseSlug } from "@/data/types";
import { calculusBC } from "./calculus-bc";
import { statistics } from "./statistics";
import { physics2 } from "./physics-2";
import { englishLiterature } from "./english-literature";

/** Display order used by the dashboard and the course navigation. */
export const courses: Course[] = [
  calculusBC,
  statistics,
  physics2,
  englishLiterature,
];

export const coursesBySlug: Record<CourseSlug, Course> = {
  "ap-calculus-bc": calculusBC,
  "ap-statistics": statistics,
  "ap-physics-2": physics2,
  "ap-english-literature": englishLiterature,
};

export function getCourse(slug: string): Course | undefined {
  return coursesBySlug[slug as CourseSlug];
}

export function totalTopicCount(): number {
  return courses.reduce(
    (sum, course) =>
      sum + course.units.reduce((unitSum, unit) => unitSum + unit.topics.length, 0),
    0,
  );
}

export { calculusBC, statistics, physics2, englishLiterature };
