/*-----------------------------    DATA SETS    -----------------------------*/

/*------------------------------    Data Sets 1    ------------------------------*/
var dataOne= function(array) {
  console.log(array[2], array[4], array[7], array[array.length-1])
}


/*-------------------------------   Data Sets 2    ----------------------------*/
var dataTwo = function(array) {
  for(i=0;i<array.length;i++) {
  console.log(array[i])
  }
}


/*-----------------------------    PROPERTIES    ----------------------------*/
var properties = function(object) {
  console.log(object.legs)
  console.log(object.isAGoodBoy);
}



/*-------------------------------    METHODS    -----------------------------*/
var methods = function(object) {
  object.bark();//logs the current .barkNoise
  if (object.isAGoodBoy() == true) {//sets value for .goodboy
    object.setBark("arf...");//accesses .barkSound
  } else {
    object.setBark("whimper");//accesses .barkSound
  }
  console.log(object.getBark());//accesses .barkSound
  object.bark();//logs the current .barkNoise
  object.isAGoodBoy(true);//sets value for .goodboy
}


/*-------------------------------    OBJECTS    -----------------------------*/
var objects = function() {
  var barkSound="BARK!";
  var fido = {
    isAgoodBoy:true,
    getBark: function() {
      return barkSound;
    },
    setBark: function(arg) {
      barkSound=arg;
    },
    tricks: ["roll over", "fetch", "play Beethoven's 5th"]
  };
  return fido;
}


/*----------------------------    MUTABILITY    -----------------------------*/
var mutability = function(object1, object2) {
  if (object1==object2) {
    console.log(object1);
  } else if (object1.color==object2.color) {
    console.log("color matches");
  } else if (object1.quantity==object2.quantity) {
    console.log("quantity matches");
  } else if (object1.isA==object2.isA) {
    console.log("isA matches")
  } else console.log (object1,object2)
}


/*--------------------------    OBJECTS AS MAPS    --------------------------*/
var maps = function (accounts) {
  for (user in accounts)
  if (user[0] == 'T' && accounts[user].owed==0)
  console.log(user + " owes $0");
};


/*----------------------------    ARRAYOLOGY    -----------------------------*/
var arrayology = function(array) {
  for (var i=0; i<array.length; i++) {
    if (array[i]=="fnord") {
      var first=i;
      break;
    }
  }
  var split= array.slice(first+1);
  for (var i = 0; i<split.length; i++) {
    if (split[i]=="fnord") {
      var second=i;
      break;
    }
  }
  return array.slice(0,first+1).concat(split.slice(second));
};


/*-------------------    STRINGS AND THEIR PROPERTIES    --------------------*/
var strings = function(string) {
  var once = string.indexOf("fnord");
  var last = string.length;
  var split=string.slice(once+5);
  var second=split.indexOf("fnord");
  if (split.indexOf("fnord")==-1) {
    return split;
  } else {
    return string.slice(once+5,once+5+second)
  }
};

/*------------------------   THE ARGUMENTS OBJECT    ------------------------*/
var arguments = function() {
  var numarg = 0;
  for (var i = 0; i<arguments.length; i++) {
    numarg++;
  }
  return numarg;
}


/*--------------------------    THE MATH OBJECT    --------------------------*/
var math = function(stringornumber) {
  if (stringornumber==string) {
    return Math.PI;
  } else {
    return Math.random()*stringornumber
  }
}









/* !!DANGER ZONE!! */
/*  DO NOT CROSS!  */



































// Seriously, go back!





































// I told you there was a monster at the end of this book!

if (typeof Exer === 'undefined') Exer = {};

if (typeof dataOne !== 'undefined') Exer.dataOne = dataOne;
if (typeof dataTwo !== 'undefined') Exer.dataTwo = dataTwo;
if (typeof properties !== 'undefined') Exer.properties = properties;
if (typeof methods !== 'undefined') Exer.methods = methods;
if (typeof objects !== 'undefined') Exer.objects = objects;
if (typeof mutability !== 'undefined') Exer.mutability = mutability;
if (typeof maps !== 'undefined') Exer.maps = maps;
if (typeof arrayology !== 'undefined') Exer.arrayology = arrayology;
if (typeof strings !== 'undefined') Exer.strings = strings;
if (typeof arguments === 'function') Exer.arguments = arguments;
if (typeof math !== 'undefined') Exer.math = math;

if (typeof module === 'undefined') module = {};
module.exports = Exer;
