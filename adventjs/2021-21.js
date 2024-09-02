// export default function canCarry(capacity, trip) {
//   // ¡No olvides compartir tu solución en redes!
//    return false
//  }


const sortChanges = (trip) => {
  let unsortedArray = [];

  for (let i = 0; i < trip.length; i++) {
    const subArray = trip[i];
    unsortedArray.push({
      change: subArray[0],
      stop: subArray[1],
    });
    unsortedArray.push({
      change: -subArray[0],
      stop: subArray[2],
    });
  }

  const sortedArray = unsortedArray.sort((a, b) => a.stop - b.stop);
  const sortedChanges = sortedArray.map((object) => object.change);
  return sortedChanges;
};

// TESTING sortChanges
// console.log(sortChanges([[1, 1, 5], [2, 2, 10]])) // true

export default function canCarry(capacity, trip) {
  let sortedChanges = sortChanges(trip);

  let gifts = 0;
  for (let i = 0; i < sortedChanges.length; i++) {
    const change = sortedChanges[i];
    gifts += change;
    if (gifts > capacity) {
      return false;
    }
  }
  return true;
}

// TESTING
// console.log(canCarry(3, [1, 5, 2]));
// console.log(canCarry(3, [[1, 1, 5], [2, 2, 10]])) // true

// LOGIC
// Sort the numbers in an array
// iterate the sortedArray. If the result is greater than the capacity return false. Else return true.

// trip[0] = número de regalos a transportar
// trip[1] = punto de recogida de los regalos
// trip[2] = punto de entrega de los regalos

// canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
// capacity   3
// stops      1 ----- 2 --- 5 ------- 10
// gifts      +1 --- +2 --- -1 ------ -2
// result     1      3      2         0



// EXERCISE
// Se están preparando las rutas para el trineo de Santa 🎅. Tenemos almacenes por todo el mundo para que Santa pueda recoger los regalos y entregarlos en el destino final. 🎁

// Necesitamos saber si las rutas que estamos creando tienen sentido o si Santa va a tener que dejar tirados regalos por el camino. 🥺

// Para eso vamos a crear una función que recibe dos parámetros:

// Un número con la capacidad máxima de regalos en el trineo.
// El viaje que es un array de arrays. Cada subarray contiene tres números que representan:
// trip[0] = número de regalos a transportar
// trip[1] = punto de recogida de los regalos
// trip[2] = punto de entrega de los regalos
// La ruta siempre va de izquierda a derecha (nunca volverá Santa hacia atrás) pero... ¡ten en cuenta que en mitad de la ruta puede tener que recoger regalos cuando ya tiene alguno encima!

// Lo mejor es que veamos un ejemplo:

// canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
// // En el punto 5 recoge 2 regalos...
// // En el punto 6 recoge 3 regalos...
// // Del punto 6 al 8 tendría 5 regalos en total
// // Y su capacidad es 4... así que ¡no podría!

// canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
// capacity   3
// stops      1 ----- 2 --- 5 ------- 10
// gifts      +1 --- +2 --- -1 ------ -2
// result     1      3      2         0
// // En el punto 1 recoge 1 regalo...
// // En el punto 2 recoge 2 regalos...
// // En el punto 5 entrega 1 regalo...
// // En el punto 10 entrega 2 regalos...
// // ¡Sí puede! Nunca superó la carga máxima de 3 regalos

// canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true -> nunca supera el máximo de capacidad
// canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

// canCarry(1, [[2, 3, 8]]) // false -> no podría ni con el primer viaje
// canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
// Lo difícil, e importante, es que entiendas que Santa Claus va entregando y recogiendo regalos y que a veces eso puede hacer que supere la carga máxima.
