/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        container: '1604px',
      },
      fontFamily: {
        dm: ["DM Sans", 'sans-serif'],
      },
      colors: {
        primaryColor: '#262626',
        borderColor:  '#2D2D2D',
        additionalTextColor:"#6D6D6D",
        additionalBorderColor:"#f0f0f0",
        textColor:"#767676"
      },
    },
  },
  plugins: [],
}