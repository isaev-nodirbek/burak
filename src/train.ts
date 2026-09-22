// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

function reverseSentence(str) {
  const words = str.split(" ");
  let newSentence = "";

  for (let letter of words) {
    letter = letter.split("").reverse().join("");
    newSentence = newSentence + " " + letter;
  }
  return newSentence;
}
const result = reverseSentence("we like coding");
console.log(result);
