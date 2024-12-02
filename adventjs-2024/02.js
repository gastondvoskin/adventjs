// function createFrame(names) {
//   // Code here
//   return '*'
// }

function createFrame(names) {
  const namesLengths = names.map((name) => name.length); 
  const maxNameLength = Math.max(...namesLengths); 
  const frameWidth = maxNameLength + 4; 

  const ASTERISK = "*"; 
  const SPACE = " "; 
  const BREAK = "\n"

  const frameTop = `${ASTERISK.repeat(frameWidth)}${BREAK}`; 
  const frameBottom = `${ASTERISK.repeat(frameWidth)}`;

  let framedNames = ""; 
  framedNames += frameTop; 

  names.forEach((name) => {
    const framedName = `${ASTERISK}${SPACE}${name}${SPACE.repeat(maxNameLength - name.length)}${SPACE}${ASTERISK}${BREAK}`; 
    framedNames += framedName;
  })

  framedNames += frameBottom; 
  return framedNames; 
}


// TEST 
// console.log(createFrame(['a', 'bb', 'ccc']))
// // Expected result:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

// console.log(createFrame(['midu', 'madeval', 'educalvolpz']))
// // Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

// console.log(createFrame(['midu']));
// // Expected result:
// ********
// * midu *
// ********


/* 
LOGIC
get the max length of names lengths. 
const firstLine = "*".repeat(maxLength + 4); 
let framedNames = firstLine; 
map names. for each element return the asterisk, the space, the name, the blankSpaces, a space, an asterisk. 
forEach name concatenate to framedNames string. 
add the last line. framedNames += firstLine; 
*/


// EXERCISE
// Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

// Rules:

// Given an array of names, you must create a rectangular frame that contains all of them.
// Each name must be on a line, aligned to the left.
// The frame is built with * and has a border one line thick.
// The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.
// Example of how it works:

// createFrame(['midu', 'madeval', 'educalvolpz'])

// // Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

// createFrame(['midu'])

// // Expected result:
// ********
// * midu *
// ********

// createFrame(['a', 'bb', 'ccc'])

// // Expected result:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

// createFrame(['a', 'bb', 'ccc', 'dddd'])