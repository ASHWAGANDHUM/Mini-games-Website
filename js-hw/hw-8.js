// Задание 1. Скрытие и показ текста
// Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.

const headingEl = document.querySelector('.heading');
const btnEl = document.querySelector('.btn-hidden');

console.log(headingEl);
console.log(btnEl);

btnEl.addEventListener('click', () => {
    headingEl.classList.toggle('text_hidden');
});

// Задание 2. Изменение стиля элемента
// Задача: создайте кнопку, которая изменяет цвет текста в элементе <p>.

// Инструкция:

// В HTML создайте абзац <p> и кнопку. Используйте метод querySelector для получения ссылки на абзац и кнопку. Используйте событие click и метод addEventListener, чтобы изменить стиль элемента, например его цвет.

// Как должно работать: нажатие на кнопку «Изменить цвет» делает текст абзаца синим.

const textEl = document.querySelector('.text');
const btnColor = document.querySelector('.btn-change-color');

btnColor.addEventListener('click', () => {
    textEl.style.color = 'blue';
});