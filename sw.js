var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'styles.css',
  'app.js',
  'playbulbCandle.js',
  'color-wheel.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

