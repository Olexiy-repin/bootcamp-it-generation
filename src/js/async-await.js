/*
 * async/await
 * асинхронная(async) функция ВСЕГДА возвращает промис.
 * await заставляет функцию ждать выполнения промиса.
 * await нельзя использовать вне асинхронных функций.
 * try/catch для отлова ошибок
 */

//? TASK 01
// Перепиши на async/await
// const getPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// };

// getPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async-функції?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   // ...що тут написати?
//   // щоб викликати wait() і дочекатися результату "10" від async-функції
//   // не забувайте, тут не можна використовувати "await"
// }

// f();
