// SAPPORO FAMILY TRIP v11 · stable offline-first app shell
const CACHE = 'sapporo-family-trip-v11';
const CORE = [
  '/', '/index.html', '/styles.css?v=11', '/app.js?v=11', '/cloud.js?v=11', '/supabase-config.js?v=11', '/manifest.webmanifest',
  '/assets/day1-otaru.jpg','/assets/day2-jozankei.jpg','/assets/day3-sapporo.jpg','/assets/day4-airport.jpg',
  '/assets/otaru-canal.jpg','/assets/naruto-food.jpg','/assets/letao-dessert.jpg','/assets/bichon-home.jpg','/assets/bichon-route.jpg',
  '/assets/icon-192.png','/assets/icon-512.png'
];
self.addEventListener('install', event => event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  // 한 파일 오류 때문에 서비스워커 전체 설치가 실패하지 않도록 개별 저장합니다.
  await Promise.allSettled(CORE.map(async url=>{
    const r=await fetch(url,{cache:'reload'});
    if(r.ok) await cache.put(url,r.clone());
  }));
  await self.skipWaiting();
})()));
self.addEventListener('activate', event => event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;

  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE);
      const shell=(await cache.match('/index.html')) || (await cache.match('/'));
      // 이미 설치된 앱/웹에서는 네트워크 연결을 기다리지 않고 앱 셸을 즉시 표시합니다.
      const refresh=fetch(event.request,{cache:'no-store'}).then(async r=>{
        if(r && r.ok){ await cache.put('/index.html',r.clone()); await cache.put('/',r.clone()); }
        return r;
      }).catch(()=>null);
      event.waitUntil(refresh);
      return shell || await refresh || new Response('Offline',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
    })());
    return;
  }

  const isCore=/\/(?:app\.js|styles\.css|cloud\.js|supabase-config\.js|manifest\.webmanifest)$/.test(url.pathname) || url.pathname.includes('/assets/');
  if(isCore){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE);
      const cached=await cache.match(event.request) || await cache.match(url.pathname+url.search) || await cache.match(url.pathname);
      const network=fetch(event.request,{cache:'no-store'}).then(async r=>{ if(r&&r.ok) await cache.put(event.request,r.clone()); return r; }).catch(()=>null);
      return cached || await network || Response.error();
    })());
    return;
  }

  event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});
