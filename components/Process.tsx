import React from 'react';
import { PROCESS_DATA } from '../constants.tsx';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our Simple 4-Step Process</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            A streamlined journey from concept to a fully operational AI solution.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-4 gap-12 relative">
            {PROCESS_DATA.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-slate-800 border-2 border-cyan-400 rounded-full text-2xl font-bold text-cyan-400 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;