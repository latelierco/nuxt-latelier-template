import Vue from 'vue';
import VeeValidate from 'vee-validate';
import fr from 'vee-validate/dist/locale/fr';
import en from 'vee-validate/dist/locale/en';

import clickout from './directives/clickoutside';

export default ({ store, app }, inject) => {
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
