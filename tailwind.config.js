module.exports = {
  safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : [],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
