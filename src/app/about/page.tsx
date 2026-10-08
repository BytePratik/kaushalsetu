'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Target, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { useKaushalSetu } from '../../context/KaushalSetuContext';

export default function AboutPage() {
  const { t } = useKaushalSetu();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 bg-[#FAFAF7]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-semibold">
          <Compass className="w-3.5 h-3.5 text-[#166534]" />
          <span>About KAUSHALSETU</span>
        </div>
        <h1 className="text-4xl font-extrabold text-[#1E293B]">
          Empowering India&apos;s Talent Pool Through Skill Bridge Innovation
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          KAUSHALSETU (कौशलसेतु) is designed to eliminate the gap between technical education and real-world employer requirements across India.
        </p>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-[#166534] flex items-center justify-center">
            <Target className="w-5 h-5 text-[#166534]" />
          </div>
          <h3 className="text-xl font-bold text-[#1E293B]">Our Mission</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Provide every student with transparent, data-driven skill gap visibility, personalized career roadmaps, AI guidance, and direct pathways to verified employment opportunities.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center">
            <Users className="w-5 h-5 text-slate-800" />
          </div>
          <h3 className="text-xl font-bold text-[#1E293B]">Employer Ecosystem</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Enable recruiters and companies to discover pre-verified candidates with verified skill badges, reducing hiring cycles and skill mismatch risks.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-amber-800" />
          </div>
          <h3 className="text-xl font-bold text-[#1E293B]">Inclusivity & Access</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Built with multilingual English & Hindi interfaces, low-bandwidth data optimization, and mobile-friendly layouts for tier-2 and tier-3 town students.
          </p>
        </div>
      </div>

      {/* Impact Stats Banner */}
      <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl font-extrabold text-[#166534]">12,500+</div>
          <div className="text-xs text-slate-600 mt-1 font-medium">Students Enrolled</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-slate-800">45,000+</div>
          <div className="text-xs text-slate-600 mt-1 font-medium">Assessments Cleared</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-[#166534]">850+</div>
          <div className="text-xs text-slate-600 mt-1 font-medium">Hiring Partners</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-amber-800">94%</div>
          <div className="text-xs text-slate-600 mt-1 font-medium">Placement Rate</div>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link
          href="/skill-gap-analysis"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] shadow-sm"
        >
          <span>Explore Your Skill Gap Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
