const isInteger = (number) => {
  if (number % 1 === 0) {
    return true;
  } else {
    return false; 
  }
}; 

// TESTING
// console.log(isInteger(0)); 
// console.log(isInteger(3)); 
// console.log(isInteger(3.2)); 
// console.log(isInteger(-2)); 
// console.log(isInteger(-2.1)); 

// EXERCISE
// 2. Write a function which returns true if given value of number is an integer without using any inbuilt functions