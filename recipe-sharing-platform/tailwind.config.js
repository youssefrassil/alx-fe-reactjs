/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Enable purging
  darkMode: false, // Disable dark mode by default
  theme: {
    extend: {}, // Extend the default theme as needed
  },
  plugins: [], // Add any additional plugins if necessary
};
