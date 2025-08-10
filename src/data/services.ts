/**
 * Services data for the portfolio website
 * Contains information about professional services offered
 */

import type { Service } from '../types/index';

export const services: Service[] = [
  {
    id: 'it-consultation',
    title: 'IT Consultation',
    description: 'IT consultation provides expert advice and guidance to businesses seeking to optimize their technology strategies. Consultants assess current IT systems, identify inefficiencies, and recommend solutions aligned with business goals. Services cover areas such as cybersecurity, infrastructure, software selection, cloud adoption, and digital transformation. IT consultants offer tailored strategies, cost-effective solutions, and risk management insights. Collaborating with IT consultants enhances operational efficiency, security, and innovation, ultimately driving business success in a rapidly evolving technological landscape.',
    features: [
      'Technology Strategy Assessment',
      'System Architecture Design',
      'Cybersecurity Evaluation',
      'Cloud Migration Planning',
      'Digital Transformation Roadmap',
      'Cost Optimization Analysis',
      'Risk Management Strategies',
      'Infrastructure Modernization'
    ],
    technologies: ['Cloud Platforms', 'Security Tools', 'Enterprise Software', 'DevOps Tools'],
    icon: 'Users',
    category: 'consultation',
    featured: true
  },
  {
    id: 'erpnext-implementation',
    title: 'ERPNext Implementation',
    description: 'Comprehensive ERPNext implementation services for businesses looking to streamline their operations with a powerful, open-source ERP solution. From initial assessment and customization to deployment and training, I provide end-to-end ERPNext implementation that transforms business processes and enhances operational efficiency.',
    features: [
      'Business Process Analysis',
      'ERPNext Customization',
      'Data Migration & Integration',
      'Module Configuration',
      'User Training & Support',
      'Workflow Automation',
      'Reporting & Analytics Setup',
      'Post-Implementation Support'
    ],
    technologies: ['ERPNext', 'Python', 'Frappe Framework', 'MariaDB', 'Redis', 'Nginx'],
    icon: 'Settings',
    category: 'implementation',
    featured: true
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description: 'Custom software development involves creating tailored software solutions that precisely match a company\'s unique needs. This process includes thorough analysis, design, coding, and testing to create a bespoke application. Unlike off-the-shelf software, custom solutions address specific challenges and leverage the latest technologies. They offer scalability, enhanced efficiency, and a competitive edge. Custom software development ensures seamless integration, personalized features, and ongoing support, leading to optimized business processes and outcomes.',
    features: [
      'Requirements Analysis & Planning',
      'Custom Application Design',
      'Full-Stack Development',
      'API Development & Integration',
      'Database Design & Optimization',
      'Quality Assurance & Testing',
      'Deployment & DevOps',
      'Ongoing Maintenance & Support'
    ],
    technologies: ['Java Enterprise Edition', 'Angular', 'React', 'Node.js', 'NestJS', 'MySQL', 'MongoDB', 'TypeScript'],
    icon: 'Settings',
    category: 'development',
    featured: true
  },
  {
    id: 'wordpress-development',
    title: 'Website Development using WordPress',
    description: 'Create a professional website using the WordPress platform. Utilize its user-friendly content management system to easily customize and manage content. Choose a suitable theme, add pages (Home, About, Services, Contact), and enhance functionality with plugins. Optimize for search engines, test for responsiveness, ensure security, and launch the website when ready. Ongoing maintenance includes updates and content additions.',
    features: [
      'Custom Theme Development',
      'Plugin Integration & Customization',
      'Content Management Setup',
      'SEO Optimization',
      'Responsive Design Implementation',
      'Security Configuration',
      'Performance Optimization',
      'Ongoing Maintenance & Updates'
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    icon: 'Settings',
    category: 'development',
    featured: true
  },
  {
    id: 'moodle-lms-implementation',
    title: 'LMS Implementation using Moodle',
    description: 'Specializes in the seamless implementation of Learning Management Systems (LMS) utilizing Moodle, a robust open-source platform renowned for its flexibility and extensive features tailored for educational purposes. With a keen focus on customization and user-friendly interface design, our team ensures that institutions and organizations can effortlessly deploy Moodle to enhance their learning environments, streamline course management, facilitate communication, and optimize student engagement. From initial consultation to ongoing support, we are committed to empowering clients with a comprehensive Moodle solution that meets their specific needs and maximizes the potential of online education.',
    features: [
      'Moodle Installation & Configuration',
      'Custom Theme & Interface Design',
      'Course Structure Development',
      'User Management & Roles Setup',
      'Assessment & Grading Tools',
      'Communication & Collaboration Features',
      'Mobile Learning Optimization',
      'Training & Ongoing Support'
    ],
    technologies: ['Moodle', 'PHP', 'MySQL', 'Apache', 'HTML5', 'CSS3', 'JavaScript'],
    icon: 'Settings',
    category: 'implementation',
    featured: true
  }
];

/**
 * Get all services
 */
export const getAllServices = (): Service[] => services;

/**
 * Get featured services
 */
export const getFeaturedServices = (): Service[] => 
  services.filter(service => service.featured);

/**
 * Get services by category
 */
export const getServicesByCategory = (category: Service['category']): Service[] => 
  services.filter(service => service.category === category);

/**
 * Get service by ID
 */
export const getServiceById = (id: string): Service | undefined => 
  services.find(service => service.id === id);