const fadeInElements = document.querySelectorAll('.before-fade-in-upwards');
console.log(fadeInElements);

fadeInUpwards = (target) => {
  target.classList.remove('hide');
  target.classList.add('after-fade-in-upwards');
  setTimeout(() => {
    target.classList.remove('before-fade-in-upwards', 'after-fade-in-upwards');
  }, 1500)
}

onload = setTimeout(() => {
  fadeInElements.forEach((e) => {
    console.log(e);
    fadeInUpwards(e);
  })
}, 1500);