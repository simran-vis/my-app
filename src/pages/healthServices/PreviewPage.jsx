import { Pencil } from "lucide-react";

const PreviewPage = ({
  visitType,
  slotData,
  patientData,
  onEdit,
  onConfirm,
}) => {
  return (
    <div className="p-6 space-y-6">

      <h2 className="text-xl font-bold">Review & Confirm</h2>

      {/* Visit Type */}
      <div className="border rounded-lg p-4 flex justify-between">
        <div>
          <p className="text-sm font-medium">Visit Type</p>
          <p className="text-sm text-gray-600">
            {visitType === "home" ? "Home Collection" : "Lab Visit"}
          </p>
        </div>
        <button onClick={() => onEdit(1)}>
          <Pencil size={16} className="text-blue-600" />
        </button>
      </div>

      {/* Slot */}
      <div className="border rounded-lg p-4 flex justify-between">
        <div>
          <p className="text-sm font-medium">Date & Time</p>
          <p className="text-sm text-gray-600">
            {slotData?.date} | {slotData?.time}
          </p>
        </div>
        <button onClick={() => onEdit(2)}>
          <Pencil size={16} className="text-blue-600" />
        </button>
      </div>

      {/* Patient */}
      <div className="border rounded-lg p-4 flex justify-between">
        <div>
          <p className="text-sm font-medium">Patient Details</p>
          <p className="text-sm text-gray-600">
            {patientData?.name}, {patientData?.age} yrs, {patientData?.gender}
          </p>
        </div>
        <button onClick={() => onEdit(3)}>
          <Pencil size={16} className="text-blue-600" />
        </button>
      </div>

      {/* CTA */}
      <button
        onClick={onConfirm}
        className="w-full h-11 bg-blue-600 text-white rounded-md font-medium"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default PreviewPage;
