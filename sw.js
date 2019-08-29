importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('cwryw').then(function(cache) {
     return cache.addAll([
      '/index.html',
      '/style.css'
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {

console.log(event.request.url);

});
