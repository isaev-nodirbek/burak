// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

const result1 = mergeSortedArrays([0, 3, 4, 31], [4, 6, 31]);
const result2 = mergeSortedArrays([2, 5, 6, 9, 33], [5, 7, 11, 22, 32]);
console.log(result1);
console.log(result2);

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   const result: number[] = [];
//   let a = 0;
//   let b = 0;

//   while (a < arr1.length && b < arr2.length) {
//     if (arr1[a] <= arr2[b]) {
//       result.push(arr1[a++]);
//     } else {
//       result.push(arr2[b++]);
//     }
//   } // ikkala arraydagi sonlarni bir biriga solishtirib tahlaydi
//   // agar ikkala array uzunligi bir xil bolmasa length  bir xil bolgunicha solishtiradi va ortiqcha qolgan son qolib ketadi

//   while (a < arr1.length) result.push(arr1[a++]);
//   while (b < arr2.length) result.push(arr2[b++]);
//   // bizga ikkala array length har xil bolganida
//   // solishtirilmay qolib ketgan sonlarni tartib boyicha qoshadi

//   return result;
// }
// const result = mergeSortedArrays([0, 3, 4, 30], [4, 6, 31]);
// console.log(result);
// TASK S:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(numbers: number[]): number {
//   const expectedSum = (numbers.length * (numbers.length + 1)) / 2;
//   let realSum = 0;

//   for (const number of numbers) {
//     realSum += number;
//   }

//   return expectedSum - realSum;
// }

// const missing = missingNumber([3, 0, 1]);
// console.log(missing); // 2

// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// function calculate(str: string): number {
//   const parts = str.split("+");
//   let sum = 0;

//   for (let i = 0; i < parts.length; i++) {
//     sum = sum + Number(parts[i]);
//   }

//   return sum;
// }

// const result = calculate("1 + 3");
// const result2 = calculate("10 + 20");
// console.log(result); // 4
// console.log(result2); // 30

// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// function hasProperty(obj: Record<string, any>, prop: string): boolean {
//   // return prop in obj;
//   // return obj.hasOwnProperty(prop);
//   // return Object.keys(obj).includes(prop);

//   for (let key in obj) {
//     if (key === prop) {
//       return true;
//     }
//   }
//   return false;
// }

// const result = hasProperty({ name: "BMW", model: "M3" }, "model");
// const result2 = hasProperty({ name: "BMW", model: "M3" }, "color");
// console.log(result); // true
// console.log(result2); // false

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
