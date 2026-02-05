
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
          🚀 Strategic Scope: Rapid Rewire x Unbound
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
          Scaling <span className="gradient-text">Transformation</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed mb-10">
          A bespoke ecosystem designed to retire technical fragmentation and empower your network of practitioners to deliver the Rapid Rewire Method at global scale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#intake" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg shadow-gray-200">
            View the Unified Roadmap
          </a>
          <a href="#security" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all">
            HIPAA & Security
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
