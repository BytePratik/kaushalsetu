import { Career } from '../types';

export const CAREERS_CATALOG: Career[] = [
  {
    id: 'car-1',
    title: 'Full Stack Web Developer',
    category: 'Software Engineering',
    description: 'Build complete web applications handling both frontend user interfaces and backend database APIs.',
    avgSalary: '₹6.5 - ₹14.0 LPA',
    demand: 'Very High',
    requiredSkills: [
      { skillId: 'sk-1', name: 'JavaScript', level: 'Intermediate', priority: 'High' },
      { skillId: 'sk-2', name: 'React.js', level: 'Intermediate', priority: 'High' },
      { skillId: 'sk-3', name: 'Next.js', level: 'Intermediate', priority: 'High' },
      { skillId: 'sk-4', name: 'TypeScript', level: 'Intermediate', priority: 'Medium' },
      { skillId: 'sk-5', name: 'Node.js', level: 'Intermediate', priority: 'High' },
      { skillId: 'sk-7', name: 'SQL & Database Design', level: 'Intermediate', priority: 'High' },
      { skillId: 'sk-10', name: 'Git & GitHub', level: 'Beginner', priority: 'Medium' }
    ],
    roadmap: [
      {
        step: 1,
        title: 'Frontend Foundations',
        description: 'Master HTML, CSS, JavaScript ES6+, and responsive UI techniques with Tailwind CSS.',
        duration: '4 Weeks',
        skillsToLearn: ['JavaScript', 'HTML5 & CSS3', 'Tailwind CSS'],
        recommendedCourseIds: ['crs-1', 'crs-2'],
        practiceProject: 'Build a responsive personal portfolio with interactive widgets.'
      },
      {
        step: 2,
        title: 'Modern Component Frameworks',
        description: 'Deep dive into React, state management, hooks, and Next.js full-stack features.',
        duration: '6 Weeks',
        skillsToLearn: ['React.js', 'Next.js', 'TypeScript'],
        recommendedCourseIds: ['crs-3'],
        practiceProject: 'Create a dynamic E-Commerce web app with shopping cart & filter engine.'
      },
      {
        step: 3,
        title: 'Backend API & Database Mastery',
        description: 'Build REST APIs with Node.js, Express, SQL queries, and ORM integration.',
        duration: '5 Weeks',
        skillsToLearn: ['Node.js', 'SQL & Database Design', 'REST API & GraphQL'],
        recommendedCourseIds: ['crs-4'],
        practiceProject: 'Develop a full-stack SaaS platform with authentication & database persistence.'
      },
      {
        step: 4,
        title: 'Deployment & Portfolio Production',
        description: 'Version control with Git, containerization, and hosting on Vercel or cloud servers.',
        duration: '3 Weeks',
        skillsToLearn: ['Git & GitHub', 'AWS Cloud Basics'],
        recommendedCourseIds: ['crs-5'],
        practiceProject: 'Deploy 3 end-to-end full stack projects with CI/CD pipeline.'
      }
    ]
  },
  {
    id: 'car-2',
    title: 'AI & Data Science Specialist',
    category: 'Artificial Intelligence',
    description: 'Analyze data trends, build predictive Machine Learning models, and integrate AI services into applications.',
    avgSalary: '₹8.0 - ₹18.0 LPA',
    demand: 'Very High',
    requiredSkills: [
      { skillId: 'sk-6', name: 'Python', level: 'Advanced', priority: 'High' },
      { skillId: 'sk-7', name: 'SQL & Database Design', level: 'Intermediate', priority: 'High' },
      { skillId: 'sk-12', name: 'Machine Learning Basics', level: 'Intermediate', priority: 'High' },
      { skillId: 'sk-17', name: 'Data Visualization & PowerBI', level: 'Intermediate', priority: 'Medium' }
    ],
    roadmap: [
      {
        step: 1,
        title: 'Python for Data Analysis',
        description: 'Learn core Python syntax, Pandas, NumPy, and statistical data cleaning.',
        duration: '4 Weeks',
        skillsToLearn: ['Python', 'SQL & Database Design'],
        recommendedCourseIds: ['crs-6'],
        practiceProject: 'Perform exploratory data analysis on a real-world housing dataset.'
      },
      {
        step: 2,
        title: 'Machine Learning Fundamentals',
        description: 'Understand regression, classification, clustering, and Scikit-Learn pipelines.',
        duration: '6 Weeks',
        skillsToLearn: ['Machine Learning Basics'],
        recommendedCourseIds: ['crs-7'],
        practiceProject: 'Build a customer churn prediction ML model with high accuracy.'
      },
      {
        step: 3,
        title: 'Deep Learning & AI Application Integration',
        description: 'Work with LLMs, prompt engineering, Neural Networks, and AI REST APIs.',
        duration: '5 Weeks',
        skillsToLearn: ['Python', 'REST API & GraphQL'],
        recommendedCourseIds: ['crs-8'],
        practiceProject: 'Deploy an AI-powered conversational assistant web app.'
      }
    ]
  },
  {
    id: 'car-3',
    title: 'UI/UX Product Designer',
    category: 'Design & Experience',
    description: 'Design intuitive, accessible visual interfaces, wireframes, and digital user experiences.',
    avgSalary: '₹5.5 - ₹12.0 LPA',
    demand: 'High',
    requiredSkills: [
      { skillId: 'sk-13', name: 'UI/UX Design & Figma', level: 'Advanced', priority: 'High' },
      { skillId: 'sk-8', name: 'HTML5 & CSS3', level: 'Beginner', priority: 'Medium' },
      { skillId: 'sk-19', name: 'Communication & Presentation', level: 'Intermediate', priority: 'High' }
    ],
    roadmap: [
      {
        step: 1,
        title: 'Design Principles & Figma Mastery',
        description: 'Learn color theory, grid layouts, component libraries, and auto-layout in Figma.',
        duration: '4 Weeks',
        skillsToLearn: ['UI/UX Design & Figma'],
        recommendedCourseIds: ['crs-9'],
        practiceProject: 'Design a mobile healthcare app design system with dark & light modes.'
      },
      {
        step: 2,
        title: 'User Research & Prototyping',
        description: 'Conduct user interviews, create user journey maps, wireframes, and interactive clickable prototypes.',
        duration: '4 Weeks',
        skillsToLearn: ['UI/UX Design & Figma', 'Communication & Presentation'],
        recommendedCourseIds: ['crs-10'],
        practiceProject: 'Redesign a government citizen service portal with accessibility standards.'
      }
    ]
  },
  {
    id: 'car-4',
    title: 'Cloud DevOps Engineer',
    category: 'Cloud & Infrastructure',
    description: 'Automate software delivery pipelines, manage cloud infrastructure, and monitor server reliability.',
    avgSalary: '₹7.5 - ₹16.0 LPA',
    demand: 'High',
    requiredSkills: [
      { skillId: 'sk-11', name: 'Docker & Containers', level: 'Intermediate', priority: 'High' },
      { skillId: 'sk-16', name: 'AWS Cloud Basics', level: 'Intermediate', priority: 'High' },
      { skillId: 'sk-10', name: 'Git & GitHub', level: 'Intermediate', priority: 'High' },
      { skillId: 'sk-5', name: 'Node.js', level: 'Beginner', priority: 'Medium' }
    ],
    roadmap: [
      {
        step: 1,
        title: 'Linux & Cloud Architecture',
        description: 'Master Linux terminal commands, AWS EC2, S3, IAM, and virtual networking.',
        duration: '4 Weeks',
        skillsToLearn: ['AWS Cloud Basics'],
        recommendedCourseIds: ['crs-11'],
        practiceProject: 'Deploy a multi-tier web application on AWS with custom DNS.'
      },
      {
        step: 2,
        title: 'Docker & CI/CD Pipelines',
        description: 'Containerize microservices with Docker Compose and build automated GitHub Actions workflows.',
        duration: '5 Weeks',
        skillsToLearn: ['Docker & Containers', 'Git & GitHub'],
        recommendedCourseIds: ['crs-12'],
        practiceProject: 'Automate build, test, and deployment for a Node.js microservice.'
      }
    ]
  }
];
