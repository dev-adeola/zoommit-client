// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    runtimeConfig:{
        apiSecret: '123',
        public: {
            apiBase: 'api'
        },
        googleApi: 'getasdfhdfsfsfs',
        zoommitApi: 'bshfbks,fghbsjfs'
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    css: [
      '@/assets/css/main.css',
    ],
    modules: [
      'nuxt-icon',
      // '@nuxtjs/google-fonts'
    ],
    buildModules: [
      '@nuxtjs/google-fonts'
    ],

    googlefonts: {
        families: {
          Rubik: [700, 400, 200], 
          Karla: [700, 400, 200]
        }
    }

})