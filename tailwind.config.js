/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this includes your Navbar.jsx file
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1193d4', // Define custom color for easier reuse
      },
    },
  },
  plugins: [],
};