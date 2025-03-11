// Step 1: Get references to the DOM elements

// Step 2: Function to update the timer display
function updateTimer(timeLeft) {
    // Your code here
  }
  
  // Step 3: Request the current timer state from the background script
  chrome.runtime.sendMessage({ action: 'getTime' }, (response) => {
    // Your code here
  });
  
  // Step 4: Add event listeners to the buttons
  startButton.addEventListener('click', () => {
    // Your code here
  });
  
  resetButton.addEventListener('click', () => {
   // Your code here
  });
  
  // Step 5: Listen for timer updates from the background script
  chrome.runtime.onMessage.addListener((request) => {
    if (request.timeLeft !== undefined) {
      // Your code here
    }
  });