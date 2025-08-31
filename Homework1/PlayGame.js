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
