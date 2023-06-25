/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'first': '#E3B577',
      'second': '#fcfefe',
      'third': '#000000',
      'backgroundcolor': '#F4F3F0'
    },
  },
  plugins: [require("daisyui")],
}

