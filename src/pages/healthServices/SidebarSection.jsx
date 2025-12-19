import React, { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";
import CommonCard from "../../components/CommonCard";
import { useNavigate } from "react-router-dom";
import VisitTypePopup from "./VisitTypePopup";


const SidebarSection = () => {
    const navigate = useNavigate();
  const [openVisitType, setOpenVisitType] = useState(false);
const [openBooking, setOpenBooking] = useState(false);

  const handleVisitTypeNext = (type) => {
    console.log("Selected Visit Type:", type);

    setOpenVisitType(false);

    // Next step (example)
    navigate("/select-date-time", {
      state: { visitType: type },
    });
  };
  return (
    <div className="sticky top-24">
      <CommonCard>

        <p className="text-sm text-gray-500">Total Package Cost</p>

        <div className="flex items-center gap-2 mt-2">
          <h2 className="text-3xl font-black">₹899</h2>
          <span className="line-through text-gray-400">₹1200</span>
          <span className="text-green-600 text-sm font-bold">25% OFF</span>
        </div>

        <div className="mt-6 space-y-3">
           <button
             onClick={() => setOpenBooking(true)}
            className="w-full h-12 bg-[#1193d4] text-white rounded-lg font-bold flex items-center justify-center gap-2"
          >
            Book Test Now <ArrowRight size={18} />
          </button>

           <button
      onClick={() => navigate("/cart")}
      className="w-full h-12 border-[#1193d4] border-[2px] text-[#1193d4] rounded-lg font-bold"
    >
      Add to Cart
    </button>
        </div>

        <p className="text-xs text-center text-gray-400 mt-4 flex justify-center items-center gap-1">
          <Lock size={12} /> Secure Payment · Free Cancellation
        </p>

      </CommonCard>
      <VisitTypePopup
  isOpen={openBooking}
  onClose={() => setOpenBooking(false)}
/>
    </div>
  );
};

export default SidebarSection;
