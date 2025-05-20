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

