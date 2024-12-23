// function findMissingNumbers(nums) {
//   // Code here
//   return []
// }

function findMissingNumbers(nums) {
  let missingNumbers = []; 

  const maxNumber = Math.max(...nums); 
  console.log(maxNumber); 
  
  for (let i = 1; i <= maxNumber; i++) {
    console.log(i); 
    if (!nums.includes(i)) {
      console.log(i);
      missingNumbers.push(i); 
    }
  }

  return missingNumbers; 
}

console.log(findMissingNumbers([0, 2, 1, 5])); 



/* 
EXERCISE
Keep in mind that:

Numbers may appear more than once and others may be missing
The array always contains positive integers
Counting always starts from 1
findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1])
// [4] 
*/