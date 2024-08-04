const charsAndVowels = (string) => { 
  const vowels = ["a", "e", "i", "o", "u"];
  
  let stringProperties = {
    numberOfCharacters: string.length,
    numberOfVowels: 0,
  };
  
  string = string.toLowerCase(); 
  
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      stringProperties.numberOfVowels++;
    }
  };

  return stringProperties;
}; 

// TESTING
console.log(charsAndVowels("aAI bC o U"));  // { numberOfCharacters: 10, numberOfVowels: 5 }


// Exercise
// 10. Return the number of vowels in a string
// Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters.