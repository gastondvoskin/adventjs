const multiplicationTables = (maxNumber) => {

  let output = []; 

  for (let firstNumber = 1; firstNumber <= maxNumber; firstNumber++) {
    output.push([]); 
    for (let secondNumber = 1; secondNumber <= maxNumber; secondNumber++) {
      const multiplication = firstNumber * secondNumber;
      output[firstNumber - 1].push(multiplication); 
    };
  }; 

  return output; 
}; 

// TESTING
// console.log(multiplicationTables(1)); 
// console.log(multiplicationTables(2)); 
// console.log(multiplicationTables(3)); 
// console.log(multiplicationTables(10)); 
// console.log(multiplicationTables(12)); 


// LOGIC
// [
//   [1, 2, 3],  // firstNumber = 1 // condition firstNumber <= maxNumber
// // secondNumber = 1;   secondNumber = 2;    secondNumber = 3
// // mult = firstNumber * secondNumber;    // condition secondNumber <= maxNumber
//   [2, 4, 6] // firstNumber = 2
// ]



// EXERCISE
// 2. Print a table containing multiplication tables
// Let’s start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

// Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?