const inputCont = document.querySelector("#font-size-control");
const spanText =  document.querySelector("#text");
inputCont.addEventListener("input", valid)
spanText.style.fontSize = `56px`
function valid(e) {
   spanText.style.fontSize = `${e.target.value}px`
}