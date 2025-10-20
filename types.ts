
import type React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface CaseStudy {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export interface TeamMember {
  image: string;
  name: string;
  role: string;
}
