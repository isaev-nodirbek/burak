// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

function hasProperty(obj: Record<string, any>, prop: string): boolean {
  // return prop in obj;
  // return obj.hasOwnProperty(prop);
  // return Object.keys(obj).includes(prop);

  for (let key in obj) {
    if (key === prop) {
      return true;
    }
  }
  return false;
}

const result = hasProperty({ name: "BMW", model: "M3" }, "model");
const result2 = hasProperty({ name: "BMW", model: "M3" }, "color");
console.log(result); // true
console.log(result2); // false

// TASK P:
// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: Record<string, any>) {
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

// function calculateSumOfNumbers(arr: any) {
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
// function palindromCheck(str: string) {
//   return str === str.split("").reverse().join("");
// }

// const result = palindromCheck("dad");
// const result2 = palindromCheck("son");

// console.log("Result1: ", result);
// console.log("Result2: ", result2);

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
