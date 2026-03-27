import React, { useState } from "react";
import { CreditCard, QrCode, Wallet, Truck, Lock } from "lucide-react";

const PaymentPage = () => {
  const [method, setMethod] = useState("card");

  return (
    <div className="min-h-screen mt-5 bg-slate-100 px-4 py-8 flex justify-center">

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6">

      

        {/* TITLE */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Choose Payment Mode
          </h2>
          <p className="text-sm text-slate-500">
            Select a secure payment option to complete your booking
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* PAYMENT METHODS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <PayMode icon={<CreditCard size={18} />} label="Card" active={method === "card"} onClick={() => setMethod("card")} />
              <PayMode icon={<QrCode size={18} />} label="UPI" active={method === "upi"} onClick={() => setMethod("upi")} />
              <PayMode icon={<Wallet size={18} />} label="Wallet" active={method === "wallet"} />
              <PayMode icon={<Truck size={18} />} label="COD" active={method === "cod"} />
            </div>

            {/* PAYMENT FORM */}
            {method === "card" && (
              <div className="bg-slate-50 rounded-xl p-4 shadow-inner space-y-4">
                <Input label="Card Number" placeholder="0000 0000 0000 0000" />
                <Input label="Cardholder Name" placeholder="John Doe" />
                <div className="grid grid-cols-2 gap-3">
                  <Input label="Expiry" placeholder="MM / YY" />
                  <Input label="CVV" placeholder="123" />
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-600">
                  <input type="checkbox" />
                  Save card for future payments
                </label>
              </div>
            )}

            {method === "upi" && (
              <div className="bg-slate-50 rounded-xl p-4 shadow-inner space-y-3">
                <Input label="UPI ID" placeholder="example@upi" />
                <p className="text-xs text-slate-500">
                  You will be redirected to your UPI app to complete payment
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SUMMARY */}
          <div className="bg-slate-50 rounded-xl p-4 shadow-md h-fit">
            <h3 className="font-semibold text-sm mb-3">Order Summary</h3>

            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-500">Total Amount</span>
              <span className="text-xl font-bold text-slate-900">
                ₹1,299
              </span>
            </div>

            <button className="w-full mt-4 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 flex items-center justify-center gap-2">
              Pay Now <Lock size={14} />
            </button>

            <p className="text-[11px] text-center text-slate-500 mt-2">
              Secure & encrypted payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- COMPONENTS ---------- */

const Step = ({ label, active, done }) => (
  <div className={`flex items-center gap-2 text-sm
    ${active ? "text-blue-600 font-medium" : "text-slate-400"}`}>
    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
      ${done ? "bg-blue-600 text-white" : active ? "border-2 border-blue-600" : "border"}`}>
      {done ? "✓" : ""}
    </span>
    {label}
  </div>
);

const Divider = () => (
  <div className="w-10 h-px bg-slate-300" />
);

const PayMode = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`rounded-xl py-3 flex flex-col items-center gap-1 text-xs font-medium shadow
    ${active ? "bg-blue-50 text-blue-600" : "bg-white hover:bg-slate-50"}`}
  >
    {icon}
    {label}
  </button>
);

const Input = ({ label, placeholder }) => (
  <div>
    <label className="text-xs font-medium text-slate-600">{label}</label>
    <input
      placeholder={placeholder}
      className="w-full mt-1 px-3 py-2 rounded-lg text-sm shadow focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

export default PaymentPage;
