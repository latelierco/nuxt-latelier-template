/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $storage: any;
  }
}
