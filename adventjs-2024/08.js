// function drawRace(indices, length) {
//   // Code here
//   return ''
// }

function drawRace(indices, length) {
  const SHIFT = " ";
  const SNOW = "~"; 
  const REINDEER = "r"; 
  const BREAK = "\n"; 
  
  let snowTrack = "";

  indices.forEach((index, i) => {
    let lane = ""; 
    const shiftsQuantity = indices.length - 1 - i;
    
    lane += SHIFT.repeat(shiftsQuantity);
    
    lane += SNOW.repeat(length);

    const indexToSplice = index < 0
      ? index 
      : index + shiftsQuantity

    if (index !== 0) {
      let splitLane = lane.split("");
      splitLane.splice(indexToSplice, 1, REINDEER);
      lane = splitLane.join(""); 
    }

    lane += " " + "/" + (i + 1);
    if (i !== indices.length - 1) {
      lane += BREAK; 
    }; 

    snowTrack += lane; 

  });

  return snowTrack;  
}


// TEST
console.log(drawRace([1, -1], 3));


// console.log(drawRace([0, 5, -3], 10));
// /*
//   ~~~~~~~~~~ /1
//  ~~~~~r~~~~ /2
// ~~~~~~~r~~ /3
// */

// console.log(drawRace([2, -1, 0, 5], 8));
// /*
//    ~~r~~~~~ /1
//   ~~~~~~~r /2
//  ~~~~~~~~ /3
// ~~~~~r~~ /4
// */

// console.log(drawRace([3, 7, -2], 12));
// /*
//   ~~~r~~~~~~~~ /1
//  ~~~~~~~~r~~~ /2
// ~~~~~~~~~~r~ /3
// */


/* 
LOGIC 
let finalString = "";
indices.forEach
  const whiteSpaces = indices.length - 1
  finalString += " ".repeat(whiteSpaces); 

  if (number === 0) {
    finalString += "~".repeat(length)
  }
  else if (number > 0) {
    finalString += "~".repeat(number) + "r" + "~".repeat(length - number - 1)
  } 
  else if (number < 0) {
    finalString += "~".repeat(length + number) + "r" + "~".repeat(- number - 1)
  }
  
  if (index !== indices.length -1) {
    finalString += " " + "/" + (index + 1) + "\n"; 
  }

  return finalString

*/







// EXERCISE
// It's time to select the fastest reindeer for Santa's journeys! 🦌🎄
// Santa Claus has organized exciting reindeer races to determine which ones are in the best shape.

// Your task is to display each reindeer's progress on a snow track in isometric format.

// The information you receive:

// indices: An array of integers representing each reindeer's progress on the track:
// 0: The lane is empty.
// Positive number: The reindeer's current position from the beginning of the track.
// Negative number: The reindeer's current position from the end of the track.
// length: The length of each lane.
// Return a string representing the race track:

// Each lane has exactly length positions filled with snow (~).
// Each reindeer is represented with the letter r.
// Lanes are numbered at the end with /1, /2, etc.
// The view is isometric, so the lower lanes are shifted to the right.
// Examples:

// drawRace([0, 5, -3], 10)
// /*
//   ~~~~~~~~~~ /1
//  ~~~~~r~~~~ /2
// ~~~~~~~r~~ /3
// */

// drawRace([2, -1, 0, 5], 8)
// /*
//    ~~r~~~~~ /1
//   ~~~~~~~r /2
//  ~~~~~~~~ /3
// ~~~~~r~~ /4
// */

// drawRace([3, 7, -2], 12)
// /*
//   ~~~r~~~~~~~~ /1
//  ~~~~~~~~r~~~ /2
// ~~~~~~~~~~r~ /3
// */