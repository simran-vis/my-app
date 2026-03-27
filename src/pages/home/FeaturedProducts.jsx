
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Heart } from "lucide-react";
import { useState } from "react";



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
const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4 bg-gray-50">
      {/* Header */}
     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2 sm:gap-0">
  
  {/* Heading + Description */}
  <div className="flex-1 text-center sm:text-left">
    <h1 className="text-xl sm:text-3xl font-bold">
      Trusted Healthcare Products
    </h1>

    {/* ❌ Mobile pe hide, Tablet/Laptop pe show */}
    <p className="hidden sm:block text-gray-600 text-sm sm:text-base">
      Quality medicines chosen by thousands of customers
    </p>
  </div>

  {/* Button */}
  <a
    onClick={() => navigate("/product")}
    className="text-blue-500 hover:underline text-sm sm:text-base
    cursor-pointer text-center sm:text-right"
  >
    View All &gt;
  </a>

</div>

      {/* Grid */}
     <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ${columns} gap-4 sm:gap-6`}>
  {products.map((p, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-sm hover:shadow-md
      transition-all duration-300 flex flex-col p-3"
    >
      {/* Image */}

<div
  onClick={() => navigate("/productdetails")}
  className="relative cursor-pointer mb-2"
>
  {/* Wishlist Icon */}
<button
  onClick={(e) => {
    e.stopPropagation();
    setWishlisted(!wishlisted);
  }}
  className="absolute top-1.5 right-1 z-10
   p-1
  hover:scale-110 active:scale-95 transition-transform"
>
  <Heart
    className={`w-6 h-6 transition-colors duration-200 ${
      wishlisted
        ? "text-pink-600 fill-pink-600"
        : "text-gray-600"
    }`}
  />
</button>



  {/* Image Wrapper */}
  <div className="flex justify-center items-center h-28 sm:h-40">
    <img
      src={p.image}
      alt={p.name}
      className="max-h-full max-w-full object-contain"
    />
  </div>
</div>



      {/* Details */}
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
          {p.name}
        </h3>

        <p className="text-[10px] sm:text-xs text-gray-500">
          By {p.company}
        </p>

        <div className="mt-auto">
          <p className="text-[10px] text-gray-400 line-through">
            MRP ₹{p.mrp}
          </p>

          <div className="flex items-center gap-1">
            <p className="text-sm sm:text-base font-bold text-black">
              ₹{p.price}
            </p>
            <span className="text-pink-600 text-[10px] sm:text-xs font-semibold">
              {p.discount}
            </span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => addToCart(p)}
        className="mt-3 bg-[#1193d4] text-white text-xs sm:text-sm py-2
        rounded-lg hover:bg-[#0e80b3] active:scale-95 transition-all"
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>

    </div>
  );
};

export default FeaturedProducts;
