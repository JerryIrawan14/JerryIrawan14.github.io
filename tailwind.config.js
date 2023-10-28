/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding:'20px',
    },
    extend: {
      screens:{
        '2xl' :'1320px',
        'xl'  : '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '440px',
      },
    },
  },
  plugins: [],
}

