importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-latelier-template",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/0.31f5f5950e6ee0afca12.js",
    "revision": "d290621e20954633fc1fcc941e7a2199"
  },
  {
    "url": "/_nuxt/1.aceb2cf4d89dff239b6d.js",
    "revision": "6f5eb651ad179365e037912b71fbf0d2"
  },
  {
    "url": "/_nuxt/app.c5ed823bd5f2348eea79.js",
    "revision": "370bdf146fe5f1cfa45aa8646a264ff7"
  },
  {
    "url": "/_nuxt/manifest.0394cd1a9211226d83e6.js",
    "revision": "69702d2c4af6ea588d0267de2629e8fc"
  },
  {
    "url": "/_nuxt/vendor.62639f20836d3ba3e07f.js",
    "revision": "c293581e425095c41658471a77c2bc4b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

