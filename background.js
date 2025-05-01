// background.js
// This service worker listens for tab updates and injects the content script
// into Twitch.tv pages using the scripting API.

console.log("Twitch Auto Drops & Points Claimer background script loaded.");

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the tab has finished loading and the URL matches Twitch.tv
  if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('https://www.twitch.tv/')) {
    console.log(`Tab updated: ${tab.url}. Attempting to inject content script.`);

    // Check if the content script is already injected to avoid duplicates
    // This is a basic check using a flag set by the content script
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: () => {
        // Check for a flag or variable set by the content script
        return typeof window.twitchAutoClaimerInjected === 'boolean';
      }
    }, (results) => {
      if (chrome.runtime.lastError || (results && results[0] && results[0].result === true)) {
        // Script already injected or an error occurred during the check
        console.log("Content script already injected or injection check failed.");
      } else {
        // Inject the content script
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ['content.js'] // Path to your content script file
        }, () => {
          if (chrome.runtime.lastError) {
            console.error(`Script injection failed: ${chrome.runtime.lastError.message}`);
          } else {
            console.log("Content script injected successfully.");
          }
        });
      }
    });
  }
});
