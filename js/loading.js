window.addEventListener("load", function() {
    let load_screen = document.getElementById("loading");
    document.body.removeChild(loading)
})

// cross button for message
let message = document.getElementById("message");
message.onclick = function() {
    message.style.display = "none";
}