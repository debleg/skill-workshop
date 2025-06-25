// Get the create timer button
const timerCreateButton = document.getElementById("create-timer");

//add a cap to the number of timers that can be created? With a countdown somewhere like 'you can add X more timers'

// Put an event listener on the create button
timerCreateButton.addEventListener("click", checkTimerDuration);
// Get the timer container div
const timerContainer = document.getElementById("timer-container");
// On create button click, create a timer in the container div

// Timer is made up of:
// a div that contains
// a button for play/pause
// a stop/reset button, inactive on creation
// numbers for countdown
function checkTimerDuration () {
  const timerDuration = document.getElementById("timer-duration").value;
  if (timerDuration > 0) {
    createTimer(timerDuration)
  } else {
    const timerDurationSetter = document.getElementById("timer-duration")
    timerDurationSetter.value = 0;
  }
}

function createTimer(timerDuration) {
  const myNewTimer = document.createElement("div");
  const actionButton = document.createElement("button");
  actionButton.innerText = "Play";
  actionButton.addEventListener("click", playTimer);
  const resetButton = document.createElement("button");
  resetButton.innerText = "Reset";
  resetButton.addEventListener("click", resetTimer);
  resetButton.disabled = true;

  //this needs to be the time set/entered by the user, the play happens later
  const timeElapsing = document.createElement("span");
  timeElapsing.innerText = `${timerDuration}:00`; //there's a way to make it two digits with padStart, but since I might get in the 3 digit minutes/need hours later, sticking with the basics here

  myNewTimer.appendChild(actionButton);
  myNewTimer.appendChild(resetButton);
  myNewTimer.appendChild(timeElapsing);
  timerContainer.appendChild(myNewTimer);

  // When done, create button is greyed out, until multiple buttons are set up

  // Each button needs an event listener

  // the play button turns to pause when started, back to play when paused, then to done when timer runs out (text content)
  // the play button starts and pauses the timer
  // the play button activates the reset button
  // when timer runs out, the play button (then done button) is inactive
  function playTimer() {
    resetButton.disabled = false;
    console.log("play");
    //needs switch statement (how??) for play/pause/resume/over
  }

  // the reset button turns play button back to play, countdown back to initial value, and self to inactive
  function resetTimer() {
    console.log("reset");
    resetButton.disabled = true;
    timeElapsing.innerText = "00:00"
  }
}

// Timer logic
// Start with hardcoded time (5 minutes = 300s = 300.000ms)
// Turns red when reaches 0

//Functions needed: createTimer, launchTimer (playTimer?), pauseTimer, resumeTimer(?), resetTimer

// Added complexity for later:
// Let user set length ==> Done
// Multiple timers (need some form of ids so controls work properly/target only their own timer)
// Reverse timer (count up)
