import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui";

export const metadata: Metadata = {
  title: "AP Study Hub — Physics 2 · Calc BC · Stats · Lit",
  description:
    "A 16-week AP study plan with College Board-aligned units, practice sets, and progress tracking for AP Physics 2, AP Calculus BC, AP Statistics, and AP English Literature.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>
              <strong className="text-slate-700">AP Study Hub</strong> — built for senior year. Progress saves in
              your browser.
            </p>
            <p>Exam dates shift yearly — confirm at apcentral.collegeboard.org.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
