import { BookOpen, Lightbulb, PenLine, Timer } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WeightBar } from "@/components/weight-bar";
import { accent } from "@/lib/accents";
import { calculatorLabels } from "@/lib/content";
import { cn } from "@/lib/utils";
import type {
  BigIdea,
  CourseAccent,
  ExamSection,
  FrqType,
  SkillCategory,
} from "@/data/types";

export function ExamSections({
  sections,
  accentToken,
}: {
  sections: ExamSection[];
  accentToken: CourseAccent;
}) {
  const styles = accent(accentToken);
  if (sections.length === 0) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {sections.map((section) => (
        <div key={section.name} className={cn("rounded-xl border p-4", styles.border)}>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-sm font-semibold">{section.name}</h3>
            <Badge className={cn("shrink-0 font-normal", styles.chip)}>{section.weight}</Badge>
          </div>
          <p className="mt-1.5 text-sm text-pretty text-muted-foreground">{section.detail}</p>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Timer className="size-3.5" aria-hidden />
              {section.time}
            </span>
            <span>{calculatorLabels[section.calculator]}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export function BigIdeas({
  bigIdeas,
  accentToken,
}: {
  bigIdeas: BigIdea[];
  accentToken: CourseAccent;
}) {
  const styles = accent(accentToken);

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {bigIdeas.map((idea) => (
        <li key={idea.id} className={cn("rounded-xl border p-4", styles.border, styles.surface)}>
          <div className="flex items-center gap-2">
            {idea.abbreviation ? (
              <Badge className={cn("font-mono text-[0.7rem] font-normal", styles.chip)}>
                {idea.abbreviation}
              </Badge>
            ) : null}
            <h3 className={cn("font-heading text-sm font-semibold", styles.text)}>{idea.title}</h3>
          </div>
          <p className="mt-1.5 text-sm text-pretty text-muted-foreground">{idea.description}</p>
        </li>
      ))}
    </ul>
  );
}

export function SkillCategories({
  skillCategories,
  accentToken,
}: {
  skillCategories: SkillCategory[];
  accentToken: CourseAccent;
}) {
  return (
    <ul className="space-y-3">
      {skillCategories.map((skill) => (
        <li key={skill.id} className="rounded-xl border p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="font-heading text-sm font-semibold">
              <span className="mr-2 text-muted-foreground">Skill {skill.number}</span>
              {skill.title}
            </h3>
            <WeightBar
              midpoint={skill.examWeightMidpoint}
              label={skill.examWeight}
              accentToken={accentToken}
              className="shrink-0"
            />
          </div>
          <p className="mt-1.5 text-sm text-pretty text-muted-foreground">{skill.description}</p>
        </li>
      ))}
    </ul>
  );
}

export function FrqTypes({
  frqTypes,
  accentToken,
}: {
  frqTypes: FrqType[];
  accentToken: CourseAccent;
}) {
  const styles = accent(accentToken);

  return (
    <div className="space-y-4">
      {frqTypes.map((frq) => (
        <Card key={frq.id}>
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center gap-2">
              <span className={cn("flex size-6 items-center justify-center rounded-lg text-xs font-semibold", styles.chip)}>
                {frq.number}
              </span>
              {frq.title}
              <Badge variant="outline" className="gap-1 font-normal text-muted-foreground">
                <Timer className="size-3" aria-hidden />
                {frq.suggestedMinutes} min suggested
              </Badge>
            </CardTitle>
            <p className="text-sm text-pretty text-muted-foreground">{frq.description}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {frq.rubric.length > 0 ? (
              <div className="space-y-2">
                <h4 className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  <PenLine className="size-3.5" aria-hidden />
                  Scoring rubric
                </h4>
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-24">Points</TableHead>
                        <TableHead className="min-w-40">Criterion</TableHead>
                        <TableHead className="min-w-60">What readers look for</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {frq.rubric.map((row) => (
                        <TableRow key={`${frq.id}-${row.points}-${row.criterion}`}>
                          <TableCell className="align-top font-medium whitespace-normal">
                            {row.points}
                          </TableCell>
                          <TableCell className="align-top whitespace-normal">
                            {row.criterion}
                          </TableCell>
                          <TableCell className="align-top whitespace-normal text-muted-foreground">
                            {row.guidance}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ) : null}

            {frq.sampleTheses.length > 0 ? (
              <div className="space-y-2">
                <h4 className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  <Lightbulb className="size-3.5" aria-hidden />
                  Sample theses
                </h4>
                <ul className="space-y-2">
                  {frq.sampleTheses.map((sample) => (
                    <li
                      key={`${frq.id}-${sample.context}`}
                      className={cn("rounded-lg border p-3", styles.border, styles.surface)}
                    >
                      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        {sample.context}
                      </p>
                      <p className="mt-1 text-sm text-pretty italic">&ldquo;{sample.thesis}&rdquo;</p>
                      <p className="mt-1.5 text-xs text-pretty text-muted-foreground">
                        {sample.why}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function CourseResources({
  resources,
}: {
  resources: { label: string; detail: string }[];
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {resources.map((resource) => (
        <li key={resource.label} className="rounded-xl border p-4">
          <h3 className="flex items-start gap-2 font-heading text-sm font-semibold">
            <BookOpen className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
            <span className="text-pretty">{resource.label}</span>
          </h3>
          <p className="mt-1.5 text-sm text-pretty text-muted-foreground">{resource.detail}</p>
        </li>
      ))}
    </ul>
  );
}
