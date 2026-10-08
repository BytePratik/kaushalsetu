'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useKaushalSetu } from '../../context/KaushalSetuContext';
import { CAREERS_CATALOG } from '../../data/careers';
import { COURSES_CATALOG } from '../../data/courses';
import {
  Compass,
  CheckCircle2,
  AlertCircle,
  Plus,
  Trash2,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { SkillLevel } from '../../types';

export default function SkillGapAnalysisPage() {
  const {
    studentProfile,
    addStudentSkill,
    removeStudentSkill,
    targetCareerId,
    setTargetCareerId,
    targetCareer,
    t
  } = useKaushalSetu();

  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState<SkillLevel>('Intermediate');

  const activeCareer = targetCareer || CAREERS_CATALOG[0];

  const studentSkillsMap = new Map(studentProfile.skills.map((s) => [s.name.toLowerCase(), s]));

  // Calculate missing skills
  const missingSkills = activeCareer.requiredSkills.filter(
    (req) => !studentSkillsMap.has(req.name.toLowerCase())
  );

  const matchedSkills = activeCareer.requiredSkills.filter((req) =>
    studentSkillsMap.has(req.name.toLowerCase())
  );

  const totalRequired = activeCareer.requiredSkills.length;
  const matchPercentage = totalRequired > 0 ? Math.round((matchedSkills.length / totalRequired) * 100) : 100;
  const gapPercentage = 100 - matchPercentage;

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    addStudentSkill(newSkillName.trim(), newSkillLevel);
    setNewSkillName('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-[#166534]" />
            <span>Module 07 ⭐ Skill Gap Analysis</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1E293B]">Skill Gap Analysis Engine</h1>
          <p className="text-xs text-slate-600 mt-1">
            Compare your verified skills with target career profiles and receive targeted learning recommendations.
          </p>
        </div>

        {/* Target Career Dropdown */}
        <div className="min-w-[280px] bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            {t('selectCareer')}
          </label>
          <select
            value={activeCareer.id}
            onChange={(e) => setTargetCareerId(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-lg px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:border-[#166534]"
          >
            {CAREERS_CATALOG.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title} — {c.avgSalary}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* METRICS & GAP OVERVIEW BAR */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Readiness Card */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Career Readiness</span>
            <Sparkles className="w-5 h-5 text-[#166534]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-[#166534]">{matchPercentage}%</span>
            <span className="text-xs text-slate-600 font-medium">Ready for {activeCareer.title}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div className="bg-[#166534] h-full rounded-full transition-all duration-500" style={{ width: `${matchPercentage}%` }} />
          </div>
        </div>

        {/* Skill Gap Ratio */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Identified Skill Gap</span>
            <AlertCircle className="w-5 h-5 text-amber-700" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-amber-700">{gapPercentage}%</span>
            <span className="text-xs text-slate-600 font-medium">{missingSkills.length} Skills Missing</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div className="bg-amber-600 h-full rounded-full transition-all duration-500" style={{ width: `${gapPercentage}%` }} />
          </div>
        </div>

        {/* Market Demand & Salary benchmark */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-600">Market Demand & Salary</div>
          <div className="text-xl font-bold text-[#1E293B]">{activeCareer.avgSalary}</div>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#166534] font-semibold border border-emerald-200">
              Demand: {activeCareer.demand}
            </span>
            <span className="text-slate-600">{activeCareer.category}</span>
          </div>
        </div>
      </div>

      {/* DETAILED COMPARISON MATRIX */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Student Verified Skills & Quick Add */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#166534]" />
                <span>Your Verified Skills ({studentProfile.skills.length})</span>
              </h2>
              <span className="text-xs text-slate-500">Auto-saved to profile</span>
            </div>

            <div className="space-y-2">
              {studentProfile.skills.map((s) => {
                const isRequired = activeCareer.requiredSkills.some(
                  (req) => req.name.toLowerCase() === s.name.toLowerCase()
                );
                return (
                  <div
                    key={s.skillId}
                    className={`flex items-center justify-between p-3 rounded-lg border text-xs ${
                      isRequired
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-slate-900">{s.name}</span>
                      <span className="ml-2 px-2 py-0.5 text-[10px] rounded bg-white font-semibold text-slate-600 border border-slate-200">
                        {s.level}
                      </span>
                      {isRequired && (
                        <span className="ml-2 text-[10px] text-[#166534] font-bold uppercase">
                          ✓ Required for Career
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => removeStudentSkill(s.name)}
                      className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-slate-100"
                      title="Remove skill"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Form to Add Skill */}
            <form onSubmit={handleAddSkill} className="pt-4 border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={newSkillName}
                onChange={(e) => setNewSkillName(e.target.value)}
                placeholder="Add skill (e.g. Next.js, Python)..."
                className="flex-grow bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#166534]"
              />
              <select
                value={newSkillLevel}
                onChange={(e) => setNewSkillLevel(e.target.value as SkillLevel)}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2 py-2 text-xs text-slate-700"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <button
                type="submit"
                className="px-3 py-2 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center gap-1 shadow-sm"
              >
                <Plus className="w-4 h-4" /> Add
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Identified Missing Skills & Priority */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-700" />
                <span>Priority Missing Skills ({missingSkills.length})</span>
              </h2>
              <span className="text-xs text-amber-800 font-bold">Action Required</span>
            </div>

            {missingSkills.length === 0 ? (
              <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#166534] mx-auto" />
                <h3 className="text-sm font-bold text-emerald-900">Target Career Skill Requirements Met!</h3>
                <p className="text-xs text-slate-600">You hold all required skills for {activeCareer.title}. Apply to matching jobs now!</p>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#166534] text-white font-bold text-xs mt-2"
                >
                  Browse Jobs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {missingSkills.map((req) => {
                  const matchingCourses = COURSES_CATALOG.filter((c) =>
                    c.skillsTaught.some((st) => st.toLowerCase() === req.name.toLowerCase())
                  );

                  return (
                    <div
                      key={req.skillId}
                      className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-slate-900 text-sm">{req.name}</span>
                          <span className="ml-2 text-xs text-slate-500">({req.level} Required)</span>
                        </div>
                        <span
                          className={`px-2.5 py-0.5 text-[10px] font-bold rounded ${
                            req.priority === 'High'
                              ? 'bg-rose-50 text-rose-800 border border-rose-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {req.priority} Priority
                        </span>
                      </div>

                      {matchingCourses.length > 0 && (
                        <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                          <span className="text-slate-600 flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5 text-slate-700" />
                            <span>Course: {matchingCourses[0].title.substring(0, 32)}...</span>
                          </span>
                          <Link
                            href={`/learn/${matchingCourses[0].id}`}
                            className="font-bold text-[#166534] hover:underline shrink-0"
                          >
                            Enroll Free →
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
