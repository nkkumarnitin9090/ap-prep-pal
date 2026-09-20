import { ArrowDown, ArrowRight, Route } from "lucide-react";

import { accent } from "@/lib/accents";
import { cn } from "@/lib/utils";
import type {
  BigPicture,
  BigPictureDiagram,
  BigPictureStep,
  CourseAccent,
} from "@/data/types";

export function UnitBigPicture({
  picture,
  accentToken,
}: {
  picture: BigPicture;
  accentToken: CourseAccent;
}) {
  const styles = accent(accentToken);
  const paragraphs = picture.narrative.split(/\n\n+/).map((part) => part.trim()).filter(Boolean);
  const headingId = `unit-big-picture-${picture.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section
      aria-labelledby={headingId}
      className={cn("space-y-4 rounded-xl border p-4", styles.border, styles.surface)}
    >
      <div className="space-y-1">
        <h5
          id={headingId}
          className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase"
        >
          <Route className={cn("size-3.5", styles.text)} aria-hidden />
          {picture.title}
        </h5>
        <p className="text-xs text-muted-foreground">
          How the topics in this unit actually connect — not a second checklist.
        </p>
      </div>

      <div className="space-y-3">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="max-w-3xl text-sm text-pretty">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="space-y-4">
        {picture.diagrams.map((diagram) => (
          <Diagram key={diagram.title} diagram={diagram} accentToken={accentToken} />
        ))}
      </div>

      {picture.recap ? (
        <div className="rounded-lg border border-dashed bg-card/80 px-3 py-3">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            If you remember one chain
          </p>
          <p className="mt-1.5 text-sm text-pretty">{picture.recap}</p>
        </div>
      ) : null}
    </section>
  );
}

function Diagram({
  diagram,
  accentToken,
}: {
  diagram: BigPictureDiagram;
  accentToken: CourseAccent;
}) {
  const steps = diagram.steps ?? [];
  const layout = diagram.layout ?? (steps.length > 0 ? "flow" : undefined);

  return (
    <figure className="space-y-3 rounded-lg border bg-card p-3">
      <figcaption className="space-y-1">
        <p className="font-heading text-sm font-semibold">{diagram.title}</p>
        <p className="text-xs text-pretty text-muted-foreground">{diagram.caption}</p>
      </figcaption>

      {layout === "flow" && steps.length > 0 ? (
        <FlowSteps steps={steps} accentToken={accentToken} />
      ) : null}

      {layout === "compare" && steps.length > 0 ? (
        <CompareSteps steps={steps} accentToken={accentToken} />
      ) : null}
    </figure>
  );
}

function FlowCard({
  step,
  index,
  accentToken,
}: {
  step: BigPictureStep;
  index: number;
  accentToken: CourseAccent;
}) {
  const styles = accent(accentToken);
  return (
    <div className={cn("min-w-0 flex-1 rounded-lg border bg-background px-3 py-2.5", styles.border)}>
      <p className="text-[0.65rem] font-medium tracking-wide text-muted-foreground uppercase">
        {index + 1}
      </p>
      <p className={cn("font-heading text-sm font-semibold", styles.text)}>{step.label}</p>
      <p className="mt-1 text-xs text-pretty text-muted-foreground">{step.detail}</p>
    </div>
  );
}

function FlowSteps({
  steps,
  accentToken,
}: {
  steps: BigPictureStep[];
  accentToken: CourseAccent;
}) {
  const rows: BigPictureStep[][] = [];
  for (let i = 0; i < steps.length; i += 3) {
    rows.push(steps.slice(i, i + 3));
  }

  return (
    <>
      <ol className="flex flex-col gap-2 lg:hidden">
        {steps.map((step, index) => {
          const last = index === steps.length - 1;
          return (
            <li key={step.label} className="flex flex-col gap-2">
              <FlowCard step={step} index={index} accentToken={accentToken} />
              {last ? null : (
                <div className="flex justify-center text-muted-foreground" aria-hidden>
                  <ArrowDown className="size-4" />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="hidden lg:flex lg:flex-col lg:gap-2">
        {rows.map((row, rowIndex) => (
          <div key={row.map((step) => step.label).join("-")} className="flex flex-col gap-2">
            {rowIndex > 0 ? (
              <div className="flex justify-center text-muted-foreground" aria-hidden>
                <ArrowDown className="size-4" />
              </div>
            ) : null}
            <ol className="flex items-stretch gap-2">
            {row.map((step, indexInRow) => {
              const index = rowIndex * 3 + indexInRow;
              const lastInRow = indexInRow === row.length - 1;
              return (
                <li key={step.label} className="flex min-w-0 flex-1 items-stretch gap-2">
                  <FlowCard step={step} index={index} accentToken={accentToken} />
                  {lastInRow ? null : (
                    <div className="flex items-center text-muted-foreground" aria-hidden>
                      <ArrowRight className="size-4 shrink-0" />
                    </div>
                  )}
                </li>
              );
            })}
            </ol>
          </div>
        ))}
      </div>
    </>
  );
}

function CompareSteps({
  steps,
  accentToken,
}: {
  steps: BigPictureStep[];
  accentToken: CourseAccent;
}) {
  const showComposite = steps.some((step) => step.sketch);

  return (
    <div className="space-y-3">
      {showComposite ? <FourProcessPvPlot accentToken={accentToken} /> : null}
      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <li key={step.label}>
            <ProcessCard step={step} accentToken={accentToken} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessCard({
  step,
  accentToken,
}: {
  step: BigPictureStep;
  accentToken: CourseAccent;
}) {
  const styles = accent(accentToken);

  return (
    <div className="flex h-full flex-col gap-2 rounded-lg border bg-background p-3">
      <div className="flex items-start justify-between gap-2">
        <h6 className={cn("font-heading text-sm font-semibold", styles.text)}>{step.label}</h6>
        {step.sketch ? (
          <MiniPvPath sketch={step.sketch} className="size-14 shrink-0" />
        ) : null}
      </div>
      {step.facts && step.facts.length > 0 ? (
        <dl className="space-y-1 text-xs">
          {step.facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[auto_1fr] gap-x-2">
              <dt className="font-medium text-muted-foreground">{fact.label}</dt>
              <dd className="text-pretty">{fact.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <p className="text-xs text-pretty text-muted-foreground">{step.detail}</p>
    </div>
  );
}

function MiniPvPath({
  sketch,
  className,
}: {
  sketch: NonNullable<BigPictureStep["sketch"]>;
  className?: string;
}) {
  const d = {
    horizontal: "M18 70 H86",
    vertical: "M52 96 V28",
    hyperbola: "M22 36 C40 40, 58 58, 88 92",
    "steep-hyperbola": "M22 28 C36 32, 48 70, 88 96",
  }[sketch];

  return (
    <svg
      viewBox="0 0 104 112"
      className={cn("text-foreground", className)}
      aria-hidden
    >
      <line x1="16" y1="100" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" />
      <line x1="16" y1="100" x2="96" y2="100" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" />
      <text x="8" y="18" className="fill-muted-foreground" fontSize="10">
        P
      </text>
      <text x="88" y="111" className="fill-muted-foreground" fontSize="10">
        V
      </text>
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Combined PV sketch of the four standard processes leaving a shared state. */
function FourProcessPvPlot({ accentToken }: { accentToken: CourseAccent }) {
  const styles = accent(accentToken);
  return (
    <svg
      viewBox="0 0 360 210"
      className="mx-auto h-auto w-full max-w-lg text-foreground"
      role="img"
      aria-label="PV diagram of the four standard processes leaving one shared state: isobaric horizontal, isovolumetric vertical, isothermal hyperbola, and a steeper adiabatic curve."
    >
      <line x1="40" y1="180" x2="40" y2="18" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" />
      <line x1="40" y1="180" x2="340" y2="180" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" />
      <polygon points="40,14 36,24 44,24" className="fill-muted-foreground" />
      <polygon points="344,180 334,176 334,184" className="fill-muted-foreground" />
      <text x="18" y="28" className="fill-muted-foreground" fontSize="12">
        P
      </text>
      <text x="328" y="198" className="fill-muted-foreground" fontSize="12">
        V
      </text>

      {/* Shared starting state */}
      <circle cx="110" cy="78" r="4" className={cn("fill-current", styles.text)} />
      <text x="78" y="70" className="fill-muted-foreground" fontSize="10">
        start
      </text>

      {/* Isovolumetric: vertical */}
      <line x1="110" y1="78" x2="110" y2="28" stroke="currentColor" strokeWidth="2.25" />
      <text x="116" y="38" fontSize="11">
        isovolumetric
      </text>

      {/* Isobaric: horizontal */}
      <line x1="110" y1="78" x2="300" y2="78" stroke="currentColor" strokeWidth="2.25" />
      <text x="196" y="70" fontSize="11">
        isobaric
      </text>

      {/* Isothermal: gentler hyperbola */}
      <path
        d="M110 78 C168 86, 230 128, 300 168"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeDasharray="5 3.5"
      />
      <text x="214" y="148" fontSize="11">
        isothermal
      </text>

      {/* Adiabatic: steeper drop */}
      <path
        d="M110 78 C150 92, 188 142, 248 172"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
      />
      <text x="168" y="176" fontSize="11">
        adiabatic
      </text>
    </svg>
  );
}
