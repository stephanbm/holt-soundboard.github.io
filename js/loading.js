window.addEventListener("load", function() {
    let load_screen = document.getElementById("loading");
    document.body.removeChild(loading)
})

let message = document.getElementById("message");
message.style.display = "none";
// if it has been hidden before, hide foreever
if (localStorage.messageHidden2) {
    message.style.display = "none";
}

// cross button for message
message.onclick = function() {
    message.style.display = "none";
    localStorage.messageHidden2 = true;
}