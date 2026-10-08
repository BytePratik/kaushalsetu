'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useKaushalSetu } from '../../../context/KaushalSetuContext';
import { ASSESSMENTS_CATALOG } from '../../../data/assessments';
import { Clock, CheckCircle2, XCircle, Award, ArrowRight, ArrowLeft } from 'lucide-react';
import { SkillLevel } from '../../../types';

export default function AssessmentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { recordAssessmentResult } = useKaushalSetu();

  const assessmentId = params.id as string;
  const assessment = ASSESSMENTS_CATALOG.find((a) => a.id === assessmentId) || ASSESSMENTS_CATALOG[0];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(assessment.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scorePercentage, setScorePercentage] = useState(0);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || timeLeftSeconds <= 0) return;
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeftSeconds]);

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestionIndex]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    let correct = 0;
    assessment.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        correct++;
      }
    });

    const percent = Math.round((correct / assessment.questions.length) * 100);
    setScorePercentage(percent);
    setIsSubmitted(true);

    const passed = percent >= assessment.passingScorePercentage;
    const assignedLevel: SkillLevel = percent >= 85 ? 'Advanced' : 'Intermediate';

    recordAssessmentResult({
      assessmentId: assessment.id,
      skillName: assessment.skillName,
      scorePercentage: percent,
      passed,
      assignedLevel,
      correctAnswers: correct,
      totalQuestions: assessment.questions.length
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = assessment.questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAFAF7]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link href="/assessments" className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Assessments
        </Link>
        {!isSubmitted && (
          <div className="px-3 py-1 rounded-md bg-amber-50 text-amber-800 font-bold text-xs flex items-center gap-1.5 border border-amber-200">
            <Clock className="w-4 h-4 text-amber-700" />
            <span>Time Left: {formatTime(timeLeftSeconds)}</span>
          </div>
        )}
      </div>

      {!isSubmitted ? (
        <div className="p-8 rounded-xl bg-white border border-slate-200 space-y-8 shadow-sm">
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-[#1E293B]">{assessment.title}</h2>
              <span className="text-xs text-slate-500">
                Question {currentQuestionIndex + 1} of {assessment.questions.length}
              </span>
            </div>
            <span className="text-xs font-bold text-amber-800">Pass Mark: {assessment.passingScorePercentage}%</span>
          </div>

          {/* Question Text */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">{currentQuestion.questionText}</h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-lg border text-xs font-medium transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'bg-emerald-50 border-[#166534] text-emerald-900 font-bold shadow-sm'
                        : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${
                        isSelected ? 'bg-[#166534] text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 disabled:opacity-40"
            >
              Previous Question
            </button>

            {currentQuestionIndex < assessment.questions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                className="px-5 py-2.5 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D]"
              >
                Next Question →
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                className="px-6 py-2.5 rounded-lg bg-[#166534] text-white font-extrabold text-xs hover:bg-[#14532D] shadow-sm"
              >
                Submit Assessment Quiz
              </button>
            )}
          </div>
        </div>
      ) : (
        /* RESULT SCORECARD SCREEN */
        <div className="p-8 rounded-xl bg-white border border-slate-200 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#166534] flex items-center justify-center mx-auto border border-emerald-200">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#1E293B]">Assessment Complete!</h2>
            <p className="text-xs text-slate-600">Score Report for {assessment.title}</p>
          </div>

          <div className="max-w-md mx-auto p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="text-4xl font-extrabold text-[#166534]">{scorePercentage}%</div>
            <div className="text-xs text-slate-700 font-medium">
              {scorePercentage >= assessment.passingScorePercentage
                ? '✓ Passed! Verified Skill Badge added to your profile.'
                : 'Need Improvement. Review explanations below and retake.'}
            </div>
          </div>

          {/* EXPLANATIONS REVIEW */}
          <div className="text-left space-y-4 pt-6 border-t border-slate-200">
            <h3 className="text-sm font-bold text-[#1E293B]">Answer Review & Key Explanations</h3>
            {assessment.questions.map((q, idx) => {
              const isCorrect = selectedAnswers[idx] === q.correctAnswerIndex;
              return (
                <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-700 shrink-0" />
                    )}
                    <span>Q{idx + 1}: {q.questionText}</span>
                  </div>
                  <div className="text-slate-600 pl-6">
                    <span className="text-[#166534] font-bold">Correct Answer: </span>
                    {q.options[q.correctAnswerIndex]}
                  </div>
                  <div className="text-slate-500 text-[11px] pl-6 italic">{q.explanation}</div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/skill-gap-analysis"
              className="px-6 py-3 rounded-lg bg-[#166534] text-white font-bold text-xs hover:bg-[#14532D] inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>View Updated Skill Gap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
