Exer.isEven = function (num) {
    if (num == 0) {
      return true;
    } else if (num == 1) {
      return false;
    } else if (num <0) {
      return Exer.isEven(num+2);
    } else {
      return Exer.isEven(num-2);
    }
};
Exer.isFooDivByBar = function (foo,bar) {
    if (foo==bar) {
      return true;
    } else if (foo < bar && foo>0 && bar>0) {
      return false;
    } else if (bar<0 && foo>0) {
      return false;
    } else if (bar<0 && foo <0) {
      return Exer.isFooDivByBar(foo - (bar), bar);
    } else {
      return Exer.isFooDivByBar(foo-bar, bar);
    }  
};
Exer.isDivisibleBy = function (foo){
  var dividend = function (bar) {
    if (bar==foo) {
      return true;
    } else if (bar < foo && bar>0 && foo>0) {
      return false;
    } else if (foo<0 && bar >0) {
      return false;
    } else if (foo<0 && bar <0) {
      return dividend(bar-(foo));
    } else {
      return dividend(bar-foo);
    }
  }

  return dividend;
};


