/*
 *  Метод filter()
 */

// масив.filter((element, index, array) => {
// Тіло колбек-функції
// });

/*
? Відфільтруйте масив, щоб залишилися тільки парні
*/
// const numbers = [1, 2, 3, 4, 5, 6];

// Повна версія
// const evenNumbers = numbers.filter((el, idx, arr) => {
//   return el % 2 === 0;
// });

// Скорочена версія
// const evenNumbers = numbers.filter(el => el % 2 === 0);

// console.log('numbers: ', numbers);
// console.log('evenNumbers: ', evenNumbers);

/*
? Відфільтруємо масив, залишивши в ньому лише позитивні числа:
*/
// const numbers = [-2, 5, 1, -5, -1, 1, 0, 3, 4, -1];

// Повна версія
// const positiveNumbers = numbers.filter((el, idx, arr) => {
//   return el >= 0;
// });

// Скорочена версія
// const positiveNumbers = numbers.filter(el => el >= 0);

// console.log('numbers: ', numbers);
// console.log('positiveNumbers: ', positiveNumbers);

/*
? Відфільтруйте масив heroes за властивістю об'єкта franchise.
*/
// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// Повна версія
// const marvelHeroes = heroes.filter((el, idx, arr) => {
//   return el.franchise.toLowerCase() === 'marvel';
// });

// const dcHeroes = heroes.filter((el, idx, arr) => {
//   return el.franchise.toLowerCase() === 'dc';
// });

// Скорочена версія
// const marvelHeroes = heroes.filter(el => el.franchise.toLowerCase() === 'marvel');
// const dcHeroes = heroes.filter(el => el.franchise.toLowerCase() === 'dc');

// console.table(heroes);
// console.table(marvelHeroes);
// console.table(dcHeroes);

/*
? Нехай функція filterByPrice повертає масив автомобілів ціна яких
? менше ніж значення параметра threshold.
*/
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// Повна версія
// const filterByPrice = (cars, threshold) => {
//   return cars.filter((el, idx, arr) => {
//     return el.price <= threshold;
//   });
// };

// Скорочена версія
// const filterByPrice = (cars, threshold) => cars.filter(el => el.price <= threshold);

// console.table(filterByPrice(cars, 25000));
// console.table(filterByPrice(cars, 30000));

/*
? Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
*/
// Повна версія
// const getCarsWithDiscount = cars => {
//   return cars.filter((el, idx, arr) => {
//     return el.onSale;
//   });
// };

// Скорочена версія
// const getCarsWithDiscount = cars => cars.filter(el => el.onSale);

// console.table(getCarsWithDiscount(cars));

/*
? Нехай функція getCarsWithType повертає масив автомобілів, тип яких
? збігається із значенням параметра type.
*/

// Повна версія
// const getCarsWithType = (cars, type) => {
//   return cars.filter((el, idx, arr) => {
//     return el.type.toLowerCase() === type.toLowerCase();
//   });
// };

// Скорочена версія
// const getCarsWithType = (cars, type) =>
//   cars.filter(el => el.type.toLowerCase() === type.toLowerCase());

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));

// const allCourses = ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// 1 ітерація
// el = 'математика';
// idx = 0;
// arr = ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// arr.indexOf(el) === idx;
// 0 === 0;

// 2 ітерація
// el = 'фізика';
// idx = 1;
// arr = ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// arr.indexOf(el) === idx;
// 1 === 1;

// 3 ітерація
// el = 'інформатика';
// idx = 2;
// arr = ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// arr.indexOf(el) === idx;
// 2 === 2;

// 4 ітерація
// el = 'математика';
// idx = 3;
// arr = ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// arr.indexOf('математика') === idx;
// 0 === 3;

// const uniqueCourses = allCourses.filter((el, idx, arr) => arr.indexOf(el) === idx);

// console.log('allCourses: ', allCourses);
// console.log('uniqueCourses: ', uniqueCourses);
