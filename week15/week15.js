//Задание 1
// Выведите числа от 1 до 10 в консоль
let i = 0;
for (i = 0; i <= 10; i++){
    console.log(i)
}
//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
let i = 0;
for (i = 0; i <= 20; i++){
    if (i % 2 === 0)
    console.log(i)
}
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
let i = 0;
for (i = 10; i >=0; --i){
    console.log(i)
}
//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

for (let i = 1; i <= 10; i++) {
    let result = i * 5;
    console.log(result);
}


//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sumOf = 0;
for (let i = 1; i <= 100; i++) {
    sumOf += i;
}
console.log(sumOf);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
let i = 0;
for(i = 0; i < array.length; i++){
    console.log(array[i])
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let num = 0;
for (let i = 0; i < numbers.length; i++) {
    num += numbers[i];
}
console.log(num);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for(i = 0; i < animals.length; i++){
    animals[i] = animals[i] + " - прекрасное животное";

}
console.log(animals)
//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for(i = 0; i < str.length; i++){
    console.log(str[i])
}
//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for(let symbol of array){
    console.log(symbol)
}
//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];

for(i = 0; i < sentences.length; i++ ){
    const word = sentences[i].split(' ');
    for(let j = 0; j < word.length; j++){
        console.log(word[j])   
    }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
const numberss = [1, 2, 3, 4, 5]
let result = 0;
for (const number of numberss) {
    result += number;
}

console.log(result);
//Задание 13
// Выведите длину каждого слова из массива строк в консоль
let i = 0;
const list = ['apple', 'banana', 'cherry'];
for(i = 0; i < list.length; i++){
    console.log(list[i].length);
}
//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
for(let i = 0; i < words.length; i++){
    words[i] = words[i].toUpperCase();
    console.log(words[i])
}
//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let i = 0; i < greeting.length; i++) {
    if (vowels.includes(greeting[i])) {
        vowelCount++;
    }
}

console.log(`Количество гласных букв в строке: ${vowelCount}`);
//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
//const words = ['Hello', 'world', '!'];
const combinedString = words.join(' ');

console.log(combinedString);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let q = 1;
while(q <= 10){
    console.log(q)
    q++
}


//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let p = 10;
while(p >= 1){
    console.log(p)
    --p
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let a = 0;

while(a < allNumbers.length){
    if (allNumbers[a] < 0 ){
        allPositive = false;
        break;
    }
    a++;
}

console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let v = 0;

do {
    console.log(random[v]);
    v++;
} while (v < random.length && random[v] >= 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
//for(let i = 1; i <101; i++){
    //if(i % 3 !== 0){
        //console.log(i);
    //}
//}
let m = 1;
do {
    if(m % 3 !== 0){
        console.log(m)
    }
    m++;
} while (m <= 100)
//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let sum = 0;

do {
    let input = prompt('Введите число:');

    // Проверяем, является ли введенное значение числом
    if (input === null) {
        // Если пользователь нажал "Отмена", прерываем цикл
        break;
    }

    let number = Number(input);

    // Проверяем, удалось ли преобразовать введенное значение в число
    if (!isNaN(number)) {
        sum += number;
    } else {
        alert('Введите корректное число.');
    }

    if (sum > 100) {
        alert('Сумма чисел превысила 100.');
        break;
    }
} while (true);


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function changeColor() {
    let h4Elements = document.getElementsByTagName('h4');

    for (let i = 0; i < h4Elements.length; i++) {
        h4Elements[i].style.backgroundColor = 'blue';
    }
}


//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
//let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
//let randomString = '';

function generateStringRadnom(){
    let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let randomString = '';

for(let i = 0; i < 6; i++){
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
return randomString;
}
let stingOne = generateStringRadnom();
let stingTwo = generateStringRadnom();

console.log(randomSting)