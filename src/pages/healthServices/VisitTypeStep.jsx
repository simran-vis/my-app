
import { useState } from "react";
import { Building2, Home, Info, Sun, Sunset } from "lucide-react";
import Button from "../../components/Button";
import DatePickerInput from "../../components/DatePickerInput";

/* ---------- Time Button ---------- */
const TimeButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`h-8 px-3 rounded-md border text-xs transition
      ${
        active
          ? "border-[#1193d4] bg-[#E9F6FD] text-[#1193d4] font-semibold"
          : "hover:border-gray-400"
      }`}
  >
    {label}
  </button>
);

const VisitTypeAndSlotStep = ({ onNext }) => {
  const [visitType, setVisitType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  return (
<div className="p-6 space-y-6">
      {/* ---------- TITLE ---------- */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          Choose visit type & slot
        </h1>
        <p className="text-sm text-gray-600">
          Select how and when you want to take your test
        </p>
      </div>

      {/* ---------- VISIT TYPE ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Lab Visit */}
        <div
          onClick={() => setVisitType("lab")}
          className={`cursor-pointer rounded-xl border p-4 transition
          ${
            visitType === "lab"
              ? "border-blue-600 shadow-sm"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex justify-between">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <Building2 size={20} className="text-blue-600" />
            </div>
            <input
              type="radio"
              checked={visitType === "lab"}
              readOnly
              className="w-4 h-4 accent-blue-600"
            />
          </div>

          <h3 className="text-sm font-semibold mt-3">
            Lab / Hospital Visit
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            Visit a nearby center
          </p>

          <ul className="mt-3 space-y-1 text-xs">
            <li className="text-green-600">✓ Save up to 20%</li>
            <li className="text-green-600">✓ 400+ Centers</li>
          </ul>
        </div>

        {/* Home Collection */}
        <div
          onClick={() => setVisitType("home")}
          className={`cursor-pointer rounded-xl border p-4 transition
          ${
            visitType === "home"
              ? "border-blue-600 shadow-sm"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex justify-between">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <Home size={20} className="text-blue-600" />
            </div>
            <input
              type="radio"
              checked={visitType === "home"}
              readOnly
              className="w-4 h-4 accent-blue-600"
            />
          </div>

          <h3 className="text-sm font-semibold mt-3">
            Home Sample Collection
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            Expert visits your home
          </p>

          <ul className="mt-3 space-y-1 text-xs">
            <li className="text-green-600">✓ Convenient & Private</li>
            <li className="text-green-600">✓ Safety Protocols</li>
            <li>
              <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-[10px]">
                Convenience fee applies
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- DATE & TIME ---------- */}
      {visitType && (
        <div className="space-y-4">

          <h3 className="text-sm font-semibold">
            Select Date & Time
          </h3>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

  {/* Date Field */}
  <div className="flex flex-col">
    <label className="text-xs font-medium mb-1">
      Select Date
    </label>

    <DatePickerInput
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      className="w-full h-10 border border-gray-300 rounded-md px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1193d4] disabled:bg-gray-100"
    />
  </div>

  {/* Time Field */}
  <div className="flex flex-col">
    <label className="text-xs font-medium mb-1">
      Choose Your Time
    </label>

    <input
      type="time"
      disabled={selectedTime?.includes("AM")}
      className="w-full h-10 border border-gray-300 rounded-md px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1193d4] disabled:bg-gray-100"
      onChange={(e) => setSelectedTime(e.target.value)}
    />
  </div>

</div>
          {/* Morning */}
          <div>
            <p className="flex items-center gap-1 text-xs font-medium mb-2">
              <Sun size={14} /> Morning
            </p>
            <div className="grid grid-cols-3 sm:flex gap-2">
              {["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"].map((time) => (
                <TimeButton
                  key={time}
                  label={time}
                  active={selectedTime === time}
                  onClick={() => setSelectedTime(time)}
                />
              ))}
            </div>
          </div>

          {/* Afternoon */}
          <div>
            <p className="flex items-center gap-1 text-xs font-medium mb-2">
              <Sunset size={14} /> Afternoon
            </p>
            <div className="grid grid-cols-3 sm:flex gap-2">
              {["12:00 PM", "01:00 PM", "03:00 PM"].map((time) => (
                <TimeButton
                  key={time}
                  label={time}
                  active={selectedTime === time}
                  onClick={() => setSelectedTime(time)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------- BOTTOM CTA ---------- */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-gray-50 border border-gray-500 rounded-lg p-3">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Info size={14} />
          <span>
            Most users prefer{" "}
            <span className="text-blue-600 font-medium">
              Home Collection
            </span>
          </span>
        </div>

     <Button
  className="w-20  h-10 bg-[#1193d4] text-white font-semibold rounded-lg hover:bg-[#0f7fb6] transition disabled:opacity-50 disabled:cursor-not-allowed"
  disabled={!selectedDate || !selectedTime || !visitType}
  onClick={() =>
    onNext({
      visitType,          // ✅ ADD THIS
      date: selectedDate,
      time: selectedTime,
    })
  }
>
  Continue
</Button>



      </div>
    </div>
  );
};

export default VisitTypeAndSlotStep;
