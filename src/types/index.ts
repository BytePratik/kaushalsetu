export type Role = 'student' | 'employer' | 'admin' | 'guest';

export type Language = 'en' | 'hi';

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: SkillLevel;
  icon?: string;
  description: string;
}

export interface StudentSkill {
  skillId: string;
  name: string;
  level: SkillLevel;
  verified: boolean;
  score?: number;
}

export interface Career {
  id: string;
  title: string;
  category: string;
  description: string;
  avgSalary: string;
  demand: 'High' | 'Very High' | 'Moderate';
  requiredSkills: {
    skillId: string;
    name: string;
    level: SkillLevel;
    priority: 'High' | 'Medium' | 'Low';
  }[];
  roadmap: {
    step: number;
    title: string;
    description: string;
    duration: string;
    skillsToLearn: string[];
    recommendedCourseIds: string[];
    practiceProject: string;
  }[];
}

export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Assessment {
  id: string;
  skillId: string;
  skillName: string;
  title: string;
  category: string;
  durationMinutes: number;
  totalQuestions: number;
  passingScorePercentage: number;
  description: string;
  questions: Question[];
}

export interface AssessmentResult {
  id: string;
  assessmentId: string;
  skillName: string;
  scorePercentage: number;
  passed: boolean;
  assignedLevel: SkillLevel;
  dateCompleted: string;
  correctAnswers: number;
  totalQuestions: number;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  provider: string;
  instructor: string;
  durationHours: number;
  level: SkillLevel;
  rating: number;
  enrolledStudents: number;
  thumbnail: string;
  description: string;
  skillsTaught: string[];
  modules: {
    title: string;
    duration: string;
    videoUrl?: string;
    articleContent?: string;
  }[];
}

export interface Job {
  id: string;
  type: 'job' | 'internship';
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  workMode: 'Remote' | 'On-site' | 'Hybrid';
  salaryOrStipend: string;
  experienceRequired: string;
  category: string;
  postedDate: string;
  deadline: string;
  description: string;
  requiredSkills: {
    name: string;
    level: SkillLevel;
  }[];
  responsibilities: string[];
  perks: string[];
  employerId: string;
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  appliedDate: string;
  status: 'Applied' | 'Under Review' | 'Shortlisted' | 'Interview Scheduled' | 'Selected' | 'Rejected';
  resumeUrl?: string;
  matchScore: number;
}

export interface StudentProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  education: {
    degree: string;
    institution: string;
    passingYear: string;
    cgpaOrPercentage: string;
  }[];
  skills: StudentSkill[];
  targetCareerId?: string;
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  projects: {
    title: string;
    techStack: string[];
    description: string;
    githubUrl?: string;
    liveUrl?: string;
  }[];
  certificates: {
    title: string;
    issuer: string;
    date: string;
  }[];
  achievements: string[];
  summary: string;
}

export interface AIMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  actionSuggestions?: {
    label: string;
    href: string;
  }[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'job' | 'assessment' | 'course' | 'application';
}
