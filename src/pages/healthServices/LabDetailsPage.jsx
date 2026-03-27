

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TestTube2,
  Clock,
  UtensilsCrossed,
  Home,
  Lock,
} from "lucide-react";

import { labTestData } from "./labTestData";
import VisitTypePopup from "./VisitTypePopup";

// Icon mapping
const iconMap = {
  TestTube2,
  Clock,
  UtensilsCrossed,
  Home,
};

const LabDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [openBooking, setOpenBooking] = useState(false);

  // Get selected test data
  const testData = labTestData.find((item) => item.id === Number(id));

  // If data not found
  if (!testData) {
    return (
      <p className="text-center mt-10 text-red-500 font-medium">
        Test not found
      </p>
    );
  }

  const { name, description, tags, overview, about, labInfo, price } = testData;

  return (
    <div className="bg-[#F8FAFC] mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-8">

        {/* LEFT SECTION */}
        <div className="bg-white flex-1 rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          {/* OVERVIEW */}
          <section className="p-6">
            <div className="flex gap-2 mb-3 flex-wrap">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-sm text-gray-500 mt-1">{description}</p>

            {/* Overview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
              {overview?.map((item) => {
                const IconComponent = iconMap[item.icon];

                return (
                  <div
                    key={item.label}
                    className="flex gap-3 p-3 bg-gray-100 rounded-xl items-center"
                  >
                    {IconComponent && (
                      <div className="bg-[#1193d4] text-white p-2 rounded-lg">
                        <IconComponent size={16} />
                      </div>
                    )}

                    <div>
                      <p className="text-[11px] uppercase text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <hr className="border-gray-500"/>

          {/* ABOUT SECTION */}
          <section className="p-6 text-sm text-gray-600">
            <p>
              <strong>What is measured?</strong> {about?.measured}
            </p>

            <p className="mt-2">
              <strong>Why important?</strong> {about?.importance}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {about?.conditions?.map((condition) => (
                <span
                  key={condition}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold"
                >
                  {condition}
                </span>
              ))}
            </div>
          </section>

          <hr className="border-gray-500"/>

          {/* LAB INFO */}
          <section className="p-6">
            <h3 className="font-semibold">{labInfo?.name}</h3>
            <p className="text-sm text-gray-600">{labInfo?.experience}</p>

            <p className="italic text-sm text-gray-500 mt-3">
              “{labInfo?.review}”
            </p>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="w-[360px] sticky top-28 hidden lg:block">
          <div className="bg-white rounded-2xl p-6  shadow-sm">

            <p className="text-sm text-gray-500">Total Package Cost</p>

            <div className="flex items-center gap-2 mt-2">
              <h2 className="text-3xl font-black">₹{price?.selling}</h2>

              <span className="line-through text-gray-400">
                ₹{price?.mrp}
              </span>

              <span className="text-green-600 font-bold text-sm">
                {price?.discount}% OFF
              </span>
            </div>

            {/* BOOK TEST BUTTON */}
            <button
              onClick={() => setOpenBooking(true)}
              className="w-full mt-4 h-12 border-2 border-[#1193d4] text-[#1193d4] rounded-lg font-bold hover:bg-[#1193d4] hover:text-white transition"
            >
              Book Test Now
            </button>

            {/* POPUP */}
            <VisitTypePopup
              isOpen={openBooking}
              onClose={() => setOpenBooking(false)}
              testName={name}
            />

            {/* ADD TO CART */}
            <button
              onClick={() => navigate("/cart")}
              className="w-full mt-3 h-12 border-2 border-[#1193d4] text-[#1193d4] rounded-lg font-bold hover:bg-[#1193d4] hover:text-white transition"
            >
              Add to Cart
            </button>

            <p className="text-xs text-gray-400 mt-4 flex justify-center gap-1">
              <Lock size={12} /> Secure Payment · Free Cancellation
            </p>

          </div>
        </aside>
      </div>
    </div>
  );
};

export default LabDetailsPage;