// https://api.github.com/users/olexiy-repin
// function myAsyncFunction(url) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if (xhr.status !== 200) {
//         reject(xhr.status);
//       } else {
//         resolve(xhr.responseText);
//       }
//     });
//   });

//   return promise;
// }

// myAsyncFunction('https://api.github.com/users/olexiy-repin')
//   .then(data => {
//     console.log(JSON.parse(data));
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Запит за користувачем на колбэках
// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Робимо запит на сервер...');

//   setTimeout(() => {
//     const isDone = Math.random();

//     if (isDone > 0.5) {
//       const user = {
//         firstName: name,
//         lastName: 'Francis',
//         age: 30,
//       };

//       onSuccess(user);
//     } else {
//       onError("Користувача з таким ім'ям не знайдено");
//     }
//   }, 2000);
// };

// const handleSuccessFetch = data => {
//   console.log(data);
// };

// const handleErrorFetch = err => {
//   console.log(err);
// };

// fetchUserByName('Ida', handleSuccessFetch, handleErrorFetch);

//? Запит за користувачем на промісах
// const fetchUserByName = name => {
//   return new Promise((resolve, reject) => {
//     console.log('Робимо запит на сервер...');

//     setTimeout(() => {
//       const isDone = Math.random();

//       if (isDone > 0.5) {
//         const user = {
//           firstName: name,
//           lastName: 'Francis',
//           age: 30,
//         };

//         resolve(user);
//       } else {
//         reject("Користувача з таким ім'ям не знайдено");
//       }
//     }, 2000);
//   });
// };

// fetchUserByName('Ida')
//   .then(user => {
//     console.log(user);
//   })
//   .catch(err => {
//     console.log(err);
//   });
