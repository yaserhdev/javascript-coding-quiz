// Declare all variables
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-quiz");
var questionContainer = document.getElementById("question-container");
var question = document.getElementById("question");

var questions = [];

// Function for countdown timer
function countdown() {
    var timeLeft = 74;
    const timeInterval = setInterval(function() {
        if(timeLeft > 0) {
            timerEl.textContent = ("Time: " + timeLeft);
        } else {
            clearInterval(timeInterval);
            timerEl.textContent = "Time's up!";
        }
        timeLeft--;
    }, 1000);
}

// Function to start quiz


// Function to display questions


// Function to get next question


// Function to check answer


// Function to save score


// Event listeners for buttons
startButton.addEventListener("click", countdown);