import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                <span className="text-blue-600">T</span>
                <span className="text-green-500">ech</span>
                <span className="text-purple-600">M</span>
                <span className="text-gray-700">int</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-coral-500 hover:text-coral-600 font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-coral-500 font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-coral-500 font-medium">
              About
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-coral-500 font-medium">
              Portfolio
            </Link>
            <Link to="/videos" className="text-gray-700 hover:text-coral-500 font-medium">
              Videos
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-coral-500 font-medium">
              Contact Us
            </Link>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <button className="bg-coral-500 text-white px-6 py-2 rounded-full hover:bg-coral-600 transition-colors">
              Contact Us Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-coral-500 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-coral-500 hover:text-coral-600 font-medium">
                Home
              </Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-coral-500 font-medium">
                Services
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-coral-500 font-medium">
                About
              </Link>
              <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-coral-500 font-medium">
                Portfolio
              </Link>
              <Link to="/videos" className="block px-3 py-2 text-gray-700 hover:text-coral-500 font-medium">
                Videos
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-coral-500 font-medium">
                Contact Us
              </Link>
              <button className="w-full mt-2 bg-coral-500 text-white px-6 py-2 rounded-full hover:bg-coral-600 transition-colors">
                Contact Us Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;