// function detectBombs(grid) {
//   // Code here
//   return []
// }

function detectBombs(grid) {
  let finalGrid = []; 

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    finalGrid.push([...row])
  }
  
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const up = !!(grid[i - 1] && grid[i - 1][j]) ? 1 : 0; 
      const down = !!(grid[i + 1] && grid[i + 1][j]) ? 1 : 0; 
      const left = !!(grid[i][j - 1]) ? 1 : 0; 
      const right = !!(grid[i][j + 1]) ? 1 : 0; 
      // console.log(up, down, left, right); 

      const upLeft = !!(grid[i - 1] && grid[i - 1][j - 1]) ? 1 : 0; 
      const upRight = !!(grid[i - 1] && grid[i - 1][j + 1]) ? 1 : 0; 
      const downLeft = !!(grid[i + 1] && grid[i + 1][j - 1]) ? 1 : 0; 
      const downRight = !!(grid[i + 1] && grid[i + 1][j + 1]) ? 1 : 0; 
      // console.log(upLeft, upRight, downLeft, downRight); 
      
      finalGrid[i][j] = 
        up + down + left + right + 
        upLeft + upRight + downLeft + downRight;
      // console.log(finalGrid[i][j]); 
    }
  }

  // console.log(finalGrid); 
  return finalGrid; 
}


console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]));
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
  [true, false],
  [false, false]
])) 
// [
//   [0, 1],
//   [1, 1]
// ]


console.log(detectBombs([
  [true, true],
  [false, false],
  [true, true]
]))

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]



/* 
LOGIC
map grid to an array of array of 0. 
iterate grid. iterate row. 
let current
if (current) {
  if right === true || right === false {
    right++
  }
}
*/





/* 
EXERCISE
The Grinch has been up to his tricks in the North Pole and has planted explosive coal bombs 💣 in the elves' toy factory. He wants all the toys to be rendered useless, and that's why he has left a grid where some cells have explosive coal (true) and others are empty (false).

The elves need your help to map the dangerous areas. Each empty cell should display a number indicating how many explosive coal bombs there are in the adjacent positions, including diagonals.

detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]


*/