'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { COURSES_CATALOG } from '../../../data/courses';
import { BookOpen, PlayCircle, CheckCircle2, Award, ArrowLeft, Download } from 'lucide-react';
import { useKaushalSetu } from '../../../context/KaushalSetuContext';

export default function CourseDetailPage() {
  const params = useParams();
  const { studentProfile, addStudentSkill } = useKaushalSetu();

  const courseId = params.id as string;
  const course = COURSES_CATALOG.find((c) => c.id === courseId) || COURSES_CATALOG[0];

  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const toggleModuleCompletion = (index: number) => {
    if (completedModules.includes(index)) {
      setCompletedModules(completedModules.filter((i) => i !== index));
    } else {
      const next = [...completedModules, index];
      setCompletedModules(next);
      if (next.length === course.modules.length) {
        if (course.skillsTaught.length > 0) {
          addStudentSkill(course.skillsTaught[0], course.level);
        }
      }
    }
  };

  const isAllCompleted = completedModules.length === course.modules.length;
  const currentModule = course.modules[activeModuleIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link href="/learn" className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Courses
        </Link>
        {isAllCompleted && (
          <button
            onClick={() => setShowCertificateModal(true)}
            className="px-4 py-2 rounded-lg bg-[#166534] text-white font-extrabold text-xs flex items-center gap-1.5 shadow-sm"
          >
            <Award className="w-4 h-4" />
            <span>Generate Course Certificate</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: LESSON VIEWER */}
        <div className="lg:col-span-2 space-y-6">
          {/* Interactive Course Video Player */}
          <div className="space-y-3">
            <div className="aspect-video bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-md relative group">
              {currentModule.videoUrl ? (
                <iframe
                  src={currentModule.videoUrl}
                  title={`${course.title} - ${currentModule.title}`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-gradient-to-b from-slate-900 to-slate-950">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                    <PlayCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                      Module {activeModuleIndex + 1}: {currentModule.title}
                    </span>
                    <h2 className="text-base font-bold text-white">{course.title}</h2>
                  </div>
                </div>
              )}
            </div>

            {/* Video Controls & Mode Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-white border border-slate-200 text-xs">
              <div className="flex items-center gap-2 text-[#166534] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Course Video Stream Enabled</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span>Instructor: <strong className="text-slate-900">{course.instructor}</strong></span>
                <span>•</span>
                <span>Level: <strong className="text-slate-900">{course.level}</strong></span>
              </div>
            </div>
          </div>

          {/* Module Reading & Description */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold text-[#166534] uppercase tracking-wider">
                  Lesson Module {activeModuleIndex + 1}
                </span>
                <h3 className="text-lg font-bold text-[#1E293B]">{currentModule.title}</h3>
              </div>
              <button
                onClick={() => toggleModuleCompletion(activeModuleIndex)}
                className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                  completedModules.includes(activeModuleIndex)
                    ? 'bg-[#166534] text-white shadow-sm'
                    : 'bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{completedModules.includes(activeModuleIndex) ? 'Completed ✓' : 'Mark Lesson Completed'}</span>
              </button>
            </div>
            <div className="pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Lesson Overview & Hands-on Notes
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {currentModule.articleContent ||
                  'In this lesson, you will master practical implementation patterns and complete hands-on code exercises.'}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MODULE CHECKLIST */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-6 shadow-sm">
          <div>
            <span className="text-[10px] font-bold text-[#166534] uppercase tracking-wider">Course Progress</span>
            <div className="flex items-baseline justify-between mt-1">
              <h3 className="text-lg font-bold text-[#1E293B]">Course Syllabus</h3>
              <span className="text-xs font-bold text-[#166534]">
                {completedModules.length} / {course.modules.length} Done
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
              <div
                className="bg-[#166534] h-full rounded-full transition-all duration-300"
                style={{ width: `${(completedModules.length / course.modules.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            {course.modules.map((mod, idx) => {
              const isSelected = activeModuleIndex === idx;
              const isDone = completedModules.includes(idx);
              return (
                <button
                  key={idx}
                  onClick={() => setActiveModuleIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-lg border text-xs font-medium transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-50 border-[#166534] text-emerald-900 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                        isDone ? 'bg-[#166534] text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {isDone ? '✓' : idx + 1}
                    </span>
                    <span className="line-clamp-1">{mod.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">{mod.duration}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CERTIFICATE MODAL */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl max-w-xl w-full p-8 text-center space-y-6 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#166534] flex items-center justify-center mx-auto border border-emerald-200">
              <Award className="w-8 h-8" />
            </div>

            <div className="p-8 rounded-lg bg-slate-50 border border-slate-200 space-y-4 text-slate-800">
              <div className="text-xs text-[#166534] font-bold uppercase tracking-wider">
                Official Certificate of Accomplishment
              </div>
              <h2 className="text-xl font-extrabold text-[#1E293B]">{studentProfile.fullName}</h2>
              <p className="text-xs text-slate-600">
                Has successfully completed all required modules for <span className="text-slate-900 font-bold">{course.title}</span>.
              </p>
              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-200">
                Issued by KAUSHALSETU National Skill Academy • Verified Credential ID: KS-CERT-2026
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" /> Download Certificate PDF
              </button>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
