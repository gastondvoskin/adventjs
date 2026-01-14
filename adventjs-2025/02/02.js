/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  let result = [];
  giftsToProduce.forEach(({ toy, quantity }) => {
    if (typeof quantity === "number") {
      while (quantity > 0) {
        result.push(toy);
        quantity--;
      }
    }
  });
  return result;
}

console.log(
  manufactureGifts([
    { toy: "car", quantity: 3 },
    { toy: "doll", quantity: 1 },
    { toy: "ball", quantity: 2 },
  ])
);
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

console.log(
  manufactureGifts([
    { toy: "train", quantity: 0 }, // not manufactured
    { toy: "bear", quantity: -2 }, // neither
    { toy: "puzzle", quantity: 1 },
  ])
);
// ['puzzle']

console.log(manufactureGifts([]));
// []
