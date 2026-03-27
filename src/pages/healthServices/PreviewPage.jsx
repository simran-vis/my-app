import { useNavigate } from "react-router-dom";

const PreviewPage = ({
  testName,
  slotData,
  patientData,
  onEditSlot,
  onEditPatient,
  onProceed,
}) => {
    const navigate = useNavigate();
 const handleProceed = () => {
    navigate("/payment", {
      state: {
        testName,
        slotData,
        patientData,
      },
    });
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Review & Confirm
        </h2>
        <p className="text-sm text-gray-500">
          Please verify your details before payment
        </p>
      </div>

      {/* TEST CARD */}
      <div className="mb-5 rounded-xl border bg-white p-4 shadow-sm">
        <p className="text-xs text-gray-500 mb-1">Selected Test</p>
        <h3 className="text-lg font-semibold text-[#1193d4]">
          {testName}
        </h3>
      </div>

      {/* VISIT DETAILS */}
      <div className="mb-5 rounded-xl border bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-gray-800">
            Visit Details
          </h3>
          <button
            onClick={onEditSlot}
            className="text-xs font-medium text-blue-600 hover:underline"
          >
            Edit
          </button>
        </div>

        <Detail label="Visit Type" value={slotData?.visitType} />
        <Detail label="Date" value={slotData?.date} />
        <Detail label="Time" value={slotData?.time} />
      </div>

      {/* PATIENT DETAILS */}
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-gray-800">
            Patient Details
          </h3>
          <button
            onClick={onEditPatient}
            className="text-xs font-medium text-blue-600 hover:underline"
          >
            Edit
          </button>
        </div>

        <Detail label="Full Name" value={patientData?.fullName} />
        <Detail label="Mobile" value={patientData?.mobile} />
        <Detail label="Email" value={patientData?.email} />
        <Detail label="Age" value={patientData?.age} />
        <Detail label="Gender" value={patientData?.gender} />
        <Detail
          label="Address"
          value={`${patientData?.address}, ${patientData?.city}, ${patientData?.state} - ${patientData?.zipcode}, ${patientData?.country}`}
        />
      </div>

      {/* FOOTER ACTION */}
       <div className="sticky bottom-0 mt-6 bg-white p-4 border-t">
        <button
          onClick={handleProceed}
          className="w-full rounded-lg bg-[#1193d4] py-3 text-sm font-semibold
          text-white shadow-md hover:bg-[#0f7fb8] transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div className="flex justify-between gap-3 border-b border-dashed py-2 last:border-none">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="text-sm font-medium text-gray-900 text-right">
      {value || "-"}
    </span>
  </div>
);

export default PreviewPage;
