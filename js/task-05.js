const enterName = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
enterName.addEventListener("input", output);
function output(e) {
   
    if (enterName.value !== "") {
        userName.textContent = enterName.value
    }
    else { userName.textContent = `Anonymous` }
}
