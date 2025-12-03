import { Stethoscope, Video, ShieldCheck, ClipboardCheck, Home, BadgeCheck, FileText } from "lucide-react";

export default function HealthServices() {
  return (
    <div className="w-full bg-[#F2F7FB] py-16 px-6">
     

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Left Card – Lab Test Booking */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
  
  {/* Header — Title + Image */}
  <div className="flex items-center justify-between">
    {/* LEFT SIDE */}
    <div>
      <h3 className="text-2xl font-semibold text-[#0A2540]">Lab Test Booking</h3>
      <p className="text-gray-600">Accurate, reliable, and convenient.</p>
    </div>

    {/* RIGHT SIDE — IMAGE */}
    <img
      src="/Lab-Test.webp"
      alt="Lab Test"
      className="w-32 h-32 object-contain"
    />
  </div>

  {/* Features */}
  <div className="mt-5 grid grid-cols-2 gap-3">
    <Feature icon={<Home size={18} />} text="Home Sample Collection" />
    <Feature icon={<BadgeCheck size={18} />} text="ISO/NABL Certified Labs" />
    <Feature icon={<FileText size={18} />} text="Fast Report Delivery" />
    <Feature icon={<ClipboardCheck size={18} />} text="Affordable Packages" />
  </div>
<hr className="mt-5 text-gray-300"/>
  {/* Popular Tests */}
<div className="mt-5">
  <h4 className="font-semibold text-gray-800 mb-4">Popular Tests</h4>

  <div className="flex flex-wrap gap-2">
    {["Full Body Checkup", "Diabetes Screening", "Thyroid Panel", "Vitamin Tests", "Fever Panel"].map((item) => (
<span className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 text-sm cursor-pointer hover:bg-[#0094E8] hover:border-[#0094E8] hover:text-white transition">

        {item}
      </span>
    ))}
  </div>
</div>


  {/* CTA button */}
  <button className="mt-8 w-full bg-[#0094E8] text-white py-3 rounded-lg font-medium hover:bg-[#027BC8] transition">
    Book Lab Test
  </button>

</div>


        {/* Right Card – Online Consultation */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">

  {/* Header — Title + Image */}
  <div className="flex items-center justify-between">
    {/* LEFT SIDE */}
    <div>
      <h3 className="text-2xl font-semibold text-[#0A2540]">Online Doctor Consultation</h3>
      <p className="text-gray-600">Expert advice is just a click away.</p>
    </div>

    {/* RIGHT SIDE — IMAGE */}
    <img
      src="/medical-advice.webp"
      alt="Doctor Consultation"
      className="w-32 h-32 object-contain"
    />
  </div>

  {/* Features */}
  <div className="mt-5 grid grid-cols-2 gap-3">
    <Feature icon={<Stethoscope size={18} />} text="24×7 Online Doctors" />
    <Feature icon={<Video size={18} />} text="Instant Video Calls" />
    <Feature icon={<FileText size={18} />} text="Digital Prescriptions" />
    <Feature icon={<ShieldCheck size={18} />} text="Private & Secure" />
  </div>
<hr className="mt-5 text-gray-300"/>

  {/* Top Specialties */}

<div className="mt-5">
  <h4 className="font-semibold text-gray-800 mb-4">Top Specialties </h4>

  <div className="flex flex-wrap gap-2">
    {[  "General Physician",
        "Dermatologist",
        "Gynecologist",
        "Pediatrician",
        "Cardiologist",].map((item) => (
<span className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 text-sm cursor-pointer hover:bg-[#0094E8] hover:border-[#0094E8] hover:text-white transition">

        {item}
      </span>
    ))}
  </div>
</div>
  {/* CTA Button */}
  <button className="mt-8 w-full bg-[#0094E8] text-white py-3 rounded-lg font-medium hover:bg-[#027BC8] transition">
    Consult Doctor
  </button>

</div>


      </div>
    </div>
  );
}

/* Reusable Feature Row Component */
function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-gray-700">
      <span className="bg-[#E8F3FF] p-2 rounded-full text-blue-500">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

/* Reusable Tag Component */
function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="bg-[#F3F7FB] text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
