function myFunction1 (myArgument) {}

const myArrowFunction1 = (myArgument) => {}

// error handling
const function2 = (myArgument) => {
  if (typeof myArgument !== "string") {
    throw new Error ("the argument must be a string"); 
  }  
  return; 
}



