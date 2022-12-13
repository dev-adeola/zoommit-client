/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    }, 
    extend: {
      colors: {
        primaryColor: '#1793E735',
        secondaryBGColor: '#00D1FF',
        heroBannerColor: '#1973E735',
        textColor: '#1793E7',
        buttonPrimaryColor: '#1793E7',
        secondaryTextColor: '#E0E0E0',
        footerBG: '#A5A5A5',
        dashboardAside: '#434343',
        navlinkTrans: '#ffffff30'
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
