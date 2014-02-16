
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    var url = info.url;
    if (url.toLowerCase().indexOf("msdn.microsoft.com/en-us") < 0) {
      var newUrl = url.replace(/msdn\.microsoft\.com\/..-../i, "msdn.microsoft.com/en-US");
      return {redirectUrl: newUrl};
    }
  },
  {
    urls: [
      "http://msdn.microsoft.com/*",
      "https://msdn.microsoft.com/*"
    ]
  },
  ["blocking"]);
