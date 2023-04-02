module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'main-color': '#114C85',
      'secondary-color': '#3DC7FF',
      
      'gray-input-color': '#E0E0E0',
      'border-gray-color': '#888888'
    },
  },
  plugins: [],
}

