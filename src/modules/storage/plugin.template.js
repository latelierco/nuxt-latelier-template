import Vue from 'vue'
import localForage from 'localforage'

const nuxtLocalForage = {
  install(Vue, options) {
    localForage.config(options)
    Vue.prototype.$storage = localForage;
  }
}

export default async _ => {
  Vue.use(nuxtLocalForage, <%= serialize(options) %>)
}
