chrome.webRequest.onBeforeRequest.addListener(function(details) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tabs[0].id, {value: "refresh"}, function(response) {
    		console.log(response);
  		});
	});
}, {urls:["https://www.facebook.com/messaging/send/?dpr=1", "http://www.facebook.com/messaging/send/?dpr=1", "https://www.facebook.com/ajax/mercury/mark_seen.php?dpr=1", "http://www.facebook.com/ajax/mercury/mark_seen.php?dpr=1"]})