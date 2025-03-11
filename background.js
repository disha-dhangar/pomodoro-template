// Step 1: Define variables for the timer
// - timeLeft: Set it to 25 minutes in seconds (25 * 60)
// - isRunning: A boolean to track if the timer is running
// - timer: A variable to store the setInterval ID
// Your code here

// Step 2: Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'start') {
      // Your code here
    } else if (request.action === 'pause') {
      // Your code here
    } else if (request.action === 'reset') {
      // Your code here
    } else if (request.action === 'getTime') {
      // Your code here
    }
    return true; // Required for async sendResponse
  });
  
  // Step 3: Function to start the timer
  function startTimer() {
    if (!isRunning) {
      // Your code here
      timer = setInterval(() => {
        timeLeft--;
    
        if (timeLeft === 0) {
          // Your code here
        }
      }, 1000);
    }
  }
  
  // Step 4: Function to pause the timer
  function pauseTimer() {
    if (isRunning) {
      // Your code here
    }
  }
  
  // Step 5: Function to reset the timer
  function resetTimer() {
    // Your code here
  }
  
  // Step 6: Function to show a notification
  function showNotification() {
    // Your code here
  }