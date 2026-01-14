/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  let blocks = code.split("[");
  blocks.shift();
  blocks = blocks.map((block) => block.slice(0, block.length - 1));
  // console.log(blocks);

  if (blocks.length < 4) return null; // dev: comment this line to simplify tests

  let pin = "";

  blocks.forEach((block) => {
    if (block === "<") {
      const digit = pin[pin.length - 1];
      pin += digit;
      // console.log(pin);
    } else {
      let digit = block[0];
      // console.log(digit);
      let operations = block.slice(1);
      operations = operations.split("");
      // console.log(operations);

      operations.forEach((op) => {
        if (digit === "0" && op === "-") {
          digit = "9";
        } else if (digit === "9" && op === "+") {
          digit = "0";
        } else if (op === "+") {
          digit = String(Number(digit) + 1);
        } else if (op === "-") {
          digit = String(Number(digit) - 1);
        }
      });
      pin += digit;
    }
  });

  return pin;
}

// console.log(decodeSantaPin("[1--]"));
// console.log(decodeSantaPin("[0-]"));
// console.log(decodeSantaPin("[1+][2--]"));
// console.log(decodeSantaPin("[1][2][3][<][<]"));
// console.log(decodeSantaPin("[0--][1][1+++][1][<][9++][1--]"));

