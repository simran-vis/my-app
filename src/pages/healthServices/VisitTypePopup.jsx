import { X } from "lucide-react";
import { useState } from "react";
import VisitTypeAndSlotStep from "./VisitTypeStep";
import PatientDetailsPage from "./PatientDetailsPage";

const VisitTypePopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [visitType, setVisitType] = useState("");
  const [slotData, setSlotData] = useState(null);
  const [patientData, setPatientData] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-3">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg relative max-h-[85vh] overflow-y-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center p-4 border-b">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="text-blue-600 text-sm"
            >
              ← Back
            </button>
          ) : <div />}

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* STEP 1 */}
    {step === 1 && (
  <VisitTypeAndSlotStep
    onNext={(data) => {
      console.log("Slot selected:", data);

      setSlotData(data); // ✅ correct
      setStep(2);        // ✅ Patient Details page
    }}
  />
)}
        {/* STEP 2 */}
   {step === 2 && (
  <PatientDetailsPage
    slotData={slotData}
    onNext={(data) => {
      setPatientData(data);
      setStep(3);
    }}
  />
)}



       
        {/* STEP 4 */}
        {step === 3 && (
          <PreviewPage
            visitType={visitType}
            slotData={slotData}
            patientData={patientData}
            onEdit={(s) => setStep(s)}
            onConfirm={() => setStep(5)}
          />
        )}

        {/* STEP 5 */}
        {step === 4 && <PaymentPage />}
      </div>
    </div>
  );
};


export default VisitTypePopup;
