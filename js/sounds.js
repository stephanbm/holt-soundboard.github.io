let main = document.getElementsByTagName("main")[0];
let player = document.getElementById("player");
let all_sounds = [];
for (let char in data) {
    let sounds = data[char];
    for (s in sounds) {
        let audio = sounds[s];
        all_sounds.push(`${char}/${audio}`);
    }
}


for (let char in data) {
    main.innerHTML += `
        <div class="container" id="${char}">
            <h1>${char}</h1>
            <div class="grid" id="${char}_grid"></div>
        </div>

    `;

    let sounds = data[char];
    for (s in sounds) {
        let audio = sounds[s];
        let name = audio.split(".mp3")[0];
        let colorClass = colors[audio[0].toLowerCase()];

        let path = `${char}/${audio}`;
        // does safari require full path?
        document.getElementById(`${char}_grid`).innerHTML += `
            <div onclick="playSound(\`${path}\`)" class="${colorClass}">
                ${name}
            </div>
        `;
        // ontouchstart="playSound(\`${path}\`)"
    }
}

// let statusMeta = document.getElementById("status_color");
// let nav = document.getElementsByTagName("nav")[0];
//was going to chang color on every sound click, but decided agains it

function playSound(sound) {
    // analytic tracking
    // ga('send', 'event', 'audio', 'play', sound)
    gtag('event', 'play', {
        'event_category': 'audio',
        'event_label': sound.split(".mp3")[0]
    });
    console.log('event to sound ', sound);
    
    // console.log(sound);
    // console.log(statusMeta.content);
    // statusMeta.content = nav.style.background = "#"+((1<<24)*Math.random()|0).toString(16);

    // using raw github user content to reduce errors
    // "https://holt-soundboard.github.io/" +
    player.src = "https://holt-soundboard.github.io/" + "sounds/" + sound;
    // player.src = "https://raw.githubusercontent.com/holt-soundboard/holt-soundboard.github.io/master/sounds/" + sound;

    // console.log(player.src);

    // console.log(player.src);
    let aud = player.cloneNode().play();
    // player.play();
    // if(navigator.vibrate) {navigator.vibrate([100])}


}



let randomButton = document.getElementById("random_button")
randomButton.onclick = function() {
    let rand = all_sounds[Math.floor(Math.random() * all_sounds.length)];
    playSound(rand);
}