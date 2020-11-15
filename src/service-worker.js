importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppresWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL('/index.html')
)

workbox.googleAnalytics.initialize();

workbox.routing.registerRoute(
  new RegExp(/^https?:\/\/www.themealdb.com\/api\/.*/),
  new workbox.strategies.StaleWhileRevalidate(),
  'GET')

workbox.routing.registerRoute(
  new RegExp(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/),
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 24*60*60
      })
    ]
  })
)

  // Por defecto, va de ultimo.
workbox.routing.registerRoute(
  new RegExp(/^https?.*/),
  new workbox.strategies.NetworkFirst(), 'GET'
);
