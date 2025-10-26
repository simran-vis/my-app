// HeaderBar.jsx
import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

const HeaderBar = () => {
  return (
    <div className="bg-[#1193d4] text-white py-2 sticky top-0 z-50 min-h-[48px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4">
        {/* Left Section: Phone and Email */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-1" />
            <span>+1-800-MEDICINE</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-1" />
            <span>Support@medstore.com</span>
          </div>
        </div>

        {/* Right Section: Language and Shipping Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Globe className="h-5 w-5 mr-1" />
            <select className="bg-[#1193d4] border-none text-white focus:outline-none appearance-none">
              <option>us EN</option>
              <option>es ES</option>
              <option>fr FR</option>
            </select>
          </div>
          <span>Free shipping on orders over $50</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;