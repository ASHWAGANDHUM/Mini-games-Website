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

