/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  for (const [key1, value1] of Object.entries(workshop)) {
    if (value1 === gift) {
      return [key1];
    }
    if (typeof value1 === "object") {
      for (const [key2, value2] of Object.entries(value1)) {
        if (value2 === gift) {
          return [key1, key2];
        }
        if (typeof value2 === "object") {
          for (const [key3, value3] of Object.entries(value2)) {
            if (value3 === gift) {
              return [key1, key2, key3];
            }
          }
        }
      }
    }
  }
  return [];
}

const workshop = {
  storage: {
    shelf: {
      box1: "train",
      box2: "switch",
    },
    box: "car",
  },
  gift: "doll",
};

console.log(findGiftPath(workshop, "car"));

console.log(findGiftPath(workshop, "train"));
// ➜ ['storage', 'shelf', 'box1']

console.log(findGiftPath(workshop, "switch"));
// ➜ ['storage', 'shelf', 'box2']

console.log(findGiftPath(workshop, "car"));
// ➜ ['storage', 'box']

console.log(findGiftPath(workshop, "doll"));
// ➜ ['gift']

console.log(findGiftPath(workshop, "plane"));
// ➜ []
