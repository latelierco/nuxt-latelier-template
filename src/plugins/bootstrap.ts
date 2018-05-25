import Vue from 'vue';
import VeeValidate from 'vee-validate';
import fr from 'vee-validate/dist/locale/fr';
import en from 'vee-validate/dist/locale/en';

import clickout from './directives/clickoutside';

export default ({ isDev, app }, inject) => {
  const isProd = !isDev;

  if (!isProd) {
    const variables = [
      { name: 'Build Id', env: process.env.BUILD_BUILDNUMBER },
      { name: 'Source Branch', env: process.env.BUILD_SOURCEBRANCHNAME },
      { name: 'Source Version', env: process.env.BUILD_SOURCEVERSION }
    ];

    let maxLength = 0;
    variables.forEach(variable => {
      const length = variable.name.length;

      if (length <= maxLength) return;
      maxLength = length;
    });

    console.info(`%c +------------------------------+`, 'color: gray; font-size: 12x;');
    for (const variable of variables) {
      const margin = maxLength - variable.name.length;
      console.info(
        `%c ${variable.name}: ${new Array(margin + 1).join(' ')}%c${variable.env}`,
        'color: white; font-size: 12px', 'font-size: 12px;'
      );
    }
    console.info(`%c +------------------------------+`, 'color: gray; font-size: 12;');
  }

  /*
    Register directives
  */
  Vue.directive('clickout', clickout);

  /*
    Register plugins
  */
  Vue.use(VeeValidate, {
    i18n: app.i18n,
    dictionary: {
      en,
      fr
    }
  });
};
