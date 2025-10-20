import React from 'react';
import { CASE_STUDIES_DATA } from '../constants.tsx';
import Card from './common/Card.tsx';

const CaseStudies: React.FC = () => {
  return (
    <section id="casestudies" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Success Stories</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            See how we've transformed businesses with our innovative AI solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES_DATA.map((study, index) => (
            <Card key={index} className="p-0 overflow-hidden">
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-gray-400 mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;