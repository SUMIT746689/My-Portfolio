/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens : {
      'xs':'400px',
      'sm':'625px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl': '1536px'
    },
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