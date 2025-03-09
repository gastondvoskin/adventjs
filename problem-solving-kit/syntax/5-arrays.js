let names = ["charles", "peter", "laura"]; 

// forEach
names.forEach((name, index) => {
  console.log(name, index)
}); 

// for equivalence
// for (let i = 0; i < names.length; i++) {
//   const name = names[i]; 
//   console.log(name, i); 
// }


// map
const capitalizedNames = names.map((name, index) => name.toUpperCase())
console.log(capitalizedNames); 

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
console.log({names}); 
console.log({removedNames}); 

let splicedNames = [...names]
// names.splice(1, 1, "richard", "mark"); 
// ES2023
// const splicedNames = names.toSpliced(1, 1, "richard", "mark"); 
console.log({splicedNames})


// push-unshift-pop-shift
console.log("---push-unshift-pop-shift---");
names.push("end"); 
names.unshift("start");
names.pop(); 
names.shift(); 


