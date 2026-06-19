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
        sans: ['Marcellus', 'serif'],
        serif: ['Marcellus', 'serif'],
        fjalla: ['Rowdies', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
