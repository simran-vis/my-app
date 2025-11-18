// export default function Advertisement() {
//   return (
//     <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#1193d4] to-blue-300 rotate-[-5deg] origin-top-left"></div>

//       <div className="relative flex flex-col md:flex-row items-center justify-between p-12 md:p-16">
//         {/* Text Content */}
//         <div className="max-w-xl text-center md:text-left">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             20% Off All Allergy Relief
//           </h1>
//           <p className="text-white/80 mb-6 text-lg">
//             Find the relief you need this season with our top-rated allergy solutions.
//           </p>
//           <button className="bg-white text-[#1193d4] px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors shadow-lg">
//             Shop Now
//           </button>
//         </div>

//         {/* Visual Side */}
//         <div className="mt-8 md:mt-0 relative w-64 h-64 flex items-center justify-center">
//           <div className="w-40 h-40 bg-white/20 rounded-full absolute animate-ping"></div>
//           <div className="w-32 h-32 bg-white/30 rounded-full absolute animate-pulse"></div>
//           <div className="w-24 h-24 bg-white/50 rounded-full absolute"></div>
//           {/* You can replace these with product images */}
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Advertisement() {
  return (
    <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1193d4] to-blue-300 rotate-[-3deg] origin-top-left"></div>

      <div
        className="
          relative 
          flex flex-col 
          md:flex-row 
          items-center 
          md:items-start 
          justify-between 
          p-6 
          sm:p-10 
          md:p-14 
          lg:p-16
          gap-8
        "
      >
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            20% Off All Allergy Relief
          </h1>

          <p className="text-white/90 mb-6 text-base sm:text-lg">
            Find the relief you need this season with our top-rated allergy solutions.
          </p>

          <button className="bg-white text-[#1193d4] px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors shadow-lg">
            Shop Now
          </button>
        </div>

        {/* Visual Side */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white/20 rounded-full absolute animate-ping"></div>
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/30 rounded-full absolute animate-pulse"></div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/50 rounded-full absolute"></div>
        </div>
      </div>
    </div>
  );
}
