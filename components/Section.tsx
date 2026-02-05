import React from 'react';
import { Section as SectionType } from '../types';

interface SectionProps {
  section: SectionType;
}

const Section: React.FC<SectionProps> = ({ section }) => {
  return (
    <section id={section.id} className="py-20 scroll-mt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">{section.title}</h2>
          <p className="text-slate-600 max-w-2xl">{section.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {section.features.map((feature) => (
            <div key={feature.id} className="group bg-slate-50/80 p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              {feature.icon}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                {feature.description}
              </p>
              <ul className="space-y-2.5">
                {feature.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
