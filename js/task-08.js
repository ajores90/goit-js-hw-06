const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  console.log(formData);

  event.currentTarget.reset();
}
