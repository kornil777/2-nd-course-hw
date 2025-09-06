
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

// 3-я игра Переверни текст

function startGame3() {
    const userText = prompt('Введите текст, который нужно перевернуть:');
    
    if (userText === null) {
        return;
    }
    
    if (userText.trim() === '') {
        alert('Вы не ввели текст! Попробуйте снова.');
        return;
    }
    
   
    const reversedText = userText.split('').reverse().join('');
    
    alert(`Оригинальный текст: ${userText}\nПеревернутый текст: ${reversedText}`);
}
// 5 -я игра
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startGame5() {
    let correctAnswers = 0;
    
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        let questionText = `Вопрос ${i + 1}/${quiz.length}:\n${currentQuestion.question}\n\n`;
        questionText += currentQuestion.options.join('\n');
        questionText += '\n\nВведите номер правильного ответа:';
        
        const userAnswer = parseInt(prompt(questionText));
    
        if (userAnswer === currentQuestion.correctAnswer) {
            correctAnswers++;
            alert('Правильно!');
        } else {
            alert(`Неправильно. Правильный ответ: ${currentQuestion.correctAnswer}`);
        }
    }
    
    showQuizResult(correctAnswers);
}


function showQuizResult(correctAnswers) {
    const totalQuestions = quiz.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    let resultMessage = `ВИКТОРИНА ЗАВЕРШЕНА!\n\n`;
    resultMessage += `Правильных ответов: ${correctAnswers} из ${totalQuestions}\n`;
    resultMessage += `Процент правильных ответов: ${percentage}%\n\n`;
    
    // Добавляем оценку в зависимости от результата
    if (correctAnswers === totalQuestions) {
        resultMessage += ' Отлично! Вы отлично ответили на все вопросы!';
    } else if (correctAnswers >= totalQuestions / 2) {
        resultMessage += 'Хороший результат!';
    } else {
        resultMessage += ' Попробуйте еще раз!';
    }
    
    alert(resultMessage);
}