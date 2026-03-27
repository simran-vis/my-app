import { useState } from "react";

export default function PatientDetails({ onNext }) {
  const [gender, setGender] = useState("male");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setStateName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");

  

  return (
    <div className="w-full max-w-xl mx-auto p-6 rounded-xl">

      {/* Title */}
      <h2 className="text-xl font-bold mb-4">Patient Details</h2>

      {/* Name & Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block font-medium mb-1 text-gray-600 text-sm">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4]
            text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
            placeholder="Enter full name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-600 text-sm">
            Mobile Number
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4]
            text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
            placeholder="Enter mobile number"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
      </div>

      {/* Email & Age */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block font-medium mb-1 text-gray-600 text-sm">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4]
            text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-600 text-sm">
            Age
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4]
            text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="block font-medium mb-2 text-gray-600 text-sm">
          Gender
        </label>
        <div className="flex gap-4 text-sm">
          {["male", "female", "other"].map((g) => (
            <label key={g} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                checked={gender === g}
                onChange={() => setGender(g)}
              />
              <span className="capitalize">{g}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Address */}
      <div className="mb-3">
        <label className="block font-medium mb-1 text-gray-600 text-sm">
          Address
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4]
          text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
          placeholder="House no, street, area"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* City / State / Zip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <div>
          <label className="block font-medium mb-1 text-gray-600 text-sm">
            City
          </label>
          <input
            className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4]
            text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-600 text-sm">
            State
          </label>
          <input
            className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4]
            text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
            placeholder="State"
            onChange={(e) => setStateName(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-600 text-sm">
            Zipcode
          </label>
          <input
            className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4]
            text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
            placeholder="Zipcode"
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
      </div>

      {/* Country */}
      <div className="mb-6">
        <label className="block font-medium mb-1 text-gray-600 text-sm">
          Country
        </label>
        <input
          className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4]
          text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      
   {/* Preview Button */}
     <div className="flex justify-center">
        <button
          type="button"
          className="w-48 py-2 bg-[#1193d4] text-white rounded-md
          text-sm font-semibold hover:bg-[#0e80b3]"
          onClick={() =>
            onNext({
              fullName,
              mobile,
              email,
              age,
              gender,
              address,
              city,
              state,
              zipcode,
              country,
            })
          }
        >
          Preview Details
        </button>
      </div>

    </div>
  );
}
