// Підключення модуля lodash
const _ = require('lodash');


// Приклади використання методів lodash:

// 1. Метод _.isEmpty() - перевіряє, чи є об'єкт пустим
const isEmpty = _.isEmpty({}); // поверне true, оскільки об'єкт пустий
console.log(isEmpty);

// 2. Метод _.capitalize() - перетворює перший символ рядка на верхній регістр
const capitalizedString = _.capitalize('hello world');
console.log(capitalizedString); // виведе "Hello world"

// 3. Метод _.compact() - видаляє всі "ложні" значення з масиву (false, null, 0, "", undefined, NaN)
const compactedArray = _.compact([0, 1, false, 2, '', 3]);
console.log(compactedArray); // виведе [1, 2, 3]

// 4. Метод _.sortBy() - сортує масив за певним критерієм
const sortedArray = _.sortBy(['banana', 'apple', 'cherry'], [function(o) { return o; }]);
console.log(sortedArray); // виведе ["apple", "banana", "cherry"]

// 5. Метод _.isEqual() - перевіряє, чи є два значення рівні
const isEqual = _.isEqual([1, 2, 3], [1, 2, 3]);
console.log(isEqual); // виведе true, оскільки масиви рівні
