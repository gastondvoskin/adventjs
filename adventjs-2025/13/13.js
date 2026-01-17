/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  const positions = [[0, 0]];

  while (true) {
    const currentPosition = positions[positions.length - 1];
    const [currentRow, currentCol] = currentPosition;
    const currentSymbol = factory[currentRow][currentCol];

    let nextPosition = [];

    switch (currentSymbol) {
      case ".":
        return "completed";
      case ">":
        nextPosition = [currentRow, currentCol + 1];
        break;
      case "<":
        nextPosition = [currentRow, currentCol - 1];
        break;
      case "^":
        nextPosition = [currentRow - 1, currentCol];
        break;
      case "v":
        nextPosition = [currentRow + 1, currentCol];
        break;
      default:
        break;
    }

    const [nextRow, nextCol] = nextPosition;
    const isBroken =
      nextRow === -1 ||
      nextRow > factory.length - 1 ||
      nextCol === -1 ||
      nextCol > factory[0].length - 1;

    if (isBroken) return "broken";

    let isLoop = false;
    positions.forEach((position) => {
      if (position[0] === nextRow && position[1] === nextCol) {
        isLoop = true;
      }
    });
    if (isLoop) return "loop";
    positions.push(nextPosition);
  }
}

// console.log(runFactory([">>."])); // 'completed'

// console.log(runFactory([">>>"])); // 'broken'

// console.log(runFactory([">><"])); // 'loop'

// console.log(runFactory([">>v", "..<"])); // 'completed'

// console.log(runFactory([">>v", "<<<"])); // 'broken'

// console.log(runFactory([">v.", "^.."])); // 'completed'

// console.log(runFactory(["v.", "^."])); // 'loop'
