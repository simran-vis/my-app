
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";



const products = [
  {
    name: "TADACIP 20MG TABLET 4'S",
    mrp: 246.15,
    price: 44,
    discount: "82.12% OFF",
    company: "CIPLA PHARMACEUTICAL",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479",
  },
   {
    name: "TADACIP 20MG TABLET 4'S",
    mrp: 246.15,
    price: 44,
    discount: "82.12% OFF",
    company: "CIPLA PHARMACEUTICAL",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479",
  },
   {
    name: "TADACIP 20MG TABLET 4'S",
    mrp: 246.15,
    price: 44,
    discount: "82.12% OFF",
    company: "CIPLA PHARMACEUTICAL",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479",
  },
   {
    name: "TADACIP 20MG TABLET 4'S",
    mrp: 246.15,
    price: 44,
    discount: "82.12% OFF",
    company: "CIPLA PHARMACEUTICAL",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479",
  },
   {
    name: "TADACIP 20MG TABLET 4'S",
    mrp: 246.15,
    price: 44,
    discount: "82.12% OFF",
    company: "CIPLA PHARMACEUTICAL",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479",
  },
   {
    name: "TADACIP 20MG TABLET 4'S",
    mrp: 246.15,
    price: 44,
    discount: "82.12% OFF",
    company: "CIPLA PHARMACEUTICAL",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479",
  },
   {
    name: "TADACIP 20MG TABLET 4'S",
    mrp: 246.15,
    price: 44,
    discount: "82.12% OFF",
    company: "CIPLA PHARMACEUTICAL",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479",
  },
  {
    name: "Cetaphil Gentle Cleanser",
    mrp: 399,
    price: 249,
    discount: "37.59% OFF",
    company: "CETAPHIL",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/I44087/cetaphil-gentle-skin-cleanser-1000ml-2-1669711313.jpg?dim=1440x0",
  },
  {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
   {
    name: "TADACIP 20MG TABLET 4'S",
    mrp: 246.15,
    price: 44,
    discount: "82.12% OFF",
    company: "CIPLA PHARMACEUTICAL",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479",
  },
  {
    name: "Cetaphil Gentle Cleanser",
    mrp: 399,
    price: 249,
    discount: "37.59% OFF",
    company: "CETAPHIL",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/I44087/cetaphil-gentle-skin-cleanser-1000ml-2-1669711313.jpg?dim=1440x0",
  },
  {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
  {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
  {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
  {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
   {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
   {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
   {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
   {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
   {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
   {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
   {
    name: "Livogen Gummies Bottle",
    mrp: 299,
    price: 199,
    discount: "33.44% OFF",
    company: "LIVOGEN",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0",
  },
  
];

const FeaturedProducts = ({columns = "md:grid-cols-4" }) => {
    const navigate = useNavigate();   // ✅ MUST HAVE INSIDE COMPONENT
const { addToCart, message } = useCart();

  return (
    <div className="container mx-auto py-8 px-4 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Featured Products</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Discover our most popular and trusted healthcare products
          </p>
        </div>
      <a
  onClick={() => navigate("/product")}
  className="text-blue-500 hover:underline ml-4 whitespace-nowrap text-sm sm:text-base cursor-pointer"
>
  View All &gt;
</a>

      </div>

      {/* Grid */}
     <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-8`}>
      {products.map((p, index) => (
      <div
  key={index}
  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3"
>
  {/* Image + Details Wrapper */}
  <div className="flex flex-row md:flex-col gap-3">

    {/* Product Image */}
    <img
      src={p.image}
      alt={p.name}
      onClick={() => navigate("/productdetails")}
      className="w-20 h-20 object-contain rounded-md flex-shrink-0 
                 md:w-full md:h-32"
    />

    {/* Product Details */}
    <div className="flex flex-col justify-between w-full">
      <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
        {p.name}
      </h3>

      <p className="text-[11px] text-gray-500">By {p.company}</p>

      <div className="mt-1">
        <p className="text-[11px] text-gray-400 line-through">
          MRP ₹{p.mrp}
        </p>
        <div className="flex items-center gap-1">
          <p className="text-base font-bold text-black">₹{p.price}</p>
          <span className="text-pink-600 text-[11px] font-semibold">
            {p.discount}
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Add Button */}
  <button
  onClick={() => addToCart(p)}
  className="text-white bg-[#1193d4] w-full py-1.5 rounded-md text-xs hover:bg-[#0e80b3] hover:scale-105 transition-transform duration-200">
    Add to card
  </button>
</div>
  ))}
</div>
    </div>
  );
};

export default FeaturedProducts;
