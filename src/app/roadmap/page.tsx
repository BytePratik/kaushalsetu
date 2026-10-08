'use client';

import React from 'react';
import Link from 'next/link';
import { useKaushalSetu } from '../../context/KaushalSetuContext';
import { CAREERS_CATALOG } from '../../data/careers';
import { COURSES_CATALOG } from '../../data/courses';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  BookOpen,
  FolderGit2,
  ArrowRight,
  Compass,
  Award
} from 'lucide-react';

export default function RoadmapPage() {
  const { targetCareer, setTargetCareerId, studentProfile } = useKaushalSetu();
  const activeCareer = targetCareer || CAREERS_CATALOG[0];

  const studentSkillsSet = new Set(studentProfile.skills.map((s) => s.name.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#166534]" />
            <span>Module 10 ⭐ Personalized Roadmap</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1E293B]">Personalized Career Roadmap</h1>
          <p className="text-xs text-slate-600 mt-1">
            Structured step-by-step milestone pathway designed to transition you into a job-ready candidate.
          </p>
        </div>

        {/* Career Switcher */}
        <div className="min-w-[280px] bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm">
          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
            Current Target Career
          </label>
          <select
            value={activeCareer.id}
            onChange={(e) => setTargetCareerId(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-lg px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#166534]"
          >
            {CAREERS_CATALOG.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Target Role Overview Box */}
      <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#166534] uppercase tracking-wider">Target Role Baseline</span>
          <h2 className="text-2xl font-bold text-[#1E293B]">{activeCareer.title}</h2>
          <p className="text-xs text-slate-600 max-w-2xl">{activeCareer.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
            <div className="text-[11px] text-slate-500 font-medium">Avg Package</div>
            <div className="text-sm font-extrabold text-[#166534]">{activeCareer.avgSalary}</div>
          </div>
          <div className="px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
            <div className="text-[11px] text-slate-500 font-medium">Market Demand</div>
            <div className="text-sm font-extrabold text-slate-800">{activeCareer.demand}</div>
          </div>
        </div>
      </div>

      {/* TIMELINE MILESTONE STEPS */}
      <div className="space-y-6">
        {activeCareer.roadmap.map((step) => {
          const stepCompletedCount = step.skillsToLearn.filter((sk) =>
            studentSkillsSet.has(sk.toLowerCase())
          ).length;
          const isFullyCompleted = stepCompletedCount === step.skillsToLearn.length;

          return (
            <div
              key={step.step}
              className={`p-6 sm:p-8 rounded-xl border shadow-sm transition-all ${
                isFullyCompleted
                  ? 'bg-emerald-50/50 border-emerald-300'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#166534] font-extrabold flex items-center justify-center text-sm border border-emerald-200">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-[#1E293B] flex items-center gap-2">
                      <span>{step.title}</span>
                      {isFullyCompleted && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#166534] text-xs font-bold flex items-center gap-1 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" /> Completed
                        </span>
                      )}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed">{step.description}</p>

                  {/* Skills to learn in this step */}
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Skills to Master in Step {step.step}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {step.skillsToLearn.map((sk) => {
                        const hasSkill = studentSkillsSet.has(sk.toLowerCase());
                        return (
                          <span
                            key={sk}
                            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 border ${
                              hasSkill
                                ? 'bg-emerald-100 border-emerald-200 text-[#166534]'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            {hasSkill ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" />
                            ) : (
                              <Award className="w-3.5 h-3.5 text-slate-400" />
                            )}
                            {sk}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Practice Capstone Project */}
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs">
                    <FolderGit2 className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Capstone Hands-On Project:</span>
                      <span className="text-slate-600">{step.practiceProject}</span>
                    </div>
                  </div>
                </div>

                {/* Duration & Recommended Course Link */}
                <div className="shrink-0 space-y-4 md:text-right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>Est. {step.duration}</span>
                  </div>

                  {step.recommendedCourseIds.length > 0 && (
                    <div className="pt-2">
                      <Link
                        href={`/learn/${step.recommendedCourseIds[0]}`}
                        className="px-4 py-2.5 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center justify-center md:justify-end gap-1.5 transition-all shadow-sm"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Enroll Recommended Course</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
