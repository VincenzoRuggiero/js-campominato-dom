let gridElem = document.querySelector(".grid");
let buttonElem = document.querySelector(".btn");

let bombsArr = [];
let randomNum;

function createGrid() {
  for (i = 1; i <= 100; i++) {
    let squareElem = document.createElement("div");
    squareElem.classList.add("squareCSS");
    squareElem.innerHTML = i;
    gridElem.appendChild(squareElem);
  }

  return;
}

function createBombs() {
  while (bombsArr.length < 16) {
    let randomIndex = getRandomNumber(1, 101);
  }

  if (!bombsArr.includes(randomIndex)) {
    bombsArr.push(randomIndex);
  } else {
    randomIndex = getRandomNumber(1, 101);
  }
}

function getRandomNumber(min, max) {
  if (min === max) {
    return max;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

buttonElem.addEventListener("click", function () {
  gridElem.innerHTML = "";

  createGrid();
});
