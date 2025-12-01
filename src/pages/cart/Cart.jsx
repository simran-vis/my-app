import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import {
  ShieldCheck,
  Truck,
  Hospital,
  Lock,
  Ticket,
  Percent,
} from "lucide-react";
import { Icon } from "@iconify/react";
import ShippingInformation from "./ShippingInformation";


const Cart = () => {
const [showPopup, setShowPopup] = useState(false);
const [address, setAddress] = useState(null);


  const cartItems = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      mrp: 120,
      price: 99,
      quantity: 2,
      delivery: "Delivery by Tomorrow",
      image:       "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",

      discount: Math.round(((120 - 99) / 120) * 100),

    },
    {
      id: 2,
      name: "Ibuprofen 200mg",
      mrp: 150,
      price: 129,
  discount: Math.round(((120 - 99) / 120) * 100),
      quantity: 1,
      delivery: "Delivery in 2 Days",
      image:      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479",

    },
    {
      id: 3,
      name: "Vitamin C 1000mg",
      mrp: 300,
      price: 249,
      discount: 17,
      quantity: 1,
      delivery: "Delivery by Tomorrow",
      prescription: true,
      image:       "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479",
    },
  ];

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full mt-10 bg-neutral-light min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">

        {/* Page Title */}
      <div className="flex items-start justify-between mb-6">
  <h1 className="text-3xl font-bold text-neutral-dark">
    My Shopping Cart
  </h1>

  {/* Address Box (Right Side) */}
 {address && (
 <div className="flex items-start justify-between ">

  {/* Right Compact Address Box */}
{address && (
  <div className="p-3 bg-white border rounded-lg shadow-sm text-sm w-[360px]">

    {/* Heading + Edit Icon */}
    <div className="flex items-center justify-between mb-1">
      <p className="font-semibold text-gray-800">Delivery Address</p>

      <button
        onClick={() => setShowPopup(true)}
        className="text-blue-600 hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536M9 13l6.232-6.232m-9.464 9.464L9 13m0 0L4 18l-.707-3.293L9 13z"
          />
        </svg>
      </button>
    </div>

    {/* Name */}
    <p className="text-gray-700 font-medium">{address.fullName}</p>

    {/* One-line full address */}
    <p className="text-gray-600 truncate">
      {address.house}, {address.street}, {address.city}, {address.stateName} - {address.pincode}
    </p>
  </div>
)}
</div>
)}

</div>

     

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left - Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 rounded-lg  hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-4 shadow-sm border border-gray-200"
              >
                
                {/* Product Image */}
                <div className="w-24 h-24 bg-white rounded-lg overflow-hidden shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Item Info */}
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 ">
                    {item.name}
                  </h2>

                  {/* MRP + Price + Discount */}
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-lg font-bold text-primary">
                      ₹{item.price}
                    </span>
                    <span className="line-through text-secondary text-sm">
                      ₹{item.mrp}
                    </span>
                 <span className="text-pink-600 text-[11px] px-2 py-1 rounded text-xs  font-semibold">
  {item.mrp > 0 ? Math.round(((item.mrp - item.price) / item.mrp) * 100) : 0}% OFF
</span>


                  </div>

                  {/* Delivery Status */}
                  <p className="text-secondary text-sm mt-1">
                    🚚 {item.delivery}
                  </p>

                  {/* Prescription Required Badge */}
                  {item.prescription && (
                    <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-md inline-block mt-2">
                      Prescription Required
                    </span>
                  )}
                </div>

                {/* Quantity + Delete */}
<div className="flex items-center justify-end gap-4">

                  {/* Quantity Group Button */}
                  <div className="flex items-center bg-white shadow px-3 py-2 rounded-full gap-4">
                    <button className="text-2xl text-primary">−</button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button className="text-2xl text-primary">+</button>
                  </div>

                  {/* Delete Icon */}
                  <button className="text-red-500 hover:text-red-700 mt-3">
                    <Trash2 size={20} />
                  </button>
                </div>

              </div>
            ))}

           
          </div>


       
{/* Right - Summary */}
<div className="w-full flex flex-col gap-4">

  {/* Apply Coupon Button ABOVE Order Summary */}
  <button className="w-full py-3 bg-[#1193d4] rounded-lg text-white hover:bg-[#0e80b3] hover:text-white transition text-sm flex items-center justify-center gap-2">
    <Ticket size={16} /> Apply Coupon
  </button>

  {/* Summary Box */}
  <div className="bg-white rounded-lg border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md p-6 border h-fit w-full">
    <h3 className="text-xl font-semibold text-neutral-dark mb-4">
      Order Summary
    </h3>

    {/* Price Breakdown */}
    <div className="space-y-2 text-secondary text-sm">

      <div className="flex justify-between">
        <span>Total MRP</span>
        <span>₹205.93</span>
      </div>

      <div className="flex justify-between text-secondary">
        <span>Discount on MRP</span>
        <span className="text-green-600">- ₹53.18</span>
      </div>

      <div className="flex justify-between">
        <span className="flex items-center gap-1">
          <Ticket size={14} /> Coupon
        </span>
        <span>- ₹0</span>
      </div>

      <div className="flex justify-between">
        <span>Platform Fees</span>
        <span>₹10</span>
      </div>

      <div className="flex justify-between">
        <span>Handling Charges</span>
        <span>₹33</span>
      </div>

      <div className="flex justify-between">
        <span>Delivery Charges</span>
        <span>₹54</span>
      </div>
    </div>

    <hr className="my-4" />

    {/* Total Savings - GREEN BACKGROUND */}
    <div className="flex justify-between font-semibold text-sm bg-green-100 text-green-700 p-3 rounded-lg">
      <span>Total Savings</span>
      <span>₹53.18 (25.82%)</span>
    </div>

    <hr className="my-4" />

    {/* Final Amount */}
    <div className="flex justify-between text-lg font-bold text-neutral-dark mb-2">
      <span>Amount to be Paid</span>
      <span>₹{total}</span>
    </div>

   

    {/* Proceed to Checkout */}
    <button className="w-full py-3 bg-[#1193d4] text-white rounded-lg font-semibold hover:bg-[#0e80b3] transition mb-2"
     onClick={() => setShowPopup(true)}>
        Proceed to Checkout
    </button>

 <p className="text-xs text-secondary mb-1">
      *Final amount may change due to batch changes in medicines
    </p>
    {/* Footer Icons */}
    <div className="grid grid-cols-3 gap-3 text-center text-xs text-secondary mt-6">

  <div className="flex flex-col items-center">
    <Lock size={20} className="text-primary mb-1" />
    <span> Secure Payment</span>
  </div>

  <div className="flex flex-col items-center">
    <Hospital size={20} className="text-primary mb-1" />
    <span>Verified Pharmacy</span>
  </div>

  <div className="flex flex-col items-center">
    <Truck size={20} className="text-primary mb-1" />
    <span>Fast Delivery</span>
  </div>

</div>
{/* Payment Icons */}
 <div className="grid grid-cols-5 gap-2 items-center mt-2 justify-center">

    {/* PhonePe */}
    <Icon icon="simple-icons:phonepe" width="20" />

    {/* Google Pay */}
    <Icon icon="logos:google-pay" width="35" />

    {/* Paytm */}
    <Icon icon="simple-icons:paytm" width="32" color="#00baf2" />

    {/* Visa */}
    <Icon icon="logos:visa" width="30" />

    {/* MasterCard */}
    <Icon icon="logos:mastercard" width="28" />

  </div>
</div>

  </div>
</div>
{showPopup && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
<div className="bg-white p-6 rounded-2xl w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide shadow-xl relative">

      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-3 right-3 text-black rounded-full px-3 py-1"
      >
        X
      </button>

      {/* 👉 Shipping Form Component */}
<ShippingInformation onAddressSubmit={(value) => setAddress(value)} />

    </div>
  </div>
)}

        </div>
      </div>
  );
};

export default Cart;
