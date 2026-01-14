/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
// function drawGift(size, symbol) {
//   // Code here
//   return ''
// }

function drawGift(size, symbol) {
  if (size < 2) return "";

  const NEW_LINE = "\n";
  const SPACE = " ";

  const lastLine = symbol.repeat(size);
  const firstLine = lastLine + NEW_LINE; 
  const secondLine = symbol + SPACE.repeat(size - 2) + symbol + NEW_LINE;
  const result = firstLine + secondLine.repeat(size - 2) + lastLine;
  return result;
}

// console.log(drawGift(1, "#"));
// console.log(drawGift(2, "#"));
// console.log(drawGift(3, "#"));
// console.log(drawGift(10, "#"));
