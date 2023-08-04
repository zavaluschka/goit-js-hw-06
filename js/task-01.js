const itemEl = document.querySelectorAll(`.item`);
console.log(`Number of categories:${itemEl.length}`)



const titleList = [] 
// itemEl.forEach(el => {
//   const titleEl = el.querySelector(`h2`).textContent;
//   const listEl = el.querySelectorAll(`li`).length;
//  titleList.push(`Category : ${titleEl} Elements :${listEl}` + '\n')


//    });
// console.log(titleList.join(""))
itemEl.forEach(el => {
  const titleEl = el.firstElementChild;
  const listEl = el.lastElementChild.querySelectorAll(`li`).length;
  titleList.push(`Category : ${titleEl.textContent} Elements :${listEl}` + '\n')
})

// ulEl.forEach(el => {
  
//   const listEl = el.child.length;
//  titleList.push(`Category : ${titleEl.textContent} Elements :${listEl}` + '\n')


//    });
console.log(titleList.join(""))

