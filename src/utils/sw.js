//instalar el service worker
self.addEventListener('install', event =>{
    event.waitUntil(precache())
});

self.addEventListener('fetch', event =>{
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    //Buscamos una cache
    event.respondWith(cachedResponse(request));
    
    //actualizar en cache
    event.waitUntil(updateCache(request))
})

async function precache() {
    const cache = await caches.open("v1");
    return cache.addAll([
     //   '/',
       // '/index.html',
       // '/index.css',
       // '/src/index.js',
       // '/src/MediaPlayer.js',
       // '/src/plugins/AutoPlay.js',
       // '/src/plugins/AutoPause.js',
       // '/src/assets/ejercicio.mp4',
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open("v1")
    const response = await cache.match(request)
    return response || fetch(request)
}
async function updateCache(request) {
    const cache = await caches.open("v1")
    const response = await fetch(request)
    return cache.put(request, response);
}
