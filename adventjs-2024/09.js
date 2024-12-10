// function moveTrain(board, mov) {
//   // Code here
//   return 'none';
// }

function moveTrain(board, mov) {
  const ENGINE = "@"; 
  const FRUIT  = "*"; 
  const SPACE = "."; 
  const CARRIAGE = "o"; 


  // find engine 
  let engine_y;
  let engine_x;

  for (let i = 0; i < board.length; i++) {
    const string = board[i];
    const index_x = string.indexOf(ENGINE); 
    if (index_x !== -1) {
      engine_y = i;
      engine_x = index_x;
      break;
    }
  }
  // console.log(engine_y); 
  // console.log(engine_x); 


  // find element
  let element_y = engine_y; 
  let element_x = engine_x;

  if (mov === "U") {element_y--}
  else if (mov === "D") {element_y++}
  else if (mov === "L") {element_x--}
  else if (mov === "R") {element_x++}
  
  // console.log(element_y); 
  // console.log(element_x); 


  // get element value
  const elementString = board[element_y]; 
  if (!elementString) return "crash"; 
  const element = elementString.charAt(element_x); 
  // console.log(element); 


  // return based on the element value
  // console.log(element === FRUIT); 
  // console.log(element === SPACE); 
  // console.log(element === CARRIAGE); 
  // console.log(element === "");

  if (element === FRUIT) return "eat"
  else if (element === SPACE) return "none"
  else if (element === CARRIAGE || element === "") return "crash"; 
}


// TEST
// console.log(moveTrain([
//   ".....", 
//   "..*..", 
//   "..@..", 
//   "..o..", 
//   "..o..", 
// ], "R")); 

console.log(moveTrain([
  "..@..", 
  "..o..", 
  ".*o..", 
  "..o..", 
  "..o..", 
], "R")); // none 

// console.log(moveTrain([
//   "......", 
//   "......", 
//   ".....*", 
//   "......", 
//   ".....@", 
// ], "U")); // none

// console.log(moveTrain([
//   "...", 
//   "..*", 
//   "..@", 
// ], "U")); 

// console.log("abc".indexOf(""));

/* 
LOGIC
find the coordinates of the engine (index of board, and index of string). 
find the index of the element to compare. if U -> index of board - 1. if D -> index of board + 1. if L -> index of string - 1. if R -> index of string + 1. 
find the element in the index of the element to compare. 
if the element is a carriage or undefined, return "crash". if the element is a fruit, return "eat". if the element is space, return "none". 
*/


/* 
EXERCISE
The elves are playing with a magical train 🚂 that carries gifts. This train moves on a board represented by an array of strings.

The train consists of an engine (@), followed by its carriages (o), and must collect magical fruits (*) which serve as fuel. The movement of the train follows these rules:

You will receive two parameters board and mov.

board is an array of strings that represents the board:

@ is the train's engine.
o are the train's carriages.
* is a magical fruit.
· are empty spaces.
mov is a string that indicates the next movement of the train from the train's head @:

'L': left
'R': right
'U': up
'D': down.
With this information, you must return a string:

'crash': If the train crashes into the edges of the board or itself.
'eat': If the train collects a magical fruit (*).
'none': If it moves without crashing or collecting any magical fruit.
Example:

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right 
*/