/*
 * Синхронний vs Асинхронний JS
 */

// console.log('Start');

// setTimeout(function () {
//   console.log('In setTimeout');
// }, 1000);

// let count = 0;

// for (let i = 0; i < 1000000; i += 1) {
//   count += 1;
// }

// console.log(count);

// console.log('End');

// Стек виклику функцій (http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!)

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);
// let count = 0;

// const intervalId = setInterval(() => {
//   count += 1;

//   if (count > 10) {
//     clearInterval(intervalId);
//   }

//   console.log('Hello');
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
