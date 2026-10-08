'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useKaushalSetu } from '../../context/KaushalSetuContext';
import {
  Briefcase,
  Search,
  MapPin,
  Clock,
  Zap,
  CheckCircle2,
  AlertCircle,
  Building2,
  X,
  ArrowRight
} from 'lucide-react';
import { Job } from '../../types';

export default function JobsPage() {
  const { postedJobs, studentProfile, calculateJobMatchScore, applyForJob, applications, t } = useKaushalSetu();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'job' | 'internship'>('all');
  const [filterWorkMode, setFilterWorkMode] = useState<string>('all');
  const [selectedJobForModal, setSelectedJobForModal] = useState<Job | null>(null);
  const [applySuccessMessage, setApplySuccessMessage] = useState('');

  const studentSkillNames = new Set(studentProfile.skills.map((s) => s.name.toLowerCase()));

  const filteredJobs = postedJobs.filter((j) => {
    const matchesSearch =
      j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      j.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      j.requiredSkills.some((sk) => sk.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesType = filterType === 'all' || j.type === filterType;
    const matchesWorkMode = filterWorkMode === 'all' || j.workMode === filterWorkMode;

    return matchesSearch && matchesType && matchesWorkMode;
  });

  const handleApply = (jobId: string) => {
    const success = applyForJob(jobId);
    if (success) {
      setApplySuccessMessage('Application submitted successfully! Track status in your dashboard.');
    } else {
      setApplySuccessMessage('You have already applied for this position.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-semibold mb-2">
            <Briefcase className="w-3.5 h-3.5 text-[#166534]" />
            <span>Modules 11, 12 & 13 ⭐ Job Matching</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1E293B]">Browse Jobs & Internships</h1>
          <p className="text-xs text-slate-600 mt-1">
            Openings are ranked according to your verified skill set match score.
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-xs text-slate-500 font-medium">Total Openings</div>
            <div className="text-sm font-extrabold text-[#166534]">{postedJobs.length} Active</div>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-xs text-slate-500 font-medium">Your Applications</div>
            <div className="text-sm font-extrabold text-slate-800">{applications.length} Submitted</div>
          </div>
        </div>
      </div>

      {/* SEARCH & FILTERS BAR */}
      <div className="p-4 rounded-xl bg-white border border-slate-200 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 shadow-sm">
        {/* Search Input */}
        <div className="relative sm:col-span-2">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by job title, company, or skill (e.g. React)..."
            className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#166534]"
          />
        </div>

        {/* Filter Job vs Internship */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as any)}
          className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#166534] font-semibold"
        >
          <option value="all">All Opportunity Types</option>
          <option value="job">Full-Time Jobs Only</option>
          <option value="internship">Internships Only</option>
        </select>

        {/* Filter Work Mode */}
        <select
          value={filterWorkMode}
          onChange={(e) => setFilterWorkMode(e.target.value)}
          className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#166534] font-semibold"
        >
          <option value="all">All Work Modes</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </div>

      {/* JOB LISTINGS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.length === 0 ? (
          <div className="col-span-2 p-12 text-center bg-white rounded-xl border border-slate-200 space-y-3 shadow-sm">
            <Search className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No Matching Opportunities Found</h3>
            <p className="text-xs text-slate-500">Try adjusting your search query or filter options.</p>
          </div>
        ) : (
          filteredJobs.map((job) => {
            const score = calculateJobMatchScore(job.requiredSkills);
            const isApplied = applications.some((a) => a.jobId === job.id);

            return (
              <div
                key={job.id}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                          {job.type.toUpperCase()}
                        </span>
                        <span className="text-xs text-slate-500">• {job.postedDate}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1E293B]">{job.title}</h3>
                      <div className="text-xs text-slate-600 flex items-center gap-2 mt-0.5">
                        <span className="text-slate-800 font-semibold">{job.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-500" /> {job.location}</span>
                      </div>
                    </div>

                    {/* Live Match Score Pill */}
                    <div className="text-right shrink-0">
                      <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-bold inline-flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-[#166534]" />
                        <span>{score}% Match</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2">{job.description}</p>

                  {/* Required Skills Breakdown */}
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Required Skills & Verification Status
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {job.requiredSkills.map((sk) => {
                        const isMatched = studentSkillNames.has(sk.name.toLowerCase());
                        return (
                          <span
                            key={sk.name}
                            className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 border ${
                              isMatched
                                ? 'bg-emerald-50 border-emerald-200 text-[#166534]'
                                : 'bg-rose-50 border-rose-200 text-rose-800'
                            }`}
                          >
                            {isMatched ? (
                              <CheckCircle2 className="w-3 h-3 text-[#166534]" />
                            ) : (
                              <AlertCircle className="w-3 h-3 text-rose-700" />
                            )}
                            {sk.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{job.salaryOrStipend}</div>
                    <div className="text-[10px] text-slate-500">Exp: {job.experienceRequired}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedJobForModal(job)}
                      className="px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => handleApply(job.id)}
                      disabled={isApplied}
                      className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                        isApplied
                          ? 'bg-slate-200 text-slate-500 cursor-not-allowed border border-slate-300'
                          : 'bg-[#166534] text-white hover:bg-[#14532D] shadow-sm'
                      }`}
                    >
                      {isApplied ? 'Applied ✓' : 'Apply Now'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* JOB DETAILS MODAL */}
      {selectedJobForModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl max-w-2xl w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                  {selectedJobForModal.type.toUpperCase()}
                </span>
                <h2 className="text-xl font-bold text-[#1E293B] mt-1">{selectedJobForModal.title}</h2>
                <p className="text-xs text-slate-600">{selectedJobForModal.company} • {selectedJobForModal.location}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedJobForModal(null);
                  setApplySuccessMessage('');
                }}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-900 bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div>
                <h3 className="font-bold text-[#1E293B] mb-1">Job Description</h3>
                <p className="leading-relaxed text-slate-600">{selectedJobForModal.description}</p>
              </div>

              <div>
                <h3 className="font-bold text-[#1E293B] mb-1">Responsibilities</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  {selectedJobForModal.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#1E293B] mb-1">Perks & Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJobForModal.perks.map((p, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700">
                      ✓ {p}
                    </span>
                  ))}
                </div>
              </div>

              {applySuccessMessage && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-[#166534] font-bold text-xs text-center">
                  {applySuccessMessage}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-sm font-extrabold text-slate-900">{selectedJobForModal.salaryOrStipend}</span>
              <button
                onClick={() => handleApply(selectedJobForModal.id)}
                className="px-6 py-2.5 rounded-lg bg-[#166534] text-white font-extrabold text-xs hover:bg-[#14532D] shadow-sm"
              >
                Confirm Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
