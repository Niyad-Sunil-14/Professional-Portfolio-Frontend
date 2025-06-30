import React from 'react';
import { Database, Globe, Server, Smartphone, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Django', level: 90 },
        { name: 'Django REST Framework', level: 85 },
        { name: 'FastAPI', level: 80 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      title: 'Database & Storage',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'MongoDB', level: 70 },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Heroku', level: 85 },
      ]
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set covering full-stack development with specialization in Python Django
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'REST APIs', 'GraphQL', 'Celery', 'Nginx', 'Linux', 'VS Code',
              'Postman', 'JWT', 'OAuth', 'Stripe API', 'PayPal', 'Bootstrap'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;