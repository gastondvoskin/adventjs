const reverseStringByWords = (string) => {
  // A) reversedByWords
  let reversedByWords = string.split(" ").reverse().join(" ");

  // B) reversedInPlace using map
  const reversedInPlace = string
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

  // B) reversedInPlace using for
  // let arrOfWords = string.split(" "); 
  // let reversedWordsInPlace = [];
  // for (let i = 0; i < arrOfWords.length; i++) {
  //   const word = arrOfWords[i];
  //   const reversedWord = word.split("").reverse().join("");
  //   reversedWordsInPlace.push(reversedWord); 
  // }; 
  // const reversedInPlace = reversedWordsInPlace.join(" ");


  // C) Result
  const result = {
    byWords: reversedByWords, 
    inPlace: reversedInPlace, 
  }; 
  console.log(result)

  return result; 
};


// TESTING
reverseStringByWords("abc de fgh");
const expectedOutput = { 
  byWords: 'fgh de abc', 
  inPlace: 'cba ed hgf' 
}; 




// EXERCISE
// 5. Write a program to reverse a string by words. Also show the reverse of each words in place