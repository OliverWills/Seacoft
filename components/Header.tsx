
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-wider">
          Nexus<span className="text-cyan-400">AI</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
          <a href="#process" className="text-gray-300 hover:text-cyan-400 transition-colors">Process</a>
          <a href="#casestudies" className="text-gray-300 hover:text-cyan-400 transition-colors">Case Studies</a>
          <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Header;
