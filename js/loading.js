window.addEventListener("load", function() {
    let load_screen = document.getElementById("loading");
    document.body.removeChild(loading)
})

let message = document.getElementById("message");

// if it has been hidden before, hide foreever
if (localStorage.messageHidden) {
    message.style.display = "none";
}

// cross button for message
message.onclick = function() {
    message.style.display = "none";
    localStorage.messageHidden = true;
}