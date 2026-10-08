'use client';

import React from 'react';
import { Compass, Sparkles, Briefcase, Bot, FileText, Award, BookOpen, ShieldCheck, Languages, Zap, Layers } from 'lucide-react';

export default function FeaturesPage() {
  const featureList = [
    { title: '01. Project Architecture', desc: 'Next.js 14+ App Router, TypeScript, Tailwind CSS, high-performance styling.', icon: Layers },
    { title: '02. Public Platform Website', desc: 'Home, About Us, How It Works, Features, Contact, Login, and Register pages.', icon: Compass },
    { title: '03. Authentication & RBAC', desc: 'Role-based access for Student, Employer, and Admin portals.', icon: ShieldCheck },
    { title: '04. Student Profile Module', desc: 'Education, skills, projects, certificates, and achievements tracker.', icon: Compass },
    { title: '05. Skill Catalog Module', desc: 'Beginner, Intermediate, and Advanced skill taxonomy and profile management.', icon: Award },
    { title: '06. Skill Assessment Quiz', desc: 'Timed multiple-choice assessments with automatic score calculation and verified badges.', icon: Award },
    { title: '07. Skill Gap Analysis ⭐', desc: 'Career selection, missing skill identification, priority matrix, and gap percentage.', icon: Compass },
    { title: '08. Career Explorer Module', desc: 'Salary insights, demand metrics, and step-by-step career roadmaps.', icon: Sparkles },
    { title: '09. Learning & Course Module', desc: 'Free courses, structured modules, progress bar, and video lessons.', icon: BookOpen },
    { title: '10. Personalized Roadmap ⭐', desc: 'Learning order, recommended courses, and capstone projects for target careers.', icon: Sparkles },
    { title: '11. Job Explorer & Filters', desc: 'Filter jobs by category, experience, work mode, and stipend range.', icon: Briefcase },
    { title: '12. Internship Module', desc: 'Stipend, duration, and skill requirements for student internships.', icon: Briefcase },
    { title: '13. Job Matching Engine ⭐', desc: 'Live compatibility match score (e.g. 92% Match) derived from student skills.', icon: Briefcase },
    { title: '14. Professional Resume Builder', desc: 'Interactive form sections, live preview, and instant PDF download export.', icon: FileText },
    { title: '15. AI Career Assistant ⭐', desc: 'Chatbot offering interview preparation, resume advice, and skill guidance.', icon: Bot },
    { title: '16. Employer Portal', desc: 'Job posting, manage listings, view applicants, and candidate shortlisting.', icon: Briefcase },
    { title: '17. Application Tracking', desc: 'Applied jobs status, shortlisted, interview scheduled, selected or rejected.', icon: FileText },
    { title: '18. Notifications System', desc: 'Updates on applications, new matching jobs, and course reminders.', icon: Sparkles },
    { title: '19. Admin Portal & Analytics', desc: 'Platform control panel, user metrics, placement statistics, and demand reports.', icon: ShieldCheck },
    { title: '20. Platform Analytics', desc: 'Total students, employers, active jobs, placement rates, and skill trends.', icon: Layers },
    { title: '21. Multilingual Support', desc: 'Instant English and Hindi interface translation switcher.', icon: Languages },
    { title: '22. Accessibility & PWA', desc: 'Low-bandwidth mode toggle, mobile responsive layout, and contrast options.', icon: Zap },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 bg-[#FAFAF7]">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B]">All 27 Core Platform Modules</h1>
        <p className="text-xs text-slate-600">
          Comprehensive feature set powering KAUSHALSETU&apos;s skill development and employment platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 text-[#166534] flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#166534]" />
              </div>
              <h3 className="text-base font-bold text-[#1E293B]">{f.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
