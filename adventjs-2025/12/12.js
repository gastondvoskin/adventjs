/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  let points1 = 3; 
  let points2 = 3; 

  for (let i = 0; i < elf1.length; i++) {
    const move1 = elf1[i];
    const move2 = elf2[i];
    
    if ([move1, move2].includes("A") && [move1, move2].includes("B")) {continue};
    
    if (move1 === "A") {points2 = points2 - 1};
    if (move1 === "F") {points2 = points2 - 2};
    if (move2 === "A") {points1 = points1 - 1};
    if (move2 === "F") {points1 = points1 - 2};
    
    console.log("Hello")
    if (points1 <= 0 || points2 <= 0) {break};
    console.log({i}, {points1}, {points2})
  }
  
  if (points1 === points2) return 0;
  if (points1 > points2) return 1;
  if (points1 < points2) return 2;
}

console.log(elfBattle("A", "A"))
console.log(elfBattle("AAFFFBBB", "ABBBBFF"))

/* 
LOGIC 

evaluateWinner = (pointsOne, pointsTwo) => {
  if pointsOne === pointsTwo return 0;
  if pointsOne > pointsTwo return 1;
  if pointsOne < pointsTwo return 2;
}

let winner = "";

let pointsOne = 0; 
let pointsTwo = 0; 

iterate elf1 comparing each move 
if [moveOne, moveTwo].includes("A", "B") continue

if moveOne === "A" {pointsTwo = pointsTwo - 1}
if moveOne === "F" {pointsTwo = pointsTwo - 2}
if moveTwo === "A" {pointsOne = pointsOne - 1}
if moveTwo === "F" {pointsOne = pointsOne - 2}

if pointsOne =< 0 || pointsTwo =< 0 {
  winner = evaluateWinner(pointsOne, pointsTwo);
  break;
}

after iteration: winner = evaluateWinner(pointsOne, pointsTwo)

return winner; 
*/