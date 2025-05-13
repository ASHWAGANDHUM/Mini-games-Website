// Задание 1
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

// Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3
for (let i = 0; i <= 22; i++) {
    if (i < 7) {
        continue;
    }
    console.log(i);
}

// Задание 4
const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}
for (const key in obj) {
    console.log(`${key} — з/п ${obj[key]} долларов`);
}

// Задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n); // Отслеживание результатов каждой итерации
    num++;
}
console.log(`В результате получилось число ${n}`);
console.log(`Количество итераций составило ${num}`);

// Задание 6
let f = 0;
for (let day = 2; day < 31; day += 7) {
    alert(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`);
    f++;
}
if (f >= 5) {
    alert(`Пятниц в месяце: ${f}, что редкость`);
} else {
    alert(`Пятниц в месяце: ${f}`);
}










// ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ

// Задание 1
let iterations = 0;
let k = 100
for (; k > 0; k -= 7) {
    iterations++;
}
console.log(`Результат: ${k}`);
console.log(`Количество итераций (проходов цикла): ${iterations}`);

// Задание 2
const months = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
for (let i = 0; i < months.length; i++) {
    console.log(`${i + 1}. ${months[i]}`);
}

// Задание 3
const book = {
    Название: 'Мартин Иден',
    Автор: 'Джек Лондон',
    Год: 1909,
    Жанр: 'Роман'
}
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Задание 4

const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 101)); // Целое число от 0 до 100
}
// Предположим, что первый элемент - минимальный
let min = numbers[0];
// Перебор элементов массива
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
// Результат
console.log(`Массив: ${numbers}`);
console.log(`Минимальное число: ${min}`);