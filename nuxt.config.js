import sitemapRoutes from './sitemapRoutes'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Bloggxer: Explore a wide range of topics such as fitness, technology and much more',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'On bloggxer you will find blog articles about various interesting topics such as fitness, technology, cooking and much more.',
      },

      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Bloggxer',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content:
          'Bloggxer: Explore a wide range of topics such as fitness, technology and much more',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'On bloggxer you will find blog articles about various interesting topics such as fitness, technology, cooking and much more.',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content:
          'Bloggxer: Explore a wide range of topics such as fitness, technology and much more',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://bloggxer.com`,
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'theme-color',
        content: '#7e22ce',
      },
    ],
    script: [
      {
        crossorigin: 'anonymous',
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7999730286556826',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/jsonld', '~/plugins/google'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  sitemap: {
    hostname: 'https://bloggxer.com', // you can hardcode website url here
    routes() {
      return sitemapRoutes()
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      theme_color: '#7e22ce',
    },
  },
  googleAnalytics: {
    id: 'UA-222785513-2',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
