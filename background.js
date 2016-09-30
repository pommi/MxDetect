function iconOff(data) {
  if (data.url.match(/^http/)) {
    //console.log("OFF: tabId: " + data.tabId + ", URL: " + data.url);
    chrome.browserAction.setIcon({tabId: data.tabId, path: "icons/mendix-logo-grey.svg"});
  }
}

function iconOn(data) {
  //console.log("ON: tabId: " + data.tabId + ", URL: " + data.url);
  chrome.browserAction.setIcon({tabId: data.tabId, path: "icons/mendix-logo.svg"});
}

chrome.webNavigation.onBeforeNavigate.addListener(
  iconOff
);

chrome.webRequest.onBeforeRequest.addListener(
  iconOn,
  {urls: ["*://*/*mxclientsystem/*"]}
);
