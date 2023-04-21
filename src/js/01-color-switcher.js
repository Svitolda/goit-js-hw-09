function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]'); 
const body = document.querySelector('body');
let intervalId = null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);
stopBtn.disabled = true; 

function onStartBtn() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startBtn.setAttribute('disabled', 'true');
    stopBtn.removeAttribute('disabled')
  }, 1000);
} 

function onStopBtn() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled'); 
  stopBtn.disabled = true;
}

// function changeBackgroundColor() {
//         const color = getRandomHexColor();
//         document.body.style.backgroundColor = color;
// }

