var CACHE_NAME = 'holt-soundboard-0.1.9';
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

  "/sounds/Captain Holt/Bold personality.m4a",
  "/sounds/Captain Holt/Case.m4a",
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
  "/sounds/Terry Jeffords/Shut up stupid.m4a",
  "/sounds/Terry Jeffords/I am loving it.m4a",
  "/sounds/Terry Jeffords/Terry regrets.m4a",
  "/sounds/Terry Jeffords/Three-perp perp cell.m4a",
  "/sounds/Terry Jeffords/How dare you.m4a",
  "/sounds/Terry Jeffords/Grind these kittens.m4a",
  "/sounds/Terry Jeffords/Terry loves lavendar.m4a",
  "/sounds/Terry Jeffords/Whyyy.m4a",
  "/sounds/Terry Jeffords/The worst thing in the world.m4a",
  "/sounds/Charles Boyle/I don't wanna be known as the office slut.m4a",
  "/sounds/Charles Boyle/Fantasy threesome.m4a",
  "/sounds/Charles Boyle/Aroused by bees.m4a",
  "/sounds/Charles Boyle/A dry boy is a smart boy.m4a",
  "/sounds/Charles Boyle/You are ovulating like crazy right now.m4a",
  "/sounds/Charles Boyle/STDs.m4a",
  "/sounds/Charles Boyle/Head and muffin.m4a",
  "/sounds/Charles Boyle/Pina collada.m4a",
  "/sounds/Charles Boyle/Mama's gonna talk her way in.m4a",
  "/sounds/Charles Boyle/Fat.m4a",
  "/sounds/Charles Boyle/No I don't.m4a",
  "/sounds/Charles Boyle/Dianne Wiest infection.m4a",
  "/sounds/Charles Boyle/Like yeast.m4a",
  "/sounds/Charles Boyle/Really.m4a",
  "/sounds/Charles Boyle/Protect our breasts.m4a",
  "/sounds/Jake Peralta/Literal chills.m4a",
  "/sounds/Jake Peralta/Sex tape (why doesn't your mouth work).m4a",
  "/sounds/Jake Peralta/Guilty cool.m4a",
  "/sounds/Jake Peralta/Dat really bummed me out.m4a",
  "/sounds/Jake Peralta/Tell me why 2.m4a",
  "/sounds/Jake Peralta/Cool cool cool cool cool cool cool.m4a",
  "/sounds/Jake Peralta/Oh my god I forgot about that part.m4a",
  "/sounds/Jake Peralta/No.m4a",
  "/sounds/Jake Peralta/Cool cool cool cool no doubt.m4a",
  "/sounds/Jake Peralta/It will be good and professional.m4a",
  "/sounds/Jake Peralta/Boobies bounce.m4a",
  "/sounds/Jake Peralta/Three perps in the three-perp cell.m4a",
  "/sounds/Jake Peralta/Sex Tape (kind, sober, fully-dressed).m4a",
  "/sounds/Jake Peralta/Name of Amy's sex tap.m4a",
  "/sounds/Jake Peralta/I was kinda thinking about asking you out.m4a",
  "/sounds/Jake Peralta/Cool cool yeah.m4a",
  "/sounds/Jake Peralta/Tell me why.m4a",
  "/sounds/Jake Peralta/Now that it's just us.m4a",
  "/sounds/Jake Peralta/Didn't work.m4a",
  "/sounds/Jake Peralta/I'm stuck.m4a",
  "/sounds/Jake Peralta/Woooh!.m4a",
  "/sounds/Jake Peralta/Sex tape (get to sexual).m4a",
  "/sounds/Jake Peralta/Sweet.m4a",
  "/sounds/Jake Peralta/Oh cool cool cool.m4a",
  "/sounds/Jake Peralta/Cool.m4a",
  "/sounds/Jake Peralta/Sex tape (not your fault I was terrible).m4a",
  "/sounds/Jake Peralta/EEEE EEEE EEEE EEEE.m4a",
  "/sounds/Jake Peralta/Yeah how cool.m4a",
  "/sounds/Jake Peralta/Oh cool.m4a",
  "/sounds/Jake Peralta/Sex tape (ass bite).m4a",
  "/sounds/Jake Peralta/Now number 5.m4a",
  "/sounds/Jake Peralta/You sick son of a bitch.m4a",
  "/sounds/Jake Peralta/Cooool.m4a",
  "/sounds/Jake Peralta/Cocaine.m4a",
  "/sounds/Jake Peralta/No spoilees.m4a",
  "/sounds/Jake Peralta/Homeland security.m4a",
  "/sounds/Jake Peralta/Sex tape (with someone).m4a",
  "/sounds/Jake Peralta/By using my big fat brain.m4a",
  "/sounds/Jake Peralta/What, how.m4a",
  "/sounds/Jake Peralta/Sex tape (what is taking so long).m4a",
  "/sounds/Jake Peralta/Title of my sex tape.m4a",
  "/sounds/Jake Peralta/Was it cool it felt very cool.m4a",
  "/sounds/Jake Peralta/Number 1 or number 2.m4a",
  "/sounds/Jake Peralta/Give them a public dressing down.m4a",
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache and caching all URLs given');
        return cache.addAll(urlsToCache);
      })
  );
});

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
