/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'card-colombo': '#60A5FA',   // blue
        'card-tokyo'   : '#C084FC',   // purple
        'card-liverpool': '#6EE7B7', // green
        'card-sydney'  : '#FDBA74',   // orange
        'card-boston'  : '#F87171',   // red
        'footer-bg'    : '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};