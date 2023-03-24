function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const changeColorEl = document.querySelector('.change-color');

const onChangeColor = event => {
  colorEl.textContent = bodyEl.style.backgroundColor = getRandomHexColor() 
}

changeColorEl.addEventListener('click', onChangeColor);
