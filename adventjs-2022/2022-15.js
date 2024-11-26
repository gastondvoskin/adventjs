// function decorateTree(base) {
//   return []
// }

function decorateTree(base) {
  let rowToAdd = base; 
  let output = []; 

  while (rowToAdd.length > 0) {
    // rowToAdd ... 
    output.unshift(rowToAdd); 
    for (let i = 0; i < rowToAdd.length - 1; i++) {
      const element_A = rowToAdd[i];
      const element_B = rowToAdd[i + 2];
      if (element_A === " ") {
        rowToAdd += element_A;
      } else if (element_A === element_B) {
        rowToAdd += element_A; 
      } else {
        // const notIncludedElement = !
        // differentiate rowToAdd from currentRow
      } 
    }
  }
}

/* 
LOGIC
rules: 
if a letter is equal to rhe following, push the same letter. 
if the pair of includes b, r, push p. b p, push r. pr, push b. 
initialize the output as an array with the base. 
*/

// TESTING
decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]


// EXERCISE
// A couple is putting up the Christmas tree. The boy loves Christmas decorations and wants it to be perfectly balanced. He has three types of decorations:

// Colored balls: B
// Small gifts: R
// Pine cones: P
// The Christmas tree is a triangle that must be generated. They already have the base mounted, which would be the first row, and from there they have to place the decorations upwards following a formula.

// Place on top :    P     R     B     P
// If below is  :   P P   B P   R P   B R
// The combinations are also reversed. For example, if below is B P, above is R. But it will also be R if below is P B. Also if below you have repeated the letter, above you use the same letter. For example: if below is B B, above is B.

// With these rules, we could see the tree that we would generate with the base B P R P:

//    R
//   P B
//  R B B
// B P R P
// Write a program that receives the string B P R P and returns an array with the representation of the tree.

// decorateTree('B P R P')
// // [
// // 'R',
// // 'P B',
// // 'R B B',
// // 'B P R P'
// // ]

// decorateTree('B B') // ['B', 'B B']
// Keep in mind that:

// The program always receives the text string that represents the base of the tree.
// The tree must be generated completely, that is, the base and the rows that are generated from it, until the top.
// You have to follow the formula to know which decoration to place in each position.