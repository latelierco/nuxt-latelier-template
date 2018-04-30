const pkg = require('./package.json')

module.exports = {
  mode: 'spa',

  srcDir: './src',
  dir: {
    static: '../static'
  },

  /* Headers of the page */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' }
    ]
  },

  /* Customize the progress-bar color */
  loading: { color: '#FFFFFF' },

  /* Global CSS */
  css: [],

  /* Plugins to load before mounting the App */
  plugins: [],

  /* Nuxt.js modules */
  modules: [
    '@nuxtjs/axios', // Doc: https://github.com/nuxt-community/axios-module#usage

    '~/modules/typescript.ts',

    /* Monitoring */
    '~/modules/analytics',
    '~/modules/app-insights'
  ],

  env: {
    analyticsId: process.env.ANALYTICS_ID, // For google analytics
    instrumentationKey: process.env.INSTRUMENTATION_KEY // For application insights
  },

  'google-analytics': {},

  generate: {
    fallback: false
  },

  /* Build configuration */
  build: {

    filenames: {
      chunk: '[id].[chunkhash].js'
    },

    extend: (config, ctx) => {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }

  }
}
