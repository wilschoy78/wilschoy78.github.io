// Project interface for portfolio projects
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'api' | 'tool';
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
}

// Skill interface for technical skills
export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  proficiency: 1 | 2 | 3 | 4 | 5; // 1-5 scale
  icon?: string;
  description?: string;
}

// Contact form interface
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Experience interface for work history
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
  website?: string;
  document?: string;
}

// Navigation item interface
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

// Social link interface
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Service interface for professional services
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies?: string[];
  icon: string;
  category: 'consultation' | 'implementation' | 'development';
  featured: boolean;
  links?: {
    label: string;
    url: string;
    description?: string;
    highlight?: boolean;
  }[];
}

// Certification interface
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl?: string;
  description?: string;
}