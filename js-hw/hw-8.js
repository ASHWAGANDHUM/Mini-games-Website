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

const textEl = document.querySelector('.text');
const btnColor = document.querySelector('.btn-change-color');

btnColor.addEventListener('click', () => {
    textEl.style.color = 'blue';
});

// Задание 3. Динамическое изменение текста
// Задача: создайте кнопку, которая меняет текст в заголовке <h1>.


const titleEl = document.querySelector('.title');
const btnChangeText = document.querySelector('.btn-change-text');

btnChangeText.addEventListener('click', () => {
    titleEl.textContent = 'Привет мир!';
});