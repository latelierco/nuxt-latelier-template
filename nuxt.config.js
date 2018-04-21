const pkg = require('./package.json')

module.exports = {
  mode: 'spa',

  srcDir: './src',
  dir: {
    static: '../static'
  },

  /* Headers of the page */
  head: {
    title: 'salut',
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
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '~/modules/typescript'
  ],

  /* Build configuration */
  build: {

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
