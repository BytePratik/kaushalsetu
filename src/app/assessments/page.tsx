'use client';

import React from 'react';
import Link from 'next/link';
import { useKaushalSetu } from '../../context/KaushalSetuContext';
import { ASSESSMENTS_CATALOG } from '../../data/assessments';
import { Award, Clock, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AssessmentsPage() {
  const { assessmentResults } = useKaushalSetu();

  const completedMap = new Map(assessmentResults.map((r) => [r.assessmentId, r]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mb-2">
            <Award className="w-3.5 h-3.5 text-amber-800" />
            <span>Module 06 Skill Assessment</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1E293B]">Verified Skill Assessments</h1>
          <p className="text-xs text-slate-600 mt-1">
            Complete timed skill evaluation quizzes to verify your proficiency level and earn profile badges.
          </p>
        </div>

        <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
          <div className="text-xs text-slate-500 font-medium">Badges Earned</div>
          <div className="text-sm font-extrabold text-amber-800">{assessmentResults.length} Verified</div>
        </div>
      </div>

      {/* ASSESSMENTS CATALOG */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ASSESSMENTS_CATALOG.map((asm) => {
          const pastResult = completedMap.get(asm.id);
          return (
            <div
              key={asm.id}
              className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-sm hover:border-slate-300 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 uppercase">
                    {asm.category}
                  </span>
                  {pastResult && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-[#166534] text-[10px] font-bold flex items-center gap-1 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-[#166534]" /> Passed ({pastResult.scorePercentage}%)
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#1E293B]">{asm.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{asm.description}</p>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-700" /> {asm.durationMinutes} Mins
                  </span>
                  <span className="flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-600" /> {asm.totalQuestions} Questions
                  </span>
                </div>
              </div>

              <Link
                href={`/assessments/${asm.id}`}
                className="w-full py-2.5 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <span>{pastResult ? 'Retake Assessment' : 'Start Assessment Quiz'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
