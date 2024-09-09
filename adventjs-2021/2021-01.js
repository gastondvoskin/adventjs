// https://2021.adventjs.dev/challenges/01

// export default function contarOvejas(ovejas) {
//   // aquí tu magia
//   return ovejas
// }

function countSheeps(sheeps) {
  let filteredSheeps = []; 
  
  for (let i = 0; i < sheeps.length; i++) {
    const sheep = sheeps[i];
    if (sheep.color === "rojo") {
      let splitName = sheep.name.toLowerCase().split("");
      if (splitName.includes("a") && splitName.includes("n")) {
        filteredSheeps.push(sheep);
      }; 
    };
  }; 

  return filteredSheeps;
};


// TESTING
const sheeps = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const filteredSheeps = countSheeps(sheeps)
console.log(filteredSheeps); 
const expectedOutput = [
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
]



// LOGIC
/* 
let result;
iterate sheeps
if sheep.color === "rojo" && sheep.name.split().toLowerCase().includes("n") && sheep.name.split().toLowerCase().includes("n") {
  result.push(sheep)
}

 */

// EXERCISE 

// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

// Por ejemplo, si tenemos las ovejas:

// const ovejas = [
//   { name: 'Noa', color: 'azul' },
//   { name: 'Euge', color: 'rojo' },
//   { name: 'Navidad', color: 'rojo' },
//   { name: 'Ki Na Ma', color: 'rojo'},
//   { name: 'AAAAAaaaaa', color: 'rojo' },
//   { name: 'Nnnnnnnn', color: 'rojo'}
// ]
// Al ejecutar el método debería devolver lo siguiente:

// const ovejasFiltradas = contarOvejas(ovejas)

// console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
// Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.