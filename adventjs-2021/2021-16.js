// export default function decodeNumber(symbols) {
//   // ¡No olvides compartir tu solución en redes!
//    return false
//  }

export default function decodeNumbers(symbols) {
  const symbolsArr = symbols.split("");
  let numbersArr = [];

  for (let i = 0; i < symbolsArr.length; i++) {
    const currentSymbol = symbolsArr[i];

    if (currentSymbol === ".") {
      numbersArr.push(1);
    } else if (currentSymbol === ",") {
      numbersArr.push(5);
    } else if (currentSymbol === ":") {
      numbersArr.push(10);
    } else if (currentSymbol === ";") {
      numbersArr.push(50);
    } else if (currentSymbol === "!") {
      numbersArr.push(100);
    } else {
      return NaN;
    }
  }

  let result = 0;

  for (let i = 0; i < numbersArr.length; i++) {
    const currentNumber = numbersArr[i];
    const nextNumber = numbersArr[i + 1];
    if (currentNumber >= nextNumber || !nextNumber) {
      result += currentNumber;
    } else if (currentNumber < nextNumber) {
      result -= currentNumber;
    }
  }

  return result;
}

// TESTING
// console.log(decodeNumbers('.,:;!'))
console.log(decodeNumbers("...")); // 3
console.log(decodeNumbers(".,")); // 4 (5 - 1)
console.log(decodeNumbers(",.")); // 6 (5 + 1)
console.log(decodeNumbers(",...")); // 8 (5 + 3)
console.log(decodeNumbers(".........!")); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers(".;")); // 49 (50 - 1)
console.log(decodeNumbers("..,")); // 5 (-1 + 1 + 5)
console.log(decodeNumbers("..,!")); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers(".;!")); // 49 (-1 -50 + 100)
console.log(decodeNumbers("!!!")); // 300
console.log(decodeNumbers(";!")); // 50
console.log(decodeNumbers(";.W")); // NaN

// EXERCISE
// Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

// Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

// Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

// Símbolo       Valor
//   .             1
//   ,             5
//   :             10
//   ;             50
//   !             100
// Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

// Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

// decodeNumbers('...') // 3
// decodeNumbers('.,') // 4 (5 - 1)
// decodeNumbers(',.') // 6 (5 + 1)
// decodeNumbers(',...') // 8 (5 + 3)
// decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
// decodeNumbers('.;') // 49 (50 - 1)
// decodeNumbers('..,') // 5 (-1 + 1 + 5)
// decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
// decodeNumbers('.;!') // 49 (-1 -50 + 100)
// decodeNumbers('!!!') // 300
// decodeNumbers(';!') // 50
// decodeNumbers(';.W') // NaN

// Refactor (did not work)
// const SYMBOLS_VALUES = [
//   {string: ".", value: 1},
//   {string: ",", value: 5},
//   {string: ":", value: 10},
//   {string: ";", value: 50},
//   {string: "!", value: 100},
// ]

// for (let j = 0; j < SYMBOLS_VALUES.length; j++) {
//   const SYMBOL_VALUE = SYMBOLS_VALUES[j];
//   if (currentSymbol === SYMBOL_VALUE.string) {
//     numbersArr.push(SYMBOL_VALUE.value);
//     break;
//   }
//   else if (j === SYMBOLS_VALUES.length - 1) {
//     console.log(j)
//     return NaN
//   }
// }
