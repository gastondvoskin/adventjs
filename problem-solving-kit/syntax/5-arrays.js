const names = ["charles", "peter"]; 

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
