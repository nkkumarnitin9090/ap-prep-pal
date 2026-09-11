'use client';

import React, { useState } from 'react';
import { FRQ_PRACTICE_SETS, FRQPrompt } from '@/data/frqData';
import { Award, Clock, FileCheck, HelpCircle, ChevronDown, ChevronRight, AlertCircle, BookOpen, CheckCircle, Calculator } from 'lucide-react';

export default function FRQPracticeView() {
  const [selectedFrqId, setSelectedFrqId] = useState<string>(FRQ_PRACTICE_SETS[0].id);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [userDrafts, setUserDrafts] = useState<Record<string, string>>({});

  const activeFrq = FRQ_PRACTICE_SETS.find(f => f.id === selectedFrqId) || FRQ_PRACTICE_SETS[0];

  React.useEffect(() => {
    let interval: any = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const toggleSolution = (key: string) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Subject FRQ Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {FRQ_PRACTICE_SETS.map((frq) => {
          const isSelected = frq.id === selectedFrqId;
          const subjectTag = frq.subjectId === 'calcbc' ? 'Calc BC' : frq.subjectId === 'physics2' ? 'Physics 2' : frq.subjectId === 'stats' ? 'AP Stats' : 'AP Lit';
          
          return (
            <button
              key={frq.id}
              onClick={() => {
                setSelectedFrqId(frq.id);
                setTimerRunning(false);
                setTimerSeconds(0);
              }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 ring-2 ring-indigo-500/20 shadow-md'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  {subjectTag}
                </span>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm mt-2 leading-snug">
                  {frq.title}
                </h4>
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 flex items-center justify-between">
                <span>{frq.suggestedMinutes} mins suggested</span>
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">{frq.subQuestions.length} parts</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main FRQ Workspace */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-6">
        {/* Header & Exam Timer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                Official Free-Response Simulation
              </span>
              <span className="text-xs text-zinc-500">{activeFrq.unit}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-zinc-100">
              {activeFrq.title}
            </h3>
          </div>

          {/* Exam Timer */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 text-white dark:bg-zinc-800 text-sm font-mono font-bold shadow-inner">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{formatTimer(timerSeconds)}</span>
              <span className="text-xs text-zinc-400 font-sans font-normal">/ {activeFrq.suggestedMinutes}:00</span>
            </div>

            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className={`px-3 py-2 text-xs font-bold rounded-xl transition ${
                timerRunning
                  ? 'bg-amber-500 hover:bg-amber-600 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {timerRunning ? 'Pause Timer' : 'Start Timer'}
            </button>
            <button
              onClick={() => { setTimerRunning(false); setTimerSeconds(0); }}
              className="px-2.5 py-2 text-xs rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Prompt Context / Given Information */}
        <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-500" />
              Scenario & College Board Stimulus
            </h4>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
              {activeFrq.calculatorPolicy}
            </span>
          </div>

          <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
            {activeFrq.promptText}
          </p>

          {activeFrq.scenarioDetails && activeFrq.scenarioDetails.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
              {activeFrq.scenarioDetails.map((detail, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/60 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                  • {detail}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sub-Questions Breakdown */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Multi-Part Free-Response Prompts & Rubrics
          </h4>

          {activeFrq.subQuestions.map((subQ, idx) => {
            const solKey = `${activeFrq.id}-${idx}`;
            const isRevealed = !!revealedSolutions[solKey];

            return (
              <div
                key={idx}
                className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 bg-white dark:bg-zinc-900 space-y-4"
              >
                {/* Part Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-black">
                      {subQ.part}
                    </span>
                    <div>
                      <p className="text-sm md:text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                        {subQ.question}
                      </p>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 block">
                        Weight: <strong className="text-zinc-700 dark:text-zinc-300">{subQ.points} Points</strong>
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleSolution(solKey)}
                    className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition flex items-center gap-1.5"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    {isRevealed ? 'Hide Rubric & Model Solution' : 'Reveal Scoring Rubric & Model Solution'}
                  </button>
                </div>

                {/* Student scratchpad textarea */}
                <div>
                  <textarea
                    rows={3}
                    placeholder="Type your reasoning, step-by-step calculus derivation, or thesis outline here to test your recall..."
                    value={userDrafts[solKey] || ''}
                    onChange={(e) => setUserDrafts(prev => ({ ...prev, [solKey]: e.target.value }))}
                    className="w-full text-xs p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-zinc-400"
                  />
                </div>

                {/* Revealed Rubric & Solution */}
                {isRevealed && (
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 space-y-3 text-xs">
                    {/* Rubric guidelines */}
                    <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900 text-indigo-950 dark:text-indigo-200">
                      <strong className="block text-indigo-800 dark:text-indigo-300 font-bold mb-1">
                        Official Point Breakdown ({subQ.points} Pts):
                      </strong>
                      {subQ.scoringGuideline}
                    </div>

                    {/* Model Solution */}
                    <div>
                      <span className="font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                        College Board Exemplar Solution:
                      </span>
                      <pre className="p-3.5 rounded-lg bg-zinc-900 text-zinc-100 font-mono text-xs whitespace-pre-wrap leading-relaxed overflow-x-auto">
                        {subQ.modelSolution}
                      </pre>
                    </div>

                    {/* Common mistakes */}
                    <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 text-rose-950 dark:text-rose-200">
                      <strong className="block text-rose-800 dark:text-rose-300 font-semibold mb-0.5">
                        Common Reader Pitfall / How Students Lose This Point:
                      </strong>
                      {subQ.commonStudentMistakes}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
