import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">The <span className="text-pink-600">Bridge</span></span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/admin"
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;