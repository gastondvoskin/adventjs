// https://2021.adventjs.dev/challenges/01
// export default function listGifts(letter) {
//   // ¡Tú puedes!
//   return {}
//  }

export default function listGifts(letter) {
  let processedGifts = {}; 
  const allGifts = letter.split(" "); 
  console.log(allGifts)

  for (let i = 0; i < allGifts.length; i++) {
    const currentGift = allGifts[i];

    if (currentGift[0] !== "_" && currentGift !== "") {
      if (processedGifts[currentGift]) {
        processedGifts[currentGift]++;
      } else {
        processedGifts[currentGift] = 1;
      };
    };
  };

  return processedGifts; 
}; 


// TESTING
const letter = 'bici coche     balón _playstation bici coche peluche'; 
const gifts = listGifts(letter); 
console.log(gifts); 
const expectedOutput = {
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}; 


// LOGIC
/* 
const letter = 'bici coche balón _playstation bici coche peluche'
let gifts = {}; 
splitLetter = letter.split(" ") (it deletes white spaces)
iterate splitLetter 
if letter[0] === "_" {}
else {
  iterate gifts
  if (it exists in the object) {gifts[letter]++} 
  else {figts[letter] = 1}
}
*/

// EXERCISE 
// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

// const carta = 'bici coche balón _playstation bici coche peluche'
// Al ejecutar el método debería devolver lo siguiente:

// const regalos = listGifts(carta)

// console.log(regalos)
// /*
// {
//   bici: 2,
//   coche: 2,
//   balón: 1,
//   peluche: 1
// }
// */
// Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!