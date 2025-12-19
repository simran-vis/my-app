import React from "react";
import {
  Info,
  ListChecks,
  Moon,
  Pill,
  Ban,
  Sun,
  ClipboardList,
  Syringe,
  ShieldCheck,
  Thermometer,
} from "lucide-react";
import { Check } from "lucide-react";

const DetailsSection = () => {
  return (
    <div className="">

      {/* ABOUT TEST */}
      <SectionWrapper title="About This Test" icon={<Info />}>
        <p className="text-gray-600 text-sm mb-3">
          <strong>What is measured?</strong> This panel measures 82 vital
          parameters including sugar, liver enzymes, kidney markers.
        </p>

        <p className="text-gray-600 text-sm mb-4">
          <strong>Why important?</strong> Helps detect silent diseases early.
        </p>

        <h2 className="font-semibold mb-4 text-gray-700">
          Conditions Detection
        </h2>

        <div className="flex flex-wrap gap-2">
          {[
            "Diabetes",
            "Anemia",
            "Liver Infection",
            "Kidney Disease",
            "High Cholesterol",
          ].map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <Divider />

      {/* PARAMETERS */}
      <SectionWrapper title="Included Parameters (82)" icon={<ListChecks />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Parameter title="Iron Deficiency Profile" count="3" />
          <Parameter title="Liver Function Test" count="11" />
          <Parameter title="Lipid Profile" count="8" />
          <Parameter title="Thyroid Profile" count="3" />
        </div>
      </SectionWrapper>

      <Divider />

      {/* PREPARATION */}
      <SectionWrapper title="Preparation Required" icon={<ClipboardList />}>
        <ul className="space-y-3 text-sm text-gray-600">
          <PrepItem icon={<Moon />} text="10-12 hours fasting required." />
          <PrepItem icon={<Pill />} text="Continue medicines unless advised." />
          <PrepItem icon={<Ban />} text="Avoid alcohol 24 hours before test." />
          <PrepItem icon={<Sun />} text="Morning sample recommended." />
        </ul>
      </SectionWrapper>

      <Divider />

      {/* SAMPLE PROCESS */}
      <SectionWrapper title="Sample Collection Process" icon={<Syringe />}>
        <div className="space-y-4">
          <Step num="1" text="Certified technician arrives at your selected slot." />
          <Step num="2" text="Safety check with new needle." />
          <Step num="3" text="Painless vacutainer blood collection." />

          <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} /> 100% Sterile
            </span>
            <span className="flex items-center gap-1">
              <Thermometer size={14} /> Temp Controlled
            </span>
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
};

/* =======================
   REUSABLE HELPERS
======================= */

const SectionWrapper = ({ title, icon, children }) => (
  <div className="p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-blue-600">{icon}</span>
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
    </div>
    {children}
  </div>
);

const Divider = () => (
  <hr className="border-gray-200" />
);

const Parameter = ({ title, count }) => (
  <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm">
    <CheckCircle />
    <div>
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="text-sm text-gray-500">{count} Parameters</p>
    </div>
  </div>
);

const PrepItem = ({ icon, text }) => (
  <li className="flex items-start gap-3">
    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 shrink-0 mt-0.5">
      {React.cloneElement(icon, {
        size: 14,
        className: "text-blue-600",
      })}
    </div>
    <span className="text-gray-600">{text}</span>
  </li>
);

const Step = ({ num, text }) => (
  <div className="flex gap-3">
    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
      {num}
    </div>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

const CheckCircle = () => (
  <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shrink-0">
    <Check size={16} className="text-white stroke-[3]" />
  </div>
);

export default DetailsSection;
