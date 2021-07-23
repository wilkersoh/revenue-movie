module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      colors: {
        "main":"rgb(254, 254, 254)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
