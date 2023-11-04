//Task1
function addTwoNums(a, b) {
  //Task3
  try {
    //Task4
    if (typeof(a) != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof(b) != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    //Task5
    console.log("Error!", err);
  }
}

//Task2
addTwoNums(5, "5");
console.log("It still works");
