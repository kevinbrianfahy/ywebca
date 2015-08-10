// I used index this way in the first part because I did not
// want to destroy the original array by using pop()
var reverseArray = function(a) {
  var newArray = [];
  for (i=a.length-1; i>=0; i--) {
	var b = a[i];
    newArray.push(b);
  }
  return newArray
}

var reverseArrayInPlace = function(a) {
  var newArray = [];
  for (i=a.length; i>0; i--) {
    newArray.push(a.pop());
  }
  for (; i<newArray.length; i++) {
    a.push(newArray[i]);
  }
  return a;
}










/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if(!Exer) Exer = {};
for (value in this)
  Exer[value] = this[value];
if(module) module.exports = Exer;
