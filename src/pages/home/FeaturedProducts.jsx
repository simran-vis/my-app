import React from 'react';

const products = [
  { name: 'Product 1', price: '$29.99', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1479' },
  { name: 'Product 2', price: '$39.99', image: 'https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=800' },
  { name: 'Product 3', price: '$19.99', image: 'https://images.unsplash.com/photo-1545840716-c82e9eec6930?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=800' },
  { name: 'Product 4', price: '$49.99', image: 'https://media.istockphoto.com/id/2194012901/photo/scientist-working-with-digital-tablet-in-modern-laboratory.webp?a=1&b=1&s=612x612&w=0&k=20&c=qutBToaxFZ0ekGoYzTHMZQ25-7-QhzNADNWnZds6MVw=' },
   { name: 'Product 5', price: '$29.99', image: 'https://cdn01.pharmeasy.in/dam/products_otc/J41613/livogen-iron-strawberry-flavour-gummies-for-kids-and-adults-bottle-30-nos-6.01-1755690889.jpg?dim=1440x0' },
  { name: 'Product 6', price: '$39.99', image: 'https://cdn01.pharmeasy.in/dam/products_otc/I44087/cetaphil-gentle-skin-cleanser-1000ml-2-1669711313.jpg?dim=1440x0' },
  { name: 'Product 7', price: '$19.99', image: 'https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1760012004.jpg?dim=1440x0' },
  { name: 'Product 8', price: '$49.99', image: 'https://cdn01.pharmeasy.in/dam/products_otc/100345/himalaya-koflet-syrup-100ml-1-1743226387.jpg?dim=1440x0' },
];

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto py-8 px-4 bg-gray-50">
     <div className="flex justify-between items-center mb-6">
  {/* Centered Title and Subtitle */}
  <div className="flex-1 text-center">
    <h1 className="text-3xl font-bold">Featured Products</h1>
    <p className="text-gray-600">
      Discover our most popular and trusted healthcare products
    </p>
  </div>

  {/* View All link stays on right */}
  <a href="#" className="text-blue-500 hover:underline ml-4 whitespace-nowrap">
    View All &gt;
  </a>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>

            {/* Amount and button side by side */}
            <div className="flex justify-between items-center mt-3">
              <p className="text-gray-800 font-medium">{product.price}</p>
              <button className="bg-blue-500 text-white px-3 py-1.5 text-sm rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
