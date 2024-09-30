/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./public/blog.html", "./index.html"],
  theme: {
    extend: {
      colors:{
        "primary": "#B4F461",
        "dark-primary": "#9cd453",
        "background": "#f9f7f3",
        "deep-black": "#111111",
        "dark-gray": "#585858",
        "light-gray": "#888888",
        "medium-gray": "#A0A0A0",
        "off-white": "#F3F3F3",
      },
      
      fontFamily:{
        "lexend": "Lexend",
        
      }
    },
  },
  plugins: [require('daisyui'),],
}

