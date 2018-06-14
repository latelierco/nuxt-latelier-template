import Vue from 'vue'
import localForage from 'localforage'

const nuxtLocalForage = {
  install(Vue, options) {
    localForage.config(options)
  }
}

export default async (ctx, inject) => {
  Vue.use(nuxtLocalForage, <%= serialize(options) %>)

  ctx.$storage = localForage
  inject('storage', localForage)
}
