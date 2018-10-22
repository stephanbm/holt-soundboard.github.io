let chars = Object.keys(data);
let no = chars.length;

let characterRow = document.getElementById("character_row");
characterRow.style.gridTemplateColumns = `repeat(${no}, 1fr)`;

for (let c in chars) {
    // console.log(chars[c]);
    characterRow.innerHTML += `
        <div onclick="jump('${chars[c]}')">${chars[c]}</div>
    `;
}