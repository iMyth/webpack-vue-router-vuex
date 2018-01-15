var CACHE_NAME = 'my-site-cache-v1'
var urlsToCache = [
  '/manifest.js',
  '/index.html',
  '/app.js',
  '/bootstrap.js',
  '/app.css',
  '/assets/images/sprite.png'
]

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})
