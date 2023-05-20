const ulId = document.querySelector('#categories');
console.log(`Number of categorie: ${ulId.children.length}`);

const itemEl = document.querySelectorAll('.item');
itemEl.forEach(item => {
  let itemH2 = item.querySelector('h2').textContent;
  let itemLi = item.querySelectorAll('li').length;
  console.log(`Category: ${itemH2}`);
  console.log(`Elements: ${itemLi}`);
});

/*----------Ще варіант --*/
// const items = document.querySelectorAll("#categories .item");
// console.log(`Number of categories: ${items.length}`);
// items.forEach((item) => {
//   console.log(`Category: ${item.querySelector("h2").textContent}`);
//   console.log(`Elements: ${item.querySelectorAll("li").length}`);
// });

/*------------Інші варіанти ----*/

// for (const itemCh of itemEl) {
//   let h2Te = itemCh.querySelector('h2').textContent;
//   let calLi = itemCh.querySelector('ul').children.length;
//   console.log(`Category: ${h2Te}`);
//   console.log(`Elements: ${calLi}`);
// }

// const ulCategories = document.querySelectorAll('.item');
// let cal = 0;
// ulCategories.forEach(ul => {
//   cal += 1;
// });
// console.log(`Number of categorie: ${cal}`);

// let title = ulEl.children[1];
// console.log(title);

// const ulElEl = document.querySelectorAll('#categories > li');
// console.log(ulElEl);

// const h2El = document.querySelectorAll('.item > h2');
// console.log(h2El);

// for (const el of h2El) {
//   let h2Text = el.textContent;
//   console.log(`Category: ${h2Text}`);
// }
