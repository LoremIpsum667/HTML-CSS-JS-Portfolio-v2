function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

let code = '';
const errorSound = new Audio('./assets/sounds/error.mp3');
const etoileSound = new Audio('./assets/sounds/etoile.mp3');

document.addEventListener('keydown', e => {
  code = code + e.key;
  console.log(code);
  if (code.length === 5 && code === 'siant') {
    etoileSound.play();
    const inter = setInterval(() => {
      document.querySelector('body').style = `
        --primary: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
        --primary-light: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
        --primary-dark: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
        --secondary: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
        --secondary-light: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
        --secondary-dark: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
        --text-light: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
        --text-dark: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
      `;
    }, 100);
    setTimeout(() => {
      document.querySelector('body').style = `
        --primary: #37474f;
        --primary-light: #62727b;
        --primary-dark: #102027;
        --secondary: #1675d1;
        --secondary-light: #62a3ff;
        --secondary-dark: #004a9f;
        --text-light: #fff;
        --text-dark: #000;
        --test-1: #9b59b6;
        --test-2: #8e44ad;
      `;
      clearInterval(inter)
    }, 17000);

    code = '';
  } else if (code.length === 5 && code !== 'siant') {
    errorSound.play();
    code = '';
  }
})

document.addEventListener('mousemove', e => {
  const mouseX = e.pageX / 30;
  const mouseY = e.pageY / 30;
  document.querySelector('header').style = `
    background-position: left ${mouseX - 100}px top ${mouseY - 100}px;
  `;
})

document.getElementById('btn-hack').addEventListener('click', e => {
  document.body.style = 'animation-play-state: running;'
  setTimeout(e => {document.body.style = 'display: none;'}, 500);
  setInterval(() => {
    const circle = document.createElement('div');
    document.body.style = `
    width
    `;
    circle.style = `
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top:${rand(0, 1000)};
    left:${rand(0, 1000)};`
    document.querySelector('html').append(circle);
  }, 1000)
})