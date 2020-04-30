module.exports = {
  purge: {
    enabled: true,
    content: [
      './source/**/*.html',
      './source/**/*.erb',
      './build/**/*.html',
    ],
  },
  theme: {
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
