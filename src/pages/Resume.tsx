import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, 
  Printer, Download, Link as LinkIcon, Calendar 
} from 'lucide-react';
import { experience, teachingExperience, education } from '../data/experience';

export const Resume: React.FC = () => {
  // Profile Information
  const profileInfo = {
    name: 'Wilson A. Gayo',
    title: 'Senior Software Engineer & Educator',
    location: 'Cebu City, Philippines',
    phone: '0917-6203908',
    email: 'wilson@questnova.com',
    website: 'https://wilschoy78.github.io',
    github: 'https://github.com/wilschoy78',
    linkedin: 'https://linkedin.com/in/wilson-gayo',
    summary: 'Experienced Software Developer, Educator, and Technology Leader with over 18 years in the industry. Passionate about enterprise software development, teaching, and mentoring the next generation of developers. Specialized in full-stack Java/J2EE and Node.js development.'
  };

  // Skills
  const skills = [
    'Java/J2EE', 'Spring Framework', 'Node.js', 'TypeScript', 'Angular', 'React',
    'MySQL', 'MongoDB', 'Oracle', 'REST APIs', 'Microservices',
    'Mobile Dev (Kotlin/Swift)', 'System Administration', 'DevOps'
  ];

  // Print handler
  const handlePrint = () => {
    window.print();
  };

  // Set document title for printing
  useEffect(() => {
    document.title = 'Wilson_Gayo_Resume';
    return () => {
      document.title = 'Wilson Gayo - Portfolio';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Floating Action Buttons for Print/Download */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 left-8 flex flex-col gap-4 print:hidden z-50"
      >
        <a
          href="/wilson-gayo-cv-2025.pdf"
          download="wilson-gayo-cv-2025.pdf"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center group relative"
          title="Download Official CV"
        >
          <Download className="w-6 h-6" />
          <span className="absolute left-full ml-4 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Download Official CV
          </span>
        </a>

        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center group relative"
          title="Print / Save as PDF"
        >
          <Printer className="w-6 h-6" />
          <span className="absolute left-full ml-4 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Print / Save as PDF
          </span>
        </button>
      </motion.div>

      {/* Resume Container (A4 aspect ratio approx) */}
      <div className="max-w-[210mm] mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden print:shadow-none print:rounded-none print:w-full print:max-w-none print:bg-white print:dark:bg-white">
        
        {/* Header Section */}
        <div className="bg-gray-900 text-white p-8 print:bg-gray-900 print:text-white print:p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{profileInfo.name}</h1>
              <h2 className="text-xl text-blue-400 font-medium">{profileInfo.title}</h2>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${profileInfo.email}`} className="hover:text-white transition-colors">{profileInfo.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{profileInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{profileInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4" />
                <a href={profileInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Portfolio</a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8 print:p-6 print:space-y-6 print:text-black">
          
          {/* Summary */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-600 pb-2 mb-4 print:text-black">
              Professional Summary
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed print:text-black">
              {profileInfo.summary}
            </p>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-600 pb-2 mb-4 print:text-black">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium print:bg-gray-100 print:text-black print:border print:border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Industry Experience */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-600 pb-2 mb-4 print:text-black">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white print:text-black">
                      {exp.title}
                    </h4>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 print:text-gray-600 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(exp.startDate).getFullYear()} - {exp.current ? 'Present' : (exp.endDate ? new Date(exp.endDate).getFullYear() : '')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold print:text-blue-700">
                      {exp.company}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{exp.location}</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 print:text-black text-sm">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Teaching Experience */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-600 pb-2 mb-4 print:text-black">
              Academic Experience
            </h3>
            <div className="space-y-6">
              {teachingExperience.slice(0, 3).map((exp) => ( // Limit to top 3 to save space
                <div key={exp.id} className="break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white print:text-black">
                      {exp.title}
                    </h4>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 print:text-gray-600 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(exp.startDate).getFullYear()} - {exp.current ? 'Present' : (exp.endDate ? new Date(exp.endDate).getFullYear() : '')}
                    </span>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2 print:text-blue-700">
                    {exp.company}
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 print:text-black text-sm">
                    {exp.description.slice(0, 3).map((desc, idx) => ( // Limit bullets
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="break-inside-avoid">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-600 pb-2 mb-4 print:text-black">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white print:text-black">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 print:text-gray-600">
                      {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                    </span>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 print:text-blue-700">
                    {edu.institution}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
        
        {/* Footer for Resume */}
        <div className="bg-gray-50 dark:bg-gray-900 p-6 text-center text-gray-500 text-sm border-t dark:border-gray-800 print:hidden">
          <p>Generated from online portfolio. Visit {profileInfo.website} for interactive version.</p>
        </div>
      </div>
    </div>
  );
};
