'use client';

import React, { useState } from 'react';
import { WEEKLY_SCHEDULE, StudyBlock } from '@/data/apData';
import { Calendar, Clock, CheckCircle2, Circle, AlertCircle, BookOpen, Sparkles, Filter } from 'lucide-react';

export default function ScheduleView() {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [completedDays, setCompletedDays] = useState<Record<string, boolean>>({});
  const [customGoal, setCustomGoal] = useState<string>('');
  const [customGoalsList, setCustomGoalsList] = useState<string[]>([
    'Memorize Maclaurin series for sin(x), cos(x), e^x',
    'Review 4-step hypothesis testing template for AP Stats',
    'Memorize 5 quotes from Frankenstein or Gatsby for AP Lit Q3',
    'Practice 3 Lenz\'s Law induced magnetic flux questions'
  ]);

  const toggleDayCompletion = (day: string) => {
    setCompletedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customGoal.trim()) return;
    setCustomGoalsList(prev => [...prev, customGoal.trim()]);
    setCustomGoal('');
  };

  const activeBlock = WEEKLY_SCHEDULE.find(b => b.day === selectedDay) || WEEKLY_SCHEDULE[0];
  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / WEEKLY_SCHEDULE.length) * 100);

  return (
    <div className="space-y-6">
      {/* Top Banner / Senior Pace Guide */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-indigo-700/40 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3 border border-indigo-400/30">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              US High School Senior 4-AP Master Schedule
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Weekly Balanced Mastery Blueprint
            </h2>
            <p className="text-indigo-200 text-sm mt-1 max-w-2xl">
              Targeted for seniors balancing <span className="text-white font-medium">AP Physics 2</span>, <span className="text-white font-medium">AP Stats</span>, <span className="text-white font-medium">AP Lit</span>, and <span className="text-white font-medium">AP Calc BC</span> alongside college applications and senior activities.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 flex flex-col items-center min-w-[180px]">
            <span className="text-xs uppercase tracking-wider text-indigo-200 font-medium">Weekly Progress</span>
            <span className="text-3xl font-black text-white mt-1">{progressPercent}%</span>
            <div className="w-full bg-white/20 h-2 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-emerald-400 h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs text-indigo-200 mt-1">{completedCount} of 7 days logged</span>
          </div>
        </div>
      </div>

      {/* Weekday Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {WEEKLY_SCHEDULE.map((item) => {
          const isSelected = item.day === selectedDay;
          const isDone = !!completedDays[item.day];

          return (
            <button
              key={item.day}
              onClick={() => setSelectedDay(item.day)}
              className={`flex-shrink-0 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-2.5 border ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              {isDone ? (
                <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-emerald-300' : 'text-emerald-500'}`} />
              ) : (
                <Circle className={`w-4 h-4 ${isSelected ? 'text-blue-200' : 'text-zinc-400'}`} />
              )}
              <span>{item.day}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                isSelected ? 'bg-blue-700 text-blue-100' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}>
                {item.focusSubject.includes('Calc') ? 'Calc BC' : item.focusSubject.includes('Phys') ? 'Phys 2' : item.focusSubject.includes('Stat') ? 'Stats' : item.focusSubject.includes('Lit') ? 'Lit' : 'Review'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Day Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Day Content */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{activeBlock.day} Focus</h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{activeBlock.focusSubject}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  {activeBlock.timeAllocation}
                </div>
                <button
                  onClick={() => toggleDayCompletion(activeBlock.day)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    completedDays[activeBlock.day]
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                      : 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {completedDays[activeBlock.day] ? 'Marked Complete' : 'Mark Day Finished'}
                </button>
              </div>
            </div>

            {/* Target Topics */}
            <div className="mt-5">
              <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-500" />
                Core Topics to Study Today
              </h4>
              <ul className="space-y-2.5">
                {activeBlock.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 text-sm text-zinc-800 dark:text-zinc-200">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Task */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
              <h4 className="text-xs uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1.5 mb-2">
                <AlertCircle className="w-4 h-4" />
                Mandatory Active Practice Task
              </h4>
              <p className="text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                {activeBlock.practiceTask}
              </p>
            </div>

            {/* Recommended Technique */}
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
              <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5 mb-2">
                <Sparkles className="w-4 h-4" />
                Proven High-Score Study Technique
              </h4>
              <p className="text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed">
                {activeBlock.recommendedTechnique}
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar / Quick Goals & Strategy */}
        <div className="space-y-4">
          {/* Senior Survival Rules */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Senior Year 4-AP Survival Tactics
            </h3>
            <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                <strong className="text-zinc-800 dark:text-zinc-200 block mb-0.5">Calc BC & Phys 2 Overlap:</strong>
                Taylor Series and Thermodynamics take heavy conceptual stamina. Do them earlier in the week when your energy is highest.
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                <strong className="text-zinc-800 dark:text-zinc-200 block mb-0.5">AP Lit Writing Cadence:</strong>
                Practice writing 1 full thesis and outline in 15 minutes weekly rather than grinding long 3-hour essays every day.
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                <strong className="text-zinc-800 dark:text-zinc-200 block mb-0.5">AP Stats Wording Precision:</strong>
                Points on Stats FRQs are won or lost on College Board standard phrasing (e.g., "predict", "fail to reject H0").
              </div>
            </div>
          </div>

          {/* Quick Checklists / Objectives */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm mb-3">Custom Senior Goals</h3>
            <form onSubmit={handleAddGoal} className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Add custom milestone..."
                value={customGoal}
                onChange={(e) => setCustomGoal(e.target.value)}
                className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition"
              >
                Add
              </button>
            </form>

            <ul className="space-y-2 text-xs">
              {customGoalsList.map((g, idx) => (
                <li key={idx} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
