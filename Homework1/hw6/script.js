// задание 1

const task1 = [1, 5, 4, 10, 0, 3];
for (const el of task1) {
  console.log(el);
  if (el === 10) break;
}

// Задание 2

const task2 = [1, 5, 4, 10, 0, 3];
const index = task2.indexOf(4);
console.log(index);

// Задача 3

const task3 = [1, 3, 5, 10, 20];
const result3 = task3.join(' ');
console.log(result3);

// задача №4

const result4 = [];
for (let i = 0; i < 3; i++) {
  const innerArray = [];
  for (let j = 0; j < 3; j++) {
    innerArray.push(1);
  }
  result4.push(innerArray);
}
console.log(result4);

// задача №5

const task5 = [1, 1, 1];
task5.push(2, 2, 2);
console.log(task5);

// задача №6
const task6 = [9, 8, 7, 'a', 6, 5];
const result6 = task6.sort().filter(item => item !== 'a');
console.log(result6);

// задача №7

const task7 = [9, 8, 7, 6, 5];
const userNumber = prompt("Угадайте число от 1 до 10:");
if (task7.includes(Number(userNumber))) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

// задача №8

const task8 = 'abcdef';
const reversTask8 = task8.split('').reverse().join('');
console.log(reversTask8);

// задача №9

const task9 = [[1, 2, 3], [4, 5, 6]];
const task9flat = task9.flat();
console.log(task9flat);

// задача №10

const numbers = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];

for (let i = 0; i < numbers.length; i++) {
    if (i + 1 < numbers.length) {
        const current = numbers[i];
        const next = numbers[i + 1];
        const sum = current + next;
        console.log(`Элемент ${i}: ${current} + ${next} = ${sum}`);
    } 
};

// задача №11

function Square(task11) {
  return task11.map(task11 => task11 * task11);
}
  // Проверка
  const check = [1, 2, 3, 4, 5];
  console.log(Square(check));


// задача №12 

function getWordLengths(words) {
    return words.map(word => word.length);
}
// проверка
const chek2 = ['hello', 'world'];
console.log(getWordLengths(chek2));


// Задача №13

function NegativeNumbers(numbers) {
    return numbers.filter(number => number < 0);
}

// Проверка
const chek3 = [1, -2, 3, -4, 5, -6];
console.log(NegativeNumbers(chek3));

// Задача №14

const originalTask14 = [];
for (let i = 0; i < 10; i++) {
    originalTask14.push(Math.floor(Math.random() * 11));
}

const evenNumbersTask14 = originalTask14.filter(number => number % 2 === 0);
console.log('Исходный массив:', originalTask14);
console.log('Массив с четными значениями:', evenNumbersTask14);

// Задача 15

const task15 = Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1);

const average = task15.reduce((sum, current) => sum + current, 0) / task15.length;

console.log('Массив:', task15);
console.log('Среднее арифметическое:', average);