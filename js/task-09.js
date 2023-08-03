const colorName = document.querySelector(".color");
const colorChange = document.querySelector(".change-color");
colorChange.addEventListener("click", onclick)
function onclick(e) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor
}

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}







