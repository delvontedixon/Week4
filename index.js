console.log("Hello!");
var num1 = 25;
var num2 = 18;
var num3 = 43; //number of apples
console.log(num1 === 25 && num2 === 5);
if (num1 === 25 && num2 === 17) {
  console.log("A");
}
//beginning of else if statement
else if (num1 > num2) {
  console.log("B");
  //beginning of nested if statement
  if (num3 === 43) {
    console.log("this is my num3:", num3);
  }
  //end of nested if statement
} //end of els if statement

//beginning of else statement
else {
  comsole.log("C");
}

/*
Create a nested if statement (the second if statement will only run if the first one evaluates to true) that does the following:
The first if statement will check to see if num1 is greater than or equal to num2 .
If the first if statement evaluates to true, then check to see if num3 is greater than or equal to num4.
If both conditions are true, print: "Both statements are true."
If the first condition is true but the second is false, print: "The first statement is true, but the second is not."
In all cases, after the outer if statement, print "Program ended." to the console.
*/

//Step one - create a nested if statement
// Step 2 find out if num1 is >= num 2
