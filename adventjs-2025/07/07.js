/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  const BLANK = " ";
  const ASTERISK = "*";
  let tree = "";
  let symbolPosition = 1;

  let row = 0;
  while (row < height) {
    const blanks = BLANK.repeat(height - 1 - row);
    let symbols = "";
    const symbolsQuantity = row * 2 + 1;
    let symbolCol = 0;

    while (symbolCol < symbolsQuantity) {
      const ornamentTime = symbolPosition % frequency === 0;
      symbols += ornamentTime ? ornament : ASTERISK;
      symbolCol++;
      symbolPosition++;
    }

    tree = tree + blanks + symbols + "\n";
    row++;
  }
  tree = tree + BLANK.repeat(height - 1) + "#";

  return tree;
}
