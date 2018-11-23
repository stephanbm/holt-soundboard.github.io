self.addEventListener('install', function(event) {
  // Perform install steps
});


var cacheName = 'holt-soundboard-0.2';
var urlsToCache = [
  "/",
  "/index.html",
  "/favicon.ico",

  "js/chars.js",
  "js/colors.js",
  "js/data.js",
  "js/loading.js",
  "js/scroll.js",
  "js/sounds.js",
  "styles/colors.css",
  "styles/loading.css",
  "styles/main.css",
  "styles/menu.css",
  "styles/nav.css",
  "styles/start.css",

  "/sounds/Captain Holt/Bold personality.m4a",
  "/sounds/Captain Holt/Let's get that punk!.m4a",
  "/sounds/Captain Holt/Time to make daddy proud.m4a",
  "/sounds/Captain Holt/I'm.m4a",
  "/sounds/Captain Holt/What are you doing at Razzmataz.m4a",
  "/sounds/Captain Holt/Made no I birthed her.m4a",
  "/sounds/Captain Holt/But if you're here.m4a",
  "/sounds/Captain Holt/Booone.m4a",
  "/sounds/Captain Holt/Everything is garbage.m4a",
  "/sounds/Captain Holt/Marco polo.m4a",
  "/sounds/Captain Holt/Yes.m4a",
  "/sounds/Captain Holt/Oh damn.m4a",
  "/sounds/Captain Holt/I'd like to play.m4a",
  "/sounds/Captain Holt/Vindication.m4a",
  "/sounds/Captain Holt/Now put on a smile.m4a",
  "/sounds/Captain Holt/BRB time.m4a",
  "/sounds/Captain Holt/Funniest story.m4a",
  "/sounds/Captain Holt/Oppsie Doodle.m4a",
  "/sounds/Captain Holt/Is everything okay (brain).m4a",
  "/sounds/Captain Holt/How dare you.m4a",
  "/sounds/Captain Holt/Boost my bottom.m4a",
  "/sounds/Captain Holt/Painnnn.m4a",
  "/sounds/Captain Holt/Bingpot.m4a",
  "/sounds/Captain Holt/Cwazy Cupcakes.m4a",
  "/sounds/Captain Holt/Here at the fun zone.m4a",
  "/sounds/Captain Holt/I am your superior officer.m4a",
  "/sounds/Captain Holt/I just erased everything.m4a",
  "/sounds/Captain Holt/I have zero interest.m4a",
  "/sounds/Captain Holt/D-D-D-D-D-D-Derek.m4a",
  "/sounds/Captain Holt/You embarrass yourself.m4a",
  "/sounds/Captain Holt/Marshedmallows.m4a",
  "/sounds/Captain Holt/This is Balthaazar.m4a",
  "/sounds/Captain Holt/Cowabunga.m4a",
  "/sounds/Captain Holt/You've used my logic against me.m4a",
  "/sounds/Captain Holt/Unleash the beast.m4a",
  "/sounds/Captain Holt/I gained 3 pounds in Paris.m4a",
  "/sounds/Captain Holt/Get some.m4a",
  "/sounds/Captain Holt/Funky Cold Medina.m4a",
  "/sounds/Captain Holt/Dismissed.m4a",
  "/sounds/Captain Holt/Robot.m4a",
  "/sounds/Captain Holt/Velvet thunder.m4a",
  "/sounds/Captain Holt/You call that dancing.m4a",
  "/sounds/Captain Holt/Hello Sexarella.m4a",
  "/sounds/Captain Holt/I've heard you saying that 162 times.m4a",
  "/sounds/Captain Holt/Cute little secret weapon.m4a",
  "/sounds/Captain Holt/Raymond Holt.m4a",
  "/sounds/Captain Holt/Situation diffused.m4a",
  "/sounds/Captain Holt/Never love anything.m4a",
  "/sounds/Captain Holt/Very cool.m4a",
  "/sounds/Captain Holt/Is everything OK.m4a",
  "/sounds/Captain Holt/Forced laughing.m4a",
  "/sounds/Captain Holt/I was hula hooping.m4a",
  "/sounds/Captain Holt/You're not cheddar.m4a",
  "/sounds/Captain Holt/Peralta you're a genius.m4a",
  "/sounds/Captain Holt/I've never been happier.m4a",
  "/sounds/Captain Holt/Huh.m4a",
  "/sounds/Captain Holt/Get to work.m4a",
  "/sounds/Captain Holt/Yas queen.m4a",
  "/sounds/Captain Holt/Wuntch time is over.m4a",
  "/sounds/Captain Holt/Talking raisin.m4a",
  "/sounds/Captain Holt/Right now.m4a",
  "/sounds/Captain Holt/Yabba dabba doo.m4a",
  "/sounds/Captain Holt/I'm diffusing a situation.m4a",
  "/sounds/Captain Holt/Dirtbag.m4a",
  "/sounds/Captain Holt/The full bullpen.m4a",
  "/sounds/Captain Holt/Time for the next level.m4a",
  "/sounds/Captain Holt/This is.m4a",
  "/sounds/Captain Holt/HOT DAMN .m4a",
  "/sounds/Captain Holt/I'm a Curd-mudgeon.m4a",
  "/sounds/Captain Holt/Bone.m4a",
  "/sounds/Captain Holt/Stop playing this inane garbage.m4a",
  "/sounds/Captain Holt/Let's unleash hell.m4a",
  "/sounds/Captain Holt/Because no one will ever believe you.m4a",
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// TODO: delete older service workers
// TODO: remove older caches when a new one is there

//
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

