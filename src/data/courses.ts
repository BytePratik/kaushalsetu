import { Course } from '../types';

export const COURSES_CATALOG: Course[] = [
  {
    id: 'crs-1',
    title: 'Modern Web Development Bootcamp: HTML, CSS & Modern JS',
    category: 'Web Development',
    provider: 'KaushalSetu Academy',
    instructor: 'Aarav Sharma',
    durationHours: 24,
    level: 'Beginner',
    rating: 4.8,
    enrolledStudents: 3420,
    thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop&q=80',
    description: 'Learn modern web standards, HTML5 semantic layout, CSS flexbox/grid, and JavaScript DOM manipulation.',
    skillsTaught: ['HTML5 & CSS3', 'JavaScript', 'Tailwind CSS'],
    modules: [
      { title: 'Module 1: HTML5 Semantics & Structure', duration: '3 hrs', articleContent: 'Understand modern HTML5 tags like header, main, section, nav, footer, and form controls.' },
      { title: 'Module 2: CSS3 Grid & Flexbox Mastering', duration: '5 hrs', articleContent: 'Build complex responsive web layouts effortlessly using CSS Grid and Flexbox.' },
      { title: 'Module 3: JavaScript Core Fundamentals', duration: '8 hrs', articleContent: 'Variables, loops, functions, array methods (map, filter, reduce), promises, and async/await.' },
      { title: 'Module 4: Practical Capstone Website', duration: '8 hrs', articleContent: 'Build and style an interactive web dashboard with DOM events.' }
    ]
  },
  {
    id: 'crs-2',
    title: 'Tailwind CSS Modern UI Engineering',
    category: 'Web Development',
    provider: 'KaushalSetu Skill Hub',
    instructor: 'Priya Verma',
    durationHours: 12,
    level: 'Intermediate',
    rating: 4.9,
    enrolledStudents: 2150,
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    description: 'Design beautiful, glassmorphic, responsive user interfaces rapidly with utility-first Tailwind CSS.',
    skillsTaught: ['Tailwind CSS', 'HTML5 & CSS3'],
    modules: [
      { title: 'Module 1: Utility Classes & Configuration', duration: '3 hrs' },
      { title: 'Module 2: Dark Mode & Glassmorphism', duration: '4 hrs' },
      { title: 'Module 3: Responsive Breakpoints & Animations', duration: '5 hrs' }
    ]
  },
  {
    id: 'crs-3',
    title: 'Full Stack React & Next.js Masterclass',
    category: 'Web Development',
    provider: 'TechBharat Institute',
    instructor: 'Rohan Mehta',
    durationHours: 35,
    level: 'Intermediate',
    rating: 4.9,
    enrolledStudents: 4890,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    description: 'Master React 18+, Server Components, Next.js App Router, state management, and Server Actions.',
    skillsTaught: ['React.js', 'Next.js', 'TypeScript', 'JavaScript'],
    modules: [
      { title: 'Module 1: React State & Custom Hooks', duration: '8 hrs' },
      { title: 'Module 2: Next.js App Router Architecture', duration: '10 hrs' },
      { title: 'Module 3: TypeScript with React', duration: '7 hrs' },
      { title: 'Module 4: Full Stack CRUD & Vercel Deployment', duration: '10 hrs' }
    ]
  },
  {
    id: 'crs-4',
    title: 'Backend API Engineering with Node.js & SQL',
    category: 'Backend Development',
    provider: 'KaushalSetu Academy',
    instructor: 'Vikram Singh',
    durationHours: 28,
    level: 'Intermediate',
    rating: 4.7,
    enrolledStudents: 1980,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    description: 'Construct secure RESTful APIs, JWT authentication, SQL database queries, and indexing performance.',
    skillsTaught: ['Node.js', 'SQL & Database Design', 'REST API & GraphQL'],
    modules: [
      { title: 'Module 1: Node.js & Express Fundamentals', duration: '7 hrs' },
      { title: 'Module 2: Relational Databases & SQL Queries', duration: '9 hrs' },
      { title: 'Module 3: Authentication & Security Best Practices', duration: '6 hrs' },
      { title: 'Module 4: API Deployment & Testing', duration: '6 hrs' }
    ]
  },
  {
    id: 'crs-6',
    title: 'Python for Data Science & Machine Learning',
    category: 'Data & AI',
    provider: 'DataSkill India',
    instructor: 'Dr. Ananya Roy',
    durationHours: 32,
    level: 'Intermediate',
    rating: 4.9,
    enrolledStudents: 5200,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    description: 'Master Python, Pandas, NumPy, Scikit-Learn, and build predictive machine learning models.',
    skillsTaught: ['Python', 'SQL & Database Design', 'Machine Learning Basics'],
    modules: [
      { title: 'Module 1: Python Essentials & Data Structures', duration: '8 hrs' },
      { title: 'Module 2: Data Manipulation with Pandas & NumPy', duration: '10 hrs' },
      { title: 'Module 3: Machine Learning Algorithms with Scikit-Learn', duration: '14 hrs' }
    ]
  },
  {
    id: 'crs-9',
    title: 'UI/UX Design Masterclass with Figma',
    category: 'Design',
    provider: 'DesignBharat',
    instructor: 'Sneha Kulkarni',
    durationHours: 20,
    level: 'Beginner',
    rating: 4.8,
    enrolledStudents: 3100,
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80',
    description: 'Design interactive mobile & web prototypes, create scalable design systems, and present to clients.',
    skillsTaught: ['UI/UX Design & Figma', 'Communication & Presentation'],
    modules: [
      { title: 'Module 1: Design Principles & Figma Layouts', duration: '6 hrs' },
      { title: 'Module 2: Wireframing & Interactive Prototyping', duration: '8 hrs' },
      { title: 'Module 3: Design Systems & Hand-off', duration: '6 hrs' }
    ]
  }
];
