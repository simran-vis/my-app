import { useState, useRef, useEffect } from "react";
import { Calendar } from "lucide-react";

const DatePickerInput = ({ selectedDate, setSelectedDate }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      {/* Input */}
      <div
        onClick={() => setOpen(!open)}
        className="h-11 w-full border rounded-lg px-3 flex items-center justify-between cursor-pointer bg-white"
      >
        <span className="text-sm text-gray-700">
          {selectedDate ? `Dec ${selectedDate}, 2025` : "Select date"}
        </span>
        <Calendar size={18} className="text-gray-400" />
      </div>

      {/* Calendar Popover */}
      {open && (
        <div className="absolute top-12 left-0 z-50 bg-white border rounded-xl shadow-lg p-4 w-[280px]">
          <p className="text-center font-semibold mb-3">
            December 2025
          </p>

          <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 mb-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {[...Array(31)].map((_, i) => {
              const date = i + 1;
              return (
                <button
                  key={date}
                  onClick={() => {
                    setSelectedDate(date);
                    setOpen(false);
                  }}
                  className={`h-8 w-8 rounded-full text-sm
                    ${
                      selectedDate === date
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {date}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setSelectedDate(null)}
              className="text-sm border px-3 py-1 rounded-md"
            >
              Reset
            </button>
            <button
              onClick={() => setOpen(false)}
              className="text-sm bg-blue-600 text-white px-4 py-1 rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;
