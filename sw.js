const CACHE_NAME = "root-ansh-v1";
const OFFLINE_URL = "/offline.html";

const ASSETS = [
    "/",
    "/index.html",
    "/offline.html",
    "/manifest.webmanifest",
    "/icons/icon-192.png",
    "/icons/icon-512.png"
];

// Install
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

// Activate
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

// Fetch
self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const cloned = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned));
                return response;
            })
            .catch(() =>
                caches.match(event.request).then((res) => res || caches.match(OFFLINE_URL))
            )
    );
});
