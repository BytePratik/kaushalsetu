'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 bg-[#FAFAF7]">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B]">Contact Support & Helpline</h1>
        <p className="text-xs text-slate-600">
          Have questions regarding skill assessments, employer partnerships, or career roadmaps? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <MapPin className="w-6 h-6 text-[#166534]" />
            <h3 className="text-base font-bold text-[#1E293B]">Headquarters</h3>
            <p className="text-xs text-slate-600">National Skill & Career Complex, Institutional Area, New Delhi - 110001, India</p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <Mail className="w-6 h-6 text-[#166534]" />
            <h3 className="text-base font-bold text-[#1E293B]">Email Us</h3>
            <p className="text-xs text-slate-600">support@kaushalsetu.gov.in</p>
            <p className="text-xs text-slate-600">employers@kaushalsetu.gov.in</p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <Phone className="w-6 h-6 text-amber-700" />
            <h3 className="text-base font-bold text-[#1E293B]">Toll-Free Helpline</h3>
            <p className="text-xs text-slate-600">+91 1800-11-2026 (Mon-Sat, 9am - 6pm)</p>
          </div>
        </div>

        <div className="lg:col-span-2 p-8 rounded-xl bg-white border border-slate-200 shadow-sm">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#166534] flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B]">Message Sent Successfully!</h3>
              <p className="text-xs text-slate-600">Thank you for reaching out. Our support team will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-[#1E293B] mb-4">Send Us a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#166534]"
                    placeholder="Rahul Sharma"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#166534]"
                    placeholder="rahul@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#166534]"
                  placeholder="Inquiry about Skill Gap Assessment"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#166534]"
                  placeholder="Write your query here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Query</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
