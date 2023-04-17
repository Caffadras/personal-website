/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        base_dark: "#2C3333",
        base_light: "#404a4a",
        accent_light: "#4f5c5c",
      },
    },
  },
  plugins: [],
  /*  corePlugins: {
    preflight: false,
  }*/
};
