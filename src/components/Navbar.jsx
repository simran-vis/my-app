
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
  CircleUser,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Category", path: "/category" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar main row */}
        <div className="flex items-center justify-between h-16">
          {/* 🩺 Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Medinest Logo" className="h-10 w-auto" />
              <span className="font-bold text-2xl text-[#1193d4]">
                Medinest
              </span>
            </Link>
          </div>

          {/* 🧭 Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-[#1193d4] transition-colors duration-200 ${
                    isActive ? "text-[#1193d4] font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* 🔍 Icons + SignIn + Menu */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* 🔍 Search Icon (clickable for mobile) */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-gray-600 hover:text-[#1193d4] focus:outline-none relative flex items-center justify-center"
            >
              <Search className="h-6 w-6" />
            </button>

            {/* ❤️ Wishlist */}
            <div className="relative">
              <Link to="/wishlist">
                <Heart className="h-6 w-6 text-gray-600 hover:text-[#1193d4] cursor-pointer transition-colors duration-200" />
                <span className="absolute -top-1 -right-1 bg-[#1193d4] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </Link>
            </div>

            {/* 🛒 Cart */}
            <div className="relative">
              <Link to="/cart">
                <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-[#1193d4] cursor-pointer transition-colors duration-200" />
                <span className="absolute -top-1 -right-1 bg-[#1193d4] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>

            {/* 👤 Sign In (visible on tablet and desktop) */}
            <div className="hidden sm:flex items-center">
              <Link
                to="/login"
                className="flex items-center gap-1 px-3 py-2 font-semibold bg-[#1193d4] text-white rounded-3xl hover:bg-[#0e80b3] transition-colors duration-200"
              >
                <CircleUser size={18} />
                <span>Sign In</span>
              </Link>
            </div>

            {/* 🍔 Mobile Menu Button */}
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

        {/* 🔍 Search Bar (toggle for mobile) */}
        {showSearch && (
          <div className="md:hidden mt-2 px-2 pb-2 animate-fadeIn">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#1193d4]"
              />
            </div>
          </div>
        )}

        {/* 📱 Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-fadeIn">
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-gray-700 hover:text-[#1193d4] hover:bg-gray-100 ${
                      isActive ? "text-[#1193d4] font-semibold" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              {/* 🔘 Mobile Buttons */}
              <div className="flex flex-col gap-2">
                <Link
                  to="/login"
                  className="block px-3 py-2 bg-[#1193d4] text-white rounded-md hover:bg-[#0e80b3] text-center transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
               
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ✨ Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
