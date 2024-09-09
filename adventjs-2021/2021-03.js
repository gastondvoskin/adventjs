// https://2021.adventjs.dev/challenges/03

// export default function isValid(letter) {
//   // ¡No dejes que el Grinch gane!
//   return true
//  }

function isValid(letter) {
  let previousCharIsOpen = false; 
  let openParenthesis = false; 

  let splitLetter = letter.split(""); 
  console.log(splitLetter); 

  for (let i = 0; i < splitLetter.length; i++) {
    const character = splitLetter[i];
    if (character === "(") {
      previousCharIsOpen = true; 
      openParenthesis = true; 
    } 
    else if (previousCharIsOpen && character === ")") {
      return false;
    } 
    else if (character === ")") {
      openParenthesis = false;   
    } 
    else if (previousCharIsOpen && character !== ")") {
      previousCharIsOpen = false;
    } 
    else if (openParenthesis && (character === "[" || character === "{")) {
      return false; 
    }
  }; 

  return openParenthesis ? false : true; 
};

// TESTING
// console.log(isValid("() bici va"))

// // true
// console.log(isValid("bici coche (balón) bici coche peluche"));
// console.log(isValid("(muñeca) consola bici"));

// // // false
// console.log(isValid("bici coche (balón bici coche"));
// console.log(isValid("peluche (bici [coche) bici coche balón"));
// console.log(isValid("(peluche {) bici"));
console.log(isValid("() bici"));

// console.log(isValid("(())")); 

// LOGIC
/* 
validate: 
"(" -> if next character is ")" --> return false; if a character is "[" or "{" before ")" appears --> return false
else return true; 
*/


// EXERCISE 
// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

// Ejemplos:

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
      
// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!