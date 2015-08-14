// I used index this way in the first part because I did not
// want to destroy the original array by using pop()
var reverseArray = function(array) {
  var newArray = [];
  for (var index = array.length - 1; index >= 0; index--) {
	var arrayelement = array[index];
    newArray.push(arrayelement);
  }
  return newArray
}

var reverseArrayInPlace = function(array) {
  var newArray = [];
  for (var index = array.length; index > 0; index--) {
    newArray.push(array.pop());
  }
  for (; index < newArray.length; index++) {
    array.push(newArray[index]);
  }
  return array;
}

var reverseArrayRecur = function(array){
   var newArray = [];
   var emptyArray = function() {
       var element = array.pop();
       if (element != undefined) {
         newArray.push(element);
         emptyArray();
       }
   }
   emptyArray();
   var fillArray = function() {
  	   var element = newArray.pop();
       if (element != undefined) {
         fillArray();
         array.push(element);
       }
  }
  fillArray()
  return array;
};






/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if (typeof Exer === 'undefined') Exer = {};

if (typeof reverseArray !== 'undefined') Exer.reverseArray = reverseArray;
if (typeof reverseArrayInPlace !== 'undefined') Exer.reverseArrayInPlace = reverseArrayInPlace;
if (typeof reverseArrayRecur !== 'undefined') Exer.reverseArrayRecur = reverseArrayRecur;

if (typeof module === 'undefined') module = {};
module.exports = Exer;
