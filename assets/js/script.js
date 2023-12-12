// Declare all variables
var scoresLink = document.getElementById("scores");
var timeInterval = "";
var timerEl = document.getElementById("timer");
var timeLeft = 75;
var index = 0;
var startContainer = document.getElementById("start-container");
var startButton = document.getElementById("start-quiz");
var questionContainer = document.getElementById("question-container");
var question = document.getElementById("question");
var answerChoices = document.getElementById("answer-choices");
var answerResult = document.getElementById("answer-result");
var scoreContainer = document.getElementById("score-container");
var scoreForm = document.getElementById("score-form");
var score = document.getElementById("current-score");
var submitButton = document.getElementById("submit-button");
var highscoresContainer = document.getElementById("highscores-container");
var highScores = document.getElementById("highscore-list");
var backButton = document.getElementById("back-button");
var clearButton = document.getElementById("clear-button");

// Store all questions in a single variable in array format
var questions = [
    {
        question: "Which of the following JavaScript data types returns a value of 'true' or 'false'?",
        choices: [ "String",
                   "Boolean",
                   "Number",
                   "Null"
        ],
        answer: 1
    },
    {
        question: "What value does 'console.log(27 + 68)' return?",
        choices: [ "27 + 68",
                   "Undefined",
                   "95",
                   "Null"
        ],
        answer: 2
    },
    {
        question: "What does 'DOM' stand for?",
        choices: [ "Document Object Model",
                   "Data Oriented Model",
                   "Document Oriented Model",
                   "Date Object Model"
        ],
        answer: 0
    },
    {
        question: "Which of the following is NOT a logical operator?",
        choices: [ "&&",
                   "!",
                   "||",
                   "!="
        ],
        answer: 3
    },
    {
        question: "The terms 'function' and 'var' are known as what?",
        choices: [ "Keywords",
                   "Data",
                   "Declarations",
                   "Prototypes"
        ],
        answer: 2
    },
];

// Function for countdown timer
function countdown() {
    timeInterval = setInterval(function() {
        if(timeLeft > 0) {
            timerEl.textContent = ("Time: " + --timeLeft);
        } else {
            clearInterval(timeInterval);
            timerEl.textContent = "Time's up!";
            alert("You ran out of time, reload the page to try again!");
        }
    }, 1000);
}

// Function to display questions
function displayQuestion() {
    answerResult.textContent = "";
    question.textContent = questions[index].question;
    answerChoices.textContent = "";
    for (let i = 0; i < questions[index].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[index].choices[i];
        answerChoices.appendChild(button);
    }
    answerChoices.addEventListener("click", getNextQuestion);
}

// Function to get next question
function getNextQuestion(event) {
    var userChoice = event.target.textContent;
    if (index < questions.length) {
        checkAnswer(userChoice);
        if (index === questions.length - 1) {
            setTimeout(saveScore, 1000);
            clearInterval(timeInterval);
        } else {
            setTimeout(displayQuestion, 1000);
        }
    }
    index++;
}

// Function to check answer
function checkAnswer(userChoice) {
    var answerIndex = questions[index].answer;
    var choiceIndex = questions[index].choices.findIndex(function(choice) {
        return choice === userChoice;
    }) 
    if (answerIndex === choiceIndex) {
        answerResult.textContent = "Correct!";
    } else {
        answerResult.textContent = "Wrong!";
        timeLeft -= 10;
    }
}

// Function to save score
function saveScore() {
    questionContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");
    timerEl.textContent = ("Time: " + timeLeft);
    score.textContent = ("Your final score is: " + timeLeft);
    scoreForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var finalScore = timeLeft;
        var initials = document.getElementById("initials-input").value;
        var userData = {
            name: initials,
            score: finalScore
            }
        var userDataString = JSON.stringify(userData);
        localStorage.setItem("userInitials", userDataString);
        scoreContainer.classList.add("hide");
        highscoresContainer.classList.remove("hide");
    });
    loadScores();
}

// Function to load scores
function loadScores() {
    var storedScore = localStorage.getItem("userInitials");
    highScores.textContent = storedScore;
    localStorage.setItem("savedScore", storedScore);
}

// Event listeners
startButton.addEventListener("click", function() {
    countdown();
    startContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    displayQuestion();
});
scoresLink.addEventListener("click", function() {
    startContainer.classList.add("hide");
    highscoresContainer.classList.remove("hide");
    loadScores();
});
backButton.addEventListener("click", function() {
    highscoresContainer.classList.add("hide");
    startContainer.classList.remove("hide");
    window.location.reload();
});
clearButton.addEventListener("click", function() {
    localStorage.clear();
});