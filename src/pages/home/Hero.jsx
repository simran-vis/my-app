 const HeroSection = () => (
      <section className="bg-blue-50 py-12 px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-blue-600 mb-2">Your Trusted Online Pharmacy</p>
          <h1 className="text-4xl font-bold mb-4">Your Health, Our Priority</h1>
          <p className="mb-6">Find all your healthcare needs in one place. Fast delivery, professional advice, and a wide range of products.</p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded">Shop All Products</button>
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded">Upload Prescription</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="https://via.placeholder.com/400x300" alt="Pharmacy Products" className="rounded-lg shadow-lg" />
          <div className="bg-white p-2 rounded-lg shadow-lg mt-4 text-center inline-block">
            <span className="text-green-600">Free Shipping</span> on orders over $50
          </div>
        </div>
      </section>
    );
    export default HeroSection