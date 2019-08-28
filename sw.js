importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('CwryW Portfolio').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       '/style.css',
       '/script.js', 
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {

console.log(event.request.url);

});
