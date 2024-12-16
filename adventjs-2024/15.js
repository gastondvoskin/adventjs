// function drawTable(data) {
//   // Code here
//   return ''
// }

function drawTable(data) {
  // CAPITALIZE HELPER FUNCTION
  const capitalizeString = (string) => {
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalized;
  };

  // SYMBOLS
  const PLUS = "+";
  const HYPHEN = "-";
  const BREAK = "\n";
  const VERTICAL = "|";
  const SPACE = " ";

  // KEYS
  let [firstKey, secondKey] = Object.keys(data[0]);
  firstKey = String(firstKey);
  secondKey = String(secondKey);

  // MAX LENGTHS (used for columns widths)
  let firstValueMaxLength = firstKey.length;
  let secondValueMaxLength = secondKey.length;

  data.forEach((element) => {
    firstValueMaxLength = Math.max(
      firstValueMaxLength,
      String(element[firstKey]).length
    );
    secondValueMaxLength = Math.max(
      secondValueMaxLength,
      String(element[secondKey]).length
    );
  });

  // FIRST LINE
  let firstLine = PLUS + HYPHEN.repeat(firstValueMaxLength + 2) + PLUS;
  if (secondKey !== "undefined") {
    firstLine += HYPHEN.repeat(secondValueMaxLength + 2) + PLUS;
  }
  // console.log(firstLine);

  // SECOND LINE
  let secondLine =
    VERTICAL +
    SPACE +
    capitalizeString(firstKey) +
    SPACE.repeat(firstValueMaxLength - firstKey.length + 1) +
    VERTICAL;
  if (secondKey !== "undefined") {
    secondLine +=
      SPACE +
      capitalizeString(secondKey) +
      SPACE.repeat(secondValueMaxLength - secondKey.length + 1) +
      VERTICAL;
  }
  // console.log(secondLine);

  // CONTENT
  let content = "";
  data.forEach((element) => {
    let newLine =
      VERTICAL +
      SPACE +
      String(element[firstKey]) +
      SPACE.repeat(firstValueMaxLength - String(element[firstKey]).length + 1) +
      VERTICAL;
    if (secondKey !== "undefined") {
      newLine +=
        SPACE +
        String(element[secondKey]) +
        SPACE.repeat(
          secondValueMaxLength - String(element[secondKey]).length + 1
        ) +
        VERTICAL +
        BREAK;
    } else {
      newLine += BREAK;
    }
    content += newLine;
  });
  // console.log(content);

  // FINAL TABLE
  const table =
    firstLine +
    BREAK +
    secondLine +
    BREAK +
    firstLine +
    BREAK +
    content +
    firstLine;
  // console.log(table);
  return table;
}

// TEST
console.log(drawTable([{ k1: "a", k2: "bbb" }]));
// console.log(drawTable([
//   { k1: "", k2: "" },
// ]));

// console.log(drawTable([
//   { key1: "aaa", key2: "" },
// ]));
// console.log(drawTable([
//   { gift: 'Doll', quantity: 10 },
//   { gift: 'Book', quantity: 5 },
//   { gift: 'Music CD', quantity: 1 }
// ]));
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
/* 
LOGIC
let nameMaxLength = name.length; 
let cityMaxLength = name.length; 
iterate data. compare each element's length to nameMaxLength and cityMaxLength. if it is greater, replace it. 

let table = ""; 
const firstLine = `+${"-".repeat(nameMaxLength + 2)}+${"-".repeat(cityMaxLength + 2)}+`;
const secondLine = `| Name${" ".repeat(nameMaxLength - "name".length + 1))} | City${" ".repeat(cityMaxLength - "city".length + 1))}|\n; 

let content = ""; 
data.forEach(element => {
  const newLine = `| ${element.name}${" ".repeat(nameMaxLength - element.name.length + 1))} | City${" ".repeat(cityMaxLength - element.city.length + 1))}|\n;  
  content += newLine; 
})

table = firstLine + "\n" + secondLine + firstLine + "\n" + content + firstLine;
return table;  

*/

/* 
EXERCISE 
ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on an application for managing gifts and children.

To enhance the presentation, he wants to create a function drawTable that receives an array of objects and converts it into a text table.

The drawn table should represent the object data as follows:

It has a header with the column name.
The column name has the first letter capitalized.
Each row should contain the values of the objects in the corresponding order.
Each value must be left-aligned.
Fields always leave a space on the left.
Fields leave the necessary space on the right to align the box.
Look at the example to see how you should draw the table:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
 */

// data.forEach(element => {
//   // firstValueMaxLength = Math.max(element[firstKey].length, firstValueMaxLength);
//   // secondValueMaxLength = Math.max(element[secondKey].length, secondValueMaxLength);
//   const firstValueLength = element[firstKey].length;
//   if(firstValueLength > firstValueMaxLength) {
//     firstValueMaxLength = firstValueLength;
//   }
//   const secondValueLength = element[firstKey].length;
//   if(secondValueLength > secondValueMaxLength) {
//     secondValueMaxLength = secondValueLength;
//   }
// });
// console.log(firstValueMaxLength);
