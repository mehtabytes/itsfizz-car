/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#22c55e", // strong green accent
          emerald: "#10b981",
        },
        road: "#111827",
        surface: "#f8fafc",
      },
      fontFamily: {
        mono: ["ui-monaco", "monospace"],
      },
    },
  },
  plugins: [],
};
