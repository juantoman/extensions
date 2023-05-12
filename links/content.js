document.addEventListener("click", function(event) {
//if (event.target.tagName === "IMG") {
    chrome.storage.local.get(["clicks"]).then((result) => {
        console.log("clicks currently is " + result.clicks);
        chrome.runtime.sendMessage({
            action: "capturar_click",
            clicks: result.clicks
        });
    });
    
    //console.log(chrome.storage.local.get(["clicks"]))
    //document.getElementById("clicks").textContent = n;
//}
});
document.addEventListener("keydown", function(event) {
//if (event.target.tagName === "IMG") {
    chrome.storage.local.get(["keys"]).then((result) => {
        console.log("keys currently is " + result.keys);
        chrome.runtime.sendMessage({
            action: "capturar_key",
            keys: result.keys
        });
    });
    //console.log(chrome.storage.local.get(["keys"]))
    //document.getElementById("clicks").textContent = k;
//}
});