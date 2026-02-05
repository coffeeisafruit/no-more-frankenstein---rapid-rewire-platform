
import React from 'react';

const RoadmapStep = ({ number, title, subtitle, benefit, icon, isLast = false }: { 
  number: string, 
  title: string, 
  subtitle: string, 
  benefit?: string, 
  icon: React.ReactNode,
  isLast?: boolean 
}) => (
  <div className="relative flex flex-col items-center group">
    {/* Connector Line */}
    {!isLast && (
      <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
    )}
    
    <div className="relative z-10 w-24 h-24 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
      <div className="text-blue-600">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-lg">
        {number}
      </div>
    </div>
    
    <div className="text-center max-w-[200px]">
      <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-xs text-gray-500 mb-3">{subtitle}</p>
      {benefit && (
        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
          {benefit}
        </span>
      )}
    </div>
  </div>
);

const VisualRoadmap: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">The Unified Client Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A seamless, data-driven lifecycle that replaces manual touchpoints with automated intelligence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-4 items-start relative">
          <RoadmapStep 
            number="01"
            title="Secure Intake"
            subtitle="Automated client questionnaires & data ingestion."
            benefit="HIPAA COMPLIANT"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>}
          />
          
          <RoadmapStep 
            number="02"
            title="Smart Matching"
            subtitle="Algorithmic assignment to the perfect coach."
            benefit="ZERO FRICTION"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M17 11l2 2 4-4"/></svg>}
          />

          <RoadmapStep 
            number="03"
            title="Guided Coaching"
            subtitle="Step-by-step 'Rapid Rewire' integration roadmap."
            benefit="METHODOLOGY FOCUS"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/><path d="M16 12l-4-4-4 4"/></svg>}
          />

          <RoadmapStep 
            number="04"
            title="Unified Comm"
            subtitle="Secure messaging & document sharing in-app."
            benefit="ZERO LEAKAGE"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
          />

          <RoadmapStep 
            number="05"
            title="Tracking & ROI"
            subtitle="Outcome tracking & performance analytics."
            benefit="MAX RETENTION"
            isLast={true}
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>}
          />
        </div>
        
        {/* Connection visualization for small screens (vertical dashed line) */}
        <div className="md:hidden absolute left-[calc(1rem+12px)] top-[280px] bottom-[280px] w-0.5 border-l-2 border-dashed border-blue-200"></div>
      </div>
    </section>
  );
};

export default VisualRoadmap;
