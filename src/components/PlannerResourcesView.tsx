'use client';

import React, { useState } from 'react';
import { SENIOR_PLANNER_RESOURCES } from '@/data/resourcesData';
import { BookMarked, Calculator, Clock, Award, ShieldAlert, Sparkles, CheckSquare, ExternalLink, Calendar } from 'lucide-react';

export default function PlannerResourcesView() {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [examDate, setExamDate] = useState<string>('2027-05-03');

  const filtered = SENIOR_PLANNER_RESOURCES.filter(r => {
    if (selectedCat === 'all') return true;
    return r.category.toLowerCase().includes(selectedCat.toLowerCase());
  });

  return (
    <div className="space-y-6">
      {/* High School Senior Strategy Manifesto */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/50 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-bold uppercase tracking-wider">
              Senior Year Mastery Playbook
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              AP Exam Strategy, Calculator Guides & Rubrics
            </h2>
            <p className="text-indigo-200 text-sm leading-relaxed">
              How to simultaneously score 5s on AP Physics 2, AP Stats, AP Lit, and AP Calc BC without academic burnout.
            </p>
          </div>

          {/* Senior High-Leverage Rules */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs space-y-2 min-w-[240px]">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              The "Rule of 15" for Seniors
            </div>
            <p className="text-indigo-200 leading-snug">
              Spend 15 minutes reviewing mistakes on old tests for every 45 minutes of solving new practice problems.
            </p>
          </div>
        </div>
      </div>

      {/* College Board Exam Schedule Card */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-blue-500" />
          Official May Exam Window Roadmap
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { subject: 'AP Literature & Composition', time: 'Morning (8:00 AM)', focus: 'Section 1 (55 MCQs) + Section 2 (3 Essays in 2 hrs)' },
            { subject: 'AP Statistics', time: 'Afternoon (12:00 PM)', focus: '40 MCQs (90m) + 6 FRQs including Question 6 Investigative Task' },
            { subject: 'AP Calculus BC', time: 'Morning (8:00 AM)', focus: '45 MCQs (Part A non-calc, Part B calc) + 6 FRQs' },
            { subject: 'AP Physics 2', time: 'Afternoon (12:00 PM)', focus: '50 MCQs (Multi-select included) + 4 FRQs (QQT & Experimental)' },
          ].map((exam, i) => (
            <div key={i} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                {exam.time}
              </div>
              <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{exam.subject}</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-snug">
                {exam.focus}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Guides & Calculator Hacks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(resource => (
          <div
            key={resource.id}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                  {resource.category}
                </span>
                <span className="text-xs text-zinc-500 font-semibold ml-2">{resource.subject}</span>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-2">
                  {resource.title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {resource.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                Key Actionable Steps
              </span>
              <ul className="space-y-2">
                {resource.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckSquare className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
