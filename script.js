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

function reverseTextGame() {
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
  alert(`Перевёрнутый текст получился таким: ${reversedText}`);
}

// ИГРА 4 (5?) - ПРОСТАЯ ВИКТОРИНА

function easyQuizGame() {
  const quiz = [
    {
        question: "Какой цвет у неба?",
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
  let countCorrectAnswers = 0;
  for (let i = 0; i < quiz.length; i++) {
    let answerUser = prompt(`${quiz[i].question}:\n${quiz[i].options.join(' ')}`);

    if (answerUser === null) { // При нажатии Отмена или Esc
      alert("Игра окончена.");
      return;
    }
    // проверка на пустой ответ, либо пробелы
    while (answerUser.trim() === '') {
      answerUser = prompt(`Нужно ввести ответ. Попробуй ещё раз!\n\n${quiz[i].question}:\n${quiz[i].options.join(' ')}`);
      if (answerUser === null) { // При нажатии Отмена или Esc
        alert('Игра окончена.');
        return
      }
    }

    numericAnswer = Number(answerUser);
    // переменная для строчного ответа
    let correctTextAnswer = quiz[i].options[quiz[i].correctAnswer - 1].split('. ')[1].toLowerCase();

    if (numericAnswer === quiz[i].correctAnswer || answerUser.trim().toLowerCase() === correctTextAnswer) {
      alert('Верно!');
      countCorrectAnswers++;
    } else {
      alert('Неверно!');
    }
  }
  if (countCorrectAnswers === quiz.length) {
    alert('Поздравляю! Ты ответил на все 3 вопроса!');
  } else if (countCorrectAnswers === 0) {
    alert('К сожалению, ты не ответил ни на один вопрос =(');
  } else {
    alert(`Ты ответил на ${countCorrectAnswers} вопроса из ${quiz.length}.`);
  }
}

// ИГРА 5 - КАМЕНЬ, НОЖНИЦЫ, БУМАГА

function rockPaperScissorsGame() {

  const choiceArr = ['камень', 'ножницы', 'бумага'];  // массив с вариантами ответа

  let userWinCount = 0; // счётчик побед пользователя
  let aiWinCount = 0; // счётчик побед компьютера
  // callback-функция для получения результата, принимающая выбор пользователя и компьютера в качестве аргументов
  const getResult = (userChoice, aiChoice) => {
    if (userChoice === aiChoice) {
      return 'Ничья';
    }
    if (
      (userChoice === 'камень' && aiChoice === 'ножницы') ||
      (userChoice === 'ножницы' && aiChoice === 'бумага') ||
      (userChoice === 'бумага' && aiChoice === 'камень')
    ) {
      return 'Победа';
    }
    return 'Поражение'; // в случае исключения остальных вариантов условий
  };

  for (let i = 0; i < 5; i++) {  // цикл из 5 итераций (5 раундов игры)
    let aiChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)]; // рандомный выбор компьютера
    let userChoice = prompt(`Сделай выбор: ${choiceArr.join(', ')}.`); // выбор пользователя

    if (userChoice === null) { // При нажатии Отмена или Esc
      alert("Игра окончена.");
      return;
    }

    userChoice = userChoice.toLowerCase(); // приведение пользовательского ответа к нижнему регистру

    if (!choiceArr.includes(userChoice)) { // проверка на корректность выбора
      alert('Тебе нужно выбрать один из вариантов!');
      i--; // не учитывать итерацию
      continue;
    }

    const result = getResult(userChoice, aiChoice); // возвращение результата
    alert(`Ты выбрал ${userChoice}.\nКомпьютер выбрал ${aiChoice}.\n\n${result}!`);

    if (result === 'Победа') {
      userWinCount++; // очко в зачёт пользователя
    } else if (result === 'Поражение') {
      aiWinCount++; // очко в зачёт компьютера
    }
  }
  // подведение итогов
  if (userWinCount > aiWinCount) {
    alert(`Поздравляю, ты победил!\n\nТвой счёт: ${userWinCount}\nСчёт компьютера: ${aiWinCount}`);
  } else if (userWinCount < aiWinCount) {
    alert(`К сожалению, ты проиграл!\n\nТвой счёт: ${userWinCount}\nСчёт компьютера: ${aiWinCount}`);
  } else {
    alert(`Ничья!\n\nТвой счёт: ${userWinCount}\nСчёт компьютера: ${aiWinCount}`);
  }
}

// ИГРА 6 - ГЕНЕРАТОР СЛУЧАЙНЫХ ЦВЕТОВ
function changeBackgroundColorGame() {
  const colors = ['#F25050', '#00C1FF', '#99D100', '#FFC700', '#FF6D00', '#565EEF', '#AD61FF', '#D9B6FF', '#1FA46C'];
  const index = Math.floor(Math.random() * colors.length);
  const randomColor = colors[index];
  const backGround = document.querySelector('.games');
  backGround.style.backgroundColor = `${randomColor}`;
}

const gameButton = document.querySelectorAll('.game__button');
gameButton[0].addEventListener('click', guessNumberGame);
gameButton[1].addEventListener('click', simpleArithmetic);
gameButton[2].addEventListener('click', reverseTextGame);
gameButton[3].addEventListener('click', rockPaperScissorsGame);
gameButton[4].addEventListener('click', easyQuizGame);
gameButton[5].addEventListener('click', changeBackgroundColorGame);