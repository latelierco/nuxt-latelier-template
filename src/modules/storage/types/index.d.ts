import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $storage: LocalForageDbMethodsCore;
  }
}
