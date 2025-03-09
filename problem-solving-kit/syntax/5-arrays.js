let names = ["charles", "peter", "laura"]; 

// forEach
names.forEach((name, index) => {
  // console.log(name, index)
}); 

// for equivalence
// for (let i = 0; i < names.length; i++) {
//   const name = names[i]; 
//   console.log(name, i); 
// }


// map
const capitalizedNames = names.map((name, index) => name.toUpperCase())
// console.log(capitalizedNames); 

// for equivalence
// let capitalizedNames2 = [...names]; 
// for (let i = 0; i < names.length; i++) {
//   const name = names[i]; 
//   const capitalizedName = name.toUpperCase(); 
//   capitalizedNames2[i] = capitalizedName; 
// }

// console.log(capitalizedNames2); 

// ----------------------------------------------------

// splice
// params: start, deleteCount?, elements to add
// used to remove, insert or replace elements. It modifies the original array.  
// it returns the removed elements
const removedNames = names.splice(1, 1, "richard", "mark"); 
// console.log({names}); 
// console.log({removedNames}); 

let splicedNames = [...names]
// names.splice(1, 1, "richard", "mark"); 
// ES2023
// const splicedNames = names.toSpliced(1, 1, "richard", "mark"); 
// console.log({splicedNames})


// push-unshift-pop-shift
// console.log("---push-unshift-pop-shift---");
names.push("end"); 
names.unshift("start");
names.pop(); 
names.shift(); 



// ----------------------------------------------------
// filter
// console.log("---filter---");
names = ["charles", "peter", "laura"]; 
const filteredNames = names.filter((element) => element.length <= 5); 
// console.log({filteredNames}); 

// find
const firstNameWithFiveOrLessCharacters = names.find((element) => element.length <= 5); 
// console.log({firstNameWithFiveOrLessCharacters}); 

// includes
const peterIsIncluded = names.includes("peter"); 
// console.log(peterIsIncluded)



// ----------------------------------------------------
// sort
// console.log("---sort---");

// sorting numbers
const numbers = [1, 5, 3];
let sortedNumbers = [...numbers]; 
sortedNumbers.sort((a, b) => a - b); 
// console.log({sortedNumbers}); 
// a - b sorts in ascending order

// ES2023 toSorted
// const sortedNumbers = numbers.toSorted((a, b) => a - b); 

// sorting strings
names = ["charles", "peter", "laura"]; 
let sortedNames = [...names]; 
sortedNames.sort((a, b) => a.localeCompare(b)); 
// console.log(sortedNames);
// console.log("a".localeCompare("a")); // 0 
// console.log("a".localeCompare("b")); // -1
// console.log("b".localeCompare("a")); // 1

// sorting an array of objects
const users = [
  {name: "charles", age: 60}, 
  {name: "peter", age: 50}, 
  {name: "laura", age: 40}, 
]
let sortedUsersByAge = [...users]; 
let sortedUsersByName = [...users]; 
sortedUsersByAge.sort((a, b) => a.age - b.age); 
// console.log({sortedUsersByAge}); 
sortedUsersByName.sort((a, b) => a.name.localeCompare(b.name)); 
// console.log({sortedUsersByName}); 


// ----------------------------------------------------
// spread operator
// expand an array into individual elements
// use case: copy an array (without copying the reference)
const copyOfNames = [...names]; 
console.log(...names)
// use case: merge arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = [...arr1, ...arr2];
// use case: pass elements as arguments
const numbers2 = [10, 20, 30];
console.log(Math.max(...numbers2)); // 30


// ----------------------------------------------------
// destructuring
// unpack values from an array into separate variables
// use case: extract values
const [name1, name2, name3] = names; 
console.log(name1); 
// use case: swap variables without temp variable
let nameA = "charles";
let nameB = "paul";
[nameA, nameB] = [nameB, nameA]; 

