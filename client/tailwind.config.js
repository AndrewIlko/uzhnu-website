module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "sm": "320px",
      "md": "480px",
      "lg": "768px",
      "xl": "1024px",
      "2xl": "1200px",
    },
  },
  plugins: [],
};
