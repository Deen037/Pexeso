export let stopwatch = document.getElementById("time");

let milisecodns = 0;
let seconds = 0;
let minutes = 0;
let timer;

function runTime() {
  milisecodns++;

  if (milisecodns === 10) {
    milisecodns = 0;
    seconds++;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

export function stopwatchStart() {
  timer = setInterval(() => {
    runTime();
    stopwatch.textContent =
      pad(minutes) + ":" + pad(seconds) + ":" + milisecodns;
  }, 100);
}

export function stopwatchStop() {
  clearInterval(timer);
  milisecodns = 0;
  seconds = 0;
  minutes = 0;
}
