import { Info, TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import type { CedNote as CedNoteData } from "@/data/types";

export function CedNote({
  note,
  className,
  title,
}: {
  note: CedNoteData;
  className?: string;
  title?: string;
}) {
  const warning = note.tone === "warning";
  const Icon = warning ? TriangleAlert : Info;

  return (
    <Alert
      className={cn(
        warning
          ? "border-amber-500/30 bg-amber-500/5 text-foreground dark:bg-amber-400/10"
          : "border-sky-500/30 bg-sky-500/5 text-foreground dark:bg-sky-400/10",
        className,
      )}
    >
      <Icon
        className={cn(
          "size-4",
          warning
            ? "text-amber-600 dark:text-amber-400"
            : "text-sky-600 dark:text-sky-400",
        )}
        aria-hidden
      />
      <AlertTitle className="text-xs font-medium tracking-wide uppercase">
        {title ?? (warning ? "Course change to know" : "CED note")}
      </AlertTitle>
      <AlertDescription className="text-sm text-foreground/80">
        {note.text}
      </AlertDescription>
    </Alert>
  );
}
