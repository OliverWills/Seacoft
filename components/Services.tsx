import React from 'react';
import { SERVICES_DATA } from '../constants.tsx';
import Card from './common/Card.tsx';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our AI-Powered Services</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            We offer end-to-end AI solutions to solve your most complex business challenges.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <Card key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;