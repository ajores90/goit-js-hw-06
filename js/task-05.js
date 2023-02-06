const refs = {
  inputEl: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue === "") {
    refs.nameOutput.textContent = "Anonymous";
    return;
  }
  refs.nameOutput.textContent = inputValue;
}
