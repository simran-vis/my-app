import { useState } from 'react';
import Button from '../components/Button'
const categories = [
  { id: 'vitamins', label: 'Vitamins & Supplements' },
  { id: 'pain', label: 'Pain Relief' },
  { id: 'cold', label: 'Cold & Flu' },
  { id: 'digestive', label: 'Digestive Health' }
];

const brands = [
  { id: 'natures-way', label: "Nature's Way" },
  { id: 'centrum', label: 'Centrum' },
  { id: 'advil', label: 'Advil' }
];

export default function Filter({
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands
}) {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 sticky top-24 text-sm">
      <h2 className="text-base font-semibold mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Category</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories([...selectedCategories, category.id]);
                  } else {
                    setSelectedCategories(selectedCategories.filter(c => c !== category.id));
                  }
                }}
                className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Price */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1193d4]"
        />
        <div className="flex justify-between mt-1 text-gray-600 text-sm">
          <span>$0</span>
          <span>${priceRange}</span>
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Brand */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Brand</h3>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedBrands([...selectedBrands, brand.id]);
                  } else {
                    setSelectedBrands(selectedBrands.filter(b => b !== brand.id));
                  }
                }}
                className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{brand.label}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Buttons */}
      <div className="space-y-2">
        <Button className="w-full py-2" color="primary">
          Apply Filters
        </Button>
        <Button className="w-full py-2" color="secondary">
          Reset
        </Button>
      </div>
    </div>
  );
}
