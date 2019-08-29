importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('cwryw').then(function(cache) {
     return cache.addAll([
      '/',
      '/?homescreen=1',
      '/index.html',
      '/style.css'
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});
