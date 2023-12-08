var timerEl = document.getElementById("timer");

function countdown() {
    var timeLeft = 120;
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

countdown();