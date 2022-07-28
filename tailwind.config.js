/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleType : {
        disc: 'disc'
      },
      backdropBlur: {
        xs: '2px',
      },
      fontSize : {
        '7xl': '5rem', 
        '8xl': '6rem' 
      },
      backgroundImage : {
        'name-text' : "url('/second-text-bg.gif')"
      }
    },
  },
  plugins: [],
}