document.addEventListener("click", function(event) {
  if (event.target.tagName === "IMG") {
    chrome.runtime.sendMessage({
      action: "capturar_imagen",
      url: event.target.src
    });
  }
});