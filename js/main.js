/*
 * Функції з побічними ефектами та чисті функції
 */
//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (arr, ...args) => {
//   const copyNumbers = [...arr];

//   copyNumbers.push(...args);

//   return copyNumbers;
// };

// const newNumbers = pushNumbers(numbers, 9, 6, 8);

// console.log('numbers: ', numbers);
// console.log('newNumbers: ', newNumbers);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   const copyNumbers = [...arr];

//   for (let i = 0; i < copyNumbers.length; i += 1) {
//     copyNumbers[i] *= 2;
//   }

//   return copyNumbers;
// };

// const newNumbers = doubleMulti(numbers);

// console.log('numbers: ', numbers);
// console.log('newNumbers: ', newNumbers);
