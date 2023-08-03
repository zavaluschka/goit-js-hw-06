const dec = document.querySelector(`[ data-action = "decrement"]`);
const inc = document.querySelector(`[ data-action = "increment"]`);
const value = document.querySelector("#value");
let counterValue = 0;

function decrement(event) {
    counterValue -= 1;
    value.textContent = counterValue;
}

function increment(event) {
    counterValue += 1;
    value.textContent = counterValue;
}
dec.addEventListener("click", decrement);
inc.addEventListener("click", increment);