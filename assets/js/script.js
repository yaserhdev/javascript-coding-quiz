// Declare all variables
var timerEl = document.getElementById("timer");
var timeLeft = 75;
var startContainer = document.getElementById("start-container");
var startButton = document.getElementById("start-quiz");
var questionContainer = document.getElementById("question-container");
var question = document.getElementById("question");
var answerChoices = document.getElementById("answer-choices");
var answerResult = document.getElementById("answer-result");
var scoreContainer = document.getElementById("score-container");
var score = document.getElementById("current-score");
var submitButton = document.getElementById("submit-button");
var highScores = document.getElementById("highscore-list");
var clearButton = document.getElementById("clear-button");

// Store all questions in a single variable in array format
var questions = [
    {
        question: "Question?",
        choices: [ "A",
                   "B",
                   "C",
                   "D"
        ],
        answer: 1
    },
    {
        question: "Question?",
        choices: [ "A",
                   "B",
                   "C",
                   "D"
        ],
        answer: 1
    },
    {
        question: "Question?",
        choices: [ "A",
                   "B",
                   "C",
                   "D"
        ],
        answer: 1
    },
    {
        question: "Question?",
        choices: [ "A",
                   "B",
                   "C",
                   "D"
        ],
        answer: 1
    },
    {
        question: "Question?",
        choices: [ "A",
                   "B",
                   "C",
                   "D"
        ],
        answer: 1
    },
];

// Function for countdown timer
function countdown() {
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
function displayQuestion() {

}


// Function to get next question
function getNextQuestion() {
    
}

// Function to check answer
function checkAnswer() {

}


// Function to save score
function saveScore() {

}


// Event listeners for buttons
startButton.addEventListener("click", function() {
    countdown();
    startContainer.style.display = "none";
    questionContainer.classList.remove("hide");
});