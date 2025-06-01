// Задание 1.
// Преобразовать строку 'js' в верхний регистр.

const str = 'js';
console.log(str.toUpperCase());

// Задание 2.
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.

const beverages = ['Чай чёрный', 'Лимонад со вкусом манго', 'Кофе зерновой',
'Лимонад Колокольчик', 'Чай зелёный', 'Сок апельсиновый'];

function filterArrayByString(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

const filteredBeverages = filterArrayByString(beverages, 'Лимонад');
console.log(filteredBeverages);

// Задание 3. Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.

let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// Задание 4. Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const numbers = [52, 53, 49, 77, 21, 32];
let minNumber = Math.min(...numbers); // использован spread-оператор для разворачивания массива
let maxNumber = Math.max(...numbers); // использован spread-оператор для разворачивания массива

console.log(`Минимальное число - ${minNumber}, максимальное - ${maxNumber}`);

// Задание 5. Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function getRandomNumber() {
    let randomNumber = Math.round(Math.random() * 10);
    console.log(randomNumber);
}

getRandomNumber();

// Задание 6. Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

function arrLimitRandomNumbers(number) {
    const arr = [];
    for (let i = 0; (number / 2) > arr.length; i++) {
        let randomNumber = Math.floor(Math.random() * number);
        arr.push(randomNumber);
    }
    return arr;
}

console.log(arrLimitRandomNumbers(12));

// Задание 7. Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function getRandomNumberInRange(num1, num2) {
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumberInRange(22, 38));

// Задание 8. Выведите в консоль текущую дату

let now = new Date();
console.log(now.toLocaleDateString());

// Задание 9. Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(`Через 73 дня будет дата: ${currentDate.toLocaleDateString()}`);

// Задание 10. Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды].

function getFormattedDate(date) {
    let options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
    }
    let weekOption = {
        weekday: 'long'
    }
    let timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }
    const formattedDate = date.toLocaleDateString('ru-RU', options);
    const dayOfWeek = date.toLocaleDateString('ru-RU', weekOption);
    const formattedTime = date.toLocaleTimeString('ru-RU', timeOptions);

    console.log(`Дата: ${formattedDate} - это ${dayOfWeek}\nВремя: ${formattedTime}.`);
}

let nowDate = new Date;
getFormattedDate(nowDate);

let specificDate = new Date(2026, 4, 10);
getFormattedDate(specificDate);