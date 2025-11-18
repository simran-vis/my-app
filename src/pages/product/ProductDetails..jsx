import { useState } from "react";
import { Star, Minus, Plus, ShoppingCart } from "lucide-react";

export default function ProductDetails() {
  // ================= IMAGE STATE =================
  const [mainImage, setMainImage] = useState(      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
);

  const thumbnails = [
         "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",

  ];

  return (
    <div className="w-full px-4 mt-10 md:px-10 py-10 bg-[#f8fafc]">

      {/* ============================ MAIN WRAPPER ============================ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ========================== LEFT — FIXED IMAGE ========================== */}
        <div className="sticky top-24 h-fit">
          <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100">
            <img
              src={mainImage}
              alt="Product"
              className="rounded-2xl w-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4">
            {thumbnails.map((img) => (
              <div
                key={img}
                onClick={() => setMainImage(img)}
                className={`
                  w-20 h-20 rounded-xl border p-1 cursor-pointer transition 
                  hover:scale-105 
                  ${
                    mainImage === img
                      ? "border-blue-500 shadow-lg"
                      : "border-gray-300"
                  }
                `}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ========================== RIGHT — CONTENT ========================== */}
        <div className="space-y-8">

          {/* PRODUCT TITLE + REVIEWS */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Paracetamol 500mg Tablets
            </h1>
            <p className="text-sm text-gray-500 mt-1">(125 Reviews)</p>
          </div>

          {/* PRICE + ADD TO CART */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-3xl font-bold text-blue-600">$12.99</p>

            <div className="flex items-center gap-4 mt-4">
              <button className="px-3 py-2 border rounded-lg">-</button>
              <span>1</span>
              <button className="px-3 py-2 border rounded-lg">+</button>

              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg transition">
                Add to Cart
              </button>
            </div>

            {/* PRODUCT CODE */}
            <div className="mt-4 text-sm text-gray-600 border-t pt-3">
              <p>
                <span className="font-semibold text-gray-800">
                  Product Code:
                </span>{" "}
                MED-PARA-500
              </p>
            </div>

            {/* badges */}
            <div className="flex gap-6 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">✔ FDA Approved</div>
              <div className="flex items-center gap-1">✔ Pharmacist Recommended</div>
            </div>
          </div>

          {/* ========================== DOSAGE INFO ========================== */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-3">Dosage Information</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li><b>Adults:</b> 1–2 tablets every 4 to 6 hours.</li>
              <li>Do not exceed more than 8 tablets in 24 hours.</li>
              <li>Not recommended for children under 12 years.</li>
              <li>Always read the leaflet.</li>
            </ul>
          </div>

          {/* ========================== HOW IT WORKS ========================== */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-xl font-semibold mb-3">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src="/images/how.png" className="rounded-xl shadow" />

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Step 1: Ingestion</h3>
                  <p className="text-gray-600 text-sm">Take one tablet with water.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Step 2: Absorption</h3>
                  <p className="text-gray-600 text-sm">
                    Absorbed quickly into bloodstream.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Step 3: Action</h3>
                  <p className="text-gray-600 text-sm">
                    Reduces fever & provides pain relief.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================== DETAILS ACCORDION ========================== */}
          <div className="space-y-4">
            {["Full Ingredients", "Usage Instructions", "Warnings"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-white p-4 rounded-xl shadow border border-gray-100 cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{item}</span>
                    <span>⌄</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* ========================== RELATED PRODUCTS ========================== */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-6">Related Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Vitamin C Tablets", price: "$8.50", img: "vitc.png" },
            { name: "Cough Syrup", price: "$15.20", img: "cough.png" },
            { name: "Pain Relief Gel", price: "$11.75", img: "gel.png" },
            { name: "Hand Sanitizer", price: "$4.99", img: "sanitizer.png" },
          ].map((p) => (
            <div
              key={p.name}
              className="bg-white p-4 rounded-2xl shadow border hover:shadow-xl transition"
            >
              <img
                src={`/images/${p.img}`}
                className="h-40 w-full object-cover rounded-xl"
              />
              <h3 className="font-semibold mt-3">{p.name}</h3>
              <p className="text-blue-600 font-bold">{p.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
