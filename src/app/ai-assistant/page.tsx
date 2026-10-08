'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useKaushalSetu } from '../../context/KaushalSetuContext';
import { CAREERS_CATALOG } from '../../data/careers';
import { Bot, Send, User, ArrowRight } from 'lucide-react';
import { AIMessage } from '../../types';

export default function AIAssistantPage() {
  const { studentProfile, targetCareer } = useKaushalSetu();
  const activeCareer = targetCareer || CAREERS_CATALOG[0];

  const studentSkillsList = studentProfile.skills.map((s) => s.name).join(', ');

  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: 'msg-1',
      sender: 'assistant',
      text: `Namaste ${studentProfile.fullName}! I am your KAUSHALSETU AI Assistant. I have loaded your profile context (Target Role: ${activeCareer.title}, Verified Skills: ${studentSkillsList}). How can I assist your career progression today?`,
      timestamp: 'Just now',
      actionSuggestions: [
        { label: 'Analyze My Skill Gap', href: '/skill-gap-analysis' },
        { label: 'View Career Roadmap', href: '/roadmap' }
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const presetPrompts = [
    'What are the top 3 missing skills I should learn next?',
    'Generate 4 technical interview practice questions for React & JavaScript.',
    'How can I improve my job match score for Full Stack roles?',
    'Give me a professional 2-sentence resume summary.'
  ];

  const generateAIResponse = (userPrompt: string): { text: string; suggestions?: { label: string; href: string }[] } => {
    const promptLower = userPrompt.toLowerCase();

    if (promptLower.includes('missing') || promptLower.includes('gap') || promptLower.includes('learn next')) {
      const studentSkillNames = new Set(studentProfile.skills.map((s) => s.name.toLowerCase()));
      const missing = activeCareer.requiredSkills.filter(
        (req) => !studentSkillNames.has(req.name.toLowerCase())
      );
      if (missing.length === 0) {
        return {
          text: `Great news ${studentProfile.fullName}! You hold all required skills for ${activeCareer.title}. Your primary focus now should be building capstone projects and taking skill assessments to earn verified badges.`,
          suggestions: [{ label: 'Browse Matching Jobs', href: '/jobs' }]
        };
      }
      const missingNames = missing.map((m) => `${m.name} (${m.priority} Priority)`).join(', ');
      return {
        text: `Based on your target career as a ${activeCareer.title}, your highest priority missing skills are: ${missingNames}. I recommend starting with the top priority skill using our free certification courses.`,
        suggestions: [
          { label: 'Open Skill Gap Engine', href: '/skill-gap-analysis' },
          { label: 'Explore Free Courses', href: '/learn' }
        ]
      };
    }

    if (promptLower.includes('interview') || promptLower.includes('question')) {
      return {
        text: `Here are 4 targeted interview questions for your background:\n1. Explain the differences between state and props in React.\n2. How does the event loop handle async Promises in JavaScript?\n3. Describe how RESTful API endpoints structure request methods (GET, POST, PUT, DELETE).\n4. How do you handle database relational joins in SQL?`,
        suggestions: [{ label: 'Take Timed Skill Quiz', href: '/assessments' }]
      };
    }

    if (promptLower.includes('resume') || promptLower.includes('summary')) {
      return {
        text: `Here is a tailored resume summary:\n"Enthusiastic and certified ${activeCareer.title} candidate proficient in ${studentSkillsList}. Demonstrated ability in building full-stack web applications, REST APIs, and database modeling with high code quality."`,
        suggestions: [{ label: 'Export PDF Resume', href: '/resume-builder' }]
      };
    }

    return {
      text: `Regarding "${userPrompt}": For your goal as a ${activeCareer.title}, keeping your profile skills updated and completing verified assessments will significantly boost your recruiter match score. Explore your personalized roadmap for detailed step-by-step milestones.`,
      suggestions: [{ label: 'View Roadmap', href: '/roadmap' }]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: AIMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsThinking(true);

    setTimeout(() => {
      const aiReply = generateAIResponse(query);
      const assistantMsg: AIMessage = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'assistant',
        text: aiReply.text,
        timestamp: 'Just now',
        actionSuggestions: aiReply.suggestions
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsThinking(false);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 bg-[#FAFAF7]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-semibold mb-1">
            <Bot className="w-3.5 h-3.5 text-[#166534]" />
            <span>Module 15 ⭐ AI Career Assistant</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#1E293B]">AI Career Guidance Assistant</h1>
        </div>
        <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-sm">
          Target Role: <span className="text-[#166534] font-bold">{activeCareer.title}</span>
        </div>
      </div>

      {/* CHAT CONTAINER */}
      <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-6 min-h-[420px] max-h-[550px] overflow-y-auto flex flex-col justify-between shadow-sm">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-[#166534] text-white font-bold'
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className="space-y-2 max-w-xl">
                <div
                  className={`p-4 rounded-xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-slate-800 text-white font-medium'
                      : 'bg-slate-50 border border-slate-200 text-slate-800 whitespace-pre-line'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Quick Action Buttons */}
                {msg.actionSuggestions && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {msg.actionSuggestions.map((act, i) => (
                      <Link
                        key={i}
                        href={act.href}
                        className="px-3 py-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] font-bold text-[11px] hover:bg-emerald-100 inline-flex items-center gap-1 transition-all"
                      >
                        <span>{act.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="flex items-center gap-2 text-xs text-slate-500 italic py-2">
              <Bot className="w-4 h-4 text-[#166534] animate-pulse" />
              <span>Analyzing profile data...</span>
            </div>
          )}
        </div>
      </div>

      {/* PRESET PROMPT SUGGESTIONS */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Suggested Prompts</div>
        <div className="flex flex-wrap gap-2">
          {presetPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1.5 rounded-md bg-white border border-slate-300 text-xs text-slate-700 hover:text-slate-900 hover:border-[#166534] font-medium transition-all shadow-sm"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* INPUT FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask AI about interview prep, missing skills, career roadmap..."
          className="flex-grow bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#166534] shadow-sm"
        />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] flex items-center gap-1.5 shadow-sm"
        >
          <Send className="w-4 h-4" />
          <span>Send</span>
        </button>
      </form>
    </div>
  );
}
