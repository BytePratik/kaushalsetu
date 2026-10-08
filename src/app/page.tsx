'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useKaushalSetu } from '../context/KaushalSetuContext';
import { CAREERS_CATALOG } from '../data/careers';
import { JOBS_CATALOG } from '../data/jobs';
import { COURSES_CATALOG } from '../data/courses';
import {
  Compass,
  Sparkles,
  Briefcase,
  Bot,
  FileText,
  Award,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Building2,
  Zap,
  Star,
  BookOpen
} from 'lucide-react';

export default function HomePage() {
  const { t, studentProfile, setTargetCareerId, calculateJobMatchScore, applyForJob } = useKaushalSetu();
  const [selectedCareerId, setSelectedCareerId] = useState(CAREERS_CATALOG[0].id);
  const [appliedJobId, setAppliedJobId] = useState<string | null>(null);

  const activeCareer = CAREERS_CATALOG.find((c) => c.id === selectedCareerId) || CAREERS_CATALOG[0];

  // Calculate missing skills for teaser
  const studentSkillNames = new Set(studentProfile.skills.map((s) => s.name.toLowerCase()));
  const missingSkills = activeCareer.requiredSkills.filter(
    (req) => !studentSkillNames.has(req.name.toLowerCase())
  );
  const matchedSkillsCount = activeCareer.requiredSkills.length - missingSkills.length;
  const gapPercentage = Math.round((missingSkills.length / activeCareer.requiredSkills.length) * 100);

  const handleQuickApply = (jobId: string) => {
    applyForJob(jobId);
    setAppliedJobId(jobId);
    setTimeout(() => setAppliedJobId(null), 3000);
  };

  return (
    <div className="space-y-16 pb-16 bg-[#FAFAF7]">
      {/* MINIMAL CONFIDENT HERO SECTION */}
      <section className="pt-12 pb-16 border-b border-slate-200 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-bold">
              <Compass className="w-3.5 h-3.5 text-[#166534]" />
              <span>{t('heroBadge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
              {t('heroTitle')}
            </h1>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/skill-gap-analysis"
                className="px-6 py-3 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] shadow-sm flex items-center gap-2 transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>{t('btnGetStarted')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/jobs"
                className="px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 flex items-center gap-2 transition-all shadow-sm"
              >
                <Briefcase className="w-4 h-4 text-slate-600" />
                <span>{t('btnExploreJobs')}</span>
              </Link>
              <Link
                href="/ai-assistant"
                className="px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 flex items-center gap-2 transition-all shadow-sm"
              >
                <Bot className="w-4 h-4 text-[#166534]" />
                <span>{t('btnTryAi')}</span>
              </Link>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 max-w-2xl mx-auto">
              <div>
                <div className="text-2xl font-extrabold text-[#166534]">12,500+</div>
                <div className="text-xs text-slate-600 font-medium">{t('statStudents')}</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-800">850+</div>
                <div className="text-xs text-slate-600 font-medium">{t('statJobs')}</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#166534]">94%</div>
                <div className="text-xs text-slate-600 font-medium">{t('statMatch')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SKILL GAP TEASER WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-[#166534] text-xs font-bold uppercase tracking-wider mb-1">
                <BarChart3 className="w-4 h-4" />
                <span>Interactive Skill Analyzer</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1E293B]">{t('moduleGapTitle')}</h2>
              <p className="text-xs text-slate-600 mt-1">{t('moduleGapSub')}</p>
            </div>

            {/* Select Career Selector */}
            <div className="min-w-[260px]">
              <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                {t('selectCareer')}
              </label>
              <select
                value={selectedCareerId}
                onChange={(e) => {
                  setSelectedCareerId(e.target.value);
                  setTargetCareerId(e.target.value);
                }}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-lg px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#166534]"
              >
                {CAREERS_CATALOG.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.avgSalary})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Student Current Verified Skills */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center justify-between">
                <span>Verified Skills ({studentProfile.skills.length})</span>
                <span className="text-[#166534] font-bold text-xs">{matchedSkillsCount} Matched</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {studentProfile.skills.map((s) => (
                  <span
                    key={s.skillId}
                    className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-semibold flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" />
                    {s.name} ({s.level})
                  </span>
                ))}
              </div>
            </div>

            {/* Identified Missing Skills & Priority */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center justify-between">
                <span>Missing Skills for {activeCareer.title}</span>
                <span className="text-amber-800 font-bold text-xs">{missingSkills.length} Needed</span>
              </h3>
              {missingSkills.length === 0 ? (
                <div className="text-xs text-[#166534] font-bold py-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> You possess all required skills for this career!
                </div>
              ) : (
                <div className="space-y-2">
                  {missingSkills.map((req) => (
                    <div
                      key={req.skillId}
                      className="flex items-center justify-between p-2.5 rounded-md bg-white border border-slate-200 text-xs"
                    >
                      <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                        {req.name} ({req.level})
                      </span>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                          req.priority === 'High'
                            ? 'bg-rose-50 text-rose-800 border border-rose-200'
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {req.priority} Priority
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Gap Metric & Action */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Skill Gap Ratio</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-amber-700">{gapPercentage}%</span>
                  <span className="text-xs text-slate-600">Remaining Gap</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-3 overflow-hidden">
                  <div
                    className="bg-[#166534] h-full rounded-full transition-all duration-500"
                    style={{ width: `${100 - gapPercentage}%` }}
                  />
                </div>
              </div>

              <Link
                href="/skill-gap-analysis"
                className="mt-6 w-full py-2.5 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>View Full Roadmap & Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PLATFORM MODULES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-[#1E293B]">Complete Skill & Career Ecosystem</h2>
          <p className="text-xs text-slate-600 mt-2">
            Standardized tools aligned with National Qualification Framework guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Skill Gap Analysis */}
          <Link
            href="/skill-gap-analysis"
            className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-[#166534] transition-all space-y-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-[#166534] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#166534] uppercase tracking-wider mb-1">Module 07 ⭐</div>
              <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#166534] transition-colors">
                Skill Gap Analysis
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Compare your verified skills against target career requirements. Receive priority missing skills and gap metrics.
              </p>
            </div>
            <div className="text-xs font-bold text-[#166534] flex items-center gap-1">
              <span>Run Gap Analysis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 2: Personalized Roadmap */}
          <Link
            href="/roadmap"
            className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-[#166534] transition-all space-y-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-slate-700" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Module 10 ⭐</div>
              <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#166534] transition-colors">
                Personalized Career Roadmap
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Step-by-step career progression milestone track, estimated learning hours, and capstone practice projects.
              </p>
            </div>
            <div className="text-xs font-bold text-[#166534] flex items-center gap-1">
              <span>View Career Pathway</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 3: Job Matching Engine */}
          <Link
            href="/jobs"
            className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-[#166534] transition-all space-y-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-[#166534] flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#166534] uppercase tracking-wider mb-1">Module 13 ⭐</div>
              <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#166534] transition-colors">
                Job & Internship Matching
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Algorithm calculates exact compatibility percentage (e.g. 92% Match) derived from your skill profile.
              </p>
            </div>
            <div className="text-xs font-bold text-[#166534] flex items-center gap-1">
              <span>Explore Matched Jobs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 4: AI Career Assistant */}
          <Link
            href="/ai-assistant"
            className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-[#166534] transition-all space-y-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 text-[#166534] flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#166534]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#166534] uppercase tracking-wider mb-1">Module 15 ⭐</div>
              <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#166534] transition-colors">
                AI Career Assistant
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Ask career questions, receive interview preparation tips, resume review suggestions, and real-time guidance.
              </p>
            </div>
            <div className="text-xs font-bold text-[#166534] flex items-center gap-1">
              <span>Chat with Assistant</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 5: Resume Builder */}
          <Link
            href="/resume-builder"
            className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-[#166534] transition-all space-y-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-[#166534] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Module 14</div>
              <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#166534] transition-colors">
                Professional Resume Builder
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Auto-generate professional resumes formatted with verified skills, projects, and instant PDF download.
              </p>
            </div>
            <div className="text-xs font-bold text-[#166534] flex items-center gap-1">
              <span>Build Resume PDF</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 6: Skill Assessment Quizzes */}
          <Link
            href="/assessments"
            className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-[#166534] transition-all space-y-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Module 06</div>
              <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#166534] transition-colors">
                Timed Skill Assessments
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Take timed multiple choice quizzes to earn verified skill badges and boost your candidate profile.
              </p>
            </div>
            <div className="text-xs font-bold text-[#166534] flex items-center gap-1">
              <span>Start Assessment Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* FEATURED MATCHED JOBS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1E293B] flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#166534]" />
              <span>Recommended Job Opportunities</span>
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Positions matching your verified skills baseline.
            </p>
          </div>
          <Link
            href="/jobs"
            className="text-xs font-bold text-[#166534] hover:underline flex items-center gap-1"
          >
            View All Jobs & Internships <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {JOBS_CATALOG.slice(0, 4).map((job) => {
            const score = calculateJobMatchScore(job.requiredSkills);
            const isApplied = appliedJobId === job.id;
            return (
              <div
                key={job.id}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#166534] font-extrabold text-base border border-slate-200">
                      {job.company.substring(0, 2)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1E293B]">{job.title}</h3>
                      <div className="text-xs text-slate-600 flex items-center gap-2 mt-0.5">
                        <span className="font-medium text-slate-800">{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Match Score Badge */}
                  <div className="text-right">
                    <div className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-bold inline-flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#166534]" />
                      <span>{score}% Match</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {job.requiredSkills.map((sk) => (
                    <span
                      key={sk.name}
                      className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-50 border border-slate-200 text-slate-700"
                    >
                      {sk.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-800">{job.salaryOrStipend}</div>
                  <button
                    onClick={() => handleQuickApply(job.id)}
                    className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                      isApplied
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#166534] text-white hover:bg-[#14532D] shadow-sm'
                    }`}
                  >
                    {isApplied ? 'Applied ✓' : 'Apply Now'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRENDING CERTIFICATION COURSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1E293B] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#166534]" />
              <span>Free Skill Certification Courses</span>
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Structured learning modules to address skill gaps.
            </p>
          </div>
          <Link
            href="/learn"
            className="text-xs font-bold text-[#166534] hover:underline flex items-center gap-1"
          >
            Browse All Courses <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES_CATALOG.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="rounded-xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-semibold text-[10px]">
                    {course.category}
                  </span>
                  <span className="flex items-center gap-1 text-amber-700 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {course.rating}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#1E293B] leading-snug">{course.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-2">{course.description}</p>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600">{course.durationHours} Hours • {course.level}</span>
                <Link
                  href={`/learn/${course.id}`}
                  className="font-bold text-[#166534] hover:underline"
                >
                  Start Course →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
