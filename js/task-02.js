const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
/*--------через функцію ---*/
const makeIngrfdients = parameters => {
  return parameters.map(ingrad => {
    const liEl = document.createElement('li');
    liEl.textContent = ingrad;
    liEl.classList.add('item');
    return liEl;
  });
};
const ingradientsElem = makeIngrfdients(ingredients);
const ulId = document.querySelector('#ingredients');
ulId.append(...ingradientsElem);

/*--------через map() ---*/
// const ingradientsElem = ingredients.map(ingrad => {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingrad;
//   liEl.classList.add('item');
//   return liEl;
// });
// console.log(ingradientsElem);
// const ulId = document.querySelector('#ingredients');
// ulId.append(...ingradientsElem);

/*--------через for of ---*/
// const ingradientsElem = [];
// for (const ingrad of ingredients) {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingrad;
//   liEl.classList.add('item');
//   ingradientsElem.push(liEl);
// }
// console.log(ingradientsElem);
// const ulId = document.querySelector('#ingredients');
// ulId.append(...ingradientsElem);

/*--------для одного елемента ---*/
// const liEl = document.createElement('li');
// liEl.textContent = ingredients[1];
// liEl.classList.add('item');
// console.log(liEl);
// const ulId = document.querySelector('#ingredients');
// ulId.append(liEl);
// console.log(ulId);
