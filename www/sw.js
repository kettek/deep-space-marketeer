let cacheName = 'DSM-v1'

let cacheFiles = [
  '/index.html',
  '/css/index.css',
  '/static/bundle.js',
  '/main.css',
]

// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install')
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content')
      return cache.addAll(cacheFiles)
    })
  )
})

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url)
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: ' + e.request.url)
          cache.put(e.request, response.clone())
          return response
        })
      })
    })
  )
})

/*self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
        if(key !== cacheName) {
          return caches.delete(key)
        }
      }))
    })
  )
})*/