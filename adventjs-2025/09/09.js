/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const boardArr = board.split("\n");
  boardArr.pop();
  boardArr.shift();

  // find reindeer
  let position = {
    row: null,
    col: null,
  };
  for (let rowIndex = 0; rowIndex < boardArr.length; rowIndex++) {
    const row = boardArr[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const symbol = row[colIndex];
      if (symbol === "@") {
        position = {
          row: rowIndex,
          col: colIndex,
        };
        break;
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    // move reindeer
    const move = moves[i];
    if (move === "U") {
      position.row--;
    } else if (move === "D") {
      position.row++;
    } else if (move === "R") {
      position.col++;
    } else if (move === "L") {
      position.col--;
    }

    // evaluate action
    const symbolRow = boardArr[position.row];
    if (symbolRow === undefined) return "crash";
    const symbol = boardArr[position.row][position.col];
    if (symbol === "*") return "success";
    if (symbol === "#" || symbol === undefined) return "crash";
  }

  return "fail";
}

// const board = `
// .....
// .*#.*
// .@...
// .....
// `;

// console.log(moveReno(board, "D"))
// // ➞ 'fail' -> it moves but doesn't pick anything up

// console.log(moveReno(board, 'U'))
// // ➞ 'success' -> it picks something up (*) right above

// console.log(moveReno(board, 'RU'))
// // ➞ 'crash' -> it crashes into an obstacle (#)

// console.log(moveReno(board, 'RRRUU'))
// // ➞ 'success' -> it picks something up (*)

// console.log(moveReno(board, 'DD'))
// // ➞ 'crash' -> it crashes into the bottom of the board

// console.log(moveReno(board, 'UUU'))
// // ➞ 'success' -> it picks something up off the floor (*) and then crashes at the top

// console.log(moveReno(board, 'RR'))
// // ➞ 'fail' -> it moves but doesn't pick anything up
