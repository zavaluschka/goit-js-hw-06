const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
// const ulEl = document.querySelector("#ingredients") 
// ingredients.forEach(function (item){
//   const liEl = document.createElement("li");
//   liEl.textContent = item;
  
// })
//   ulEl.appendChild(liEl);
// document.body.appendChild(ulEl)

const ulEl = document.createElement("ul");
const listItems = ingredients.map(function (item) {
const liEl = document.createElement("li");
liEl.textContent = item;
return liEl;
});

ulEl.append(...listItems); 
document.body.appendChild(ulEl)