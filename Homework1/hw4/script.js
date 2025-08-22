// // Задача №1
let i = 0;
while (i < 2) {
  console.log("Привет");
  i++;
}

// Задача №2
let k = 1;
while (k <= 5) {
  console.log(k);
  k++;
}

// Задача №3
// let d = 7;
while (d <= 22) {
  console.log(d);
  d++;
}

// Задача №4
let obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};
for (let key in obj) {
  console.log(`${key} - зарплата ${obj[key]} долларов.`);
}

// Задача №5
let n = 1000;
let num = 0;
while (n >= 50) {
  n = n / 2;
  num++;
}
console.log("Результат:", n);
console.log("Количество итераций:", num);

// Задача №6
let firstFriday = 1;
for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Нужно подготовить отчет.`);
}
