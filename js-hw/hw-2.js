// Задание 1
let password = 'qwerty';
let answer = prompt('Введите пароль');
alert(answer === password ? 'Пароль введён верно' : 'Пароль введён неверно');
// Задание 2
let c = 2;
console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно');
// Задание 3
let e = 20;
let d = 90;
console.log(e > 100 || d > 100 ? 'Верно' : 'Неверно');
// Задание 4
let a = '2';
let b = '3';
    // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));
// Задание 5
let monthNumber = prompt('Введите номер месяца, и я подскажу, к какому времени года он относится.');
switch (Number(monthNumber)) {
    case 12 || 1 || 2:
        console.log('Зима');
        break;
    case 3 || 4 || 5:
        console.log('Весна');
        break;
    case 6 || 7 || 8:
        console.log('Лето');
        break;
    case 9 || 10 || 11:
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца не существует.');
}