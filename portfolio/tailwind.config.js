/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        primaryLight: "var(--primary-light-color)",
        secondaryLight: "var(--secondary-light-color)",
      },
    },
  },
  plugins: [],
};
