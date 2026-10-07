const CACHE = 'sapporo-family-trip-v2';
const CORE = [
  './','./index.html','./styles.css?v=2','./app.js?v=2','./manifest.webmanifest',
  './assets/day1-otaru.jpg','./assets/day2-jozankei.jpg','./assets/day3-sapporo.jpg','./assets/day4-airport.jpg',
  './assets/otaru-canal.jpg','./assets/naruto-food.jpg','./assets/letao-dessert.jpg','./assets/bichon-home.jpg','./assets/bichon-route.jpg',
  './assets/icon-192.png','./assets/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isAppShell = event.request.mode === 'navigate' || /\/(?:index\.html|app\.js|styles\.css)$/.test(url.pathname);

  if (isAppShell) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
