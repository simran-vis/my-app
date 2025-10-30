import React from "react";
import { Phone, Mail, Globe } from "lucide-react";

const HeaderBar = () => {
  return (
    <div className="bg-[#1193d4] text-white py-2 sticky top-0 z-50 min-h-[48px] overflow-hidden relative">
      {/* 🌐 Fixed language selector on right side */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2 z-50 bg-[#fff] px-2 py-1 rounded-lg shadow-md">
        <Globe className="h-5 w-5 text-[#1193d4]" />
        <select className="bg-transparent border-none text-[#1193d4] focus:outline-none appearance-none cursor-pointer text-sm sm:text-base">
          <option>us EN</option>
          <option>es ES</option>
          <option>fr FR</option>
        </select>
      </div>

      {/* 📧☎️ Scrolling contact info */}
      <div className="overflow-hidden relative z-10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-sm sm:text-base py-1">
          {/* Repeat content twice for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Phone className="h-5 w-5" />
                <span>+1-800-MEDICINE</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Mail className="h-5 w-5" />
                <span>Support@medstore.com</span>
              </div>
              <span className="whitespace-nowrap">
                Free shipping on orders over $50
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 🎬 Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeaderBar;
