// function printTable(gifts) {
//   return ''
// }

const getMaxLength = (gifts, element) => {
  // console.log(gifts); 
  let maxLength = element.length; 
  // console.log(maxLength); 

  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i];
    const currentElement = `${gift[element]}`;
    // console.log(currentElement); 
    const currentElementLength = currentElement.length;
    if (currentElementLength > maxLength) {
      maxLength = currentElementLength
    }
    // console.log(maxLength); 
  }
  return maxLength;
}
// TEST getMaxLength
// console.log(getMaxLength([{ name: '123456', quantity: 1 }, { name: '123', quantity: 1 }], "name")); 
// console.log(getMaxLength([{ name: '12345', quantity: 12345678 }, { name: '12345', quantity: 123456789 }], "quantity")); 



function printTable(gifts) {
  const namesMaxLength = getMaxLength(gifts, "name"); 
  // console.log(namesMaxLength); 
  const quantitiesMaxLength = getMaxLength(gifts, "quantity"); 
  // console.log(quantitiesMaxLength); 
  let drawnTable = ""; 
  const tableLength = 2 + namesMaxLength + 3 + quantitiesMaxLength + 2; 
  // console.log(tableLength); 

  // FIRST LINE: ++++
  drawnTable += "+".repeat(tableLength); 
  drawnTable += "\n"; 
  // console.log(drawnTable); 

  // IMPLEMENT SECNDS LINE: GIFT AND WUANTITY LINE
  // ...

  // THIRD LINE: ---
  drawnTable += `| ${"-".repeat(namesMaxLength)} | ${"-".repeat(quantitiesMaxLength)}}`; 
  console.log(drawnTable); 
  
  // ITERATE GIFTS AND IMPLEMENT CALCULATING THE MISSING SPACE
  // ... 

  // LAST LINE
  drawnTable += "*".repeat(tableLength); 
  // console.log(drawnTable); 
  return drawnTable; 
}

// TEST printTable
printTable([
  { name: 'Game', quantity: 1 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 123456789 }
])


/* 
LOGIC
find the name with longest length, also comparing the strinig "gift". 
find the max quantity, convert it to string, compare it with "quantity". 
initialize finalString. 
write line 1. 
concatanate line 1 to finalString. .repeat \n
create a function to write line 2. currentString += `| ${name}${spacesAfterName}| ${quantity}${spacesAfterQuantity}| \n`
write line 3. 
iterate the gifts using the function inside. 
write last line as line 1 but withouth the line break. 
*/


// EXERCISE
/* 
There are too many letters from children asking for gifts and it is very difficult that we can inventory all of them. That's why we have decided to create a program that draws us a table with the gifts we ask for and their quantities.

For this we are given an array of objects with the names of the gifts and their quantities. Write a function that receives this array and returns a string with the drawn table.

printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 7        |
*******************
Another example where you can see that the table always uses only the exact space depending on the length of the names of the gifts and the quantities.

printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
])
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
As you can see, the size of the cells depends on the length of the names of the gifts and the quantities, although they will at least have to be the space of the titles Gift and Quantity respectively.

The table uses the symbols: + for the top border, * for the bottom border, - for the horizontal lines and | for the vertical lines.

Keep in mind:

Use only the space you need to draw the table.
Adapt the table to the length of the names of the gifts and the quantities or the titles of the columns.
There is no need to order the results.
The table does not end with a line break. 
*/