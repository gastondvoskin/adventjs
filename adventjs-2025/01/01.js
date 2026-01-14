/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
  return gifts.filter((gift) => !gift.includes("#"));
}

console.log(filterGifts(["car", "doll#arm", "ball", "#train"]));
// ['car', 'ball']

console.log(filterGifts(["#broken", "#rusty"]));
// []

console.log(filterGifts([]));
// []
