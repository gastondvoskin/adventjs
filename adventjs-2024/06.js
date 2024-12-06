// function inBox(box) {
//   return false
// }

function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const string = box[i];
    const arrayFromString = string.split(""); 
    // console.log(arrayFromString);
    for (let j = 1; j < arrayFromString.length - 1; j++) {
      const character = arrayFromString[j];
      if (character === "*") return true;
    }
  }
  return false; 
}

inBox([
  "###",
  "#*#",
  "###",
])

/* 
LOGIC
Iterate box form element 1 (not 0) until penultimate (not last). convert string into an array, iterate it from 1 to penultimate. if charracter === "*" return true. after the iterations return false. 
*/



// We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

// The box has a present (*) and counts as "inside the box" if:

// It is completely surrounded by # on the box's edges.
// The * is not on the box's edges.
// Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.

// Examples:

// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) // ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) // ➞ true

// inBox([
//   "#####",
//   "#   #",
//   "#  #*",
//   "#####"
// ]) // ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) // ➞ false