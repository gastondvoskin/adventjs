// function fixGiftList(received, expected) {
//   // Escribe tu código aquí
//   return {
//     missing: {},
//     extra: {}
//   }
// }

function fixGiftList(received, expected) {
  let result = {
    missing: {},
    extra: {}
  }; 

  while (received.length) {
    const receivedGift = received[0]; 
    const receivedGiftQuantity = received.filter(element => element === receivedGift).length; 
    received = received.filter(element => element !== receivedGift); 
    // console.log(received); 
    // console.log(receivedGiftQuantity); 

    const expectedGiftQuantity = expected.filter(element => element === receivedGift).length; 
    expected = expected.filter(element => element !== receivedGift); 
    // console.log(expected); 
    // console.log(expectedGiftQuantity);

    if (expectedGiftQuantity === 0) {
      result.extra[receivedGift] = receivedGiftQuantity; 
    }
    else if (receivedGiftQuantity > expectedGiftQuantity) {
      result.extra[receivedGift] = receivedGiftQuantity - expectedGiftQuantity; 
    }
    else if (receivedGiftQuantity < expectedGiftQuantity) {
      result.missing[receivedGift] = expectedGiftQuantity - receivedGiftQuantity;   
    }
  }

  while (expected.length/*  && false */) {
    const expectedGift = expected[0]; 
    const expectedGiftQuantity = expected.filter(element => element === expectedGift).length; 
    expected = expected.filter(element => element !== expectedGift); 
    // console.log(expected); 

    result.missing[expectedGift] = expectedGiftQuantity;   
    // console.log(expectedGiftQuantity); 
  }

  // console.log(result);
  return result;
}

// TESTS 
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball', 'ball'])

// fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

/* 
LOGIC 
let result = {
    missing: {},
    extra: {}
  }
iterate received. 
filter received with the first element. count. filter epected with the first element. count. if it does not exist in expected -> result.extra[element] = quatity; if received > expected -> result.extra === received - expected; if received < expected -> result.missing = expected - received; 
after iterating received, iterate expected. if an element is not included in received, count this element and add it to missing. future refactor: instead of checking if it is included, in the first loop, delete the elements. 


let receivedObject = {};  
iterate received. if receivedObject.element -> receivedObject.element++; else -> receivedObject.element = 1; 
----> receivedObject = {puzzle: 1, car: 2, doll: 1};
repat with expected. 
----> receivedObject = {car: 1, puzzle: 1, doll: 1, ball: 2}; 

iterate recei



*/


/* 
EXERCISE
Santa Claus 🎅 is checking the list of gifts he must deliver this Christmas. However, some gifts are missing, others are duplicated, and some have incorrect quantities. He needs your help to solve the problem.

You will receive two arrays:

received: List with the gifts Santa currently has.
expected: List with the gifts Santa should have.
Your task is to write a function that, given received and expected, returns an object with two properties:

missing: An object where the keys are the names of the missing gifts and the values are the quantities that are missing.
extra: An object where the keys are the names of the extra or duplicated gifts and the values are the quantities that are extra.
Keep in mind that:

Gifts may be repeated in both lists.
The gift lists are unordered.
If there are no missing or extra gifts, the corresponding properties (missing or extra) should be empty objects.
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Returns:
// {
//   missing: {},
//   extra: {}
// }
*/