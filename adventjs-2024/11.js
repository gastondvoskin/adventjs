// function decodeFilename(filename) {
//   // Code here
//   return ''
// }

function decodeFilename(filename) {
  const indexOfFirstUnderscore = filename.indexOf("_"); 
  let indexOfLasttDot; 

  for (let i = filename.length - 1; i >= 0; i--) {
    const character = filename[i];
    if (character === ".") {
      indexOfLasttDot = i; 
      break;
    }
  }  
  
  const originalFileName = filename.slice(
    indexOfFirstUnderscore + 1, 
    indexOfLasttDot
  ); 

  return originalFileName; 
}

// TEST 
decodeFilename('1_a.extension.extra')
decodeFilename("1_a1-_bc.png.extra")

// decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
// ➞ "sleighDesign.png"

// decodeFilename('42_chimney_dimensions.pdf.hack2023')
// ➞ "chimney_dimensions.pdf"

// decodeFilename('987654321_elf-roster.csv.tempfile')
// ➞ "elf-roster.csv"

// decodeFilename('987654321__-1elf-ro__-1ster.csv.tempfile') 

/* 
LOGIC
find the index of first underscore
find the index of first dot.

delete the string until the first underscore
delete the string from second dot.  
*/

/* 
EXERCISE
The Grinch has hacked 🏴‍☠️ Santa Claus's workshop systems and has encoded the names of all the important files. Now the elves can't find the original files and they need your help to decipher the names.

Each file follows this format:

It starts with a number (can contain any number of digits).
Then has an underscore _.
Continues with a file name and its extension.
Ends with an extra extension at the end (which we don't need).
Keep in mind that the file names may contain letters (a-z, A-Z), numbers (0-9), other underscores (_), and hyphens (-).

Your task is to implement a function that receives a string with the name of an encoded file and returns only the important part: the file name and its extension.

Examples:
decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
// ➞ "sleighDesign.png"

decodeFilename('42_chimney_dimensions.pdf.hack2023')
// ➞ "chimney_dimensions.pdf"

decodeFilename('987654321_elf-roster.csv.tempfile')
// ➞ "elf-roster.csv"
*/