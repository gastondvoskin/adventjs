// function organizeShoes(shoes) {
//   return []
// }

function organizeShoes(shoes) {
  return []
}


// TEST
organizeShoes([
  { type: 'I', size: 38 },
  { type: 'R', size: 42 },
  { type: 'R', size: 38 },
])

/* 
LOGIC
OLD
let finalArray = []; 
let orderedShoes = [];

iterate shoes
  iterate orderedShoes
    if currentShoe.size === orderedShoe.size && orderedShoe.type !== orderedShoe.size ---> {1. finalArray.push(currentShoe.size)  2. orderedShoes[j] splice }
  at the end of the second loop ---> orderedShoes.push(currentShoe)

NEW
let finalArray = []; 
iterate shoes
  iterate inside from the second element
  compare shoeOne to ShoeTwo. if size is equal && type is not equal ---> finalArray.push(size)

return finalArray

*/

/* EXERCISE
Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

type indicates if it's a left boot (I) or a right boot (R).
size indicates the size of the boot.
Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.

Note: You can have more than one pair of boots of the same size!

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []
*/