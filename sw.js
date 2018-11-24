var CACHE_NAME = 'holt-soundboard-0.2.11';
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

  "/styles/fa/css/all.min.css",

  "/sounds/Captain Holt/Talking raisin.mp3",
  "/sounds/Captain Holt/Right now.mp3",
  "/sounds/Captain Holt/Wuntch time is over.mp3",
  "/sounds/Captain Holt/Yabba dabba doo.mp3",
  "/sounds/Captain Holt/Dirtbag.mp3",
  "/sounds/Captain Holt/The full bullpen.mp3",
  "/sounds/Captain Holt/I'm diffusing a situation.mp3",
  "/sounds/Captain Holt/No one will ever believe you.mp3",
  "/sounds/Captain Holt/HOT DAMN .mp3",
  "/sounds/Captain Holt/This is.mp3",
  "/sounds/Captain Holt/Time for the next level.mp3",
  "/sounds/Captain Holt/I'm a Curd-mudgeon.mp3",
  "/sounds/Captain Holt/Stop playing this inane garbage.mp3",
  "/sounds/Captain Holt/Bone.mp3",
  "/sounds/Captain Holt/Let's unleash hell.mp3",
  "/sounds/Captain Holt/Peralta you're a genius.mp3",
  "/sounds/Captain Holt/I've never been happier.mp3",
  "/sounds/Captain Holt/Huh.mp3",
  "/sounds/Captain Holt/Get to work.mp3",
  "/sounds/Captain Holt/Yas queen.mp3",
  "/sounds/Captain Holt/Hello Sexarella.mp3",
  "/sounds/Captain Holt/I've heard you saying that 162 times.mp3",
  "/sounds/Captain Holt/You call that dancing.mp3",
  "/sounds/Captain Holt/Cute little secret weapon.mp3",
  "/sounds/Captain Holt/Raymond Holt.mp3",
  "/sounds/Captain Holt/Situation diffused.mp3",
  "/sounds/Captain Holt/Kwazy cupcakes.mp3",
  "/sounds/Captain Holt/Never love anything.mp3",
  "/sounds/Captain Holt/Very cool.mp3",
  "/sounds/Captain Holt/Forced laughing.mp3",
  "/sounds/Captain Holt/Is everything OK.mp3",
  "/sounds/Captain Holt/You're not cheddar.mp3",
  "/sounds/Captain Holt/I was hula hooping.mp3",
  "/sounds/Captain Holt/D-D-D-D-D-D-Derek.mp3",
  "/sounds/Captain Holt/I have zero interest.mp3",
  "/sounds/Captain Holt/Marshedmallows.mp3",
  "/sounds/Captain Holt/You embarrass yourself.mp3",
  "/sounds/Captain Holt/This is Balthaazar.mp3",
  "/sounds/Captain Holt/Cowabunga.mp3",
  "/sounds/Captain Holt/Unleash the beast.mp3",
  "/sounds/Captain Holt/You've used my logic against me.mp3",
  "/sounds/Captain Holt/I gained 3 pounds in Paris.mp3",
  "/sounds/Captain Holt/Get some.mp3",
  "/sounds/Captain Holt/Funky Cold Medina.mp3",
  "/sounds/Captain Holt/Robot.mp3",
  "/sounds/Captain Holt/Velvet thunder.mp3",
  "/sounds/Captain Holt/Dismissed.mp3",
  "/sounds/Captain Holt/How dare you.mp3",
  "/sounds/Captain Holt/Is everything okay (brain).mp3",
  "/sounds/Captain Holt/Oppsie Doodle.mp3",
  "/sounds/Captain Holt/Boost my bottom.mp3",
  "/sounds/Captain Holt/Painnnn.mp3",
  "/sounds/Captain Holt/Bingpot.mp3",
  "/sounds/Captain Holt/Here at the fun zone.mp3",
  "/sounds/Captain Holt/I am your superior officer.mp3",
  "/sounds/Captain Holt/I just erased everything.mp3",
  "/sounds/Captain Holt/Yes.mp3",
  "/sounds/Captain Holt/Oh damn.mp3",
  "/sounds/Captain Holt/I'd like to play.mp3",
  "/sounds/Captain Holt/Now put on a smile.mp3",
  "/sounds/Captain Holt/Vindication.mp3",
  "/sounds/Captain Holt/BRB time.mp3",
  "/sounds/Captain Holt/Funniest story.mp3",
  "/sounds/Captain Holt/Made no I birthed her.mp3",
  "/sounds/Captain Holt/But if you're here.mp3",
  "/sounds/Captain Holt/Booone.mp3",
  "/sounds/Captain Holt/Marco polo.mp3",
  "/sounds/Captain Holt/Everything is garbage.mp3",
  "/sounds/Captain Holt/Bold personality.mp3",
  "/sounds/Captain Holt/Case.mp3",
  "/sounds/Captain Holt/Let's get that punk!.mp3",
  "/sounds/Captain Holt/Time to make daddy proud.mp3",
  "/sounds/Captain Holt/I'm.mp3",
  "/sounds/Captain Holt/What are you doing at Razzmataz.mp3",
  "/sounds/Terry Jeffords/The worst thing in the world.mp3",
  "/sounds/Terry Jeffords/Whyyy.mp3",
  "/sounds/Terry Jeffords/Terry loves lavendar.mp3",
  "/sounds/Terry Jeffords/How dare you.mp3",
  "/sounds/Terry Jeffords/Grind these kittens.mp3",
  "/sounds/Terry Jeffords/Three-perp perp cell.mp3",
  "/sounds/Terry Jeffords/I am loving it.mp3",
  "/sounds/Terry Jeffords/Terry regrets.mp3",
  "/sounds/Terry Jeffords/Shut up stupid.mp3",
  "/sounds/Charles Boyle/Really.mp3",
  "/sounds/Charles Boyle/Protect our breasts.mp3",
  "/sounds/Charles Boyle/Fat.mp3",
  "/sounds/Charles Boyle/No I don't.mp3",
  "/sounds/Charles Boyle/Dianne Wiest infection.mp3",
  "/sounds/Charles Boyle/Like yeast.mp3",
  "/sounds/Charles Boyle/Pina collada.mp3",
  "/sounds/Charles Boyle/Mama's gonna talk her way in.mp3",
  "/sounds/Charles Boyle/Head and muffin.mp3",
  "/sounds/Charles Boyle/STDs.mp3",
  "/sounds/Charles Boyle/A dry boy is a smart boy.mp3",
  "/sounds/Charles Boyle/You are ovulating like crazy right now.mp3",
  "/sounds/Charles Boyle/I don't wanna be known as the office slut.mp3",
  "/sounds/Charles Boyle/Fantasy threesome.mp3",
  "/sounds/Charles Boyle/Aroused by bees.mp3",
  "/sounds/Jake Peralta/Sex tape (what is taking so long).mp3",
  "/sounds/Jake Peralta/Title of my sex tape.mp3",
  "/sounds/Jake Peralta/Was it cool it felt very cool.mp3",
  "/sounds/Jake Peralta/Number 1 or number 2.mp3",
  "/sounds/Jake Peralta/Give them a public dressing down.mp3",
  "/sounds/Jake Peralta/Now number 5.mp3",
  "/sounds/Jake Peralta/You sick son of a bitch.mp3",
  "/sounds/Jake Peralta/Cocaine.mp3",
  "/sounds/Jake Peralta/Cooool.mp3",
  "/sounds/Jake Peralta/No spoilees.mp3",
  "/sounds/Jake Peralta/Homeland security.mp3",
  "/sounds/Jake Peralta/Sex tape (with someone).mp3",
  "/sounds/Jake Peralta/By using my big fat brain.mp3",
  "/sounds/Jake Peralta/What, how.mp3",
  "/sounds/Jake Peralta/Sex tape (not your fault I was terrible).mp3",
  "/sounds/Jake Peralta/EEEE EEEE EEEE EEEE.mp3",
  "/sounds/Jake Peralta/Yeah how cool.mp3",
  "/sounds/Jake Peralta/Oh cool.mp3",
  "/sounds/Jake Peralta/Sex tape (ass bite).mp3",
  "/sounds/Jake Peralta/Sex tape (get to sexual).mp3",
  "/sounds/Jake Peralta/Sweet.mp3",
  "/sounds/Jake Peralta/Oh cool cool cool.mp3",
  "/sounds/Jake Peralta/Cool.mp3",
  "/sounds/Jake Peralta/Cool cool yeah.mp3",
  "/sounds/Jake Peralta/Tell me why.mp3",
  "/sounds/Jake Peralta/Now that it's just us.mp3",
  "/sounds/Jake Peralta/I'm stuck.mp3",
  "/sounds/Jake Peralta/Didn't work.mp3",
  "/sounds/Jake Peralta/Woooh!.mp3",
  "/sounds/Jake Peralta/Name of Amy's sex tap.mp3",
  "/sounds/Jake Peralta/I was kinda thinking about asking you out.mp3",
  "/sounds/Jake Peralta/Three perps in the three-perp cell.mp3",
  "/sounds/Jake Peralta/Telllllll me why.mp3",
  "/sounds/Jake Peralta/Sex Tape (kind, sober, fully-dressed).mp3",
  "/sounds/Jake Peralta/Guilty cool.mp3",
  "/sounds/Jake Peralta/Sex tape (why doesn't your mouth work).mp3",
  "/sounds/Jake Peralta/Literal chills.mp3",
  "/sounds/Jake Peralta/Cool cool cool cool cool cool cool.mp3",
  "/sounds/Jake Peralta/Dat really bummed me out.mp3",
  "/sounds/Jake Peralta/Oh my god I forgot about that part.mp3",
  "/sounds/Jake Peralta/Cool cool cool cool no doubt.mp3",
  "/sounds/Jake Peralta/No.mp3",
  "/sounds/Jake Peralta/It will be good and professional.mp3",
  "/sounds/Jake Peralta/Boobies bounce.mp3",
];

self.addEventListener('install', function(event) {
  // Perform install steps
  install(event, CACHE_NAME, urlsToCache);
  // event.waitUntil(
  //   caches.open(CACHE_NAME)
  //     .then(function(cache) {
  //       console.log('Opened cache and caching all URLs given');
  //       return cache.addAll(urlsToCache);
  //     })
  // );
});

function install(event, cacheName, urls) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Opened cache and caching all URLs given');
        return cache.addAll(urls);
      })
  );
}


// TODO: delete older service workers
// TODO: remove older caches when a new one is there

// intercepting page requests
self.addEventListener('fetch', function(event) {
  console.log('intercepting: ', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  )
})


self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {
        console.log("this cache name: ",thisCacheName);
        if (thisCacheName !== CACHE_NAME) {
          console.log('older cache present, must delete: ', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }))
    })
  )
})
