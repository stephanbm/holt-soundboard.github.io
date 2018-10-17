let menu = document.getElementsByClassName("menu")[0];
let threeButton = document.getElementById("threedot_button");

threeButton.onclick = function() {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"
    }
}