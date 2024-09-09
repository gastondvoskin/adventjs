// export default function createXmasTree(height) {
//   // ¡Y no olvides también poner los turrones!
//   return ''
// }

export default function createXmasTree(height) {
  if (height < 1 || height > 100 || height % 1 !== 0) {
    throw new Error("height must be an integer between 1 and 100");
  }

  let result = "";

  for (let row = 1; row <= height; row++) {
    for (let col = 1; col < height * 2; col++) {
      if (col < height - row + 1) {
        result += "_";
      } else if (col < height + row) {
        result += "*";
      } else if (col < height * 2) {
        result += "_";
      }
      if (col === height * 2 - 1) {
        result += "\n";
      }
    }
  }

  for (let row = height + 1; row <= height + 2; row++) {
    for (let col = 1; col < height * 2; col++) {
      if (row === height + 1 || row === height + 2) {
        if (col < height) {
          result += "_";
        } else if (col === height) {
          result += "#";
          if (height === 1 && row === height + 1) {
            result += "\n";
          }
        } else if (col < height * 2 - 1) {
          result += "_";
        } else if (col === height * 2 - 1) {
          result += "_";
          if (row === height + 1) {
            result += "\n";
          }
        }
      }
    }
  }

  console.log(result);
  return result;
};

/* 
LOGIC
// col <  ->> "_";      col < height - row + 1
// col <  ->> "*";      col < height + row
// col <  ->> "_";      col < height * 2 - 1
// col ===  ->> "_\n";  col === height * 2 -1

*/

// TESTING
createXmasTree(20);

/* 
EXERCISE
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/
