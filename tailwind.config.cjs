/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        modalwindow: "#cecece7e",
      },
      animation: {
        modalwindow: "fadein 0.2s",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
