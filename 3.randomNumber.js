// const createRandomIntInRange = (min, max) => {
//   const randomIntInRange = Math.random() * (max - min)      + min;
//   return randomIntInRange;
// };

const createRandomIntBetweenMinAndMax = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  const range = maxFloored - minCeiled + 1; // +  1 to include max
  const randomIntInRange = Math.floor(Math.random() * range); // Math.floor to eclude >max
  const randomIntBetweenMinAndMax = randomIntInRange + minCeiled; 
  return randomIntBetweenMinAndMax;
};

// note: the solution returns only integers. 

//TESTING
console.log(createRandomIntBetweenMinAndMax(-4, 6)); 
console.log(createRandomIntBetweenMinAndMax(-4, 6)); 
console.log(createRandomIntBetweenMinAndMax(-4, 6)); 

console.log(createRandomIntBetweenMinAndMax(4.3, 6.2)); 
console.log(createRandomIntBetweenMinAndMax(4, 6)); 
console.log(createRandomIntBetweenMinAndMax(4, 6)); 
console.log(createRandomIntBetweenMinAndMax(4, 6)); 


// EXERCISE 
// 3. Create a function which returns a random number in the given range of values both inclusive