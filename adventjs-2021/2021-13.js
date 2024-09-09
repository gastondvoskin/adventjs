// export default function wrapGifts(gifts) {
//   // ¡No olvides compartir tu solución en redes!
//   return []
// }

export default function wrapGifts(gifts) {
  if (!gifts.length) return [];

  let result = [];

  // const element = "📷";
  // console.log(element.length);
  const numberOfAsterisksInFirstRow = 2 + gifts[0].length;
  const asterisksInFirstRow = "*".repeat(numberOfAsterisksInFirstRow);
  result.push(asterisksInFirstRow);

  for (let i = 0; i < gifts.length; i++) {
    const currGift = gifts[i];
    result.push("*" + currGift + "*");
  }

  result.push(asterisksInFirstRow);
  return result;
}

// TESTING
console.log(wrapGifts([]));
console.log(wrapGifts(["📷", "⚽️"]));
console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
console.log(wrapGifts(["📷"]));



// EXERCISE
// ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

// Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

// Sólo tienes que tener en cuenta unas cosillas ✌️:

// Si el array está vacío, devuelve un array vacío
// Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
// Por suerte, cada posición del array siempre tiene la misma longitud...
// wrapGifts(["📷", "⚽️"])
// /* Resultado:
// [ '****',
//   '*📷*',
//   '*⚽️*',
//   '****'
// ]
// */

// wrapGifts(["🏈🎸", "🎮🧸"])
// /* Resultado:
// [ '******',
//   '*🏈🎸*',
//   '*🎮🧸*',
//   '******'
// ]
// */

// wrapGifts(["📷"])
// /* Resultado:
// [ '****',
//   '*📷*',
//   '****'
// ]
// */
