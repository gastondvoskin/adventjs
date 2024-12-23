// function generateGiftSets(gifts) {
//   // Code here
//   return []
// }

function generateGiftSets(gifts) {
  let combinations = [];
  let indexs = gifts.map((gift, index) => index); 
  console.log(indexs); 

  let i = 0; 
  while (indexs.length) {
    const combination = indexs.map(index => gifts[index]); 
    console.log(combination); 
    combinations.unshift(combination);

    if (indexs[0] === 0 && indexs[indexs.length - 1] === indexs.length - 1) {
      console.log("here", indexs);
      indexs.shift();
      let newIndex = gifts.length - 1;
      for (let j = indexs.length - 1; j >= 0; j--) {
        console.log(j); 
        indexs.splice(j, 1, newIndex); 
        newIndex--; 
      }
      console.log(indexs); 
      // overwrite indexs
    }
    else if (false) {
      let indexToReplace = indexs[i];
      indexs.splice(i, indexToReplace - 1); 
    }

    indexs = []; /* hardcoded to stop iteration */
  }

  console.log(combinations); 
  return combinations;
}


// TESTS 
generateGiftSets(["a", "b", "c"]); 
// generateGiftSets([1, 2, 3]); 
/* 
[
  [0], 
  [1], 
  [2], 
  [3],            
  [0, 1],         
  [0, 2],              
  [0, 3],             // i = 1
  [1, 2],             // i = 0  -- and j = 1 ++
  [1, 3],             // i = 1
  [2, 3],             // i = 0 
  [0, 1, 2],          // .shift()
  [0, 1, 3],          // i = 2   --      
  [0, 2, 3],          // i = 1   -- 
  [1, 2, 3],          // i = 0   --
  [0, 1, 2, 3],       // initialize an array o indexs with all the elements. while this array has length, iterate. 
                      // while iterating, push the current array using the array of index into the final array. 
                      // if (first element === 1 && last element === array.length) unshift() and i = 0;
                      // else i++ 
]
*/


/* 
EXERCISE
Santa Claus 🎅 is checking a list of unique toys that he might include in his magic gift bag. He wants to explore all possible combinations of toys. He wants to see all combinations that actually contain at least one toy.

Your task is to write a function that, given an array of toys, returns all possible combinations.

Important: You must return it in the order the toys appear and in combinations from 1 to n toys.

generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
Note: The input array will always have at least one toy and there will never be duplicate toys.

Tip: There are many ways to solve this problem, but backtracking might be a good option. 😉
*/