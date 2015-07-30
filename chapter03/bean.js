Exer.countBs = function (string) {
  var B=0
  for (index=0; index<string.length; index++) {
    if (string.charAt(index)=="B") {
      B+=1;
    }
  }
  return B;
};

Exer.countChar = function (string, character) {
  var count=0;
  for (index=0; index<string.length; index++) {
    if (string.charAt(index)==character) {
      count+=1;
    }
  }
  return count;
};

Exer.countCharX = function (char) {
  var howmany= function (string) {
    var count=0
    for (index=0;index<string.length; index++) {
      if (string.charAt(index)==char) {
        count+=1;
      }
    }
    return count;
  }
  return howmany;
};

 