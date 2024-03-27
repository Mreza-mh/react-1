/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('/img/hero-pattern.svg')",
      }
    },
    colors: {
      
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      sky : colors.sky,
      cyan: colors.cyan,
      pink : colors.pink,
      slate:{
        50:"rgb(87 83 78)",
      },
      blue :{
        50:  "rgb(78, 106, 220)",
      },
      red : {
        50 : "#b91c1c",
      },

      custombrown : {
        100 : "#5B3D45",
      },
      customblue : {
        100 : "#5B868D",
      },
      customgreen : {
        100 : "#2e4147",
      },
      customwithe : {
        100 : "#C8D5CB",
      },



    },
  },
  plugins: [],
}