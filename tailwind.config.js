
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'testtt': "url('images/m1.jpg')",
        'houseof' : "url('images/houseoftthedragon.jpg')",
        'watchmen' : "url('images/watch.jpg')", 
        'vienna' :     "url('images/vv.jpg')",
        'prof' :     "url('images/prof.jpg')",
        'oddd' :     "url('images/od.jpg')",
        'blacklist' :     "url('images/bbb.avif')",
      }
     
     
    },
  },
  plugins: [],
}