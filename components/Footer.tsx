
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <a href="#" className="text-2xl font-bold text-white tracking-wider mb-4 inline-block">
          Nexus<span className="text-cyan-400">AI</span>
        </a>
        <p>&copy; {new Date().getFullYear()} Nexus AI Automation. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
            {/* Replace with actual links */}
            <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
