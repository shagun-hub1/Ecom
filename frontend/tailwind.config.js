
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('../public/utils/bgImage1.jpg')",
        'bg2': "url('../public/utils/bgImage2.jpg')",
        'bg3': "url('../public/utils/bgImage3.jpg')",
        'bg4': "url('../public/utils/bgImage4.jpg')",
      },
      colors:{
        'white':'#FFFFFF',
        'turquoiseBlue':'#3F888F',
        'violet':'#DE4C8A',
        'opalgreen':' #015D52',
        'purple':'#7947bb',
        'lightpurple':'#bfa1e7',
        'whitesmoke':'#f5f5f5',
        'darkpurple':'#6D3F5B'
      }
    },
  },
  plugins: [],
}