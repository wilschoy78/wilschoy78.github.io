import type { Project } from '../types';

/**
 * Portfolio projects data
 * Contains information about completed and ongoing projects
 */
export const projects: Project[] = [
  {
    id: 'colegio-de-alicia-website',
    title: 'Colegio De Alicia Official Website',
    description: 'Public-facing website for Colegio De Alicia, Alicia, Bohol',
    longDescription: 'A modern, responsive institutional website for Colegio De Alicia featuring program information, community highlights, mission and values, and future academic offerings. The site emphasizes accessibility, clear content structure, and fast performance for a broad audience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=college%20website%20homepage%20modern%20responsive%20institutional%20site%20clean%20design%20blue%20theme&image_size=landscape_4_3',
    demoUrl: 'https://www.colegiodealicia.com/',
    githubUrl: '',
    featured: true,
    category: 'web',
    status: 'in-progress',
    startDate: '2025-09-01'
  },
  {
    id: 'colegio-de-alicia-mis-login',
    title: 'Colegio De Alicia School Management System (Login)',
    description: 'Login portal for Colegio De Alicia School Management System',
    longDescription: 'Secure login interface for the Colegio De Alicia MIS, providing authenticated access for faculty and staff. Focused on security, usability, and clear user flows.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=school%20management%20system%20login%20page%20secure%20form%20clean%20ui%20blue%20theme&image_size=landscape_4_3',
    demoUrl: 'https://mis.colegiodealicia.com/login',
    githubUrl: '',
    featured: true,
    category: 'web',
    status: 'in-progress',
    startDate: '2025-09-01'
  },
  {
    id: 'array-data-structures-3d',
    title: 'Interactive 3D Array Data Structures Presentation',
    description: 'Educational 3D visualization demonstrating fundamental array concepts and operations',
    longDescription: 'An immersive educational presentation that teaches array data structures through interactive 3D visualizations. Features animated demonstrations of array operations including insertion, deletion, searching, and sorting. Built with Three.js for 3D graphics, GSAP for smooth animations, and includes comprehensive code examples with syntax highlighting. Perfect for computer science education and demonstrating complex programming concepts in an engaging visual format.',
    technologies: ['Three.js', 'JavaScript', 'GSAP', 'HTML5', 'CSS3', 'Highlight.js', 'Tailwind CSS'],
    imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=3d%20interactive%20array%20data%20structure%20visualization%20educational%20presentation%20programming%20concepts%20modern%20interface&image_size=landscape_4_3',
    demoUrl: '/arrays.html',
    githubUrl: 'https://github.com/wilschoy78/array-visualization',
    featured: true,
    category: 'tool',
    status: 'completed',
    startDate: '2024-12-01',
    endDate: '2024-12-31'
  },
  {
    id: 'erpnext-retail-implementation',
    title: 'ERPNext Implementation for Retail Appliance Company',
    description: 'Comprehensive ERP system implementation for a retail appliance company using ERPNext framework',
    longDescription: 'Currently implementing a complete ERPNext solution for a retail appliance company to streamline their business operations. The project includes modules for inventory management, sales, purchasing, accounting, and customer relationship management. Custom workflows and reports are being developed to meet specific business requirements.',
    technologies: ['ERPNext', 'Python', 'Frappe Framework', 'MySQL', 'JavaScript', 'Jinja2'],
    imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20erp%20system%20dashboard%20retail%20appliance%20inventory%20management%20business%20interface%20professional%20design&image_size=landscape_4_3',
    githubUrl: 'https://github.com/wilschoy78/erpnext-retail-implementation',
    featured: true,
    category: 'web',
    status: 'in-progress',
    startDate: '2024-10-01'
  },
  {
    id: 'emr-cashier-system',
    title: 'EMR Cashier-Supported Inventory and Sales System',
    description: 'Enhanced Manual Recording system that automates inventory tracking, order creation, and report generation',
    longDescription: 'Ditch the time-consuming manual tasks! Enhanced Manual Recording empowers your cashiers with a user-friendly system that automates inventory tracking, order creation, and report generation. Say goodbye to error-prone counts and hello to real-time data, effortless order management, and automated daily reports. This translates to happier cashiers, improved efficiency, and better data-driven decisions, ultimately boosting your business performance.',
    technologies: ['Java Enterprise Edition', 'Angular', 'MySQL', 'Spring Boot', 'TypeScript', 'Bootstrap'],
    imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20point%20of%20sale%20cashier%20system%20interface%20inventory%20management%20dashboard%20clean%20professional%20design&image_size=landscape_4_3',
    githubUrl: 'https://github.com/wilschoy78/emr-cashier-system',
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: '2023-01-01',
    endDate: '2023-12-31'
  },
  {
    id: 'nestjs-api-platform',
    title: 'Enterprise API Platform',
    description: 'Scalable RESTful API platform built with NestJS and MongoDB',
    longDescription: 'A robust enterprise-grade API platform featuring microservices architecture, automated testing, comprehensive documentation, and real-time monitoring. Built with NestJS framework for optimal performance and maintainability.',
    technologies: ['NestJS', 'MongoDB', 'TypeScript', 'JWT', 'Swagger', 'Docker'],
    imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=api%20microservices%20architecture%20diagram%20with%20database%20connections%20modern%20enterprise%20system%20design&image_size=landscape_4_3',
    githubUrl: 'https://github.com/wilschoy78/nestjs-api-platform',
    featured: true,
    category: 'api',
    status: 'completed',
    startDate: '2023-06-01',
    endDate: '2023-11-30'
  },
  {
    id: 'angular-enterprise-dashboard',
    title: 'Enterprise Analytics Dashboard',
    description: 'Comprehensive business intelligence dashboard built with Angular',
    longDescription: 'A feature-rich enterprise dashboard providing real-time analytics, data visualization, user management, and reporting capabilities. Built with Angular and integrated with multiple data sources for comprehensive business insights.',
    technologies: ['Angular', 'TypeScript', 'Chart.js', 'RxJS', 'Angular Material', 'MySQL'],
    imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=enterprise%20analytics%20dashboard%20with%20multiple%20charts%20graphs%20data%20tables%20modern%20business%20interface&image_size=landscape_4_3',
    githubUrl: 'https://github.com/wilschoy78/angular-enterprise-dashboard',
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: '2022-09-01',
    endDate: '2023-02-28'
  },
  {
    id: 'nodejs-microservices',
    title: 'Node.js Microservices Architecture',
    description: 'Distributed microservices system with Node.js and MongoDB',
    longDescription: 'A scalable microservices architecture built with Node.js, featuring service discovery, API gateway, event-driven communication, and containerized deployment. Designed for high availability and horizontal scaling.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Docker', 'Redis', 'RabbitMQ'],
    imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=microservices%20architecture%20diagram%20with%20containers%20api%20gateway%20distributed%20system%20design&image_size=landscape_4_3',
    githubUrl: 'https://github.com/wilschoy78/nodejs-microservices',
    featured: false,
    category: 'api',
    status: 'completed',
    startDate: '2022-03-01',
    endDate: '2022-08-31'
  },
  {
    id: 'java-web-application',
    title: 'Java Enterprise Web Application',
    description: 'Full-stack web application using Java EE and MySQL',
    longDescription: 'A comprehensive enterprise web application built with Java Enterprise Edition, featuring user authentication, role-based access control, data management, and reporting. Demonstrates expertise in Java EE technologies and enterprise patterns.',
    technologies: ['Java Enterprise Edition', 'JSF', 'MySQL', 'JPA', 'CDI', 'Maven'],
    imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=java%20enterprise%20web%20application%20interface%20with%20forms%20tables%20professional%20business%20design&image_size=landscape_4_3',
    githubUrl: 'https://github.com/wilschoy78/java-enterprise-app',
    featured: false,
    category: 'web',
    status: 'completed',
    startDate: '2021-10-01',
    endDate: '2022-02-28'
  }
];

/**
 * Get featured projects
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

/**
 * Get projects by status
 */
export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projects.filter(project => project.status === status);
};
