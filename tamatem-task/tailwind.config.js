/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "tamatem-neutral": {
          50: "#FFFFFF",
          100: "#EFEFEF",
        },
      },
      padding: {
        21: "21px",
        22: "22px",
        30: "30px",
        65: "65px",
        220: "220px",
        319: "319px",
      },
    },
  },
  plugins: [],
};
