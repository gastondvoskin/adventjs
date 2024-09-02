// export default function canReconfigure(from, to) {
//   // ¡No olvides compartir tu solución en redes!
//    return false
//  }

export default function canReconfigure(from, to) {
  if (from.length !== to.length) {
    return false;
  }

  let changes = {
    // c: "j",
    // o: "u",
    // n: "u",
    
    // x: "x",
    // b: "x",
    
    // o: "b",
    // x: "o",
  }

  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i];
    const toChar = to[i];
    // console.log(i)
    console.log(fromChar); 
    console.log(toChar); 
    // console.log(changes[fromChar])
    console.log(changes); 

    console.log(Object.entries(changes))
    console.log(Object.entries(changes).map((el) => el[1]))
    console.log(!Object.entries(changes).map((el) => el[1]).includes(toChar))
    if (!changes[fromChar] && !Object.entries(changes).map((el) => el[1]).includes(toChar)) {
      changes[fromChar] = toChar;
    } else if (changes[fromChar] !== toChar) {
      return false;
    }
  }
  return true; 
}

// TESTING
// console.log(canReconfigure("ab", "cd"));
console.log(canReconfigure("con", "juu"));
// console.log(canReconfigure("aa", "rr"));


// LOGIC
// from and to must have the same length
// iterate from (it is the same to iterate to since they have the same length)
// compare from[i] with to[i]
// no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo)


// EXERCISE
// Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

// Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

// La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

// Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

// Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

// const from = 'BAL'
// const to   = 'LIB'
// const canReconfigure(from, to) // true
// /* la transformación sería así:
// B -> L
// A -> I
// L -> B
// */

// const from = 'CON'
// const to   = 'JUU'
// const canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// C -> J
// O -> U
// N -> FALLO
// */

// const from = 'XBOX'
// const to   = 'XXBO'
// const canReconfigure(from, to) // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

// const from = 'XBOX'
// const to   = 'XOBX'
// const canReconfigure(from, to) // true

// const from = 'MMM'
// const to   = 'MID'
// cons canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// M -> M (BIEN, asigna el mismo carácter a si mismo)
// M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
// M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
// */

// const from = 'AA'
// const to   = 'MID'
// cons canReconfigure(from, to) // false -> no tiene la misma longitud