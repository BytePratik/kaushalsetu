'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Role, Language, StudentProfile, Job, Application, AssessmentResult, Career, SkillLevel } from '../types';
import { CAREERS_CATALOG } from '../data/careers';
import { JOBS_CATALOG } from '../data/jobs';
import { TRANSLATIONS } from '../data/translations';

interface KaushalSetuContextType {
  role: Role;
  setRole: (role: Role) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  lowBandwidth: boolean;
  setLowBandwidth: (val: boolean) => void;
  studentProfile: StudentProfile;
  updateStudentProfile: (updated: Partial<StudentProfile>) => void;
  addStudentSkill: (skillName: string, level: SkillLevel) => void;
  removeStudentSkill: (skillName: string) => void;
  targetCareerId: string;
  setTargetCareerId: (careerId: string) => void;
  targetCareer: Career | undefined;
  savedJobIds: string[];
  toggleSaveJob: (jobId: string) => void;
  applications: Application[];
  applyForJob: (jobId: string) => boolean;
  postedJobs: Job[];
  addPostedJob: (job: Omit<Job, 'id' | 'postedDate' | 'employerId'>) => void;
  assessmentResults: AssessmentResult[];
  recordAssessmentResult: (result: Omit<AssessmentResult, 'id' | 'dateCompleted'>) => void;
  calculateJobMatchScore: (requiredSkills: { name: string; level: SkillLevel }[]) => number;
  t: (key: keyof typeof TRANSLATIONS['en']) => string;
}

const DEFAULT_PROFILE: StudentProfile = {
  id: 'stu-101',
  fullName: 'Rahul Sharma',
  email: 'rahul.sharma@example.com',
  phone: '+91 98765 43210',
  location: 'New Delhi, India',
  education: [
    { degree: 'B.Tech in Computer Science', institution: 'Delhi Technological University', passingYear: '2025', cgpaOrPercentage: '8.4 CGPA' }
  ],
  skills: [
    { skillId: 'sk-1', name: 'JavaScript', level: 'Intermediate', verified: true, score: 85 },
    { skillId: 'sk-8', name: 'HTML5 & CSS3', level: 'Intermediate', verified: true, score: 90 },
    { skillId: 'sk-10', name: 'Git & GitHub', level: 'Beginner', verified: true, score: 75 }
  ],
  targetCareerId: 'car-1',
  experience: [],
  projects: [
    {
      title: 'Student Portal Interface',
      techStack: ['JavaScript', 'HTML5 & CSS3'],
      description: 'Built responsive web UI with client-side validation.'
    }
  ],
  certificates: [
    { title: 'Web Development Basics', issuer: 'KaushalSetu Academy', date: 'Sept 2025' }
  ],
  achievements: ['Ranked Top 10% in Hackathon 2025'],
  summary: 'Motivated Computer Science undergraduate aiming to become a Full Stack Web Developer.'
};

const KaushalSetuContext = createContext<KaushalSetuContextType | undefined>(undefined);

export const KaushalSetuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<Role>('student');
  const [language, setLanguageState] = useState<Language>('en');
  const [lowBandwidth, setLowBandwidth] = useState<boolean>(false);
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(DEFAULT_PROFILE);
  const [targetCareerId, setTargetCareerIdState] = useState<string>('car-1');
  const [savedJobIds, setSavedJobIds] = useState<string[]>(['job-1']);
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 'app-1',
      jobId: 'job-1',
      jobTitle: 'Junior Full Stack Developer',
      company: 'TechWave Solutions',
      studentId: 'stu-101',
      studentName: 'Rahul Sharma',
      studentEmail: 'rahul.sharma@example.com',
      appliedDate: '2026-10-06',
      status: 'Under Review',
      matchScore: 82
    }
  ]);
  const [postedJobs, setPostedJobs] = useState<Job[]>(JOBS_CATALOG);
  const [assessmentResults, setAssessmentResults] = useState<AssessmentResult[]>([
    {
      id: 'res-1',
      assessmentId: 'asm-1',
      skillName: 'JavaScript',
      scorePercentage: 80,
      passed: true,
      assignedLevel: 'Intermediate',
      dateCompleted: '2026-10-05',
      correctAnswers: 4,
      totalQuestions: 5
    }
  ]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedRole = localStorage.getItem('ks_role') as Role;
      if (savedRole) setRoleState(savedRole);

      const savedLang = localStorage.getItem('ks_lang') as Language;
      if (savedLang) setLanguageState(savedLang);

      const savedProfile = localStorage.getItem('ks_profile');
      if (savedProfile) setStudentProfile(JSON.parse(savedProfile));

      const savedCareer = localStorage.getItem('ks_target_career');
      if (savedCareer) setTargetCareerIdState(savedCareer);

      const savedApps = localStorage.getItem('ks_applications');
      if (savedApps) setApplications(JSON.parse(savedApps));
    } catch (err) {
      console.error('Error loading saved state:', err);
    }
  }, []);

  // Sync to localStorage
  const setRole = (newRole: Role) => {
    setRoleState(newRole);
    localStorage.setItem('ks_role', newRole);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ks_lang', lang);
  };

  const setTargetCareerId = (id: string) => {
    setTargetCareerIdState(id);
    localStorage.setItem('ks_target_career', id);
    setStudentProfile(prev => ({ ...prev, targetCareerId: id }));
  };

  const updateStudentProfile = (updated: Partial<StudentProfile>) => {
    setStudentProfile(prev => {
      const next = { ...prev, ...updated };
      localStorage.setItem('ks_profile', JSON.stringify(next));
      return next;
    });
  };

  const addStudentSkill = (skillName: string, level: SkillLevel) => {
    setStudentProfile(prev => {
      const existing = prev.skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
      let newSkills = [...prev.skills];
      if (existing) {
        newSkills = newSkills.map(s => s.name.toLowerCase() === skillName.toLowerCase() ? { ...s, level, verified: true } : s);
      } else {
        newSkills.push({
          skillId: 'sk-' + Date.now(),
          name: skillName,
          level,
          verified: true,
          score: 80
        });
      }
      const updated = { ...prev, skills: newSkills };
      localStorage.setItem('ks_profile', JSON.stringify(updated));
      return updated;
    });
  };

  const removeStudentSkill = (skillName: string) => {
    setStudentProfile(prev => {
      const newSkills = prev.skills.filter(s => s.name.toLowerCase() !== skillName.toLowerCase());
      const updated = { ...prev, skills: newSkills };
      localStorage.setItem('ks_profile', JSON.stringify(updated));
      return updated;
    });
  };

  const toggleSaveJob = (jobId: string) => {
    setSavedJobIds(prev => prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]);
  };

  const calculateJobMatchScore = (requiredSkills: { name: string; level: SkillLevel }[]): number => {
    if (!requiredSkills || requiredSkills.length === 0) return 100;
    const studentSkillsMap = new Map(studentProfile.skills.map(s => [s.name.toLowerCase(), s.level]));
    let matchedScore = 0;

    requiredSkills.forEach(req => {
      const studentLevel = studentSkillsMap.get(req.name.toLowerCase());
      if (studentLevel) {
        matchedScore += 1;
      }
    });

    const percent = Math.round((matchedScore / requiredSkills.length) * 100);
    return Math.max(35, percent); // base score visualization fallback
  };

  const applyForJob = (jobId: string): boolean => {
    const job = postedJobs.find(j => j.id === jobId);
    if (!job) return false;
    const existing = applications.find(a => a.jobId === jobId);
    if (existing) return false;

    const matchScore = calculateJobMatchScore(job.requiredSkills);
    const newApp: Application = {
      id: 'app-' + Date.now(),
      jobId,
      jobTitle: job.title,
      company: job.company,
      studentId: studentProfile.id,
      studentName: studentProfile.fullName,
      studentEmail: studentProfile.email,
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'Applied',
      matchScore
    };

    const nextApps = [newApp, ...applications];
    setApplications(nextApps);
    localStorage.setItem('ks_applications', JSON.stringify(nextApps));
    return true;
  };

  const addPostedJob = (jobData: Omit<Job, 'id' | 'postedDate' | 'employerId'>) => {
    const newJob: Job = {
      ...jobData,
      id: 'job-' + Date.now(),
      postedDate: 'Just now',
      employerId: 'emp-me'
    };
    setPostedJobs(prev => [newJob, ...prev]);
  };

  const recordAssessmentResult = (resultData: Omit<AssessmentResult, 'id' | 'dateCompleted'>) => {
    const newRes: AssessmentResult = {
      ...resultData,
      id: 'res-' + Date.now(),
      dateCompleted: new Date().toISOString().split('T')[0]
    };
    setAssessmentResults(prev => [newRes, ...prev]);

    // If passed, auto-add/verify skill in student profile!
    if (newRes.passed) {
      addStudentSkill(newRes.skillName, newRes.assignedLevel);
    }
  };

  const t = (key: keyof typeof TRANSLATIONS['en']): string => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS['en'];
    return dict[key] || TRANSLATIONS['en'][key] || key;
  };

  const targetCareer = CAREERS_CATALOG.find(c => c.id === targetCareerId) || CAREERS_CATALOG[0];

  return (
    <KaushalSetuContext.Provider
      value={{
        role,
        setRole,
        language,
        setLanguage,
        lowBandwidth,
        setLowBandwidth,
        studentProfile,
        updateStudentProfile,
        addStudentSkill,
        removeStudentSkill,
        targetCareerId,
        setTargetCareerId,
        targetCareer,
        savedJobIds,
        toggleSaveJob,
        applications,
        applyForJob,
        postedJobs,
        addPostedJob,
        assessmentResults,
        recordAssessmentResult,
        calculateJobMatchScore,
        t
      }}
    >
      {children}
    </KaushalSetuContext.Provider>
  );
};

export const useKaushalSetu = () => {
  const context = useContext(KaushalSetuContext);
  if (!context) {
    throw new Error('useKaushalSetu must be used within a KaushalSetuProvider');
  }
  return context;
};
