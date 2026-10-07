// SAPPORO FAMILY TRIP v6 · fast-start cache
const CACHE = 'sapporo-family-trip-v6';
const CORE = [
  './','./index.html','./styles.css?v=6','./app.js?v=6','./cloud.js?v=6','./supabase-config.js?v=6','./manifest.webmanifest',
  './assets/day1-otaru.jpg','./assets/day2-jozankei.jpg','./assets/day3-sapporo.jpg','./assets/day4-airport.jpg',
  './assets/otaru-canal.jpg','./assets/naruto-food.jpg','./assets/letao-dessert.jpg','./assets/bichon-home.jpg','./assets/bichon-route.jpg',
  './assets/icon-192.png','./assets/icon-512.png'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil((async()=>{
  const keys=await caches.keys(); await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
  if(self.registration.navigationPreload) await self.registration.navigationPreload.enable().catch(()=>{});
  await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE);
      const cached=await cache.match('./index.html') || await cache.match('./');
      // 앱 시작은 캐시를 즉시 사용하고, 최신 문서는 백그라운드에서 갱신합니다.
      const refresh=(async()=>{try{const r=await fetch(event.request); if(r&&r.ok) await cache.put('./index.html',r.clone());}catch{}})();
      event.waitUntil(refresh);
      return cached || fetch(event.request);
    })());
    return;
  }
  const isCore=/\/(?:app\.js|styles\.css|cloud\.js|supabase-config\.js|manifest\.webmanifest)$/.test(url.pathname) || url.pathname.includes('/assets/');
  if(isCore){
    event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return r})));
    return;
  }
  event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});
