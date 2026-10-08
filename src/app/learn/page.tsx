'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COURSES_CATALOG } from '../../data/courses';
import { BookOpen, Star, Clock, User, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LearnPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Web Development', 'Backend Development', 'Data & AI', 'Design'];

  const filteredCourses = COURSES_CATALOG.filter(
    (c) => selectedCategory === 'all' || c.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-[#166534]" />
            <span>Module 09 Skill Certification Courses</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1E293B]">Courses & Skill Modules</h1>
          <p className="text-xs text-slate-600 mt-1">
            Industry-aligned video lessons and module assignments designed to bridge your missing skills.
          </p>
        </div>
      </div>

      {/* CATEGORY PILL FILTER */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all capitalize ${
              selectedCategory === cat
                ? 'bg-[#166534] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* COURSE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="rounded-xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-all space-y-4 shadow-sm"
          >
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 font-semibold text-[10px]">
                  {course.category}
                </span>
                <span className="flex items-center gap-1 text-amber-700 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {course.rating} ({course.enrolledStudents})
                </span>
              </div>

              <h2 className="text-lg font-bold text-[#1E293B] leading-snug">{course.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{course.description}</p>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Skills Taught</div>
                <div className="flex flex-wrap gap-1">
                  {course.skillsTaught.map((st) => (
                    <span key={st} className="px-2 py-0.5 rounded bg-emerald-50 text-[#166534] text-[10px] font-semibold border border-emerald-200">
                      ✓ {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">
                {course.durationHours} Hours • {course.level}
              </span>
              <Link
                href={`/learn/${course.id}`}
                className="px-4 py-2 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center gap-1 shadow-sm"
              >
                <span>Enroll Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
