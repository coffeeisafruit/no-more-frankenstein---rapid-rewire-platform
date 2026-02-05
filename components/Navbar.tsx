
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              U
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 uppercase">
              UNBOUND <span className="text-blue-600 font-medium lowercase">| platform</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#intake" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Admin</a>
            <a href="#coaching" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Practitioners</a>
            <a href="#client" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#security" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Security</a>
            <a href="mailto:joe@tepe.consulting?subject=Rapid%20Rewire%20Platform%20Scope" className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Contact Joe
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
