/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      textColor: {
        primary: "#F9F9F9",
        secondary: "#C4C4C4"
      },
      colors: {
        "primary-bg": "#000000",
        "secondary-bg": "#F9F9F9",
        "secondary-clicked": "#e0e0e0"
      }
    },
  },
  plugins: [],
}

