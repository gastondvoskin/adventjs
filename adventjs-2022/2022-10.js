// function checkJump(heights) {
//   return false
// }

// function checkJump(heights) {
//   if (heights.length < 3) return false; 
//   const maxValue = Math.max(...heights);
//   const indexOfMaxValue = heights.findIndex((height) => height === maxValue); 
//   console.log(maxValue, indexOfMaxValue)

//   let wentUp = false; 
//   let wentDown = false;  

//   for (let i = 0; i < heights.length - 1; i++) {
//     const currentHeight = heights[i];
//     const nextHeight = heights[i + 1];
//     console.log(i, currentHeight, nextHeight); 
//     if (i < indexOfMaxValue && currentHeight > nextHeight) {
//       return false;
//     }; 
//     if (i >= indexOfMaxValue && currentHeight < nextHeight) {
//       return false;
//     }
//   }
//   return wentUp && wentDown; 
// }

function checkJump(heights) {
  let direction = "initial"; /* initial up down */
  let changedToUp = 0;  
  let changedToDown = 0;  

  for (let i = 0; i < heights.length - 1; i++) {
    const currHeight = heights[i];
    const nextHeight = heights[i + 1];
    console.log(i, currHeight, nextHeight); 

    if (currHeight < nextHeight && (direction === "initial" || direction === "down")) {
      console.log(i); 
      changedToUp++; 
      direction = "up";       
    } 
    else if (currHeight > nextHeight) {
      if (direction === "initial") {
        console.log(i); 
        return false; 
      } 
      else if (direction === "up") {
        console.log(i); 
        changedToDown++; 
        direction = "down";         
      }  
    }
    if (changedToUp > 1 || changedToDown > 1) {
      console.log(i); 
      return false; 
    }
  }
  return changedToUp === 1 && changedToDown === 1;  
}



// TESTING
console.log(checkJump([1, 3, 8, 5, 2])) // true
console.log(checkJump([1, 7, 3, 5])) // false

// console.log(checkJump([])) // false
// console.log(checkJump([1])) // false
// console.log(checkJump([1, 1])) // false
// console.log(checkJump([1, 1, 1])) // false
// console.log(checkJump([1, 2, 1])) // true
// console.log(checkJump([1, 3, 6, 4, 5, 1])) // false


// LOGIC
// check if the first movement os up. then
// The jump is valid if it goes up once and down once. If the sleigh stays at the same height between two positions, the parabola continues.
// let direction = "up"; 
// let directionChanges = 0;
// find the maxHeight. check previos values. check next values.  


// EXERCISE
// function checkJump(heights) {
//   return false
// }

// Create a program that checks if Santa's sleigh makes a parabola jump between cities. You receive a number array that represents the height at which the sleigh is at each moment.

// For the parabola to be correct, the sleigh's trip must be ascending at the beginning and descending at the end. It cannot go up again once it has gone down, nor can it start the trip going down. Let's see some examples:

// const heights = [1, 3, 8, 5, 2]
// checkJump(heights) // true

// /*
// It's `true`.
// The jump goes up-down.

//     8 (highest point)
//    ↗ ↘
//   3   5
//  ↗     ↘
// 1       2
// */

// const heights = [1, 7, 3, 5]
// checkJump(heights) // false

// /*
// It's `false`.
// It goes up-down-up.

//   7   5 
//  ↗ ↘ ↗
// 1   3
// We need the program to return a boolean that indicates whether the sleigh makes a parabola or not.

// Things to keep in mind
// The jump is valid if it goes up once and down once. If the sleigh stays at the same height between two positions, the parabola continues.
// It is not necessary for the starting and ending points to be the same (cities can be at different heights).