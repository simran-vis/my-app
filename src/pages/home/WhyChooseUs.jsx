import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className=" py-6 mt-10 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
      <div className="flex justify-around flex-wrap gap-6 px-4">
        <div className="max-w-xs">
          <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800" alt="Users Icon" className="mx-auto w-12 h-12 mb-2" />
          <p className="text-gray-600">
            <strong className="text-gray-800 text-lg">51 Million+</strong><br />
            Registered users as of Aug 18, 2025
          </p>
        </div>
        <div className="max-w-xs">
          <img src="https://images.unsplash.com/photo-1543499459-d1460946bdc6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="Delivery Icon" className="mx-auto w-12 h-12 mb-2" />
          <p className="text-gray-600">
            <strong className="text-gray-800 text-lg">71 Million+</strong><br />
            Orders on PharmEasy till date
          </p>
        </div>
        <div className="max-w-xs">
          <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800" alt="Medicine Icon" className="mx-auto w-12 h-12 mb-2" />
          <p className="text-gray-600">
            <strong className="text-gray-800 text-lg">6000+</strong><br />
            Unique items sold last 6 months
          </p>
        </div>
        <div className="max-w-xs">
          <img src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9jYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800" alt="Location Icon" className="mx-auto w-12 h-12 mb-2" />
          <p className="text-gray-600">
            <strong className="text-gray-800 text-lg">19000+</strong><br />
            Pin codes serviced last 3 months
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;