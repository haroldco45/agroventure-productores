// Red de Productores (demo) — service worker · Vibras Positivas HM
const CACHE='avp-v1';
const CORE=['./','./index.html','./manifest.json','./qr.js','./icon-192.png','./icon-512.png','./og-image.jpg','./img/bayas.jpg','./img/bolsas-sustrato.jpg','./img/calidad-fresco.jpg','./img/cosecha-hileras.jpg','./img/cosecheros.jpg','./img/cultivo-cubierto.jpg','./img/floracion.jpg','./img/huerto-otono.jpg','./img/huerto-verde.jpg','./img/mano-cosecha.jpg','./img/racimo.jpg','./img/racimo2.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);
 if(u.origin===location.origin&&(e.request.mode==='navigate'||u.pathname.endsWith('.html'))){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));return}
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok&&(u.origin===location.origin||u.hostname.includes('fonts.g'))){const c=res.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}return res})))});
