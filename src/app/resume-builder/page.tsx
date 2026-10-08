'use client';

import React, { useState } from 'react';
import { useKaushalSetu } from '../../context/KaushalSetuContext';
import { FileText, Award, Briefcase, GraduationCap, CheckCircle2, Printer } from 'lucide-react';

export default function ResumeBuilderPage() {
  const { studentProfile, updateStudentProfile } = useKaushalSetu();

  const [fullName, setFullName] = useState(studentProfile.fullName);
  const [email, setEmail] = useState(studentProfile.email);
  const [phone, setPhone] = useState(studentProfile.phone);
  const [location, setLocation] = useState(studentProfile.location);
  const [summary, setSummary] = useState(studentProfile.summary);

  const handleSaveProfile = () => {
    updateStudentProfile({
      fullName,
      email,
      phone,
      location,
      summary
    });
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 print:hidden">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-semibold mb-2">
            <FileText className="w-3.5 h-3.5 text-[#166534]" />
            <span>Module 14 Professional Resume Builder</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1E293B]">Resume Builder & PDF Exporter</h1>
          <p className="text-xs text-slate-600 mt-1">
            Build ATS-formatted professional resumes auto-populated with your verified skills and capstone projects.
          </p>
        </div>

        <button
          onClick={handlePrintPDF}
          className="px-5 py-2.5 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center gap-2 shadow-sm"
        >
          <Printer className="w-4 h-4" />
          <span>Download PDF Resume</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:grid-cols-1">
        {/* LEFT COLUMN: EDIT FORM */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-6 print:hidden">
          <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#166534]" />
            <span>Edit Resume Profile</span>
          </h2>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-[#166534]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-[#166534]"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-[#166534]"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-[#166534]"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Professional Summary</label>
              <textarea
                rows={3}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-[#166534]"
              />
            </div>

            <button
              onClick={handleSaveProfile}
              className="w-full py-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[#166534] font-bold hover:bg-[#166534] hover:text-white transition-all shadow-sm"
            >
              Update Resume Data
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: STYLED LIVE RESUME PREVIEW */}
        <div id="resume-preview-card" className="p-8 rounded-xl bg-white border border-slate-200 text-slate-900 space-y-6 print:p-0 print:border-none print:shadow-none shadow-sm">
          {/* Header */}
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-2xl font-extrabold text-[#1E293B]">{fullName}</h1>
            <div className="text-xs text-slate-600 flex flex-wrap gap-3 mt-1 font-medium">
              <span>{email}</span>
              <span>•</span>
              <span>{phone}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold text-[#166534] uppercase tracking-wider">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">{summary}</p>
          </div>

          {/* Verified Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-[#166534] uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Technical Skills ({studentProfile.skills.length})</span>
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {studentProfile.skills.map((sk) => (
                <span
                  key={sk.skillId}
                  className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-xs text-[#166534] font-semibold"
                >
                  ✓ {sk.name} ({sk.level})
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-[#166534] uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </h2>
            {studentProfile.education.map((edu, i) => (
              <div key={i} className="text-xs">
                <div className="font-bold text-slate-900">{edu.degree}</div>
                <div className="text-slate-600">
                  {edu.institution} • {edu.passingYear} • <span className="text-[#166534] font-bold">{edu.cgpaOrPercentage}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Capstone Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-[#166534] uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Technical Projects</span>
            </h2>
            {studentProfile.projects.map((proj, i) => (
              <div key={i} className="text-xs space-y-0.5">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>{proj.title}</span>
                  <span className="text-[10px] text-slate-500 font-normal">({proj.techStack.join(', ')})</span>
                </div>
                <div className="text-slate-600 leading-relaxed">{proj.description}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-[#166534] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Certifications & Achievements</span>
            </h2>
            {studentProfile.certificates.map((cert, i) => (
              <div key={i} className="text-xs text-slate-700">
                • {cert.title} — <span className="text-slate-500">{cert.issuer} ({cert.date})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
