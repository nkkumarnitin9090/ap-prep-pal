"use client";

import * as React from "react";
import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProgress } from "@/hooks/use-progress";

export function ResetProgressDialog({
  className,
}: {
  className?: string;
}) {
  const { totalComplete, hydrated, reset } = useProgress();
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={className}
          disabled={!hydrated || totalComplete === 0}
        >
          <RotateCcw className="size-3.5" aria-hidden />
          Reset progress
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Reset all study progress?</DialogTitle>
          <DialogDescription>
            This clears every checked topic across all four courses
            {hydrated && totalComplete > 0
              ? ` (${totalComplete} checked right now)`
              : ""}
            . Progress is stored only in this browser, so it cannot be recovered
            afterwards.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" size="sm">
              Keep my progress
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => {
              reset();
              setOpen(false);
            }}
          >
            Reset everything
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
