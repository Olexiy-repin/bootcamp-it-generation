/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "Rock&Roll" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];

// genres.push('Rock&Roll');

// console.log(genres);

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// const firstElementOfGenres = genres.shift();

// console.log(genres);
// console.log(firstElementOfGenres);

// genres.unshift('Country', 'Reggy');
// console.log(genres);

/*
 * Присвоєння за посиланням і за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10;
// const b = a;

// console.log('a: ', a);
// console.log('b: ', b);

// a = 20;

// console.log('a: ', a);
// console.log('b: ', b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

// arr1.push(4);

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

/*
 * Перебор масива циклами for та for...of
 */
/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// Через for
// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1) {
//   const item = salaries[i];

//   // total = total + salaries[i];
//   total += item;
// }

// console.log(total);

// Через for...of
// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (const item of salaries) {
//   total += item;
// }

// console.log(total);

/*
 * Методи масивів
 */
/*
? У нас є масив співробітників, Співробітник Shaw звільнився, видаліть його з масиву
*/
// const employees = ['Dennis', 'Watkins', 'Shaw', 'Ray'];

// const indexOfShaw = employees.indexOf('Shaw');
// employees.splice(indexOfShaw, 1);

//? Додайте нового співробітника Thornton, перед Watkins;
// const indexOfWatkins = employees.indexOf('Watkins');
// employees.splice(indexOfWatkins, 0, 'Thornton');

// console.log(employees);
