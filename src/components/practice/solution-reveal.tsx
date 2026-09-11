"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

/**
 * Worked solutions stay closed until the student explicitly asks for them.
 * Solutions are plain text with meaningful line breaks, so they render
 * preformatted in a mono face rather than as flowing prose.
 */
export function SolutionReveal({
  solution,
  label = "worked solution",
}: {
  solution: string;
  label?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="outline" size="sm">
          {open ? (
            <EyeOff className="size-3.5" aria-hidden />
          ) : (
            <Eye className="size-3.5" aria-hidden />
          )}
          {open ? `Hide ${label}` : `Show ${label}`}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <pre className="mt-2 overflow-x-auto rounded-lg bg-muted/60 p-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-foreground/90">
          {solution}
        </pre>
      </CollapsibleContent>
    </Collapsible>
  );
}
