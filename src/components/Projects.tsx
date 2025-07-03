import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Django backend, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Django', 'PostgreSQL', 'JavaScript', 'Stripe API'],
      category: 'E-commerce',
      liveUrl: '#',
      githubUrl: 'https://github.com/Niyad-Sunil-14/brokart/tree/master/brokart',
      featured: true
    },
    {
      id: 2,
      title: 'Tour Package',
      description: 'RESTful API for managing tour packages, bookings, and user reviews with JWT authentication.',
      image: 'data:image/jpeg;base64,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',
      technologies: ['Django REST', 'Redis', 'WebSockets', 'JWT'],
      category: 'API',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    // {
    //   id: 3,
    //   title: 'Blog CMS',
    //   description: 'Content management system with markdown support, SEO optimization, and multi-user capabilities.',
    //   image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Django', 'MySQL', 'TinyMCE', 'Bootstrap'],
    //   category: 'Web App',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false
    // },
    {
      id: 4,
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, group chats, and media sharing.',
      image: 'data:image/jpeg;base64,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',
      technologies: ['Django', 'PostgreSQL', 'Websocket', 'Django Channels'],
      category: 'Web App',
      liveUrl: '#',
      githubUrl: 'https://github.com/Niyad-Sunil-14/Telegram',
      featured: true
    },
    // {
    //   id: 5,
    //   title: 'Inventory Management',
    //   description: 'Business inventory tracking system with reporting, alerts, and supplier management.',
    //   image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Django', 'MySQL', 'Chart.js', 'PDF Generation'],
    //   category: 'Web App',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false
    // },
    // {
    //   id: 6,
    //   title: 'Weather Dashboard API',
    //   description: 'Weather data aggregation API with historical data, forecasts, and location-based services.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Third-party APIs'],
    //   category: 'API',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false
    // }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work in full-stack development, featuring Django-powered applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 ${
                project.featured ? 'ring-2 ring-blue-200' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;