var range = function(numStart, numEnd, increment) {
  var startToEnd = [];
  if (arguments.length ==3 && increment>0) {
    for (var counter = numStart; counter<=numEnd; counter+=increment) {
    startToEnd.push(counter);
    }
  } else if (arguments.length ==3 && increment<0) {
    for (var counter = numStart; counter>=numEnd; counter+=increment) {
    startToEnd.push(counter);
    }

  } else if (arguments.length==2) {
      for (var counter = numStart; counter<=numEnd; counter++) {
      startToEnd.push(counter);
      }
  }
return startToEnd;
}

var sum = function(numbersarray) {
  var addnumbersarray = 0;
  for (var index= 0; index<numbersarray.length; index++) {
    addnumbersarray+=numbersarray[index];
  }
  return addnumbersarray;
}

var encrypt = function(string, keyLetter) {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var keyNumber = 0;
    var encryptedString = "";
    for (var alphIndex=0; alphIndex<alphabet.length; alphIndex++) {
        if (keyLetter == alphabet[alphIndex]) {
            keyNumber = alphIndex;
        };
    };
    for (var stringIndex=0; stringIndex<string.length; stringIndex++) {
        for (var alphIndex=0; alphIndex<alphabet.length; alphIndex++) {
            if (string[stringIndex]==alphabet[alphIndex]) {
                encryptedString += alphabet[alphIndex+keyNumber];
            };
        };
    };

    return encryptedString;
};


var decrypt = function(string, keyLetter) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var keyNumber = 0;
  var decryptedString = "";
  for (var alphIndex=0; alphIndex<alphabet.length; alphIndex++) {
      if (keyLetter == alphabet[alphIndex]) {
          keyNumber = alphIndex;
      };
  };
  for (var stringIndex=0; stringIndex<string.length; stringIndex++) {
      for (var alphIndex=0; alphIndex<alphabet.length; alphIndex++) {
          if (string[stringIndex]==alphabet[alphIndex]) {
              decryptedString += alphabet[alphIndex-keyNumber];
          };
      };
  };

  return decryptedString;
};







/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if (typeof Exer === 'undefined') Exer = {};

if (typeof range !== 'undefined') Exer.range = range;
if (typeof sum !== 'undefined') Exer.sum = sum;
if (typeof encrypt !== 'undefined') Exer.encrypt = encrypt;
if (typeof decrypt !== 'undefined') Exer.decrypt = decrypt;

if (typeof module === 'undefined') module = {};
module.exports = Exer;
