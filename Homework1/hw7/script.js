// задание 1

const task1 = 'js';
console.log(task1.toUpperCase());

// Задание 2
function task2(array, prefix) {
    
    const lowerPrefix = prefix.toLowerCase();
    
   
    return array.filter(item => {
        
        return item.toLowerCase().startsWith(lowerPrefix);
    });
}

console.log(task2(['apple', 'banana', 'apricot', 'cherry'], 'ap')); 


console.log(task2(['JavaScript', 'java', 'Python', 'Ruby'], 'java')); 


console.log(task2(['Hello', 'world', 'test'], 'xyz')); 


console.log(task2(['Apple', 'apple', 'APPLE'], 'ap')); 

// Задание 3

const task3 = 32.58884;

const floorResult = Math.floor(task3);
console.log(`До меньшего целого: ${floorResult}`);

const ceilResult = Math.ceil(task3);
console.log(`До большего целого: ${ceilResult}`); 

const roundResult = Math.round(task3);
console.log(`До ближайшего целого: ${roundResult}`); 


// Задание 4

const task4 = [52, 53, 49, 77, 21, 32];

// Находим минимальное значение
const minValue = Math.min(...task4);
console.log(`Минимальное значение: ${minValue}`);

// Находим максимальное значение
const maxValue = Math.max(...task4);
console.log(`Максимальное значение: ${maxValue}`);

// Задание 5

function task5() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

task5();

// Задание 6

function task6(number) {

    const arrayLength = Math.floor(number / 2);
    
    const result = [];
    
    for (let i = 0; i < arrayLength; i++) {
        const randomNum = Math.floor(Math.random() * (number + 1));
        result.push(randomNum);
    }
    
    return result;
}

console.log(task6(10));
console.log(task6(6));  
console.log(task6(8));  
console.log(task6(5));

// Задание 7

function task7(min, max) {
    
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error('Оба числа должны быть целыми');
    }
    
   
    if (min > max) {
        [min, max] = [max, min];
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(task7(1, 10));  
console.log(task7(5, 15));   
console.log(task7(0, 5));


// Задвание 8
console.log(new Date());

// Задание 9
const currentDate = new Date();

const futureDate = new Date(currentDate);

futureDate.setDate(futureDate.getDate() + 73);

console.log('Текущая дата:', currentDate.toLocaleDateString());
console.log('Дата через 73 дня:', futureDate.toLocaleDateString());


// Задание 10
function task10(date) {

    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
   
    return `Дата: ${day} ${month} ${year} года — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}
const task10Date = new Date();
console.log(task10(task10Date));