import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-grid-slate-700/[0.1] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-cyan-500/10 rounded-full blur-[150px]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
          Automate. <span className="text-cyan-400">Innovate.</span> Accelerate.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
          We build custom AI solutions to supercharge your business operations, unlock new efficiencies, and drive unprecedented growth.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href="#services" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
            Explore Services
          </a>
          <a href="#contact" className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Book Demo Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;