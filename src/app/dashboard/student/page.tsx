'use client';

import React from 'react';
import Link from 'next/link';
import { useKaushalSetu } from '../../../context/KaushalSetuContext';
import { CAREERS_CATALOG } from '../../../data/careers';
import {
  UserCheck,
  Award,
  Briefcase,
  Compass,
  FileText,
  CheckCircle2
} from 'lucide-react';

export default function StudentDashboardPage() {
  const { studentProfile, targetCareer, applications, assessmentResults, t } = useKaushalSetu();
  const activeCareer = targetCareer || CAREERS_CATALOG[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header Banner */}
      <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-[#166534] text-xs font-bold border border-emerald-200">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Student Portal Overview</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1E293B]">Welcome back, {studentProfile.fullName}!</h1>
          <p className="text-xs text-slate-600">
            Target Career: <span className="text-[#166534] font-bold">{activeCareer.title}</span> • {studentProfile.education[0]?.degree}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/skill-gap-analysis"
            className="px-4 py-2.5 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center gap-1.5 shadow-sm"
          >
            <Compass className="w-4 h-4" />
            <span>Check Skill Gap</span>
          </Link>
          <Link
            href="/resume-builder"
            className="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-[#166534]" />
            <span>My Resume</span>
          </Link>
        </div>
      </div>

      {/* QUICK STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Verified Skills</div>
          <div className="text-3xl font-extrabold text-[#166534]">{studentProfile.skills.length}</div>
          <div className="text-[11px] text-slate-500 font-medium">Assessed & Verified</div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Applications</div>
          <div className="text-3xl font-extrabold text-slate-800">{applications.length}</div>
          <div className="text-[11px] text-slate-500 font-medium">Job/Internship Statuses</div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Badges Earned</div>
          <div className="text-3xl font-extrabold text-amber-700">{assessmentResults.length}</div>
          <div className="text-[11px] text-slate-500 font-medium">Quizzes Cleared</div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Target Package</div>
          <div className="text-2xl font-extrabold text-[#166534]">{activeCareer.avgSalary}</div>
          <div className="text-[11px] text-slate-500 font-medium">{activeCareer.demand} Demand</div>
        </div>
      </div>

      {/* MAIN TWO COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Applied Jobs Status Table */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#166534]" />
              <span>Job Application Statuses ({applications.length})</span>
            </h2>
            <Link href="/jobs" className="text-xs font-bold text-[#166534] hover:underline">
              Browse More →
            </Link>
          </div>

          <div className="space-y-3">
            {applications.map((app) => (
              <div key={app.id} className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{app.jobTitle}</span>
                    <div className="text-slate-600">{app.company} • Applied on {app.appliedDate}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-[#166534] text-[10px] font-bold border border-emerald-200">
                    {app.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                  <span>Match Score: <strong className="text-[#166534]">{app.matchScore}%</strong></span>
                  <span>Applicant ID: {app.studentId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Verified Skills & Quizzes History */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#166534]" />
              <span>Verified Skill Profile</span>
            </h2>
            <Link href="/assessments" className="text-xs font-bold text-[#166534] hover:underline">
              Take Quiz →
            </Link>
          </div>

          <div className="space-y-2">
            {studentProfile.skills.map((s) => (
              <div key={s.skillId} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span className="font-bold text-slate-900">{s.name}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#166534] font-semibold text-[10px] border border-emerald-200">
                  {s.level} Verified
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
