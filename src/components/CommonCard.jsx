import React from "react";

const CommonCard = ({ title, icon, children }) => {
  return (
    <section className="bg-white w-full rounded-lg p-6 sm:p-8 shadow-md transition-all duration-300 text-black hover:shadow-md shadow-soft">
      
      {title && (
        <div className="flex items-center gap-3 mb-6">
          {icon && (
            <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
              {icon}
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-bold">
            {title}
          </h2>
        </div>
      )}

      {children}
    </section>
  );
};

export default CommonCard;
