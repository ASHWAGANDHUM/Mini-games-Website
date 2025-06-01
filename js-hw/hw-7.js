// Задание 1. С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите результат в консоль.

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// Задание 2. Реализуйте функцию filter, которая должна работать аналогично методу массива filter. Возьмите за основу функцию map, которую мы реализовывали на уроке. Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.


function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const persones = [ // т.к. переменная people уже занята
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(persones, isMale));

// Задание 3. Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».

let currentDate = new Date();

let timerId = setInterval (() => { console.log(currentDate); }, 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 1000 * 30);

// Задание 4. Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска. Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.

function delayForSecond(callback) {
    setTimeout(() => { callback() }, 1000 );
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})