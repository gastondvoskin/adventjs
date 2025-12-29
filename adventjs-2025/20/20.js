/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
  for (let i = 0; i < drops.length; i++) {
    const drop = drops[i];
    if (warehouse[0][drop] === "#") continue;

    for (let rowIndex = warehouse.length - 1; rowIndex >= 0; rowIndex--) {
      if (warehouse[rowIndex][drop] === ".") {
        warehouse[rowIndex][drop] = "#";
        break;
      }
    }
  }
  return warehouse;
}

/* TEST */
// console.log(dropGifts(
//   [
//     ['.', '.', '.'],
//     ['.', '#', '.'],
//     ['#', '#', '.']
//   ],
//   [0]
// ));