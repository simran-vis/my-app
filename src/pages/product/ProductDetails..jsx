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
    <div className="bg-[#f8fafc]">

      {/* PRODUCT SECTION */}
      <div className="w-full mt-10 px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT SECTION */}
          <div className="flex flex-col sm:flex-row gap-6">

            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 order-2 sm:order-1 justify-center">
              {thumbnails.map((img) => (
                <button
                  key={img}
                  onClick={() => setMainImage(img)}
                  className={`w-16 h-16 border rounded-md p-1 transition
                  ${
                    mainImage === img
                      ? "border-[#1193d4] ring-1 ring-[#1193d4]/40"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt="Thumbnail"
                    className="w-full h-full object-contain rounded-sm"
                  />
                </button>
              ))}
            </div>

            {/* Image + Actions */}
            <div className="flex flex-col gap-4 order-1 sm:order-2 w-full">

              {/* Image */}
              <div className="relative bg-white border rounded-lg p-4 flex justify-center items-center">
                <span className="absolute top-2 right-2 bg-green-600 text-white text-[11px] px-2 py-0.5 rounded">
                  20% OFF
                </span>

                <img
                  src={mainImage}
                  alt="Product"
                  className="w-full max-w-xs sm:max-w-sm h-60 sm:h-72 object-contain"
                />
              </div>

              {/* Price */}
              <p className="text-xl font-semibold text-gray-900">
                $12.99
              </p>

              {/* Qty + Button */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">

                <div className="flex items-center border rounded-sm overflow-hidden w-max">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-3 text-sm font-medium">{qty}</span>

                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button className="bg-[#1193d4] text-white px-5 py-2 rounded-md text-sm
                hover:bg-[#0e80b3] transition w-full sm:w-auto">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col gap-4">

            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Paracetamol 500mg Tablets
              </h1>
              <p className="text-sm text-[#1193d4] mt-1 cursor-pointer">
                (125 Reviews)
              </p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
              Paracetamol is widely used for pain relief and fever reduction.
              Works effectively for headaches, body aches, and cold symptoms.
            </p>

            <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
              <li>Fast pain relief</li>
              <li>Safe for adults when taken as directed</li>
              <li>Clinically tested formula</li>
            </ul>

            <div className="border-t border-gray-200 mt-4">
              {[
                "Full Ingredients",
                "Usage Instructions",
                "Doses",
                "How It Works",
                "Warnings",
              ].map((title, idx) => (
                <details key={idx} className="border-b border-gray-200 py-3">
                  <summary className="cursor-pointer text-sm font-medium text-gray-900">
                    {title}
                  </summary>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Content goes here
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Related Products
          </h2>
          <FeaturedProducts columns="md:grid-cols-5" />
        </div>
      </div>

    </div>
  );
}
