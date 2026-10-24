const CACHE_NAME = "birdwatcher-v1";
const CORE_FILES = [
  "./",
  "index.html",
  "app.js",
  "style.css",
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
  if(url.origin !== location.origin) return;
  if(e.request.method !== "GET") return;
  if(url.pathname.endsWith(".onnx") || url.pathname.endsWith(".wasm")) return;
  e.respondWith(
    caches.match(e.request).then(cached=>{
      const fetchPromise = fetch(e.request).then(resp=>{
        if(resp.ok){
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c=>c.put(e.request, clone));
        }
        return resp;
      }).catch(()=>cached);
      return cached || fetchPromise;
    })
  );
});