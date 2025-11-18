
import React from 'react';

const categories = [
  { 
    name: 'Vitamins', 
    products: '120 products', 
    image: 'https://images.unsplash.com/photo-1622227922682-56c92e523e58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dml0YW1pbnN8ZW58MHx8MHx8fDA%3D' 
  },
  { 
    name: 'Pain Relief', 
    products: '80 products', 
    image: 'https://plus.unsplash.com/premium_photo-1661398844033-ffef1f66186b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBhaW4lMjByZWxpZWZ8ZW58MHx8MHx8fDA%3D' 
  },
  { 
    name: 'Skincare', 
    products: '150 products', 
    image: 'https://media.istockphoto.com/id/2166401559/photo/close-up-of-asian-woman-with-radiant-skin-and-natural-makeup.webp?a=1&b=1&s=612x612&w=0&k=20&c=LR_Z4KpkXtlgSTHyyiGzRUrKa3QWC_k_uv4PBehq_Yw=' 
  },
  { 
    name: 'Supplements', 
    products: '90 products', 
    image: 'https://plus.unsplash.com/premium_photo-1690534068749-524a21d89307?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fFN1cHBsZW1lbnRzfGVufDB8fDB8fHww' 
  },
  { 
    name: 'Cold & Flu', 
    products: '60 products', 
    image: 'https://media.istockphoto.com/id/1135175362/photo/sick-woman-blowing-her-nose-she-covered-with-blanket.webp?a=1&b=1&s=612x612&w=0&k=20&c=rSnh2NktDGLzB3VT9LQKDtDYu_XCu2IK5bEHJZzgmJw=' 
  },
  { 
    name: 'First Aid', 
    products: '75 products', 
    image: 'https://plus.unsplash.com/premium_photo-1677860447055-5ce8092c0d7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rmlyc3QlMjBBaWR8ZW58MHx8MHx8fDA%3D' 
  },
];

const ShopByCategory = () => {
  return (
    <div className="bg-blue-50 py-12 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Shop by Category</h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Browse our wide range of healthcare products and medicines organized by categories
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 justify-items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-2 sm:p-4 rounded-lg shadow-md flex flex-col items-center w-28 sm:w-40 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-full mb-2 sm:mb-3"
              />
              <h3 className="text-xs sm:text-lg font-semibold text-[#1193d4] mb-0.5 sm:mb-1">{category.name}</h3>
              <p className="text-gray-500 text-[10px] sm:text-sm">{category.products}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
