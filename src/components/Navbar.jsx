import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo2.png";
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Category', path: '/category' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
        <div className="flex-shrink-0">
  <Link to="/" className="flex items-center">
   <img src={logo} alt="Medinest Logo" className="h-10 w-auto" />
<span className='font-bold text-2xl text-[#1193d4] '>Medinest</span>
  </Link>
</div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-[#1193d4] transition-colors duration-200 ${
                    isActive ? 'text-[#1193d4] font-semibold' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Search Bar and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden sm:flex relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#1193d4] transition-colors duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-6 w-6 text-gray-600 hover:text-[#1193d4] cursor-pointer transition-colors duration-200" />
                <span className="absolute -top-1 -right-1 bg-[#1193d4] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </div>
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-[#1193d4] cursor-pointer transition-colors duration-200" />
                <span className="absolute -top-1 -right-1 bg-[#1193d4] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 text-[#1193d4] border border-[#1193d4] rounded-md hover:bg-[#1193d4] hover:text-white transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-[#1193d4] text-white rounded-md hover:bg-[#0e80b3] transition-colors duration-200"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#1193d4] focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-gray-700 hover:text-[#1193d4] hover:bg-gray-100 rounded-md ${
                      isActive ? 'text-[#1193d4] font-semibold' : ''
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#1193d4]"
                />
                <Search className="absolute left-5 top-3 text-gray-400 h-5 w-5" />
              </div>
              <Link
                to="/login"
                className="block px-3 py-2 text-[#1193d4] border border-[#1193d4] rounded-md hover:bg-[#1193d4] hover:text-white text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 bg-[#1193d4] text-white rounded-md hover:bg-[#0e80b3] text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;