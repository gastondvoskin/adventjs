/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  let copiedGloves = [...gloves];
  let previousGloves = [];
  let matches = [];

  for (let i = 0; i < copiedGloves.length; i++) {
    const currGlove = copiedGloves[i];

    if (!previousGloves.length) {
      previousGloves.push(currGlove);
      continue;
    }
    
    for (let j = 0; j < previousGloves.length; j++) {
      const prevGlove = previousGloves[j];
      if (
        currGlove.color === prevGlove.color &&
        currGlove.hand !== prevGlove.hand
      ) {
        matches.push(currGlove.color);
        previousGloves.splice(j, 1);
        break;
      } else if (j === previousGloves.length - 1) {
        previousGloves.push(currGlove);
        break;
      }
    }
  }

  return matches;
}

// console.log(
//   matchGloves([
//     { hand: "L", color: "red" },
//     { hand: "R", color: "red" },
//   ])
// );