//Defining a Function
var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));
// → 1024

//Recursion
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8

//Nested Scope
//The flat and mountain functions can “see” the variable called result,
// since they are inside the function that defines it. But they cannot
// see each other’s count variables since they are outside each other’s scope.
//In short, each local scope can also see all the local scopes that contain it.
//This approach to variable visibility is called lexical scoping.
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
// → ___/''''\______/'\_



// Closure
// This feature — being able to reference a specific instance of local
// variables in an enclosing function — is called closure.
// A function that “closes over” some local variables is called a closure.
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
/* I'd be confused by this if return localVariable was outside of the body
of the wrapValue function, but it's not. I don't see why this is considered
confusing, so I feel I must be missing something.
*/
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
  
var twice = multiplier(2);
console.log(twice(5));
// → 10
/*

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

console.log(function multiplier(factor)==function(number))



var square=function(x) {
  return x * x;
};

var square2=square
var x=1
console.log(square(x)==x*x)
console.log((function(y) {
  return y * y;
})(x)==x*x);
*/