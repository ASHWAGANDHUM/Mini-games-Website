// КНОПКА "ИГРАТЬ", ВЕДУЩАЯ К БЛОКУ "ОБ ИГРАХ" В ДЕСКТОП-ВЕРСИИ И К БЛОКУ "МИНИ-ИГРЫ" В МОБИЛЬНОЙ ВЕРСИИ
const button = document.getElementById('smart-button');
button.addEventListener('click', function () {
  if (window.matchMedia('(min-width: 768px)').matches) {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
    }); // скролл при нажатии на кнопку для десктопной версии (до блока "Об играх")
  } else {
    document.getElementById('games').scrollIntoView({
      behavior: 'smooth'
    }); // скролл при нажатии на кнопку для мобильной версии сайта (до блока "Мини-игры")
  }
});

// ИГРА 1 - УГАДАЙ ЧИСЛО
function guessNumberGame() {
    alert('Отлично. Ты выбрал игру "Угадай число"! Нажми ОК, чтобы начать.');
    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    let guess = null; // объявление переменной - ответа на загадку
    let attempts = 0; // объявление переменной для подсчёта попыток
    while (guess !== hiddenNumber) {
        guess = prompt("Угадай число от 1 до 100:");
        // При нажатии Отмена или Esc
        if (guess === null) {
          alert("Игра окончена.");
          return;
        }
        guess = Number(guess);
        // Проверка на нечисловой тип данных и числовой диапазон
        if (isNaN(guess) || guess < 1 || guess > 100) {
          alert('Тебе нужно ввести число от 1 до 100.');
          continue;
        }
        attempts++;
        if (guess < hiddenNumber) {
          alert("Загаданное число больше!");
        } else if (guess > hiddenNumber) {
          alert("Загаданное число меньше!");
        }
    }
    alert(`Поздравляю! Ты угадал число ${hiddenNumber} за ${attempts} попыток.`);
}

// ИГРА 2 - ПРОСТАЯ АРИФМЕТИКА

function simpleArithmetic() {
  alert('Отлично. Ты выбрал игру "Простая арифметика"! Будет 10 арифметических задач, на которые нужно дать ответ. Нажми ОК, чтобы начать.');
  let correctAnswer = 0; // счетчик верных ответов
  let countAnswer = 0; // счетчик ответов в общем (равно числу арифм.задач - 10)

  for (let i = 0; i < 10; i++) { // цикл в 10 арифметических задач

    const num1 = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100 для первого числа
    const num2 = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100 для второго числа
    const num3 = Math.floor(Math.random() * 10) + 1; // Случайное число от 1 до 10 одного из чисел в случае умножения
    const operationsArr = ['+', '-', '*', '/']; // Набор (массив) математических символов
    const operation = operationsArr[Math.floor(Math.random() * operationsArr.length)]; // Случайный математический символ для арифметической задачи

    let problem; // Строчное написание задачи
    let answer; // Ответ на задачу (выражение)

    switch (operation) {
      case '+':
      answer = num1 + num2;
      problem = `${num1} + ${num2}`;
      break;
      case '-':
      answer = num1 - num2;
      problem = `${num1} - ${num2}`;
      break;
      case '*':
      answer = num1 * num3;
      problem = `${num1} * ${num3}`;
      break;
      case '/':
      if (num2 === 0 || num1 % num2 !== 0) { // условие для исключения деления на 0 и ответов с нецелыми числами
        i--; // не учитывать итерацию
        continue;
      }
      answer = num1 / num2;
      problem = `${num1} / ${num2}`;
      break;
    }

    let userAnswer = prompt(`Введи правильный ответ к задаче ${problem}`);

    if (userAnswer === null) { // При нажатии Отмена или Esc
      alert("Игра окончена.");
      return;
    }
    if (isNaN(userAnswer) || userAnswer === '') {
    alert('Нужно ввести число! Попробуй ещё раз.');
    i--; // не учитывать итерацию
    continue;
    }

    userAnswer = Number(userAnswer); // преобразование переменной в числовой тип данных, доселе являвшейся строчной (для null, проверок на NaN и пустую строку)

    if (userAnswer === answer) {
      alert('Верно!');
      correctAnswer++;
    } else {
      alert(`Неверно!`);
    }

    countAnswer++;
  }
  if (correctAnswer === countAnswer) {
    alert(`Поздравляю! Ты дал ${correctAnswer} ответов из ${countAnswer}!`);
  } else {
    alert(`Ты дал ${correctAnswer} ответов из ${countAnswer}.`);
  }
}

// ИГРА 3 - ПЕРЕВЕРНИ ТЕКСТ

function reverseText() {
  let text = prompt('Введи текст, который необходимо перевернуть.');

  if (text === null) { // При нажатии Отмена или Esc
    alert("Игра окончена.");
    return;
  }

  while (!isNaN(text) || text === '') { // Проверка на корректный тип данных
    text = prompt('Нужно ввести текст. Попробуй ещё раз!');
      if (text === null) { // При нажатии Отмена или Esc
      alert("Игра окончена.");
      return;
    }
  }

  let reversedText = text.toLowerCase().split('').reverse().join('');
  alert(`Перевёрнутый текст получился таким: ${reversedText}!`);
}