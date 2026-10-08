'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useKaushalSetu } from '../../context/KaushalSetuContext';
import {
  Compass,
  Briefcase,
  BookOpen,
  Award,
  FileText,
  Bot,
  UserCheck,
  Building2,
  ShieldCheck,
  Languages,
  Zap,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  LayoutDashboard
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { role, setRole, language, setLanguage, lowBandwidth, setLowBandwidth, t } = useKaushalSetu();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navLinks = [
    { href: '/skill-gap-analysis', label: t('navGapAnalysis'), icon: Compass, badge: '⭐' },
    { href: '/roadmap', label: t('navRoadmap'), icon: Sparkles, badge: '⭐' },
    { href: '/jobs', label: t('navJobs'), icon: Briefcase },
    { href: '/learn', label: t('navLearn'), icon: BookOpen },
    { href: '/assessments', label: t('navAssessments'), icon: Award },
    { href: '/resume-builder', label: t('navResume'), icon: FileText },
    { href: '/ai-assistant', label: t('navAiAssistant'), icon: Bot, badge: 'AI' }
  ];

  const getDashboardHref = () => {
    if (role === 'employer') return '/dashboard/employer';
    if (role === 'admin') return '/dashboard/admin';
    return '/dashboard/student';
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 text-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#166534] flex items-center justify-center text-white shadow-sm">
              <Compass className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                {t('brandName')}
              </span>
              <span className="block text-[10px] font-semibold text-[#166534] tracking-wider uppercase -mt-1">
                Skill & Employment Portal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-[#166534] font-bold border border-emerald-200'
                      : 'text-slate-700 hover:text-[#166534] hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#166534]' : 'text-slate-500'}`} />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1 py-0.2 text-[9px] font-bold rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Language, Low-Data, Role Switcher */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Low Bandwidth Toggle */}
            <button
              onClick={() => setLowBandwidth(!lowBandwidth)}
              title={t('lowBandwidthMode')}
              className={`p-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1 border transition-colors ${
                lowBandwidth
                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden xl:inline">{lowBandwidth ? 'Low-Data' : 'Data Mode'}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
            >
              <Languages className="w-3.5 h-3.5 text-[#166534]" />
              <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            {/* Role Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 hover:border-slate-300 flex items-center gap-2 text-xs font-semibold transition-all"
              >
                {role === 'student' && <UserCheck className="w-3.5 h-3.5 text-[#166534]" />}
                {role === 'employer' && <Building2 className="w-3.5 h-3.5 text-slate-700" />}
                {role === 'admin' && <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />}
                <span className="capitalize">{role}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white border border-slate-200 shadow-lg p-1.5 z-50">
                  <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Select Demo Portal
                  </div>
                  <button
                    onClick={() => { setRole('student'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center gap-2 font-medium ${
                      role === 'student' ? 'bg-emerald-50 text-[#166534] font-bold' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <UserCheck className="w-4 h-4 text-[#166534]" />
                    <span>Student Portal</span>
                  </button>
                  <button
                    onClick={() => { setRole('employer'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center gap-2 font-medium ${
                      role === 'employer' ? 'bg-slate-100 text-slate-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-slate-700" />
                    <span>Employer Portal</span>
                  </button>
                  <button
                    onClick={() => { setRole('admin'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center gap-2 font-medium ${
                      role === 'admin' ? 'bg-amber-50 text-amber-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    <span>Admin Portal</span>
                  </button>
                </div>
              )}
            </div>

            {/* Dashboard Primary Button */}
            <Link
              href={getDashboardHref()}
              className="px-4 py-1.5 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center gap-1.5 shadow-sm transition-all"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>{t('navDashboard')}</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="px-2 py-1 rounded bg-slate-100 border border-slate-200 text-xs text-slate-700"
            >
              {language === 'en' ? 'हिंदी' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 bg-slate-100 border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                <Icon className="w-4 h-4 text-[#166534]" />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setRole('student')}
                className={`px-2.5 py-1 rounded text-xs font-semibold ${role === 'student' ? 'bg-emerald-100 text-[#166534]' : 'text-slate-600'}`}
              >
                Student
              </button>
              <button
                onClick={() => setRole('employer')}
                className={`px-2.5 py-1 rounded text-xs font-semibold ${role === 'employer' ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`}
              >
                Employer
              </button>
              <button
                onClick={() => setRole('admin')}
                className={`px-2.5 py-1 rounded text-xs font-semibold ${role === 'admin' ? 'bg-amber-100 text-amber-900' : 'text-slate-600'}`}
              >
                Admin
              </button>
            </div>
            <Link
              href={getDashboardHref()}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 rounded-lg bg-[#166534] text-white font-bold text-xs"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
