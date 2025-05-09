/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "serif"],
      },
      colors: {
        maroon: {
          100: "#F8C2B7",
          200: "#F8B1AB",
          300: "#F79F9F",
          400: "#EE8787",
          500: "#E46F6F",
          600: "#0891b2",
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
};
