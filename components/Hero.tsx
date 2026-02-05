import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-8">
          Strategic Scope: Rapid Rewire × Unbound
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
          Scaling <span className="text-amber-700">Transformation</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-10">
          A bespoke ecosystem designed to retire technical fragmentation and empower your network of practitioners to deliver the Rapid Rewire Method at global scale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#intake" className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-800 transition-colors">
            View the Unified Roadmap
          </a>
          <a href="#security" className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 text-slate-800 font-semibold rounded-md hover:border-slate-300 hover:bg-slate-50 transition-colors">
            HIPAA & Security
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
