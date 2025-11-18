
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import FeaturedProducts from "../home/FeaturedProducts";

const thumbnails = [
  "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
  "https://images.unsplash.com/photo-1519864605495-cac20749e3f1",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
];

export default function ProductDetails() {
  const [mainImage, setMainImage] = useState(thumbnails[0]);
  const [qty, setQty] = useState(1);

  return (
    <div>
    <div className="w-full mt-10 px-6 py-10 bg-[#f8fafc] h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">

        {/* LEFT SECTION - Sticky Image + Thumbnails */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4 sticky top-24">
            {thumbnails.map((img) => (
              <div
                key={img}
                onClick={() => setMainImage(img)}
                className={`
                  w-20 h-20 border rounded-xl cursor-pointer p-1 transition-all
                  ${mainImage === img
                    ? "border-blue-600 shadow-md"
                    : "border-gray-300 hover:border-gray-400 hover:scale-105"}
                `}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover rounded-lg"
                  alt="Product Thumbnail"
                />
              </div>
            ))}
          </div>

          {/* Main Image + Badge + Actions */}
          <div className="relative sticky top-24">
            <span className="absolute top-2 right-2 bg-red-600 text-white text-sm px-3 py-1 rounded-full shadow-md font-semibold">
              20% OFF
            </span>

            <img
              src={mainImage}
              className="w-[400px] h-80 object-cover rounded-2xl bg-[#f9fafc] transition-transform duration-300 hover:scale-105 cursor-pointer"
              alt="Product"
            />

            <div className="mt-4 flex flex-col gap-3">
              <p className="text-3xl font-bold text-blue-600 whitespace-nowrap">
                $12.99
              </p>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center border border-[#1193d4] rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-1 py-2 hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-2 text-lg font-semibold">{qty}</span>

                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="px-1 py-2 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button className="bg-blue-600 text-white py-2 px-6 -mt-20 rounded-xl whitespace-nowrap transform transition-all duration-200 hover:scale-105 hover:shadow-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Scrollable Content */}
        <div className="space-y-8 overflow-y-auto pr-4 scrollbar-thin h-full">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Paracetamol 500mg Tablets
            </h1>
            <p className="text-sm text-gray-500 mt-1">(125 Reviews)</p>
          </div>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              Paracetamol is widely used for pain relief and fever reduction.
              Works effectively for headaches, body aches, and cold symptoms.
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Fast pain relief</li>
              <li>Safe for adults when taken as directed</li>
              <li>Clinically tested formula</li>
            </ul>
          </div>

          <div className="space-y-4">
            {["Full Ingredients", "Usage Instructions", "Doses", "How It Works", "Warnings"].map((title, idx) => (
              <details key={idx} className="border p-4 rounded-xl">
                <summary className="cursor-pointer font-semibold">{title}</summary>
                <p className="mt-2 text-gray-600">
                  {title === "Full Ingredients" &&
                    "Paracetamol 500mg, Microcrystalline Cellulose, Starch, Magnesium Stearate."}
                  {title === "Usage Instructions" &&
                    "Take 1-2 tablets with water as needed. Do not exceed 8 tablets in 24 hours."}
                  {title === "Doses" &&
                    "Adults: 500mg-1000mg every 4-6 hours as needed. Children: Follow pediatrician guidance."}
                  {title === "How It Works" &&
                    "Paracetamol works by blocking the production of prostaglandins in the brain which are chemicals that cause pain and fever."}
                  {title === "Warnings" &&
                    "Avoid exceeding the recommended dose. Not suitable for patients with liver disease. Consult a doctor if pregnant or breastfeeding."}
                </p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
    <div className="mt-2">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
        <FeaturedProducts columns="md:grid-cols-5" />
      </div>
    </div>
  );
}
