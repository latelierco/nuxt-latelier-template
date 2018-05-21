const { resolve } = require('path');

module.exports = async function module(moduleOptions) {
  const options = this.options['localforage'] || moduleOptions;

  this.addPlugin({
    src: resolve(__dirname, './plugin.template.js'),
    ssr: false,
    fileName: 'localforage.js',
    options
  });
};
