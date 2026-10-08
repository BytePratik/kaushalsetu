'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useKaushalSetu } from '../../context/KaushalSetuContext';
import { Compass, UserCheck, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Role } from '../../types';

export default function LoginPage() {
  const router = useRouter();
  const { setRole } = useKaushalSetu();
  const [selectedRole, setSelectedRole] = useState<Role>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setRole(selectedRole);
    if (selectedRole === 'employer') router.push('/dashboard/employer');
    else if (selectedRole === 'admin') router.push('/dashboard/admin');
    else router.push('/dashboard/student');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-[#FAFAF7]">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-8 space-y-6 shadow-sm">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-lg bg-[#166534] text-white flex items-center justify-center mx-auto shadow-sm">
            <Compass className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h1 className="text-2xl font-extrabold text-[#1E293B]">Log In to KAUSHALSETU</h1>
          <p className="text-xs text-slate-600">Select your role to access your portal</p>
        </div>

        {/* Role Selector Pills */}
        <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 border border-slate-200 rounded-lg">
          <button
            type="button"
            onClick={() => setSelectedRole('student')}
            className={`py-2 rounded-md text-xs font-bold flex flex-col items-center gap-1 transition-all ${
              selectedRole === 'student' ? 'bg-[#166534] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Student</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole('employer')}
            className={`py-2 rounded-md text-xs font-bold flex flex-col items-center gap-1 transition-all ${
              selectedRole === 'employer' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Employer</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole('admin')}
            className={`py-2 rounded-md text-xs font-bold flex flex-col items-center gap-1 transition-all ${
              selectedRole === 'admin' ? 'bg-amber-800 text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Admin</span>
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#166534]"
              placeholder="user@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
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
            <span>Log In as {selectedRole.toUpperCase()}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-600 border-t border-slate-200 pt-4">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-[#166534] font-bold hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
