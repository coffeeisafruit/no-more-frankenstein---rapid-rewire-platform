import React from 'react';

const NextSteps: React.FC = () => {
  const emailLink = "mailto:joe@tepe.consulting?subject=Rapid%20Rewire%20Platform%20-%20Thumbs%20Up&body=Hi%20Joe,%0D%0A%0D%0AI've%20reviewed%20the%20scope.%20Let's%20discuss%20the%20technical%20timeline%20and%20next%20steps%20for%20Unbound.";

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4 text-slate-900">Next Steps</h2>
        <p className="text-slate-600 mb-10 leading-relaxed">
          Stephanie, if this captures the vision for the Unbound platform, click below to give the &quot;thumbs up&quot; and we&apos;ll start drafting the implementation timeline and budget.
        </p>

        <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
          <a
            href={emailLink}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition-colors"
          >
            <span>Give the Thumbs Up</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>

          <p className="mt-6 text-sm text-slate-500">
            Or reach out at <a href="mailto:joe@tepe.consulting" className="text-amber-700 font-semibold hover:underline">joe@tepe.consulting</a>
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-white font-display font-semibold text-xl mb-3">
            J
          </div>
          <p className="font-semibold text-slate-900">Best,</p>
          <p className="text-slate-600 text-sm">Joe Tepe</p>
          <p className="text-xs text-amber-700 font-medium mt-0.5">Tepe Consulting</p>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
