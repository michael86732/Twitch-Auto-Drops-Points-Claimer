// content.js
// This script runs on Twitch pages to detect and click the "Claim Drop" button
// which can have different text based on language (e.g., 'Claim Now', '立即領取', '现在领取', 'Jetzt abholen', 'Reclamar ahora', 'En profiter', 'Riscuoti subito', '今すぐ入手', '지금 받기', 'Nhận ngay', 'Şimdi Al', 'Vyzvednout kořist', 'Διεκδίκηση τώρα', 'Kiváltás most!', 'Получить сейчас', 'เคลมตอนนี้', 'Claim nu', 'Hent nå', 'Odbierz teraz', 'Resgatar agora', 'Vyzdvihnúť teraz', 'Solicită acum', 'Lunasta nyt', 'Hämta nu')
// It also claims Channel Points bonus buttons.

// Add a flag to indicate that the content script has been injected
window.twitchAutoClaimerInjected = true;
console.log("Twitch Auto Drops Claimer content script loaded.");

// Variable to store the timestamp of the last Channel Points click
let lastPointsClaimTime = 0;
// Cooldown period for Channel Points clicks in milliseconds (e.g., 5 minutes)
const pointsClaimCooldown = 5 * 60 * 1000; // 5 minutes

// Variable to store the timestamp of the last Drops click
let lastDropClaimTime = 0;
// Cooldown period for Drops clicks in milliseconds (e.g., 5 minutes)
const dropClaimCooldown = 5 * 60 * 1000; // 5 minutes

// Function to find and click the claim buttons (Drops and Channel Points)
function claimRewards() {
  // console.log("Attempting to find claim buttons (Drops and Channel Points)..."); // Log less frequently

  const currentTime = Date.now();

  // --- Logic for finding and clicking the Drops button ---
  // Add a cooldown check before attempting to find and click the Drops button.
  if (currentTime - lastDropClaimTime < dropClaimCooldown) {
      // console.log("Drops claim is on cooldown. Skipping."); // Log less frequently
      // Continue to check for Channel Points even if Drops are on cooldown
  } else {
      // Updated XPath selector for the Drops button to support multiple languages.
      // It looks for a button that contains an element with data-a-target='tw-core-button-label-text'
      // and checks if that element's text content matches common claim phrases in different languages.
      const dropClaimButton = document.evaluate(
        "//button[.//div[@data-a-target='tw-core-button-label-text' and (text()='Claim Now' or text()='立即領取' or text()='现在领取' or text()='Jetzt abholen' or text()='Reclamar ahora' or text()='En profiter' or text()='Riscuoti subito' or text()='今すぐ入手' or text()='지금 받기' or text()='Nhận ngay' or text()='Şimdi Al' or text()='Vyzvednout kořist' or text()='Διεκδίκηση τώρα' or text()='Kiváltás most!' or text()='Получить сейчас' or text()='เคลมตอนนี้' or text()='Claim nu' or text()='Hent nå' or text()='Odbierz teraz' or text()='Resgatar agora' or text()='Vyzdvihnúť teraz' or text()='Solicită acum' or text()='Lunasta nyt' or text()='Hämta nu')]]",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;

      if (dropClaimButton) {
        console.log("Found Drops claim button (multi-language). Element details:", { // More detailed logging
            tagName: dropClaimButton.tagName,
            className: dropClaimButton.className,
            ariaLabel: dropClaimButton.getAttribute('aria-label'),
            textContent: dropClaimButton.textContent.trim(),
            dataTestSelector: dropClaimButton.getAttribute('data-test-selector')
        });
        console.log("Attempting to click Drops claim button...");
        dropClaimButton.click();
        console.log("Drops claim button clicked.");
        // Update the last claim time after a successful click
        lastDropClaimTime = currentTime;
      } else {
        // console.log("Drops claim button not found."); // Log less frequently
      }
  }


  // --- Logic for finding and clicking the Channel Points "Claim Bonus" button ---
  // Add a cooldown check before attempting to find and click the points button.
  if (currentTime - lastPointsClaimTime < pointsClaimCooldown) {
      // console.log("Channel Points claim is on cooldown. Skipping."); // Log less frequently
      // return; // Exit the function if cooldown is active - removed return to allow Drops check always
  } else { // Only attempt to find/click if not on cooldown
      // XPath selector for Channel Points "Claim Bonus" button using aria-label.
      // This selector relies on the aria-label which is often language-independent.
      const pointsClaimButton = document.evaluate(
          "//button[@aria-label='Claim Bonus']",
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
      ).singleNodeValue;


      if (pointsClaimButton) {
          // Add an extra check to ensure it's visible and interactable if needed, though click() usually handles this.
          // if (pointsClaimButton.offsetParent !== null) { // Check if element is visible
              console.log("Found Channel Points 'Claim Bonus' button. Element details:", { // More detailed logging
                  tagName: pointsClaimButton.tagName,
                  className: pointsClaimButton.className,
                  ariaLabel: pointsClaimButton.getAttribute('aria-label'),
                  textContent: pointsClaimButton.textContent.trim(),
                  dataTestSelector: pointsClaimButton.getAttribute('data-test-selector')
              });
              console.log("Attempting to click Channel Points 'Claim Bonus' button...");
              pointsClaimButton.click();
              console.log("Channel Points 'Claim Bonus' button clicked.");
              // Update the last claim time after a successful click
              lastPointsClaimTime = currentTime;
          // } else {
          //     console.log("Found Channel Points 'Claim Bonus' button, but it's not visible.");
          // }
      } else {
          // console.log("Channel Points 'Claim Bonus' button not found."); // Log less frequently
      }
  }
}

// Use MutationObserver to watch for changes in the DOM
// This is more efficient than repeatedly checking with setInterval.
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // Check if new nodes were added that might contain the buttons
    if (mutation.addedNodes.length > 0) {
      // console.log("DOM changes detected, checking for buttons..."); // Optional log for observer
      claimRewards(); // Check for the buttons whenever nodes are added
    }
  });
});

// Start observing the document body for changes, including subtree modifications
observer.observe(document.body, {
  childList: true, // Observe direct children
  subtree: true // Observe all descendants
});

// Also run claimRewards initially in case the buttons are already present on page load
console.log("Initial check for claim buttons on page load...");
claimRewards();

// Optional: Add a fallback interval check, though MutationObserver is preferred
// setInterval(claimRewards, 5000); // Check every 5 seconds (adjust as needed)
