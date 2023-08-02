const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);
input.addEventListener("blur", valid)
function valid(e) {
    if (Number(e.currentTarget.value.length) === Number(inputLength)) {
        console.log(Number(e.currentTarget.value.length) === Number(inputLength))
        input.classList.remove("invalid")
        input.classList.add("valid")
    }
    else {
        input.classList.remove("valid")
        input.classList.add("invalid")
    }
}