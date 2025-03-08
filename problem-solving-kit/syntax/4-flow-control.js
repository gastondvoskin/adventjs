const validateAge = (age) => {
  if (age < 18) return "young";   
}


const validateAgeAndName = (age, name) => {
  const firstCharacter = name[0]; 

  let price = ""; 

  if (firstCharacter === "c" && age <= 18) {
    price = "price 1";
  } else if (firstCharacter === "j" && age > 25 && age < 35) {
    price = "price 2"; 
  } else {
    price = "bad luck"; 
  }

  return price; 
}


console.log(validateAgeAndName(18, "charles")); 
console.log(validateAgeAndName(27, "james")); 
console.log(validateAgeAndName(21, "james")); 
console.log(validateAgeAndName(27, "charles")); 
