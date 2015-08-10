/*-----------------------------    DATA SETS    -----------------------------*/

/*------------------------------    Data Sets 1    ------------------------------*/
var dataOne= function(a) {
  console.log(a[2], a[4], a[7], a[a.length-1])
}


/*-------------------------------   Data Sets 2    ----------------------------*/
var dataTwo = function(a) {
  for(i=0;i<a.length;i++) {
  console.log(a[i])
  }
}


/*-----------------------------    PROPERTIES    ----------------------------*/
var properties = function(a) {
  console.log(a.legs)
  console.log(a.isAGoodBoy);
}



/*-------------------------------    METHODS    -----------------------------*/
var methods = function(a) {
  a.bark();//logs the current .barkNoise
  if (a.isAGoodBoy() == true) {//sets value for .goodboy
    a.setBark("arf...");//accesses .barkSound
  } else {
    a.setBark("whimper");//accesses .barkSound
  }
  console.log(a.getBark());//accesses .barkSound
  a.bark();//logs the current .barkNoise
  a.isAGoodBoy(true);//sets value for .goodboy
}


/*-------------------------------    OBJECTS    -----------------------------*/
var objects = function() {
  var barkSound="BARK!";
  var fido = {
    isAgoodBoy:true,
    getBark: function() {
      return barkSound;
    },
    setBark: function(a) {
      barkSound=a;
    },
    tricks: ["roll over", "fetch", "play Beethoven's 5th"]
  };
  return fido;
}


/*----------------------------    MUTABILITY    -----------------------------*/
var mutability = function(a,b) {
  if (a==b) {
    console.log(a);
  } else if (a.color==b.color) {
    console.log("color matches");
  } else if (a.quantity==b.quantity) {
    console.log("quantity matches");
  } else if (a.isA==b.isA) {
    console.log("isA matches")
  } else console.log (a,b)
}


/*--------------------------    OBJECTS AS MAPS    --------------------------*/
var maps = function (accounts) {
  for (user in accounts)
  if (user[0] == 'T' && accounts[user].owed==0)
  console.log(user + " owes $0");
};


/*----------------------------    ARRAYOLOGY    -----------------------------*/
var arrayology = function(a) {
  for (var i=0; i<a.length; i++) {
    if (a[i]=="fnord") {
      var first=i;
      break;
    }
  }
  var split= a.slice(first+1);
  for (var i = 0; i<split.length; i++) {
    if (split[i]=="fnord") {
      var second=i;
      break;
    }
  }
  return a.slice(0,first+1).concat(split.slice(second));
};


/*-------------------    STRINGS AND THEIR PROPERTIES    --------------------*/
var strings = function(a) {
  var once = a.indexOf("fnord");
  var last = a.length;
  var split=a.slice(once+5);
  var second=split.indexOf("fnord");
  if (split.indexOf("fnord")==-1) {
    return split;
  } else {
    return a.slice(once+5,once+5+second)
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
