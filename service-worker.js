const CACHE_NAME = 'pte-master-v10-1';
const ASSETS_TO_CACHE = [
  'main.html',
  'index.html',
  'repeat-sentence.html',
  'describe-image.html',
  'write-essay.html',
  'write-dictation.html',
  'reading-fib.html',
  'reading-rop.html',
  'listening-sst.html',
  'listening-hiw.html',
  'retell-lecture.html',
  'mock-test.html',
  'review.html',
  'cheatsheet.html',
  'question-manager.html',
  'questions.js',
  'audio-engine.js',
  'ui-enhancer.js',
  'cloud-ai-plugin.js',
  'manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
