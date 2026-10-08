'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Mail, Phone, MapPin, Shield, Globe } from 'lucide-react';
import { useKaushalSetu } from '../../context/KaushalSetuContext';

export const Footer: React.FC = () => {
  const { t } = useKaushalSetu();

  return (
    <footer className="bg-[#1E293B] border-t border-slate-700 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Brand Column */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#166534] flex items-center justify-center text-white">
              <Compass className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">{t('brandName')}</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            National Skill & Career Bridge Platform. Dedicated to empowering students, jobseekers, and employers across India through skill gap analysis and verified career paths.
          </p>
          <div className="flex items-center gap-3 text-xs text-emerald-400 pt-1">
            <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> English / हिंदी</span>
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> Skill India Aligned</span>
          </div>
        </div>

        {/* Core Modules */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Platform Modules</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/skill-gap-analysis" className="text-slate-300 hover:text-white transition-colors">Skill Gap Analysis</Link></li>
            <li><Link href="/roadmap" className="text-slate-300 hover:text-white transition-colors">Personalized Career Roadmap</Link></li>
            <li><Link href="/jobs" className="text-slate-300 hover:text-white transition-colors">Job Matching Engine</Link></li>
            <li><Link href="/ai-assistant" className="text-slate-300 hover:text-white transition-colors">AI Career Assistant</Link></li>
            <li><Link href="/assessments" className="text-slate-300 hover:text-white transition-colors">Skill Assessments & Badges</Link></li>
            <li><Link href="/resume-builder" className="text-slate-300 hover:text-white transition-colors">Resume Builder & PDF Export</Link></li>
          </ul>
        </div>

        {/* Popular Careers */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Popular Careers</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/skill-gap-analysis" className="text-slate-300 hover:text-white transition-colors">Full Stack Web Developer</Link></li>
            <li><Link href="/skill-gap-analysis" className="text-slate-300 hover:text-white transition-colors">AI & Data Science Specialist</Link></li>
            <li><Link href="/skill-gap-analysis" className="text-slate-300 hover:text-white transition-colors">UI/UX Product Designer</Link></li>
            <li><Link href="/skill-gap-analysis" className="text-slate-300 hover:text-white transition-colors">Cloud DevOps Engineer</Link></li>
            <li><Link href="/learn" className="text-slate-300 hover:text-white transition-colors">Free Skill Certification Courses</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Contact & Support</h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400 shrink-0" /> New Delhi, India</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-400 shrink-0" /> support@kaushalsetu.gov.in</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-400 shrink-0" /> +91 1800-11-2026 (Toll Free)</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© 2026 KAUSHALSETU National Skill & Employment Bridge. All rights reserved.</p>
        <p>A Civic-Tech & Education Initiative</p>
      </div>
    </footer>
  );
};
