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
console.log({modifiedPhrase});  


// template literals 
// use case: string interpolation
let userName = "paul"; 
const text = "is a user"; 
const result = `${userName} ${text}!`; 
console.log({result});

// concatenation 
userName += " smith"; 
console.log(userName); 

// multiline string 
const multiLineText = "this is a\nmultiline string"; 
console.log(multiLineText)