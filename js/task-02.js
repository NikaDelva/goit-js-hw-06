const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientTemplate = ingredients.map((ingredient) => {
  const ingredientListItem = document.createElement('li');
  ingredientListItem.textContent = ingredient;
  ingredientListItem.classList.add('item');
  return ingredientListItem
})

ingredientsEl.append(...ingredientTemplate)