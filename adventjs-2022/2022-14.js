// function getOptimalPath(path) {
//   return 0
// }

function getOptimalPath(path) {
  let cols = Array(path.length).fill(0); 
  console.log(cols); 

  // let sumsOfPaths = [];
  let maxValue = 0;  
  
  let currentSum = 0; 

  for (let i = 0; i < path.length; i++) {
    const currentRow = path[i];
    console.log(currentRow);
    const currentCol = cols[i]; 
    console.log(currentCol); 
    const currentNumber = currentRow[currentCol]; 
    console.log(currentNumber); 

    currentSum += currentNumber;
    console.log(currentSum); 

    console.log(i === path.length - 1, currentSum > maxValue, )
    if (i === path.length - 1 && currentSum > maxValue) {
      maxValue = currentSum; 
      // modify cols; 
    }
    console.log(maxValue); 
    // const currNumber = path[i]; 
    // let currentSum = 0; 
    // currentSum += 
  }

}

getOptimalPath([[10], [1, 2]]);
// getOptimalPath([4, 2, 5, 6]);


// LOGIC
/* 


iterate path, save all the possible sums (one for each path). Che the max value of the saved paths. 
let pathsSums = [];

paths.push ( path[0][0] + path[1][0] + path[2][0] )
paths.push ( path[0][0] + path[1][0] + path[2][1] )
paths.push( path[] )

0 0 0
0 0 1
0 1 0 
0 1 1

path.length === 1
0

path.length === 2
0 0
0 1

path.length === 3
0 0 0 
0 0 1 
0 1 0 
0 1 1

path.length === 4
0 0 0 0         (0, 1, 2, 3)
0 0 0 1         (0, 1, 2, 3)
0 0 1 0         (0, 1, 2, 3)
0 0 1 1 
0 1 0 0
0 1 0 1 
0 1 1 0
0 1 1 1 




up to 1024 paths (Math.pow(2, 10))
//     0
//    / \
//   7   4
//  / \ / \
// 2   4   6

// [
//   [0],
//   [7, 4],
//   [2, 4, 6]
// ]
*/




// TESTING



// EXERCISE
// Santa Claus is building ice pyramids in the North Pole to train his reindeers.

// Each reindeer starts at the top of the pyramid and must choose the optimal path down to travel it in the shortest time possible. Each level has a number that determines the time it takes to get there.

// When arriving at a position, the reindeer can only slide down and diagonally to the left or right. Visually, the pyramid looks like this:

//     0
//    / \
//   7   4
//  / \ / \
// 2   4   6
// In code we represent it like this:

// [
//   [0],
//   [7, 4],
//   [2, 4, 6]
// ]
// Santa Claus needs a program that tells him what the minimum time each reindeer can take to slide down the pyramid using the optimal path.

// In the previous example, the optimal path is 0 -> 4 -> 4, which takes a total of 0 + 4 + 4 = 8 units of time. The result would be: 8.

// Why is it not 6? It is not 0 -> 4 -> 2 because when you go down to the position of the 4 you can no longer diagonally reach the position of the 2. So the shortest possible path is 8. More examples:

// getOptimalPath([[0], [2, 3]]) // 2

// getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5

// getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// To keep in mind:

// Keep in mind that you can only go down diagonally and down from any position.
// The first position of the pyramid can be different from 0.
// Pyramids can have up to 10 levels.
// The numbers in the pyramids can be negative.


