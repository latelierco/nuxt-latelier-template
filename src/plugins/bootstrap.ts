import Vue from 'vue';
import VeeValidate from 'vee-validate';
import fr from 'vee-validate/dist/locale/fr';
import en from 'vee-validate/dist/locale/en';

import clickout from './directives/clickoutside';

/*
  Register directives
*/
Vue.directive('clickout', clickout);

/*
  Register plugins
*/
export default ({ store, app }, inject) => {
  // Mettre l'instance `i18n` dans `app`
  // De cette manière nous pouvons l'utiliser comme middleware et `asyncData` / `fetch` pour les pages
  Vue.use(VeeValidate, {
    i18n: app.i18n,
    dictionary: {
      en,
      fr
    }
  });
};
