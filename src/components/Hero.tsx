import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-600">NS</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Web Developer
          <span className="block text-blue-300">Python Full-Stack Specialist</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Code Architect | Passionate Freelancer | Building scalable web applications 
          with modern technologies and clean, maintainable code
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </a>
          {/* <a
            href="/resume.pdf"
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 font-semibold rounded-lg transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">2+</h3>
            <p className="text-blue-200">Years Experience</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">30+</h3>
            <p className="text-blue-200">Projects Completed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">20+</h3>
            <p className="text-blue-200">Happy Clients</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;