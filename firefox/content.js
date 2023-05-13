document.addEventListener("click", function(event) {
//if (event.target.tagName === "IMG") {
    
        chrome.runtime.sendMessage({
            action: "capturar_click"
        });
    
    
    //console.log(chrome.storage.local.get(["clicks"]))
    //document.getElementById("clicks").textContent = n;
//}
});
document.addEventListener("keydown", function(event) {
//if (event.target.tagName === "IMG") {
    
        chrome.runtime.sendMessage({
            action: "capturar_key"
        });
   
    //console.log(chrome.storage.local.get(["keys"]))
    //document.getElementById("clicks").textContent = k;
//}
});