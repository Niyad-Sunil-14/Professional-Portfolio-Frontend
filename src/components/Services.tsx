import React from 'react';
import { Globe, Database, Smartphone, Settings, Code, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Full-Stack Web Development',
      description: 'Complete web application development from frontend to backend using modern technologies like Django, React, and PostgreSQL.',
      features: ['Responsive Design', 'Database Design', 'API Development', 'User Authentication'],
      price: 'Starting at ₹9999'
    },
    // {
    //   icon: <Database className="w-8 h-8" />,
    //   title: 'Static Applications',
    //   description: 'Specialized Django development for complex business requirements with scalable architecture and clean code.',
    //   features: ['Django Models', 'Admin Interface', 'Custom Views', 'Template Design'],
    //   price: 'Starting at $1500'
    // },
    // {
    //   icon: <Code className="w-8 h-8" />,
    //   title: 'API Development & Integration',
    //   description: 'RESTful API development and third-party API integration for seamless data exchange and functionality.',
    //   features: ['REST APIs', 'GraphQL', 'API Documentation', 'Authentication'],
    //   price: 'Starting at $800'
    // },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and user-friendly interfaces.',
      features: ['Payment Gateway', 'Product Catalog', 'Order Management', 'Admin Dashboard'],
      price: 'Starting at ₹7999'
    },
    // {
    //   icon: <Settings className="w-8 h-8" />,
    //   title: 'Website Maintenance',
    //   description: 'Ongoing website maintenance, updates, bug fixes, and performance optimization for existing applications.',
    //   features: ['Bug Fixes', 'Security Updates', 'Performance Optimization', 'Feature Updates'],
    //   price: 'Starting at $500/month'
    // },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Technical Consulting',
      description: 'Expert consultation on architecture decisions, technology choices, and development best practices.',
      features: ['Architecture Review', 'Code Review', 'Performance Analysis', 'Technology Recommendations'],
      price: 'Starting at ₹150/hour'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Offered</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive freelancing services specializing in Django development and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                  <a
                    href="#contact"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and create a 
            tailored solution that perfectly fits your business needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;