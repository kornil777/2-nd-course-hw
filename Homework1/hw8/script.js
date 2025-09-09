// задача 1
const task1 = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];


console.log(task1.sort((a, b) => a.age - b.age));

// Задача 2

function isPositive(number) {
  return number > 0;
}
function isMale(person) {
  return person.gender === "male";
}
function filter(array, ruleFunction) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (ruleFunction(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people, isMale));

// Задача 3
function printDateFor30Seconds() {
    let counter = 0;
    const totalTime = 30000; 
    const intervalTime = 3000; 
    

    console.log(new Date().toLocaleString());
    counter += intervalTime;
    
    
    const intervalId = setInterval(() => {
        console.log(new Date().toLocaleString());
        counter += intervalTime;
        
        
        if (counter >= totalTime) {
            clearInterval(intervalId); 
           
            setTimeout(() => {
                console.log('30 секунд прошло');
            }, 0);
        }
    }, intervalTime);
}

printDateFor30Seconds();


// Задача 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// Задача 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(function() {
    sayHi('Глеб');
});