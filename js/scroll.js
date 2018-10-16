function jump(char) {
    let toScroll = document.getElementById(char);
    toScroll.scrollIntoView({behavior: "smooth", block: "start"});

    var stateObj = { foo: "bar" };
    history.pushState(stateObj, "page 2", "index.html");
}