import React, { useState } from "react";
import { User, MapPin } from "lucide-react";

const PatientDetailsPage = () => {
  const [gender, setGender] = useState("Male");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm px-6 py-6">

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold">Patient Details</h2>
            <p className="text-gray-500 text-sm">
              Enter patient information for the test
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm px-3 py-1.5 border rounded-md text-blue-600 hover:bg-blue-50">
            <User size={15} />
            Auto-fill
          </button>
        </div>

        {/* FORM */}
        <div className="space-y-5">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Age"
                className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4 mt-2">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      checked={gender === g}
                      onChange={() => setGender(g)}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="House no, street, area"
                className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* ADDRESS DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border rounded-md px-3 py-2 text-sm"
            />
            <select className="border rounded-md px-3 py-2 text-sm">
              <option>State</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>Karnataka</option>
            </select>
            <input
              type="text"
              placeholder="Pincode"
              className="border rounded-md px-3 py-2 text-sm"
            />
          </div>

          {/* CTA */}
          <div className="flex justify-end pt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Proceed to Payment →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientDetailsPage;
