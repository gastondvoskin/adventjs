// function getCompleted(part, total) {
//   return '1/1'
// }

const hhmmssStringToSeconds = (hhmmss) => {
  const [hh, mm, ss] = hhmmss.split(":"); 
  const seconds = ss*1 + mm*60 + hh*60*60;
  return seconds; 
}
// TESTING hhmmssStringToSeconds
// console.log(hhmmssStringToSeconds("00:00:00"));
// console.log(hhmmssStringToSeconds("00:00:01"));
// console.log(hhmmssStringToSeconds("00:01:00"));
// console.log(hhmmssStringToSeconds("00:01:60"));
// console.log(hhmmssStringToSeconds("01:00:00"));

const reduceFraction = (numerator, denominator) => {

  for (let i = 2; i <= denominator; i++) {
    if (numerator % i === 0 && denominator % i === 0 ) {
      numerator /= i;
      denominator /= i;
      i--; 
      // console.log(numerator, denominator); 
    }
  }
  return [numerator, denominator]; 
}
// TESTING reduceFraction
// reduceFraction(1, 2); 
// reduceFraction(2, 4); 
// reduceFraction(4, 16);
// reduceFraction(6, 14);



function getCompleted(part, total) {
  const partSeconds = hhmmssStringToSeconds(part); 
  const totalSeconds = hhmmssStringToSeconds(total); 
  console.log(partSeconds, totalSeconds); 
  const reducedFraction = reduceFraction(partSeconds, totalSeconds); 
  console.log(reducedFraction); 
  const [numerator, denominator] = reducedFraction;  
  const finalString = `${numerator}/${denominator}`; 
  console.log(finalString); 
  return finalString;
}
// TESTING getCompleted
// getCompleted('00:00:01', '00:00:02') // '1/3'
// getCompleted('00:00:02', '00:00:04') // '1/3'
// console.log(getCompleted('00:00:01', '00:00:01')) // '1/3'
// console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
// console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
// console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
// console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
// console.log(getCompleted('01:10:10', '03:30:30')) // '1/3'
// console.log(getCompleted('03:30:30', '05:50:50')) // '3/5

/* LOGIC
Calculate the seconds of part
Calculate the seconds of total
Reduce part / total
*/

// Santa Claus is a bit worried because the preparations are taking a long time. He has got a Scrum certification and has decided to use the Scrum methodology to organize the work of his elves.

// The elfs tell him the expected duration of the tasks with a string with the format hh:mm:ss and in the same format how long they have been working on it.

// But Santa Claus does not get quickly if there is too much or too little left to finish, so he has asked us to make a program that tells us what portion of the task has already been completed.

// For example, if the task lasts 03:00:00 and they have been working for 01:00:00 then they have already completed 1/3 of the task. In code:

// getCompleted('01:00:00', '03:00:00') // '1/3'
// getCompleted('02:00:00', '04:00:00') // '1/2'
// getCompleted('01:00:00', '01:00:00') // '1/1'
// getCompleted('00:10:00', '01:00:00') // '1/6'
// getCompleted('01:10:10', '03:30:30') // '1/3'
// getCompleted('03:30:30', '05:50:50') // '3/5
// Note:

// The time format is hh:mm:ss.
// The output format is a string a/b where a is the portion of the task that has already been completed and b is the portion of the task that is left to complete.
// The portion is always shown with the smallest fraction possible. (for example, 2/4 will never be shown because it can be represented as 1/2).
// If the task has already been completed, the fraction would be 1/1.
// No elf has been mistreated during the execution of this challenge nor have they had to use Scrum for real.