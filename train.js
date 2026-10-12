// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud.
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

function sumOdds(numbs) {
  let count = 0;
  for (let i = 0; i < numbs; i += 2) {
    if (i + 1 < numbs) {
      count++;
    }
  }
  return count;
}

const result1 = sumOdds(9);
const result2 = sumOdds(11);

console.log(result1);
console.log(result2);

// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

// function mergeSortedArrays(arr1, arr2) {
//   const result = [];
//   let a = 0;
//   let b = 0;

//   while (a < arr1.length && b < arr2.length) {
//     if (arr1[a] <= arr2[b]) {
//       result.push(arr1[a++]);
//     } else {
//       result.push(arr2[b++]);
//     }
//   } // ikkala arraydagi sonlarni bir biriga solishtirib tahlaydi
// agar ikkala array uzunligi bir xil bolmasa length  bir xil bolgunicha solishtiradi va ortiqcha qolgan son qolib ketadi

// while (a < arr1.length) result.push(arr1[a++]);
// while (b < arr2.length) result.push(arr2[b++]);
// bizga ikkala array length har xil bolganida
// solishtirilmay qolib ketgan sonlarni tartib boyicha qoshadi

//   return result;
// }
// const result = mergeSortedArrays([0, 3, 4, 30], [4, 6, 31]);
// console.log(result);

// TASK S:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2
// function missingNumber(numbs) {
//   let sum = 0;
//   for (let i = 0; i <= numbs.length; i++) {
//     sum += i;
//   }
//   let totalSum = numbs.reduce((real, current) => real + current);
//   return sum - totalSum;
// }

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([0, 1, 2])); // 3

// TASK P:
// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj) {
//   return Object.keys(obj).map((key) => [key, obj[key]]);
// }
// const result = objectToArray({ a: 10, b: 20 });
// console.log("result: ", result);

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

/* FRONTEND DEVELOPMENT
Traditional FD => SSR (Adminka)           => RJS

Modern FD      => SPA (USER application)   => REACT
*/

/*COOKIES
request join
self destroy
*/

/* VALIDATION
Fronend validation
Backend validation
Database validation
*/
