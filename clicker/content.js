document.addEventListener("click", function(event) {
  //if (event.target.tagName === "IMG") {
    chrome.runtime.sendMessage({
      action: "capturar_click"
    });
  //}
});
document.addEventListener("keydown", function(event) {
  //if (event.target.tagName === "IMG") {
    chrome.runtime.sendMessage({
      action: "capturar_key"
    });
  //}
});