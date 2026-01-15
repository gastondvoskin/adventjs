/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  let letters = toy.split("");

  while (letters.length) {
    const firstLetter = letters[0];
    const lengthBeforeFiltering = letters.length;
    letters = letters.filter(
      (curentLetter) => curentLetter.toLowerCase() !== firstLetter.toLowerCase()
    );
    if (lengthBeforeFiltering - 1 === letters.length) {
      return firstLetter;
    }
  }
  return "";
}

// console.log(findUniqueToy("Aaa")); // ''
// console.log(findUniqueToy("abcDEF")); // 'a'
// console.log(findUniqueToy("AaBbCc")); // ''
// console.log(findUniqueToy("sTreSS")); // 'T'
