// function findInAgenda(agenda, phone) {
//   // Code here
//   return null
// }

function findInAgenda(agenda, phone) {
  const agendaArray = agenda.split("\n"); 
  
  let matchedChildArray = []; 
  let matchedNumbers = 0; 

  for (let i = 0; i < agendaArray.length; i++) {
    const child = agendaArray[i];
    // console.log(child); 

    // find the "+"
    const childArray = child.split(""); 

    for (let j = 0; j < childArray.length; j++) {
      const character = childArray[j];
      // console.log(character); 
      if (character === "+") {
        // detect if X has 1 or 2 digits
        // console.log(child[j]); 
        // console.log(child[j + 2] === "-");
        // console.log(child[j + 3] === "-");
        const phoneLength = childArray[j + 2] === "-" ? 14 : 15;  
        // detect if phone is included in the current child phone
        const currentPhone = childArray.splice(j, phoneLength); 
        // console.log(currentPhone); 
        const matchedNumber = currentPhone.join("").includes(phone); 
        // console.log(matchedNumber); 

        if (matchedNumber) {
          matchedNumbers++; 
          // console.log(agendaArray[i]);
          // console.log(childArray);     
          matchedChildArray = childArray;
        }
        if (matchedNumbers > 1) {
          return null; 
        }
      }
    }
  }

  if (matchedNumbers === 0) return null; 

  let name = ""; 
  let address = ""; 

  let iteratingName = false; 
  // console.log(matchedChildArray);

  // after the iteration, get the data of the child ;
  for (let i = 0; i < matchedChildArray.length; i++) {
    const character = matchedChildArray[i];
    if (character === "<") {
      iteratingName = true; 
      matchedChildArray.splice(i, 1); 
      i--; 
    }
    else if (character === ">") {
      iteratingName = false; 
      matchedChildArray.splice(i, 1); 
      i--; 
    }
    else if (iteratingName) {
      name += character; 
      matchedChildArray.splice(i, 1); 
      i--; 
    }
  }
  // console.log(matchedChildArray)

  address = matchedChildArray.join("").trim(); 
  // console.log(address); 
  // console.log(name); 

  const childData = {
    name,
    address,
  }; 
  // console.log(childData); 
  return childData; 
}

// TESTS

// const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
// Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
// <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez> `
// const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>`

// findInAgenda(agenda, '34-600-123-456')
findInAgenda(agenda, '-600-123')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

// findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

// findInAgenda(agenda, '111')
// null
// Explanation: No results

// findInAgenda(agenda, '1')
// null
// Explanation: Too many results 


/* 
Santa Claus has a magic diary 📇 where he keeps the addresses of the children to deliver the presents. The problem: the diary's information is mixed and misformatted. The lines contain a magic phone number, a child's name, and their address, but everything is surrounded by strange characters.

Santa needs your help to find specific information from the diary. Write a function that, given the diary's content and a phone number, returns the child's name and address.

Keep in mind that in the diary:

Phone numbers are formatted as +X-YYY-YYY-YYY (where X is one or two digits, and Y is a digit).
Each child's name is always between < and >
The idea is for you to write a function that, given the full phone number or part of it, returns the child's name and address. If it doesn't find anything or there is more than one result, you must return null.

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null
// Explanation: No results

findInAgenda(agenda, '1')
// null
// Explanation: Too many results 
*/