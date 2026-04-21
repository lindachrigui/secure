/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        panel: "0 18px 60px rgba(15, 23, 42, 0.08)",
      },
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d9e9ff",
          500: "#2f6fed",
          600: "#2457c1",
          700: "#1d4492",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
