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
      description: 'RESTful API for task management with user authentication, team collaboration, and real-time updates.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
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