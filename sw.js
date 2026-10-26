const CACHE_NAME = "birdwatcher-v10";
const CORE_FILES = [
  "./",
  "index.html",
  "app.js",
  "style.css",
  "ort.min.js",
  "echarts.min.js",
  "china_geo.json",
  "sample_images.json",
  "classes.json",
  "icon-192.png",
  "icon-512.png",
  "manifest.json"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(c=>c.addAll(CORE_FILES)).then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", e=>{
  const url = new URL(e.request.url);
  if(e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached=>{
      const fetchPromise = fetch(e.request).then(resp=>{
        if(resp.ok && resp.type !== "opaque"){
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c=>c.put(e.request, clone));
        }
        return resp;
      }).catch(()=>cached);
      return cached || fetchPromise;
    })
  );
});