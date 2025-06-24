import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-pink-600">
          Pranav Parmar
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium hover:text-pink-600 transition ${
                location.pathname === path ? 'text-pink-600' : 'text-gray-700'
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-pink-700 transition"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
