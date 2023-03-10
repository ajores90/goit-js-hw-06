const buttonColor = document.querySelector(".change-color");

const textEl = document.querySelector(".color");

const bodyEl = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonColor.addEventListener("click", onButtonChange);

function onButtonChange(event) {
  const ColorEl = getRandomHexColor();

  bodyEl.style.backgroundColor = ColorEl;
  textEl.textContent = ColorEl;
}
