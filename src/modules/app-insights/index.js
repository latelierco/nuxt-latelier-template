const { resolve } = require('path');

module.exports = function module(moduleOptions) {
  const options = this.options['app-insights'] || moduleOptions;

  if (this.options.dev) return;

  const { instrumentationKey } = this.options.env;

  if (instrumentationKey) {
    options.id = instrumentationKey;
  }

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'application-insights.js',
    options,
    ssr: false
  });
};
