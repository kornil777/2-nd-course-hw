
// 1-я игра Случайное число
function startGame1() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  let userNumber;

  alert("Угадай число от 1 до 100");
  do {
    userNumber = Number(prompt(`Введите число от 1 до 100`));

    if (userNumber === randomNumber) {
      alert(`Поздравляем!!! Вы угадали число`);
      alert(`Загаданное число ${randomNumber}`);
    } else if (userNumber > randomNumber) {
      alert("Твое число больше загаданного, попробуй еще!");
    } else if (userNumber < randomNumber) {
      alert("Твое число меньше загаданного, попробуй еще!");
    } else {
      alert(`Введите ЧИСЛО от 1 до 100`);
    }
  } while (userNumber != randomNumber);
}

// 2-я игра Простая арифметика
function Game2task() {
            const operations = ['+', '-', '*', '/'];
            const operation = operations[Math.floor(Math.random() * operations.length)];
            
            let num1, num2, answer;
            
            switch(operation) {
                case '+':
                    num1 = Math.floor(Math.random() * 20) + 1;
                    num2 = Math.floor(Math.random() * 20) + 1;
                    answer = num1 + num2;
                    break;
                    
                case '-':
                    num1 = Math.floor(Math.random() * 20) + 10;
                    num2 = Math.floor(Math.random() * num1) + 1;
                    answer = num1 - num2;
                    break;
                    
                case '*':
                    num1 = Math.floor(Math.random() * 10) + 1;
                    num2 = Math.floor(Math.random() * 10) + 1;
                    answer = num1 * num2;
                    break;
                    
                case '/':
                    num2 = Math.floor(Math.random() * 10) + 1;
                    answer = Math.floor(Math.random() * 10) + 1;
                    num1 = num2 * answer; 
                    break;
            }
            
            return {
                question: `${num1} ${operation} ${num2}`,
                answer: answer
            };
        }

        function startGame2() {
            const problem = Game2task();
            const userAnswer = prompt(`Решите пример: ${problem.question}`);
            
            if (userAnswer === null) {
                alert('Игра окончена!');
                return;
            }
            
            const numericAnswer = parseFloat(userAnswer);
            
            if (isNaN(numericAnswer)) {
                alert('Пожалуйста, введите число!');
            } else if (Math.abs(numericAnswer - problem.answer) < 0.001) {
                alert('Правильно! Молодец!');
            } else {
                alert(`Неправильно. Правильный ответ: ${problem.answer}`);
            }
            
            
            if (confirm('Хотите сыграть еще раз?')) {
                startGame2();
            } else {
                alert('Спасибо за игру!');
            }
        }

      