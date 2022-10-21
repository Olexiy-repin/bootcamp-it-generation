/*
 * Операція spread замість concat і slice
 */

//* Копія масива
// Через метод slice
// const numbers = [1, 2, 3, 4, 5];
// const copyNumbers = numbers.slice();

// console.log('numbers: ', numbers);
// console.log('copyNumbers: ', copyNumbers);

// copyNumbers[0] = 10;

// console.log('numbers: ', numbers);
// console.log('copyNumbers: ', copyNumbers);

// Через метод concat
// const numbers = [1, 2, 3, 4, 5];
// const copyNumbers = numbers.concat();

// console.log('numbers: ', numbers);
// console.log('copyNumbers: ', copyNumbers);

// copyNumbers[0] = 10;

// console.log('numbers: ', numbers);
// console.log('copyNumbers: ', copyNumbers);

// Через оператор spread
// const numbers = [1, 2, 3, 4, 5];
// const copyNumbers = [...numbers];

// console.log('numbers: ', numbers);
// console.log('copyNumbers: ', copyNumbers);

// copyNumbers[0] = 10;

// console.log('numbers: ', numbers);
// console.log('copyNumbers: ', copyNumbers);

//* Об'єднання масивів
// const firstArr = [1, 2, 3];
// const secondArr = [10, 11, 12];
// const totalArr = [...firstArr, 20, 30, ...secondArr];

// console.log(totalArr);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 3, 4, 6, 7, 8];

// console.log(Math.min(...numbers));

/*
 * Операція spread замість Object.assign({}, obj)
 */
// Через метод assign
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const copyUser = Object.assign({ gender: 'female' }, user);

// console.log('user: ', user);
// console.log('copyUser: ', copyUser);

// copyUser.age = 20;

// console.log('user: ', user);
// console.log('copyUser: ', copyUser);

// Через оператор spread
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const copyUser = {
//   ...user,
//   gender: 'male',
//   age: 20,
// };

// console.log('user: ', user);
// console.log('copyUser: ', copyUser);

// copyUser.age = 20;

// console.log('user: ', user);
// console.log('copyUser: ', copyUser);

//* Розпилення складних типів
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };
// const copyUser = _.cloneDeep(user);

// console.log('user: ', user);
// console.log('copyUser: ', copyUser);

// copyUser.someArr.push(5);

// console.log('user: ', user);
// console.log('copyUser: ', copyUser);

/*
 * Операція rest
 */
//? Напишіть функцію sum, яка складає довільну кількість аргументів

const sum = function (...args) {
  // ...args = 1, 2;
  // let args = [1, 2];
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 20, 30));
console.log(sum(1, 2));
