// function organizeInventory(inventory) {
//   // Code here
//   return {}
// }

function organizeInventory(inventory) {
  // step 0
  let organizedInventory = {}; 
  
  // organizedInventory = {edu: {a: 1}};  /* after adding the first object (just to debug) */

  for (let i = 0; i < inventory.length; i++) {
    const toy = inventory[i];
    const { name, quantity, category } = toy; 
    console.log(name, quantity, category);
    
    // conditions
    if (!organizedInventory[category]) {
      console.log(i); 
      organizedInventory[category] = {[name]: quantity}; 
    }
    else if (!organizedInventory[category][name]) {
      console.log(i); 
      organizedInventory[category][name] = quantity; 
    }
    else {
      console.log(i); 
      organizedInventory[category][name] += quantity; 
    }
  }
  
  console.log(organizedInventory); 
  return organizedInventory; 
}

// TEST
console.log(organizeInventory([])); // {}

console.log(organizeInventory([{ name: 'a', quantity: 1, category: 'edu' }]));

console.log(organizeInventory([
  { name: 'a', quantity: 1, category: 'edu' }, 
  { name: 'b', quantity: 1, category: 'edu' }, 
])) // {edu: {a: 1, b: 1}}

console.log(organizeInventory([
  { name: 'a', quantity: 1, category: 'edu' }, 
  { name: 'a', quantity: 1, category: 'edu' }, 
])) // {edu: {a: 2}}



const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]
console.log(organizeInventory(inventory));
// Expected result:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]
console.log(organizeInventory(inventory2));
// Expected result:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// } 





/* 
LOGIC
group by category, then group by name. If it does not exist add it to the final object. 
let organizedInventory = {}; 
iterate inventory. 
option 1. category does not exist yet. -> add the category and the name
option 2. category does exist and name does not exist -> add the name into the existing category
option 3. category does exist and name does exist -> sum into the name into the category
*/


/* 
EXERCISE
Santa Claus 🎅 is checking his workshop inventory to prepare gift delivery. The elves have recorded the toys in an array of objects, but the information is a bit disorganized. You need to help Santa organize the inventory.

You will receive an array of objects, where each object represents a toy and has the properties:

name: the name of the toy (string).
quantity: the available quantity of that toy (integer).
category: the category to which the toy belongs (string).
Write a function that processes this array and returns an object that organizes the toys as follows:

The keys of the object will be the categories of toys.
The values will be objects that have the toy names as keys and the total quantities of each toy in that category as values.
If there are toys with the same name in the same category, you must sum their quantities.
If the array is empty, the function should return an empty object {}.
const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventary)

// Expected result:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

organizeInventory(inventary2)

// Expected result:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// } 
*/