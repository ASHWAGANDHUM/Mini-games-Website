// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].
// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
        console.log(arr[i]);
        break
    }
    console.log(arr[i]);
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
let joinNumbs = numbs.join(" ")
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

const doubleArr = [[1, 2, 3],[4, 5, 6]];
const joinArr = [...doubleArr[0], ...doubleArr[1]];
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
