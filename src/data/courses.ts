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
      {
        title: 'Module 1: HTML5 Semantics & Structure',
        duration: '3 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/pQN-pnXPaVg',
        articleContent: 'Understand modern HTML5 semantic elements like header, main, section, nav, footer, forms, and input validation.'
      },
      {
        title: 'Module 2: CSS3 Grid & Flexbox Mastering',
        duration: '5 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/3YW65K6LcIA',
        articleContent: 'Build complex responsive layouts effortlessly using CSS Grid and Flexbox alignment rules.'
      },
      {
        title: 'Module 3: JavaScript Core Fundamentals',
        duration: '8 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/hdI2bqOjy3c',
        articleContent: 'Master variables, loops, array methods (map, filter, reduce), DOM events, and Async/Await in JavaScript.'
      },
      {
        title: 'Module 4: Practical Capstone Website',
        duration: '8 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/zJSY8tbf_ys',
        articleContent: 'Build and style a full interactive web dashboard with DOM events and local storage.'
      }
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
      {
        title: 'Module 1: Utility Classes & Setup',
        duration: '3 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/dFgzHOX84xQ',
        articleContent: 'Learn Tailwind utility classes, custom theme spacing, colors, and configuration.'
      },
      {
        title: 'Module 2: Dark Mode & Responsive Layouts',
        duration: '4 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/_9mTJ84uL1Q',
        articleContent: 'Implement dark mode toggles, micro-animations, and fluid responsive design breakpoints.'
      },
      {
        title: 'Module 3: Advanced UI Components & Micro-Interactions',
        duration: '5 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/ft30zcMlFao',
        articleContent: 'Build sleek modern navigation bars, cards, modals, and interactive drop-downs with Tailwind.'
      }
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
      {
        title: 'Module 1: React State & Hooks',
        duration: '8 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/w7ejDZ8SWv8',
        articleContent: 'Learn useState, useEffect, useContext, custom hooks, and component lifecycle in React.'
      },
      {
        title: 'Module 2: Next.js App Router Architecture',
        duration: '10 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/wm5gMKCORL4',
        articleContent: 'Build server-side rendered pages using Next.js 14+ App Router, layouts, and API routes.'
      },
      {
        title: 'Module 3: TypeScript with React',
        duration: '7 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/SqcY0GlETPk',
        articleContent: 'Add strict type safety to React props, component states, and async API requests with TypeScript.'
      },
      {
        title: 'Module 4: Full Stack CRUD & Deployment',
        duration: '10 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/Zq5fmkH0T78',
        articleContent: 'Deploy full stack web applications on Vercel with database connections.'
      }
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
      {
        title: 'Module 1: Node.js & Express Fundamentals',
        duration: '7 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/Oe421EPjeBE',
        articleContent: 'Build backend HTTP server APIs using Express.js, routing, and middleware.'
      },
      {
        title: 'Module 2: Relational Databases & SQL Queries',
        duration: '9 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/HXV3zeQKqGY',
        articleContent: 'Write relational SQL queries, joins, indexes, transactions, and foreign key relations.'
      },
      {
        title: 'Module 3: Authentication & Security Best Practices',
        duration: '6 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/mbsmsi7l3r4',
        articleContent: 'Implement JWT tokens, bcrypt password hashing, and API authorization middleware.'
      },
      {
        title: 'Module 4: API Testing & Deployment',
        duration: '6 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/rltfdjcXjmk',
        articleContent: 'Test REST APIs with Postman, handle error logging, and deploy to cloud servers.'
      }
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
      {
        title: 'Module 1: Python Essentials & Data Structures',
        duration: '8 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/rfscVS0vtbw',
        articleContent: 'Python syntax, lists, dictionaries, object-oriented programming, and file handling.'
      },
      {
        title: 'Module 2: Data Analysis with Pandas & NumPy',
        duration: '10 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/vmEHCJofslg',
        articleContent: 'Clean datasets, calculate statistics, and plot visualizations with Pandas and Matplotlib.'
      },
      {
        title: 'Module 3: Machine Learning with Scikit-Learn',
        duration: '14 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/7eh4d6sabA0',
        articleContent: 'Train regression, classification, and clustering machine learning models.'
      }
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
      {
        title: 'Module 1: Design Principles & Figma Layouts',
        duration: '6 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/c9Wg6Cb_YlU',
        articleContent: 'Learn Figma tools, auto-layout, typography hierarchy, and color palettes.'
      },
      {
        title: 'Module 2: Interactive Wireframing & Prototyping',
        duration: '8 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/FTFaQWZBqQ8',
        articleContent: 'Create interactive click-through prototypes and component variants.'
      },
      {
        title: 'Module 3: Design Systems & Developer Hand-off',
        duration: '6 hrs',
        videoUrl: 'https://www.youtube-nocookie.com/embed/gu0qR-rG3i0',
        articleContent: 'Build scalable design systems and export specifications for frontend developers.'
      }
    ]
  }
];

