// // // Задание №1
let password = "пароль";
let answer = prompt("Введите пароль");
if (answer === password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}

// // // Задача№2
let c = 5;
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
// // Задача №3
let e = 50;
let d = 101;
if (e > 100 || d > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// // задача №4
let a = "2";
let b = "3";
alert(+a + +b);

// Задача №5
let monthNumber = Number(prompt("введите номер месяца"));

switch (monthNumber) {
  case 1: case 2: case 12:
    alert("Зима");
    break;
  case 3: case 4: case 5:
    alert("Весна");
    break;
  case 6: case 7: case 8:
    alert("Лето");
    break;
  case 9: case 10: case 11:
    alert("Осень");
    break;

  default:
    alert("не верно введено число месяца");
    if (0<monthNumber<=13){alert("Число месяца должно быть от 1 до 13")};
}

