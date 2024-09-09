// export default function checkIsSameTree(treeA, treeB) {
//   // ¡No olvides compartir tu solución en redes!
//    return false
//  }

export default function checkIsSameTree(treeA, treeB) {
  const { value: valueA , left: leftA, right: rightA } = treeA; 
  const { value: valueB, left: leftB, right: rightB } = treeB; 

  if (!treeA && treeB) return false;
  if (treeA && !treeB) return false;
  if (valueA !== valueB) return false;
  
  let result = valueA === valueB;
  if (leftA && leftB) {
    result = result && checkIsSameTree(leftA, leftB)
  }
  if (rightA && rightB) {
    result = result && checkIsSameTree(rightA, rightB)
  }
  return result;

  // return valueA === valueB && checkIsSameTree(leftA, leftB) && checkIsSameTree(rightA, rightB);
  // return valueA === valueB && checkIsSameTree(leftA) === checkIsSameTree(leftB) && checkIsSameTree(rightA) === checkIsSameTree(rightB);

}

// TESTING
const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

/* 
               1
        
         2           3
    
   null    null  null   null
*/

// console.log(checkIsSameTree(tree, tree)) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

console.log(checkIsSameTree(tree, tree2)) // false
// console.log(checkIsSameTree(tree2, tree2)) // true



// El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵, en cambio, piensa que no. Que todos los árboles de navidad son distintos...

// Vamos a hacer una función que nos diga si dos árboles de navidad son iguales. Para ello, vamos a comparar los árboles que ya creamos en el reto 22.

// Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas. Aquí tienes unos ejemplos:

// const tree = {
//   value: 1,
//   left: { value: 2, left: null, right: null },
//   right: { value: 3, left: null, right: null }
// }

// checkIsSameTree(tree, tree) // true

// const tree2 = {
//   value: 1,
//   left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
//   right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
// }

// checkIsSameTree(tree, tree2) // false
// checkIsSameTree(tree2, tree2) // true
// El cuñado 🦹‍♂️, que se las sabe todas, me ha dicho que tenga cuidado porque el truco del JSON.stringify puede no funcionar... ya que los árboles pueden ser el mismo pero el orden de representación de las ramas izquierda y derecha puede ser inversa...