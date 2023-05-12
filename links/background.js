let n=0
let k=0
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "capturar_click") {
    //console.log(request.url);
    n++
    //console.log("clicks: " + n);
    chrome.storage.local.set({ clicks: n }).then(() => {
        console.log("clicks is set to " + value);
    });
    //chrome.storage.local.set({ clicks: n })
    //document.getElementById("clicks").textContent = n;
    // Aquí puedes agregar el código para guardar la URL capturada
  }
  if (request.action === "capturar_key") {
    //console.log(request.url);
    k++
    //console.log("keys: " + k);
    chrome.storage.local.set({ keys: k }).then(() => {
        console.log("keys is set to " + value);
    });
    //chrome.storage.local.set({ keys: k })
    //document.getElementById("clicks").textContent = k;
    // Aquí puedes agregar el código para guardar la URL capturada
  }
});
  