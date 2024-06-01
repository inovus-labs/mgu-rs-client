module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary: '#F0FDEF', //primary background color 
        bgSecondary: '#4DB33D', //secondary background color 
  
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

