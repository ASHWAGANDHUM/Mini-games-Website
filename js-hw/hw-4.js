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
let checkNumber = Number(prompt('Введите число.'));
    if (isNaN(checkNumber)) {
        alert('Это не число!');
    } else {
        alert(isEven(checkNumber));
    }