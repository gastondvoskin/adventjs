/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  const OPEN = "[";
  const CLOSE = "]";

  let openingBrackets = 0;
  let maxOpeningBrackets = 0;

  for (let i = 0; i < s.length; i++) {
    const symbol = s[i];
    if (openingBrackets === 0 && symbol === CLOSE) return -1;
    if (symbol === OPEN) {
      openingBrackets++;
      maxOpeningBrackets =
        openingBrackets > maxOpeningBrackets
          ? openingBrackets
          : maxOpeningBrackets;
    } else if (symbol === CLOSE) {
      openingBrackets--;
    }
  }

  return openingBrackets !== 0 ? -1 : maxOpeningBrackets;
}

// console.log(maxDepth("[]")); // -> 1
// console.log(maxDepth("[[]]")); // -> 2
// console.log(maxDepth("[][]")); // -> 1
// console.log(maxDepth("[[][]]")); // -> 2
// console.log(maxDepth("[[[]]]")); // -> 3
// console.log(maxDepth("[][[]][]")); // -> 2
// console.log(maxDepth("][")); // -> -1 (closes before opening)
// console.log(maxDepth("[[[")); // -> -1 (missing closing brackets)
// console.log(maxDepth("[]]]")); // -> -1 (extra closing brackets)
// console.log(maxDepth("[][][")); // -> -1 (one remains unclosed)
