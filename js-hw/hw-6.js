// Задание 1.
// Преобразовать строку 'js' в верхний регистр.

const str = 'js';
console.log(str.toUpperCase());

// Задание 2.
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.

const beverages = ['Чай чёрный', 'Лимонад со вкусом манго', 'Кофе зерновой',
'Лимонад Колокольчик', 'Чай зелёный', 'Сок апельсиновый'];

function filterArrayByString(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

const filteredBeverages = filterArrayByString(beverages, 'Лимонад');
console.log(filteredBeverages);
