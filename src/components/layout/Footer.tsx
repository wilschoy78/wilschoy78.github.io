import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Award } from 'lucide-react';
// import { socialLinks, contactInfo } from '../../data/navigation';

// Temporary inline data for testing
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/wilschoy78', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/wilson-gayo', icon: 'linkedin' },
  { name: 'Credly', url: 'https://www.credly.com/users/wilson-gayo/badges#credly', icon: 'award' },
  { name: 'Twitter', url: 'https://x.com/wilsongayo', icon: 'twitter' },
  { name: 'Email', url: 'mailto:wilson@questnova.com', icon: 'mail' }
];

const contactInfo = {
  email: 'wilson@questnova.com',
  location: 'Cebu, Philippines',
  availability: 'Available for freelance projects',
  responseTime: 'Usually responds within 24 hours'
};

/**
 * Icon mapping for social links
 */
const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  award: Award,
};

/**
 * Footer component with social links and contact information
 * Displays copyright, social media links, and professional details
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 print:hidden">
      <div className="container-max">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-xl font-bold">Wilson Gayo</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Freelance Software Developer specializing in full-stack web applications and APIs. 
                Passionate about creating efficient, scalable solutions.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  <span className="font-medium text-gray-900 dark:text-white">Email:</span> {contactInfo.email}
                </p>
                <p>
                  <span className="font-medium text-gray-900 dark:text-white">Location:</span> {contactInfo.location}
                </p>
                <p>
                  <span className="font-medium text-gray-900 dark:text-white">Status:</span> {contactInfo.availability}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Visit ${link.name}`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
              <p className="text-xs text-gray-500">
                {contactInfo.responseTime}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>&copy; 2005 - {currentYear} Wilson Gayo. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};