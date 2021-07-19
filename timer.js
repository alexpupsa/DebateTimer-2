let currentSeconds = 0;
let secondsGreen = 60;
let secondsYellow = 90;
let secondsRed = 120;
let x;
let buttonText = "Start";
let started = false;

window.onload = function () {
    setTime();
}

function onButtonAction() {
    let buttonText = "Start";
    if (!started) {
        buttonText = "Stop";
    }
    document.getElementById("start-button").innerText = buttonText;

    if (!started) {
        started = true;
        start();
    } else {
        started = false;
        stop();
    }
}

function start() {

    setTime();
    currentSeconds++;

    x = setInterval(function () {

        let timeDiv = document.getElementById("time");

        if (currentSeconds >= secondsRed) {
            document.body.style.backgroundColor = "red";
            timeDiv.style.color = "white";
        } else if (currentSeconds >= secondsYellow) {
            document.body.style.backgroundColor = "orange";
            timeDiv.style.color = "white";
        } else if (currentSeconds >= secondsGreen) {
            document.body.style.backgroundColor = "green";
            timeDiv.style.color = "white";
        }

        setTime();
        currentSeconds++;

    }, 1000);
}

function stop() {
    clearInterval(x);
    currentSeconds = 0;
    document.body.style.backgroundColor = "white";
    let timeDiv = document.getElementById("time");
    timeDiv.style.color = "grey";
    setTime();
}

function setTime() {
    let minutes = Math.floor(currentSeconds / 60);
    let seconds = currentSeconds - (minutes * 60);
    let time = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    document.getElementById("time").innerHTML = time;
}