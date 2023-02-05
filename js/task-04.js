const totalValue = document.querySelector("#value");

let counterValue = 0;

const Decrement = document.querySelector('button[data-action="decrement"]');

const Increment = document.querySelector('button[data-action="increment"]');

Decrement.addEventListener("click", onBtnDecrement);

Increment.addEventListener("click", onBtnIncrement);

function onBtnDecrement() {
  counterValue -= 1;
  totalValue.textContent = counterValue;
}

function onBtnIncrement() {
  counterValue += 1;
  totalValue.textContent = counterValue;
}
