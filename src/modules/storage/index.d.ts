import Vue from 'vue';
import LocalForage from 'localforage';

declare module 'vue/types/vue' {
  interface Vue {
    $storage: LocalForage;
  }
}

declare module 'vuex' {
  interface Store<S> {
    $storage: LocalForage
  }
}
