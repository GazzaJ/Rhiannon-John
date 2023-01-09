/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    colors: {
      'darkGray': '#37474f',
      'pink': '#ff4f7f'
    },
    extend: {},
  },
  plugins: [],
}
