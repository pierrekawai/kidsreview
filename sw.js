/* ============================================================
   KidsReview – Service Worker v1.0
   Cache hors-ligne pour installation PWA
   ============================================================ */

const CACHE_NAME = 'kidsreview-v1.0';
const ASSETS = [
  './',
  './KidsReview_V1.0.html',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg'
];

/* Installation : mise en cache des ressources */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* Activation : nettoyage des anciens caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* Fetch : cache-first, fallback réseau */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
      .catch(() => caches.match('./KidsReview_V1.0.html'))
  );
});
