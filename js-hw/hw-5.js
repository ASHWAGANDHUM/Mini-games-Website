// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].
// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3].
// Найдите индекс значения 4 в этом массиве.

const numbers = [1, 5, 4, 10, 0, 3];
let position = numbers.indexOf(4);
console.log(`${position}`);

// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

const numbs = [1, 3, 5, 10, 20];
let joinNumbs = numbs.join(" ");
console.log(joinNumbs);

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

const multArr = new Array(0); // условия нам диктуют сделать именно (матрицу в) 3 массива с 3 подмассивами (строками)?

for (let i = 0; i < 3; i++) {
    const row = new Array(0);
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    multArr.push(row);
}

console.log(multArr);

// Задание 5
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

const shortArr = [1, 1, 1];
shortArr.push(2, 2, 2);
console.log(shortArr);

// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.

const mixArr = [9, 8, 7, 'a', 6, 5];
mixArr.sort();
const filteredArr = mixArr.filter(item => typeof item === 'number');
console.log(filteredArr);

// let deleted = mixArr.pop(); // первая попытка была решена таким методом, пока не заглянул в подсказки...
// console.log(`Элемент ${deleted} удалён из массива`); // просто проверка на возвращение элемента :)
// console.log(mixArr);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5].

const guessArr = [9, 8, 7, 6, 5];
let guessNumber = Number(prompt('Угадай число, находящееся внутри массива.'))
let answer = guessArr.includes(guessNumber);

if (answer) {
    alert('Угадал')
} else {
    alert('Не угадал')
}

// Задание 8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.

let string = 'abcdef';
console.log(string.split('').reverse().join(''));

// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]] . Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const doubleArr = [
    [1, 2, 3],
    [4, 5, 6]
];
const joinArr = doubleArr.flat();
// const joinArr = [...doubleArr[0], ...doubleArr[1]]; // как вариант
console.log(joinArr);

// Задание 10
// 1. Создайте массив с произвольными числами (диапазон от 1 до 10).
// 2. Переберите его с помощью цикла for.
// 3. В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// * Обратите внимание, что у последнего элемента нет следующего.

const numbersArr = [2, 5, 3, 7, 9, 6, 4, 8, 2, 1];

for (let i = 0; i < numbersArr.length - 1; i++) {
    let sum = numbersArr[i] + numbersArr[i + 1];
    console.log(sum);
}

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

const baseArr = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
];

function square(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    return arr.map(subArr =>
        subArr.map(number => number ** 2)
    );
}

const squaredArr = square(baseArr);
console.log(squaredArr);

// МОЁ ПЕРВОЕ РЕШЕНИЕ ЗАДАНИЯ 11

// const baseArr = [
//     [2, 3, 4],
//     [5, 6, 7],
//     [8, 9, 10],
// ];

// function squareArr(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         return null;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             arr[i][j] = arr[i][j] ** 2;
//         }
//     }
//     return arr;
// }

// let squaredArr = squareArr(baseArr);
// console.log(squaredArr);

// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

const strings = ['git', 'branch', 'main'];

function findLength(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    return arr.map(str => str.length);
}

const lengths = findLength(strings);
console.log(lengths);

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.

const numArr = [
    [9, -14, 0, -55, 2, 78, 90, -1, -23],
    [1, -49, 53, 35, 2, 78, -61, -1, 7],
    [-12, 88, 0, 3, -42, 8, -96, -1, -38],
    [80, 5, 62, -71, 27, 13, 39, -3, 11]
];

function getNegativeNums(arr) {
    if (!Array.isArray || arr.length === 0) {
        return null;
    }
    return arr.map(subArr =>
        subArr.filter(number => number < 0)
    );
}
const negativeNumArr = getNegativeNums(numArr);
console.log(negativeNumArr);

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.

function generateRandomArr(length) {
    const randomNumbersArr = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * 11);
        randomNumbersArr.push(randomNumber);
    }
    return randomNumbersArr;
}

const randomArr = generateRandomArr(10); // Исходный массив с рандомными числами
console.log(randomArr);
const evenNumbersArr = randomArr.filter(number => number % 2 === 0); // Массив с четными значениями
console.log(evenNumbersArr);

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

function getAverageNumberOfSix() {
    const arr = [];
    for (let i = 0; i < 6; i++) {
        const randomSixNumbers = Math.floor(Math.random() * 10) + 1;
        arr.push(randomSixNumbers);
    }
    console.log(`Сгенерированный массив: ${arr}`); // вывод в консоль результата сгенерированного массива в шаблонной строке
    return arr.reduce((total, num) => total + num, 0) / arr.length;
}
const averageNumber = getAverageNumberOfSix();
console.log(`Среднее значение сгенерированного массива составляет ${averageNumber}`); // вывод в консоль среднего арифметического числа массива в шаблонной строке