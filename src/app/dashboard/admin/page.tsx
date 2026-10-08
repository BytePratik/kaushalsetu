'use client';

import React from 'react';
import { useKaushalSetu } from '../../../context/KaushalSetuContext';
import { ShieldCheck, Users, Building2, Briefcase, BarChart3, TrendingUp, Download, CheckCircle2 } from 'lucide-react';

export default function AdminDashboardPage() {
  const { postedJobs } = useKaushalSetu();

  const skillDemandDistribution = [
    { skill: 'JavaScript & React.js', demandScore: 95, openings: 42 },
    { skill: 'Python & Data Science', demandScore: 88, openings: 35 },
    { skill: 'Node.js & SQL', demandScore: 82, openings: 28 },
    { skill: 'UI/UX Design & Figma', demandScore: 76, openings: 19 },
    { skill: 'AWS Cloud & Docker', demandScore: 70, openings: 18 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header */}
      <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Portal • Modules 19 & 20</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1E293B]">Platform Analytics & Governance</h1>
          <p className="text-xs text-slate-600">
            System-wide placement metrics, skill demand tracking, and user oversight.
          </p>
        </div>

        <button
          onClick={() => alert('System report compiled and downloaded as CSV.')}
          className="px-5 py-3 rounded-lg bg-[#166534] text-white font-extrabold text-xs hover:bg-[#14532D] flex items-center gap-2 shadow-sm"
        >
          <Download className="w-4 h-4" />
          <span>Export Analytics Report</span>
        </button>
      </div>

      {/* METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Registered Students</span>
            <Users className="w-4 h-4 text-[#166534]" />
          </div>
          <div className="text-3xl font-extrabold text-[#166534]">12,450+</div>
          <div className="text-[11px] text-slate-500 font-medium">+12% growth this month</div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Partner Employers</span>
            <Building2 className="w-4 h-4 text-slate-700" />
          </div>
          <div className="text-3xl font-extrabold text-slate-800">850+</div>
          <div className="text-[11px] text-slate-500 font-medium">Verified hiring partners</div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Active Listings</span>
            <Briefcase className="w-4 h-4 text-amber-700" />
          </div>
          <div className="text-3xl font-extrabold text-amber-800">{postedJobs.length + 138}</div>
          <div className="text-[11px] text-slate-500 font-medium">Jobs & Internships</div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Placement Rate</span>
            <TrendingUp className="w-4 h-4 text-[#166534]" />
          </div>
          <div className="text-3xl font-extrabold text-[#166534]">94.2%</div>
          <div className="text-[11px] text-slate-500 font-medium">Successful matches</div>
        </div>
      </div>

      {/* SKILL DEMAND BREAKDOWN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#166534]" />
            <span>Highest Demanded Skills Index</span>
          </h2>

          <div className="space-y-4">
            {skillDemandDistribution.map((item, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex items-center justify-between text-slate-800 font-semibold">
                  <span>{item.skill}</span>
                  <span className="text-[#166534] font-extrabold">{item.openings} Openings</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                  <div
                    className="bg-[#166534] h-full rounded-full"
                    style={{ width: `${item.demandScore}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SYSTEM STATUS & HEALTH OVERVIEW */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#166534]" />
            <span>System Governance & API Services</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <span className="text-slate-800 font-medium">Authentication & Auth APIs</span>
              <span className="text-[#166534] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" /> Operational (100%)
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <span className="text-slate-800 font-medium">Skill Gap Analysis Calculator</span>
              <span className="text-[#166534] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" /> Operational (100%)
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <span className="text-slate-800 font-medium">Job Matching & Compatibility Engine</span>
              <span className="text-[#166534] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" /> Operational (100%)
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <span className="text-slate-800 font-medium">AI Career Assistant Services</span>
              <span className="text-[#166534] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" /> Operational (100%)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
