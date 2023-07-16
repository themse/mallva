/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '576px' },
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': { max: '1520px' },
        '3xl': '1520px',
      },

      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
