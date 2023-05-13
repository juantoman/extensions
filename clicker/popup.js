/* chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "capturar_click") {
        console.log(request.clicks)
        document.getElementById("clicks").textContent = request.clicks;
    }
    if (request.action === "capturar_key") {
        console.log(request.keys)
        document.getElementById("keys").textContent = request.keys;
    }
}); */

chrome.storage.local.get(["clicks"]).then((result) => {
    console.log("clicks currently is " + result.clicks);
    document.getElementById("clicks").textContent = result.clicks;
})

chrome.storage.local.get(["keys"]).then((result) => {
    console.log("keys currently is " + result.keys);
    document.getElementById("keys").textContent = result.keys;
})
