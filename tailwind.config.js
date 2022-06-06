module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: 
    {colors:{
      'search-bar-placeholder' :'#71767B !important',
      'tt-background' : '#16181C !important'
    }},
    
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}