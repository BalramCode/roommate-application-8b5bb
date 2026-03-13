import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div className="text-2xl font-extrabold tracking-tight">
              <span className="text-slate-900">Room</span>
              <span className="text-blue-600">NearMe</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">Browse Rooms</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">List Your Room</a>
              </li>
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-slate-700 hover:text-blue-600 cursor-pointer transition-colors px-4 py-2">
              Log in
            </button>
            <button className="bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 cursor-pointer rounded-full hover:bg-slate-800 transition-all shadow-md active:scale-95">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;