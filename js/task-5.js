const colorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const colorBackground = document.querySelector("body");

let _color;

const changeColorBtn = colorBtn.addEventListener("click", () => {
  _color = getRandomHexColor();
  colorBackground.style.backgroundColor = _color;
  colorSpan.textContent = _color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
