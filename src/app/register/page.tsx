'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useKaushalSetu } from '../../context/KaushalSetuContext';
import { Compass, UserCheck, Building2, ArrowRight } from 'lucide-react';
import { Role } from '../../types';

export default function RegisterPage() {
  const router = useRouter();
  const { setRole } = useKaushalSetu();
  const [selectedRole, setSelectedRole] = useState<Role>('student');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRole(selectedRole);
    if (selectedRole === 'employer') router.push('/dashboard/employer');
    else router.push('/dashboard/student');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-[#FAFAF7]">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-8 space-y-6 shadow-sm">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-lg bg-[#166534] text-white flex items-center justify-center mx-auto shadow-sm">
            <Compass className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h1 className="text-2xl font-extrabold text-[#1E293B]">Create KAUSHALSETU Account</h1>
          <p className="text-xs text-slate-600">Join 12,500+ candidates and 850+ recruiters across India</p>
        </div>

        {/* Role Selector Pills */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 border border-slate-200 rounded-lg">
          <button
            type="button"
            onClick={() => setSelectedRole('student')}
            className={`py-2 rounded-md text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              selectedRole === 'student' ? 'bg-[#166534] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Student / Candidate</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole('employer')}
            className={`py-2 rounded-md text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              selectedRole === 'employer' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Employer / Recruiter</span>
          </button>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {selectedRole === 'employer' ? 'Company / Recruiter Name' : 'Full Name'}
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#166534]"
              placeholder={selectedRole === 'employer' ? 'TechCorp India Ltd' : 'Rahul Sharma'}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#166534]"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Create Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#166534]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Register Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-600 border-t border-slate-200 pt-4">
          Already registered?{' '}
          <Link href="/login" className="text-[#166534] font-bold hover:underline">
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
}
