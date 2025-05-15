// Задание 1

const minOfTwo = (a, b) => (a <= b ? a : b);

let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));

alert(`Минимальное число: ${minOfTwo(firstNumber, secondNumber)}`);

// Задание 2

function isEven(number) {
    return number % 2 === 0 ? `Число ${number} — чётное.`: `Число ${number} — нечётное.`;
}

let checkNumber = Number(prompt('Введи число.'));

while (isNaN(checkNumber)) {
    checkNumber = Number(prompt('Это не число! Попробуй ещё раз.'));
}

alert(isEven(checkNumber));

// Задание 3

function outputSquare(n) {
    let square = n * n; // Локальная переменная, функция ниже её не увидит
    console.log(`Квадрат параметра равен ${square}.`);
}
outputSquare(4);

function returnSquare(n) {
    let square = n * n; // Локальная переменная, функция выше её не увидит
    return square;
}
let sum = returnSquare(5) + 5;
console.log(`К вернувшемуся значению ${returnSquare(5)} мы прибавили 5 и получили ${sum}.`);

// Задание 4

function userAge() {
    let age = Number(prompt('Сколько вам лет?'));
    while (age < 0 || isNaN(age)) {
        age = Number(prompt('Вы ввели некорректное значение! Попробуйте еще раз.'));
    }
    if (age <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}
alert(userAge());

// Задание 5

function correctNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом.';
    }
    let mult = a * b;
    return `Произведение чисел ${a} и ${b} составляет ${mult}.`;
}

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

alert(correctNumbers(a, b));