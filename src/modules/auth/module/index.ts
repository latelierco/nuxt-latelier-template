const { resolve, join, basename } = require('path');
const { existsSync, readdirSync } = require('fs');

// const defauls = require('./defaults.ts');

const root = resolve(__dirname, '..');

module.exports = function(moduleOptions) {
  const options = Object.assign({}, moduleOptions, this.options.auth);

  const strategies = [];
  const strategyScheme = new Map();

  for (const name in options.strategies) {
    if (!options.strategies[name]) {
      continue;
    }

    const strategy = Object.assign({}, options.strategies[name]);

    const schemeSrc = resolveScheme.call(this, name);

    console.log(schemeSrc);

    if (!schemeSrc) {
      console.log('not found!');
      continue;
    }

    const schemeName = basename(schemeSrc);

    console.log(schemeName);

    this.addTemplate({
      src: schemeSrc,
      fileName: join('auth', 'schemes', schemeName)
    });

    strategyScheme.set(strategy, `.${join('/', 'schemes', basename(schemeSrc))}`);
    strategies.push(strategy);
  }

  const coreRoot = resolve(root, 'core');
  for (const file of readdirSync(coreRoot)) {
    this.addTemplate({
      src: resolve(coreRoot, file),
      fileName: join('auth', file)
    });
  }

  this.addPlugin({
    src: resolve(root, 'module', 'plugin.ts'),
    fileName: join('auth', 'plugin.ts'),
    options: {
      options
    }
  });
};

function resolveScheme(scheme) {
  if (typeof scheme !== 'string') {
    return;
  }

  let path = resolve(root, 'schemes', `${scheme}.ts`);

  if (existsSync(path)) {
    return path;
  }

  try {
    path = this.nuxt.resolvePath(scheme);
  } catch (e) {
    // Ignore
  }

  if (existsSync(path)) {
    return path;
  }
}
