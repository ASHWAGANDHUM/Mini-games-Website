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

// Задание 5

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n); // Отслеживание результатов каждой итерации
    num++;
}
console.log(`В результате получилось число ${n}`);
console.log(`Количество итераций составило ${num}`);

// Задание 6

let f = 0;
for (let day = 2; day < 31; day += 7) {
    alert(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`);
    f++;
}
if (f >= 5) {
    alert(`Пятниц в месяце: ${f}, что редкость`);
} else {
    alert(`Пятниц в месяце: ${f}`);
}