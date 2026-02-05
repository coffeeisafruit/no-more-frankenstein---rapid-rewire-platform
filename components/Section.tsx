
import React from 'react';
import { Section as SectionType } from '../types';

interface SectionProps {
  section: SectionType;
}

const Section: React.FC<SectionProps> = ({ section }) => {
  return (
    <section id={section.id} className="py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
          <p className="text-lg text-gray-600">{section.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {section.features.map((feature) => (
            <div key={feature.id} className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-50/50">
              {feature.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
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
