'use client';

import React, { useState } from 'react';
import ScheduleView from '@/components/ScheduleView';
import SubjectsTopicView from '@/components/SubjectsTopicView';
import PracticeQuizView from '@/components/PracticeQuizView';
import FRQPracticeView from '@/components/FRQPracticeView';
import PlannerResourcesView from '@/components/PlannerResourcesView';
import { 
  Calendar, 
  BookOpen, 
  CheckSquare, 
  FileText, 
  Sparkles, 
  GraduationCap, 
  Layers, 
  Target, 
  Flame,
  Award
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'schedule' | 'topics' | 'mcq' | 'frq' | 'resources'>('schedule');

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Subtitle */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-extrabold text-base sm:text-lg tracking-tight">
                    AP Senior Mastery Suite
                  </h1>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 hidden sm:inline-block">
                    4-Subject Engine
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:block">
                  AP Physics 2 • AP Statistics • AP Literature • AP Calculus BC
                </p>
              </div>
            </div>

            {/* Quick Senior Stat Badge */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Senior Spring AP Prep Mode</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto py-2 -mb-px scrollbar-none border-t border-zinc-100 dark:border-zinc-900 sm:border-0 sm:py-0">
            {[
              { id: 'schedule', label: 'Weekly Study Schedule', icon: Calendar },
              { id: 'topics', label: 'Topics & Units Breakdown', icon: BookOpen },
              { id: 'mcq', label: 'Interactive Practice Sets (MCQ)', icon: CheckSquare },
              { id: 'frq', label: 'FRQ Rubrics & Drills', icon: FileText },
              { id: 'resources', label: 'Exam Strategies & Calculator Guides', icon: Target },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                      : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'schedule' && <ScheduleView />}
        {activeTab === 'topics' && <SubjectsTopicView />}
        {activeTab === 'mcq' && <PracticeQuizView />}
        {activeTab === 'frq' && <FRQPracticeView />}
        {activeTab === 'resources' && <PlannerResourcesView />}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            AP® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this study tool.
          </p>
          <p className="font-medium text-zinc-700 dark:text-zinc-300">
            Tailored for High School Senior Year (Physics 2, Stats, Lit & Calc BC)
          </p>
        </div>
      </footer>
    </div>
  );
}
