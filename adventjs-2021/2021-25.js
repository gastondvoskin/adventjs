// export default function canMouseEat(direction, game) {
//   // ¡Gracias por jugar a AdventJS 2021! 🤗
//   // ¡Nos vemos el año que viene! 👋
//   // Por favor, comparte en las redes qué te ha parecido! 🚀
//   return false
// }

const findMouseAndAsterisks = (game) => {
  let mousePosition = {};
  let asterisksPositions = [];

  // search mouse and asterisks
  for (let rowIndex = 0; rowIndex < game.length; rowIndex++) {
    const row = game[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const symbol = row[colIndex];
      if (symbol === "m") {
        mousePosition.row = rowIndex;
        mousePosition.col = colIndex;
      }
      if (symbol === "*") {
        asterisksPositions.push({
          row: rowIndex,
          col: colIndex,
        });
      }
    }
  }
  return [mousePosition, asterisksPositions]; 
}


export default function canMouseEat(direction, game) {
  const [mousePosition, asterisksPositions] = findMouseAndAsterisks(game); 


  // find the nearest asterisk
  let minDistance; 
  let nearestAsterisksPositions = [];

  for (let i = 0; i < asterisksPositions.length; i++) {
    const asteriskPosition = asterisksPositions[i]; 
    let rowDistance = asteriskPosition.row - mousePosition.row; 
    if (rowDistance < 0) {
      rowDistance = rowDistance * -1;
    }

    let colDistance = asteriskPosition.col - mousePosition.col;
    if (colDistance < 0) {
      colDistance = colDistance * -1;
    }

    const currDistance = rowDistance + colDistance; 

    if (i === 0) {
      nearestAsterisksPositions.push(asteriskPosition); 
      minDistance = currDistance; 
    } 
    else if (currDistance < minDistance) {  /* assuming that there is only one asterisk. if there is more than one, nearestAsteriskPosition should be an array */
      nearestAsterisksPositions = [asteriskPosition]; 
      minDistance = currDistance; 
    } 
    else if (currDistance === minDistance) {
      nearestAsterisksPositions.push(asteriskPosition); 
    }
  }


  // return according to the direction
  if (direction === "up") {
    for (let i = 0; i < nearestAsterisksPositions.length; i++) {
      const currAsteriskPosition = nearestAsterisksPositions[i];
      if (currAsteriskPosition.row < mousePosition.row) {
        return true;
      }
    }
    return false;
  }

  if (direction === "down") {
    for (let i = 0; i < nearestAsterisksPositions.length; i++) {
      const currAsteriskPosition = nearestAsterisksPositions[i];
      if (currAsteriskPosition.row > mousePosition.row) {
        return true;
      }
    }
    return false;
  }


  if (direction === "left") {
    for (let i = 0; i < nearestAsterisksPositions.length; i++) {
      const currAsteriskPosition = nearestAsterisksPositions[i];
      if (currAsteriskPosition.col < mousePosition.col) {
        return true;
      }
    }
    return false;
  }

  if (direction === "right") {
    for (let i = 0; i < nearestAsterisksPositions.length; i++) {
      const currAsteriskPosition = nearestAsterisksPositions[i];
      if (currAsteriskPosition.col > mousePosition.col) {
        return true;
      }
    }
    return false;
  }

}




// TESTING
// const roomTest = [
//   [' ', '*', ' '],
//   [' ', '*', 'm'],
//   [' ', ' ', '*']
// ]

// console.log(canMouseEat('up',    roomTest))   
// console.log(canMouseEat('down',  roomTest))   
// console.log(canMouseEat('right', roomTest))   
// console.log(canMouseEat('left',  roomTest))   


// const room = [
//   [' ', ' ', ' '],
//   [' ', ' ', 'm'],
//   [' ', ' ', '*']
// ]

// console.log(canMouseEat('up',    room))   // false
// console.log(canMouseEat('down',  room))   // true
// console.log(canMouseEat('right', room))   // false
// console.log(canMouseEat('left',  room))   // false

// const room2 = [
//   ["*", " ", " ", " "],
//   [" ", "m", "*", " "],
//   [" ", " ", " ", " "],
//   [" ", " ", " ", "*"],
// ];

// console.log(canMouseEat("up", room2)) // false
// console.log(canMouseEat('down',  room2))   // false
// console.log(canMouseEat('right', room2))   // true
// console.log(canMouseEat('left',  room2))   // false

// DOUBTS
// Is the food alway at one movement?

// LOGIC
/* 
find mouse position 
find asterisks positions
define which asterisk is the nearest to mouse 
compare the indexs of asterisk and mouse. if move === "up" { if i of mouse is greater than i of asterisk, return true; else return false} if move === "down", opposite. if move === "left", compare j. 
*/

// Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

// Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

// Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

// El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

// Un espacio vacío es que no hay nada
// Una m es el ratón
// Un * es la comida
// Vamos a ver unos ejemplos:

// const room = [
//   [' ', ' ', ' '],
//   [' ', ' ', 'm'],
//   [' ', ' ', '*']
// ]

// canMouseEat('up',    room)   // false
// canMouseEat('down',  room)   // true
// canMouseEat('right', room)   // false
// canMouseEat('left',  room)   // false

// const room2 = [
//   ['*', ' ', ' ', ' '],
//   [' ', 'm', '*', ' '],
//   [' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', '*']
// ]

// canMouseEat('up',    room2)   // false
// canMouseEat('down',  room2)   // false
// canMouseEat('right', room2)   // true
// canMouseEat('left',  room2)   // false
// ¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!
