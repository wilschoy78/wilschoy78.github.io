import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { getAllServices } from '../data/services';
import type { Service } from '../types/index';

/**
 * Icon mapping for service icons
 */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Settings,
};

/**
 * Service card component
 */
interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = iconMap[service.icon] || Settings;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
    >
      {/* Service Header */}
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
          <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {service.title}
          </h3>
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full capitalize">
            {service.category}
          </span>
        </div>
      </div>

      {/* Service Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Service Features */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Key Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      {service.technologies && service.technologies.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Live Links / Examples */}
      {service.links && service.links.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Live Examples
          </h4>
          <div className="flex flex-col gap-3">
            {service.links.map((link, linkIndex) => (
              <div 
                key={linkIndex}
                className={`flex flex-col ${link.highlight ? 'bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-800' : ''}`}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${link.highlight ? 'text-blue-700 dark:text-blue-300 font-medium' : 'text-blue-600 dark:text-blue-400'} hover:underline transition-colors duration-200`}
                >
                  <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{link.label}</span>
                  {link.highlight && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full font-semibold">Featured</span>
                  )}
                </a>
                {link.description && (
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 ml-6">
                    {link.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center group"
      >
        Get Started
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
      </motion.button>
    </motion.div>
  );
};

/**
 * Services page component
 */
const Services: React.FC = () => {
  const services = getAllServices();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions and expert consultation to help your business 
            thrive in the digital landscape. From strategic planning to implementation, 
            I provide end-to-end services tailored to your unique needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how these services can help you achieve your technology goals 
            and drive business growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;