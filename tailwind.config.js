/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        bgOffWhite: '#fbfaf7',
        charcoal: '#1d1d1f',
        amberCopper: '#c86b32',
      },
      fontFamily: {
        sans: ['Puritan', 'sans-serif'],
        serif: ['Puritan', 'sans-serif'],
        fjalla: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
