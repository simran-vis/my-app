import React from "react";
import { useLocation, useParams } from "react-router-dom";

import TestOverviewSection from "./TestOverviewSection";
import DetailsSection from "./DetailsSection";
import InfoSection from "./InfoSection";
import SidebarSection from "./SidebarSection";

const LabDetailsPage = () => {
  const { id } = useParams();
  const { state } = useLocation();

  return (
    <div className="w-full mt-10 bg-[#F8FAFC]">

      {/* PAGE CONTAINER */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">

        <div className="flex flex-col lg:flex-row gap-8 items-start">

       {/* LEFT CONTENT - SINGLE CARD */}
<div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">

  <div className="p-6 sm:p-8">
    <TestOverviewSection />
  </div>

  <hr className="border-gray-200" />

  <div className="p-6 sm:p-8">
    <DetailsSection />
  </div>

  <hr className="border-gray-200" />

  <div className="p-6 sm:p-8">
    <InfoSection />
  </div>

</div>



          {/* RIGHT SIDEBAR (STICKY & CLEAN) */}
          <div className="hidden lg:block w-[360px] shrink-0">
            <div className="sticky top-28">
              <SidebarSection />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LabDetailsPage;
