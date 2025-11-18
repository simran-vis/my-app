import React from 'react';

export default function Button({ children, color = 'primary', className = '', onClick }) {
  const baseStyles = 'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1';

  const colorStyles = {
    primary: 'bg-[#1193d4] text-white hover:bg-blue-600 focus:ring-[#1193d4]',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-300',
  };

  return (
    <button
      className={`${baseStyles} ${colorStyles[color]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
