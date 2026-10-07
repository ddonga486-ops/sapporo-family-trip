// SAPPORO FAMILY TRIP v5 · 2026-10-08
const CACHE = 'sapporo-family-trip-v5';
const CORE = [
  './','./index.html','./styles.css?v=5','./app.js?v=5','./cloud.js?v=5','./supabase-config.js?v=5','./manifest.webmanifest',
  './assets/day1-otaru.jpg','./assets/day2-jozankei.jpg','./assets/day3-sapporo.jpg','./assets/day4-airport.jpg',
  './assets/otaru-canal.jpg','./assets/naruto-food.jpg','./assets/letao-dessert.jpg','./assets/bichon-home.jpg','./assets/bichon-route.jpg',
  './assets/icon-192.png','./assets/icon-512.png'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return; // Supabase/API/CDN 응답은 캐시하지 않음
  const appShell=event.request.mode==='navigate'||/\/(?:index\.html|app\.js|styles\.css|cloud\.js|supabase-config\.js)$/.test(url.pathname);
  if(appShell){event.respondWith(fetch(event.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return r}).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html'))));return;}
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return r})));
});
