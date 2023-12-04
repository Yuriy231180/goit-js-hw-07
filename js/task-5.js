
const colorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const colorBackground = document.querySelector('body');

const changeColorBtn = colorBtn.addEventListener('click', () => {
colorBackground.style.backgroundColor = getRandomHexColor();
colorSpan.textContent = getRandomHexColor();
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }