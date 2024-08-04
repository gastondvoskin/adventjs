const printNumbers = (min, max) => {
  if (typeof min !== "number" || typeof max !== "number") {
    console.error("min and max should be numbers"); 
    return; 
  };

  min = Math.ceil(min); 
  if (min % 2 !== 0) {
    min++;
  }; 
  
  for (let i = min; i <= max; i = i + 2) {
    console.log(i); 
  }; 
};

// TESTING
// printNumbers(0, 10); 
// printNumbers(-2, 4); 
// printNumbers(2.1, 9); 
// printNumbers("text", 9); 



// Exercise
// 1. Print all even numbers from 0 – 10
// Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.