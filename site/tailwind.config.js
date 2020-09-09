// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    fontFamily: {
      Inter: ["Inter"],
      body: ['"Open Sans"'],
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
