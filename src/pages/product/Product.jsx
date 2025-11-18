// import { useState } from 'react';
// import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
// import Filter from '../../components/Filter';
// import Advertisement from '../product/Advertisement';
// import FeaturedProducts from '../home/FeaturedProducts';

// export default function Product() {
//   const [priceRange, setPriceRange] = useState(100);
//   const [selectedCategories, setSelectedCategories] = useState(['vitamins']);
//   const [selectedBrands, setSelectedBrands] = useState([]);

 

//   return (
//    <div className="min-h-screen mt-15 bg-gray-50">
//   <div className="max-w-7xl mx-auto px-4 py-6">

//     {/* Advertisement */}
//     <Advertisement />

//     {/* Mobile Filter Toggle */}
//     <div className="md:hidden mb-4">
//       <details className="bg-white p-3 rounded-lg shadow">
//         <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between">
//           Filters <ChevronDown className="w-5 h-5" />
//         </summary>

//         <div className="mt-3">
//           <Filter
//             priceRange={priceRange}
//             setPriceRange={setPriceRange}
//             selectedCategories={selectedCategories}
//             setSelectedCategories={setSelectedCategories}
//             selectedBrands={selectedBrands}
//             setSelectedBrands={setSelectedBrands}
//           />
//         </div>
//       </details>
//     </div>

//     <div className="flex flex-col md:flex-row gap-8">

//       {/* Sidebar Filters (hidden on mobile) */}
//       <aside className="w-full md:w-64 flex-shrink-0 hidden md:block sticky top-24">
//         <Filter
//           priceRange={priceRange}
//           setPriceRange={setPriceRange}
//           selectedCategories={selectedCategories}
//           setSelectedCategories={setSelectedCategories}
//           selectedBrands={selectedBrands}
//           setSelectedBrands={setSelectedBrands}
//         />
//       </aside>

//       {/* Products */}
//       <main className="flex-1">
//         {/* Correct responsive grid */}
//         <div className="
//           grid 
//           grid-cols-1 
//           sm:grid-cols-2 
//           md:grid-cols-3 
//           lg:grid-cols-4 
//           gap-6
//         ">
//           <FeaturedProducts />
//         </div>
//       </main>

//     </div>
//   </div>
// </div>

//   );
// }
import { useState } from 'react';
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import Filter from '../../components/Filter';
import Advertisement from '../product/Advertisement';
import FeaturedProducts from '../home/FeaturedProducts';

export default function Product() {
  const [priceRange, setPriceRange] = useState(100);
  const [selectedCategories, setSelectedCategories] = useState(['vitamins']);
  const [selectedBrands, setSelectedBrands] = useState([]);

  return (
    <div className="min-h-screen mt-15 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Advertisement */}
        <Advertisement />

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <details className="bg-white p-3 rounded-lg shadow">
            <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between">
              Filters <ChevronDown className="w-5 h-5" />
            </summary>

            <div className="mt-3">
              <Filter
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
              />
            </div>
          </details>
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0 hidden md:block sticky top-24">
            <Filter
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
            />
          </aside>

          {/* Products */}
        <main className="flex-1">
    <FeaturedProducts columns="md:grid-cols-3 lg:grid-cols-4" />
</main>


        </div>
      </div>
    </div>
  );
}
