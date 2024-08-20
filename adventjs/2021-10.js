// export default function getCoins(change) {
//   // ¡No olvides compartir tu solución en redes!
//   return {}
// }

export default function getCoins(change) {
  let finalArray = [0, 0, 0, 0, 0, 0]; 
  const COINS = [1, 2, 5, 10, 20, 50]; 

  while (change > 0) {
    if (COINS[5] <= change) {
      finalArray[5]++; 
      change -= COINS[5]; 
    } 
    else if (COINS[4] <= change) {
      finalArray[4]++; 
      change -= COINS[4]; 
    } 
    else if (COINS[3] <= change) {
      finalArray[3]++; 
      change -= COINS[3]; 
    }
    else if (COINS[2] <= change) {
      finalArray[2]++; 
      change -= COINS[2]; 
    }
    else if (COINS[1] <= change) {
      finalArray[1]++; 
      change -= COINS[1]; 
    }
    else if (COINS[0] <= change) {
      finalArray[0]++; 
      change -= COINS[0]; 
    }
  }

  console.log(finalArray);
  return finalArray; 
}


// LOGIC
/* 
while change > 0 {

}
whenever the change is greater than my coint, I will add this coin to my finalArray
*/

// TESTING
// getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
// getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
// getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
// getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
// getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos



// EXERCISE
// Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

// Las monedas para cambio que puedes usar son estas:

// coins[0] = 1 céntimo
// coins[1] = 2 céntimos
// coins[2] = 5 céntimos
// coins[3] = 10 céntimos
// coins[4] = 20 céntimos
// coins[5] = 50 céntimos
// Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.

// getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
// getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
// getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
// getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
// getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
// La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible. ¡Suerte 👩‍💻👨‍💻!.