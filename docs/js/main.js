const fadeInElements = document.querySelectorAll('.before-fade-in-upwards');
const addInput = document.querySelector('#add-wrapper > input');
const addNumber = document.querySelector('#add-wrapper > input:nth-child(2)');
const addButton = document.querySelector('#add-wrapper > button');
const execButton = document.querySelector('#exec-button');
const optionWrapper = document.querySelector('#option-wrapper');
const winnerWindow = document.querySelector('#winner-window');
const winnerDisplay = document.querySelector('#winner-window > h1');
const closeWinnerWindowButton = document.querySelector('#winner-window > button');

fadeInUpwards = (target) => {
  target.classList.remove('hide');
  target.classList.add('after-fade-in-upwards');
  setTimeout(() => {
    target.classList.remove('before-fade-in-upwards', 'after-fade-in-upwards');
  }, 1500)
}

addOption = () => {
  if (addInput.value) {
    let number = addNumber.value;
    if (number == '') number = 1;
    for (let i = 0; i < number; i++) {
      const optionDiv = document.createElement('div');
      optionDiv.classList.add('options');
      optionDiv.innerText = addInput.value;
      optionDiv.addEventListener('click', () => {
        optionDiv.remove();
      })
      optionWrapper.append(optionDiv);
    }
    addInput.value = '';
    addNumber.value = '';
    addInput.focus();
  } else {
    alert('You need to enter some value in the field first.');
  }
}

executeLottery = () => {
  const options = document.querySelectorAll('.options');
  if (options.length >= 2) {
    let rand = Math.random();
    let key = Math.floor(rand * options.length);
    let winner = options[key].innerText;
    winnerDisplay.innerText = '　';
    winnerWindow.classList.remove('hide');
    setTimeout(()=>{
      winnerDisplay.innerText = winner;
    }, 1500);
  } else {
    alert('You need at least two options to do the lottery.');
  }
}

eventListenerReady = () => {
  addButton.addEventListener('click', addOption);
  setTimeout(()=>{
    addInput.focus();
  }, 2000)
  execButton.addEventListener('click', executeLottery);
  closeWinnerWindowButton.addEventListener('click', () => {
    winnerWindow.classList.add('hide');
  })
}

onload = () => {
  setTimeout(() => {
    fadeInElements.forEach((e) => {
      fadeInUpwards(e);
    })
  }, 1500);
  eventListenerReady();
}

shortcut.add('enter', () => {
  if (document.activeElement == addInput || document.activeElement == addNumber) {
    console.log('Enter key pressed.')
    addOption();
  }
});

shortcut.add('meta+enter', ()=>{
    executeLottery();
})