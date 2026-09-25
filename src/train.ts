// TASK N:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
function palindromCheck(str: string) {
  return str === str.split("").reverse().join("");
}

const result = palindromCheck("dad");
const result2 = palindromCheck("son");

console.log("Result1: ", result);
console.log("Result2: ", result2);

// TASK M:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
// function getSquareNumbers(numbs: number[]) {
//   let result = [];
//   for (let i = 0; i < numbs.length; i++) {
//     let number = numbs[i];
//     result.push({ number: number, square: number * number });
//   }
//   return result;
// }
// const answer = getSquareNumbers([1, 2, 3]);
// console.log(answer);

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(str) {
//   const words = str.split(" ");
//   let newSentence = "";

//   for (let letter of words) {
//     letter = letter.split("").reverse().join("");
//     newSentence = newSentence + " " + letter;
//   }
//   return newSentence;
// }
// const result = reverseSentence("we like coding");
// console.log(result);
