// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказанним значення.
// Наприклад функція fillArray(3, 'a') повертає масив ['a', 'a', 'a'].

// function fillArray(number, symbol) {
//   let newArray = [];
//   for (let i = 0; i < number; i++) {
//     newArray.push(symbol);
//   }
//   return newArray;
// }

// console.log(fillArray(7, "+"));

// Написати функцію, котра створить новий масив в якому
// не буде значень, які приводяться до false
// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// function trueArray(array) {
//   let newArray = [];

//   for (const element of array) {
//     if (element) {
//       newArray.push(element);
//     }
//   }
//   console.log(newArray);
// }

// trueArray(array);

// Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// function compareArrays(firstArray, secondArray) {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }

//   for (const element of firstArray) {
//     if (!secondArray.includes(element)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(compareArrays(arr1, arr2));
// console.log(compareArrays(arr3, arr4));
// console.log(compareArrays(arr5, arr6));
// console.log(compareArrays(arr7, arr8));

// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   const arg = arguments;

//   let sum = 0;
//   let count = 0;

//   for (const element of arg) {
//     if (typeof element !== "number") {
//       continue;
//     }

//     sum += element;
//     count += 1;
//   }

//   console.log(arg);

//   return sum / count;
// }

// console.log(calculateAverage(12, "asda", 1194, 1, 9, "qqq"));

// Напишіть функцію findMaxNumber, яка приймає масив чисел і повертає
// максимальне число у цьому масиві.Використовуйте цикл for...of для
// ітерації через елементи масиву.

// function findMaxNumber(array) {
//   let max = array[0];
//   for (const element of array) {
//     if (element > max) {
//       max = element;
//     }
//   }
//   return max;
// }

// const array1 = [1, 4, 7, 10];
// console.log(findMaxNumber(array1));

// Напишіть функцію countOccurrences, яка приймає масив і елемент,
// і повертає кількість входжень цього елемента у масиві.
// Використовуйте цикл for...of для ітерації через елементи масиву
// та порівнюйте їх з вказаним елементом для підрахунку кількості входжень.

// function countOccurrences(array, element) {
//   let sum = 0;

//   for (const el of array) {
//     if (el === element) {
//       sum++;
//     }
//   }
//   return sum;
// }

// const element = 13;
// const numbers = [1, 1, 1, 4, 5, 10, 13, 13];

// console.log(countOccurrences(numbers, element));

// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// function checkKeyInObject(obj, key) {
//   return obj.hasOwnProperty(key);

// return Object.keys(obj).includes(key);

// for (const objKey in obj) {
//   if (objKey === key) {
//     return true;
//   }
// }
// return false;
// }

// console.log(checkKeyInObject(user, "surname"));

// Додати метод getinfo в об'єкт user, який повертатиме інформацію
// про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`

// const user = {
//   name: "Peter",
//   surname: "Parker",
//   age: 22,
//   position: "spider-man",
// };

// user.getinfo = function () {
//   return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`;
// };
// console.log(user.getinfo());

// Створіть об'єкт calculator із трьома методами:
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   sum() {
//     return this.value1 + this.value2;
//   },
//   mult() {
//     return this.value1 * this.value2;
//   },
// };

// calculator.read(10, 30);
// console.log(calculator.sum());
// console.log(calculator.mult());

// Напишіть функцію updateObject, яка приймає об'єкт і ключі (ключів може бути довільна кількість)
//які необхідно видалити з об'єкту.
//Функція повертає новий об'єкт без зазначених параметрів.
//Очікуваний результат ({a: 1, b: 2}, 'b') => {a: 1}

// function updateObject(object, ...keys) {
//   let newObject = { ...object };

//   for (const key of keys) {
//     delete newObject[key];
//   }
//   return newObject;
// }
// console.log(updateObject({ a: 1, b: 5, c: 9, d: 4 }, "a", "c"));

//  Напишіть функцію, яка приймає як параметр об'єкт
//і повертає масив значень у форматі [[key, value], [key, value], ...]
// де key і value - відповідно ключ і значення переданного об'екту.

// const user = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };

// function changeObject(object) {
//   const entries = Object.entries(object);

//   return entries;
// }
// console.log(changeObject(user));

// Напишіть функцію getPropertyValues(), яка приймає масив об'єктів
// та ключ, і повертає масив значень цього ключа у кожному об'єкті

// const myArr = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Bob", age: 40 },
// ];

// function getPropertyValues(array, key) {
//   const newArray = [];
//   for (const object of array) {
//     newArray.push(object[key]);
//   }
//   return newArray;
// }
// console.log(getPropertyValues(myArr, "age"));

// Знайти студента з найменшим віком та вивести інформацію про нього у форматі:
// `Студент з найменшим віком: name, Вік: age, Спеціальність: major`

// const students = [
//   { name: "Олександр", age: 20, major: "Інформатика" },
//   { name: "Марія", age: 21, major: "Психологія" },
//   { name: "Іван", age: 19, major: "Економіка" },
// ];

// let youngerStudent = students[0];
// for (const student of students) {
//   if (student.age < youngerStudent.age) {
//     youngerStudent = student;
//   }
// }
// console.log(youngerStudent);
// console.log(
//   `Студент з найменшим віком: ${youngerStudent.name}, Вік: ${youngerStudent.age}, Спеціальність: ${youngerStudent.major}`
// );

// Розрахувати загальну суму всіх замовлень та вивести інформацію у форматі:
// `Загальна сума всіх замовлень: totalAmount`

// const orders = [
//   { id: 1, product: "Футболка", quantity: 2, price: 15 },
//   { id: 2, product: "Шорти", quantity: 3, price: 20 },
//   { id: 3, product: "Кросівки", quantity: 1, price: 50 },
// ];

// let totalAmount = 0;
// for (const order of orders) {
//   totalAmount += order.quantity * order.price;
// }
// console.log(`Загальна сума всіх замовлень: ${totalAmount}`);
