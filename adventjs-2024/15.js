// function drawTable(data) {
//   // Code here
//   return ''
// }


function drawTable(data) {

  const capitalizeString = (string) => {
    const capitalized =
      string.charAt(0).toUpperCase()
      + string.slice(1)
    return capitalized; 
  }

  // console.log(capitalizeString("hola"));
  // console.log(capitalizeString(String(1)));
  // console.log(capitalizeString(String(true)));
  
  const PLUS = "+"; 
  const HYPEN = "-"; 
  const BREAK = "\n"; 
  const SEPARATOR = "|"; 
  const SPACE = " "; 
  
  let [firstKey, secondKey] = Object.keys(data[0]);
  firstKey = String(firstKey); 
  secondKey = String(secondKey); 

  // if (!firstKey) throw new Error("aaa"); 
  // if (!secondKey) throw new Error("bbb"); 

  // data.forEach(element => {
  //   if (!element[firstKey]) throw new Error("wrong data lala"); 
  //   if (!element[secondKey]) throw new Error("wrong data lolo"); 
  // })


  let firstElementMaxLength = firstKey.length; 
  let secondElementMaxLength = secondKey.length; 

  data.forEach(element => {
    if(element[firstKey].length > firstElementMaxLength) {
      firstElementMaxLength = element[firstKey].length; 
    }
    if(element[secondKey].length > secondElementMaxLength) {
      secondElementMaxLength = element[secondKey].length; 
    }
  });
  
  const firstLine = 
    PLUS + HYPEN.repeat(firstElementMaxLength + 2) + 
    PLUS + HYPEN.repeat(secondElementMaxLength + 2) + PLUS;  
  // console.log(firstLine); 

  const secondLine = 
    SEPARATOR + SPACE + capitalizeString(firstKey) + 
    SPACE.repeat(firstElementMaxLength - firstKey.length + 1) + 
    SEPARATOR + SPACE + capitalizeString(secondKey) + 
    SPACE.repeat(secondElementMaxLength - secondKey.length + 1) + SEPARATOR; 
  // console.log(secondLine); 
  
  let table = firstLine + BREAK + secondLine + BREAK + firstLine + BREAK; 

  let content = ""; 
  data.forEach(element => {
    // console.log(element[firstKey])
    const newLine = 
      SEPARATOR + SPACE + element[firstKey] +
      SPACE.repeat(firstElementMaxLength - String(element[firstKey]).length + 1) + 
      SEPARATOR + SPACE + element[secondKey] +
      SPACE.repeat(secondElementMaxLength - String(element[secondKey]).length + 1) + SEPARATOR + BREAK
    
    content += newLine;
  })

  // console.log(content)
  table += content + firstLine; 
  // console.log(table); 
  return table; 
}

// TEST
console.log(drawTable([
  { key1: "aaa", key2: "" },
]));
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