const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listWithId = document.querySelector('ul#ingredients');
console.log(listWithId);

// // Old school

// const ingredientsArray = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//     const ingredient = ingredients[i];

//     const ingredEl = document.createElement('li');
//     ingredEl.classList.add('item');
//     ingredEl.textContent = ingredient;
//     console.log(ingredEl);

//     ingredientsArray.push(ingredEl);
// }

// console.log(ingredientsArray);
// console.log(...ingredientsArray);

// listWithId.append(...ingredientsArray);

//  New school через  Map():

const element = ingredients.map(ingredient => {
  const ingredEl = document.createElement('li');
    ingredEl.classList.add('item');
    ingredEl.textContent = ingredient;
    console.log(ingredEl);
    return ingredEl;
});

console.log(element);
listWithId.append(...element);



