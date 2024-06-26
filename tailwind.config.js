/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  fontFamily: {
    serif: ["Cardo", "serif"],
    mulish: ["Mulish", "sans-serif"],
  },
  backgroundImage: {
    "my-profile": "url('./src/assets/images/me.jpeg')",
  },
  plugins: [],
};
