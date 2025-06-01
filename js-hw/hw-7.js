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



// function square(number) {
//     return number ** 2;
// }

// function squareRoot(number) {
//     return Math.sqrt(number);
// }

// function map(arr, ruleFunction) {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//         output.push(ruleFunction(arr[i]));
//     }
//     return output;
// }

// const input = [4, 9, 25, 16, 36, 49];
// console.log(input);

// console.log(map(input, square));
// console.log(map(input, squareRoot));
