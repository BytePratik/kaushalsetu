'use client';

import React, { useState } from 'react';
import { useKaushalSetu } from '../../../context/KaushalSetuContext';
import { Building2, Plus, Users, X } from 'lucide-react';

export default function EmployerDashboardPage() {
  const { postedJobs, addPostedJob, applications } = useKaushalSetu();

  const [showPostModal, setShowPostModal] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('TechWave Systems');
  const [location, setLocation] = useState('Bengaluru, KA');
  const [workMode, setWorkMode] = useState<'Remote' | 'On-site' | 'Hybrid'>('Hybrid');
  const [salary, setSalary] = useState('₹8.0 - ₹10.0 LPA');
  const [jobType, setJobType] = useState<'job' | 'internship'>('job');
  const [requiredSkill1, setRequiredSkill1] = useState('JavaScript');
  const [requiredSkill2, setRequiredSkill2] = useState('React.js');
  const [description, setDescription] = useState('Looking for an energetic developer...');

  const [applicantStatuses, setApplicantStatuses] = useState<Record<string, string>>({});

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    addPostedJob({
      type: jobType,
      title: jobTitle,
      company: companyName,
      location,
      workMode,
      salaryOrStipend: salary,
      experienceRequired: '0 - 2 Years',
      category: 'Software Engineering',
      deadline: '2026-12-01',
      description,
      requiredSkills: [
        { name: requiredSkill1, level: 'Intermediate' },
        { name: requiredSkill2, level: 'Intermediate' }
      ],
      responsibilities: ['Develop clean code', 'Collaborate with team'],
      perks: ['Flexible Hours', 'PPO']
    });
    setShowPostModal(false);
    setJobTitle('');
  };

  const handleUpdateStatus = (appId: string, status: string) => {
    setApplicantStatuses((prev) => ({ ...prev, [appId]: status }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header */}
      <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
            <Building2 className="w-3.5 h-3.5" />
            <span>Employer Portal • Module 16</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1E293B]">Recruiter Control Center</h1>
          <p className="text-xs text-slate-600">
            Post opportunities and review pre-verified candidates with live skill match scores.
          </p>
        </div>

        <button
          onClick={() => setShowPostModal(true)}
          className="px-5 py-3 rounded-lg bg-[#166534] text-white font-extrabold text-xs hover:bg-[#14532D] flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Job Opportunity</span>
        </button>
      </div>

      {/* STATS OVERVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Job Postings</div>
          <div className="text-3xl font-extrabold text-slate-800">{postedJobs.length}</div>
        </div>
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Received Applications</div>
          <div className="text-3xl font-extrabold text-[#166534]">{applications.length}</div>
        </div>
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Avg Applicant Match</div>
          <div className="text-3xl font-extrabold text-[#166534]">84%</div>
        </div>
      </div>

      {/* CANDIDATE APPLICATIONS REVIEW TABLE */}
      <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2">
          <Users className="w-5 h-5 text-slate-700" />
          <span>Candidate Applications Review ({applications.length})</span>
        </h2>

        <div className="space-y-3">
          {applications.map((app) => {
            const currentStatus = applicantStatuses[app.id] || app.status;
            return (
              <div
                key={app.id}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{app.studentName}</span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-[#166534] font-extrabold text-[10px] border border-emerald-200">
                      ⚡ {app.matchScore}% Match Score
                    </span>
                  </div>
                  <div className="text-slate-600">
                    Applying for: <strong className="text-slate-900">{app.jobTitle}</strong> • {app.studentEmail}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white text-slate-700 font-bold border border-slate-200">
                    Status: {currentStatus}
                  </span>
                  <button
                    onClick={() => handleUpdateStatus(app.id, 'Shortlisted for Interview')}
                    className="px-3 py-1.5 rounded-lg bg-emerald-50 text-[#166534] border border-emerald-200 font-bold hover:bg-[#166534] hover:text-white transition-all"
                  >
                    Shortlist Candidate
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(app.id, 'Application Rejected')}
                    className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-800 border border-rose-200 font-bold hover:bg-rose-700 hover:text-white transition-all"
                  >
                    Reject
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* POST NEW JOB MODAL */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl max-w-xl w-full p-6 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-xl font-bold text-[#1E293B]">Post New Job / Internship</h2>
              <button onClick={() => setShowPostModal(false)} className="p-1 text-slate-500 hover:text-slate-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePostJob} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Job Title</label>
                <input
                  type="text"
                  required
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Junior React Developer"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 focus:outline-none focus:border-[#166534]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Opportunity Type</label>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900"
                  >
                    <option value="job">Full Time Job</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Work Mode</label>
                  <select
                    value={workMode}
                    onChange={(e) => setWorkMode(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900"
                  >
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Salary / Stipend</label>
                  <input
                    type="text"
                    required
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    placeholder="e.g. ₹8.0 LPA"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Location</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Required Skill #1</label>
                  <input
                    type="text"
                    required
                    value={requiredSkill1}
                    onChange={(e) => setRequiredSkill1(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Required Skill #2</label>
                  <input
                    type="text"
                    required
                    value={requiredSkill2}
                    onChange={(e) => setRequiredSkill2(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#166534] text-white font-extrabold text-xs hover:bg-[#14532D] shadow-sm mt-2"
              >
                Publish Job Listing
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
