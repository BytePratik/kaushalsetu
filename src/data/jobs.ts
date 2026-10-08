import { Job } from '../types';

export const JOBS_CATALOG: Job[] = [
  {
    id: 'job-1',
    type: 'job',
    title: 'Junior Full Stack Developer',
    company: 'TechWave Solutions',
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=150&auto=format&fit=crop&q=80',
    location: 'Bengaluru, KA (Hybrid)',
    workMode: 'Hybrid',
    salaryOrStipend: '₹7.5 - ₹9.0 LPA',
    experienceRequired: '0 - 2 Years',
    category: 'Software Engineering',
    postedDate: '2 days ago',
    deadline: '2026-11-15',
    description: 'We are seeking an enthusiastic Junior Full Stack Developer to build modern React & Next.js frontend applications and Node.js microservices.',
    requiredSkills: [
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React.js', level: 'Intermediate' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'SQL & Database Design', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Intermediate' }
    ],
    responsibilities: [
      'Develop responsive user interfaces using Next.js & React',
      'Create performant backend REST APIs with Express & SQL databases',
      'Collaborate with UI/UX designers and senior engineering leads',
      'Write clean, well-tested code following Git branching standards'
    ],
    perks: ['Health Insurance', 'Remote Work Options', 'Learning Allowance', 'Performance Bonus'],
    employerId: 'emp-1'
  },
  {
    id: 'job-2',
    type: 'internship',
    title: 'Frontend React Engineering Intern',
    company: 'Nexus Innovations',
    companyLogo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150&auto=format&fit=crop&q=80',
    location: 'Remote',
    workMode: 'Remote',
    salaryOrStipend: '₹25,000 / month',
    experienceRequired: 'Fresher / Final Year',
    category: 'Web Development',
    postedDate: '1 day ago',
    deadline: '2026-11-01',
    description: 'Join our fast-growing SaaS startup as a Frontend Intern. Convert Figma prototypes into interactive React components with high visual polish.',
    requiredSkills: [
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React.js', level: 'Beginner' },
      { name: 'HTML5 & CSS3', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Beginner' }
    ],
    responsibilities: [
      'Build reusable React UI components',
      'Integrate REST APIs with frontend state',
      'Optimize web pages for mobile accessibility'
    ],
    perks: ['Flexible Working Hours', 'Certificate of Completion', 'Pre-Placement Offer (PPO) Opportunity'],
    employerId: 'emp-2'
  },
  {
    id: 'job-3',
    type: 'job',
    title: 'Associate Data Scientist',
    company: 'Analytics India Corp',
    companyLogo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&auto=format&fit=crop&q=80',
    location: 'Gurugram, HR (On-site)',
    workMode: 'On-site',
    salaryOrStipend: '₹9.0 - ₹12.0 LPA',
    experienceRequired: '1 - 3 Years',
    category: 'Data & AI',
    postedDate: '3 days ago',
    deadline: '2026-11-20',
    description: 'Analyze large-scale e-commerce datasets, create machine learning models, and present interactive PowerBI dashboards to executive teams.',
    requiredSkills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL & Database Design', level: 'Intermediate' },
      { name: 'Machine Learning Basics', level: 'Intermediate' },
      { name: 'Data Visualization & PowerBI', level: 'Intermediate' }
    ],
    responsibilities: [
      'Build predictive algorithms using Scikit-Learn and Python',
      'Clean and process complex multi-table SQL relational data',
      'Present automated metrics dashboards to stakeholders'
    ],
    perks: ['Free Shuttle Service', 'Subsidized Meals', 'Annual Health Checkup'],
    employerId: 'emp-3'
  },
  {
    id: 'job-4',
    type: 'internship',
    title: 'UI/UX Design Intern',
    company: 'CreateCraft Studios',
    companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&auto=format&fit=crop&q=80',
    location: 'Mumbai, MH (Hybrid)',
    workMode: 'Hybrid',
    salaryOrStipend: '₹20,000 / month',
    experienceRequired: 'Fresher',
    category: 'Design',
    postedDate: '4 days ago',
    deadline: '2026-10-30',
    description: 'Help shape user experiences for our consumer mobile applications. Design wireframes, user flows, and prototype UI screens in Figma.',
    requiredSkills: [
      { name: 'UI/UX Design & Figma', level: 'Intermediate' },
      { name: 'Communication & Presentation', level: 'Beginner' }
    ],
    responsibilities: [
      'Conduct usability interviews with prospective users',
      'Create high-fidelity interactive prototypes in Figma',
      'Maintain design system components and icon libraries'
    ],
    perks: ['Mentorship from Senior Lead', 'Certificate of Merit', 'Letter of Recommendation'],
    employerId: 'emp-4'
  }
];
