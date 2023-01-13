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
    extend: {
      colors: {
        'darkGray': '#37474f',
        'coolPink': '#ff4f7f'
      },
      fontFamily: {
        sans: ['Yeseva One', 'sans-serif'],
        mono: ['Ubuntu']
      },
    },
  },
  plugins: [],
}
