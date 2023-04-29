/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
      'dm-sans'  : ['DM Sans', 'serif'],
      'quattro': ['Quattrocento', 'serif'],
      sans : ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-900': '#25166F',
        'primary-800': '#311D92',
        'primary-700': '#3C24B5',
        'primary-600': '#4A2DD5',
        'primary-500': '#6850DC',
        'primary-400': '#8673E3',
        'primary-300': '#A496EA',
        'primary-200': '#C3B9F1',
        'primary-150': '#E1DCF8',
        'primary-100': '#EEEBF9',
        'primary-50': '#F5F3FB',
        'primary-dark': '#656565',
        'primary-lt': '#454545',
        'primary-w': '#FCFCFC',
        'secondary': '#F3D55D',
        'gradient-200': '#F3D55D',
        'gradient-100': '#F2F5FF',
      },
    },
  },
  plugins: [],
}
