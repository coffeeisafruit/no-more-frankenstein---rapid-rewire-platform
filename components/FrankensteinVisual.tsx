
import React from 'react';

const FrankensteinVisual: React.FC = () => {
  return (
    <div className="py-24 bg-gray-900 text-white rounded-[3rem] mx-4 sm:mx-8 mb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-blue-600 opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">The Platform Evolution</h2>
          <p className="text-gray-400">From tech fragmentation to unified intelligence.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Current State */}
          <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm relative opacity-60">
            <div className="absolute -top-4 left-6 bg-red-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">The "Frankenstein"</div>
            <h3 className="text-xl font-bold mb-6 text-red-400">Current Chaos</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-black/20 rounded-xl border border-white/5">
                <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">M</span>
                <span>Monday.com Manual Boards</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-black/20 rounded-xl border border-white/5">
                <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">CA</span>
                <span>Coach Accountable Silos</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-black/20 rounded-xl border border-white/5">
                <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">⚡</span>
                <span>Brittle Zapier Integrations</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-black/20 rounded-xl border border-white/5">
                <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">✉️</span>
                <span>Manual Email Chains</span>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-400 italic">Result: Data leaks, manual overhead, and high friction.</p>
          </div>

          {/* Future State */}
          <div className="p-10 border-2 border-blue-500/50 rounded-3xl bg-blue-900/40 backdrop-blur-md relative shadow-2xl shadow-blue-500/20">
            <div className="absolute -top-4 left-6 bg-blue-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">The "No More Frankenstein"</div>
            <h3 className="text-2xl font-bold mb-8 text-blue-300">Unbound Ecosystem</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-5 bg-blue-800/40 rounded-2xl border border-blue-400/20">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div className="font-bold text-white">Bespoke & Secure</div>
                  <div className="text-xs text-blue-200 opacity-70">HIPAA compliant, proprietary tech.</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-blue-800/40 rounded-2xl border border-blue-400/20">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
                </div>
                <div>
                  <div className="font-bold text-white">Full Automation</div>
                  <div className="text-xs text-blue-200 opacity-70">Intake-to-assignment pipeline.</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-blue-800/40 rounded-2xl border border-blue-400/20">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div>
                  <div className="font-bold text-white">Retention Focus</div>
                  <div className="text-xs text-blue-200 opacity-70">Unified messaging & resource library.</div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm text-blue-200 font-medium">Goal: Scalability for 5,000+ users.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrankensteinVisual;
