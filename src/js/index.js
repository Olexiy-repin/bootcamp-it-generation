// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!
// console.log('Start');

// setTimeout(() => {
//   console.log('In setTimeout');
// }, 0);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('in Promise');
//   }, 0);
// });

// promise.then(message => {
//   console.log(message);
// });

// console.log('End');

const counterOutputEl = document.querySelector('.js-counter');

// for (let i = 0; i <= 1000; i += 10) {
//   counterOutputEl.innerHTML = i;
// }

let i = 0;

const count = () => {
  i += 10;

  counterOutputEl.innerHTML = i;

  if (i !== 1000) {
    setTimeout(() => {
      count();
    }, 500);
  }
};

count();
