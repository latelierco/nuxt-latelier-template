const pkg = require('./package.json');
const { resolve } = require('path');
const localForage = require('localforage');

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
      { rel: 'icon', type: 'image/png', size: '512x512', href: '/icon.png' }
    ]
  },

  /* Customize the progress-bar color */
  loading: { color: '#FFFFFF' },

  /* Plugins to load before mounting the App */
  plugins: [
    '~/plugins/bootstrap.ts' // For register all global directives, filters or components.
  ],

  /* Nuxt.js modules */
  modules: [
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/
    '@nuxtjs/pwa', // Doc: https://pwa.nuxtjs.org/
    'qonfucius-nuxt-fontawesome', // Doc: https://github.com/Qonfucius/nuxt-fontawesome/

    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          file: 'en.json',
          name: 'English'
        },
        {
          code: 'fr',
          iso: 'fr-FR',
          file: 'fr.json',
          name: 'Francais'
        }
      ],

      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: require('./locales/en.json') // Only require for default locale.
        }
      },

      lazy: true,
      langDir: '../locales/'
    }],

    '~/modules/storage',
    '~/modules/typescript',

    /* Monitoring */
    '~/modules/analytics',
    '~/modules/app-insights'
  ],

  axios: {

  },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
  //       }
  //     },
  //     facebook: {
  //       client_id: '1671464192946675',
  //       userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
  //       scope: ['public_profile', 'email', 'user_birthday']
  //     }
  //   }
  // },

  localforage: {
    driver: localForage.LOCALSTORAGE,
    name: pkg.name
  },

  env: {
    analyticsId: process.env.ANALYTICS_ID, // For google analytics

    instrumentationKey: process.env.INSTRUMENTATION_KEY, // For application insights

    // VSTS build variables.
    BUILD_BUILDNUMBER: process.env.BUILD_BUILDNUMBER,
    BUILD_SOURCEBRANCHNAME: process.env.BUILD_SOURCEBRANCHNAME,
    BUILD_SOURCEVERSION: process.env.BUILD_SOURCEVERSION
  },

  /* Extend option for vue-analytics, see https://matteogabriele.gitbooks.io/vue-analytics/content */
  'google-analytics': {},

  'fontAwesome': {
    componentName: 'icon',
    packs: [
      // { package: '@fortawesome/fontawesome-pro-solid' },
      // { package: '@fortawesome/fontawesome-pro-regular' },
      // { package: '@fortawesome/fontawesome-pro-light' },
      // { package: '@fortawesome/fontawesome-free-brands' }
    ]
  },

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
        });
      }

      // Load gloabll scss variable
      const isVueRule = rule =>
        rule.test.toString() === '/\\.vue$/';
      const isSASSRule = rule =>
        ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1;

      const scssLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: resolve(__dirname, 'src/styles/theme.scss')
        }
      };

      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.options.loaders.scss.push(scssLoader);
        }
        if (isSASSRule(rule)) {
          rule.use.push(scssLoader);
        }
      });
    }

  },

  workbox: {
    swDest: resolve(__dirname, 'static', 'sw.js')
  },

  icon: {
    iconSrc: resolve(__dirname, 'static', 'icon.png')
  }

};
