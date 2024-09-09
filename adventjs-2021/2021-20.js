// export default function pangram(letter) {
//   // ¡No olvides compartir tu solución en redes!
//    return false
//  }


export default function pangram(letter) {
  const loweredLetter = letter.toLowerCase();
  const alphabet = "abcdefghijklmnñopqrstuvwxyz";
  let charactersOfAlphabet = alphabet.split("");

  for (let i = 0; i < loweredLetter.length; i++) {
    let charOfLetter = loweredLetter[i];
    if (charOfLetter === "á" || charOfLetter === "ä") {charOfLetter = "a"};
    if (charOfLetter === "é" || charOfLetter === "ë") {charOfLetter = "e"};
    if (charOfLetter === "í" || charOfLetter === "ï") {charOfLetter = "i"};
    if (charOfLetter === "ó" || charOfLetter === "ö") {charOfLetter = "o"};
    if (charOfLetter === "ú" || charOfLetter === "ü") {charOfLetter = "u"};

    for (let j = 0; j < charactersOfAlphabet.length; j++) {
      const charOfAlphabet = charactersOfAlphabet[j];
      if (charOfLetter === charOfAlphabet) {
        charactersOfAlphabet.splice(j, 1); 
      }
    }
  }
  return charactersOfAlphabet.length ? false : true;
}



// TESTING
// pangram("AbCäí")
// pangram("bf")
// console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
// console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false



// EXERCISE
// En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

// Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

// Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

// Vamos a ver unos ejemplos de frases:

// pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
// pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

// pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
// pangram('De la a a la z, nos faltan letras') // false
