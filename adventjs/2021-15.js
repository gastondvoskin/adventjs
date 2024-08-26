// export default function checkSledJump(heights) {
//   // ¡No olvides compartir tu solución en redes!
//   return false
// }


export default function checkSledJump(heights) {

  // check that it starts going up and it ends going down
  if (heights[0] > heights[1] || heights[heights.length - 2] < heights[heights.length - 1]) return false; 

  let direction = "up"; 

  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i];
    const nextHeight = heights[i + 1];
    
    if (currentHeight === nextHeight) {
      return false;
    } else if (direction === "up" && currentHeight > nextHeight) {
      direction = "down"; 
    } else if (direction === "down" && currentHeight < nextHeight) {
      return false;
    }
  }

  return true;
}


// TESTING
// console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
// console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
// console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
// console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta

// console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
// console.log(checkSledJump([1, 2, 3])) // false: sólo sube
// console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!



// EXERCISE
// ¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

// Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

// Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones.

// Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

// checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
// checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
// checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
// checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

// checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
// checkSledJump([1, 2, 3]) // false: sólo sube
// checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!
// Lo importante: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo...