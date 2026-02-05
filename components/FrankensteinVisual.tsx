import React from 'react';

const FrankensteinVisual: React.FC = () => {
  return (
    <div className="py-20 bg-slate-900 text-white rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-20 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">The Platform Evolution</h2>
          <p className="text-slate-400 text-sm">From tech fragmentation to unified intelligence.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Current State */}
          <div className="p-6 border border-slate-600 rounded-xl bg-slate-800/50 relative">
            <span className="absolute -top-2.5 left-5 bg-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider text-slate-300">The &quot;Frankenstein&quot;</span>
            <h3 className="text-lg font-semibold mb-5 text-slate-300">Current Chaos</h3>
            <div className="space-y-3">
              {['Monday.com Manual Boards', 'Coach Accountable Silos', 'Brittle Zapier Integrations', 'Manual Email Chains'].map((label, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700">
                  <span className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-xs font-medium text-slate-400">{label.slice(0, 2)}</span>
                  <span className="text-sm text-slate-300">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500 italic">Result: Data leaks, manual overhead, and high friction.</p>
          </div>

          {/* Future State */}
          <div className="p-6 border border-amber-500/40 rounded-xl bg-slate-800/80 relative ring-1 ring-amber-500/20">
            <span className="absolute -top-2.5 left-5 bg-amber-600 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider text-white">The &quot;No More Frankenstein&quot;</span>
            <h3 className="text-lg font-semibold mb-5 text-amber-200">Unbound Ecosystem</h3>
            <div className="space-y-4">
              {[
                { title: 'Bespoke & Secure', sub: 'HIPAA compliant, proprietary tech.' },
                { title: 'Full Automation', sub: 'Intake-to-assignment pipeline.' },
                { title: 'Retention Focus', sub: 'Unified messaging & resource library.' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-800/60 rounded-lg border border-slate-600">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-amber-200/90 font-medium">Goal: Scalability for 5,000+ users.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrankensteinVisual;
