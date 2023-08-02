const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const ulEl = document.querySelector("#ingredients") 
ingredients.forEach(function (item){
  const liEl = document.createElement("li");
  liEl.textContent = item;
  ulEl.appendChild(liEl);
})
  
document.body.appendChild(ulEl)