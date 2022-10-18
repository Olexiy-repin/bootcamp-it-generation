/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Привіт ім'я_користувача, вам вік_користувача років.
*/
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const resultStr = 'Привіт ' + userFirstName + ', вам ' + userAge + ' років.';

// console.log(resultStr);

//? Виконайте завдання вище, використовуючи шаблонні рядки
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const resultStr = `Привіт ${userFirstName}, вам ${userAge} років.`;

// console.log(resultStr);

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.
// const userFirstName = prompt('Ваше ім`я');
// const userFirstNameLength = userFirstName.length;

// console.log(userFirstName);
// console.log(userFirstNameLength);

//? Попросіть користувача ввести email і переведіть у нижній регістр.
// const userEmail = prompt('Ваш email').toLowerCase();

// console.log(userEmail);

//? У нас є рядок '23,4', замініть кому на крапку
// const str = Number.parseFloat(prompt('Введіть число').replace(',', '.'));

// console.log(str);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// const str =
//   'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.replaceAll(
//     'dog',
//     'monkey'
//   );

// console.log(str);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// let someDate = '12:05:21'.replaceAll(':', '.');

// console.log(someDate);
