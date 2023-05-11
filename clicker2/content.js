document.addEventListener("click", function(event) {
  //if (event.target.tagName === "IMG") {
    chrome.runtime.sendMessage({
      action: "capturar_click"
    });
    //document.getElementById("clicks").textContent = n;
  //}
});
document.addEventListener("keydown", function(event) {
  //if (event.target.tagName === "IMG") {
    chrome.runtime.sendMessage({
      action: "capturar_key"
    });
    //document.getElementById("clicks").textContent = k;
  //}
});