import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, Award, Code, Phone, Mail, User, BookOpen } from 'lucide-react';
import { experience, teachingExperience, education } from '../data/experience';

// Define interfaces for type safety

interface ProfileInfo {
  name: string;
  location: string;
  phone: string;
  emails: string[];
}

export const About: React.FC = () => {
  // Wilson A. Gayo's profile information
  const profileInfo: ProfileInfo = {
    name: 'Wilson A. Gayo',
    location: 'Roosevelt Busay, Cebu City, Philippines',
    phone: '0917-6203908',
    emails: [
      'wilschoy78@gmail.com',
      'wilson@questnova.com',
      'wilson.gayo@questnova.com',
      'wgayo@uc.edu.ph'
    ]
  };

  // Skills and technologies
  const skills = [
    'HTML/CSS', 'JavaScript', 'Java/J2EE', 'Node.js', 'TypeScript',
    'Angular', 'React', 'Spring Framework', 'Hibernate', 'MySQL',
    'MongoDB', 'Oracle', 'REST APIs', 'Python', 'Kotlin', 'Swift',
    'System Administration', 'Network Administration', 'Quality Management'
  ];

  // Certifications
  const certifications = [
    'Java/J2EE Enterprise Development',
    'Node.js and TypeScript Development',
    'Mobile Application Development (Kotlin/Swift)',
    'Database Design and Administration',
    'ISO Quality Management Systems',
    'Academic Curriculum Development'
  ];

  // Format date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  // Calculate years of experience
  const calculateYears = (startDate: string, endDate?: string): string => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const years = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365));
    return years > 0 ? `${years} year${years > 1 ? 's' : ''}` : 'Less than 1 year';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Wilson A. Gayo
            </h1>
            
            {/* Profile Photo */}
            <div className="mb-8">
              <img 
                src="/profile.jpg" 
                alt="Wilson A. Gayo" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
              />
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Experienced Software Developer, Educator, and Technology Leader with over 18 years 
              in the industry. Passionate about enterprise software development, teaching, and 
              mentoring the next generation of developers.
            </p>
            
            {/* Profile Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">{profileInfo.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{profileInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{profileInfo.phone}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex flex-col space-y-1">
                    {profileInfo.emails.map((email, index) => (
                      <span key={index} className="text-gray-700 text-sm">{email}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Professional Summary</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Do</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Full-stack web application development
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Modern frontend frameworks (React, Vue.js)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Backend API development (Node.js, Python)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cloud infrastructure and DevOps
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Values</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Clean, maintainable code
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    User-centered design thinking
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Continuous learning and improvement
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Collaborative team environment
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Teaching Experience */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Teaching Experience</h2>
            </div>
            <div className="space-y-8">
              {teachingExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg p-6 relative"
                >
                  {/* Timeline connector */}
                  {index < teachingExperience.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-8 bg-blue-200"></div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center text-gray-600 text-sm mb-4">
                        <div className="flex items-center mr-4 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate!)}</span>
                          <span className="ml-2 text-gray-500">({calculateYears(exp.startDate, exp.endDate)})</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industry Experience */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Industry Experience</h2>
            </div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg p-6 relative"
                >
                  {/* Timeline connector */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-8 bg-blue-200"></div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center text-gray-600 text-sm mb-4">
                        <div className="flex items-center mr-4 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate!)}</span>
                          <span className="ml-2 text-gray-500">({calculateYears(exp.startDate, exp.endDate)})</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                      </div>
                      <p className="text-gray-700">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Technologies */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <Code className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Skills & Technologies</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Certifications & Expertise</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Let's Collaborate
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you need enterprise software development, educational technology solutions, 
              or technical consultation, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                View Services
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};