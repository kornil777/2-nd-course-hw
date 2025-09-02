// Задание 1

let Firsttask = (a, b) => {
  return a <= b ? a : b;
};
console.log(Firsttask(4, 5));
console.log(Firsttask(6, 6));

// Задание 2

let SecondTask = (n) => {
  return n % 2 === 0
    ? console.log(`Число четное`)
    : console.log(`Число нечетное`);
};
SecondTask(4);
SecondTask(5);

// Задание 3
let square = (x) => console.log(x * x);
square(5);

let squareResult = (x) => {
  let result = x * x;
  return result;
};
console.log(squareResult(4));

//Задание 4

function sayHello() {
  let userAge = prompt("Сколько тебе лет?");
  userAge = Number(userAge);
  if (isNaN(userAge) || userAge < 0) {
    alert("Вы ввели неправильное значение");
  } else if (userAge <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
}
sayHello();

// Задание 5

function calc(Number1, Number2) {
  if (isNaN(Number1) || isNaN(Number2)) {
    return "Одно или оба значения не являются числом";
  } else {
    return Number1 * Number2;
  }
}
console.log(calc(7, 5));

// задание 6

function cube() {
  let cubeNumber = prompt(`Введите число`);
  if (isNaN(cubeNumber)) {
    return "Переданный параметр не является числом";
  } else {
    return `${cubeNumber} в кубе равняется ${cubeNumber ** 3}`;
  }
}
console.log(cube());

// //задание 7

let circle1 = {
  radius: 0,

  getArea: function () {
    return Math.PI * this.radius * this.radius;
  },

  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  },
};

let circle2 = {
  radius: 0,

  getArea: function () {
    return Math.PI * this.radius * this.radius;
  },

  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  },
};
circle1.radius = 3;
circle2.radius = 6;
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
