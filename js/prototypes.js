/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */
// const user = {
//   firstName: 'Oleksii',
//   age: 40,

//   greet() {
//     console.log(`Hello ${this.firstName}`);
//   },

//   sum() {},
// };

// const user2 = Object.create(user);
// const user3 = Object.create(user);

// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log('user3: ', user3);

// user2.firstName = 'Belle Marshall';
// user2.gender = 'male';
// user3.firstName = 'Gertrude Oliver';

// user3.greet();
// user2.greet();
// [[Prototype]]
// __proto__

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()

// console.log(user2.hasOwnProperty('firstName'));

//* Цикл for...in, перебирає і власні, і не власні властивості.

// for (const prop in user2) {
//   if (user2.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }
