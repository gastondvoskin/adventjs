const isPalindrome = (string) => {
  for (let i = 0; i < string.length / 2; i++) {
    const leftCharacter = string[i]; 
    const rightCharacter = string[string.length - 1 - i]; 
    // console.log(leftCharacter, rightCharacter);

    if (leftCharacter !== rightCharacter) {
      return false; 
    }; 
  }; 
  return true; 
};

// TESTING
// console.log(isPalindrome("aba")); // true
// console.log(isPalindrome("abc")); // false
// console.log(isPalindrome("kayak")); // true
// console.log(isPalindrome("aBc1 ded 1cBa")); // true
// console.log(isPalindrome("abcd ded dcbaa"));  // false


// EXERCISE
// 12. Check if a string is a palindrome
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input and returns a Boolean indicating whether the string is a palindrome. Test your function with different strings to ensure it works correctly.