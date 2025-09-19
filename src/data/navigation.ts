import type { NavItem, SocialLink } from '../types/index';

/**
 * Main navigation items
 */
export const navigationItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: 'home'
  },
  {
    name: 'About',
    href: '/about',
    icon: 'user'
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: 'folder'
  },
  {
    name: 'Education',
    href: '/education',
    icon: 'academic-cap'
  },
  {
    name: 'Services',
    href: '/services',
    icon: 'briefcase'
  },
  {
    name: 'Skills',
    href: '/skills',
    icon: 'code'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: 'mail'
  }
];

/**
 * Social media and professional links
 */
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/wilschoy78',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/wilson-gayo',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/wilsongayo',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'mailto:wilson.gayo@example.com',
    icon: 'mail'
  }
];

/**
 * Contact information
 */
export const contactInfo = {
  email: 'wilson.gayo@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Remote / Available Worldwide',
  availability: 'Available for freelance projects',
  responseTime: 'Usually responds within 24 hours',
  timezone: 'UTC+0'
};

/**
 * Professional summary
 */
export const professionalSummary = {
  title: 'Freelance Software Developer',
  subtitle: 'Full-Stack Developer specializing in Web Applications & APIs',
  description: 'I am a self-employed full-stack software developer specializing in streamlining the development of web applications and APIs. I have a strong command over various tools including Java Enterprise Edition, Angular, NodeJS, MySQL, and MongoDB. Presently, I am utilizing NestJS to efficiently construct RESTful APIs while maintaining a well-organized data flow design.',
  yearsOfExperience: 7,
  projectsCompleted: 50,
  clientsSatisfied: 25,
  technologiesMastered: 15
};