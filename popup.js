// Step 1: Get references to the DOM elements
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let isRunning = false;

// Step 2: Function to update the timer display
function updateTimer(timeLeft) {
    // Your code here
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  
  // Step 3: Request the current timer state from the background script
  chrome.runtime.sendMessage({ action: 'getTime' }, (response) => {
    // Your code here
    console.log("Recieved time from Background:", response);
    updateTimer(response.timeLeft);
    isRunning = response.isRunning;
    startButton.textContent = isRunning ? 'Pause' : 'Start';
  });
  
  // Step 4: Add event listeners to the buttons
  startButton.addEventListener('click', () => {
    // Your code here
    console.log("Start/Pause Button clicked");
    if (isRunning) {
      chrome.runtime.sendMessage({action: 'pause'});
      startButton.textContent = 'Start';
    } else {
      chrome.runtime.sendMessage({action: 'start'});
      startButton.textContent = 'Pause';
    }
    isRunning = !isRunning;
  });
  
  resetButton.addEventListener('click', () => {
   // Your code here
    console.log("Reset Button clicked");
    chrome.runtime.sendMessage({action: 'reset'});
    isRunning = false;
    startButton.textContent = 'Start';
    updateTimer(25*60);
  });
  
  // Step 5: Listen for timer updates from the background script
  chrome.runtime.onMessage.addListener((request) => {
    if (request.timeLeft !== undefined) {
      // Your code here
      console.log("Recieved timer update from background.js:", request.timeLeft);
      updateTimer(request.timeLeft);
    } else if (request.isRunning !== undefined) {
      // Your code here
        console.log("Recieved isRunning update from background.js:", request.isRunning);
        isRunning = request.isRunning;
        startButton.textContent = isRunning ? 'Pause' : 'Start';
    }
  });