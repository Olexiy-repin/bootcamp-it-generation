/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників
// Через for...in
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let total = 0;

// // 1 ітерація
// // key = 'John'

// // 2 ітерація
// // key = 'Ann'

// // 3 ітерація
// // key = 'Pete'
// for (const key in salaries) {
//   console.log(key);
//   console.log(salaries[key]);

//   total += salaries[key];
// }

// console.log('total: ', total);

// Через Object.keys()
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let total = 0;

// const salariesKeys = Object.keys(salaries);

// console.log(salariesKeys);

// // 1 ітерація
// // key = 'John'

// // 2 ітерація
// // key = 'Ann'

// // 3 ітерація
// // key = 'Pete'

// for (const key of salariesKeys) {
//   total += salaries[key];
// }

// console.log(total);

// Через Object.values()
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let total = 0;

// const valuesOfSalaries = Object.values(salaries);

// for (const value of valuesOfSalaries) {
//   total += value;
// }

// console.log(total);
