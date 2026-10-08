'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, UserCheck, Building2 } from 'lucide-react';

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<'student' | 'employer'>('student');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 bg-[#FAFAF7]">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B]">How KAUSHALSETU Works</h1>
        <p className="text-xs text-slate-600">
          A seamless 4-step workflow connecting learning, assessment, and job placement.
        </p>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 bg-white border border-slate-200 rounded-lg shadow-sm">
          <button
            onClick={() => setActiveTab('student')}
            className={`px-5 py-2 rounded-md text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'student' ? 'bg-[#166534] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-4 h-4" /> For Students & Jobseekers
          </button>
          <button
            onClick={() => setActiveTab('employer')}
            className={`px-5 py-2 rounded-md text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'employer' ? 'bg-[#166534] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" /> For Employers & Recruiters
          </button>
        </div>
      </div>

      {activeTab === 'student' ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#166534] font-extrabold flex items-center justify-center text-sm border border-emerald-200">1</div>
            <h3 className="text-base font-bold text-[#1E293B]">Create Profile & Select Target Career</h3>
            <p className="text-xs text-slate-600">Add your verified skills, degree, and pick your target dream career (e.g. Full Stack Developer).</p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#166534] font-extrabold flex items-center justify-center text-sm border border-emerald-200">2</div>
            <h3 className="text-base font-bold text-[#1E293B]">Run Skill Gap Analysis</h3>
            <p className="text-xs text-slate-600">Get an instant percentage calculation of missing priority skills and a personalized roadmap.</p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#166534] font-extrabold flex items-center justify-center text-sm border border-emerald-200">3</div>
            <h3 className="text-base font-bold text-[#1E293B]">Upskill & Take Assessments</h3>
            <p className="text-xs text-slate-600">Enroll in free courses and complete timed skill quizzes to earn verified skill badges.</p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#166534] font-extrabold flex items-center justify-center text-sm border border-emerald-200">4</div>
            <h3 className="text-base font-bold text-[#1E293B]">Apply with Live Skill Matching</h3>
            <p className="text-xs text-slate-600">Apply to jobs where your match score is high and download your PDF resume instantly.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 font-extrabold flex items-center justify-center text-sm border border-slate-200">1</div>
            <h3 className="text-base font-bold text-[#1E293B]">Post Job & Skill Matrix</h3>
            <p className="text-xs text-slate-600">Define required skills and level expectations for your job opening.</p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 font-extrabold flex items-center justify-center text-sm border border-slate-200">2</div>
            <h3 className="text-base font-bold text-[#1E293B]">View Matched Applicants</h3>
            <p className="text-xs text-slate-600">Applicants are automatically scored and ranked by skill compatibility percentage.</p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 font-extrabold flex items-center justify-center text-sm border border-slate-200">3</div>
            <h3 className="text-base font-bold text-[#1E293B]">Shortlist & Interview Candidates</h3>
            <p className="text-xs text-slate-600">Review candidate resume PDFs and shortlist verified talent for interviews.</p>
          </div>
        </div>
      )}

      <div className="text-center pt-4">
        <Link
          href="/skill-gap-analysis"
          className="px-6 py-3 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] inline-flex items-center gap-2 shadow-sm"
        >
          <span>Get Started Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
