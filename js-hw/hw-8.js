// Задание 1. Скрытие и показ текста
// Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.

const headingEl = document.querySelector('.heading');
const btnEl = document.querySelector('.btn-hidden');

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

// Задание 4. Поиск и изменение элементов по классу
// Задача: найдите все элементы с классом description и измените их текст на «Измененный текст».

const allDescritionEl = document.querySelectorAll('.description');
const btnChangeDescription = document.querySelector('.btn-change-all');

btnChangeDescription.addEventListener('click', () => {
    allDescritionEl.forEach((element) => element.textContent = 'Измененный текст');
});

// Задание 5. Работа с querySelectorAll
// Задача: создайте несколько элементов <p> с разными классами. Используйте querySelectorAll , чтобы найти все элементы с классом description и изменить их текст.

const someDescEl = document.querySelectorAll('.desc');
const btnChangeDescEl = document.querySelector('.btn-change-desc');

btnChangeDescEl.addEventListener('click', () => {
    someDescEl.forEach((element) => element.textContent = 'Новый текст');
});

// Задание 6. Добавление нового элемента в DOM
// Задача: создайте кнопку, которая добавляет новый элемент <p> с текстом в конец документа.

const btnAddEl = document.querySelector('.btn-add-el');

btnAddEl.addEventListener('click', () => {
    const newEl = document.createElement('p')
    newEl.textContent = 'Текст в конце документа';
    document.body.appendChild(newEl);
});