/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan all your React components
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1193d4',   // main brand blue
          hover: '#0e80b3',     // hover state for buttons/links
          light: '#ebf8ff',     // section light background
        },
        secondary: {
          DEFAULT: '#16a34a',   // emerald green
          hover: '#15803d',     // hover state
        },
        accent: {
          yellow: '#f59e0b',    // for offers or highlights
        },
        neutral: {
          light: '#f9fafb',     // light gray background
          dark: '#1e293b',      // heading text
        },
      },
      textColor: {
        primary: '#1e293b',
        secondary: '#64748b',
      },
    },
  },
  plugins: [],
};
