"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, GraduationCap, LayoutDashboard, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { ResetProgressDialog } from "@/components/reset-progress-dialog";
import { accent } from "@/lib/accents";
import { courses } from "@/data/courses";

const primaryLinks = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/schedule", label: "Schedule", icon: CalendarDays },
];

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-2 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md pr-1 font-heading text-sm font-semibold tracking-tight outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <GraduationCap className="size-5 text-primary" aria-hidden />
          <span className="whitespace-nowrap">
            Senior Year <span className="text-muted-foreground">AP Plan</span>
          </span>
        </Link>

        <nav aria-label="Main" className="ml-2 hidden items-center gap-0.5 lg:flex">
          {primaryLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "text-muted-foreground",
                isActive(pathname, link.href) && "bg-muted text-foreground",
              )}
            >
              <Link href={link.href} aria-current={isActive(pathname, link.href) ? "page" : undefined}>
                {link.label}
              </Link>
            </Button>
          ))}
          <Separator orientation="vertical" className="mx-1.5 h-5" />
          {courses.map((course) => {
            const href = `/courses/${course.slug}`;
            const active = isActive(pathname, href);
            return (
              <Button
                key={course.slug}
                asChild
                variant="ghost"
                size="sm"
                className={cn(
                  "text-muted-foreground",
                  active && "bg-muted text-foreground",
                )}
              >
                <Link href={href} aria-current={active ? "page" : undefined}>
                  <span
                    className={cn("size-1.5 rounded-full", accent(course.accent).dot)}
                    aria-hidden
                  />
                  {course.shortName}
                </Link>
              </Button>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <div className="hidden sm:block">
            <ResetProgressDialog />
          </div>
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation menu">
                <Menu className="size-4" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-xs">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-2 pb-4">
                {primaryLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(pathname, link.href) ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50",
                        isActive(pathname, link.href) && "bg-muted",
                      )}
                    >
                      <link.icon className="size-4 text-muted-foreground" aria-hidden />
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <Separator className="my-2" />
                <p className="px-3 pb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Courses
                </p>
                {courses.map((course) => {
                  const href = `/courses/${course.slug}`;
                  const active = isActive(pathname, href);
                  return (
                    <SheetClose asChild key={course.slug}>
                      <Link
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50",
                          active && "bg-muted",
                        )}
                      >
                        <span
                          className={cn("size-2 rounded-full", accent(course.accent).dot)}
                          aria-hidden
                        />
                        {course.name}
                      </Link>
                    </SheetClose>
                  );
                })}
                <Separator className="my-2" />
                <div className="px-3 sm:hidden">
                  <ResetProgressDialog />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
