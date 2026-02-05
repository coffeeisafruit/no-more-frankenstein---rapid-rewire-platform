import React from 'react';

const RoadmapStep = ({ number, title, subtitle, benefit, icon, isLast = false }: {
  number: string;
  title: string;
  subtitle: string;
  benefit?: string;
  icon: React.ReactNode;
  isLast?: boolean;
}) => (
  <div className="relative flex flex-col items-center">
    {!isLast && (
      <div className="hidden lg:block absolute top-11 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-slate-200" />
    )}

    <div className="relative z-10 w-20 h-20 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-4 text-slate-700">
      {icon}
      <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-md bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center">
        {number}
      </div>
    </div>

    <div className="text-center max-w-[180px]">
      <h4 className="font-semibold text-slate-900 text-sm mb-0.5">{title}</h4>
      <p className="text-xs text-slate-500 mb-2">{subtitle}</p>
      {benefit && (
        <span className="inline-block px-2.5 py-0.5 rounded bg-amber-50 text-amber-800 text-[10px] font-semibold uppercase tracking-wider">
          {benefit}
        </span>
      )}
    </div>
  </div>
);

const VisualRoadmap: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">The Unified Client Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm">
            A seamless, data-driven lifecycle that replaces manual touchpoints with automated intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-4 items-start">
          <RoadmapStep
            number="01"
            title="Secure Intake"
            subtitle="Automated client questionnaires & data ingestion."
            benefit="HIPAA"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>}
          />
          <RoadmapStep
            number="02"
            title="Smart Matching"
            subtitle="Algorithmic assignment to the perfect coach."
            benefit="Zero friction"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M17 11l2 2 4-4"/></svg>}
          />
          <RoadmapStep
            number="03"
            title="Guided Coaching"
            subtitle="Step-by-step Rapid Rewire integration roadmap."
            benefit="Methodology"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/><path d="M16 12l-4-4-4 4"/></svg>}
          />
          <RoadmapStep
            number="04"
            title="Unified Comm"
            subtitle="Secure messaging & document sharing in-app."
            benefit="Zero leakage"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
          />
          <RoadmapStep
            number="05"
            title="Tracking & ROI"
            subtitle="Outcome tracking & performance analytics."
            benefit="Retention"
            isLast={true}
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default VisualRoadmap;
