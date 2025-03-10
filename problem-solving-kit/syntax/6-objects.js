const user = {
  name: "paul",
  age: 30,
}


// dot and bracket notations
// dot notation
console.log(user.name); 
user.age = 31; 

// bracket notation
// case 1: accessing a value by the name of the key. equivalent to dot notation
user["age"] = 32; 
// case 2: accesing a property by a variable which its value is equal to the key. 
const property = "age";
user[property] = 33;  


// destructuring
const {name, age} = user; 
console.log(age); 


// spread
const copyOfUser = {...user}; // creates a shallow copy



//-------------------------------------------------------
// iterating an object
// entries
console.log("-------------------loops-------------------");
console.log("-------------------entries-------------------");
// An object is not an iterable. It must be converted to an array before iterating the keys, the values, or the pairs of key-values. 
const person = {
  name: "paul",
  age: 30,
}
// short path with for...of: Recommended
// Slightly faster than forEach (due to callback function overhead).
// allows break
for (const [key, value] of Object.entries(user)) {
  console.log({key}, {value}); 
}

// with forEach: less common
Object.entries(person).forEach((pair) => {
  const [key, value] = pair; 
  console.log({key}, {value}); 
}) 


// long path: less common
const personKeyValues = Object.entries(person); 
console.log(personKeyValues); // [ [ 'name', 'paul' ], [ 'age', 30 ] ]
for (let i = 0; i < personKeyValues.length; i++) {
  const [key, value] = personKeyValues[i];
  console.log({i}, {key}, {value}); 
  // { i: 0 } { key: 'name' } { value: 'paul' }
  // { i: 1 } { key: 'age' } { value: 30 }
}


