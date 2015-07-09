/*---------------------    EXPRESSIONS AND STATEMENTS    ---------------------*/

// Expressions 1 (first two green dots)
// Make the function return a nested expression (use parentheses) whose
// evaluated value is not undefined.
Exer.expressions1 = function () {

  return (1);

};

/* jshint ignore:start */

// Statements 1  (dots 3&4)
Exer.statements1 = function () {

  // Write a statement that is not undefined.
  "aldfdla";
};
/* jshint ignore:end */

/*-----------------------------    VARIABLES    ------------------------------*/

// Variables 1 (dots 5 - ?)
Exer.variables1 = function () {

  // Write a statement that declares a variable. dot 5
  var q;
  // Return that variable.
  return q;
  };

// Variables 2
Exer.variables2 = function () {

  // Write a statement that declares a variable. dot 6
var q;
  // Write a statement to assign a number value to your variable.
q = 5;
  // Return the variable.
return q;
};

// Variables 3
Exer.variables3 = function () {

  // Write a statement that declares a variable and initializes it to a string.
var q = "string";
  // Return the variable.
return q;
};

// Variables 4
Exer.variables4 = function ( n ) {

  // Return the parameter.
return n;
};

// Variables 5
Exer.variables5 = function ( n ) {

  // Declare a new variable and initialize it to the value of `n`.
var lmnop = n;
  // Return the new variable.
return lmnop;
};

// Variables 6
Exer.variables6 = function ( stacys ) {

  // You have 3 apples
  // (declare a variable named `apples` and initialize it to `3`)
  var apples = 3;

  // Stacy gives you more apples
  // (the parameter `stacys`)
  apples = apples + stacys;

  // Return the total number of apples you have.
return apples;
};

// Variables 7
// You have a certain amount of pocket change given by the parameter provided
Exer.variables7 = function ( change ) {

  // You find a quarter.
  // Then you spend a dime on old fashioned candy.
  // How much money do you have now?
  change = change + .25;
  change = change - .1;
  // Use type coercion to turn your pocket change into a string add a dollar
  // sign to the beginning.
 change = "$" + change;
  // Return that string.
return change;
};


/*--------------------    KEYWORDS AND RESERVED WORDS    ---------------------*/

// Keywords 1
// Uncomment the following function by removing the slash-asterisk pairs.
// Fix the function so no keywords or reserved words are improperly used.

Exer.keywords1 = function ( one, two ) {
  var a = 2;
  var b = two+2;
  one += "2";
  var c = a + b + one + two;
  return c;
  }     

/*
Exer.keywords1 = function ( true, two ) {
  var new = 2;
  var const = two+2;
  true += "2";
  var function = new + const + true + two;
  return function;
};
*/
/*--------------------------    THE ENVIRONMENT    ---------------------------*/

// Enviroment 1
// Uncomment the line that does not return an evironment variable.
Exer.environment1 = function () {

  // return window;
  // return document;
  // return history;
   return browser;
  // return navigator;

};

/*------------------------------    FUNCTIONS    -----------------------------*/

// Functions 1
// Call setPowerLevel and pass it a value over 9000.
// Call cornTortilla and pass it the values "chicken", "queso", "bacon", and
// "lime".
Exer.functions1 = function (recombobulate, setPowerLevel, cornTortilla) {

  recombobulate();
  setPowerLevel(9001);
  cornTortilla("chicken", "queso", "bacon", "lime");

};


/*----------------------    THE CONSOLE.LOG FUNCTION    ----------------------*/

// Console 1
Exer.console1 = function () {

  // Output something to the console.
console.log("Hello World")
};

// Console 2
Exer.console2 = function ( printme ) {

  // Print the parameter `printme` to the console.
console.log(printme)
};

// Console 3
// Use the provided parameter `data` and string concatenation to output
//     The magic word is "xxxxx"
// to the console, where the `xxxxx` is the value provided in `data`. Do not
// change the value of the variable `data`.
Exer.console3 = function ( data ) {

  // your answer here
  console.log("The magic word is " + "\"" + data + "\"")

};

// Console 4
Exer.console4 = function () {

  // Use comma-separated values to output two things to the console with one
  // call.
console.log("10/5 = ", 10/5)
};

// Console 5
// Do not change the value of the variable `y`.
Exer.console5 = function ( x, y ) {

  // Output the first parameter `x` to the console.
console.log(x)
  // Make the function return the parameter `y` plus 1.
return y += 1
};

/*---------------------------    RETURN VALUES    ----------------------------*/

// Return 1
// Call and log out the result of `magicFunc`.
Exer.return1 = function () {

  // your work goes here
console.log(magicFunc())
};

// Return 2
// Call and return the result of `magicFunc`.
Exer.return2 = function () {

  // your work goes here
return magicFunc();
// I am getting this correct, but I do not understand
// how this is different than the "Return 1" question. I am under the impression
// using console.log causes the result of 'magicFunc' to be returned, so asking
// the computer to return the result of 'magicFunc' after logging it seems
// redundant
};

// Return 3
Exer.return3 = function () {

  // Call `strShift` with the argument "abczABCZ". Log the result.
var me = strShift("abczABCZ")
console.log(me)
  // Return that same result with "123" concatenated to the end.
  me = me + "123";
  return me;

  // why doesn't the below work?
  // return strShift("abczABCZ") + "123";
};

// Return 4
// Log the result of the string concatenation of two separate calls to
// `magicFunc`.
Exer.return4 = function () {
console.log(magicFunc()+ "" + magicFunc())

};

// Return 5
// Shift the string "abcABC123!@#" with strShift.
// Shift the string "a S d F j K l" with strShift twice.
// Return the result of these two shifted strings passed into `strShuffle` with
// the first string as the first argument and the second string as the second
// argument.

Exer.return5 = function () {

  // Declare and initialize a variable for the first string.
var a = strShift("abcABC123!@#");
  // Declare and initialize a variable for the second string.
// why doesn't this work? var b = strShift(strShift("a S d F j K l"));
var once = strShift("a S d F j K l");
var b = strShift(once);
  // A return statement.
return strShuffle(a, b)
};

/*-------------------------    PROMPT AND CONFIRM    -------------------------*/

// Prompt 1
// Call prompt with the string and return the result.
Exer.prompt1 = function () {

  // Your work here
return prompt("What is the answer to the meaning of life, the universe, and everything?", "...");

};

// Confirm 1
// Call confirm with the string and return the result.
Exer.confirm1 = function () {

  // Your work here
return confirm("Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!");

};

/*----------------------------    CONTROL FLOW    ----------------------------*/

// Control 1
Exer.control1 = function () {

  // Use prompt to get a number from a user
var number = prompt("pick a number", "");
  // Print that number to the console
  console.log(number)

};

// Control 2
Exer.control2 = function ( bar ) {

  // Declare a variable named `foo`.
var foo;
  // Initialize `foo` with a string.
foo = "string";
  // Log `foo` to the console.
console.log(foo)
  // Concatenate the parameter `bar` to be beginning and end of `foo`
  // Save the result in a new variable called `ding`.
var ding = bar + foo + bar;
  // Call `strReverse` and pass it `ding` (as an argument).
  // Send the result to the user in a confirm window.
   //confirm(strReverse(ding));
  // Save the user's response in a new variable called `quux`.
var quux = confirm(strReverse(ding));
  // Return the opposite of `quux`.
return ! quux;
};

/*-----------------------    CONDITIONAL EXECUTION    ------------------------*/

// Conditional 1
// Expect `isSerious` to be a boolean
Exer.condition1 = function ( isSerious ) {

console.log("Welcome to Camelot!");
if (isSerious==false)
  console.log("On second thoughts, let's not go to Camelot. It is a silly place.");

  // If `isSerious` is false, output the message:
  //     On second thoughts, let's not go to Camelot. It is a silly place.
};

  // Conditional 2
// Expect `temperature` to be a number
Exer.condition2 = function ( temperature ) {

  // If temperature is greater than or equal to 70
  // Then output:
  //     Hermit crab warning!
if (temperature >= 70)
  console.log("Hermit crab warning!")
  // Otherwise, output
  //     Catch of the day: influenza, $14/lb.
else 
  console.log("Catch of the day: influenza, $14/lb.")
  // In either case, also print
  //     Thanks for visiting Pier One and Three Quarters!
console.log("Thanks for visiting Pier One and Three Quarters!")
};

// Conditional 3
// Expect `whatDay` to be a string
Exer.condition3 = function ( whatDay ) {

  // Declare and initialize `luckyNumber`
var luckyNumber = 7
  // If the length of `whatDay` is 6 or less...
if (whatDay.length <= 6)
  luckyNumber = luckyNumber + "!";
  // If `whatDay` is "Mannersday"...
if (whatDay == "Mannersday")
  luckyNumber = luckyNumber + 4;
  // If `whatDay` is "Foosday"...
else if (whatDay == "Foosday")
  luckyNumber = luckyNumber + 2;
  // If `whatDay` is "Heyday"...
else if (whatDay == "Heyday")
  luckyNumber += luckyNumber.charAt(0);
  // Otherwise...
else 
  luckyNumber = Infinity
  // Return `luckyNumber`
return luckyNumber
};

// Conditional 4
Exer.condition4 = function () {

  // Prompt the user
var num = Number(prompt("Enter today's date, please."));
  // If the user's input is not a number...
  if (isNaN(num))
    console.log("What do you think this is, bub? Wonderland?")
  // Otherwise...
    // If the user's input is less than 1...
    else if (num < 1)
      console.log("Negativelaaaaaaand~!")
    // If the user's input is greater than 31...
    else if (num > 31)
      console.log("Are they paying you overtime for this?")
    // If the user's input between 29 and 31, inclusive...
    else if (num >=29 && num<= 31)
      console.log("I sure hope it isn't February.")
    // Otherwise...
    else 
      console.log("Did you know? There are exactly " + num + " ways to make today awesome!")
};

/*----------------------    WHILE AND DO WHILE LOOPS    ----------------------*/

// While 1
// Turn the code in the function into a while loop.
Exer.while1 = function () {
  //console.log("10 sheep");
  //console.log("9 sheep");
  //console.log("8 sheep");
  //console.log("7 sheep");
  //console.log("6 sheep");
  //console.log("5 sheep");
  //console.log("4 sheep");
  //console.log("3 sheep");
  //console.log("2 sheep");
  //console.log("1 sheep");
var num = 10;
while (num > 0) {
  console.log(num + " sheep");
  num = num - 1;
}
};

/* jshint ignore:start */
// While 2
// Recreate the code in the function without a loop
Exer.while2 = function () {
  
var deadWitch = "I'm melting!";
console.log(deadWitch)
deadWitch = deadWitch.substr(2)
console.log(deadWitch)
deadWitch = deadWitch.substr(2)
console.log(deadWitch)
deadWitch = deadWitch.substr(2)
console.log(deadWitch)
deadWitch = deadWitch.substr(2)
console.log(deadWitch)
deadWitch = deadWitch.substr(2)
console.log(deadWitch)
console.log("What a world!")
};
/* jshint ignore:end */

// doWhile 1
// Turn the code in the function into a single do while loop.
// Hint: 0, 1, and 2 are remainders from dividing numbers by 3.
Exer.doWhile1 = function () {
//  console.log(0);
//  console.log(1);
//  console.log(2);
//  console.log(0);
//  console.log(1);
//  console.log(2);
var num = 3;
do {
  console.log(num%3);
  num++;
  } 
while (num < 9 );
};

/* jshint ignore:start */
// doWhile 2
// Recreate the code in the function without a loop
Exer.doWhile2 = function () {

var trainNum = 1;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
};
/* jshint ignore:end */

/*---------------------------    INDENTING CODE    ---------------------------*/

// Indenting 1
// Correctly indent the following code block using TWO spaces for each block
Exer.indenting1 = function() {
  var firstName = "Zachery";
  var lastName = "Moneypenny";
  if(firstName === "Zachery") {
    lastName = "Johnson";
  }
};

// Indenting 2
// Correctly indent the following code block using FOUR spaces for each block
Exer.indenting2 = function() {
    var firstName = "Penny";
    var lastName = "Moneywhistle";
    if(firstName === "Penny") {
        lastName = "Johnson";
    }
};

/*-----------------------------    FOR LOOPS    ------------------------------*/

// For 1
// Rewrite the loop as a linear sequence of statements.
Exer.for1 = function () {
var scream = "...";
console.log(scream);
scream = "    " + scream ;
scream += "AA";
console.log(scream); 
scream = "    " + scream;
scream += "AA";
console.log(scream); 
scream = "    " + scream;
scream += "AA";
console.log(scream); 
scream = "    " + scream;
scream += "AA";
console.log(scream); 
scream = "    " + scream ;
scream += "AA";
scream += "H!";
console.log( scream );
};

//original question
//  var scream;
//  for ( scream = "..." ; scream.length < 28; scream += "AA" ) {
//    console.log( scream );
//    scream = "    " + scream;
 // }
 // scream += "H!"
//  console.log( scream );


/* jshint ignore:start */
// For 2
// Rewrite the repetative code with for loops.
Exer.for2 = function () {
for (var x=0; x<2; x++) {
  console.log("Hi!");
  for (var y=0;y<3; y++){
  console.log("My name is");
  }
  console.log("Slim Shady")
}
};
 //original question
 // console.log( "Hi!" );
//  console.log( "My name is" );
//  console.log( "My name is" );
//  console.log( "My name is" );
//  console.log( "Slim Shady" );
//  console.log( "Hi!" );
//  console.log( "My name is" );
//  console.log( "My name is" );
//  console.log( "My name is" );
//  console.log( "Slim Shady" );


/* jshint ignore:end */

// For 3
// Write a loop that counts backwards from 20 to 5 and prints the number and
// "even" if the number is even and "odd" if the number is odd.
Exer.for3 = function () {

  // Your work here
for (x=20;x>4;x--) {
  if (x%2==0)
  console.log(x, "even");
  else console.log(x, "odd");
}

};

/*-----------------------    BREAKING OUT OF A LOOP    -----------------------*/

// Breaking 1
// Use a break to stop this infinite loop
Exer.breaking1 = function(yeng) {

  while(yeng()) {
break;
  }

};

// Breaking 2
// Every time theatre.current() is called it returns a string, break when that string is
// "Electric Boogaloo!"
Exer.breaking2 = function(theatre) {

  while (theatre.next()) {
    console.log(theatre.current());
    if (theatre.current() === "Electric Boogaloo!") {
      break;
    }
  }

};

/*-------------------    UPDATING VARIABLES SUCCINCTLY    --------------------*/

// Succinct 1
Exer.succinct1 = function ( kiwis ) {

  // Quadruple kiwis.
kiwis *=4
  // Reduce kiwis by 2.
kiwis -=2
  // Halve kiwis.
kiwis /=2
  // Concatenate " handsomely hirsute kiwis" to kiwis.
kiwis += " handsomely hirsute kiwis"
  // Return kiwis.
return kiwis
};

// Succinct 2
// Edit the for loop to use the incrementation operator.
Exer.succinct2 = function () {

  for ( var hippo = 2; hippo <= 10; hippo++ ) {
    console.log( hippo + "! " + hippo + " fluttering hippos! Ah ah ah ah ah!" );
  }

};
//for ( var hippo = 2; hippo <= 10; hippo += 1 ) {
//    console.log( hippo + "! " + hippo + " fluttering hippos! Ah ah ah ah ah!" );
//  }
// Succinct 3
// Correct the decrementation operator error.
Exer.succinct3 = function () {

  var message = "Reverse me!";
  var pointer = message.length;
  while( pointer > 0 ) {
    console.log( message.charAt( --pointer ) );
  }

};

/*-----------------    DISPATCHING ON A VALUE WITH SWITCH    -----------------*/

// Switch 1
Exer.switch1 = function ( animal ) {

  var output = 'The ' + animal + ' goes "';

  // Create a switch that dispatches on the parameter `animal`.
  // In each case, concatenate the correct response to end of the `output`
  // string.
switch (animal){
    // "cow": "foo"
  case "cow":
  output += "foo"
  break;
    // "sheep": "bar"
  case "sheep":
  output += "bar";
  break;
    // "duck": "quux"
  case "duck":
  output += "quux";
  break;
    // default: "ring-a-ding-ding-dingding-ding-a-ding-ding"
  default:
  output += "ring-a-ding-ding-dingding-ding-a-ding-ding";
}
  output += '"!';
  console.log( output );

};

/*---------------------------    CAPITALIZATION    ---------------------------*/

/* jshint ignore:start */
Exer.capitalization1 = function() {

  var zero = 0;
  var happyCat = new String("How did this get here! I'm not good at computer!");
  for (var index = 0; i < happyCat.length; index++) {
    if (index % 4 == zero) {
      console.log(happyCat);
    }
  }

};
// var ZeRo = 0;
//  var HAPPYCAT = new string("How did this get here! I'm not good at computer!");
//  for (var Index = 0; I < HAPPYCAT.Length; Index++) {
//    if (Index % 4 == ZeRo) {
//      Console.Log(HAPPYCAT);
//    }
//  }
  /* jshint ignore:end */

/*------------------------------    COMMENTS    ------------------------------*/

Exer.comments1 = function ( war, missiles, wood, sheep, brick ) {

  if ( war ) {
    if ( missiles ) {
     // missiles.launch();
    } else {
      cower();
      //I like wheat
    }
  } else {
    if ( wood ) {
      wood.trade( sheep, 1 );
    } else if ( sheep ) {
      sheep.trade( wood, 3 );
    } else {
      brick.buy(2);// I hate bandits!
    }
  }

};

Exer.comments2 = function () {

  /* 

+       +
    |
 ~~~~~~~
 
*/


};
/*Exercise 1
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######*/
var x = "#"
while (x.length<8){
  console.log(x)
  x+="#"
}
/*
Exercise 2
Write a program that uses console.log to print all the numbers from 1
to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
instead of the number, and for numbers divisible by 5 (and not 3),
print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz",
for numbers that are divisible by both 3 and 5 (and still print "Fizz"
or "Buzz" for numbers divisible by only one of those).*/



