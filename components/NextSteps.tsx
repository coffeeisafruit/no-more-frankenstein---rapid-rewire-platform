
import React from 'react';

const NextSteps: React.FC = () => {
  const emailLink = "mailto:joe@tepe.consulting?subject=Rapid%20Rewire%20Platform%20-%20Thumbs%20Up&body=Hi%20Joe,%0D%0A%0D%0AI've%20reviewed%20the%20scope.%20Let's%20discuss%20the%20technical%20timeline%20and%20next%20steps%20for%20Unbound.";

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Next Steps</h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Stephanie, if this captures the vision for the Unbound platform, click below to give the "thumbs up" and we'll start drafting the implementation timeline and budget.
        </p>

        <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col items-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-8 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          </div>
          
          <a 
            href={emailLink}
            className="group relative px-12 py-5 bg-blue-600 text-white font-bold text-lg rounded-2xl hover:bg-blue-700 transition-all flex items-center gap-3 shadow-2xl shadow-blue-200"
          >
            <span>Give the Thumbs Up</span>
            <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          
          <p className="mt-8 text-gray-500 text-sm">
            Or reach out directly at <a href="mailto:joe@tepe.consulting" className="text-blue-600 font-semibold hover:underline">joe@tepe.consulting</a>
          </p>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-3xl mb-4 shadow-lg">
            J
          </div>
          <p className="text-xl font-bold text-gray-900">Best,</p>
          <p className="text-lg text-gray-500">Joe Tepe</p>
          <p className="text-sm text-blue-600 font-medium">Tepe Consulting</p>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
