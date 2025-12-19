import React from "react";
import {
  ShieldCheck,
  TestTube2,
  Clock,
  UtensilsCrossed,
  Home,
} from "lucide-react";

const TestOverviewSection = () => {
  return (
    <div>

      {/* TOP CONTENT */}
      <div className="p-4 sm:p-5">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-1">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
            Health Package
          </span>

          <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide flex items-center gap-1">
            <ShieldCheck size={13} /> NABL Certified
          </span>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-3xl font-bold mb-2 tracking-tight">
          Comprehensive Full Body Checkup
        </h1>

        <p className="text-gray-500 text-sm leading-snug">
          A complete assessment of your vital organs including Heart, Liver,
          Kidney, and Thyroid.
        </p>
      </div>

      <Divider />

      {/* INFO GRID */}
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <InfoCard icon={<TestTube2 size={18} />} label="Sample Type" value="Blood & Urine" />
          <InfoCard icon={<Clock size={18} />} label="Report Time" value="24 Hours" />
          <InfoCard icon={<UtensilsCrossed size={18} />} label="Fasting" value="10–12 Hrs" />
          <InfoCard icon={<Home size={18} />} label="Collection" value="Home Available" />
        </div>
      </div>

    </div>
  );
};

const Divider = () => <hr className="border-gray-200" />;

const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-start gap-2 p-2 rounded-xl bg-gray-100">
    <div className="bg-[#1193d4] p-1.5 rounded-lg text-white">
      {icon}
    </div>
    <div>
      <p className="text-[11px] text-gray-500 uppercase font-semibold">
        {label}
      </p>
      <p className="text-sm font-medium text-gray-800">
        {value}
      </p>
    </div>
  </div>
);

export default TestOverviewSection;
