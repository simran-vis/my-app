import React from "react";
import { Building2, Star } from "lucide-react";

const InfoSection = () => {
  return (
    <div className="">

      {/* ABOUT LAB */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <Building2 className="text-blue-600" />
          <h3 className="font-semibold text-lg text-gray-900">
            About Medinest Labs
          </h3>
        </div>

        <p className="text-sm text-gray-600">
          15+ years experience · 2M+ tests completed · NABL Certified
        </p>
      </div>

      <Divider />

      {/* REVIEW */}
      <div className="p-6 sm:p-8">
        <h4 className="font-bold flex items-center gap-2 mb-2">
          <Star className="text-yellow-500" /> Customer Review
        </h4>

        <p className="text-sm italic text-gray-600">
          "Technician was professional and reports arrived on time."
        </p>
      </div>

    </div>
  );
};

const Divider = () => <hr className="border-gray-200" />;

export default InfoSection;
