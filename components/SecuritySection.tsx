
import React from 'react';

const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block p-3 rounded-2xl bg-white shadow-sm mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Security & Technical Specs</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 font-bold text-blue-600">01</div>
                <div>
                  <h4 className="font-bold text-gray-900">HIPAA & Clinical Compliance</h4>
                  <p className="text-gray-600">Ensuring architecture meets strict privacy standards for clinical hypnotherapy and emotional processing data.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 font-bold text-blue-600">02</div>
                <div>
                  <h4 className="font-bold text-gray-900">Enterprise Scalability</h4>
                  <p className="text-gray-600">Built to handle thousands of certification candidates and practitioners simultaneously across global timezones.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 font-bold text-blue-600">03</div>
                <div>
                  <h4 className="font-bold text-gray-900">Proprietary IP Vault</h4>
                  <p className="text-gray-600">Encrypted storage for your core subconscious rewiring methodologies, accessible only to authorized user tiers.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl shadow-blue-100 border border-blue-100">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Strategic Decision: Self-Serve Flow</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For users seeking subconscious tools with lower-intensity stress scores (6 or below), we discussed a self-serve app experience.
            </p>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-6">
              <p className="font-medium text-gray-900 mb-4 italic">"Should this be an embedded tier within the Unbound ecosystem, or a distinct stand-alone product for wider market reach?"</p>
            </div>
            <p className="text-sm text-gray-500">
              * This architectural choice will determine how we structure the user permissioning and the initial database schema for certification candidate tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
