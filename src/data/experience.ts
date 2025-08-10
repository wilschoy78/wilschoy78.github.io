import type { Experience } from '../types';

/**
 * Professional experience and work history
 */
export const experience: Experience[] = [
  {
    id: 'questnova-systems',
    title: 'Senior Software Developer',
    company: 'Questnova Systems',
    location: 'Cebu City, Philippines',
    startDate: '2007-01-01',
    current: true,
    description: [
      'Develop Java/J2EE web applications for enterprise clients',
      'Design and implement scalable backend systems and APIs',
      'Lead technical architecture decisions for complex projects',
      'Mentor junior developers and conduct code reviews',
      'Collaborate with cross-functional teams to deliver high-quality solutions',
      'Maintain and optimize existing enterprise applications'
    ],
    technologies: ['Java', 'J2EE', 'Spring Framework', 'Hibernate', 'MySQL', 'Oracle', 'REST APIs', 'Maven']
  },
  {
    id: 'web-ninja-technologies',
    title: 'Full-Stack Developer',
    company: 'Web Ninja Technologies',
    location: 'Cebu City, Philippines',
    startDate: '2019-01-01',
    endDate: '2022-12-31',
    current: false,
    description: [
      'Developed modern web applications using Node.js and Angular',
      'Built mobile applications using Kotlin for Android and Swift for iOS',
      'Implemented MongoDB database solutions for scalable applications',
      'Created RESTful APIs and microservices architecture',
      'Collaborated with UI/UX designers to implement responsive designs',
      'Participated in agile development processes and sprint planning'
    ],
    technologies: ['Node.js', 'Angular', 'MongoDB', 'Kotlin', 'Swift', 'TypeScript', 'Express.js', 'REST APIs']
  },
  {
    id: 'summit-multi-systems',
    title: 'Software Developer',
    company: 'Summit Multi Systems',
    location: 'Cebu City, Philippines',
    startDate: '2005-01-01',
    endDate: '2006-12-31',
    current: false,
    description: [
      'Developed desktop and web applications using Java technologies',
      'Participated in software design and development lifecycle',
      'Collaborated with team members on various client projects',
      'Gained experience in enterprise software development',
      'Contributed to bug fixes and feature implementations',
      'Learned industry best practices and coding standards'
    ],
    technologies: ['Java', 'Swing', 'JDBC', 'MySQL', 'HTML', 'CSS', 'JavaScript']
  }
];

/**
 * Teaching experience
 */
export const teachingExperience: Experience[] = [
  {
    id: 'uc-main-benedicto',
    title: 'Faculty Member',
    company: 'UC-Main & Benedicto College',
    location: 'Cebu City, Philippines',
    startDate: '2022-01-01',
    current: true,
    description: [
      'Teach Data Structures using Java programming language',
      'Instruct Object-Oriented Programming (OOP) with Java',
      'Develop and deliver REST API courses using Node.js and TypeScript',
      'Teach MySQL database management and design',
      'Introduce Artificial Intelligence concepts using Python',
      'Mentor students in software development projects'
    ],
    technologies: ['Java', 'Node.js', 'TypeScript', 'MySQL', 'Python', 'REST APIs', 'Data Structures', 'OOP']
  },
  {
    id: 'uv-faculty',
    title: 'Faculty Member',
    company: 'University of the Visayas (UV)',
    location: 'Cebu City, Philippines',
    startDate: '2006-01-01',
    endDate: '2016-12-31',
    current: false,
    description: [
      'Taught computer science and information technology courses',
      'Developed curriculum for programming and database courses',
      'Supervised student thesis and capstone projects',
      'Participated in academic research and development',
      'Mentored students in various programming languages',
      'Contributed to department academic planning and assessment'
    ],
    technologies: ['Java', 'C++', 'Visual Basic', 'MySQL', 'Web Development', 'Database Design']
  },
  {
    id: 'golden-success-college',
    title: 'BSIT Chairperson/Faculty/IT Admin/ISO Officer',
    company: 'Golden Success College',
    location: 'Cebu City, Philippines',
    startDate: '2011-01-01',
    endDate: '2014-12-31',
    current: false,
    description: [
      'Led the Bachelor of Science in Information Technology program',
      'Managed IT infrastructure and systems administration',
      'Served as ISO Quality Management Officer',
      'Developed and implemented IT curriculum standards',
      'Supervised faculty and academic programs',
      'Ensured compliance with educational quality standards'
    ],
    technologies: ['Network Administration', 'System Administration', 'Quality Management', 'Curriculum Development']
  },
  {
    id: 'trade-tech',
    title: 'Faculty Member',
    company: 'Trade-Tech',
    location: 'Cebu City, Philippines',
    startDate: '2007-01-01',
    endDate: '2010-12-31',
    current: false,
    description: [
      'Taught technical and vocational IT courses',
      'Developed practical programming workshops',
      'Mentored students in hands-on technology projects',
      'Created industry-relevant training materials',
      'Collaborated with industry partners for student placements'
    ],
    technologies: ['Programming Fundamentals', 'Web Development', 'Database Management', 'Technical Training']
  }
];

/**
 * Education and certifications
 */
export const education = [
  {
    id: 'masters-it',
    institution: 'Cebu Institute of Technology (CIT)',
    degree: 'Master of Science in Information Technology',
    startDate: '2008-01-01',
    endDate: '2010-12-31',
    description: 'Advanced studies in information technology, software engineering, and research methodologies'
  },
  {
    id: 'bs-computer-science',
    institution: 'University of the Visayas (UV)',
    degree: 'Bachelor of Science in Computer Science',
    startDate: '2002-01-01',
    endDate: '2005-12-31',
    description: 'Comprehensive study of computer science fundamentals, programming, and software development'
  },
  {
    id: 'high-school',
    institution: 'Cebu Eastern College',
    degree: 'High School Diploma',
    startDate: '1990-01-01',
    endDate: '1994-12-31',
    description: 'Secondary education with focus on mathematics and sciences'
  }
];

/**
 * Get current position
 */
export const getCurrentPosition = (): Experience | undefined => {
  return experience.find(exp => exp.current);
};

/**
 * Get experience by date range
 */
export const getExperienceByYear = (year: number): Experience[] => {
  return experience.filter(exp => {
    const startYear = new Date(exp.startDate).getFullYear();
    const endYear = exp.endDate ? new Date(exp.endDate).getFullYear() : new Date().getFullYear();
    return year >= startYear && year <= endYear;
  });
};

/**
 * Calculate total years of experience
 */
export const getTotalExperience = (): number => {
  const firstJob = experience[experience.length - 1];
  const startDate = new Date(firstJob.startDate);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
  return diffYears;
};