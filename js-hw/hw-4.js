// Задание 1

function minOfTwo(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

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

function userAge(age) {
    while (age < 0 || isNaN(age)) {
        age = Number(prompt('Вы ввели некорректное значение! Попробуйте еще раз.'));
    }
    if (age <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}
let age = Number(prompt('Сколько вам лет?'));
alert(userAge(age));