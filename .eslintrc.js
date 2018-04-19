const nuxt = require('./nuxt.config.js');
const resolve = require('path').resolve

const webpack = {
  config: {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '~': resolve(__dirname, nuxt.srcDir || ''),
        '~~': __dirname,

        '@': resolve(__dirname, nuxt.srcDir || ''),
        '@@': __dirname,
      }
    },
  }
}

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',

    'standard',
  ],
  plugins: [
    'vue',
    'import',
  ],
  // add your custom rules here
  rules: {
    'vue/require-default-prop': "off",
    'vue/max-attributes-per-line': "off",

    "space-before-function-paren": ["error", "never"],
    "semi": ["error", "always"],

    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/extensions': ['error', 'never'],
  },

  settings: {
    'import/resolver': { webpack }
  }

}
