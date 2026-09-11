'use client';

import React, { useState } from 'react';
import { PRACTICE_QUESTIONS, PracticeQuestion } from '@/data/apData';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, ArrowRight, BookOpen, Sparkles, Filter, Award, Timer } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PracticeQuizView() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);

  // Filter questions
  const filteredQuestions = PRACTICE_QUESTIONS.filter(q => {
    if (selectedSubject === 'all') return true;
    return q.subjectId === selectedSubject;
  });

  const currentQ = filteredQuestions[activeQuestionIndex] || filteredQuestions[0];

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (userAnswers[questionId]) return; // already answered
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
    setShowExplanation(prev => ({
      ...prev,
      [questionId]: true
    }));

    if (currentQ && optionId === currentQ.correctAnswerId) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (e) {
        // ignore if not loaded
      }
    }
  };

  const resetAll = () => {
    setUserAnswers({});
    setShowExplanation({});
    setActiveQuestionIndex(0);
    setSeconds(0);
  };

  // Score calculation
  const totalAnswered = Object.keys(userAnswers).length;
  const totalCorrect = filteredQuestions.filter(q => userAnswers[q.id] === q.correctAnswerId).length;
  const scorePercent = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Top Controls & Scoreboard */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                Interactive Practice Engine
              </span>
              <span className="text-xs text-zinc-500">Instant College Board Feedback</span>
            </div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
              Exam-Standard Multiple Choice Drills
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Score: {totalCorrect} / {totalAnswered} ({scorePercent}%)</span>
            </div>

            <button
              onClick={resetAll}
              className="px-3 py-2 text-xs font-semibold rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Drill
            </button>
          </div>
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-2 pt-4 overflow-x-auto">
          <Filter className="w-4 h-4 text-zinc-400 flex-shrink-0 mr-1" />
          {[
            { id: 'all', label: 'All 4 AP Subjects' },
            { id: 'calcbc', label: 'AP Calculus BC' },
            { id: 'physics2', label: 'AP Physics 2' },
            { id: 'stats', label: 'AP Statistics' },
            { id: 'lit', label: 'AP Literature' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedSubject(tab.id);
                setActiveQuestionIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition flex-shrink-0 ${
                selectedSubject === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Question Carousel / Card */}
      {filteredQuestions.length > 0 && currentQ && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-6">
          {/* Question Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                {currentQ.subjectId.toUpperCase()}
              </span>
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                {currentQ.topicId}
              </span>
            </div>

            <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              Question {activeQuestionIndex + 1} of {filteredQuestions.length}
            </div>
          </div>

          {/* Prompt */}
          <div className="space-y-3">
            <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-relaxed">
              {currentQ.prompt}
            </h3>

            {currentQ.codeOrMath && (
              <div className="p-4 rounded-xl bg-zinc-900 text-zinc-100 font-mono text-xs md:text-sm whitespace-pre-wrap border border-zinc-700">
                {currentQ.codeOrMath}
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options?.map((option) => {
              const selectedThis = userAnswers[currentQ.id] === option.id;
              const isCorrect = option.id === currentQ.correctAnswerId;
              const hasAnswered = !!userAnswers[currentQ.id];

              let buttonStyle = 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40 text-zinc-800 dark:text-zinc-200 hover:border-blue-400 hover:bg-blue-50/30';
              if (hasAnswered) {
                if (isCorrect) {
                  buttonStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                } else if (selectedThis && !isCorrect) {
                  buttonStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-semibold';
                } else {
                  buttonStyle = 'opacity-60 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-500';
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(currentQ.id, option.id)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-sm transition-all duration-200 flex items-start gap-3.5 ${buttonStyle}`}
                >
                  <span className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center flex-shrink-0 ${
                    selectedThis
                      ? isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                      : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200'
                  }`}>
                    {option.id}
                  </span>
                  <span className="flex-1 mt-0.5 leading-snug">{option.text}</span>

                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  )}
                  {hasAnswered && selectedThis && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {userAnswers[currentQ.id] && (
            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300">
                  Comprehensive College Board Analysis & Solution
                </h4>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {currentQ.explanation}
              </p>

              {currentQ.strategyTip && (
                <div className="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs text-amber-950 dark:text-amber-200">
                  <strong className="block mb-0.5 text-amber-800 dark:text-amber-300 font-semibold">Senior Exam Speed Tip:</strong>
                  {currentQ.strategyTip}
                </div>
              )}

              {currentQ.formulaOrRule && (
                <div className="mt-2 text-xs font-mono bg-white dark:bg-zinc-900 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">Tested Rule:</span> {currentQ.formulaOrRule}
                </div>
              )}
            </div>
          )}

          {/* Pagination & Next Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <button
              onClick={() => setActiveQuestionIndex(prev => Math.max(0, prev - 1))}
              disabled={activeQuestionIndex === 0}
              className="px-4 py-2 text-xs font-semibold rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-40 transition"
            >
              Previous
            </button>

            <div className="flex items-center gap-1.5">
              {filteredQuestions.map((q, idx) => {
                const isCurrent = idx === activeQuestionIndex;
                const isAnswered = !!userAnswers[q.id];
                const isCorrect = userAnswers[q.id] === q.correctAnswerId;

                let indicatorColor = 'bg-zinc-200 dark:bg-zinc-700';
                if (isAnswered) {
                  indicatorColor = isCorrect ? 'bg-emerald-500' : 'bg-rose-500';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuestionIndex(idx)}
                    className={`w-6 h-6 rounded-full text-[10px] font-bold transition flex items-center justify-center ${
                      isCurrent ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                    } ${indicatorColor} text-white`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setActiveQuestionIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
              disabled={activeQuestionIndex === filteredQuestions.length - 1}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 transition flex items-center gap-1.5"
            >
              Next
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
