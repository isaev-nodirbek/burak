// TASK N:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
function palindromCheck(str) {
  return str === str.split("").reverse().join("");
}

const result = palindromCheck("dad");
const result2 = palindromCheck("son");

console.log("Result: ", result);
console.log("Result2: ", result2);

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
