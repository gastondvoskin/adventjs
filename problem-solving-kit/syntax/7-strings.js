const phrase = "paul is a user";

// legth
// console.log(phrase.length); 



// iterate a string
// a string is an iterable but it is immutable. To modify a character, first convert the string to an array, then change the character, then convert the array to string. 
for (let i = 0; i < phrase.length; i++) {
  const char = phrase[i];
  // console.log(char); 
}

// split
const splitPhrase = phrase.split(""); 
// console.log(splitPhrase); 

// join
// convert an array to a string
const originalPhrase = splitPhrase.join(""); 
// console.log(originalPhrase)

// combining split - join
const chars = phrase.split(""); 
chars.splice(8, 1, "one"); 
const modifiedPhrase = chars.join(""); 
// console.log({modifiedPhrase});  


// template literals 
// use case: string interpolation
let userName = "paul"; 
const text = "is a user"; 
const result = `${userName} ${text}!`; 
// console.log({result});

// concatenation 
userName += " smith"; 
// console.log(userName); 

// multiline string 
const multiLineText = "this is a\nmultiline string"; 
// console.log(multiLineText); 



// accessing a character
// console.log(userName[0]); 
// console.log(userName.charAt(0)); 



// repeat 
const highlightedUserName = "*".repeat(10) + userName + "*".repeat(10); 
// console.log(highlightedUserName); 

// trim
const textWithSpaces = "       text      ";
console.log(`a ${textWithSpaces} z`); 
console.log(`trimStart: a ${textWithSpaces.trimStart()} z`); 
console.log(`trimEnd: a ${textWithSpaces.trimEnd()} z`); 
console.log(`trim: a ${textWithSpaces.trim()} z`); 


// toLowerCase - toUpperCase 
console.log(userName.toUpperCase()); 
// console.log(userName)
const capitalized = userName[0].toUpperCase() + userName.slice(1); 
// console.log(capitalized); 



// convert to number: Number, parseInt, parseFloat
const PI = "3.14"; 
const PINumber = Number(PI); 
console.log({PINumber}, "typeof PINumber: ", typeof PINumber); 

let width = "30px"; 
let widthNumber = parseInt(width); 
console.log({widthNumber}, "typeof widthNumber: ", typeof widthNumber); 

width = "30.5px"; 
widthNumber = parseFloat(width); 
console.log({widthNumber}, "typeof widthNumber: ", typeof widthNumber); 

// convert to string
const originalPIString = widthNumber.toString(); 
console.log({originalPIString}); 
