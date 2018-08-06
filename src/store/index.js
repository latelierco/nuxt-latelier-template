// Example: https://codeburst.io/vuex-and-typescript-3427ba78cfa8

import { Store } from 'vuex';

import { moduleName as test } from './_template/index';

const debug = process.env.NODE_ENV !== 'production';

const createStore = () => {
  return new Store({
    state: {
      version: '1.0.0'
    },

    modules: {
      test
    },
    strict: debug
  });
};

export default createStore;
