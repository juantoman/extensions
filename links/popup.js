chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "capturar_click") {
        n++
        console.log("clicks: " + n);
        document.getElementById("clicks").textContent = n;
    }
    if (request.action === "capturar_key") {
        k++
        console.log("keys: " + k);
        document.getElementById("keys").textContent = k;
    }
});