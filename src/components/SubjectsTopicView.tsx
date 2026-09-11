'use client';

import React, { useState } from 'react';
import { AP_SUBJECTS, APSubjectData } from '@/data/apData';
import { BookOpen, Award, CheckCircle, ChevronDown, ChevronRight, Calculator, FileText, Lightbulb, AlertTriangle } from 'lucide-react';

export default function SubjectsTopicView() {
  const [activeSubjectId, setActiveSubjectId] = useState<string>('calcbc');
  const [expandedUnits, setExpandedUnits] = useState<Record<number, boolean>>({
    1: true,
    10: true
  });
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentSubject: APSubjectData = AP_SUBJECTS[activeSubjectId] || AP_SUBJECTS.calcbc;

  const toggleUnit = (num: number) => {
    setExpandedUnits(prev => ({
      ...prev,
      [num]: !prev[num]
    }));
  };

  const filteredUnits = currentSubject.units.filter(unit => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = unit.title.toLowerCase().includes(q);
    const matchesTopics = unit.topics.some(t => t.toLowerCase().includes(q));
    const matchesTips = unit.coreTips.some(t => t.toLowerCase().includes(q));
    return matchesTitle || matchesTopics || matchesTips;
  });

  return (
    <div className="space-y-6">
      {/* Subject Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.values(AP_SUBJECTS).map((sub) => {
          const isActive = sub.id === activeSubjectId;
          return (
            <button
              key={sub.id}
              onClick={() => {
                setActiveSubjectId(sub.id);
                setExpandedUnits({ 1: true });
              }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between relative overflow-hidden ${
                isActive
                  ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 ring-2 ring-blue-500/20 shadow-md'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  sub.id === 'calcbc' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' :
                  sub.id === 'physics2' ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300' :
                  sub.id === 'stats' ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300' :
                  'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                }`}>
                  {sub.badge}
                </span>
                {isActive && <span className="w-2 h-2 rounded-full bg-blue-600" />}
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm leading-snug">
                {sub.name}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                {sub.units.length} Official Units
              </p>
            </button>
          );
        })}
      </div>

      {/* Subject Overview & Exam Structure Banner */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{currentSubject.name}</h2>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
                College Board Aligned
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
              {currentSubject.overview}
            </p>
          </div>

          <div className="flex-shrink-0">
            <input
              type="text"
              placeholder="Filter topics or formulas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-3.5 py-2 text-xs rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Exam Breakdown Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
          <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 text-xs">
            <div className="font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-500" /> Section I (Multiple Choice)
            </div>
            <p className="text-zinc-800 dark:text-zinc-200 font-medium">{currentSubject.examStructure.section1}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 text-xs">
            <div className="font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-purple-500" /> Section II (Free Response)
            </div>
            <p className="text-zinc-800 dark:text-zinc-200 font-medium">{currentSubject.examStructure.section2}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 text-xs">
            <div className="font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-emerald-500" /> Exam Duration & Format
            </div>
            <p className="text-zinc-800 dark:text-zinc-200 font-medium">{currentSubject.examStructure.timing}</p>
          </div>
        </div>
      </div>

      {/* Units Accordion List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Course Units & High-Yield Concept Roadmap ({filteredUnits.length} Units)
          </h3>
          <button
            onClick={() => {
              const allOpen = filteredUnits.reduce((acc, u) => ({ ...acc, [u.number]: true }), {});
              setExpandedUnits(allOpen);
            }}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Expand All Units
          </button>
        </div>

        {filteredUnits.map((unit) => {
          const isOpen = !!expandedUnits[unit.number];
          return (
            <div
              key={unit.number}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
            >
              <button
                onClick={() => toggleUnit(unit.number)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-50/70 dark:hover:bg-zinc-800/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
                    U{unit.number}
                  </span>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-base">
                      {unit.title}
                    </h4>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      Exam Weight: <strong className="text-zinc-700 dark:text-zinc-300">{unit.weight}</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-300 hidden sm:inline-block">
                    {unit.topics.length} key sub-topics
                  </span>
                  {isOpen ? (
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-zinc-400" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="p-5 border-t border-zinc-100 dark:border-zinc-800 space-y-4 bg-zinc-50/30 dark:bg-zinc-900/60">
                  {/* Topic checklist */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-500" /> Core Concepts & Tested Sub-Topics
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {unit.topics.map((t, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 text-xs text-zinc-800 dark:text-zinc-200">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Tips & Trap Warnings */}
                  {unit.coreTips.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs">
                      <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 mb-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        Frequent Exam Trap & College Board Grader Insight
                      </div>
                      <ul className="space-y-1 text-amber-950 dark:text-amber-200">
                        {unit.coreTips.map((tip, idx) => (
                          <li key={idx} className="leading-relaxed">
                            • {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Cheat Sheet / Essential Rules */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            {currentSubject.name} — Essential Formula & Rule Cheat Sheet
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentSubject.quickCheatSheet.map((section, idx) => (
            <React.Fragment key={idx}>
              {section.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <div className="font-mono text-xs md:text-sm font-bold bg-white dark:bg-zinc-900 p-2 rounded-lg border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 overflow-x-auto">
                    {item.formulaOrRule}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">Exam Note:</span> {item.note}
                  </p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
