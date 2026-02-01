import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Database, Server, Play, Award, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home page component with hero section, skills preview, and featured projects
 */
export const Home: React.FC = () => {
  // Inline data for featured projects
  const featuredProjects = [
    {
      id: 'arrays-presentation',
      title: 'Interactive Arrays Presentation',
      description: 'Educational 3D visualization of array data structures with interactive examples and animations',
      technologies: ['JavaScript', 'Three.js', 'WebGL', 'CSS3'],
      imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=3D%20array%20data%20structure%20visualization%20educational%20interactive%20programming%20concept&image_size=landscape_4_3',
      presentationUrl: '/arrays.html',
      isPresentation: true
    },
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20e-commerce%20website%20interface%20clean%20design%20shopping%20cart%20product%20grid&image_size=landscape_4_3',
      githubUrl: 'https://github.com/wilschoy78/ecommerce-platform'
    },
    {
      id: '2',
      title: 'Task Management API',
      description: 'RESTful API built with NestJS and PostgreSQL for task management',
      technologies: ['NestJS', 'PostgreSQL', 'JWT', 'Swagger'],
      imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=API%20documentation%20interface%20swagger%20endpoints%20clean%20technical%20design&image_size=landscape_4_3',
      githubUrl: 'https://github.com/wilschoy78/task-api'
    },
    {
      id: '3',
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization',
      technologies: ['Vue.js', 'D3.js', 'Express', 'Socket.io'],
      imageUrl: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=analytics%20dashboard%20charts%20graphs%20data%20visualization%20modern%20interface&image_size=landscape_4_3',
      githubUrl: 'https://github.com/wilschoy78/analytics-dashboard'
    }
  ];

  // Inline data for top skills
  const topSkills = [
    { name: 'React', icon: Code, proficiency: 5 },
    { name: 'Node.js', icon: Database, proficiency: 5 },
    { name: 'TypeScript', icon: Code, proficiency: 4 },
    { name: 'MongoDB', icon: Database, proficiency: 4 },
    { name: 'PostgreSQL', icon: Database, proficiency: 4 },
    { name: 'NestJS', icon: Server, proficiency: 5 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Wilson Gayo
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
                >
                  Freelance Software Developer
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  I specialize in building modern web applications and APIs using cutting-edge technologies. 
                  With 7+ years of experience, I help businesses streamline their development processes and create scalable solutions.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/projects" className="btn-primary inline-flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/resume"
                  className="btn-secondary inline-flex items-center justify-center space-x-2"
                >
                  <Download size={20} />
                  <span>View Resume</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex space-x-4"
              >
                <a
                  href="https://github.com/wilschoy78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/wilson-gayo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.credly.com/users/wilson-gayo/badges#credly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white hover:bg-orange-700 transition-colors duration-200"
                  aria-label="Credly"
                >
                  <Award size={24} />
                </a>
                <a
                  href="https://developers.google.com/profile/u/111695751234782502699?utm_source=developer.android.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-200"
                  aria-label="Google Developers"
                >
                  <Smartphone size={24} />
                </a>
                <Link
                  to="/contact"
                  className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200"
                  aria-label="Contact"
                >
                  <Mail size={24} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <img 
                    src="/profile.jpg" 
                    alt="Wilson Gayo" 
                    className="w-80 h-80 rounded-full mx-auto object-cover shadow-2xl border-8 border-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-10 animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="section-padding bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I work with modern technologies to build scalable and efficient solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <Icon size={40} className="mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < skill.proficiency ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/skills" className="btn-secondary inline-flex items-center space-x-2">
              <span>View All Skills</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.isPresentation ? (
                    <a
                      href={project.presentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      <Play size={16} />
                      <span>Launch Presentation</span>
                    </a>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with modern web technologies
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};