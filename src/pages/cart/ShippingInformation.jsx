import { useState } from "react";

export default function ShippingInformation({ onAddressSubmit }) {
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [addressType, setAddressType] = useState("home");
const [fullName, setFullName] = useState("");
const [mobile, setMobile] = useState("");
const [house, setHouse] = useState("");
const [street, setStreet] = useState("");
const [pincode, setPincode] = useState("");
const [city, setCity] = useState("");
const [state, setStateName] = useState("");
const [landmark, setLandmark] = useState("");

  return (
    <div className="w-full max-w-xl mx-auto   p-6 rounded-xl ">

      {/* Title */}
      <h2 className="text-xl font-bold mb-4">Shipping Information</h2>

      {/* Full Name */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
  
  {/* Full Name */}
  <div>
    <label className="block font-medium mb-1 text-gray-600 text-sm">Full Name</label>
    <input
      type="text"
className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4] text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
      placeholder="Enter full name"
       onChange={(e) => setFullName(e.target.value)}
    />
  </div>

  {/* Mobile Number */}
  <div>
    <label className="block font-medium mb-1 text-gray-600 text-sm">Mobile Number</label>
    <input
      type="text"
className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4] text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
      placeholder="Enter mobile number"
       onChange={(e) => setMobile(e.target.value)}
    />
  </div>

</div>


      {/* House / Flat / Floor */}
      <div className="mb-3">
        <label className="block font-medium mb-1 text-gray-600 text-sm">House / Flat / Floor</label>
        <input
          type="text"
className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4] text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
          placeholder="House no, flat no, floor"
           onChange={(e) => setHouse(e.target.value)}
        />
      </div>

      {/* Street / Road */}
      <div className="mb-3">
        <label className="block font-medium  text-gray-600 mb-1 text-sm">Street / Road</label>
        <input
          type="text"
className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4] text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
          placeholder="Street name, road name"
           onChange={(e) => setStreet(e.target.value)}
        />
      </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">

  {/* Pincode */}
  <div>
    <label className="block font-medium text-gray-600 mb-1 text-sm">Pincode</label>
    <input
      type="text"
className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4] text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
      placeholder="Enter pincode"
       onChange={(e) => setPincode(e.target.value)}
    />
  </div>

  {/* City */}
  <div>
    <label className="block font-medium text-gray-600 mb-1 text-sm">City</label>
    <input
      type="text"
className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4] text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
      placeholder="City"
       onChange={(e) => setCity(e.target.value)}
    />
  </div>

  {/* State */}
  <div>
    <label className="block font-medium mb-1 text-gray-600 text-sm">State</label>
    <input
      type="text"
className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4] text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
      placeholder="State"
       onChange={(e) => setStateName(e.target.value)}
    />
  </div>

</div>

      {/* Landmark */}
      <div className="mb-3">
        <label className="block font-medium mb-1 text-gray-600 text-sm">Landmark (Optional)</label>
        <input
          type="text"
className="w-full px-3 py-2 rounded-md bg-gray-80 border border-[#1193d4] text-sm focus:outline-[#1193d4] focus:ring-1 focus:ring-[#1193d4]"
          placeholder="Nearby landmark"
           onChange={(e) => setLandmark(e.target.value)}
        />
      </div>

      {/* Address Type */}
      <div className="mb-5">
        <label className="block font-medium mb-2 text-gray-600 text-sm">Address Type</label>
        <div className="flex gap-4 text-sm">
          {["home", "office", "other"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                checked={addressType === type}
                onChange={() => setAddressType(type)}
              />
              <span className="capitalize">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Delivery Options */}
      <h3 className="text-lg font-semibold text-gray-600 mt-6 mb-2">Delivery Options</h3>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">

        
  {/* Standard Delivery */}
  <label
    className={`flex items-center justify-between p-2.5 border rounded-md cursor-pointer 
      transition-all 
      ${deliveryOption === "standard" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
  >
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name="delivery"
        value="standard"
        checked={deliveryOption === "standard"}
        onChange={() => setDeliveryOption("standard")}
        className="h-4 w-4"
      />
      <span className="text-[13px]">Standard (3-5 days)</span>
    </div>
    <span className="font-semibold text-[13px]">$5</span>
  </label>

  {/* Express Delivery */}
  <label
    className={`flex items-center justify-between p-2.5 border rounded-md cursor-pointer 
      transition-all
      ${deliveryOption === "express" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
  >
    <div className="flex gap-2 items-center">
      <input
        type="radio"
        name="delivery"
        value="express"
        checked={deliveryOption === "express"}
        onChange={() => setDeliveryOption("express")}
        className="h-4 w-4"
      />
      <span className="text-[13px]">Express (1-2 days)</span>
    </div>
    <span className="font-semibold text-[13px]">$15</span>
  </label>

</div>
 {/* Save Button */}
   <div className="flex justify-center">
 <div className="flex justify-center">
  <button
    className="w-40 py-2 bg-[#1193d4] text-white rounded-md text-sm font-semibold hover:bg-[#0e80b3]"
    onClick={() => {
      const addressData = {
        fullName,
        mobile,
        house,
        street,
        pincode,
        city,
        state,
        landmark,
        addressType,
      };

      onAddressSubmit(addressData); // <-- send data to Cart
    }}
  >
    Save Address
  </button>
</div>

</div>

</div>

  );
}
