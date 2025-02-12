// export default function missingReindeer(ids) {
//   // ¡No olvides compartir tu solución en redes!
//   return 0
// }


// solution 1 
export default function missingReindeer(ids) {
  for (let i = 0; i <= ids.length; i++) {
    if (!ids.includes(i)) return i;
  }
}

// solution 2
// export default function missingReindeer(ids) {
//   ids.sort((a, b) => a - b); 
//   if (ids.length === 1 && ids[0] === 1) return 0;
//   for (let i = 0; i < ids.length; i++) {
//     const id = ids[i];
//     if (ids[i] + 1 !== ids[i + 1]) {
//       return ids[i] + 1;
//     }
//     if (i === ids.length) {
//       return i + 1;
//     }
//   }
// }




// TESTING
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([1])) // -> 1 (¡es el último el que falta!)

// LOGIC
/* 
find highest number of ids. 
iterate ids. check if i is included. if it nos included return i. after the loop, return i + 1

*/


// EXERCISE
// ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

// Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

// 👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

// 👎 Lo malo: la lista está desordenada y podría faltar el último...

// Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

// missingReindeer([0, 2, 3]) // -> 1
// missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
// missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
// missingReindeer([3, 0, 1]) // -> 2
// missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
// missingReindeer([0]) // -> 1 (¡es el último el que falta!)
// Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?