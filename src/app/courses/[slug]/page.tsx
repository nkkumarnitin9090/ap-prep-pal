import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarClock, CalendarDays, Layers } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState, PageHeader, PageShell, SectionHeading } from "@/components/page-shell";
import { CedNote } from "@/components/ced-note";
import { ProgressMeter } from "@/components/progress-meter";
import { ExamCountdownInline } from "@/components/course/exam-countdown-inline";
import { UnitList } from "@/components/course/unit-list";
import {
  BigIdeas,
  CourseResources,
  ExamSections,
  FrqTypes,
  SkillCategories,
} from "@/components/course/course-reference";
import { accent } from "@/lib/accents";
import { courseTopicIds } from "@/lib/content";
import { formatLongDate } from "@/lib/dates";
import { cn } from "@/lib/utils";
import { courses, getCourse } from "@/data/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.name,
    description: course.tagline,
  };
}

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const styles = accent(course.accent);
  const topicIds = courseTopicIds(course);

  return (
    <PageShell className="space-y-8">
      <div className="space-y-4">
        <PageHeader
          eyebrow={
            <span className={styles.text}>
              {course.shortName} &middot; May 2027 exam
            </span>
          }
          title={course.name}
          description={course.tagline}
          actions={
            <Button asChild size="sm" variant="outline">
              <Link href="/schedule">
                <CalendarDays className="size-3.5" aria-hidden />
                Schedule
              </Link>
            </Button>
          }
        />

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Badge className={cn("gap-1 font-normal", styles.chip)}>
            <CalendarClock className="size-3" aria-hidden />
            {formatLongDate(course.examDate)}
          </Badge>
          <ExamCountdownInline examDate={course.examDate} />
          <Badge variant="outline" className="font-normal text-muted-foreground">
            {course.examSession}
          </Badge>
          <Badge variant="outline" className="gap-1 font-normal text-muted-foreground">
            <Layers className="size-3" aria-hidden />
            {course.units.length} units &middot; {topicIds.length} topics
          </Badge>
        </div>

        <p className="max-w-3xl text-sm text-pretty text-muted-foreground">
          {course.description}
        </p>

        {topicIds.length > 0 ? (
          <div className="max-w-md">
            <ProgressMeter topicIds={topicIds} accentToken={course.accent} />
          </div>
        ) : null}
      </div>

      {course.courseNotes && course.courseNotes.length > 0 ? (
        <section className="space-y-2">
          <SectionHeading
            title="Before you study"
            description="Course-level changes that affect how you should prepare this year."
          />
          <div className="space-y-2">
            {course.courseNotes.map((note) => (
              <CedNote key={note.text} note={note} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-3">
        <SectionHeading
          id="exam-format"
          title="Exam format"
          description="What exam day actually looks like, section by section."
        />
        {course.examSections.length > 0 ? (
          <ExamSections sections={course.examSections} accentToken={course.accent} />
        ) : (
          <EmptyState
            title="Exam format is being confirmed"
            description={`The published section breakdown for ${course.name} is still being checked against the current CED.`}
          />
        )}
      </section>

      <section className="space-y-3">
        <SectionHeading
          id="units"
          title="Units and topics"
          description="Check topics off as you learn them. Every unit ends with a practice set."
        />
        {course.units.length > 0 ? (
          <UnitList units={course.units} accentToken={course.accent} />
        ) : (
          <EmptyState
            icon={<Layers className="size-5" aria-hidden />}
            title={`Unit content for ${course.shortName} is being finalized`}
            description={`The unit breakdown, topic checklists, and practice sets for ${course.name} are still being written. The exam format and dates above are already confirmed.`}
          >
            <Button asChild size="sm" variant="outline" className="mt-2">
              <Link href="/schedule">See what the schedule says to do meanwhile</Link>
            </Button>
          </EmptyState>
        )}
      </section>

      {course.bigIdeas && course.bigIdeas.length > 0 ? (
        <section className="space-y-3">
          <SectionHeading
            id="big-ideas"
            title="Big ideas"
            description="The through-lines the CED uses to connect every unit."
          />
          <BigIdeas bigIdeas={course.bigIdeas} accentToken={course.accent} />
        </section>
      ) : null}

      {course.skillCategories && course.skillCategories.length > 0 ? (
        <section className="space-y-3">
          <SectionHeading
            id="skills"
            title="Skill categories"
            description="Each skill category carries its own share of the multiple-choice section."
          />
          <SkillCategories
            skillCategories={course.skillCategories}
            accentToken={course.accent}
          />
        </section>
      ) : null}

      {course.frqTypes && course.frqTypes.length > 0 ? (
        <section className="space-y-3">
          <SectionHeading
            id="free-response"
            title="Free-response questions"
            description="The rubric rows readers actually score, plus theses that would earn the point."
          />
          <FrqTypes frqTypes={course.frqTypes} accentToken={course.accent} />
        </section>
      ) : null}

      <section className="space-y-3">
        <SectionHeading
          id="resources"
          title="Where to get more practice"
          description="Free and legitimate sources, no paid prep required."
        />
        {course.resources.length > 0 ? (
          <CourseResources resources={course.resources} />
        ) : (
          <EmptyState
            title="Resource list is being finalized"
            description={`Vetted free practice sources for ${course.name} are still being collected.`}
          />
        )}
      </section>
    </PageShell>
  );
}
