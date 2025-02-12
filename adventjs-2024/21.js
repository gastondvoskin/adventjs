// function treeHeight(tree) {
//   // Write your code here
//   return 0
// }


function treeHeight(tree) {
  if (tree === null) return 0;
  
  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);

  return Math.max(leftHeight, rightHeight) + 1; 
}


// TESTS
// console.log(treeHeight({
//   value: ".", 
//   left: null, 
//   right: null, 
// }))

// console.log(treeHeight({
//   value: ".", 
//   left: {
//     value: ".", 
//     left: null, 
//     right: null, 
//   }, 
//   right: null, 
// }))

// console.log(treeHeight({
//   value: ".", 
//   left: {
//     value: ".", 
//     left: null, 
//     right: null, 
//   }, 
//   right: {
//     value: ".", 
//     left: null, 
//     right: null, 
//   },  
// }))

// console.log(treeHeight({
//   value: ".", 
//   left: {
//     value: ".", 
//     left: null, 
//     right: null, 
//   }, 
//   right: {
//     value: ".", 
//     left: null, 
//     right: {
//       value: ".", 
//       left: null, 
//       right: {
//         value: ".", 
//         left: null, 
//         right: null, 
//       }, 
//     }, 
//   },  
// }))



/*
EXERCISE 
Santa Claus 🎅 is decorating a magical Christmas tree 🪄, which this year has a special structure in the form of a binary tree. Each node of the tree represents a gift, and Santa wants to know the height of the tree to place the magical star at the top.

Your task is to write a function that calculates the height of a binary tree. The height of a binary tree is defined as the maximum number of levels from the root to a leaf. An empty tree has a height of 0.

// Tree definition
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Graphical representation of the tree:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Function call
treeHeight(tree)
// Returns: 3
*/