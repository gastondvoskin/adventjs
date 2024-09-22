// function getGiftsToRefill(a1, a2, a3) {
//   return []
// }

function getGiftsToRefill(a1, a2, a3) {
  let giftsToRefill = [];

  const a1Set = new Set(a1);
  const a2Set = new Set(a2);
  const a3Set = new Set(a3);
  console.log(a1Set); 

  const a1Arr = Array.from(a1Set); 
  const a2Arr = Array.from(a2Set); 
  const a3Arr = Array.from(a3Set); 
  console.log(a1Arr); 

  a1Arr.forEach(gift => {
    if (!a2Arr.includes(gift) && !a3Arr.includes(gift)) {
      giftsToRefill.push(gift);
    }
  })
  console.log(giftsToRefill);

  a2Arr.forEach(gift => {
    if (!a1Arr.includes(gift) && !a3Arr.includes(gift)) {
      giftsToRefill.push(gift);
    }
  })
  console.log(giftsToRefill);

  a3Arr.forEach(gift => {
    if (!a1Arr.includes(gift) && !a2Arr.includes(gift)) {
      giftsToRefill.push(gift);
    }
  })
  console.log(giftsToRefill);

  return giftsToRefill;
}


// TESTING

// getGiftsToRefill(["bike", "bike", "bi"], ["bike", "c", "d"], ["bike"]); 
const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']
const gifts = getGiftsToRefill(a1, a2, a3) // ['doll', 'pc']


// EXERCISE
// In the Santa Claus stores they are doing inventory. There are three stores (which is represented as an Array each). In each store there are gifts.

// We have been asked to write a program that tells us what gifts we have to buy to replenish our stores now that Christmas is approaching. A gift must be replenished when there is only stock in one of the three stores.

// For example, if we have the following stores:

// const a1 = ['bike', 'car', 'bike', 'bike']
// const a2 = ['car', 'bike', 'doll', 'car']
// const a3 = ['bike', 'pc', 'pc']

// /* The store a1 has "bike" and "car".
// The store a2 has "car", "bike" and "doll".
// The store a3 has "bike" and "pc".

// The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
// */

// const gifts = getGiftsToRefill(a1, a2, a3) // ['doll', 'pc']
// As you can see, the stores can have the same gift repeated several times. But, no matter how many existences there are in a store, if we do not have it in the other two, we must replenish it to have better distribution.

// 📝 To sum up
// Create a function getGiftsToRefill that receives three Array as parameters.
// The function must return an Array with the gifts to be replenished.
// A gift must be replenished when there is only stock in one of the three stores.
// If there is no gift to replenish, the function must return an empty Array.
// If there is more than one gift to replenish, the function must return an Array with all the gifts that need to be replenished.