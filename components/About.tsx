import React from 'react';
import { TEAM_DATA } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Meet the Innovators</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            Our team of passionate AI experts, strategists, and engineers.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TEAM_DATA.map((member, index) => (
            <div key={index} className="text-center group">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-slate-700 group-hover:border-cyan-400 transition-all duration-300 transform group-hover:scale-110" 
              />
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-cyan-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;