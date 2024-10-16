// function selectSleigh(distance, sleighs) {
//   return ''
// }

function selectSleigh(distance, sleighs) {
  const BATTERY = 20; 

  for (let i = sleighs.length - 1; i >= 0; i--) {
    const sleigh = sleighs[i]; 
    const {name, consumption} = sleigh; 

    const totalConsumption = consumption * distance; 
    if (totalConsumption <= BATTERY) {
      return name; 
    }
  }
  return null; 
}


// TESTING
// console.log("check in node", selectSleigh(201, [
//   {name: "worst", consumption: 0.1}, 
//   {name: "middle", consumption: 0.5}, 
//   {name: "best", consumption: 1}, 
// ])); 


// console.log(selectSleigh(20, [ // best 
//   {name: "worst", consumption: 0.1}, 
//   {name: "middle", consumption: 0.5}, 
//   {name: "best", consumption: 1}, 
// ])); 

// console.log(selectSleigh(21, [ // middle
//   {name: "worst", consumption: 0.1}, 
//   {name: "middle", consumption: 0.5}, 
//   {name: "best", consumption: 1}, 
// ])); 

// console.log(selectSleigh(41, [ // worst
//   {name: "worst", consumption: 0.1}, 
//   {name: "middle", consumption: 0.5}, 
//   {name: "best", consumption: 1}, 
// ])); 

// const distance = 30
// const sleighs = [
//   { name: "Gorusuke", consumption: 0.3 },
//   { name: "Madeval", consumption: 0.5 },
//   { name: "Lolivier", consumption: 0.7 },
//   { name: "Hyuuh", consumption: 1 }
// ]
// console.log(selectSleigh(distance, sleighs)) // => "Madeval"



// LOGIC
/* 
const battery = 20 watts; 
consumption is the consumed watts for each distance unit
totalconsumption = distance * consumption; 

eg. 
gorusuke consumes 30 * 0.3 = 9; 
medeval consumes 30 * 0.5 = 15; 
lolivier consumes 30 * 0.7 = 21; 
hyuuh consumes 30 * 1 = 30; 

hyuuh and lolivier can't cover the distance because totalConsumption > battery
the next one (from best to worst) is medeval -> medeval is the best available for this case. 

pseudocode: 
iterate sleighs from last (best) to first (worst). For each calculate its total consumption (distance * consumption). If totalConsumption <= battery return the sleigh's name. After the loop, return null. 
*/


// EXERCISE
// Santa Claus has new electric sleighs but he must control the electricity consumption because he only has a 20W battery.

// We are given an array of sleighs, from worst to best, with their respective consumptions. Each sleigh is an object with two properties: name and consumption.

// The consumption field is a number that represents the amount of watts (W) that consumes the sleigh for each distance unit. The name field is a string that represents the sleigh name.

// Create a program that returns the name of the best sleigh available that allows us to cover the distance.

// const distance = 30
// const sleighs = [
//   { name: "Gorusuke", consumption: 0.3 },
//   { name: "Madeval", consumption: 0.5 },
//   { name: "Lolivier", consumption: 0.7 },
//   { name: "Hyuuh", consumption: 1 }
// ]

// selectSleigh(distance, sleighs) // => "Madeval"

// // Gorusuke consumes 9W to cover 30 distance
// // Madeval consumes 15W to cover 30 distance
// // Lolivier consumes 21W to cover 30 distance
// // Hyuuh consumes 30W to cover 30 distance

// // The best sleigh to cover the distance is Madeval.

// // Gorusuke covers the distance but it's a worse sleigh
// // Lolivier and Hyuuh can't cover the distance with 20W.
// Remember that:

// The battery is always 20W.
// The list of sleighs is ordered from worst to best sleigh.
// You have to return the name of the best sleigh that allows us to cover the distance with the watts we have available.
// If no sleigh can be used, then return null.