// Задание 1
const btnRemoveEl = document.querySelector(".btn-remove");
btnRemoveEl.addEventListener("click", function (e) {
  const text1El = document.querySelector(".text1");
  text1El.remove();
});

// Задание 2
const changeColorBtnEl = document.querySelector(".changeColorBtn");
changeColorBtnEl.addEventListener("click", function (e) {
  const text2El = document.querySelector(".text2");
  text2El.style.color = "blue";
});


// Задание 3
const changeTextBtnEl = document.querySelector(".changeTextBtn");
changeTextBtnEl.addEventListener("click", function (e) {
  const header3El = document.querySelector(".header3");
  header3El.textContent = "Привет Мир!";
});

// Задание 4
const descriptionEl = document.querySelectorAll(".description");
descriptionEl.forEach((Element) => (Element.textContent = "Измененный текст"));

// Задание 5

const descriptionParagraphs = document.querySelectorAll(".description-OK");
descriptionParagraphs.forEach((paragraph) => {
  paragraph.textContent = "Новый текст";
});

// Задание 6
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
  const newParagraph = document.createElement("p");

  newParagraph.textContent = "Новый абзац";

  newParagraph.className = "Newparagraph";

  document.body.appendChild(newParagraph);
});

const removeButton = document.getElementById("removeButton");

removeButton.addEventListener("click", function (e) {
  const firstDescription = document.querySelector("p.description-YES");
  firstDescription.remove();
});
