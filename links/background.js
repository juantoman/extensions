chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {file: "content.js"});
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "showLinks") {
        chrome.tabs.create({url: message.url});
    }
});
  