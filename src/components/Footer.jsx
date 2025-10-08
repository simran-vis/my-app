// Footer.jsx
import React from 'react';
import logo from "../assets/logo2.png";
import { Link, NavLink } from 'react-router-dom';
import { Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a2a44] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
             <Link to="/" className="flex items-center">
   <img src={logo} alt="Medinest Logo" className="h-10 w-auto" />
<span className='font-bold text-2xl text-[#1193d4] '>              <h3 className="text-xl font-bold">MedStore</h3>
</span>
  </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted online pharmacy providing quality medicines and healthcare products with fast, secure delivery.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-gray-400 hover:text-[#1193d4] transition-colors duration-200" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-[#1193d4] transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Safety Information</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Drug Interactions</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Prescription Upload</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Prescription Drugs</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Over-the-Counter</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Vitamins & Supplements</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Personal Care</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-[#1193d4] transition-colors duration-200">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 MedStore. All rights reserved. | Licensed Pharmacy</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400">Secure Payment Methods:</span>
            <span className="text-gray-400">Visa</span>
            <span className="text-gray-400">Mastercard</span>
            <span className="text-gray-400">American Express</span>
            <span className="text-gray-400">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;