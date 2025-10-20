
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
