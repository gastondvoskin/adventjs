// function execute(code) {
//   // Code here
//   return 0
// }

function execute(code) {
  // const NEXT = ">";
  const INC = "+";
  const DEC = "-";
  const START_LOOP = "[";
  const END_LOOP = "]";
  const START_CONDITION = "{";
  const END_CONDITION = "}";

  let loopIndex = null;
  let value = 0; 
  let codeArray = code.split(""); 

  for (let i = 0; i < codeArray.length; i++) {
    const instruction = codeArray[i];
    
    if (instruction === START_LOOP && value === 0) {
      while (codeArray[i] !== END_LOOP) {
        i++;
      };
    }
    else if (instruction === START_LOOP && value !== 0) {
      loopIndex = i;
    }
    else if (instruction === END_LOOP) {
      i = loopIndex - 1; 
    }
    else if (instruction === START_CONDITION && value === 0) {
      while (codeArray[i] !== END_CONDITION) {
        i++;
      };
    }
    else if (instruction === INC) {
      value++;
    } 
    else if (instruction === DEC) {
      value--;
    }
  };

  return value;
}

// console.log(execute("+[-]++")); 
console.log(execute("++")); 
console.log(execute("--")); 
console.log(execute("+-+")); 
console.log(execute("+>>>>--")); 
console.log(execute("++[-]-")); 
console.log(execute("+{++}")); 
console.log(execute("+-{++}")); 


/* 
EXERCISE
We have already distributed all the gifts! Back at the workshop, preparations for next year are already beginning.

A genius elf is creating a magical programming language 🪄 that will help streamline the delivery of gifts to children in 2025.

Programs always start with the value 0, and the language is a string where each character represents an instruction:

> Moves to the next instruction
+ Increments the current value by 1
- Decrements the current value by 1
[ and ]: Loop. If the current value is 0, jump to the instruction after ]. If it is not 0, go back to the instruction after [
{ and }: Conditional. If the current value is 0, jump to the instruction after }. If it is not 0, continue to the instruction after {
You need to return the value of the program after executing all the instructions.

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5
Note: A conditional can have a loop inside, and a loop can also have a conditional inside. But two loops or two conditionals are never nested.
*/