myArray = ["Charles", "Peter"]; 


// for
for (let i = 0; i < myArray.length; i++) {}; 


// while
let i = 0; 
while (i < myArray.length) {
  i++; 
}; 


// forEach
myArray.forEach((element, index) => {});


// newted for
for (let i = 0; i < myArray.length - 1; i++) {
  for (let j = i + 1; j < myArray.length; j++) {}
}