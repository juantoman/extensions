chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "capturar_imagen") {
    console.log(request.url);
    // Aquí puedes agregar el código para guardar la URL capturada
  }
});