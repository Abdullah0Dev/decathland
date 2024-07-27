/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: '#ff99c8',
        white: '#ffffff',
        dark: '#222222',
        'dark-gray': '#24292f',
        blue: '#2e83fb',
        'sky-blue': '#37bff3',
        gray: '#3d3d3d',
        'light-blue': '#409eff',
        'mid-gray': '#606266',
        'transparent-black': 'rgba(0, 0, 0, 0%)',
        'light-gray': 'rgba(144, 147, 153, 30%)',
        'semi-transparent-dark': 'rgba(33, 36, 39, 50%)',
        'mostly-transparent-dark': 'rgba(33, 36, 39, 90%)',
      },
      fontFamily: {
        'roboto-flex': ['"Roboto Flex"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

