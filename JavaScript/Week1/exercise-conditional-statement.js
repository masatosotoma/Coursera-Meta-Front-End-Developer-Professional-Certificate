//Complete the following steps to create: Are You Old Enough?

var age = 10;
if (65 <= age) {
  console.log("Task 6: Use the += operator to accumulate values in a variable");
} else if (18 <= age && age <= 65) {
  console.log("Each month you get a salary");
} else if (age <= 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

//Code the days of the week program as a switch statement
var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Not a special day");
    break;
  case "Tuesday":
    console.log("Not a special day");
    break;
  case "Wednesday":
    console.log("Not a special day");
    break;
  case "Thursday":
    console.log("Not a special day");
    break;
  case "Friday":
    console.log("Not a special day");
    break;
  case "Saturday":
    console.log("Not a special day");
    break;
  case "Sunday":
    console.log("Do something");
    break;
  default:
    console.log("There is no such day");
}
