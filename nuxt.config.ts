// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  runtimeConfig: {
    catApiKey: process.env.NUXT_CAT_API_KEY,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/tailwind.css'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  colorMode: {
    classSuffix: '',
  },
  image: {},
})
