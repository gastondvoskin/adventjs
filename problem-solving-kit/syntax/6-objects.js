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