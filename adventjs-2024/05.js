// function organizeShoes(shoes) {
//   return []
// }

function organizeShoes(shoes) {
  let finalArray = []; 

  for (let i = 0; i < shoes.length - 1; i++) {
    const shoeOne = shoes[i];
    for (let j = i + 1; j < shoes.length; j++) {
      // console.log(i, j)
      const shoeTwo = shoes[j];
      // console.log(shoeOne); 
      // console.log(shoeTwo); 
      if (shoeOne.size === shoeTwo.size && shoeOne.type !== shoeTwo.type) {
        // console.log("here"); 
        finalArray.push(shoeOne.size); 
        // delete shoeTwo to avoid duplicating it
        shoes.splice(j, 1); 
        // console.log(shoes); 
        break;
      }
    }
  }

  // console.log(finalArray); 
  return finalArray; 
}

// TEST
organizeShoes([
  { type: 'I', size: 42 },
  { type: 'R', size: 42 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 42 },
])

/* 
LOGIC
NEW
let finalArray = []; 
iterate shoes
  iterate inside from the second element
  compare shoeOne to ShoeTwo. if size is equal && type is not equal ---> finalArray.push(size)

return finalArray


OLD
let finalArray = []; 
let orderedShoes = [];

iterate shoes
  iterate orderedShoes
    if currentShoe.size === orderedShoe.size && orderedShoe.type !== orderedShoe.size ---> {1. finalArray.push(currentShoe.size)  2. orderedShoes[j] splice }
  at the end of the second loop ---> orderedShoes.push(currentShoe)


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