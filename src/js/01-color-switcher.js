const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]'); 

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

let intervalId = null;

startBtn.disabled = false; 

function onStartBtn() {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startBtn.disabled = true;
} 

function onStopBtn() {
  clearInterval(intervalId);
  startBtn.disabled = false; 
}

function changeBackgroundColor() {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}