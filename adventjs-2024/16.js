// function removeSnow(s) {
//   // Code here
//   return '';
// }

function removeSnow(s) {
  let snowArray = s.split(""); 
  
  for (let i = 0; i < snowArray.length - 1; i++) {
    const currentPile = snowArray[i];
    const nextPile = snowArray[i + 1];

    if (currentPile === nextPile) {
      snowArray.splice(i, 2); 
      i = i - 2;
    }
  }

  const finalPath = snowArray.join(""); 
  return finalPath; 
}

// TEST 
console.log(removeSnow("abccb"))
//                       i 01234
//                         abb
//                       i  1
//                         a
//                       i 0

// console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

// console.log(removeSnow('abcdd')) // -> "abc"
// 1. Remove "dd", resulting in "abc"

// console.log(removeSnow('zzz')) // -> "z"
// 1. Remove "zz", resulting in "z"

// console.log(removeSnow('a')) // -> "a"
// No duplicate piles



/* 
EXERCISE
The elves are working hard to clear paths filled with magical snow ❄️. This snow has a special property: if two identical and adjacent snow piles are found, they disappear automatically.

Your task is to write a function to help the elves simulate this process. The path is represented by a string and each snow pile by a character.

You need to remove all adjacent snow piles that are the same until no more moves are possible.

The result should be the final path after removing all duplicate piles:

removeSnow('zxxzoz') // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

removeSnow('abcdd') // -> "abc"
// 1. Remove "dd", resulting in "abc"

removeSnow('zzz') // -> "z"
// 1. Remove "zz", resulting in "z"

removeSnow('a') // -> "a"
// No duplicate piles
*/