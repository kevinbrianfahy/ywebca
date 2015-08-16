var arrayToList = function(array) {
var last = array.length-1;
var list = null
for (index=last; index>=0; index--) {
  	var x = array[index];
  	list = {value: x, rest: list};
  }
  return list;
}

var listToArray = function(list) {
var array =[]
for (var node = list; node; node = node.rest) {
  array.push(node.value);
  }
  return array;
}










/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if (typeof Exer === 'undefined') Exer = {};

if (typeof listToArray !== 'undefined') Exer.listToArray = listToArray;
if (typeof arrayToList !== 'undefined') Exer.arrayToList = arrayToList;
if (typeof prepend !== 'undefined') Exer.prepend = prepend;
if (typeof nth !== 'undefined') Exer.nth = nth;

if (typeof arrayToDLL !== 'undefined') Exer.arrayToDLL = arrayToDLL;
if (typeof push !== 'undefined') Exer.push = push;
if (typeof pop !== 'undefined') Exer.pop = pop;
if (typeof shift !== 'undefined') Exer.shift = shift;
if (typeof unshidt !== 'undefined') Exer.unshift = unshift;

if (typeof module === 'undefined') module = {};
module.exports = Exer;
