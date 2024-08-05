// Solution 1
// const reverseString = (string) => {
//   const reversedString = string.split("").reverse().join(""); 
//   return reversedString; 
// }; 

// Solution 2
const reverseString = (string) => {
  let reversedString = ""; 
  for (let i = string.length - 1; i >= 0; i--) {
    const char = string[i];
    reversedString += char;
  };
  return reversedString; 
}; 

// TESTING
console.log(reverseString("abc 123")); 

// Exercise
// 4. Write a program to reverse a string