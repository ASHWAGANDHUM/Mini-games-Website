// Задание 1

for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

// Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3

for (let i = 0; i <= 22; i++) {
    if (i < 7) {
        continue;
    }
    console.log(i);
}

// Задание 4

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}
for (const key in obj) {
    console.log(`${key} — з/п ${obj[key]} долларов`);
}