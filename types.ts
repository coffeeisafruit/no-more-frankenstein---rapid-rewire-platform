
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
}

export interface Section {
  id: string;
  title: string;
  subtitle: string;
  features: Feature[];
}