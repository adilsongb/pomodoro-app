let timeWork = 1;
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
