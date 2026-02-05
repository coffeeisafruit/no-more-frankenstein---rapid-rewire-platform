
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import FrankensteinVisual from './components/FrankensteinVisual';
import VisualRoadmap from './components/VisualRoadmap';
import SecuritySection from './components/SecuritySection';
import NextSteps from './components/NextSteps';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Intro Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-amber-600 pl-6 text-left py-4 bg-white rounded-r-lg shadow-sm">
            "It was awesome connecting and geeking out over what you’re building at Rapid Rewire/Unbound. Based on our conversation, I’ve put together a preliminary 'Scope of Work' to make sure I’ve captured your vision correctly."
          </p>
        </div>

        <FrankensteinVisual />

        <VisualRoadmap />

        {/* Dynamic Sections */}
        {SECTIONS.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        <SecuritySection />

        <NextSteps />
      </main>

      <footer className="py-12 border-t border-slate-200 text-center text-slate-500 text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4">
          © {new Date().getFullYear()} Rapid Rewire Platform Proposal. Built for Unbound.
        </div>
      </footer>
    </div>
  );
};

export default App;
