import React, { useState } from "react";
import Filter from "../../components/Filter";
import { FlaskConical , TestTube, Users, Shield, Timer, Ban, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";



const LabTest = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState(50);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
const iconMap = {
  science: FlaskConical ,
  
};

  const tests = [
    {
      id: 1,
      title: "25-Hydroxy Vitamin D",
      category: "Bone Health Profile",
      icon: "science",
      description:
        "Measures Vitamin D levels in your blood to screen for deficiency. Essential for bone health and immune system regulation.",
      reportTime: "24h",
      fasting: false,
      originalPrice: 49.0,
      price: 29.99,
      bestSeller: true,
    },
    {
      id: 2,
      title: "Vitamin D Plus Profile",
      category: "Includes 3 Parameters",
      icon: "science",
      description:
        "A comprehensive screening for Vitamin D, Calcium, and Phosphorus. Ideal for elderly patients or those with bone pain.",
      homeVisit: true,
      trusted: true,
      originalPrice: 120.0,
      price: 59.99,
      discount: "50% OFF",
    },
    {
      id: 3,
      title: "Total Vitamin Screen",
      category: "Vitamin B12 & D3",
      icon: "science",
      description:
        "Check the two most critical vitamins for energy and immunity. Recommended for fatigue and joint pain.",
      reportTime: "48h",
      price: 45.0,
    },
    {
      id: 4,
      title: "Senior Citizen Bone Care",
      category: "Comprehensive Package",
      icon: "science",
      description:
        "Designed specifically for seniors. Includes Vitamin D, Calcium, Rheumatoid Factor, and Alkaline Phosphatase.",
      fasting: true,
      originalPrice: 180.0,
      price: 149.0,
    },
  ];

  return (
    <>
      {/* Main Layout */}
<div className="min-h-screen flex bg-background-light text-text-main">
        <main className="flex-grow max-w-7xl mt-10 mx-auto w-full px-4 lg:px-8 py-8 flex gap-8">
          
          {/* ---------- SIDEBAR ---------- */}
          <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-200">
    <div className="sticky top-24 p-4 h-[calc(100vh-6rem)] overflow-y-auto">
      <Filter
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      />
    </div>
  </aside>

          {/* ---------- RESULTS AREA ---------- */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Heading */}
           
            {/* Test Cards */}
{/* Test Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {tests.map((test) => {
    const IconComponent = iconMap[test.icon];

    return (
      <div
        key={test.id}
        className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300 relative"
      >
        {/* BEST SELLER Badge */}
        {test.bestSeller && (
          <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
            BEST SELLER
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {test.title}
        </h3>

        {/* Category + Icon (Lucide) */}
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-3">
          {IconComponent && <IconComponent size={20} strokeWidth={1.5} />}
          <span>{test.category}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {test.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {test.reportTime && (
            <span className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded flex items-center gap-1">
              <Timer size={14} />
              Report in {test.reportTime}
            </span>
          )}

          {test.fasting !== undefined && (
            <span className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded flex items-center gap-1">
              <Ban size={14} />
              {test.fasting ? "Fasting Required" : "No Fasting"}
            </span>
          )}
        </div>

        {/* Divider */}
        <hr className="my-4 text-gray-300" />

        {/* Price + Buttons */}
        <div className="flex items-center justify-between">
          <div>
            {test.originalPrice && (
              <p className="text-xs text-gray-400 line-through">
                ${test.originalPrice.toFixed(2)}
              </p>
            )}
            <p className="text-2xl font-bold text-gray-900">
              ${test.price.toFixed(2)}
            </p>
          </div>

          <div className="flex gap-2">
            {/* Details button */}
          <button
  onClick={() => navigate(`/labtest/${test.id}`)}
  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50"
>
  Details
</button>


            {/* Add button (Lucide Cart) */}
            <button className="px-4 py-2 rounded-lg bg-[#1193d4] text-white text-sm font-semibold hover:bg-[#0e80b3] flex items-center gap-1">
              <ShoppingCart size={16} />
              Add
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>



          </div>
        </main>
      </div>
    </>
  );
};

export default LabTest;
