// function calculatePrice(ornaments) {
//   // Code here
//   return 0      
// }

function calculatePrice(ornaments) {
  const prices = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100,
  }; 
  
  const pricesKeys = Object.keys(prices);

  let price = 0; 
  const ornamentsArray = ornaments.split("");

  for (let i = 0; i < ornamentsArray.length; i++) {
    const ornament = ornamentsArray[i];
    if (!pricesKeys.includes(ornament)) {
      return undefined;
    }    
  }; 

  for (let i = 0; i < ornamentsArray.length; i++) {
    const ornament = ornamentsArray[i];
    const nextOrnament = ornamentsArray[i + 1];

    let ornamentPrice = prices[ornament]; 
    const nextOrnamentPrice = prices[nextOrnament]; 

    if (ornamentPrice < nextOrnamentPrice) {
      ornamentPrice = -ornamentPrice;
    }

    price += ornamentPrice; 
  }

  return price;  
}

// TEST 
console.log(calculatePrice('*o#'));   
console.log(calculatePrice('*bo'));   

console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'))   // 4   (5 - 1)
console.log(calculatePrice('o*'))   // 6   (5 + 1)
console.log(calculatePrice('*o*'))  // 5  (-1 + 5 + 1) 
console.log(calculatePrice('**o*')) // 6  (1 - 1 + 5 + 1) 
console.log(calculatePrice('o***')) // 8   (5 + 3)
console.log(calculatePrice('*o@'))  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'))   // 49  (-1 + 50)
console.log(calculatePrice('@@@'))  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'))   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'))  // undefined (Z is unknown) 



/* 
EXERCISE
You are in a very special market where Christmas trees 🎄 are sold. Each one comes decorated with a series of very peculiar ornaments, and the price of the tree is determined by the ornaments it has.

*: Snowflake - Value: 1
o: Christmas Ball - Value: 5
^: Decorative Tree - Value: 10
#: Shiny Garland - Value: 50
@: Polar Star - Value: 100
Normally, you would sum up all the values of the ornaments and that's it…

But, watch out! If an ornament is immediately to the left of another of greater value, instead of adding, its value is subtracted.

calculatePrice('***')  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z is unknown) 
*/