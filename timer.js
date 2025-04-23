const input = document.getElementById("secondsInput");
const startButton = document.getElementById("startButton");
const counterDisplay = document.getElementById("counter");

let timerInterval;
let activityTimeout;

// Timer functionality
startButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  const seconds = parseInt(input.value);
  if (isNaN(seconds) || seconds < 1) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  let current = 0;
  counterDisplay.textContent = current;

  timerInterval = setInterval(() => {
    current++;
    counterDisplay.textContent = current;

    if (current >= seconds) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

// User inactivity 
function resetInactivityTimer() {
  clearTimeout(activityTimeout);
  activityTimeout = setTimeout(() => {
    alert("Timeout is reached");
  }, 10000); // 10 seconds
}

// Reset inactivity timer
["click", "mousemove", "keydown", "scroll", "touchstart"].forEach(event => {
  document.addEventListener(event, resetInactivityTimer);
});

// Initialize timer
resetInactivityTimer();
