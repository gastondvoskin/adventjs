// function distributeWeight(weight) {
//   // Code here
//   return '';
// }

// Helper function calculateRequiredBoxes
const calculateRequiredBoxes = (weight) => {
  let requiredBoxes = {
    "10": 0, 
    "5": 0, 
    "2": 0, 
    "1": 0, 
  }; 

  while (weight > 0) {
    if (weight / 10 >= 1) {
      requiredBoxes[10] = Math.floor(weight / 10); 
      weight = weight % 10; 
    } 
    else if (weight / 5 >= 1) {
      requiredBoxes[5] = Math.floor(weight / 5); 
      weight = weight % 5; 
    } 
    else if (weight / 2 >= 1) {
      requiredBoxes[2] = Math.floor(weight / 2); 
      weight = weight % 2; 
    } 
    else if (weight / 1 >= 1) {
      requiredBoxes[1] = Math.floor(weight / 1); 
      weight = weight % 1; 
    } 
  }; 

  return requiredBoxes;
}
// TEST calculateRequiredBoxes
// console.log(calculateRequiredBoxes(1));
// console.log(calculateRequiredBoxes(2));
// console.log(calculateRequiredBoxes(3));
// console.log(calculateRequiredBoxes(5));
// console.log(calculateRequiredBoxes(11));
// console.log(calculateRequiredBoxes(38));



// MAIN FUCNTION distributeWeight
function distributeWeight(weight) {
  let requiredBoxes = calculateRequiredBoxes(weight); 
  console.log(requiredBoxes); 

  let stackedGiftsArray = []; 

  const boxRepresentations = {
    1: [" _ ", "\n", "|_|"] , // 1 - 2 -> original: "|_|" new: " ___ " expected: "|_|_"   1 - 5 -> original: "|_|" new: " _____ " expected: "|_|___"
    2: [" ___ ", "\n", "|___|"],
    5: [" _____ ", "\n", "|     |", "\n", "|_____|"],
    10: [" _________ ", "\n", "|         |", "\n", "|_________|"]
  }; 

  
  
  for (let i = 0; i < Object.keys(requiredBoxes).length; i++) {
    const number = Object.keys(requiredBoxes)[i];
    
    while (requiredBoxes[number]) {
      // const lastElement = stackedGiftsArray.pop();
      const lastElement = stackedGiftsArray.pop(); 
      console.log(lastElement); 
      if (lastElement) {
        console.log(boxRepresentations[number][0])
        // draw currentBoxRepresentation nd push that instead of ...boxRepresentations[number]
        // ... 
      }
      stackedGiftsArray.push(...boxRepresentations[number]);
      
      // missing step: in the whiles handle resuing top and bottom. 
      console.log(i, stackedGiftsArray)

      requiredBoxes[number]--;    
    };
  };

  console.log(stackedGiftsArray)

  // delete extra "\n"
  stackedGiftsArray.pop(); 

  stackedGiftsString = stackedGiftsArray.join(""); 
  console.log(stackedGiftsString); 
  return stackedGiftsString;
}


// TEST distributeWeight
// console.log(distributeWeight(1));
// console.log(distributeWeight(2));
console.log(distributeWeight(3));
// console.log(distributeWeight(5));
// console.log(distributeWeight(10));
// console.log(distributeWeight(13));
// distributeWeight(6)
// Returns:
//  _
// |_|___
// |     |
// |_____|

/* 
LOGIC
Calculate the required boxes in a helper function.
Draw the boxes in a string.
push the boxes into an array. replace the floor to the roof. 
*/


/* 
EXERCISE
The day to give out gifts is approaching! We need to stack the gifts we will transport on the sleigh 🛷, and for that, we are going to put them in boxes 📦.

The gifts can be placed in 4 different boxes, where each box can hold weights of 1, 2, 5, and 10, represented as follows:

    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|

_________
10: |         |
    |_________|

// JavaScript representation:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
Your mission is, upon receiving the weight of the gifts, to use the fewest boxes possible and also stack them from less weight (top) to more weight (bottom). Always aligned to the left.

Additionally, keep in mind that when stacking them, the lower edge of the box is reused.

distributeWeight(1)
// Returns:
//  _
// |_|

distributeWeight(2)
// Returns:
//  ___
// |___|

distributeWeight(3)
// Returns:
//  _
// |_|_
// |___|

distributeWeight(4)
// Returns:
//  ___
// |___|
// |___|

distributeWeight(5)
// Returns:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Returns:
//  _
// |_|___
// |     |
// |_____|
Note: Be careful with the white spaces! Do not add whitespace to the right of a box unless necessary.
*/


/* 
OLD LOGIC
  // while (requiredBoxes[1]) {
  //   stackedGiftsArray.push(...boxRepresentations[1]);
  //   requiredBoxes[1]--;    
  // };

  // while (requiredBoxes[2]) {
  //   stackedGiftsArray.push(...boxRepresentations[2]);
  //   requiredBoxes[2]--;    
  // }; 

  // while (requiredBoxes[5]) {
  //   stackedGiftsArray.push(...boxRepresentations[5]);
  //   requiredBoxes[5]--;    
  // }; 

  // while (requiredBoxes[10]) {
  //   stackedGiftsArray.push(...boxRepresentations[10]);
  //   requiredBoxes[10]--;    
  // }; 


*/