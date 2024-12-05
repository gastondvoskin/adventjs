// function createXmasTree(height, ornament) {
//   /* Code here */
//   return ''
// }

function createXmasTree(height, ornament) {
  const UDNERSCORE = "_"; 
  const BREAK = "\n";
  const HASHTAG = "#"; 

  let tree = ""; 

  let i = 0;
  while (i < height) {
    const underscoresQuantity = height - i - 1; 
    const underscores = UDNERSCORE.repeat(underscoresQuantity); 

    const ornamentsQuantity = i * 2 + 1; 
    const ornaments = ornament.repeat(ornamentsQuantity); 

    tree += underscores + ornaments + underscores + BREAK; 
    
    i++;
  }

  const underscoresQuantityInLastLine = height - 1; 
  const underscoresInLastLine = UDNERSCORE.repeat(underscoresQuantityInLastLine); 

  const lastLine = underscoresInLastLine + HASHTAG + underscoresInLastLine; 
  const penultimateLine = lastLine + BREAK; 

  const trunk = penultimateLine + lastLine;
  tree += trunk;  
  
  return tree; 
}


/* 
LOGIC
const UDNERSCORE = "_"; 
const BREAK = "\n";
const HASHTAG = "#"

let tree = ""; 

const underscoresInFirstLineQuantity = height - 1; 
let undescoresinCurrentLineQuantity = underscoresInFirstLine; 

let i = 0;
while (i < height) {
  const underscores = UDNERSCORE.repeat(height - i - 1); 
  const ornaments = ornament.repeat(i * 2 + 1); 
  tree += underscores + ornaments + underscores + BREAK; 
  i++;
}


tree += UNDERSCORE.repeat(height - 1) + HASHTAG + UNDERSCORE.repeat(height - 1) + BREAK
tree += UNDERSCORE.repeat(height - 1) + HASHTAG + UNDERSCORE.repeat(height - 1);

*/


// TEST
console.log(createXmasTree(1, '+')); 
/*
+
#
#
*/

console.log(createXmasTree(2, '+')); 
/*
_+_
+++
_#_
_#_
*/

console.log(createXmasTree(3, '+'));
/*
__+__                          3 - 0 - 1     
_+++_                          3 - 1 - 1  
+++++       height - i -1      3 - 2 - 1
__#__
__#__
*/

console.log(createXmasTree(6, '@'))
// /*
// _____@_____
// ____@@@____
// ___@@@@@___
// __@@@@@@@__
// _@@@@@@@@@_
// @@@@@@@@@@@
// _____#_____
// _____#_____



// EXERCISE
// It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

// The function should return a string that represents the Christmas tree, constructed as follows:

// The tree is made up of triangles of special characters.
// The spaces on the sides of the tree are represented with underscores _.
// All trees have a trunk of two lines, represented by the # character.
// The tree should always have the same length on each side.
// You must ensure the tree has the correct shape using line breaks \n for each line.
// Examples:

// const tree = createXmasTree(5, '*')
// console.log(tree)
// /*
// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____
// */

// const tree2 = createXmasTree(3, '+')
// console.log(tree2)
// /*
// __+__
// _+++_
// +++++
// __#__
// __#__
// */

// const tree3 = createXmasTree(6, '@')
// console.log(tree3)
// /*
// _____@_____
// ____@@@____
// ___@@@@@___
// __@@@@@@@__
// _@@@@@@@@@_
// @@@@@@@@@@@
// _____#_____
// _____#_____
// */
// Make sure to use line breaks \n at the end of each line, except for the last one.