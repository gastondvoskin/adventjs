// function checkPart(part) {
//   return false
// }

const isPalindrome = (partArr) => {
  for (let i = 0; i < partArr.length / 2; i++) {
    const char_A = partArr[i];
    const char_B = partArr[partArr.length - 1 - i];
    if (char_A !== char_B) return false; 
  }
  return true;
}

// TESTING isPalindrome
// console.log(isPalindrome("abc")); 
// console.log(isPalindrome("aba")); 


function checkPart(part) {
  const partArr = part.split("");
  for (let i = 0; i < partArr.length; i++) {
    let currentArr = [...partArr]; 
    currentArr.splice(i, 1); 
    if (isPalindrome(currentArr)) return true;
  }
  return false;
}

// TESTING checkPart
// console.log(checkPart("a")) // true
// console.log(checkPart("ab")) // true
// console.log(checkPart("abc")) // false
// console.log(checkPart("abcb")) // true
// console.log(checkPart("abca")) // true
// console.log(checkPart("uwu")) // true
// console.log(checkPart("miidim")) // true
// console.log(checkPart("midu")) // false


// LOGIC
/* 
if part is palindrome return true
if part removing part[0] is palindrome return true
if part removing part[2] is palindrome return true
... 
return false
*/

// EXERCISE
// Some electric sleds have broken down and the elves are looking for spare parts to fix them, but they are not sure if the parts they have are valid.

// The spare parts are strings and the mechanic Elfon Masc has said that a spare part is valid if the part can be a palindrome after removing, at most, one character.

// A palindrome is a word or phrase that reads the same from left to right as it does from right to left.

// Our function should return a boolean that indicates whether the spare part is valid or not with that rule:

// checkPart("uwu") // true
// // "uwu" is a palindrome without removing any character

// checkPart("miidim") // true
// // "miidim" can be a palindrome after removing the first "i"

// checkPart("midu") // false
// // "midu" cannot be a palindrome after removing a character