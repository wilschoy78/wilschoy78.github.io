import type { Skill } from '../types';

/**
 * Technical skills data organized by category
 * Proficiency scale: 1 (Beginner) to 5 (Expert)
 */
export const skills: Skill[] = [
  // Frontend Skills
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    proficiency: 5,
    icon: 'react',
    description: 'Advanced React development with hooks, context, and modern patterns'
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'frontend',
    proficiency: 5,
    icon: 'angular',
    description: 'Comprehensive Angular framework experience with TypeScript'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 5,
    icon: 'typescript',
    description: 'Strong typing and advanced TypeScript features'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    proficiency: 5,
    icon: 'javascript',
    description: 'ES6+ features, async programming, and modern JavaScript'
  },
  {
    id: 'html-css',
    name: 'HTML/CSS',
    category: 'frontend',
    proficiency: 5,
    icon: 'code',
    description: 'Semantic HTML, modern CSS, Flexbox, Grid, and responsive design'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    proficiency: 4,
    icon: 'palette',
    description: 'Utility-first CSS framework for rapid UI development'
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'frontend',
    proficiency: 4,
    icon: 'smartphone',
    description: 'Cross-platform mobile app development'
  },

  // Backend Skills
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    proficiency: 5,
    icon: 'server',
    description: 'Server-side JavaScript development and API creation'
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    proficiency: 5,
    icon: 'layers',
    description: 'Enterprise-grade Node.js framework with TypeScript'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    proficiency: 5,
    icon: 'zap',
    description: 'Fast and minimalist web framework for Node.js'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'backend',
    proficiency: 4,
    icon: 'coffee',
    description: 'Java Enterprise Edition and Spring framework'
  },
  {
    id: 'rest-api',
    name: 'REST APIs',
    category: 'backend',
    proficiency: 5,
    icon: 'api',
    description: 'RESTful API design, implementation, and documentation'
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'backend',
    proficiency: 3,
    icon: 'share-2',
    description: 'Query language and runtime for APIs'
  },

  // Database Skills
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    proficiency: 4,
    icon: 'database',
    description: 'NoSQL database design and optimization'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    proficiency: 4,
    icon: 'database',
    description: 'Relational database design and complex queries'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 4,
    icon: 'database',
    description: 'Advanced PostgreSQL features and performance tuning'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    proficiency: 3,
    icon: 'zap',
    description: 'In-memory data structure store for caching'
  },

  // Tools & Technologies
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    proficiency: 5,
    icon: 'git-branch',
    description: 'Version control, branching strategies, and collaboration'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'tools',
    proficiency: 4,
    icon: 'package',
    description: 'Containerization and deployment'
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'tools',
    proficiency: 3,
    icon: 'cloud',
    description: 'Cloud services and deployment'
  },
  {
    id: 'jest',
    name: 'Jest',
    category: 'tools',
    proficiency: 4,
    icon: 'check-circle',
    description: 'JavaScript testing framework'
  },
  {
    id: 'webpack',
    name: 'Webpack',
    category: 'tools',
    proficiency: 3,
    icon: 'package',
    description: 'Module bundler and build tool'
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'tools',
    proficiency: 4,
    icon: 'zap',
    description: 'Fast build tool and development server'
  }
];

/**
 * Get skills by category
 */
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

/**
 * Get skills by proficiency level
 */
export const getSkillsByProficiency = (minProficiency: number): Skill[] => {
  return skills.filter(skill => skill.proficiency >= minProficiency);
};

/**
 * Get top skills (proficiency 4 or 5)
 */
export const getTopSkills = (): Skill[] => {
  return skills.filter(skill => skill.proficiency >= 4);
};

/**
 * Skill categories for filtering
 */
export const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: 'monitor' },
  { id: 'backend', name: 'Backend', icon: 'server' },
  { id: 'database', name: 'Database', icon: 'database' },
  { id: 'tools', name: 'Tools', icon: 'wrench' }
] as const;