import React, { useState, useEffect } from 'react';
import { Upload } from 'lucide-react';

const HeroSection = () => {
  const slides = [
    {
      text: 'Get Quality Medicines Delivered Fast',
      subtext: 'Shop from a wide range of prescription and OTC drugs.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SCj5mecFDsokuTZy514_VXN9UMFo6q9Pfw&s', // Medicine bottles
    },
    {
      text: 'Health Products for Your Well-Being',
      subtext: 'Vitamins, supplements, and personal care items.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypem8V93snZdqEX_PhHmLGR23eSbv4r25Mg&s', // Health products
    },
    {
      text: 'Professional Medical Advice',
      subtext: 'Consult with certified doctors online.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&h=400&q=80', // Doctor consultation
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Fallback image (replace with local path if needed)
  const fallbackImage = 'https://via.placeholder.com/600x400?text=Image+Not+Loaded';

  return (
    <section className="bg-gradient-to-r from-white to-blue-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Text and Carousel */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your Trusted Online Medical Store
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Order Medicines, Health Products & More — Delivered to Your Doorstep
            </p>

            {/* Carousel */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full">
                    <h2 className="text-2xl font-semibold text-[#1193d4] mb-2">
                      {slide.text}
                    </h2>
                    <p className="text-gray-600 mb-6">{slide.subtext}</p>
                    <img
                      src={slide.image}
                      alt={slide.text}
                      onError={(e) => { e.target.src = fallbackImage; }}
                      className="w-full h-48 object-cover rounded-lg shadow-md mb-6 md:hidden"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Prescription Button */}
            <button className="flex items-center px-6 py-3 bg-[#1193d4] text-white rounded-md hover:bg-[#0e80b3] hover:scale-105 transition-all duration-200">
              <Upload className="h-5 w-5 mr-2" />
              Upload Prescription
            </button>
          </div>

          {/* Right Side: Medical-Themed Image */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1576091160530-9889c0aa8889?auto=format&fit=crop&w=600&h=400&q=80" // Delivery illustration
              alt="Medical Illustration"
              onError={(e) => { e.target.src = fallbackImage; }}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;