function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyId = document.querySelector("body");
const backgroundColorBodyShow = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {

  bodyId.style.background = `${getRandomHexColor()}`;
  backgroundColorBodyShow.textContent = `${getRandomHexColor()}`
});