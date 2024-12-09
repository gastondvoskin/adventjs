// function fixPackages(packages) {
//   // Code here
//   return ''
// }

function fixPackages(packages) {
  // console.log("hello"); 
  let packagesArray = packages.split(""); 
  // console.log(packagesArray);  
  
  while (packagesArray.includes("(")) {
   
    let indexOfFirstClosingParentheses = ""; 
    let indexOfCorrespondingOpeningParentheses = ""; 
  
    indexOfFirstClosingParentheses = packagesArray.indexOf(")"); 
    // console.log(indexOfFirstClosingParentheses); 
  
    for (let i = indexOfFirstClosingParentheses; i >= 0; i--) {
      const character = packagesArray[i];
      // console.log(character); 
      // console.log(indexOfFirstClosingParentheses); 
      if (character === "(") {
        // console.log("here", i)
        indexOfCorrespondingOpeningParentheses = i;
        break;
      }
    }
    // console.log(indexOfCorrespondingOpeningParentheses);
    
    let cahractersToReverse = []; 
    
    for (let i = indexOfCorrespondingOpeningParentheses + 1; 
      i < indexOfFirstClosingParentheses; i++) {
      const character = packagesArray[i];
      // console.log(character); 
      cahractersToReverse.push(character); 
    }
    const reversedCharacters = cahractersToReverse.reverse(); 
    // console.log(reversedCharacters); 
  
    // console.log(packagesArray); 
    const elementsToDelete = 
      indexOfFirstClosingParentheses - indexOfCorrespondingOpeningParentheses + 1; 
    packagesArray.splice(
      indexOfCorrespondingOpeningParentheses, 
      elementsToDelete, 
      ...reversedCharacters
    ); 
    // console.log(packagesArray); 
  }

  const packagesString = packagesArray.join(""); 
  // console.log(packagesString); 
  return packagesString; 
}
  
console.log(fixPackages("a(b(cd(efg)))h"));


// TEST
// console.log(fixPackages("a(bcd)e"));
// console.log(fixPackages("ab(c)d"));
// console.log(fixPackages("abc(de)fghi"));
// console.log(fixPackages("a(b(c((12))))d"));


//                 (efg)   
//                  gfe
//              (cd gfe)
//                efgdc
//             (b efgdc)
//              cdgfeb
//            a cdgfeb    h
//  expected "acdgfebh"


/* 
LOGIC

NEW LOGIC
find the index of the innermost closingParenthes. 
find the index of the innermost openingParentheses. 
reverse the innermost substring and delete the parenthesis. 
loop until there are no more closingParentheses. 
return the resulting string.  


OLD LOGIC
let finalString = ""; 
let openParentherses = 0; 
let currentStringToConcatenate = ""; 

convert packages into a string andi terate it with a forEach. 



if character === "(" {
  openParentheses++;
}    

if character === ")" {
  currentStringToConcatenate.reverse();  
  openParentheses--;  
  if(openParentheses === 0) { 
    finalString += currentStringToConcatenate; 
    currentStringToConcatenate = ""; 
  }
}  

if (character !== "(" && character !== ")" && openParentheses === 0) {
  finalString += character; 
}

if (character !== "(" && character !== ")" && openParentheses > 0) {
  currentStringToConcatenate += character; 
}

this logics still does not take account of from where currentStringToConcatenate should make each reverse 

*/





/* 
EXERCISE
The grinch 👹 has passed through Santa Claus's workshop! And what a mess he has made. He has changed the order of some packages, so shipments cannot be made.

Luckily, the elf Pheralb has detected the pattern the grinch followed to jumble them. He has written the rules that we must follow to reorder the packages. The instructions are as follows:

You will receive a string containing letters and parentheses.
Every time you find a pair of parentheses, you need to reverse the content within them.
If there are nested parentheses, solve the innermost ones first.
Return the resulting string with parentheses removed, but with the content correctly reversed.
He left us some examples:

fixPackages('a(cb)de')
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb" 
*/