import React from 'react';
import { GraduationCap, Heart, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate full-stack developer with a BCA degree, specializing in Python Django 
            framework and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Education & Background</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Graduated with a Bachelor of Computer Applications (BCA) degree, providing me with 
                a strong foundation in computer science principles, programming languages, and 
                software development methodologies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Passion for Development</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about creating efficient, scalable web applications using modern 
                technologies. My expertise lies in Back-end framework, where I've built 
                numerous full-stack applications from concept to deployment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Technical Expertise</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Specializing in Python Django for backend development, with proficiency in 
                HTML, CSS, JavaScript, React for frontend, and experience with databases like 
                PostgreSQL and MySQL. I also work with modern tools like Git, Docker, and cloud platforms.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Freelance Developer</h4>
                <p className="text-gray-600 mb-2">2023 - Present</p>
                <p className="text-gray-700">
                  Building custom web applications and providing technical solutions 
                  for clients across various industries.
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">BCA Graduate</h4>
                <p className="text-gray-600 mb-2">2022 - 2025</p>
                <p className="text-gray-700">
                  Completed Bachelor of Computer Applications with focus on 
                  software development and programming fundamentals.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Work Philosophy</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I believe in writing clean, maintainable code and building relationships 
                with clients based on trust and clear communication. Every project is an 
                opportunity to create something meaningful and impactful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;