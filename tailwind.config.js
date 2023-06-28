/** @type {import('tailwindcss').Config} */

import { values } from "./tailwind.rewrite";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...values,
      fontFamily: {
        "Plus-Jakarta-Sans": ["'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
        gray: "rgb(197, 194, 206)",
        "light-gray": "rgb(249, 250, 253)",
        "very-light-grayish-blue": "hsl(210, 60%, 98%)",
        "light-grayish-blue-1": "hsl(211, 68%, 94%)",
        "light-grayish-blue-2": "hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-grayish-blue": "hsl(219, 12%, 42%)",
        "very-dark-blue": "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
