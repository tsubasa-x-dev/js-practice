let time = 0;

let timer = null;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click",() => {
    if(timer !== null) {
        return;
    }

    timer =setInterval(function() {
        time++;

        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        let hours = Math.floor(time / 3600);

        seconds = String(seconds).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        hours = String(hours).padStart(2,"0");

        display.textContent = hours + ":" + minutes + ":" + seconds;
    }, 1000);
});

stopButton.addEventListener("click",() => {
    clearInterval(timer);
    timer = null;
});

resetButton.addEventListener("click", () => {

  clearInterval(timer);
  timer = null;
  time = 0;
  display.textContent = "00:00:00";
});