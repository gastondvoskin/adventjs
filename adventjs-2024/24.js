// function isTreesSynchronized(tree1, tree2) {
//   // Code here
//   return [false, '']
// }

function isTreesSynchronized(tree1, tree2) {
  if (!tree1 && !tree2) return [true, ""]; 
  if (!tree1 || !tree2) return [false, tree1 ? tree1.value : tree2.value];

  const equalValues = tree1.value === tree2.value; 
  if (!equalValues) return [false, tree1.value];

  const leftEqualsRight = isTreesSynchronized(tree1.left, tree2.right);  
  const rightEqualsLeft = isTreesSynchronized(tree1.right, tree2.left); 
  if (!leftEqualsRight[0] || !rightEqualsLeft[0]) return [false, tree1.value];
  
  return [true, tree1.value]; 
}



// TESTS 
console.log(isTreesSynchronized({value: "a"}, {value: "a"}));  
console.log(isTreesSynchronized({value: "a"}, {value: "b"}));  
console.log(isTreesSynchronized({value: "a", left: {value: "b"}}, {value: "a", left: {value: "c"}}));  

/* 
LOGIC
if (tree1.value !== tree2.value) return [false, tree1.value]; 
if (!tree.left && !tree.right) return true; 

const leftEqualsRight = isTreesSynchronized(tree1.left, tree2.right);  
const rightEqualsLeft = isTreesSynchronized(tree1.right, tree2.left); 

return leftEqualsRight && rightEqualsLeft && [true, tree1.value]

*/

// console.log(true && [true, "a"]);
// console.log([true, "a"] && [true, "b"]);
// console.log(undefined.value); 


/* 
EXERCISE
At the North Pole, the elves have two magical binary trees that generate energy 🌲🌲 to keep the Christmas star ⭐️ shining. However, for them to work properly, the trees must be in perfect sync like mirrors 🪞.

Two binary trees are mirrors if:

The roots of both trees have the same value.
Each node of the first tree must have its corresponding node in the opposite position in the second tree.
And the tree is represented with three properties value, left, and right. The latter two display the remaining branches (if any):

const tree = {
  value: '⭐️',
  left: {
    value: '🎅'
    // left: {...}
    // right: { ... }
  },
  right: {
    value: '🎁'
    // left: { ... }
    // right: { ...&nbsp;}
  }
}
Santa needs your help to verify if the trees are synchronized so that the star can keep shining. You must return an array where the first position indicates if the trees are synchronized and the second position returns the value of the root of the first tree.

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' }
  right: { value: '⭐' },
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

//   tree1          tree2
//    🎄              🎄
//   / \             / \
// ⭐   🎅         🎅   ⭐


const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
) // [false, '🎅']
*/