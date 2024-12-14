// function minMovesToStables(reindeer, stables) {
//   // Code here
//   return 0
// }


function minMovesToStables(reindeer, stables) {
  reindeer.sort((a, b) => a - b); 
  stables.sort((a, b) => a - b); 

  const minMoves = reindeer.reduce((accumulator, currentValue, currentIndex) => {
    const currentStable = stables[currentIndex]; 
    let distance = currentValue - currentStable; 
    if (distance < 0) {distance = - distance};
    return accumulator + distance; 
  }, 0); 

  return minMoves; 
}

// TEST
console.log(minMovesToStables([3, 7], [1, 7])); // 2
console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) // 3
console.log(minMovesToStables([1, 1, 3], [1, 8, 4])) // 8

/* 
LOGIC. 
sort both arrays. 
sum the distances of each reindeer to each stable. if the number is <0, convert it to positive. 
*/


/* 
EXERCISE
Reindeer need to move to occupy the stables, but there cannot be more than one reindeer per stable. Additionally, to keep the reindeer comfortable, we must minimize the total distance they travel to get settled.

We have two parameters:

reindeer: An array of integers representing the positions of the reindeer.
stables: An array of integers representing the positions of the stables.
Each reindeer must be moved from its current position to a stable. However, it is important to note that there can only be one reindeer per stable.

Your task is to calculate the minimum number of moves needed for all the reindeer to end up in a stable.

Note: Keep in mind that the stables array will always be the same size as the reindeer array and that the stables will always be unique.

Example
minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3
// Explanation:
// Reindeer at positions: 2, 6, 9
// Stables at positions: 3, 8, 5
// 1st reindeer: moves from position 2 to the stable at position 3 (1 move).
// 2nd reindeer: moves from position 6 to the stable at position 5 (1 move)
// 3rd reindeer: moves from position 9 to the stable at position 8 (1 move).
// Total moves: 1 + 1 + 1 = 3 moves

minMovesToStables([1, 1, 3], [1, 8, 4])
// Explanation:
// Reindeer at positions: 1, 1, 3
// Stables at positions: 1, 8, 4
// 1st reindeer: does not move (0 moves)
// 2nd reindeer: moves from position 1 to the stable at position 4 (3 moves)
// 3rd reindeer: moves from position 3 to the stable at position 8 (5 moves)
// Total moves: 0 + 3 + 5 = 8 moves
*/