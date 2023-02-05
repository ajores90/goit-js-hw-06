const input = document.querySelector("#validation-input");
const length = Number(input.dataset.length);

input.addEventListener("blur", onInputChange);

function onInputChange(event) {
  input.classList.remove("valid", "invalid");

  if (input.value.length === length) {
    input.classList.add("valid");
    return;
  }
  input.classList.add("invalid");
}
