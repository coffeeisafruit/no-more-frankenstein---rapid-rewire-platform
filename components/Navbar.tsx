import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white font-semibold text-sm font-display">
              U
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900 font-display">
              Unbound <span className="text-slate-500 font-normal font-body text-base">Platform</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#intake" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Admin</a>
            <a href="#coaching" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Practitioners</a>
            <a href="#client" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Experience</a>
            <a href="#security" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Security</a>
            <a href="mailto:joe@tepe.consulting?subject=Rapid%20Rewire%20Platform%20Scope" className="px-4 py-2.5 bg-amber-600 text-white text-sm font-semibold rounded-md hover:bg-amber-700 transition-colors">
              Contact Joe
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
