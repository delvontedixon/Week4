/* 
Function: speakFriend

Write a Function named speakFriend that takes one parameter.
In the body of the Function, return the String "Access Denied"
Except if the passed in value is equal to "Mellon", then return the String "Enter"
Note: The Function has already been invoked for you, using the given variable a as the argument (see the last line of code)
*/
var myFruit = "Mellon";
var myBasket = 123;

// Step 1 write a function named speakFriend
// Step 2 create a parameter in speakFriend function
function speakFriend(sky) {
  console.log(" running speakFriend function... ", sky);

  // Step 3 If sky is equal to Mellon then return the string enter - otherwise return access denied
  if (sky === "Mellon") {
    console.log("Hello");
    return sky + " Hello ";
  } else if (myBasket === 123 && "Mellonhh") {
    console.log("i have this much fruit", myBasket);
  }
  // if its not mellon then its something else
  else {
    console.log("Access");
  }
}

// Calling speak friend method and passing in a variable
console.log("calling funtion;", speakFriend(myFruit));
