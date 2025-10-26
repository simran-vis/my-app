import React from "react";

const NewsletterSection = () => {
  return (
    <section className="bg-blue-50  py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stay Updated with Health Tips & Offers
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8 text-lg">
          Subscribe to our newsletter for the latest health information, exclusive discounts, 
          and new product updates.
        </p>

        {/* Input + Button */}
        <form className="flex justify-center items-center max-w-md mx-auto bg-white rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-semibold rounded-r-full"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
