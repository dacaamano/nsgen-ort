// NS+Gen Service Worker v3.0
// Autor: Daniel - ORT Argentina
// Licencia: MIT

const CACHE_NAME = 'nsgen-v3.0';
const urlsToCache = [
  './ns_gen_v3.html',
  './manifest.json'
];

// Instalación - cachear archivos
self.addEventListener('install', event => {
  console.log('[Service Worker] Instalando NS+Gen v3.0');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Cacheando archivos');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activación - limpiar cachés antiguas
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activando NS+Gen v3.0');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - estrategia Cache First, luego Network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - retornar respuesta
        if (response) {
          console.log('[Service Worker] Sirviendo desde caché:', event.request.url);
          return response;
        }

        // No está en caché - hacer fetch
        console.log('[Service Worker] Fetch desde red:', event.request.url);
        return fetch(event.request).then(response => {
          // Verificar respuesta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar la respuesta
          const responseToCache = response.clone();

          // Agregar a caché para futuras peticiones
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(error => {
        console.error('[Service Worker] Error en fetch:', error);
        // Aquí podrías retornar una página offline personalizada
        // return caches.match('/offline.html');
      })
  );
});

// Mensaje - manejar actualizaciones
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Sincronización en background (opcional)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-diagrams') {
    console.log('[Service Worker] Sincronizando diagramas');
    event.waitUntil(syncDiagrams());
  }
});

async function syncDiagrams() {
  // Implementar lógica de sincronización si es necesario
  console.log('[Service Worker] Sincronización completada');
}

console.log('[Service Worker] NS+Gen v3.0 cargado');
