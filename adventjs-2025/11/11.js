/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  let counter = 0;
  for (let rowIndex = 0; rowIndex < warehouse.length; rowIndex++) {
    const row = warehouse[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const element = row[colIndex];
      if (element !== "*") {
        continue;
      }

      let adjacentElements = [row[colIndex - 1], row[colIndex + 1]];
      if (rowIndex !== 0) {
        adjacentElements.push(warehouse[rowIndex - 1][colIndex]);
      }
      if (rowIndex !== warehouse.length - 1) {
        adjacentElements.push(warehouse[rowIndex + 1][colIndex]);
      }

      if (!adjacentElements.includes("#")) {
        counter++;
      }
    }
  }
  return counter;
}

// console.log(findUnsafeGifts(["*.", "*.", "#."])); // ➞ 0
// console.log(findUnsafeGifts([".*.", "*#*", ".*."])); // ➞ 0
// console.log(findUnsafeGifts(["...", ".*.", "..."])); // ➞ 1
// console.log(findUnsafeGifts(["*.*", "...", "*#*"])); // ➞ 2
// console.log(findUnsafeGifts([".....", ".*.*.", "..#..", ".*.*.", "....."])); // ➞ 4
