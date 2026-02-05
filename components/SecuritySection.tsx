import React from 'react';

const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start border border-slate-200">
          <div className="flex-1">
            <div className="inline-flex p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 mb-5">Security & Technical Specs</h2>
            <div className="space-y-5">
              {[
                { num: '01', title: 'HIPAA & Clinical Compliance', desc: 'Architecture meets strict privacy standards for clinical hypnotherapy and emotional processing data.' },
                { num: '02', title: 'Enterprise Scalability', desc: 'Built to handle thousands of certification candidates and practitioners across global timezones.' },
                { num: '03', title: 'Proprietary IP Vault', desc: 'Encrypted storage for core subconscious rewiring methodologies, accessible only to authorized tiers.' }
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="mt-0.5 font-semibold text-amber-700 text-sm">{item.num}</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Strategic Decision: Self-Serve Flow</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              For users seeking subconscious tools with lower-intensity stress scores (6 or below), we discussed a self-serve app experience.
            </p>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 mb-4">
              <p className="text-sm font-medium text-slate-800 italic">&quot;Should this be an embedded tier within the Unbound ecosystem, or a distinct stand-alone product for wider market reach?&quot;</p>
            </div>
            <p className="text-xs text-slate-500">
              * This architectural choice will determine how we structure user permissioning and the initial database schema for certification candidate tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
