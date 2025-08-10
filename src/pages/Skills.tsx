import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Wrench, Award, TrendingUp } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category: string;
  icon?: string;
  description?: string;
  yearsOfExperience?: number;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend');

  // Inline skills data organized by categories
  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: <Globe className="h-6 w-6" />,
      description: 'Creating responsive and interactive user interfaces',
      skills: [
        { id: '1', name: 'React', level: 95, category: 'frontend', yearsOfExperience: 4, description: 'Advanced component architecture and state management' },
        { id: '2', name: 'TypeScript', level: 90, category: 'frontend', yearsOfExperience: 3, description: 'Type-safe development and advanced patterns' },
        { id: '3', name: 'JavaScript', level: 95, category: 'frontend', yearsOfExperience: 5, description: 'ES6+, async programming, and modern frameworks' },
        { id: '4', name: 'Vue.js', level: 85, category: 'frontend', yearsOfExperience: 2, description: 'Composition API and reactive programming' },
        { id: '5', name: 'HTML5', level: 95, category: 'frontend', yearsOfExperience: 5, description: 'Semantic markup and accessibility best practices' },
        { id: '6', name: 'CSS3', level: 90, category: 'frontend', yearsOfExperience: 5, description: 'Flexbox, Grid, animations, and responsive design' },
        { id: '7', name: 'Tailwind CSS', level: 90, category: 'frontend', yearsOfExperience: 2, description: 'Utility-first CSS framework and custom designs' },
        { id: '8', name: 'SASS/SCSS', level: 85, category: 'frontend', yearsOfExperience: 3, description: 'Advanced styling with preprocessors' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: <Server className="h-6 w-6" />,
      description: 'Building scalable server-side applications and APIs',
      skills: [
        { id: '9', name: 'Node.js', level: 90, category: 'backend', yearsOfExperience: 4, description: 'Server-side JavaScript and microservices' },
        { id: '10', name: 'Express.js', level: 85, category: 'backend', yearsOfExperience: 3, description: 'RESTful APIs and middleware development' },
        { id: '11', name: 'Python', level: 80, category: 'backend', yearsOfExperience: 2, description: 'Django, Flask, and data processing' },
        { id: '12', name: 'PHP', level: 75, category: 'backend', yearsOfExperience: 2, description: 'Laravel framework and modern PHP practices' },
        { id: '13', name: 'GraphQL', level: 75, category: 'backend', yearsOfExperience: 1, description: 'Query language and API design' },
        { id: '14', name: 'REST APIs', level: 90, category: 'backend', yearsOfExperience: 4, description: 'API design, documentation, and best practices' }
      ]
    },
    {
      id: 'database',
      name: 'Database & Storage',
      icon: <Database className="h-6 w-6" />,
      description: 'Data modeling, optimization, and management',
      skills: [
        { id: '15', name: 'MongoDB', level: 85, category: 'database', yearsOfExperience: 3, description: 'NoSQL database design and aggregation' },
        { id: '16', name: 'PostgreSQL', level: 80, category: 'database', yearsOfExperience: 2, description: 'Relational database design and optimization' },
        { id: '17', name: 'MySQL', level: 80, category: 'database', yearsOfExperience: 3, description: 'Database administration and performance tuning' },
        { id: '18', name: 'Redis', level: 70, category: 'database', yearsOfExperience: 1, description: 'Caching and session management' },
        { id: '19', name: 'Firebase', level: 75, category: 'database', yearsOfExperience: 2, description: 'Real-time database and authentication' }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: <Smartphone className="h-6 w-6" />,
      description: 'Cross-platform mobile application development',
      skills: [
        { id: '20', name: 'React Native', level: 80, category: 'mobile', yearsOfExperience: 2, description: 'Cross-platform mobile app development' },
        { id: '21', name: 'Flutter', level: 70, category: 'mobile', yearsOfExperience: 1, description: 'Dart-based mobile development' },
        { id: '22', name: 'Progressive Web Apps', level: 85, category: 'mobile', yearsOfExperience: 2, description: 'PWA development and optimization' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: <Wrench className="h-6 w-6" />,
      description: 'Development tools, deployment, and infrastructure',
      skills: [
        { id: '23', name: 'Git', level: 90, category: 'tools', yearsOfExperience: 5, description: 'Version control and collaboration workflows' },
        { id: '24', name: 'Docker', level: 80, category: 'tools', yearsOfExperience: 2, description: 'Containerization and deployment' },
        { id: '25', name: 'AWS', level: 75, category: 'tools', yearsOfExperience: 2, description: 'Cloud services and infrastructure' },
        { id: '26', name: 'Webpack', level: 80, category: 'tools', yearsOfExperience: 3, description: 'Module bundling and optimization' },
        { id: '27', name: 'Vite', level: 85, category: 'tools', yearsOfExperience: 1, description: 'Fast build tool and development server' },
        { id: '28', name: 'Jest', level: 80, category: 'tools', yearsOfExperience: 3, description: 'Unit testing and test-driven development' },
        { id: '29', name: 'Cypress', level: 75, category: 'tools', yearsOfExperience: 1, description: 'End-to-end testing automation' }
      ]
    }
  ];

  const selectedCategoryData = skillCategories.find(cat => cat.id === selectedCategory);

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and proficiency levels 
              across different areas of software development.
            </p>
          </motion.div>

          {/* Skills Overview */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">20+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}</h3>
                <p className="text-gray-600">Technical Skills</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Category Navigation */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Selected Category Skills */}
          {selectedCategoryData && (
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  {selectedCategoryData.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedCategoryData.name}</h2>
                  <p className="text-gray-600">{selectedCategoryData.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {selectedCategoryData.skills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={skillVariants}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                          getSkillLevelColor(skill.level)
                        }`}>
                          {getSkillLevelText(skill.level)}
                        </span>
                        {skill.yearsOfExperience && (
                          <span className="text-sm text-gray-500">
                            {skill.yearsOfExperience}y
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Proficiency</span>
                        <span className="text-sm font-medium text-gray-900">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${getSkillLevelColor(skill.level)}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    {skill.description && (
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
              <p className="text-xl mb-6 opacity-90">
                I'm always expanding my skill set and staying up-to-date with the latest technologies 
                and industry best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="font-medium">Currently Learning: Next.js 14</span>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="font-medium">Exploring: AI/ML Integration</span>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="font-medium">Interested in: Web3 Development</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-600 mb-6">
              Ready to bring your ideas to life with these skills and technologies.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};