const minutes = document.querySelector('#min');
const secs = document.querySelector('#sec');
const buttonPlayPause = document.querySelector('#playOrPause');
const barProgress = document.querySelector('#barProgress');
let progress = 0;
let play = true;
let firstAnimation = true;
let secondsTotal;
let varianteBar;

const configTimer = () => {
  minutes.innerHTML = timeWork;
  secs.innerHTML = '00';
}

const timer = () => {

  const timerPlay = setInterval(() => {

    if (play === false) {
      clearInterval(timerPlay);
      play = true;
      buttonPlayPause.onclick = timer;
    }

    if (progress <= 0) {
      clearInterval(timerPlay);
    } else if (seconds === 0) {
      seconds = 60;
    }

    seconds -= 1;

    if (seconds === 59) {
      timeWork -= 1;
      minutes.innerHTML = timeWork;
    }

    if (seconds < 10) {
      secs.innerHTML = `0${seconds}`;
    } else {
      secs.innerHTML = seconds;
    }

  }, 1000);

}

function calculateVariantes() {
  secondsTotal = timeWork * 60;
  varianteBar = 1380 / secondsTotal;
}

function animationBar() {
  const animation = setInterval(() => {
    if (play === false || progress <= 0) {
      clearInterval(animation);
    }

    progress -= varianteBar;
    barProgress.style.strokeDashoffset = progress;

  }, 1000);
}

function firstAnimationBar() {
  /* 0 = 100% | 1380 = 0% */
  buttonPlayPause.firstElementChild.className = 'fas fa-pause';
  const animationFirst = setInterval(() => {
    progress += 10;
    barProgress.style.strokeDashoffset = progress;

    if (progress >= 1380) {
      clearInterval(animationFirst);
      animationBar();
      timer();
      buttonPlayPause.onclick = () => {
        play = false;
        buttonPlayPause.firstElementChild.className = 'fas fa-play';
      }
    }

  }, 0.5);
}

window.onload = () => {
  configTimer();
  calculateVariantes();
}
