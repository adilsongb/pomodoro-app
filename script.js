let timeWork = 25;
let timePause = 5;
let sessions = 3;
let seconds = 60;

const addNumberTime = (inputs) => {
  const buttonsAdd = document.querySelectorAll('.add');

  buttonsAdd[0].addEventListener('click', () => {

    timeWork = parseInt(inputs[0].value);
    timeWork += 1;
    inputs[0].value = timeWork;

  })

  buttonsAdd[1].addEventListener('click', () => {

    timePause = parseInt(inputs[1].value);
    timePause += 1;
    inputs[1].value = timePause;

  })

  buttonsAdd[2].addEventListener('click', () => {

    sessions = parseInt(inputs[2].value);
    sessions += 1;

    inputs[2].value = sessions;

  })
};

const subNumberTime = (inputs) => {
  const buttonsSub = document.querySelectorAll('.sub');

  buttonsSub[0].addEventListener('click', () => {

    timeWork = parseInt(inputs[0].value);
    timeWork -= 1;
    inputs[0].value = timeWork;

  })

  buttonsSub[1].addEventListener('click', () => {

    timePause = parseInt(inputs[1].value);
    timePause -= 1;
    inputs[1].value = timePause;

  })

  buttonsSub[2].addEventListener('click', () => {

    sessions = parseInt(inputs[2].value);
    sessions -= 1;

    inputs[2].value = sessions;

  })
};

const configTimer = () => {
  const minutes = document.querySelector('#min');
  const secs = document.querySelector('#sec');

  minutes.innerHTML = timeWork;
  secs.innerHTML = '00';
}

const timer = () => {
  const minutes = document.querySelector('#min');
  const secs = document.querySelector('#sec');

  const timerPlay = setInterval(() => {
    seconds -= 1;

    if (seconds === 59) {
      timeWork -= 1;
      minutes.innerHTML = timeWork;
    }

    if (seconds === 0) {
      seconds = 60;
    }

    if (seconds < 10) {
      secs.innerHTML = `0${seconds}`;
    } else {
      secs.innerHTML = seconds;
    }

  }, 1000);

}
