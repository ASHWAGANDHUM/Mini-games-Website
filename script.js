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