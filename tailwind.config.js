/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ['poppins', 'serif'],
      },
      colors:{
        primary :'#8c8785',
        primaryLight:'#010101',
        secondary : '#f1ded5',
        secondaryLight :'#f3e8e5',
        badge:'#ff965d',
        link:'#f1ded5',
        main :'#c41e3a',
        line :'#c41e3a',
        date:'rgba(174, 176, 184, .7)'
      }
    },
  },
  plugins: [],
}

