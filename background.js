// Step 1: Define variables for the timer
// - timeLeft: Set it to 25 minutes in seconds (25 * 60)
// - isRunning: A boolean to track if the timer is running
// - timer: A variable to store the setInterval ID
// Your code here
let timeLeft = 25 * 60;
let isRunning = false;
let timer;

// Step 2: Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'start') {
      // Your code here
      startTimer();
    } else if (request.action === 'pause') {
      // Your code here
      pauseTimer();
    } else if (request.action === 'reset') {
      // Your code here
      resetTimer();
    } else if (request.action === 'getTime') {
      // Your code here
      sendResponse({timeLeft, isRunning});

    }
    return true; // Required for async sendResponse
  });
  
  // Step 3: Function to start the timer
  function startTimer() {
    if (!isRunning) {
      // Your code here
      isRunning = true;
      //chrome.runtime.sendMessage({timeLeft, isRunning});
      
      timer = setInterval(() => {
        timeLeft--;

        console.log("Time Left:", timeLeft);
        if (timeLeft === 0) {
          // Your code here
          clearInterval(timer);
          timeLeft = 0;
          showNotification();
          isRunning = false;
          resetTimer();
        }
        chrome.runtime.sendMessage({timeLeft, isRunning});
      }, 1000);
    }
  }
  
  // Step 4: Function to pause the timer
  function pauseTimer() {
    if (isRunning) {
      // Your code here
      clearInterval(timer);
      isRunning = false;
      chrome.runtime.sendMessage({timeLeft, isRunning});
    }
  }
  
  // Step 5: Function to reset the timer
  function resetTimer() {
    // Your code here
    timeLeft = 25 * 60;
    clearInterval(timer);
    isRunning = false;
    chrome.runtime.sendMessage({timeLeft, isRunning});
  }
  
  // Step 6: Function to show a notification
  function showNotification() {
    // Your code here
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: 'Pomodoro Timer',
      message: 'Time is up! You can take a break :D'
    });
  }