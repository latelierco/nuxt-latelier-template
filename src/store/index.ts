// Example: https://codeburst.io/vuex-and-typescript-3427ba78cfa8

import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import { RootState } from './types';

import { moduleName as test } from './_template/index';

const debug: boolean = process.env.NODE_ENV !== 'production';

const createStore = () => {
  return new Store<RootState>({
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
