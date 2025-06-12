// Задание 1. Скрытие и показ текста
// Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.

const textEl = document.querySelector('.text');
const btnEl = document.querySelector('.button');

console.log(textEl);
console.log(btnEl);

btnEl.addEventListener('click', () => {
        textEl.classList.toggle('text_hidden');
});