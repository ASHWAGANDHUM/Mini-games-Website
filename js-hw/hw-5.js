// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
        console.log(arr[i]);
        break
    }
    console.log(arr[i]);
}

// Задание 2

const numbers = [1, 5, 4, 10, 0, 3];
let position = numbers.indexOf(4);
console.log(`${position}`);

// Задание 3

const numbs = [1, 3, 5, 10, 20];
let joinNumbs = numbs.join(" ")
console.log(joinNumbs);

// Задание 4

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

const shortArr = [1, 1, 1];
shortArr.push(2, 2, 2);
console.log(shortArr);

// Задание 6

const mixArr = [9, 8, 7, 'a', 6, 5];
mixArr.sort();
const filteredArr = mixArr.filter(item => typeof item === 'number');
console.log(filteredArr);

// let deleted = mixArr.pop(); // первая попытка была решена таким методом, пока не заглянул в подсказки...
// console.log(`Элемент ${deleted} удалён из массива`); // просто проверка на возвращение элемента :)
// console.log(mixArr);

// Задание 7

const guessArr = [9, 8, 7, 6, 5];
let guessNumber = Number(prompt('Угадай число, находящееся внутри массива.'))
let answer = guessArr.includes(guessNumber);

if (answer) {
    alert('Угадал')
} else {
    alert('Не угадал')
}

// Задание 8

let string = 'abcdef';
console.log(string.split('').reverse().join(''));