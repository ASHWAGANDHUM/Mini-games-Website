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
console.log(position);

