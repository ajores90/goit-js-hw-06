const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingredientItems = ingredients.map((ingredient) => {
  const ingredientsList = document.createElement("li");
  ingredientsList.textContent = ingredient;
  ingredientsList.classList.add("item");

  return ingredientsList;
});

list.append(...ingredientItems);
