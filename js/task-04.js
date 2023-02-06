const totalValue = document.querySelector("#value");

let counterValue = 0;

const subEl = document.querySelector('button[data-action="decrement"]');

const addEl = document.querySelector('button[data-action="increment"]');

subEl.addEventListener("click", onBtnDecrement);

addEl.addEventListener("click", onBtnIncrement);

function onBtnDecrement() {
  counterValue -= 1;
  totalValue.textContent = counterValue;
}

function onBtnIncrement() {
  counterValue += 1;
  totalValue.textContent = counterValue;
}
