const CACHE_NAME = "v1_cache_whatsapp_app";
const urlsToCache = [
  "./",
  "./img/faviconwpp.png",
  "./img/ic32.png",
  "./img/ic64.png",
  "./img/ic128.png",
  "./img/ic256.png",
  "./img/ic512.png",
  "./img/ic1024.png",
  "./js/main.js",
  "./css/styles.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  "https://unpkg.com/vue@3",
  "https://kit.fontawesome.com/5d3fcc545d.js",
  "https://github.com/EleazarBT",
  "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
];

//Eventos

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache
        .addAll(urlsToCache)
        .then(() => self.skipWaiting())
        .catch((err) => console.log(err))
    )
  );
});

self.addEventListener("activate", (e) => {
  const cacheWhiteList = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhiteList.indexOf(cacheName) == -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request);
    })
  );
});
