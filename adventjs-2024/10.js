// function compile(instructions) {
//   // Code here
//   return 0
// }

function compile(instructions) {
  const MOV = "MOV";
  const INC = "INC";
  const DEC = "DEC";
  const JMP = "JMP";
  
  let values = {}; 
  
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    const [action, x, y] = instruction.split(" "); 
    
    if (action === MOV) {
      const xIsNumber = !isNaN(Number(x)); 
      values[y] = xIsNumber ? Number(x) : Number(values[x]); 
    }
    else if (action === INC) {
      values[x] = !values[x] ? 0 + 1 : values[x] + 1;
    }
    else if (action === DEC) {
      values[x] = !values[x] ? 0 - 1 : values[x] - 1;
    }
    else if (action === JMP && values[x] === 0) {
      i = y - 1;
    }
    console.log(values)
  }

  return values.A; 
}


// TEST 
// console.log(compile(["MOV -1 C", "INC C", "DEC C", "JMP C 0" ]));  
// console.log(compile(["JMP C 0" ]));  
// console.log(compile(["INC A" ])); 
console.log(compile(["MOV 0 A", "INC A"])); 
console.log(compile(["INC A", "INC A", "DEC A", "MOV A B"])); 
console.log(compile(["MOV 5 B", "DEC B", "MOV B A", "INC A"])); 
console.log(compile(["MOV 2 X", "DEC X", "JMP X 1", "MOV X A"])); 


// const instructions = [
//   'MOV -1 C', // copies -1 to register 'C',
//   'INC C', // increments the value of register 'C'
//   'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
//   'MOV C A', // copies register 'C' to register 'A',
//   'INC A', // increments the value of register 'A'
// ]

// console.log(compile(instructions)); // -> 2

//  Step-by-step execution:
//  0: MOV -1 C -> The register C receives the value -1
//  1: INC C    -> The register C becomes 0
//  2: JMP C 1  -> C is 0, jumps to the instruction at index 1
//  1: INC C    -> The register C becomes 1
//  2: JMP C 1  -> C is 1, the instruction is ignored
//  3: MOV C A  -> Copies register C to A. Now A is 1
//  4: INC A    -> The register A becomes 2




/* 
LOGIC

let values = {}; // C: 0 -> C: 1

iterate instructions. 
const [action, x, y] = element.split(" "); 
if (action === "MOV" && x can be parsed to Number) {
  values[y] = x; 
}
else if (action === "MOV" && x cannot be parsed to Number) {
  values[y] = values[x];
}
else if (action === "INC") {
  values[y]++;
}
else if (action === "DEC") {
  values[y]--;
}
  else if (action === "JMP" && x === 0) {
  i = y;
}

return values.A;

*/


// EXERCISE
// The elf programmers are creating a small magical assembler to control the machines in Santa Claus's workshop.

// To assist them, we will implement a simple interpreter that supports the following magical instructions:

// MOV x y: Copies the value x (which can be a number or the content of a register) into register y
// INC x: Increments the content of register x by 1
// DEC x: Decrements the content of register x by 1
// JMP x y: If the value in register x is 0, then jumps to the instruction at index y and continues executing the program from there.
// Expected behavior:
// If an attempt is made to access, increment, or decrement a register that has not been initialized, the default value 0 will be used.
// The jump with JMP is absolute and goes to the exact index indicated by y.
// Upon completion, the program should return the content of register A. If A did not have a defined value, it returns undefined.
// const instructions = [
//   'MOV -1 C', // copies -1 to register 'C',
//   'INC C', // increments the value of register 'C'
//   'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
//   'MOV C A', // copies register 'C' to register 'A',
//   'INC A' // increments the value of register 'A'
// ]

// compile(instructions) // -> 2

// /**
//  Step-by-step execution:
//  0: MOV -1 C -> The register C receives the value -1
//  1: INC C    -> The register C becomes 0
//  2: JMP C 1  -> C is 0, jumps to the instruction at index 1
//  1: INC C    -> The register C becomes 1
//  2: JMP C 1  -> C is 1, the instruction is ignored
//  3: MOV C A  -> Copies register C to A. Now A is 1
//  4: INC A    -> The register A becomes 2
//  */
//  Note: Registers that have not been previously initialized are initialized to 0.
