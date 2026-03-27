import { X } from "lucide-react";
import { useState } from "react";
import VisitTypeAndSlotStep from "./VisitTypeStep";
import PatientDetailsPage from "./PatientDetailsPage";
import PreviewPage from "./PreviewPage";

const VisitTypePopup = ({ isOpen, onClose, testName }) => {
  const [step, setStep] = useState(1);
  const [slotData, setSlotData] = useState(null);
  const [patientData, setPatientData] = useState(null);

const [bookingData, setBookingData] = useState({
  testName,
  slot: null,
  patient: null,
});



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex mt-20 items-center justify-center px-3">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg h-[420px] flex flex-col">

        {/* HEADER */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-500">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="text-blue-600 text-xs"
            >
              ← Back
            </button>
          ) : <div />}

          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto">
          {step === 1 && (
          <VisitTypeAndSlotStep
  onNext={(data) => {
    setSlotData(data);

    setBookingData((prev) => ({
      ...prev,
      slot: data,          // ✅ save slot
    }));

    setStep(2);
  }}
/>
          )}

    {step === 2 && (
   <PatientDetailsPage
    slotData={slotData}
   onNext={(data) => {
  setPatientData(data);

  setBookingData((prev) => ({
    ...prev,
    patient: data,   // ✅ MOST IMPORTANT LINE
  }));

  setStep(3);
}}

  />
)}


{step === 3 && (
  <PreviewPage
    testName={bookingData.testName}   // ✅
    slotData={bookingData.slot}       // ✅
    patientData={bookingData.patient}
    onEditSlot={() => setStep(1)}
    onEditPatient={() => setStep(2)}
    onProceed={() => {
      console.log("Go to payment", bookingData);
    }}
  />
)}

        </div>
      </div>
    </div>
  );
};

export default VisitTypePopup;
