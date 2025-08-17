// // Задание №1
let password = 'пароль';
let answer = prompt("Введите пароль");
if (answer === "пароль") {alert("Пароль введен верно");
} else {alert("Пароль введен неправильно");
    
}

// // Задача№2
let c = 5;
if (c>0 && c<10) {console.log("Верно");  
} else {console.log("Неверно");
    
}
// Задача №3
let e = 50;
let d = 101;
if (e>100 || d>100) {console.log("Верно");   
} else {console.log("Неверно");
    
}

// задача №4
let a = '2';
let b = '3';
alert(+a + +b);

// Задача №5
let monthNumber = Number(prompt("введите номер месяца"));

switch (monthNumber) {
   case 1:
      alert('Зима');
      break;
   case 2 :
      alert('Зима');
      break;
   case 3 :
      alert('Весна');
      break;
   case 4 :
      alert('Весна');
      break;
   case '5':
      alert('Весна');
      break;
   case 6 :
      alert('Лето');
      break;
   case 7 :
      alert('Лето');
      break;
   case 8 :
      alert('Лето');
      break;
   case 9 :
      alert('Осень');
      break;
   case 10 :
      alert('Осень');
      break;
   case 11 :
      alert('Осень');
      break;
   case 12 :
      alert('Зима');
      break;
   
   default:
      alert('номер месяца не может быть больше 12');
}
