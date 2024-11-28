// function sortToys(toys, positions) {
//   return []
// }

function sortToys(toys, positions) {

  const toysWithPositions = toys.map((toy, index) => {
    console.log(index); 
    const toyWithPosition = {
      toy: toy, 
      position: positions[index],
    }
    return toyWithPosition; 
  })
  // let toysWithPositions = []; 
  // for (let i = 0; i < toys.length; i++) {
  //   const toy = toys[i];
  //   const position = positions[i];
  //   const toyWithPosition = {toy, position}; 
  //   toysWithPositions.push(toyWithPosition); 
  //   // console.log( toy, position, toyWithPosition); 
  // }
  console.log(toysWithPositions); 

  toysWithPositions.sort((a, b) => a.position - b.position); 
  console.log(toysWithPositions); 

  const sortedToys = toysWithPositions.map((element) => element.toy); 
  console.log(sortedToys); 
  return sortedToys; 
}

// TEST
sortToys(["b", "a"], [2,1]) // ["a", "b"] 

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]
console.log(sortToys(toys, positions))
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]
console.log(sortToys(moreToys, morePositions))
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']




/* 
LOGIC 
goal: sort the toys acoording to the positions. 
["b", "a"], [1,0] ---> arrOfObj [{toy: "b", position: 2}, {toy: "a", position: 1}]
arrOfObj.sort((a,b) => a.position - b.position)
finalArr = arrOfObj.map(obj => obj.toy)
*/

// EXERCISE
// The day is coming and Santa Claus has the toy store a mess. Help him to sort the toys in the warehouse so he can find them easier.

// For this, we are given two arrays. The first is an array of toys, and the second is an array of numbers that indicate the position of each toy in the warehouse.

// Te only thing to keep in mind is that the positions may not start at 0, although they will always be consecutive numbers and in ascending order.

// We have to return an array where each toy is in the position it corresponds to.

// const toys = ['ball', 'doll', 'car', 'puzzle']
// const positions = [2, 3, 1, 0]

// sortToys(toys, positions)
// // ['puzzle', 'car', 'ball', 'doll']

// const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
// const morePositions = [8, 6, 5, 7, 9]

// sortToys(moreToys, morePositions)
// // ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
// Things to keep in mind
// There will always be the same number of toys as positions.
// Neither the toys nor the positions are repeated.