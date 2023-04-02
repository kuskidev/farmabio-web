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
      colors: {
        'main-color': '#114C85',
        'secondary-color': '#3DC7FF',
        'dark-green': '#456F80',      
        'gray-input-color': '#E0E0E0',
        'border-gray-color': '#888888'
      }
    },
  },
  plugins: [],
}

