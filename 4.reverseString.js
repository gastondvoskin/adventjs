const reverseString = (string) => {
  const reversedString = string.split("").reverse().join(""); 
  return reversedString; 
}; 

// TESTING
console.log(reverseString("abc 123")); 

// Exercise
// 4. Write a program to reverse a string