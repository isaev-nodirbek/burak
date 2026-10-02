// TASK P:
// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

function objectToArray(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}
const result = objectToArray({ a: 10, b: 20 });
console.log("result: ", result);

// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

// function calculateSumOfNumbers(arr) {
//   let sum = 0;
//   for (let value of arr) {
//     if (typeof value === "number") {
//       sum += value;
//     }
//   }
//   return sum;
// }

// const result = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
// console.log(result);

// TASK N:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
// function palindromCheck(str) {
//   return str === str.split("").reverse().join("");
// }

// const result = palindromCheck("dad");
// const result2 = palindromCheck("son");

// console.log("Result: ", result);
// console.log("Result2: ", result2);

// function getSquareNumbers(numbs) {
// //   let result = [];
// //   for (let i = 0; i < numbs.length; i++) {
// //     let number = numbs[i];
// //     result.push({ number: number, square: number * number });
// //   }
// //   return result;
// // }
// // const answer = getSquareNumbers([1, 2, 3]);
// // console.log(answer);

/* Project Standards:
  - Logging standards
  - Naming standards
      function, method, variable => CAMEL case    goHome
      class => PASCAL.                            MemberService
      folder => KEBAB
      css => SNAKE

  - Error handling 

*/

/*
Traditional Api
Rest Api
GraphQL Api
.....
*/

/*
Traditional FD => SSR (Adminka)           => RJS

Modern FD      => SPA (USER application)   => REACT
*/
