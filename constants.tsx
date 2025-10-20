import React from 'react';
import type { Service, ProcessStep, CaseStudy, TeamMember } from './types.ts';

const BotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ProcessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const DataIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

export const SERVICES_DATA: Service[] = [
  {
    icon: <BotIcon />,
    title: 'Intelligent Chatbots',
    description: 'Deploy AI-powered chatbots on your website and social media to provide 24/7 customer support and generate leads.',
  },
  {
    icon: <ProcessIcon />,
    title: 'Business Process Automation',
    description: 'Automate repetitive tasks like data entry, invoicing, and report generation, freeing up your team for more strategic work.',
  },
  {
    icon: <DataIcon />,
    title: 'AI Data Analysis',
    description: 'Leverage machine learning to analyze your business data, uncover insights, and make smarter, data-driven decisions.',
  },
];

export const PROCESS_DATA: ProcessStep[] = [
  { step: 1, title: 'Discovery & Strategy', description: 'We work with you to understand your goals, challenges, and identify the best opportunities for AI automation.' },
  { step: 2, title: 'Solution Design & Build', description: 'Our experts design and develop a custom AI solution tailored to your specific business needs and existing systems.' },
  { step: 3, title: 'Integration & Deployment', description: 'We seamlessly integrate the AI solution into your workflow and deploy it with minimal disruption to your operations.' },
  { step: 4, title: 'Optimization & Support', description: 'We continuously monitor performance, optimize the solution, and provide ongoing support to ensure maximum ROI.' },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    image: 'https://picsum.photos/seed/tech/600/400',
    title: 'E-commerce Chatbot Increases Sales by 30%',
    description: 'Implemented an AI shopping assistant that provided personalized recommendations and answered customer queries in real-time.',
    tags: ['E-commerce', 'Chatbot', 'Sales'],
  },
  {
    image: 'https://picsum.photos/seed/finance/600/400',
    title: 'Automated Invoice Processing for a FinTech Firm',
    description: 'Developed an AI system that extracts data from invoices and automates the accounts payable process, saving 100+ hours per month.',
    tags: ['FinTech', 'RPA', 'Efficiency'],
  },
  {
    image: 'https://picsum.photos/seed/logistics/600/400',
    title: 'Predictive Analytics for Logistics Company',
    description: 'Built a machine learning model to predict shipping delays, improving delivery accuracy and customer satisfaction.',
    tags: ['Logistics', 'ML', 'Analytics'],
  },
];

export const TEAM_DATA: TeamMember[] = [
  { image: 'https://picsum.photos/seed/person1/200/200', name: 'Alex Johnson', role: 'Founder & AI Strategist' },
  { image: 'https://picsum.photos/seed/person2/200/200', name: 'Maria Garcia', role: 'Lead ML Engineer' },
  { image: 'https://picsum.photos/seed/person3/200/200', name: 'David Chen', role: 'Automation Specialist' },
  { image: 'https://picsum.photos/seed/person4/200/200', name: 'Sarah Lee', role: 'Client Relations Manager' },
];