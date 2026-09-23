function getSquareNumbers(numbs) {
  let result = [];
  for (let i = 0; i < numbs.length; i++) {
    let number = numbs[i];
    result.push({ number: number, square: number * number });
  }
  return result;
}
const answer = getSquareNumbers([1, 2, 3]);
console.log(answer);
