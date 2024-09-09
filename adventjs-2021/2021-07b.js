export default function contains(store, product) {
  const strings = [];
  const stack = [store];

  while (stack.length > 0) {
    const current = stack.pop();
    for (const key in current) {
      if (Object.prototype.hasOwnProperty.call(current, key)) {
        const element = current[key];

        // base case
        if (typeof element === "string") {
          strings.push(element);
        }

        // if the element is an object and not null, push it onto the stack
        if (typeof element === "object" && element !== null) {
          stack.push(element);
        }
      }
    }
  }

  return strings.includes(product);
}

const saveStringsOfObject = (object) => {
  const strings = [];
  const stack = [object];
  console.log(stack.length);

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (const key in current) {
      if (Object.prototype.hasOwnProperty.call(current, key)) {
        const element = current[key];

        // base case
        if (typeof element === "string") {
          strings.push(element);
        }

        // if the element is an object and not null, push it onto the stack
        if (typeof element === "object" && element !== null) {
          stack.push(element);
        }
      }
    }
  }

  return strings;
};

const object1 = {
  key1: "value1",
  key2: {
    subkey1: "value2",
    subkey2: {
      subsubkey1: "value3",
      subsubkey2: 42,
    },
  },
  key3: "value4",
};

console.log(saveStringsOfObject(object1)); // ["value1", "value2", "value3", "value4"]
