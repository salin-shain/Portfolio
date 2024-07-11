/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'glass-morphism': 'linear-gradient(to bottom, rgba(50, 50, 50, 0.5), rgba(70, 70, 70, 0.1))',
      },
      colors: {
        'purple': '#C277DA',
        'grey': '#7F7F7F',
        'dotgrey': '#D9D9D9',
      }
    },
  },
  plugins: [],
};
